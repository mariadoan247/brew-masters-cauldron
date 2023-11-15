import { Grid } from "@mui/material";
import * as React from "react";
import { Container, Stack, Typography } from "@mui/material";
import { BlogPostCard } from "../../sections/@dashboard/blog";
import PRODUCTS from "../../_mock/products";
import NavBar from "../navbar";

export default function Classes({ mode, theme, colorMode }) {
  const filteredClasses = PRODUCTS; // Use all classes without filtering

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
            Classes
          </Typography>
        </Stack>
        <Grid container spacing={3}>
          {filteredClasses.map((classes) => (
            <BlogPostCard key={classes.id} post={classes} />
          ))}
        </Grid>
      </Container>
    </NavBar>
  );
}
