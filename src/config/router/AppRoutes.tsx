import { createBrowserRouter } from "react-router-dom";
import { HomePage } from "../../pages/HomePage";
import { SubscriptionPage } from "../../pages/SubscriptionPage";
import { TransactionSuccess } from "../../pages/TransactionSuccess";
import Layout from "../../components/layout/Layout";

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
        path: "transaction-success",
        element: <TransactionSuccess />
      }
    ],
  },
]);

export default router;

// export function AppRouter() {
//   return <RouterProvider router={router} />;
// }
