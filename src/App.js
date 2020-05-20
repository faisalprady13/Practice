import React from "react";
import "./assets/scss/main.scss";
import AnimateOnScroll from "./components/AnimateOnScroll/AnimateOnScroll";
import BlobBackground from "./components/BlobBackground/BlobBackground";
import WavyBackground from "./components/WavyBackground/WavyBackground";

//Choose the project from the "components" folder to see the example
function App() {
  return (
    <div className="App">
      <BlobBackground />
      <WavyBackground />
      <AnimateOnScroll />
    </div>
  );
}

export default App;
