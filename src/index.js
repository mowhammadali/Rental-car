import React from "react";
import ReactDOM from "react-dom/client";
import {BrowserRouter} from "react-router-dom";
import Routing from "./Routes/Routing";
import "./styles/index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routing />
        </BrowserRouter>
    </React.StrictMode>
)