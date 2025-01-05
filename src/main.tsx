import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./router/root/App.tsx";
import "./index.css";
import NewsBar from "./component/newsbar/index.tsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProjectDisplay from "./router/project/index.tsx";
import PrivacyPolicy from "./router/whatsapp/privacy_policy/index.tsx";
import TermsOfService from "./router/whatsapp/terms_of_service/index.tsx";
import WhatsappRules from "./router/whatsapp/index.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/project/:projectId",
    element: <ProjectDisplay />,
  },
  {
    path: "/whatsapp",
    element: <WhatsappRules />,
  },
  {
    path: "/whatsapp/privacy-policy",
    element: <PrivacyPolicy />,
  },
  {
    path: "/whatsapp/terms-of-service",
    element: <TermsOfService />,
  },
]);



createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <NewsBar />
    <RouterProvider router={router} />
  </StrictMode>
);
