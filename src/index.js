import { StrictMode } from "react";
import ReactDOM from "react-dom";

import Covid from "./Covid";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Covid />
  </StrictMode>,
  rootElement
);
