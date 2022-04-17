import { KeepAwake } from "@capacitor-community/keep-awake";
import { StatusBar } from "@capacitor/status-bar";
import { AppContainer, NormalizeStyle } from "./App.styles";
import Camera from "./camera/Camera";

function App() {  
  StatusBar.hide();
  KeepAwake.keepAwake();

  return (
    <AppContainer>
      <NormalizeStyle />
      <Camera />
    </AppContainer>
  );
}

export default App;
