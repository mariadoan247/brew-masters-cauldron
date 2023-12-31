import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
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
import { isUserAuthenticated } from "../../actions/authActions";
import EditNoteIcon from "@mui/icons-material/EditNote";
import Button from "@mui/material/Button";
import { useDispatch, useSelector } from "react-redux";
import { updateNotes } from "../../actions/userActions";
import { format } from "date-fns";
import { fetchUserNotes } from "../../actions/userActions";
import AssignmentIcon from "@mui/icons-material/Assignment";
import Autocomplete from "@mui/material/Autocomplete";
import FormControl from "@mui/material/FormControl";
import InputBase from "@mui/material/InputBase";
import { alpha } from "@mui/material/styles";
import TextField from "@mui/material/TextField";

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

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

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
  justifyContent: "center",
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
  const [showNotes, setShowNotes] = React.useState(false);
  const [userNotes, setUserNotes] = React.useState("");
  const [searchInput, setSearchInput] = useState("");
  const dispatch = useDispatch();
  const isAuthenticated = isUserAuthenticated();
  const userEmail = useSelector((state) => state.auth.user.email);
  const notes = useSelector((state) => state.notes.notes);
  const availableRaceNames = useSelector((state) => state.races.races);
  const availableClassNames = useSelector((state) => state.classes.classes);
  const availableBackgroundNames = useSelector(
    (state) => state.backgrounds.backgrounds
  );
  const availableSpellNames = useSelector((state) => state.spells.spells);
  const availableItemNames = useSelector((state) => state.items.items);
  const availableMonsterslNames = useSelector((state) => state.spells.monsters);
  const availableFeatsNames = useSelector((state) => state.items.feats);

  const races = Array.isArray(availableRaceNames) ? availableRaceNames : [];

  useEffect(() => {
    // Function to fetch user notes
    const getUserNotes = () => {
      if (userEmail) {
        dispatch(fetchUserNotes(userEmail));
      }
    };

    getUserNotes();
  }, [userEmail, dispatch]);

  const searchableItems = [
    { page: "classes", content: availableClassNames },
    { page: "races", content: races },
    { page: "backgrounds", content: availableBackgroundNames },
    { page: "spells", content: availableSpellNames },
    { page: "inventory", content: availableItemNames },
    { page: "monsters", content: availableMonsterslNames },
    { page: "feats", content: availableFeatsNames },
  ];

  const allSearchableItems = searchableItems.reduce((allItems, currentItem) => {
    if (Array.isArray(currentItem.content)) {
      return allItems.concat(
        currentItem.content.map((item) => ({
          label: item.name, // Assuming 'name' is the property you want to display
          value: item, // You can adjust this based on your requirements
        }))
      );
    }
    return allItems;
  }, []);

  const handleSearch = () => {
    const trimmedInput = searchInput.trim().toLowerCase();

    // Check if the searched term exists in the content of any page
    for (const { page, content } of searchableItems) {
      const foundItem = content.find(
        (item) => item.name && item.name.toLowerCase().includes(trimmedInput)
      );

      if (foundItem) {
        // Construct the appropriate route based on the category (page)
        switch (page) {
          case "classes":
            navigate(`/classes/blog/${foundItem._id}`);
            break;
          case "races":
            navigate(`/races/blog/${foundItem._id}`);
            break;
          case "backgrounds":
            navigate(`/backgrounds/blog/${foundItem._id}`);
            break;
          case "spells":
            navigate(`/spells/blog/${foundItem._id}`);
            break;
          case "inventory":
            navigate(`/inventory/blog/${foundItem._id}`);
            break;
          // Add cases for other pages as needed
          case "monsters":
            navigate(`/monsters/blog/${foundItem._id}`);
            break;
          case "feats":
            navigate(`/feats/blog/${foundItem._id}`);
            break;
          default:
            navigate(`/blog/${foundItem._id}`);
            break;
        }
        return;
      }
    }

    // Navigate to a default search results page or handle as needed
    navigate(`/search?q=${encodeURIComponent(trimmedInput)}`);
  };

  const handleInputChange = (event, value) => {
    setSearchInput(value);
  };

  const handleSaveNote = () => {
    if (userNotes.trim()) {
      const noteObject = {
        details: userNotes,
        dateUpdated: format(new Date(), "yyyy-MM-dd HH:mm:ss"),
      };
      const updatedNotes = [noteObject, ...notes];
      dispatch(updateNotes(userEmail, updatedNotes));
      setUserNotes(""); // Clear the textarea after saving
      setShowNotes(false); // Hide the notes section after saving
    }
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
            />
            <div style={{ flex: 1 }} />
            {isAuthenticated && (
              <IconButton
                sx={{ alignSelf: "center" }}
                onClick={() => {
                  setShowNotes(!showNotes); // Toggle the notes section
                }}
              >
                <EditNoteIcon /> {/* Notes Icon */}
              </IconButton>
            )}
            {showNotes && isAuthenticated && (
              <div
                style={{
                  position: "absolute",
                  top: "65px", // Adjust the top position as needed
                  right: "20px", // Adjust the right position as needed
                  backgroundColor: theme.palette.background.paper,
                  padding: "10px",
                }}
              >
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <textarea
                    rows="5"
                    cols="30"
                    placeholder="Write your notes here..."
                    value={userNotes}
                    onChange={(e) => setUserNotes(e.target.value)}
                  ></textarea>
                  <Button
                    variant="contained"
                    color="primary"
                    sx={{ marginTop: "10px" }}
                    onClick={handleSaveNote}
                  >
                    Save
                  </Button>
                </div>
              </div>
            )}
            <IconButton
              sx={{ alignSelf: "center", marginLeft: "auto" }} // Center the button vertically
              onClick={() => {
                if (isAuthenticated) {
                  navigate("/userAccount", { mode, theme });
                } else {
                  navigate("/signin", { mode, theme });
                }
              }}
            >
              {<AccountCircleIcon />}
            </IconButton>
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
            <List>
              <ListItem key="CreateCharacter" disablePadding>
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? "initial" : "center",
                    px: 2.5,
                  }}
                  onClick={() => {
                    // Handle navigation to the survey page for creating a character
                    navigate("/characters");
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : "auto",
                      justifyContent: "center",
                    }}
                  >
                    <AssignmentIcon />
                  </ListItemIcon>
                  <ListItemText
                    color="inherit"
                    primary="Create A Character"
                    sx={{ opacity: open ? 1 : 0 }}
                  />
                </ListItemButton>
              </ListItem>
            </List>
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

        <Box component="main" sx={{ flexGrow: 1, p: 3, textAlign: "center" }}>
          <DrawerHeader />
          <div>
            <Typography
              variant="h3"
              sx={{ marginTop: 5, marginBottom: 2, fontFamily: "Baskervville" }}
            >
              BREWMASTER'S CAULDRON
            </Typography>
            <SearchBoxContainer>
              <Autocomplete
                disablePortal
                options={allSearchableItems}
                onInputChange={handleInputChange}
                onChange={(event, value) => {
                  // Trigger the search when an item is selected
                  if (value) {
                    handleSearch();
                  }
                }}
                style={{ width: 500 }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Search Yourself a Champion"
                    variant="standard"
                    onKeyDown={(e) => {
                      // Handle Enter key press for immediate search
                      if (e.key === "Enter") {
                        handleSearch();
                      }
                    }}
                  />
                )}
              />
            </SearchBoxContainer>
          </div>
        </Box>
      </ThemeProvider>
    </Box>
  );
}
