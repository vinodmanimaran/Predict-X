import React, { useMemo } from "react";
import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "@/scenes/Navbar/Navbar";
import Dashboard from "@/scenes/dashboard/Dashboard";
import Predictions from "@/scenes/predictions/Predictions";
import { themeSettings } from "./theme";

const App = () => {
  // Create a theme using the themeSettings object and the createTheme function
  const theme = useMemo(() => createTheme(themeSettings), []);

  return (
    <div className="app">
      {/* Set up the BrowserRouter for routing */}
      <BrowserRouter>
        {/* Apply the custom theme using the ThemeProvider */}
        <ThemeProvider theme={theme}>
          {/* Apply a baseline CSS reset using the CssBaseline component */}
          <CssBaseline />

          {/* Main container with width, height, and padding */}
          <Box width="100%" height="100%" padding="1rem 2rem 4rem 2rem">
            {/* Display the Navbar component */}
            <Navbar />

            {/* Define the routes using the Routes component */}
            <Routes>
              {/* Define the default route for the Dashboard component */}
              <Route path="/" element={<Dashboard />} />

              {/* Define the route for the Predictions component */}
              <Route path="/predictions" element={<Predictions />} />
            </Routes>
          </Box>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
};

export default App;
