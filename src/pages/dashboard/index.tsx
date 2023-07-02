import React from "react";
import { Box, useMediaQuery, useTheme } from "@mui/material";
import Segment1 from "@/pages/dashboard/segment1";
import Segment2 from "@/pages/dashboard/segment2";
import Segment3 from "@/pages/dashboard/segment3";

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

const gridTemplateSmall = `
    "a"
    "a"
    "a"
    "a"
    "b"
    "b"
    "b"
    "b"
    "c"
    "c"
    "c"
    "d"
    "d"
    "d"
    "e"
    "e"
    "f"
    "f"
    "f"
    "g"
    "g"
    "g"
    "h"
    "h"
    "h"
    "h"
    "i"
    "i"
    "j"
    "j"
`;

const Dashboard = (props: Props) => {
  const isLargeScreen = useMediaQuery("(min-width: 1024px)");
  const { palette } = useTheme();
  return (
    <Box
      width="100%"
      height="100%"
      display="grid"
      gap="1.5rem"
      sx={
        isLargeScreen
          ? {
              gridTemplateColumns: "repeat(3, minmax(300px, 1fr))",
              gridTemplateRows: "repeat(10, minmax(60px, 1fr))",
              gridTemplateAreas: gridTemplate,
            }
          : {
              gridAutoColumns: "1fr",
              gridAutoRows: "100px",
              gridTemplateAreas: gridTemplateSmall,
            }
      }
    >
      <Segment1 />
      <Segment2 />
      <Segment3 />
    </Box>
  );
};

export default Dashboard;
