import React from "react";
import ReactDOM from "react-dom";
import { createGlobalStyle } from "styled-components";
import App from "./App";

const Styles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing:border-box;
  }
  body {
    font-family:'Poppins', sans-serif;
    background: #242424;
    line-height: 16px;
  }
   progress::-webkit-progress-bar {
  /* style rules */
  background:#fff;
}
progress::-webkit-progress-value {
  /* style rules */
  background-image:
	   -webkit-linear-gradient(-45deg, 
	                           transparent 33%, rgba(0, 0, 0, .1) 33%, 
	                           rgba(0,0, 0, .1) 66%, transparent 66%),
	   -webkit-linear-gradient(top, 
	                           rgba(255, 255, 255, .25), 
	                           rgba(0, 0, 0, .25)),
	   -webkit-linear-gradient(left, #00b894, #00b894);
    border-radius: 2px; 
    background-size: 35px 20px, 100% 100%, 100% 100%;
}
`;

ReactDOM.render(
  <React.StrictMode>
    <Styles />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
