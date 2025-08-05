import { useNavigate, useLocation } from "react-router-dom";
import { Stack, Card, Group, Text, Box } from "@mantine/core";
import { useState } from "react";
import PayBill from "../assets/pay-bill.png";
import HowToPay from "../assets/how-to-pay.png";
import { SubscriptionNumberInput } from "../components/SubscriptionInput";

const RECENT_SUBSCRIPTIONS = [
  { number: "0925000001", label: "MPT" },
  { number: "0978000002", label: "Telenor" },
];

export default function HomePage() {
  const navigate = useNavigate();
  const location = useLocation();
  const [subNumber, setSubNumber] = useState("");

  const handleCardClick = (number: string) => {
    setSubNumber(number);

    navigate(".", {
      state: {
        ...location.state,
        footerLabel: "Continue",
        nextRoute: "/subscription",
        subNumber: number,
      },
    });
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
                      backgroundColor: isHighlighted ? "#FFF0F5" : "#F1F3F5",
                      border: isHighlighted ? `1.5px solid #EC0B8C` : "none",
                      transition: "all 0.2s ease",
                    }}
                    onClick={() => handleCardClick(sub.number)}
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
          onClick={() => navigate("/how-to-pay")}
          style={{
            width: "100%",
            borderRadius: "8px",
          }}
        />
      </Box>
    </Stack>
  );
}
