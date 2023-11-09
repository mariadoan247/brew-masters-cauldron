import {
  Button,
  Grid,
  Card,
  Typography,
  Stack,
  CardMedia,
  CardContent,
  CardActions,
} from "@mui/material";
import * as React from "react";
import Box from "@mui/material/Box";
import { useNavigate } from "react-router-dom";
import Container from "@mui/material/Container";
import NavBar from "../wrappers/NavBar";

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function Inventory({ mode, theme, colorMode }) {
  const navigate = useNavigate();

  return (
    <NavBar mode={mode} theme={theme} colorMode={colorMode}>
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: "background.paper",
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Inventory
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="text.secondary"
              paragraph
            >
              Click on a type to Learn More
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              {/* <Button variant="contained">Main call to action</Button>
                <Button variant="outlined">Secondary action</Button> */}
            </Stack>
          </Container>
        </Box>
        <Container sx={{ py: 8 }} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <CardMedia
                    component="div"
                    sx={{
                      // 16:9
                      pt: "56.25%",
                    }}
                    image="https://media.discordapp.net/attachments/768207997079519233/1166118474754576465/armour.png?ex=65495375&is=6536de75&hm=13fa78bac6cca5ed050ad8dff51d87c3ef56314cbd95f045a0ff4b721a21ec0c&=&width=1280&height=668"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Armor
                    </Typography>
                    <Typography>View different types of armor</Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" onClick={() => navigate("/armor")}>
                      View More
                    </Button>
                    {/* <Button size="small">Edit</Button> */}
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
    </NavBar>
  );
}
