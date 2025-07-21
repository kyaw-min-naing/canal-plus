import {
  Stack,
  Text,
  Button,
  Box,
  Card,
  Group,
  useMantineTheme,
} from "@mantine/core";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IconFileText, IconArrowRight } from "@tabler/icons-react";
import { SubscriptionNumberInput } from "../components/SubscriptionInput";

const RECENT_SUBSCRIPTIONS = [
  { number: "00086471", label: "Canal Plus" },
  { number: "00087431", label: "Canal Plus" },
  { number: "00087456", label: "Canal Plus" },
];

export function HomePage() {
  const [subscriptionNumber, setSubscriptionNumber] = useState("");
  // const [showContinue, setShowContinue] = useState(false);
  const navigate = useNavigate();
  const theme = useMantineTheme();

  // useEffect(() => )

  const handleContinue = () => {
    if (subscriptionNumber.trim()) {
      navigate("/subscription", { state: { subscriptionNumber } });
    }
  };

  return (
    <Stack gap="xl">
      <Card p="lg" radius="md" shadow="sm" bg="white" mt="-25px">
        <Stack gap="lg">
          <SubscriptionNumberInput
            value={subscriptionNumber}
            onChange={setSubscriptionNumber}
          />

          <Box>
            <Text size="md" fw={500} mb="md" c="dark.7">
              Recents
            </Text>
            <Group gap="sm">
              {RECENT_SUBSCRIPTIONS.map((sub, index) => {
                const isHighlighted = subscriptionNumber === sub.number;
                return (
                  <Card
                    key={index}
                    p="md"
                    radius="md"
                    shadow="sm"
                    style={{
                      flex: 1,
                      cursor: "pointer",
                      backgroundColor: isHighlighted
                        ? theme.colors.brand[1]
                        : "white",
                      border: isHighlighted
                        ? `2px solid ${theme.colors.brand[5]}`
                        : `1px solid ${theme.colors.gray[3]}`,
                      transition: "all 0.2s ease",
                    }}
                    onClick={() => setSubscriptionNumber(sub.number)}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLDivElement).style.transform =
                        "translateY(-2px)";
                      (e.currentTarget as HTMLDivElement).style.boxShadow =
                        theme.shadows.md;
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLDivElement).style.transform = "";
                      (e.currentTarget as HTMLDivElement).style.boxShadow = "";
                    }}
                  >
                    <Group gap="sm">
                      <Box
                        style={{
                          padding: "8px",
                          borderRadius: theme.radius.sm,
                          backgroundColor: isHighlighted
                            ? theme.colors.brand[5]
                            : theme.colors.gray[1],
                          color: isHighlighted ? "white" : theme.colors.gray[6],
                        }}
                      >
                        <IconFileText size={20} />
                      </Box>
                      <Box style={{ flex: 1 }}>
                        <Text
                          size="sm"
                          fw={500}
                          c={isHighlighted ? "brand.7" : "dark.7"}
                        >
                          {sub.number}
                        </Text>
                        <Text
                          size="xs"
                          c={isHighlighted ? "brand.6" : "gray.6"}
                        >
                          {sub.label}
                        </Text>
                      </Box>
                    </Group>
                  </Card>
                );
              })}
            </Group>
          </Box>
        </Stack>
      </Card>

      <Card
        p="lg"
        radius="md"
        shadow="sm"
        onClick={() => navigate("/payment")}
        style={{
          cursor: "pointer",
          background: `linear-gradient(135deg, ${theme.colors.brand[0]} 0%, ${theme.colors.brand[1]} 100%)`,
          border: `1px solid ${theme.colors.brand[2]}`,
          transition: "all 0.2s ease",
          "&:hover": {
            transform: "translateY(-2px)",
            boxShadow: theme.shadows.md,
          },
        }}
      >
        <Group justify="space-between" align="center">
          <Box>
            <Text size="sm" c="gray.6" mb={4}>
              How to pay
            </Text>
            <Text size="lg" fw={600} c="brand.7">
              Canal Plus
            </Text>
          </Box>
          <Group gap="xs" style={{ color: theme.colors.brand[6] }}>
            <Text size="sm" fw={500}>
              Click here
            </Text>
            <IconArrowRight size={16} />
          </Group>
        </Group>
      </Card>

      {subscriptionNumber && (
        <Card p="lg" radius="md" shadow="sm" bg="white" mt="5rem">
          <Button
            size="lg"
            radius="md"
            fullWidth
            onClick={handleContinue}
            style={{
              background: "linear-gradient(135deg, #e6008a 0%, #cc0070 100%)",
              border: "none",
            }}
          >
            Continue
          </Button>
        </Card>
      )}
    </Stack>
  );
}
