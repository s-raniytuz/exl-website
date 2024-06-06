import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MoreVersions from "./components/MoreVersions.jsx";
import VersionGroup from "./components/VersionGroup.jsx";
import DownloadPage from "./components/DownloadPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/versions",
    element: <MoreVersions />,
  },
  {
    path: "versions/:versionGroupId",
    element: <VersionGroup />,
  },
  {
    path: "versions/:versionGroupId/version/:versionId",
    element: <DownloadPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
