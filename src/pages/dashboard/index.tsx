import React from "react";
import { Box, useTheme } from "@mui/material";

type Props = NonNullable<unknown>;
const gridTemplate = `
    "a b c"
    "a b c"
    "a b c"
    "a b f"
    "d e f"
    "d e f"
    "d h i"
    "g h i"
    "g h j"
    "g h j"
`;

const Dashboard = (props: Props) => {
  const { palette } = useTheme();
  return (
    <Box
      width="100%"
      height="100%"
      display="grid"
      gap="1.5rem"
      sx={{
        gridTemplateColumns: "repeat(3, minmax(370px, 1fr))",
        gridTemplateRows: "repeat(10, minmax(60px, 1fr))",
        gridTemplateAreas: gridTemplate,
      }}
    >
      <Box gridArea="a" sx={{ backgroundColor: palette.tertiary[500] }} />
      <Box gridArea="b" sx={{ backgroundColor: palette.tertiary[500] }} />
      <Box gridArea="c" sx={{ backgroundColor: palette.tertiary[500] }} />
      <Box gridArea="d" sx={{ backgroundColor: palette.tertiary[500] }} />
      <Box gridArea="e" sx={{ backgroundColor: palette.tertiary[500] }} />
      <Box gridArea="f" sx={{ backgroundColor: palette.tertiary[500] }} />
      <Box gridArea="g" sx={{ backgroundColor: palette.tertiary[500] }} />
      <Box gridArea="h" sx={{ backgroundColor: palette.tertiary[500] }} />
      <Box gridArea="i" sx={{ backgroundColor: palette.tertiary[500] }} />
      <Box gridArea="j" sx={{ backgroundColor: palette.tertiary[500] }} />
    </Box>
  );
};

export default Dashboard;
