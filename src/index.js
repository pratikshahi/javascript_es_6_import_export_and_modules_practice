import React from "react";
import ReactDOM from "react-dom";
//import pie, { doublePi, triplePi } from "./math";
//for default import name doesnt matter ,but for other import name shout be same

import * as pie from "./math";
// * is doscouraged cause it imports all even if we need particula
ReactDOM.render(
  <ul>
    <li>{pie.default}</li>
    <li>{pie.doublePi()}</li>
    <li>{pie.triplePi()}</li>
  </ul>,
  document.getElementById("root")
);
