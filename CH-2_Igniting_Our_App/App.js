import React from "react";
import ReactDOM from "react-dom/client";

const heading = <h1>Welcome to Namaste React</h1>

const heading2 = React.createElement(
    "h1",
    {id:"title"},
    "Namaste react"
);

const heading3 = React.createElement(
    "h1",
    {
        id:"title",
    },
    "Welcome"
);


const container = React.createElement(
    "div",
    {
        id:"container"
    },
    [heading2,heading3]
)


// creating a root using createRoot
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(container);