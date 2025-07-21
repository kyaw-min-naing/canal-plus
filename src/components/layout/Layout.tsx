import { AppShell, Box } from "@mantine/core";
import { Outlet } from "react-router-dom";
import { Header } from "../../components/pages/Header";

interface LayoutProps {
  children?: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <AppShell
      bg="gray.1"
      header={{ height: 100 }}
      padding={0}
      styles={{
        main: {
          height: "calc(100vh - 40px)",
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
            width: "92%",
            overflow: "visible",
          }}
        >
          {children || <Outlet />}
        </Box>
      </AppShell.Main>
    </AppShell>
  );
}
