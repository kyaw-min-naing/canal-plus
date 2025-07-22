import { Button, Card } from "@mantine/core";

interface ContinueButtonProps {
  onClick: () => void;
  text?: string;
  show?: boolean;
}

export function ContinueButton({
  onClick,
  text,
  show = true,
}: ContinueButtonProps) {
  if (!show) return null;

  return (
    <Card
      p="lg"
      radius="md"
      shadow="sm"
      bg="white"
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        margin: 0,
        borderRadius: "16px 16px 0 0",
        zIndex: 100,
        transform: show ? "translateY(0)" : "translateY(100%)",
        transition: "transform 5.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
      }}
    >
      <Button
        size="lg"
        radius="md"
        fullWidth
        onClick={onClick}
        style={{
          background: "linear-gradient(180deg, #FF7AC9 0%, #EC0B8C 100%)",
          border: "none",
        }}
      >
        {text}
      </Button>
    </Card>
  );
}
