import { createBrowserRouter } from "react-router-dom";
import Layout from "../../components/layout/Layout";
import { HomePage } from "../../pages/HomePage";
import { SubscriptionPage } from "../../pages/SubscriptionPage";

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
    ],
  },
]);

export default router;

// export function AppRouter() {
//   return <RouterProvider router={router} />;
// }
