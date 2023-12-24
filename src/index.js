import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Dashboard from "./components/dashboard/Dashboard";
import ManageProject from "./components/manageProject/ManageProject";
import AppStateProvider from "./store/aap-state-store";
import Chat from "./components/chat/Chat";
import Service from "./components/service/Service";
import Add from "./components/addNewMenuINSidebar/Add";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Dashboard /> },
      { path: "/Dashboard", element: <Dashboard /> },
      { path: "/Chat", element: <Chat /> },
      { path: "/Service", element: <Service /> },
      { path: "/Add", element: <Add /> },
      { path: "/manage-project", element: <ManageProject /> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AppStateProvider>
      <RouterProvider router={router} />
    </AppStateProvider>
  </React.StrictMode>
);
