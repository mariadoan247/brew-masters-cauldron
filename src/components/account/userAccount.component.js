import * as React from "react";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Container, Unstable_Grid2 as Grid } from "@mui/material";
import { OverviewLatestNotes } from "../../sections/overview/overview-latest-notes";
import { OverviewLatestPagesVisited } from "../../sections/overview/overview-latest-pages";
import { OverviewProfileDescript } from "../../sections/overview/overview-profile-descript";
import { OverviewUserInfo } from "../../sections/overview/overview-user-info";
import { signOutUser } from "../../actions/authActions";
import { createNewNote } from "../../actions/userActions";
import { useSelector } from 'react-redux';
import { useDispatch } from "react-redux";
import NavBar from "../navbar";

export default function UserAccount({ mode, theme, colorMode }) {
  const [pages, setPages] = React.useState([]);
  const user = useSelector((state) => state.auth.user);
  const notes = useSelector((state) => state.notes.notes);

  // Function to update the "pages" data when a new page is visited
  const updateVisitedPage = (pageName) => {
    const updatedPages = [...pages, { name: pageName, updatedAt: new Date() }];
    setPages(updatedPages);
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <NavBar mode={mode} theme={theme} colorMode={colorMode}>
      <Box
        component="main"
        sx={{
          marginTop: "50px",
          marginLeft: "50px",
          flexGrow: 1,
          py: 8,
        }}
      >
        <Container maxWidth="xl">
          <Grid container spacing={3}>
            <Grid xs={12} lg={8}>
              <OverviewProfileDescript
              //TODO: MAKE PROFILE DEETS HERE
              username={user?.name || 'Loading...'}
              />
            </Grid>
            <Grid xs={12} md={6} lg={4}>
              <OverviewUserInfo
                chartSeries={[63, 15, 22]}
                labels={["Username", "Email"]}
                sx={{ height: "100%" }}
                username={user?.name || 'Loading...'}
                email={user?.email || 'Loading...'}
              />
            </Grid>

            <Grid xs={12} md={6} lg={4}>
              <OverviewLatestPagesVisited
                pages={pages}
                updatePage={updateVisitedPage}
                sx={{ height: "100%" }}
              />
            </Grid>
            <Grid xs={12} md={12} lg={8}>
              <OverviewLatestNotes
                notes={notes}
                user={user}
                onSaveNotes={(updatedNotes) => dispatch(createNewNote(user.email, updatedNotes))}
                sx={{ height: "100%" }}
              />
            </Grid>
          </Grid>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: 3,
            }}
          >
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
    </NavBar>
  );
}
