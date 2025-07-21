import { Box, Group, Text, useMantineTheme } from "@mantine/core";
import { useLocation } from "react-router-dom";

const PAGE_TITLES = {
  "/": "Canal Plus (DTT/DTH)",
  "/payment": "Payment Options",
  "/subscription": "Subscription Details",
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
        background: `linear-gradient(135deg, ${theme.colors.brand[5]} 0%, ${theme.colors.brand[6]} 100%)`,
        display: "flex",
        alignItems: "center",
        paddingLeft: theme.spacing.lg,
        paddingRight: theme.spacing.lg,
      }}
    >
      <Group justify="space-between" w="100%">
        <Text
          size="xl"
          fw={600}
          c="white"
          style={{
            textShadow: "0 2px 4px rgba(0,0,0,0.1)",
          }}
        >
          {currentTitle}
        </Text>
      </Group>
    </Box>
  );
}
