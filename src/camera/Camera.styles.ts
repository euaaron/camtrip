import styled from "styled-components";

type VideoProps = {
  flipped?: boolean;
  hue?: number;
  contrast?: number;
  brightness?: number;
  saturation?: number;
  grayScale?: boolean;
  invert?: boolean;
  sepia?: boolean;
};

export const CameraContainer = styled.div<VideoProps>`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #101216;

  video {    
    width: 100vw;
    height: 100vh;
    object-fit: cover;
    object-position: center;
    ${({ flipped }) => flipped && "transform: scaleX(-1)"}
    ${({ hue }) => hue && `filter: hue-rotate(${hue}deg);`}
    ${({ contrast }) => contrast && `filter: contrast(${contrast});`}
    ${({ brightness }) => brightness && `filter: brightness(${brightness});`}
    ${({ saturation }) => saturation && `filter: saturate(${saturation});`}
    ${({ grayScale }) => grayScale && `filter: grayscale(1);`}
    ${({ invert }) => invert && `filter: invert(1);`}
    ${({ sepia }) => sepia && `filter: sepia(1);`}
  }
`;

type OverlayProps = {
  hide?: boolean;
};

export const Overlay = styled.div<OverlayProps>`
  left: 0;
  bottom: 0;
  position: absolute;
  display: ${({ hide }) => (hide ? "none" : "flex")};
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 20vh;
  background: #e3e6f1;
  border-radius: 1rem 1rem 0 0;

  hr {
    width: 60vw;
    height: 0.5rem;
    background: #d5d9e4;
    border-radius: 5rem;
    border: none;
    margin: 1rem;
  }

  div.container {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-evenly;
    gap: 1rem;
    width: 100vw;
    height: 20vh;

    > button {
      display: flex;
      align-items: center;
      justify-content: center;

      border-radius: 1rem;
      border: solid 1px #b2b5be;
      background-color: #e3e7f1;
      color: #101216;

      font-size: 2rem;
      padding: 1rem;
    }
  }

  @media screen and (orientation: landscape) {
    height: 100vh;
    width: 20vw;
    border-radius: 0 1rem 1rem 0;
    flex-direction: row-reverse;
    justify-content: center;

    hr {
      height: 60vh;
      width: 1rem;
    }

    div.container {
      flex-direction: column;
      height: 100vh;
      width: 20vw;
    }
  }
`;
