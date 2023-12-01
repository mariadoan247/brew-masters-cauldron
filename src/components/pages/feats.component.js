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
  {
    id: "feat",
    label: "Feat",
    minWidth: 170,
    align: "left",
    format: (value) => value.toLocaleString("en-US"),
  },
];

function createData(feat) {
  return { feat };
}

const featsData = {
  0: [
    createData("Player's Handbook Feat 1"),
    createData("Player's Handbook Feat 2"),
    // Add more data as needed
  ],
  1: [
    createData("Xanather's Guide Feat 1"),
    createData("Xanather's Guide Feat 2"),
    // Add more data as needed
  ],
  2: [
    createData("Mordenkainen's Tome Feat 1"),
    createData("Mordenkainen's Tome Feat 2"),
    // Add more data as needed
  ],
  3: [
    createData("Tasha's Caludron Feat 1"),
    createData("Tasha's Caludron Feat 2"),
    // Add more data as needed
  ],
  4: [
    createData("Fizban's Treasury Feat 1"),
    createData("Fizban's Treasury Feat 2"),
    // Add more data as needed
  ],
  5: [
    createData("Strixhaven Feat 1"),
    createData("Strixhaven Feat 2"),
    // Add more data as needed
  ],
  6: [
    createData("Eberron Feat 1"),
    createData("Eberron Feat 2"),
    // Add more data as needed
  ],
  7: [
    createData("Wayfinder's Guide Feat 1"),
    createData("Wayfinder's Guide Feat 2"),
    // Add more data as needed
  ],
  8: [
    createData("Plane Shift Feat 1"),
    createData("Plane Shift Feat 2"),
    // Add more data as needed
  ],
};

const spellsByClass = [
  createData("name class1", "class1", "damage1", "level1", "school1", "other1"),
  createData("name class2", "class2", "damage2", "level2", "school2", "other2"),
  // Add more data for spells by class
];

const Feats = ({ mode, theme, colorMode }) => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [selectedTab, setSelectedTab] = React.useState(0);
  const [sortedColumn, setSortedColumn] = React.useState(null);
  const [sortDirection, setSortDirection] = React.useState("asc");
  const [rows, setRows] = React.useState([]);
  const feats = useSelector((state) => state.feats.feats);

  React.useEffect(() => {
    setRows(featsData[selectedTab]);
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

    const sortedData = sortData(featsData[selectedTab], columnId, newDirection);
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
                  Feats
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
            A feat represents a talent or an area of expertise that gives a
            character special capabilities. It embodies training, experience,
            and abilities beyond what a class provides. At certain levels, your
            class gives you the Ability Score Improvement feature.{" "}
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
            <Tab label="Player's Handbook" />
            <Tab label="Xanather's Guide" />
            <Tab label="Mordenkainen's Tome" />
            <Tab label="Tasha's Caludron" />
            <Tab label="Fizban's Treasury" />
            <Tab label="Strixhaven" />
            <Tab label="Eberron" />
            <Tab label="Wayfinder's Guide" />
            <Tab label="Plane Shift" />
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
                                <Link to={`/feats/${row.name}`}>{value}</Link>
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

export default Feats;
