import * as React from "react";
import { Grid, Container, Stack, Typography } from "@mui/material";
import { BlogPostCard } from "../../sections/@dashboard/blog";
import POSTS from "../../_mock/blog";
import NavBar from "../navbar";

export default function Races({ mode, theme, colorMode }) {
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
          {POSTS.map((post) => ( // Use all posts without filtering
            <BlogPostCard key={post.id} post={post} />
          ))}
        </Grid>
      </Container>
    </NavBar>
  );
}
