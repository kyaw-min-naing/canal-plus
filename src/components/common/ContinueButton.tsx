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
        bottom: 0,
        left: 0,
        right: 0,
        margin: 0,
        borderRadius: "16px 16px 16px 16px",
        zIndex: 2, // Changed from 100
        animation: "slideUp 0.5s ease-out",
        animationDelay: "1s",
        animationFillMode: "forwards",
        opacity: 0, 
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

