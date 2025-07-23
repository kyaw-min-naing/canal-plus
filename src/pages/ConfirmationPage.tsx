import { Card, Group, Stack, Text } from "@mantine/core";
import { useLocation, useNavigate } from "react-router-dom";
import { ContinueButton } from "../components/common/ContinueButton";

interface ConfirmationData {
  subNumber: string;
  customerName: string;
  packageType: string;
  duration: string;
  amount: number;
}

const PACKAGE_LABELS = {
  "renew-shall-dtt-2025": "Renew Shall DTT 2025",
  "premium-package": "Premium Package",
  "basic-package": "Basic Package",
};

const DURATION_LABELS = {
  "1": "1 Month",
  "3": "3 Months",
  "6": "6 Months",
  "12": "12 Months",
};

export function ConfirmationPage() {
  const navigate = useNavigate();
  const location = useLocation();

  const data: ConfirmationData | null = location.state;

  if (!data) {
    navigate("/");
    return null;
  }

  const packageLabel =
    PACKAGE_LABELS[data.packageType as keyof typeof PACKAGE_LABELS] ||
    data.packageType;

  const durationLabel =
    DURATION_LABELS[data.duration as keyof typeof DURATION_LABELS] ||
    `${data.duration} Month(s)`;

  const handlePayNow = () => {
    //
    console.log("Processing payment for:", data);
  };

  return (
    <Stack gap="xl">
      <Card p="lg" radius="md" shadow="sm" bg="white">
        <Stack gap="lg">
          <Text size="lg" fw={700} mb="xs" c="dark.7">
            Transaction Details
          </Text>

          <Stack gap="md">
            <Group justify="space-between" align="flex-start">
              <Text size="sm" c="gray.6">
                Subscription Number
              </Text>
              <Text>{data.subNumber} </Text>
            </Group>

            <Group justify="space-between" align="flex-start">
              <Text size="sm" c="gray.6">
                Name
              </Text>
              <Text size="sm" fw={500} c="dark.7" ta="right">
                {data.customerName}{" "}
              </Text>
            </Group>

            <Group justify="space-between" align="flex-start">
              <Text size="sm" c="gray.6">
                Package Type
              </Text>
              <Text size="sm" fw={500} c="dark.7" ta="right">
                {packageLabel}
              </Text>
            </Group>

            <Group justify="space-between" align="flex-start">
              <Text size="sm" c="gray.6">
                Duration
              </Text>
              <Text size="sm" fw={500} c="dark.7" ta="right">
                {durationLabel}
              </Text>
            </Group>

            <Group justify="space-between" align="flex-start">
              <Text size="sm" c="gray.6">
                Amount
              </Text>
              <Text size="sm" fw={500} c="dark.7" ta="right">
                {data.amount.toLocaleString()} Ks
              </Text>
            </Group>

            <Group justify="space-between" align="flex-start">
              <Text size="sm" c="gray.6">
                Fees & Charges
              </Text>
              <Text size="sm" fw={500} c="brand.5" ta="right">
                Free
              </Text>
            </Group>

            <Group justify="space-between" align="flex-start">
              <Text size="sm" c="gray.6">
                Total
              </Text>
              <Text size="md" fw={700} c="brand.5" ta="right">
                {data.amount.toLocaleString()} Ks
              </Text>
            </Group>
          </Stack>
        </Stack>
      </Card>

      <Card
        p="lg"
        radius="md"
        shadow="sm"
        bg="white"
        style={{ marginBottom: "100px" }}
      >
        <Group justify="space-between" align="center">
          <Text size="lg" fw={700} c="dark.7">
            Total Amount
          </Text>
          <Text size="xl" fw={700} c="brand.5">
            {data.amount.toLocaleString()} Ks
          </Text>
        </Group>

        <ContinueButton onClick={handlePayNow} text="Pay Now" />
      </Card>
    </Stack>
  );
}
