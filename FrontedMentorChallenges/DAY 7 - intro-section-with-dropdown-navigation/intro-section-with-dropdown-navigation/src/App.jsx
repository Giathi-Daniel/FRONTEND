import React, { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Navigation from "./Components/Navigation/Navigation";
import Landing from "./Components/Page/Landing";

function App() {
  return (
    <div>
      <h1>Hello World</h1>,
      <Navigation />
      <Landing />
    </div>
  );
}

export default App;
