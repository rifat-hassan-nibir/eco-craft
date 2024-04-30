import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "react-tooltip/dist/react-tooltip.css";

// toast
import { Toaster } from "react-hot-toast";

import { RouterProvider } from "react-router-dom";
import Routes from "./routes/Routes";
import AuthProvider from "./authProvider/AuthProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <React.StrictMode>
      <RouterProvider router={Routes} />
      <Toaster />
    </React.StrictMode>
  </AuthProvider>
);
