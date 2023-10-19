import { Button } from "@mui/material";
import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { ThemeProvider } from "@mui/material/styles";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { useNavigate } from "react-router-dom";
import SchoolIcon from "@mui/icons-material/School";
import PeopleIcon from "@mui/icons-material/People";
import FingerprintIcon from "@mui/icons-material/Fingerprint";
import AutoFixHighIcon from "@mui/icons-material/AutoFixHigh";
import InventoryIcon from "@mui/icons-material/Inventory";
import FaceRetouchingOffIcon from "@mui/icons-material/FaceRetouchingOff";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import FormControl from "@mui/material/FormControl";
import { alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";

// @mui
import { Grid, Container, Stack, Typography } from "@mui/material";
// components
import { BlogPostCard } from "../sections/@dashboard/blog";
// mock
import POSTS from "../_mock/blog";
import BlogPostSort from "../sections/@dashboard/blog/BlogPostsSort";
import { useState, useEffect } from "react";

// ----------------------------------------------------------------------

const drawerWidth = 240;

const openedMixin = (theme) => ({
  position: "fixed",
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  position: "fixed",
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});


const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  zIndex: 999,
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

const SearchBoxContainer = styled("div")({
  display: "flex",
  alignItems: "center",
  flexGrow: 1,
  justifyContent: "center", // Center the search box horizontally
});

const BootstrapInput = styled(InputBase)(({ theme }) => ({
  "label + &": {
    marginTop: theme.spacing(3),
  },
  "& .MuiInputBase-input": {
    borderRadius: 4,
    position: "relative",
    backgroundColor: theme.palette.mode === "light" ? "#F3F6F9" : "#1A2027",
    border: "1px solid",
    borderColor: theme.palette.mode === "light" ? "#E0E3E7" : "#2D3843",
    fontSize: 16,
    width: "500px",
    padding: "10px 12px",
    transition: theme.transitions.create([
      "border-color",
      "background-color",
      "box-shadow",
    ]),
    "&:focus": {
      boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
      borderColor: theme.palette.primary.main,
    },
  },
}));

export default function Races({ mode, theme, colorMode }) {
  const [open, setOpen] = React.useState(false);
  const [selectedFilter, setSelectedFilter] = React.useState("All"); // Default filter
  const [filteredPosts, setFilteredPosts] = useState([]);

  const handleClose = () => {
    setOpen(null);
  };

  const handleMouseEnter = () => {
    if (!open) {
      setOpen(true);
    }
  };

  const handleMouseLeave = () => {
    if (open) {
      setOpen(false);
    }
  };

  const handleTextFieldMouseEnter = (e) => {
    e.stopPropagation(); // Stop event propagation to prevent the navbar from opening
  };

  const navigate = useNavigate();

  // Function to update the filtered posts when the filter changes
  const handleFilterChange = (filter) => {
    console.log("Filter changed:", filter); // Add this line
    setSelectedFilter(filter);
    handleClose();
  };

  // Use useEffect to update filteredPosts when selectedFilter changes
  useEffect(() => {
    // Filter the posts based on the selected filter
    console.log("Selected Filter:", selectedFilter);

    const newFilteredPosts = POSTS.filter((post) => {
      const postTitle = post.title.trim();
      const firstLetter = postTitle.charAt(0).toLowerCase();

      switch (selectedFilter) {
        case "A-D":
          return firstLetter >= "a" && firstLetter <= "d";
        case "E-H":
          return firstLetter >= "e" && firstLetter <= "h";
        case "I-L":
          return firstLetter >= "i" && firstLetter <= "l";
        case "M-P":
          return firstLetter >= "m" && firstLetter <= "p";
        case "Q-T":
          return firstLetter >= "q" && firstLetter <= "t";
        case "U-Z":
          return firstLetter >= "u" && firstLetter <= "z";
        default:
          return true;
      }
    });
    console.log("Filtered Posts:", newFilteredPosts);
    // Update the filtered posts state
    setFilteredPosts(newFilteredPosts);
  }, [selectedFilter]);

  return (
    <>
      <Box>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <AppBar position="fixed" open={open}>
            <Toolbar>
              <img
                src="/logo.png"
                onClick={() => {
                  navigate("/");
                }}
                alt="logo.png"
                width="40"
                height="40"
              ></img>
              <SearchBoxContainer>
                <form noValidate autoComplete="off">
                  <FormControl variant="standard">
                    <BootstrapInput
                      placeholder="Search Yourself a Champion"
                      id="bootstrap-input"
                      onMouseEnter={handleTextFieldMouseEnter}
                    />
                  </FormControl>
                </form>
              </SearchBoxContainer>
              <Button
                color="inherit" // Set the button color to blue
                sx={{ alignSelf: "center", marginLeft: "auto" }} // Center the button vertically
                onClick={() => navigate("/signin", { mode, theme })} //NAVIGATE THIS TO USER ACCOUNT PAGE
              >
                User Account
              </Button>
            </Toolbar>
          </AppBar>
          <div
            sx={{ display: "flex" }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <Drawer variant="permanent" open={open}>
              <Divider />
              <List>
                {[
                  "Classes",
                  "Races",
                  "Backgrounds",
                  "Spells",
                  "Inventory",
                  "Monsters",
                  "Feats",
                ].map((text, index) => (
                  <ListItem key={text} disablePadding>
                    <ListItemButton
                      sx={{
                        minHeight: 48,
                        justifyContent: open ? "initial" : "center",
                        px: 2.5,
                      }}
                      onClick={() => {
                        // Use a switch statement or if-else to determine the route based on the icon
                        switch (index) {
                          case 0:
                            navigate("/classes");
                            break;
                          case 1:
                            navigate("/races");
                            break;
                          case 2:
                            navigate("/backgrounds");
                            break;
                          case 3:
                            navigate("/spells");
                            break;
                          case 4:
                            navigate("/inventory");
                            break;
                          case 5:
                            navigate("/monsters");
                            break;
                          case 6:
                            navigate("/feats");
                            break;
                          default:
                            break;
                        }
                      }}
                    >
                      <ListItemIcon
                        sx={{
                          minWidth: 0,
                          mr: open ? 3 : "auto",
                          justifyContent: "center",
                        }}
                      >
                        {index % 6 === 0 && <SchoolIcon />}
                        {index % 6 === 1 && <PeopleIcon />}
                        {index % 6 === 2 && <FingerprintIcon />}
                        {index % 6 === 3 && <AutoFixHighIcon />}
                        {index % 6 === 4 && <InventoryIcon />}
                        {index % 6 === 5 && <FaceRetouchingOffIcon />}
                        {index % 6 === 6 && <WorkspacePremiumIcon />}
                      </ListItemIcon>
                      <ListItemText
                        primary={text}
                        sx={{ opacity: open ? 1 : 0 }}
                      />
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
              <div style={{ flexGrow: 1 }} />{" "}
              {/* Add a flexible div to push the theme toggle icon to the bottom */}
              <Divider />
              <IconButton
                onClick={() => navigate("/userAccount", { mode, theme })}
              >
                {<AccountCircleIcon />}
              </IconButton>
              <IconButton
                onClick={() => colorMode.toggleColorMode()}
                color="inherit"
              >
                {theme.palette.mode === theme ? (
                  <Brightness7Icon />
                ) : (
                  <Brightness4Icon />
                )}
              </IconButton>
            </Drawer>
          </div>
          <Container>
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="space-between"
              mb={10}
            >
              <Typography variant="h4" gutterBottom>
                Races
              </Typography>
            </Stack>

            <Stack
              mb={5}
              direction="row"
              alignItems="center"
              justifyContent="space-between"
            >
              <BlogPostSort onFilterChange={handleFilterChange} />
            </Stack>

            <Grid container spacing={3}>
              {filteredPosts.map((post) => (
                <BlogPostCard key={post.id} post={post} />
              ))}
            </Grid>
          </Container>
        </ThemeProvider>
      </Box>
    </>
  );
}
