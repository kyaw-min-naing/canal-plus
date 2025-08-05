import { Card, Stack, Text, Image, Group, Button } from "@mantine/core";
import PaySlip from "../assets/pay-slip.png";
import { useNavigate } from "react-router-dom";

export function HowToPay() {
  const navigate = useNavigate();

  return (
    <Stack gap="xl">
      <Card
        className="scroll-container"
        p="lg"
        radius="md"
        shadow="sm"
        bg="white"
        mt="-35px"
        // style={{ height: "620px", overflowY: "auto" }}
      >
        <Stack gap="lg">
          <Text size="lg" fw={700} mb="xs" c="brand.5">
            How to pay canal plus?
          </Text>
          <Image src={PaySlip} />
          <Text>To pay your bill, you can follow these simple steps:</Text>

          <Group>
            <Text size="lg" fw={700} c="dark.7">
              1. Enter Barcode number
            </Text>
            <Text>
              Locate the Barcode Number on your Bill receipt and enter it
              accurately. You will also nee to enter any hyphens or dashes
              present.
            </Text>
          </Group>

          <Group>
            <Text size="lg" fw={700} c="dark.7">
              2. Check your details
            </Text>
            <Text>Check you number, price and township</Text>
          </Group>

          <Group>
            <Text size="lg" fw={700} c="dark.7">
              3. Finish Pay Bill
            </Text>
            <Text>
              Show QR Agent/Marchant and complete your Cash in. Can check
              balance in Homepage and transaction in History.
            </Text>
          </Group>
        </Stack>
        <Button
          fullWidth
          size="md"
          radius="md"
          mt={20}
          onClick={() => navigate("/")}
          style={{
            background: "linear-gradient(180deg, #FF7AC9 0%, #EC0B8C 100%)",
            border: "none",
            minHeight: 48,
          }}
        >
          OK!
        </Button>
      </Card>
    </Stack>
  );
}
