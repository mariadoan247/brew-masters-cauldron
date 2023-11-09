import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";

const CustomAppBar = ({ children }) => {
  return (
    <AppBar position="fixed">
      <Toolbar>{children}</Toolbar>
    </AppBar>
  );
};

export default CustomAppBar;
