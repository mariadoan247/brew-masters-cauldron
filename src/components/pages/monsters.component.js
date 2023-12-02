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
import { Grid, Container, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import NavBar from "../navbar";
import Toolbar from "@mui/material/Toolbar";
import SwapVertIcon from "@mui/icons-material/SwapVert";
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

const columns = [
  { id: "name", label: "Name", minWidth: 170 }
];

const Monsters = ({ mode, theme, colorMode }) => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [sortedColumn, setSortedColumn] = React.useState(null);
  const [sortDirection, setSortDirection] = React.useState("asc");
  const monsters = useSelector((state) => state.monsters.monsters);

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
  };

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
        <AppBar
          component="div"
          color="primary"
          position="static"
          elevation={0}
          sx={{ zIndex: 0 }}
        >
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            mb={2} // Reduced the marginBottom to create space between title and description
          >
            <Typography variant="h4" gutterBottom>
              Monsters
            </Typography>
          </Stack>
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
            The monsters encountered on your character's journey are more than mere adversaries; they are living, breathing challenges that shape the narrative of your adventures. Choosing monsters to populate your world is akin to writing a bestiary of your character's exploits. Each creature faced, whether a menacing dragon or a cunning goblin, leaves an indelible mark on your character's story. These encounters define your character's courage, cunning, and survival instincts, creating a tapestry of tales woven with the threads of monstrous adversaries confronted and conquered.{" "}
          </Typography>
        </AppBar>
        <Paper sx={{ width: "100%", overflow: "hidden" }}>
          <TableContainer sx={{ maxHeight: 440 }}>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  {columns.map((column) => (
                    <TableCell
                      key={column.id}
                      align="left"
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
                  {monsters
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((monster) => {
                    return (
                      <TableRow
                        hover
                        role="checkbox"
                        tabIndex={-1}
                        key={monster._id}
                      >
                        {columns.map((column) => {
                          const value = monster[column.id];
                          return (
                            <TableCell key={column.id} align={column.align}>
                              {column.id === "name" ? (
                                // Using BlogPostCard for rendering the title as a hyperlink
                                <BlogPostCard key={monster._id} post={monster} />
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
            count={monsters.length}
            rowsPerPage={rowsPerPage}
            page={page}
          />
        </Paper>
      </Container>
    </NavBar>
  );
};

export default Monsters;
