import { Box, Card, Group, Select, Stack, Text } from "@mantine/core";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { SubscriptionNumberInput } from "../components/SubscriptionInput";

const PACKAGE_OPTIONS = [
  { value: "renew-shall-dtt-2025", label: "Renew Shall DTT 2025" },
  { value: "premium-package", label: "Premium Package" },
  { value: "basic-package", label: "Basic Package" },
];

const DURATION_OPTIONS = [
  { value: "1", label: "1 Month" },
  { value: "3", label: "3 Months" },
  { value: "6", label: "6 Months" },
  { value: "12", label: "12 Months" },
];

const PACKAGE_PRICES = {
  "renew-shall-dtt-2025": { 1: 32000, 3: 90000, 6: 180000, 12: 350000 },
  "premium-package": { 1: 45000, 3: 120000, 6: 240000, 12: 450000 },
  "basic-package": { 1: 25000, 3: 70000, 6: 140000, 12: 260000 },
} as const;

export function SubscriptionPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const subNumber = location.state?.subNumber;

  const [selectedPackage, setSelectedPackage] = useState(
    "renew-shall-dtt-2025"
  );
  const [selectedDuration, setSelectedDuration] = useState("1");

  const currentPrice =
    PACKAGE_PRICES[selectedPackage as keyof typeof PACKAGE_PRICES]?.[
      selectedDuration as "1" | "3" | "6" | "12"
    ];

  useEffect(() => {
    if (!location.state?.fromFooterClick) return;

    navigate(".", {
      state: {
        ...location.state,
        footerLabel: "Continue",
        nextRoute: "/confirmation",
      },
    });
  }, [currentPrice, location.state, navigate]);

  return (
    <Stack gap="xl">
      <SubscriptionNumberInput
        value={subNumber}
        onChange={() => {}}
        showCustomerInfo={true}
        customerName="Aung Ye Htun"
        customerHome="Aung Ye Htun"
        readonly={true}
      />

      <Card p="lg" radius="md" shadow="sm" bg="white">
        <Stack gap="lg">
          <Box>
            <Text size="lg" fw={600} mb="lg" c="brand.6">
              Choose Package
            </Text>
            <Box mb="lg">
              <Text mb="xs" fw={700}>
                Package Type
              </Text>
              <Select
                value={selectedPackage}
                onChange={(value) =>
                  setSelectedPackage(value || "renew-shall-dtt-2025")
                }
                data={PACKAGE_OPTIONS}
                size="lg"
                radius="md"
              />
            </Box>

            <Box mb="lg">
              <Text fw={700} mb="xs">
                Duration Months
              </Text>
              <Select
                value={selectedDuration}
                onChange={(value) => setSelectedDuration(value || "1")}
                data={DURATION_OPTIONS}
                size="lg"
                radius="md"
              />
            </Box>

            <Box mb="xl">
              <Card bg="gray.1" radius="lg">
                <Text size="lg" fw={700} c="gray.4">
                  Amount
                </Text>
                <Group justify="space-between">
                  <Text size="xl" fw={700} c="brand.5">
                    {currentPrice.toLocaleString()}.00
                  </Text>
                  <Text size="lg" c="gray.5" fw={700}>
                    Ks
                  </Text>
                </Group>
              </Card>
            </Box>
          </Box>
        </Stack>
      </Card>
    </Stack>
  );
}
