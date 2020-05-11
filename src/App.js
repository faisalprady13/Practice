import React from "react";
import "./App.css";
import Title from "./components/fixedBackground/Title/Title";

function App() {
  return (
    <div className="App">
      <p>FIXED BACKGROUND</p>
      <Title name="color-background" />
      <Title name="food-background" />
      <Title name="car-background" />
    </div>
  );
}

export default App;
