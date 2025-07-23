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
      bg="white"
      className={`continue-button ${show ? "slide-up" : ""}`}
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
