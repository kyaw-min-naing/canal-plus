import { TextInput, Text, Box, useMantineTheme } from "@mantine/core";

interface SubscriptionNumberInputProps {
  value: string;
  onChange: (value: string) => void;
}

export function SubscriptionNumberInput({
  value,
  onChange,
}: SubscriptionNumberInputProps) {
  const theme = useMantineTheme();

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
