import * as React from 'react';
import { Grid, Container, Stack, Typography } from "@mui/material";
import { BlogPostCard } from "../../sections/@dashboard/blog";
import NavBar from "../navbar";
import { useSelector } from 'react-redux';

export default function Classes({ mode, theme, colorMode }) {
  //const filteredClasses = PRODUCTS; // Use all classes without filtering
  const classes = useSelector((state) => state.classes.classes);

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
          {Array.isArray(classes) && classes.map((classObj) => ( // Use all posts without filtering
            <BlogPostCard key={classObj._id} post={classObj} />
          ))}
        </Grid>
      </Container>
    </NavBar>
  );
}
