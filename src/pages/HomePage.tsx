import { Stack, Text, Box, Card, Group, useMantineTheme } from "@mantine/core";
import HowToPay from "../assets/How-to-pay.png";
import PayBill from "../assets/Service Icons=Pay Bills.png";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { SubscriptionNumberInput } from "../components/common/SubscriptionInput";
import { ContinueButton } from "../components/common/ContinueButton";

const RECENT_SUBSCRIPTIONS = [
  { number: "00086471", label: "Canal Plus" },
  { number: "00087431", label: "Canal Plus" },
];

export function HomePage() {
  const [subNumber, setSubNumber] = useState("");
  const [showContinue, setShowContinue] = useState(false);
  const navigate = useNavigate();
  const theme = useMantineTheme();

  useEffect(() => {
    if (subNumber.trim()) {
      setShowContinue(true);
    } else {
      setShowContinue(false);
    }
  }, [subNumber]);

  const handleContinue = () => {
    if (subNumber.trim()) {
      navigate("/subscription", { state: { subNumber } });
    }
  };

  return (
    <Stack gap="xl">
      <Card p="lg" radius="md" shadow="sm" bg="white" mt="-35px">
        <Stack gap="lg">
          <SubscriptionNumberInput value={subNumber} onChange={setSubNumber} />

          <Box>
            <Text size="md" fw={500} mb="md" c="dark.7">
              Recents
            </Text>
            <Group gap="sm">
              {RECENT_SUBSCRIPTIONS.map((sub, index) => {
                const isHighlighted = subNumber === sub.number;
                return (
                  <Card
                    key={index}
                    p="xl"
                    radius="md"
                    shadow="sm"
                    style={{
                      flex: 1,
                      cursor: "pointer",
                      backgroundColor: isHighlighted
                        ? theme.colors.brand[0]
                        : `${theme.colors.gray[1]}`,
                      border: isHighlighted
                        ? `1.5px solid ${theme.colors.brand[5]}`
                        : "none",
                      transition: "all 0.2s ease",
                    }}
                    onClick={() => setSubNumber(sub.number)}
                  >
                    <Group gap="sm">
                      <Box>
                        <img src={PayBill} />
                      </Box>
                      <Box style={{ flex: 1 }}>
                        <Text fw={500} c="brand.5">
                          {sub.number}
                        </Text>
                        <Text>{sub.label}</Text>
                      </Box>
                    </Group>
                  </Card>
                );
              })}
            </Group>
          </Box>
        </Stack>
      </Card>

      <Box>
        <img
          src={HowToPay}
          alt="How to pay"
          onClick={() => navigate("/payment")}
          style={{
            width: "100%",
            borderRadius: "8px",
            // objectFit: "cover",
          }}
        />
      </Box>

      <Box mb={245}>
        <ContinueButton
          onClick={handleContinue}
          show={showContinue}
          text="Continue"
        />
      </Box>
    </Stack>
  );
}
