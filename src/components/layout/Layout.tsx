import { AppShell, Box, Button, Card } from "@mantine/core";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { useFooterVisibility } from "../FooterVisibilityContext";
import { Header } from "../pages/Header";

export default function Layout() {
  const { showFooter } = useFooterVisibility();
  const { footerData } = useFooterVisibility();
  const navigate = useNavigate();
  const location = useLocation();

  const getNextRoute = () => {
    switch (location.pathname) {
      case "/":
        return "/subscription";
      case "/eg1":
        return "/somet";
      case "/somet":
        return "/done";
      default:
        return "/";
    }
  };

  const handleContinueClick = () => {
    const nextRoute = getNextRoute();
    navigate(nextRoute, { state: footerData });
  };

  return (
    <AppShell
      bg="gray.1"
      header={{ height: 130 }}
      footer={
        showFooter
          ? {
              height: {
                base: 70,
                sm: 90,
                lg: undefined,
              },
            }
          : undefined
      }
      padding={0}
      styles={{
        main: {
          height: `calc(100vh - ${130 + (showFooter ? 50 : 0)}px)`,
          overflow: "auto",
        },
      }}
    >
      <AppShell.Header hiddenFrom="lg">
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
          <div className="slide-up">
            <Card shadow="sm" padding="lg" radius="lg">
              <Button
                fullWidth
                size="md"
                radius="md"
                style={{
                  background:
                    "linear-gradient(180deg, #FF7AC9 0%, #EC0B8C 100%)",
                  border: "none",
                }}
                onClick={handleContinueClick}
              >
                Continue
              </Button>
            </Card>
          </div>
        </AppShell.Footer>
      )}
    </AppShell>
  );
}
