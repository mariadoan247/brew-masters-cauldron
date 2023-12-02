import * as React from "react";
import { styled } from "@mui/material/styles";
import MuiAppBar from "@mui/material/AppBar";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { Grid, Container, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import NavBar from "../navbar";
import Toolbar from "@mui/material/Toolbar";
import SwapVertIcon from "@mui/icons-material/SwapVert";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import { useSelector } from "react-redux";
import {BlogPostCard } from "../../sections/@dashboard/blog";


const drawerWidth = 240;

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

const columnsByCategory = {
  // Weapons
  0: [
    {
      id: "weapon",
      label: "Weapon",
      minWidth: 170,
      align: "left",
      format: (value) => value.toLocaleString("en-US"),
    },
    {
      id: "cost",
      label: "Cost",
      minWidth: 170,
      align: "left",
      format: (value) => value.toLocaleString("en-US"),
    },
    {
      id: "damage",
      label: "Damage",
      minWidth: 170,
      align: "left",
      format: (value) => value.toLocaleString("en-US"),
    },
    {
      id: "weight",
      label: "Weight",
      minWidth: 170,
      align: "left",
      format: (value) => value.toLocaleString("en-US"),
    },
    {
      id: "properties",
      label: "Properties",
      minWidth: 170,
      align: "left",
      format: (value) => value.toLocaleString("en-US"),
    },
  ],
  // Tools
  1: [
    {
      id: "item",
      label: "Item",
      minWidth: 170,
      align: "left",
      format: (value) => value.toLocaleString("en-US"),
    },
    {
      id: "cost",
      label: "Cost",
      minWidth: 170,
      align: "left",
      format: (value) => value.toLocaleString("en-US"),
    },
    {
      id: "weight",
      label: "Weight",
      minWidth: 170,
      align: "left",
      format: (value) => value.toLocaleString("en-US"),
    },
  ],
  // Mounts & Vehicles
  2: [
    {
      id: "item",
      label: "Item",
      minWidth: 170,
      align: "left",
      format: (value) => value.toLocaleString("en-US"),
    },
    {
      id: "cost",
      label: "Cost",
      minWidth: 170,
      align: "left",
      format: (value) => value.toLocaleString("en-US"),
    },
    {
      id: "speed",
      label: "Speed",
      minWidth: 170,
      align: "left",
      format: (value) => value.toLocaleString("en-US"),
    },
    {
      id: "capacity",
      label: "Capacity",
      minWidth: 170,
      align: "left",
      format: (value) => value.toLocaleString("en-US"),
    },
  ],
  // Trinkets
  3: [
    {
      id: "d100",
      label: "d100",
      minWidth: 170,
      align: "left",
      format: (value) => value.toLocaleString("en-US"),
    },
    {
      id: "trinket",
      label: "Trinket",
      minWidth: 170,
      align: "left",
      format: (value) => value.toLocaleString("en-US"),
    },
  ],
  // Equipment
  4: [
    {
      id: "classType",
      label: "Class",
      minWidth: 170,
      align: "left",
      format: (value) => value.toLocaleString("en-US"),
    },
    {
      id: "funds",
      label: "Funds",
      minWidth: 170,
      align: "left",
      format: (value) => value.toLocaleString("en-US"),
    },
  ],
};

/*
function createWeapon(weapon, cost, damage, weight, properties) {
  return { weapon, cost, damage, weight, properties };
}

const inventoryByWeapons = [
  createWeapon("Club", "1 sp", "1d4 bludgeoning", "2 lb.", "Light"),
  createWeapon(
    "Dagger",
    "1 gp",
    "1d4 piercing",
    "1 lb.",
    "	Finesse, light, thrown (range 20/60)"
  ),
];

function createTools(item, cost, weight) {
  return { item, cost, weight };
}

const inventoryByTools = [
  createTools("name school1", "class1", "damage1"),
  createTools("name school2", "class2", "damage2"),
];

function createMounts(item, cost, speed, capacity) {
  return { item, cost, speed, capacity };
}

const inventoryByMount = [
  createMounts("name school1", "class1", "damage1", "damage1"),
  createMounts("name school2", "class2", "damage2", "damage2"),
];

function createTrinkets(d100, trinket) {
  return { d100, trinket };
}

const inventoryByTrinkets = [
  createTrinkets("name school1", "class1"),
  createTrinkets("name school2", "class2"),
];

function createEquipment(classType, funds) {
  return { classType, funds };
}

const inventoryByEquipment = [
  createEquipment("name school1", "class1"),
  createEquipment("name school2", "class2"),
];
*/

const Inventory = ({ mode, theme, colorMode }) => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [selectedTab, setSelectedTab] = React.useState(0);
  const [sortedColumn, setSortedColumn] = React.useState(null);
  const [sortDirection, setSortDirection] = React.useState("asc");
  const [rows, setRows] = React.useState([]);
  const items = useSelector((state) => state.items.items);

  React.useEffect(() => {
    const selectedTabItems = items[selectedTab];
    setRows(selectedTabItems || []);
  }, [selectedTab, items]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeTab = (event, newValue) => {
    setSelectedTab(newValue);
    setPage(0); // Reset page when changing tabs
    setSortedColumn(null); // Reset sorting when changing tabs
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const sortData = (data, sortBy, direction) => {
    const sortedData = [...data].sort((a, b) => {
      if (direction === "asc") {
        return a[sortBy] > b[sortBy] ? 1 : -1;
      } else {
        return a[sortBy] < b[sortBy] ? 1 : -1;
      }
    });

    return sortedData;
  };

  const handleSort = (columnId) => {
    const isAsc = sortedColumn === columnId && sortDirection === "asc";
    const newDirection = isAsc ? "desc" : "asc";
    setSortDirection(newDirection);
    setSortedColumn(columnId);

    let sortedData = [];

    // Choose the correct dataset based on the selected tab
    const selectedTabItems = items[selectedTab];
    sortedData = sortData(selectedTabItems || [], columnId, newDirection);

    setRows(sortedData);
  };

  // Display data based on the selected tab
  const displayedRows = (() => {
    const sortedData = sortData(rows, sortedColumn, sortDirection);
    return sortedData.slice(
      page * rowsPerPage,
      page * rowsPerPage + rowsPerPage
    );
  })();

  // Choose the correct columns based on the selected tab
  const currentColumns = columnsByCategory[selectedTab];

  return (
    <NavBar mode={mode} theme={theme} colorMode={colorMode}>
      <Container
        maxWidth="xl"
        sx={{
          marginTop: "140px",
          marginLeft: "50px",
          minHeight: "150vh",
          display: "flex",
          flexDirection: "column",
          width: "95%",
        }}
      >
        <Grid container spacing={10} alignItems="center">
          <Grid sx={{ display: { sm: "none", xs: "block" } }} item></Grid>
        </Grid>
        <AppBar
          component="div"
          color="primary"
          position="static"
          elevation={0}
          sx={{ zIndex: 0 }}
        >
          <Toolbar>
            <Grid container alignItems="center" spacing={1}>
              <Grid item xs>
                <Typography color="inherit" variant="h5" component="h1">
                  Inventory
                </Typography>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
        <AppBar
          component="div"
          position="static"
          elevation={0}
          sx={{ zIndex: 0 }}
        >
          <Typography
            color="inherit"
            variant="body1"
            component="p"
            marginLeft={5}
            sx={{ marginTop: -0.5, marginBottom: 2 }}
          >
            {" "}
            Things you can carry. From weapons to tools, and even to trinkets!{" "}
          </Typography>
        </AppBar>
        <AppBar
          component="div"
          position="static"
          elevation={0}
          sx={{ zIndex: 0 }}
        >
          <Tabs
            value={selectedTab}
            textColor="inherit"
            onChange={handleChangeTab}
          >
            <Tab label="Weapons" />
            <Tab label="Tools" />
            <Tab label="Mounts & Vehicles" />
            <Tab label="Trinkets" />
            <Tab label="Equipment" />
            {/* Add other tabs as needed */}
          </Tabs>
        </AppBar>

        <Paper sx={{ width: "100%", overflow: "hidden" }}>
          <TableContainer sx={{ maxHeight: 440 }}>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  {currentColumns.map((column) => (
                    <TableCell
                      key={column.id}
                      align={column.align}
                      style={{ minWidth: column.minWidth, cursor: "pointer" }}
                      onClick={() => handleSort(column.id)}
                    >
                      <Grid container alignItems="center" spacing={1}>
                        <Grid item>{column.label}</Grid>
                        <Grid item>
                          <SwapVertIcon fontSize="small" />
                        </Grid>
                      </Grid>
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {displayedRows.map((row) => {
                  return (
                    <TableRow
                      hover
                      role="checkbox"
                      tabIndex={-1}
                      key={row.code}
                    >
                      {currentColumns.map((column) => {
                        const value = row[column.id];
                        return (
                          <TableCell key={column.id} align={column.align}>
                          {column.id === "name" ? (
                            // Using BlogPostCard for rendering the title as a hyperlink
                            <BlogPostCard key={row._id} post={row} />
                          ) : column.format && typeof value === "number" ? (
                            column.format(value)
                          ) : (
                            value
                          )}
                        </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[10, 25, 100]}
            component="div"
            count={displayedRows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>
      </Container>
    </NavBar>
  );
};

export default Inventory;
