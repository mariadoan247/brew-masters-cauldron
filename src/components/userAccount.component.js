import * as React from "react";
import { styled, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import MuiDrawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import { Button } from "@mui/material";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
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
import { subDays, subHours } from 'date-fns';
import { Container, Unstable_Grid2 as Grid } from '@mui/material';
import { OverviewLatestNotes } from '../sections/overview/overview-latest-notes';
import { OverviewLatestPagesVisited } from '../sections/overview/overview-latest-pages';
import { OverviewProfileDescript } from '../sections/overview/overview-profile-descript';
import { OverviewUserInfo } from '../sections/overview/overview-user-info';
import { signOutUser } from "../actions/authActions";
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';


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


export default function MyApp({ mode, theme, colorMode }) {
  const [open, setOpen] = React.useState(false);
  const [notes, setNotes] = React.useState([]); // Define the notes state
  const [pages, setPages] = React.useState([]);
  const user = useSelector((state) => state.auth.user);

  console.log(user);

  // Function to update the "pages" data when a new page is visited
  const updateVisitedPage = (pageName) => {
    const updatedPages = [...pages, { name: pageName, updatedAt: new Date() }];
    setPages(updatedPages);
  };

  const handleSaveNotes = (updatedNotes) => {
    setNotes(updatedNotes); // Update the notes state when saving notes
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

  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
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
              onClick={() => navigate("/signin", { mode, theme })}
            >
              Sign In
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
        <>


          <Box
            component="main"
            sx={{
              marginTop: "50px",
              marginLeft: "50px",
              flexGrow: 1,
              py: 8
            }}
          >
            <Container maxWidth="xl">
              <Grid
                container
                spacing={3}
              >
                <Grid
                  xs={12}
                  lg={8}
                >
                  <OverviewProfileDescript
                  //TODO: MAKE PROFILE DEETS HERE
                  username={user?.name || 'Loading...'}
                  />
                </Grid>
                <Grid
                  xs={12}
                  md={6}
                  lg={4}
                >
                  <OverviewUserInfo
                  chartSeries={[63, 15, 22]} // Keep or adjust as per your requirements
                  labels={['ID', 'Email']}
                  sx={{ height: '100%' }}
                  username={user?.name || 'Loading...'}
                  email={user?.email || 'Loading...'}
                />
                </Grid>
                <Grid
                  xs={12}
                  md={6}
                  lg={4}
                >
                  <OverviewLatestPagesVisited pages={pages} updatePage={updateVisitedPage} sx={{ height: '100%' }} />
                </Grid>
                <Grid
                  xs={12}
                  md={12}
                  lg={8}
                >
                  <OverviewLatestNotes notes={notes} onSaveNotes={handleSaveNotes} sx={{ height: '100%' }} />
                </Grid>
              </Grid>
              <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 3 }}>
                <Button
                  color="inherit"
                  onClick={() => {
                    dispatch(signOutUser());
                    navigate("/", { mode, theme });
                  }}
                >
                  Sign Out
                </Button>
              </Box>
            </Container>
          </Box>
        </>
      </ThemeProvider>
    </Box>
  );
}
