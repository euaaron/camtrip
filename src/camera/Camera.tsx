import { Component } from "react";
import { FaMicrophone, FaMicrophoneSlash } from "react-icons/fa";
import { ImContrast } from "react-icons/im";
import { MdOutlineCameraswitch } from "react-icons/md";
import { VscMirror } from "react-icons/vsc";
import Webcam from "react-webcam";
import { CameraContainer, Overlay } from "./Camera.styles";

type CameraState = {
  isAudioEnabled: boolean;
  camera: string;
  flipped: boolean;
  hue: number;
  contrast: number;
  brightness: number;
  saturation: number;
  grayScale: boolean;
  invert: boolean;
  sepia: boolean;
  hideOverlay: boolean;
};

class Camera extends Component<{}, CameraState> {
  cameras = ["user", "environment"];

  constructor(props: {}) {
    super(props);
    this.state = {
      isAudioEnabled: false,
      camera: "user",
      brightness: 0,
      contrast: 0,
      flipped: false,
      grayScale: false,
      hue: 0,
      invert: false,
      sepia: false,
      saturation: 0,
      hideOverlay: false,
    };
  }

  toggleCamera() {
    const { camera } = this.state;
    const nextCamera =
      this.cameras[(this.cameras.indexOf(camera) + 1) % this.cameras.length];
    this.setState({ camera: nextCamera });
  }

  render() {
    const {
      isAudioEnabled,
      camera,
      flipped,
      hue,
      contrast,
      brightness,
      saturation,
      grayScale,
      invert,
      sepia,
      hideOverlay,
    } = this.state;

    const videoConstraints = {
      facingMode: camera,
      frameRate: { max: 90, min: 30 },
      width: { ideal: 1280 },
    };

    return (
      <CameraContainer flipped={flipped} grayScale={grayScale}>
        <Webcam
          audio={isAudioEnabled}
          screenshotFormat="image/jpeg"
          videoConstraints={videoConstraints}
          onClick={() => this.setState({ hideOverlay: !hideOverlay })}
        />
        <Overlay className="footer" hide={hideOverlay}>
          <hr />
          <div className="container">
            <button
              onClick={() => this.setState({ isAudioEnabled: !isAudioEnabled })}
            >
              {isAudioEnabled ? <FaMicrophone /> : <FaMicrophoneSlash />}
            </button>

            <button onClick={() => this.toggleCamera()}>
              <MdOutlineCameraswitch />
            </button>

            <button onClick={() => this.setState({ flipped: !flipped })}>
              <VscMirror />
            </button>
          </div>

          <button onClick={() => this.setState({ grayScale: !grayScale })}>
            <ImContrast />
          </button>
        </Overlay>
      </CameraContainer>
    );
  }
}

export default Camera;
