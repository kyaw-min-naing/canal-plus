import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { theme } from "./config/theme/mantine-theme";
import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import { RouterProvider } from "react-router-dom";
import router from "./config/router/AppRoutes.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <MantineProvider theme={theme}>
        <RouterProvider router={router} />
      </MantineProvider>
    </QueryClientProvider>
  </StrictMode>
);
