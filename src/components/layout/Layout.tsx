import { AppShell, Box } from "@mantine/core";
import { Outlet } from "react-router-dom";
import { Header } from "../../components/pages/Header";

export default function Layout() {
  return (
    <AppShell
      bg="gray.1"
      header={{ height: 130 }}
      padding={0}
      styles={{
        main: {
          height: "calc(100vh - 30px)",
          overflow: "hidden",
        },
      }}
    >
      <AppShell.Header>
        <Header />
      </AppShell.Header>

      <AppShell.Main
        style={{
          display: "flex",
          overflow: "hidden",
        }}
      >
        <Box
          pos="absolute"
          left="50%"
          px={{ base: "1rem", sm: "2rem", md: "4rem" }}
          style={{
            transform: "translateX(-50%)",
            zIndex: 100,
            width: "100%",
            overflow: "visible",
          }}
        >
          <Outlet />
        </Box>
      </AppShell.Main>
    </AppShell>
  );
}
