import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { GoogleOAuthProvider } from "@react-oauth/google";
import App from "./App";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.js";

import "./custom.scss";
import "./index.css";

const rootElement = document.getElementById("root");

if (!rootElement) {
    throw new Error("Failed to find the root element");
}

createRoot(rootElement).render(
    <GoogleOAuthProvider clientId="664480115193-21m6a2k14q1grqmjs5su1d2lvj71lf25.apps.googleusercontent.com">
        <StrictMode>
            <App />
        </StrictMode>
    </GoogleOAuthProvider>
);
