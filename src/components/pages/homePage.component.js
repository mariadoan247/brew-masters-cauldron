import { TextField } from "@mui/material";
import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import NavBar from "../navbar";

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

export default function MyApp({ mode, theme, colorMode }) {
  const handleTextFieldMouseEnter = (e) => {
    e.stopPropagation(); // Stop event propagation to prevent the navbar from opening
  };

  return (
    <NavBar mode={mode} theme={theme} colorMode={colorMode}>
      <Box component="main" sx={{ flexGrow: 1, p: 3, textAlign: "center" }}>
        <DrawerHeader />
        <div>
          <Typography
            variant="h3"
            sx={{ marginTop: 5, marginBottom: 2, fontFamily: "Baskervville" }}
          >
            BREWMASTER'S CAULDRON
          </Typography>
          <TextField
            fullWidth
            label="Search Yourself a Champion"
            id="fullWidth"
            sx={{ width: "70%", mx: "auto" }}
            onMouseEnter={handleTextFieldMouseEnter}
          />
        </div>
      </Box>
    </NavBar>
  );
}
