import { createBrowserRouter } from "react-router-dom";
import Layout from "../../components/layout/Layout";
import { HomePage } from "../../pages/HomePage";
import { SubscriptionPage } from "../../pages/SubscriptionPage";
import { ConfirmationPage } from "../../pages/ConfirmationPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "subscription",
        element: <SubscriptionPage />,
      },
      {
        path: "confirmation",
        element: <ConfirmationPage />,
      },
    ],
  },
]);

export default router;
