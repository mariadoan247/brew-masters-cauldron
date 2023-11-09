import * as React from "react";
import { Grid, Container, Stack, Typography } from "@mui/material";
import { BlogPostCard } from "../../sections/@dashboard/blog";
import POSTS from "../../_mock/blog";
import BlogPostSort from "../../sections/@dashboard/blog/BlogPostsSort";
import { useState, useEffect } from "react";
import NavBar from "../wrappers/NavBar";

// ----------------------------------------------------------------------

export default function Races({ mode, theme, colorMode }) {
  const [setOpen] = React.useState(false);
  const [selectedFilter, setSelectedFilter] = React.useState("All");
  const [filteredPosts, setFilteredPosts] = useState([]);

  const handleClose = () => {
    setOpen(null);
  };

  const handleFilterChange = (filter) => {
    console.log("Filter changed:", filter); // Add this line
    setSelectedFilter(filter);
    handleClose();
  };

  useEffect(() => {
    // Filter the posts based on the selected filter
    console.log("Selected Filter:", selectedFilter);

    const newFilteredPosts = POSTS.filter((post) => {
      const postTitle = post.title.trim();
      const firstLetter = postTitle.charAt(0).toLowerCase();

      switch (selectedFilter) {
        case "A-D":
          return firstLetter >= "a" && firstLetter <= "d";
        case "E-H":
          return firstLetter >= "e" && firstLetter <= "h";
        case "I-L":
          return firstLetter >= "i" && firstLetter <= "l";
        case "M-P":
          return firstLetter >= "m" && firstLetter <= "p";
        case "Q-T":
          return firstLetter >= "q" && firstLetter <= "t";
        case "U-Z":
          return firstLetter >= "u" && firstLetter <= "z";
        default:
          return true;
      }
    });
    console.log("Filtered Posts:", newFilteredPosts);
    setFilteredPosts(newFilteredPosts);
  }, [selectedFilter]);

  return (
    <NavBar mode={mode} theme={theme} colorMode={colorMode}>
      <Container>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          mb={10}
        >
          <Typography variant="h4" gutterBottom>
            Races
          </Typography>
        </Stack>

        <Stack
          mb={5}
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <BlogPostSort onFilterChange={handleFilterChange} />
        </Stack>

        <Grid container spacing={3}>
          {filteredPosts.map((post) => (
            <BlogPostCard key={post.id} post={post} />
          ))}
        </Grid>
      </Container>
    </NavBar>
  );
}
