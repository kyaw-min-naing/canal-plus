import { AppShell, Box } from "@mantine/core";
import { Outlet, useLocation } from "react-router-dom";
import { FooterNavigator } from "./Footer";
import { Header } from "./Header";

export default function Layout() {
  const location = useLocation();
  const showFooter = location.state?.footerLabel && location.state?.nextRoute;

  return (
    <AppShell
      bg="gray.1"
      header={{ height: 130 }}
      footer={showFooter ? { height: 90 } : undefined}
      padding={0}
      styles={{
        main: {
          height: `calc(100vh - ${130 + (showFooter ? 90 : 0)}px)`,
          overflow: "auto",
        },
      }}
    >
      <AppShell.Header hiddenFrom="lg">
        <Header />
      </AppShell.Header>

      <AppShell.Main>
        <Box
          pos="absolute"
          left="50%"
          px={{ base: "1rem", sm: "2rem", md: "4rem" }}
          style={{
            transform: "translateX(-50%)",
            zIndex: 100,
            width: "100%",
            overflow: "visible",
            display: "block",
            maxHeight: "720px",
          }}
          hiddenFrom="lg"
        >
          <Outlet />
        </Box>
      </AppShell.Main>

      {showFooter && (
        <AppShell.Footer hiddenFrom="lg" bg="rgb(233, 236, 239)">
          <FooterNavigator />
        </AppShell.Footer>
      )}
    </AppShell>
  );
}

