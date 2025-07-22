import {
  TextInput,
  Text,
  Box,
  useMantineTheme,
  Card,
  Stack,
  Group,
} from "@mantine/core";
import { IconCheck } from "@tabler/icons-react";

interface SubscriptionNumberInputProps {
  value: string;
  onChange: (value: string) => void;
  showCustomerInfo?: boolean;
  customerName?: string;
  customerHome?: string;
  readonly?: boolean;
}

export function SubscriptionNumberInput({
  value,
  onChange,
  showCustomerInfo = false,
  customerName,
  customerHome,
  readonly = false,
}: SubscriptionNumberInputProps) {
  const theme = useMantineTheme();

  if (showCustomerInfo) {
    return (
      <Card p="lg" radius="md" shadow="sm" bg="white" mb="md">
        <Stack gap="lg">
          {/* Subscription Number */}
          <Box>
            <Text size="sm" fw={500} mb="xs" c="dark.7">
              Subscription Number
            </Text>
            <Group
              justify="space-between"
              align="center"
              p="md"
              style={{
                backgroundColor: theme.colors.gray[0],
                borderRadius: theme.radius.md,
                border: `1px solid ${theme.colors.gray[3]}`,
              }}
            >
              <Text size="md" fw={500}>
                {value}
              </Text>
              <Box
                style={{
                  width: "20px",
                  height: "20px",
                  borderRadius: "50%",
                  backgroundColor: theme.colors.blue[5],
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <IconCheck size={12} color="white" />
              </Box>
            </Group>
          </Box>

          {/* Customer Info */}
          {(customerName || customerHome) && (
            <Box>
              {customerName && (
                <Group justify="space-between" mb="sm">
                  <Text size="sm" c="gray.6">
                    Name
                  </Text>
                  <Text size="sm" fw={500} c="brand.6">
                    {customerName}
                  </Text>
                </Group>
              )}
              {customerHome && (
                <Group justify="space-between">
                  <Text size="sm" c="gray.6">
                    Home
                  </Text>
                  <Text size="sm" fw={500} c="brand.6">
                    {customerHome}
                  </Text>
                </Group>
              )}
            </Box>
          )}
        </Stack>
      </Card>
    );
  }

  return (
    <Box>
      <Text size="sm" fw={500} mb="xs" c="dark.7">
        Subscription Number
      </Text>
      <TextInput
        value={value}
        onChange={(event) => onChange(event.currentTarget.value)}
        placeholder="enter number"
        size="lg"
        radius="md"
        readOnly={readonly}
        styles={{
          input: {
            backgroundColor: "white",
            border: `1px solid ${theme.colors.gray[3]}`,
            fontSize: theme.fontSizes.md,
            padding: theme.spacing.md,
            "&:focus": {
              borderColor: theme.colors.brand[5],
              boxShadow: `0 0 0 2px ${theme.colors.brand[1]}`,
            },
          },
        }}
      />
    </Box>
  );
}
