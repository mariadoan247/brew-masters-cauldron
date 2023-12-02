import * as React from 'react';
import { Grid, Container, Stack, Typography } from "@mui/material";
import { BlogPostCard } from "../../sections/@dashboard/blog";
import NavBar from "../navbar";
import { useSelector } from 'react-redux';

export default function Races({ mode, theme, colorMode }) {
  const races = useSelector((state) => state.races.races);
  

  return (
    <NavBar mode={mode} theme={theme} colorMode={colorMode}>
      <Container style={{ paddingTop: "140px" }}>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          mb={2} // Reduced the marginBottom to create space between title and description
        >
          <Typography variant="h4" gutterBottom>
            Races
          </Typography>
        </Stack>
        
        <Typography
          color="inherit"
          variant="body1"
          component="p"
          marginLeft={5}
          sx={{ marginTop: -0.5, marginBottom: 2 }}
        >
          {" "}
          Your character's race is the cornerstone of their identity, shaping not only their physical form but also their cultural heritage and place in the vast tapestry of the world. Choosing a race is more than a mechanical decision; it's an exploration of ancestry, traditions, and the unique qualities that set your character apart. Whether you hail from the mystical realms of elves, the sturdy halls of dwarves, or the versatile realms of humans, your race weaves a story that intertwines with the grand narrative of your character's existence.{" "}
        </Typography>

        <Grid container spacing={3}>
          {Array.isArray(races) && races.map((race) => (
            <BlogPostCard key={race._id} post={race} />
          ))}
        </Grid>
      </Container>
    </NavBar>
  );
}
