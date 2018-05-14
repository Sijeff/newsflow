import React from "react";
import ReactDOM from "react-dom";
import NewsContainer from "./newscontainer";

let destination = document.querySelector("#root");

ReactDOM.render(
    <div>
        <NewsContainer/>
    </div>,
    destination
);