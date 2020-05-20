import React from "react";
import "./assets/scss/main.scss";
import AnimateOnScroll from "./components/AnimateOnScroll/AnimateOnScroll";
import BlobBackground from "./components/BlobBackground/BlobBackground";

//Choose the project from the "components" folder to see the example
function App() {
  return (
    <div className="App">
      <BlobBackground />
      <AnimateOnScroll />
    </div>
  );
}

export default App;
