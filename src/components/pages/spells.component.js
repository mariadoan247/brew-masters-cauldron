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

const columns = [
  { id: "name", label: "Name", minWidth: 170 },
  {
    id: "classVal",
    label: "By Class",
    minWidth: 170,
    align: "left",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "damage",
    label: "By Damage",
    minWidth: 170,
    align: "left",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "level",
    label: "By Level",
    minWidth: 170,
    align: "left",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "school",
    label: "By School",
    minWidth: 170,
    align: "left",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "other",
    label: "By Other",
    minWidth: 170,
    align: "left",
    format: (value) => value.toLocaleString("en-US"),
  },
];

function createData(name, classVal, damage, level, school, other) {
  return { name, classVal, damage, level, school, other };
}

const spellsByLevel = [
  createData("name level1", "class1", "damage1", "level1", "school1", "other1"),
  createData("name level2", "class2", "damage2", "level2", "school2", "other2"),
];

const spellsBySchool = [
  createData(
    "name school1",
    "class1",
    "damage1",
    "level1",
    "school1",
    "other1"
  ),
  createData(
    "name school2",
    "class2",
    "damage2",
    "level2",
    "school2",
    "other2"
  ),
];

const spellsByClass = [
  createData("name class1", "class1", "damage1", "level1", "school1", "other1"),
  createData("name class2", "class2", "damage2", "level2", "school2", "other2"),
  // Add more data for spells by class
];

const Spells = ({ mode, theme, colorMode }) => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [selectedTab, setSelectedTab] = React.useState(0);
  const [sortedColumn, setSortedColumn] = React.useState(null);
  const [sortDirection, setSortDirection] = React.useState("asc");
  const [rows, setRows] = React.useState([]);
  const spells = useSelector((state) => state.spells.spells);

  React.useEffect(() => {
    switch (selectedTab) {
      case 0:
        setRows(spellsByLevel);
        break;
      case 1:
        setRows(spellsBySchool);
        break;
      case 2:
        setRows(spellsByClass);
        break;
      default:
        break;
    }
  }, [selectedTab]);

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
    switch (selectedTab) {
      case 0:
        sortedData = sortData(spellsByLevel, columnId, newDirection);
        break;
      case 1:
        sortedData = sortData(spellsBySchool, columnId, newDirection);
        break;
      case 2:
        sortedData = sortData(spellsByClass, columnId, newDirection);
        break;
      default:
        break;
    }

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
                  Spells
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
            A spell is a discrete magical effect, a single shaping of the
            magical energies that suffuse the multiverse into a specific,
            limited expression. The more powerful a spell, the higher the level
            of spell slot it must be cast with.{" "}
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
            <Tab label="By Level" />
            <Tab label="By School" />
            <Tab label="By Class" />
          </Tabs>
        </AppBar>

        <Paper sx={{ width: "100%", overflow: "hidden" }}>
          <TableContainer sx={{ maxHeight: 440 }}>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  {columns.map((column) => (
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
                {displayedRows
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row) => {
                    return (
                      <TableRow
                        hover
                        role="checkbox"
                        tabIndex={-1}
                        key={row.code}
                      >
                        {columns.map((column) => {
                          const value = row[column.id];
                          return (
                            <TableCell key={column.id} align={column.align}>
                              {column.id === "name" ? (
                                <Link to={`/spells/${row.name}`}>{value}</Link>
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

export default Spells;
