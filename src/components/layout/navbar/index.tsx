import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Box, Typography, useTheme } from "@mui/material";
import FlexBetween from "@/components/utils/flexBetween";
import PixIcon from "@mui/icons-material/Pix";

type Props = NonNullable<unknown>;

const Navbar = (props: Props) => {
  const { palette } = useTheme();
  const [active, setActive] = useState("dashboard");

  return (
    <FlexBetween mb="1.25rem" p="0.5 rem 0" color={palette.grey[300]}>
      <FlexBetween gap="0.75rem">
        {/* <PixIcon sx={{ fontSize: "40px" }} /> */}
        <Typography variant="h6" fontSize="30px">
          Logo
        </Typography>
        <Typography variant="h6" fontSize="16px">
          Dashula
        </Typography>
      </FlexBetween>

      <FlexBetween gap="0.75rem">
        <Box sx={{ "&:hover": { color: palette.primary[100] } }}>
          <Link
            to="/"
            onClick={() => setActive("dashboard")}
            style={{
              color: active === "dashboard" ? "inherit" : palette.grey[700],
              textDecoration: "none",
            }}
          >
            Dashboard
          </Link>
        </Box>

        <Box sx={{ "&:hover": { color: palette.primary[100] } }}>
          <Link
            to="/prediction"
            onClick={() => setActive("prediction")}
            style={{
              color: active === "prediction" ? "inherit" : palette.grey[700],
              textDecoration: "none",
            }}
          >
            Predication
          </Link>
        </Box>
      </FlexBetween>
    </FlexBetween>
  );
};

export default Navbar;
