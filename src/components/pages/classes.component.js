import { Grid } from "@mui/material";
import * as React from "react";
import { useEffect } from "react";
import { BlogPostCard } from "../../sections/@dashboard/blog";
import { useState } from "react";
import { Container, Stack, Typography } from "@mui/material";
import { ProductSort } from "../../sections/@dashboard/products";
import PRODUCTS from "../../_mock/products";
import NavBar from "../navbar";

export default function Classes({ mode, theme, colorMode }) {
  const [selectedFilter] = React.useState("All"); // Default filter
  const [filteredClasses, setFilteredClasses] = useState([]);

  // Use useEffect to update filteredClasses when selectedFilter changes
  useEffect(() => {
    // Filter the posts based on the selected filter
    console.log("Selected Filter:", selectedFilter);

    const newfilteredClasses = PRODUCTS.filter((product) => {
      const classesTitle = product?.title?.trim();
      if (classesTitle) {
        const firstLetter = classesTitle.charAt(0).toLowerCase();
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
      }
      return true;
    });
    console.log("Filtered Classes:", newfilteredClasses);
    // Update the filtered posts state
    setFilteredClasses(newfilteredClasses);
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
          <Typography variant="h4" sx={{ mb: 5 }}>
            Classes
          </Typography>
        </Stack>
        <Stack
          direction="row"
          flexWrap="wrap-reverse"
          alignItems="center"
          justifyContent="flex-end"
          sx={{ mb: 5 }}
        >
          <ProductSort />
        </Stack>
        <Grid container spacing={3}>
          {filteredClasses.map((classes) => (
            <BlogPostCard key={classes.id} post={classes} />
          ))}
        </Grid>
        {/* <ProductList products={PRODUCTS} /> */}
      </Container>
    </NavBar>
  );
}
