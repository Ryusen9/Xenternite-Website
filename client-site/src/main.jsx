import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import routers from "./Routes/Route.jsx";
import { HelmetProvider } from "react-helmet-async";
import ContextProvider from "./Context/ContextProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ContextProvider>
      <HelmetProvider>
        <RouterProvider router={routers} />
      </HelmetProvider>
    </ContextProvider>
  </StrictMode>
);
