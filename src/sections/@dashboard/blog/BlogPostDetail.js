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
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { ThemeProvider } from "@mui/material/styles";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { useNavigate } from 'react-router-dom';
import SchoolIcon from '@mui/icons-material/School';
import PeopleIcon from '@mui/icons-material/People';
import FingerprintIcon from '@mui/icons-material/Fingerprint';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import InventoryIcon from '@mui/icons-material/Inventory';
import FaceRetouchingOffIcon from '@mui/icons-material/FaceRetouchingOff';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import FormControl from '@mui/material/FormControl';
import { alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';

// @mui
import { Grid, Container } from '@mui/material';
import { useState } from "react";


import MainFeaturedPost from './MainFeaturedPost';
import Main from './Main';
import Sidebar from './Sidebar';
import post1 from './blog-post.1.md';
import post2 from './blog-post.2.md';
import post3 from './blog-post.3.md';
import { useParams } from 'react-router-dom';
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
    justifyContent: "center", // Center the search box horizontally
});

const BootstrapInput = styled(InputBase)(({ theme }) => ({
    'label + &': {
        marginTop: theme.spacing(3),
    },
    '& .MuiInputBase-input': {
        borderRadius: 4,
        position: 'relative',
        backgroundColor: theme.palette.mode === 'light' ? '#F3F6F9' : '#1A2027',
        border: '1px solid',
        borderColor: theme.palette.mode === 'light' ? '#E0E3E7' : '#2D3843',
        fontSize: 16,
        width: '500px',
        padding: '10px 12px',
        transition: theme.transitions.create([
            'border-color',
            'background-color',
            'box-shadow',
        ]),
        '&:focus': {
            boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
            borderColor: theme.palette.primary.main,
        },
    },
}));

export default function BlogPostDetail({ mode, theme, colorMode }) {
    const [open, setOpen] = React.useState(false);
    const [searchInput, setSearchInput] = useState('');
    const { postId } = useParams();
    

    const handleDrawerClose = () => {
        setOpen(false);
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


    const mainFeaturedPost = {
        title: 'Title of a longer featured blog post',
        description:
            "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
        image: 'https://source.unsplash.com/random?wallpapers',
        imageText: 'main image description',
        linkText: 'Continue reading…',
    };


    const posts = [post1, post2, post3];

    
    const sidebar = {
        title: 'About',
        description:
            'Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.',
        archives: [
            { title: 'March 2020', url: '#' },
            { title: 'February 2020', url: '#' },
            { title: 'January 2020', url: '#' },
            { title: 'November 1999', url: '#' },
            { title: 'October 1999', url: '#' },
            { title: 'September 1999', url: '#' },
            { title: 'August 1999', url: '#' },
            { title: 'July 1999', url: '#' },
            { title: 'June 1999', url: '#' },
            { title: 'May 1999', url: '#' },
            { title: 'April 1999', url: '#' },
        ],

    };



    return (
        <>
            <Box>
                <ThemeProvider theme={theme}>
                    <CssBaseline />
                    <AppBar position="fixed" open={open}>
                        <Toolbar>
                            <IconButton
                                color="inherit"
                                aria-label="open drawer"
                                edge="start"
                                sx={{
                                    marginRight: 5,
                                    ...(open && { display: "none" }),
                                }}
                                onClick={() => setOpen(!open)} // Toggle the 'open' state
                            >
                                <MenuIcon />
                            </IconButton>
                            <SearchBoxContainer>
                                <form noValidate autoComplete="off">
                                    <FormControl variant="standard">

                                        <BootstrapInput
                                            placeholder="Search Yourself a Champion"
                                            id="bootstrap-input"
                                            onMouseEnter={handleTextFieldMouseEnter}
                                            value={searchInput}
                                            onChange={(e) => setSearchInput(e.target.value)}
                                        />

                                    </FormControl>
                                </form>
                            </SearchBoxContainer>
                            <Button
                                color="inherit" // Set the button color to blue
                                sx={{ alignSelf: "center", marginLeft: "auto" }} // Center the button vertically
                                onClick={() => navigate('/signin', { mode, theme })} //NAVIGATE THIS TO USER ACCOUNT PAGE
                            >
                                User Account
                            </Button>
                        </Toolbar>
                    </AppBar>
                    <div sx={{ display: "flex" }}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    >
                        <Drawer variant="permanent" open={open}>
                            <DrawerHeader>
                                <IconButton onClick={handleDrawerClose}>
                                    {theme.direction === "rtl" ? (
                                        <ChevronRightIcon />
                                    ) : (
                                        <ChevronLeftIcon />
                                    )}
                                </IconButton>
                            </DrawerHeader>
                            <Divider />
                            <List>
                                {["Classes", "Races", "Backgrounds", "Spells", "Inventory", "Monsters", "Feats"].map((text, index) => (
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
                                                        navigate('/classes');
                                                        break;
                                                    case 1:
                                                        navigate('/races');
                                                        break;
                                                    case 2:
                                                        navigate('/backgrounds');
                                                        break;
                                                    case 3:
                                                        navigate('/spells');
                                                        break;
                                                    case 4:
                                                        navigate('/inventory');
                                                        break;
                                                    case 5:
                                                        navigate('/monsters');
                                                        break;
                                                    case 6:
                                                        navigate('/feats');
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
                                            <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
                                        </ListItemButton>
                                    </ListItem>
                                ))}
                            </List>

                            <div style={{ flexGrow: 1 }} /> {/* Add a flexible div to push the theme toggle icon to the bottom */}

                            <Divider />
                            <IconButton onClick={() => navigate('/userAccount', { mode, theme })}>
                                {<AccountCircleIcon />}
                            </IconButton>
                            <IconButton onClick={() => colorMode.toggleColorMode()} color="inherit">
                                {theme.palette.mode === theme ? <Brightness7Icon /> : <Brightness4Icon />}
                            </IconButton>
                        </Drawer>
                    </div>


                    <Container maxWidth="lg" sx={{ marginTop: '100px' }} >
                        <main>
                            <MainFeaturedPost post={mainFeaturedPost}  />
                            <Grid container spacing={5} sx={{ mt: 3 }}>
                                <Main title="From the firehose" posts={posts} />
                                <Sidebar
                                    title={sidebar.title}
                                    description={sidebar.description}
                                    archives={sidebar.archives}  
                                />
                            </Grid>
                        </main>
                    </Container>
                </ThemeProvider>
            </Box>
        </>
    );

}