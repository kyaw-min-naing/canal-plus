import { createBrowserRouter } from "react-router-dom";
import Layout from "../../components/layout/Layout";
import { HomePage } from "../../pages/HomePage";

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
        path: "payment",
      },
      {
        path: "subscription",
      },
    ],
  },
]);

export default router;

// export function AppRouter() {
//   return <RouterProvider router={router} />;
// }
