import { createTheme } from "@mantine/core";

export const theme = createTheme({
  colors: {
    brand: [
      "#ffe0f3",
      "#ffb3e0",
      "#ff80cc",
      "#ff4db8",
      "#ff1aa4",
      "#e6008a", // Primary pink
      "#cc0070",
      "#b30056",
      "#99003c",
      "#800022",
    ],
    gray: [
      "#f8f9fa",
      "#e9ecef",
      "#dee2e6",
      "#ced4da",
      "#adb5bd",
      "#6c757d",
      "#495057",
      "#343a40",
      "#212529",
      "#000000",
    ],
  },
  primaryColor: "brand",
  primaryShade: 5,
  components: {
    Button: {
      defaultProps: {
        size: "md",
        radius: "md",
      },
    },
    TextInput: {
      defaultProps: {
        size: "md",
        radius: "md",
      },
    },
  },
});
