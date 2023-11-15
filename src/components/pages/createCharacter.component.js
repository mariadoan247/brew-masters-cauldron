import React, { useState } from "react";
import {
  FormControl,
  InputLabel,
  Container,
  Input,
  Button,
  Select,
  MenuItem,
  Typography,
  Grid,
  Paper,
  Box,
} from "@mui/material";
import NavBar from "../navbar";

export default function Characters({ mode, theme, colorMode }) {
  const [characterName, setCharacterName] = useState("");
  const [characterRace, setCharacterRace] = useState("");
  const [characterClass, setCharacterClass] = useState("");
  const [characterAlignment, setCharacterAlignment] = useState("");
  const [characterBackground, setCharacterBackground] = useState("");
  const [characterSpell, setCharacterSpell] = useState("");
  const [characterInventory, setCharacterInventory] = useState("");
  const [characterMonster, setCharacterMonster] = useState("");
  const [characterFeat, setCharacterFeat] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    // Create the character object
    const character = {
      name: characterName,
      race: characterRace,
      class: characterClass,
      alignment: characterAlignment,
      background: characterBackground,
      spell: characterSpell,
      inventory: characterInventory,
      monster: characterMonster,
      feat: characterFeat,
    };

    // Save the character to the database or perform other actions
    console.log("Character created:", character);

    // You can add logic to send this data to your backend or perform other actions here
  };

  return (
    <NavBar mode={mode} theme={theme} colorMode={colorMode}>
      <Container style={{ paddingTop: "50px" }}>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          mt={5}
          mx={2}
        >
          <Typography variant="h4">
            Create Your Dungeons and Dragons Character
          </Typography>

          <Paper elevation={3} sx={{ p: 3, mt: 2, width: "100%" }}>
            <form onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <FormControl fullWidth margin="normal">
                    <InputLabel htmlFor="characterName">
                      Character Name
                    </InputLabel>
                    <Input
                      id="characterName"
                      type="text"
                      placeholder="Enter your character's name"
                      value={characterName}
                      onChange={(event) =>
                        setCharacterName(event.target.value)
                      }
                    />
                  </FormControl>
                </Grid>

                <Grid item xs={12}>
                  <FormControl fullWidth margin="normal">
                    <InputLabel htmlFor="characterRace">
                      Character Race
                    </InputLabel>
                    <Select
                      id="characterRace"
                      value={characterRace}
                      onChange={(event) =>
                        setCharacterRace(event.target.value)
                      }
                    >
                      <MenuItem value="Human">Human</MenuItem>
                      <MenuItem value="Elf">Elf</MenuItem>
                      {/* Add more race options */}
                    </Select>
                  </FormControl>
                </Grid>

                <Grid item xs={12}>
                  <FormControl fullWidth margin="normal">
                    <InputLabel htmlFor="characterClass">
                      Character Class
                    </InputLabel>
                    <Select
                      id="characterClass"
                      value={characterClass}
                      onChange={(event) =>
                        setCharacterClass(event.target.value)
                      }
                    >
                      <MenuItem value="Wizard">Wizard</MenuItem>
                      <MenuItem value="Fighter">Fighter</MenuItem>
                      {/* Add more class options */}
                    </Select>
                  </FormControl>
                </Grid>

                <Grid item xs={12}>
                  <FormControl fullWidth margin="normal">
                    <InputLabel htmlFor="characterAlignment">
                      Character Alignment
                    </InputLabel>
                    <Select
                      id="characterAlignment"
                      value={characterAlignment}
                      onChange={(event) =>
                        setCharacterAlignment(event.target.value)
                      }
                    >
                      <MenuItem value="Lawful Good">Lawful Good</MenuItem>
                      <MenuItem value="Neutral Good">Neutral Good</MenuItem>
                      <MenuItem value="Chaotic Good">Chaotic Good</MenuItem>
                      {/* Add more alignment options */}
                    </Select>
                  </FormControl>
                </Grid>

                <Grid item xs={12}>
                  <FormControl fullWidth margin="normal">
                    <InputLabel htmlFor="characterBackground">
                      Character Background
                    </InputLabel>
                    <Select
                      id="characterBackground"
                      value={characterBackground}
                      onChange={(event) =>
                        setCharacterBackground(event.target.value)
                      }
                    >
                      <MenuItem value="Acolyte">Acolyte</MenuItem>
                      <MenuItem value="Sage">Sage</MenuItem>
                      {/* Add more background options */}
                    </Select>
                  </FormControl>
                </Grid>

                <Grid item xs={12}>
                  <FormControl fullWidth margin="normal">
                    <InputLabel htmlFor="characterSpell">
                      Character Spell
                    </InputLabel>
                    <Input
                      id="characterSpell"
                      type="text"
                      placeholder="Enter your character's spell"
                      value={characterSpell}
                      onChange={(event) =>
                        setCharacterSpell(event.target.value)
                      }
                    />
                  </FormControl>
                </Grid>

                <Grid item xs={12}>
                  <FormControl fullWidth margin="normal">
                    <InputLabel htmlFor="characterInventory">
                      Character Inventory
                    </InputLabel>
                    <Input
                      id="characterInventory"
                      type="text"
                      placeholder="Enter your character's inventory"
                      value={characterInventory}
                      onChange={(event) =>
                        setCharacterInventory(event.target.value)
                      }
                    />
                  </FormControl>
                </Grid>

                <Grid item xs={12}>
                  <FormControl fullWidth margin="normal">
                    <InputLabel htmlFor="characterMonster">
                      Character Monster
                    </InputLabel>
                    <Input
                      id="characterMonster"
                      type="text"
                      placeholder="Enter your character's monster"
                      value={characterMonster}
                      onChange={(event) =>
                        setCharacterMonster(event.target.value)
                      }
                    />
                  </FormControl>
                </Grid>

                <Grid item xs={12}>
                  <FormControl fullWidth margin="normal">
                    <InputLabel htmlFor="characterFeat">
                      Character Feat
                    </InputLabel>
                    <Input
                      id="characterFeat"
                      type="text"
                      placeholder="Enter your character's feat"
                      value={characterFeat}
                      onChange={(event) =>
                        setCharacterFeat(event.target.value)
                      }
                    />
                  </FormControl>
                </Grid>
              </Grid>

              <Button variant="contained" color="primary" type="submit" sx={{ mt: 3 }}>
                Create Character
              </Button>
            </form>
          </Paper>
        </Box>
      </Container>
    </NavBar>
  );
}
