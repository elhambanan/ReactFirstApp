import React from "react";
import  ReactDOM  from "react-dom";
import App, {appName, userName} from "./App";

import "./index.css"
// const element = React.createElement(
//     "div",
//     {id: "title", className:"app-title"}, 
//     "this is first app"
//     );
// ReactDOM.render(element, document.getElementById("root"));

// App()
// <App/>  : render!
// jsx  
 
ReactDOM.render(<App/>, document.getElementById("root"))