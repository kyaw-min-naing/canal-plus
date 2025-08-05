import { Box, Button, Group, Text, useMantineTheme } from "@mantine/core";
import { useLocation, useNavigate } from "react-router-dom";
import LeftIcon from "../assets/left-icon.png";

const PAGE_TITLES = {
  "/": "Canal Plus (DTT/DTH)",
  "/subscription": "Canal Plus (DTT/DTH)",
  "/confirmation": "Confirmation",
  "/transaction-success": "",
} as const;

export function Header() {
  const theme = useMantineTheme();
  const location = useLocation();
  const navigate = useNavigate();

  const currentTitle =
    PAGE_TITLES[location.pathname as keyof typeof PAGE_TITLES] ||
    "Canal Plus (DTT/DTH)";

  const showBackButton =
    location.pathname === "/subscription" ||
    location.pathname === "/confirmation";

  const handleBack = () => {
    if (location.pathname === "/subscription") {
      navigate("/");
    } else if (location.pathname === "/confirmation") {
      navigate(-1);
    }
  };

  return (
    <Box
      h="100%"
      style={{
        background: `${theme.colors.brand[5]}`,
        display: "flex",
        alignItems: "flex-start",
        flexDirection: "column",
        border: "none",
        boxShadow: `10px 20px 10px 20px ${theme.colors.brand[5]}`,
      }}
    >
      <Box mt={40}>
        {showBackButton && (
          <Button variant="subtle" onClick={handleBack} size="sm" c="white">
            <img
              src={LeftIcon}
              style={{
                marginTop: "5px",
              }}
            />
            Back
          </Button>
        )}

        <Group justify="space-between" w="100%">
          <Text
            size="xl"
            fw={600}
            c="white"
            ml={{ base: "1.2rem", sm: "2rem", md: "4rem", lg: "4.2rem" }}
          >
            {currentTitle}
          </Text>
        </Group>
      </Box>
    </Box>
  );
}
