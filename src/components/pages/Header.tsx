import { Box, Group, Text, useMantineTheme } from "@mantine/core";
import { useLocation } from "react-router-dom";

const PAGE_TITLES = {
  "/": "Canal Plus (DTT/DTH)",
  "/subscription": "Canal Plus (DTT/DTH)",
  "/payment": "Payment Options",
} as const;

export function Header() {
  const theme = useMantineTheme();
  const location = useLocation();

  const currentTitle =
    PAGE_TITLES[location.pathname as keyof typeof PAGE_TITLES] ||
    "Canal Plus (DTT/DTH)";

  return (
    <Box
      h="100%"
      style={{
        background: `${theme.colors.brand[5]}`,
        display: "flex",
        alignItems: "center",
        border: "none",
        boxShadow: `10px 20px 10px 20px ${theme.colors.brand[5]}`,
      }}
    >
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
  );
}
