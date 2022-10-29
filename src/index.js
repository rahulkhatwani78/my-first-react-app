import React from "react";
import ReactDOM from "react-dom/client";
import Counter from "./Counter";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<React.StrictMode>{/* <Counter /> */ <App />}</React.StrictMode>);
