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
      <Container style={{ paddingTop: "140px" }}>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          mb={2} // Reduced the marginBottom to create space between title and description
        >
          <Typography variant="h4" gutterBottom>
            Classes
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
          The class you choose for your character is a declaration of their calling and the skills they've honed through rigorous training or innate talent. Each class represents a distinct archetype, be it the cunning rogue, the wise cleric, or the mighty barbarian. Choosing a class is not merely selecting abilities; it's embracing a narrative role in the epic saga of your character's adventures. The path you tread – whether the way of the sword, the arcane arts, or divine devotion – defines your character's purpose and the unique mark they leave on the unfolding story of their life.{" "}
        </Typography>

        <Grid container spacing={3}>
          {Array.isArray(classes) && classes.map((classObj) => ( // Use all posts without filtering
            <BlogPostCard key={classObj._id} post={classObj} />
          ))}
        </Grid>
      </Container>
    </NavBar>
  );
}
