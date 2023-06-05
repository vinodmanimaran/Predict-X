import React, { useState } from "react";
import FlexBetween from "@/components/FlexBetween";
import PixIcon from "@mui/icons-material/Pix";
import { useTheme, Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";

// Define the type for the props
interface Props {}

const Navbar = (props: Props) => {
  // Access the palette object from the theme
  const { palette } = useTheme();

  // Set the initial selected state to 'dashboard'
  const [selected, setSelected] = useState("dashboard");

  return (
    // Main container with flex layout and styling
    <FlexBetween mb="0.25rem" p="0.5rem 0rem" color={palette.grey[300]}>
      {/* Left section */}
      <FlexBetween gap="0.75rem">
        {/* PixIcon component */}
        <PixIcon sx={{ fontSize: "28px" }} />

        {/* Typography component for the title */}
        <Typography variant="h4" fontSize="16px">
          Predict-X
        </Typography>
      </FlexBetween>

      {/* Right section */}
      <FlexBetween gap="2rem">
        <Box sx={{ "&:hover": { color: palette.primary[100] } }}>
          {/* Link component for navigation */}
          <Link
            to="/"
            onClick={() => setSelected("dashboard")}
            style={{
              color: selected === "dashboard" ? "inherit" : palette.grey[700],
              textDecoration: "inherit",
            }}
          >
          Dashboard
          </Link>
        </Box>
        {/* Box component with hover effect */}
        <Box sx={{ "&:hover": { color: palette.primary[100] } }}>
          {/* Link component for navigation */}
          <Link
            to="/predictions"
            onClick={() => setSelected("predictions")}
            style={{
              color: selected === "predictions" ? "inherit" : palette.grey[700],
              textDecoration: "inherit",
            }}
          >
            Predictions
          </Link>
        </Box>
      </FlexBetween>
    </FlexBetween>
  );
};

export default Navbar;
