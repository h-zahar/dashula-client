import React from "react";
import FlexBetween from "@/components/utils/flexBetween";
import { Box, Typography, useTheme } from "@mui/material";

type Props = {
  icon?: string;
  title: string;
  subtitle: string;
  sideText: string;
};

const DashHeader = ({ icon, title, subtitle, sideText }: Props) => {
  const { palette } = useTheme();
  return (
    <>
      <FlexBetween color={palette.grey[400]} margin="1.5rem 1rem 0.5rem 1rem">
        <FlexBetween>
          {icon}
          <Box width="100%">
            <Typography variant="h4" mb="0.5rem">
              {title}
            </Typography>
            <Typography variant="h6">{subtitle}</Typography>
          </Box>
        </FlexBetween>
        <Typography
          variant="h5"
          color={palette.secondary[500]}
          fontWeight={700}
        >
          {sideText}
        </Typography>
      </FlexBetween>
    </>
  );
};

export default DashHeader;
