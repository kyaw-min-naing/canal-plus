import { useLocation, useNavigate } from "react-router-dom";
import { Button, Card, Flex, Stack, Text } from "@mantine/core";

export function FooterNavigator() {
  const location = useLocation();
  const navigate = useNavigate();

  const { footerLabel, nextRoute, amount, textAbove } = location.state || {};

  const handleClick = () => {
    if (nextRoute) {
      navigate(nextRoute, {
        state: {
          ...location.state,
          fromFooterClick: true,
        },
      });
    }
  };

  if (!footerLabel || !nextRoute) {
    return null;
  }

  return (
    <div className="slide-up" style={{ overflow: "visible" }}>
      <Card shadow="sm" padding="lg" radius="lg" style={{ paddingBottom: 50 }}>
        <Stack gap="md">
          {amount && (
            <Flex justify="space-between" align="center" w="100%" mt="-17">
              <Text fw={500}>{textAbove || "Total Amount"}</Text>
              <Text fw={700} c="brand.6">
                {amount}
              </Text>
            </Flex>
          )}

          <Button
            fullWidth
            size="md"
            radius="md"
            mt="-5"
            onClick={handleClick}
            style={{
              background: "linear-gradient(180deg, #FF7AC9 0%, #EC0B8C 100%)",
              border: "none",
              minHeight: 48,
            }}
          >
            {footerLabel}
          </Button>
        </Stack>
      </Card>
    </div>
  );
}
