import * as React from 'react';
import { Grid, Container, Stack, Typography } from "@mui/material";
import { BlogPostCard } from "../../sections/@dashboard/blog";
import NavBar from "../navbar";
import { useSelector } from 'react-redux';

export default function Races({ mode, theme, colorMode }) {
  const races = useSelector((state) => state.races.races);

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
