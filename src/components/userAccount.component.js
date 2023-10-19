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
import { OverviewBudget } from '../sections/overview/overview-budget';
import { OverviewLatestOrders } from '../sections/overview/overview-latest-orders';
import { OverviewLatestProducts } from '../sections/overview/overview-latest-products';
import { OverviewSales } from '../sections/overview/overview-sales';
import { OverviewTasksProgress } from '../sections/overview/overview-tasks-progress';
import { OverviewTotalCustomers } from '../sections/overview/overview-total-customers';
import { OverviewTotalProfit } from '../sections/overview/overview-total-profit';
import { OverviewTraffic } from '../sections/overview/overview-traffic';


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

const now = new Date();

export default function MyApp({ mode, theme, colorMode }) {
  const [open, setOpen] = React.useState(false);

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
                  sm={6}
                  lg={3}
                >
                  <OverviewBudget
                    difference={12}
                    positive
                    sx={{ height: '100%' }}
                    value="$24k"
                  />
                </Grid>
                <Grid
                  xs={12}
                  sm={6}
                  lg={3}
                >
                  <OverviewTotalCustomers
                    difference={16}
                    positive={false}
                    sx={{ height: '100%' }}
                    value="1.6k"
                  />
                </Grid>
                <Grid
                  xs={12}
                  sm={6}
                  lg={3}
                >
                  <OverviewTasksProgress
                    sx={{ height: '100%' }}
                    value={75.5}
                  />
                </Grid>
                <Grid
                  xs={12}
                  sm={6}
                  lg={3}
                >
                  <OverviewTotalProfit
                    sx={{ height: '100%' }}
                    value="$15k"
                  />
                </Grid>
                <Grid
                  xs={12}
                  lg={8}
                >
                  <OverviewSales
                    chartSeries={[
                      {
                        name: 'This year',
                        data: [18, 16, 5, 8, 3, 14, 14, 16, 17, 19, 18, 20]
                      },
                      {
                        name: 'Last year',
                        data: [12, 11, 4, 6, 2, 9, 9, 10, 11, 12, 13, 13]
                      }
                    ]}
                    sx={{ height: '100%' }}
                  />
                </Grid>
                <Grid
                  xs={12}
                  md={6}
                  lg={4}
                >
                  <OverviewTraffic
                    chartSeries={[63, 15, 22]}
                    labels={['Desktop', 'Tablet', 'Phone']}
                    sx={{ height: '100%' }}
                  />
                </Grid>
                <Grid
                  xs={12}
                  md={6}
                  lg={4}
                >
                  <OverviewLatestProducts
                    products={[
                      {
                        id: '5ece2c077e39da27658aa8a9',
                        image: '/assets/products/product-1.png',
                        name: 'Healthcare Erbology',
                        updatedAt: subHours(now, 6).getTime()
                      },
                      {
                        id: '5ece2c0d16f70bff2cf86cd8',
                        image: '/assets/products/product-2.png',
                        name: 'Makeup Lancome Rouge',
                        updatedAt: subDays(subHours(now, 8), 2).getTime()
                      },
                      {
                        id: 'b393ce1b09c1254c3a92c827',
                        image: '/assets/products/product-5.png',
                        name: 'Skincare Soja CO',
                        updatedAt: subDays(subHours(now, 1), 1).getTime()
                      },
                      {
                        id: 'a6ede15670da63f49f752c89',
                        image: '/assets/products/product-6.png',
                        name: 'Makeup Lipstick',
                        updatedAt: subDays(subHours(now, 3), 3).getTime()
                      },
                      {
                        id: 'bcad5524fe3a2f8f8620ceda',
                        image: '/assets/products/product-7.png',
                        name: 'Healthcare Ritual',
                        updatedAt: subDays(subHours(now, 5), 6).getTime()
                      }
                    ]}
                    sx={{ height: '100%' }}
                  />
                </Grid>
                <Grid
                  xs={12}
                  md={12}
                  lg={8}
                >
                  <OverviewLatestOrders
                    orders={[
                      {
                        id: 'f69f88012978187a6c12897f',
                        ref: 'DEV1049',
                        amount: 30.5,
                        customer: {
                          name: 'Ekaterina Tankova'
                        },
                        createdAt: 1555016400000,
                        status: 'pending'
                      },
                      {
                        id: '9eaa1c7dd4433f413c308ce2',
                        ref: 'DEV1048',
                        amount: 25.1,
                        customer: {
                          name: 'Cao Yu'
                        },
                        createdAt: 1555016400000,
                        status: 'delivered'
                      },
                      {
                        id: '01a5230c811bd04996ce7c13',
                        ref: 'DEV1047',
                        amount: 10.99,
                        customer: {
                          name: 'Alexa Richardson'
                        },
                        createdAt: 1554930000000,
                        status: 'refunded'
                      },
                      {
                        id: '1f4e1bd0a87cea23cdb83d18',
                        ref: 'DEV1046',
                        amount: 96.43,
                        customer: {
                          name: 'Anje Keizer'
                        },
                        createdAt: 1554757200000,
                        status: 'pending'
                      },
                      {
                        id: '9f974f239d29ede969367103',
                        ref: 'DEV1045',
                        amount: 32.54,
                        customer: {
                          name: 'Clarke Gillebert'
                        },
                        createdAt: 1554670800000,
                        status: 'delivered'
                      },
                      {
                        id: 'ffc83c1560ec2f66a1c05596',
                        ref: 'DEV1044',
                        amount: 16.76,
                        customer: {
                          name: 'Adam Denisov'
                        },
                        createdAt: 1554670800000,
                        status: 'delivered'
                      }
                    ]}
                    sx={{ height: '100%' }}
                  />
                </Grid>
              </Grid>
            </Container>
          </Box>
        </>
        
      </ThemeProvider>
    </Box>
  );
}
