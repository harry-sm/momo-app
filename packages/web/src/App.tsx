import React from "react";
import "./App.css";
import { Button } from "@mono/common";
import { getNames } from "@mono/common/dist/Utilities/getNames";

function App() {
  return <Button styles={{ x: "color" }}>{getNames(1)}</Button>;
}

export default App;
