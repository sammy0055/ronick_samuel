import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./router/root/App.tsx";
import "./index.css";
import NewsBar from "./component/newsbar/index.tsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProjectDisplay from "./router/project/index.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "project/:projectId",
    element: <ProjectDisplay />,
  },
]);



createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <NewsBar />
    <RouterProvider router={router} />
  </StrictMode>
);
