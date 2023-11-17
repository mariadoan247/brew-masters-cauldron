import React, { useEffect } from "react";
import { Grid, Container, Stack, Typography } from "@mui/material";
import { BlogPostCard } from "../../sections/@dashboard/blog";
import NavBar from "../navbar";
import { useSelector } from 'react-redux';
import { useDispatch } from "react-redux";
import { fetchRaces } from "../../actions/raceActions";

export default function Races({ mode, theme, colorMode }) {
  const dispatch = useDispatch();
  const races = useSelector((state) => state.races.races);

  useEffect(() => {
    // Function to fetch user notes
    const getRaces = () => {
      dispatch(fetchRaces());
    };

    getRaces();
  }, [dispatch]);

  console.log(races);

  return (
    <NavBar mode={mode} theme={theme} colorMode={colorMode}>
      <Container style={{ paddingTop: "70px" }}>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          mb={5}
        >
          <Typography variant="h4" gutterBottom>
            Races
          </Typography>
        </Stack>
        <Grid container spacing={3}>
          {Array.isArray(races) && races.map((race) => ( // Use all posts without filtering
            <BlogPostCard key={race._id} post={race} />
          ))}
        </Grid>
      </Container>
    </NavBar>
  );
}
