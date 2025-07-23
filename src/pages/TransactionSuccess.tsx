import {
  Text,
  Group,
  Stack,
  Divider,
  Button,
  Box,
  Paper,
  Center,
  ThemeIcon,
  Image,
} from "@mantine/core";
import { IconCheck } from "@tabler/icons-react";
import downloadImage from "@/assets/download.png";
import shareImage from "@/assets/share.png";
import scheduleImage from "@/assets/schedule.png";
 
export function TransactionSuccess() {
  return (
    <Box p="md" maw={600} mx="auto">
      <Stack gap={0}>
        <Center mb="md">
          <ThemeIcon radius="xl" size="lg">
            <IconCheck size={20} />
          </ThemeIcon>
        </Center>
        <Text fw={700} size="xl" ta="center" mb="md">
          Transaction successful
        </Text>
 
        <Paper
          withBorder
          radius="lg"
          style={{
            borderBottomLeftRadius: 16,
            borderBottomRightRadius: 16,
          }}
        >
          <Stack p="md" gap="xs">
            <Group justify="space-between" w="100%" wrap="nowrap">
              <Text c="dimmed">Amount</Text>
              <Text fw={500}>32,000 Ks</Text>
            </Group>
            <Group justify="space-between" w="100%" wrap="nowrap">
              <Text c="dimmed">Subscription Number</Text>
              <Text fw={500}>367-006978</Text>
            </Group>
            <Group justify="space-between" w="100%" wrap="nowrap">
              <Text c="dimmed">Name</Text>
              <Text fw={500}>Aung Ye Htun</Text>
            </Group>
            <Group justify="space-between" w="100%" wrap="nowrap">
              <Text c="dimmed">Package Type</Text>
              <Text fw={500}>Renew Shall DTH 2025</Text>
            </Group>
            <Group justify="space-between" w="100%" wrap="nowrap">
              <Text c="dimmed">Duration</Text>
              <Text fw={500}>1 Month</Text>
            </Group>
            <Group justify="space-between" w="100%" wrap="nowrap">
              <Text c="dimmed">Txn ID</Text>
              <Text fw={500}>#t7dx-zn1m</Text>
            </Group>
            <Group justify="space-between" w="100%" wrap="nowrap">
              <Text c="dimmed">Date and time</Text>
              <Text fw={500}>23 May 2022 - 01:03:11 PM</Text>
            </Group>
          </Stack>
        </Paper>
 
        <Box
          style={{
            background: "white",
            padding: "0 16px",
            marginTop: -1,
          }}
        >
          <Divider
            variant="dashed"
            size={2}
            style={{
              borderTopColor: "#dee2e6",
            }}
          />
        </Box>
 
        <Paper
          withBorder
          radius="lg"
          style={{
            borderTopLeftRadius: 16,
            borderTopRightRadius: 16,
            borderTop: "none",
          }}
        >
          <Stack p="md" gap="xs">
            <Text fw={700} size="lg" mb="sm">
              Transaction Details
            </Text>
            <Group justify="space-between" w="100%" wrap="nowrap">
              <Text c="dimmed">Wallet</Text>
              <Text fw={500}>E-Money Wallet</Text>
            </Group>
            <Group justify="space-between" w="100%" wrap="nowrap">
              <Text c="dimmed">Fees & Charges</Text>
              <Text fw={500}>Free</Text>
            </Group>
            <Group justify="space-between" w="100%" wrap="nowrap">
              <Text c="dimmed">Coupon</Text>
              <Text fw={500}>-</Text>
            </Group>
            <Group justify="space-between" w="100%" wrap="nowrap">
              <Text c="dimmed">Promo-code</Text>
              <Text fw={500}>-</Text>
            </Group>
            <Group justify="space-between" w="100%" wrap="nowrap">
              <Text c="dimmed">Discount</Text>
              <Text fw={500}>-</Text>
            </Group>
            <Group justify="space-between" w="100%" wrap="nowrap">
              <Text c="dimmed">Total</Text>
              <Text fw={700}>32,000 Ks</Text>
            </Group>
          </Stack>
        </Paper>
 
        <Group grow gap="sm">
           
        <Image
          src={downloadImage}
          alt="How to Pay"
          width={200}
          mx="auto"
          my="sm"
        />
         <Image
          src={shareImage}
          alt="How to Pay"
          width={200}
          mx="auto"
          my="sm"
        />
           <Image
          src={scheduleImage}
          alt="How to Pay"
          width={200}
          mx="auto"
          my="sm"
        />
        </Group>
 
        <Button fullWidth mt="md" size="md">
          Finish
        </Button>
      </Stack>
    </Box>
  );
}