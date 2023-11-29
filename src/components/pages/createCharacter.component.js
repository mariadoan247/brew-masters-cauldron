import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
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
    Checkbox,
    Box,
} from "@mui/material";
import NavBar from "../navbar";


export default function Characters({ mode, theme, colorMode }) {
    const [characterName, setCharacterName] = useState("");
    const [characterRace, setCharacterRace] = useState("");
    const [characterClass, setCharacterClass] = useState("");
    const [characterAlignment, setCharacterAlignment] = useState("");
    const [characterBackground, setCharacterBackground] = useState("");
    const [characterSpell, setCharacterSpell] = useState([]);
    const [characterInventory, setCharacterInventory] = useState([]);
    const [availableRaces, setAvailableRaces] = useState([]);
    const [availableClasses, setAvailableClasses] = useState([]);
    const [availableBackgrounds, setAvailableBackgrounds] = useState([]);
    const [availableSpells, setAvailableSpells] = useState([]);
    const [availableItems, setAvailableItems] = useState([]);

    useEffect(() => {
        const fetchData = async (category, setFunction) => {
            try {
                const response = await axios.post('/api/${category}/fetch${category.charAt(0)toUpperCase() + category.slice(1)}');
                if (response.data && response.data[category]) {
                    setFunction(response.data[category]);
                }
            } catch (error) {
                console.error('Error fetching ${category}', error);
            }
        };

        fetchData("races", setAvailableRaces);
        fetchData("classes", setAvailableClasses);
        fetchData("backgrounds", setAvailableBackgrounds);
        fetchData("spells", setAvailableSpells);
        fetchData("items", setAvailableItems);
    }, []);

    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();

        const character = {
            name: characterName,
            race: characterRace,
            class: characterClass,
            alignment: characterAlignment,
            background: characterBackground,
            spell: characterSpell,
            inventory: characterInventory,
        };

        console.log("Character created:", character);

        // Pass the created character to the route
        navigate("/userAccount", { state: { createdCharacter: character } });
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
                    mb={5} 
                >
                    <Typography
                        variant="h4"
                        sx={{ fontFamily: "Baskervville" }}
                    >
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
                                        <InputLabel htmlFor="characterRace" >Character Race</InputLabel>
                                        <Select
                                            id="characterRace"
                                            value={characterRace}
                                            onChange={(event) => setCharacterRace(event.target.value)}
                                        >
                                            {availableRaces.map((race) => (
                                                <MenuItem key={race} value={race}>
                                                    {race}
                                                </MenuItem>
                                            ))}
                                        </Select>
                                    </FormControl>
                                </Grid>

                                <Grid item xs={12}>
                                    <FormControl fullWidth margin="normal">
                                        <InputLabel htmlFor="characterClass">Character Class</InputLabel>
                                        <Select
                                            id="characterClass"
                                            value={characterClass}
                                            onChange={(event) => setCharacterClass(event.target.value)}
                                        >
                                            {availableClasses.map((charClass) => (
                                                <MenuItem key={charClass} value={charClass}>
                                                    {charClass}
                                                </MenuItem>
                                            ))}
                                        </Select>
                                    </FormControl>
                                </Grid>

                                <Grid item xs={12}>
                                    <FormControl fullWidth margin="normal">
                                        <InputLabel htmlFor="characterAlignment">Character Alignment</InputLabel>
                                        <Select
                                            id="characterAlignment"
                                            value={characterAlignment}
                                            onChange={(event) => setCharacterAlignment(event.target.value)}
                                        >
                                            <MenuItem value="Lawful Good">Lawful Good</MenuItem>
                                            <MenuItem value="Neutral Good">Neutral Good</MenuItem>
                                            <MenuItem value="Chaotic Good">Chaotic Good</MenuItem>
                                            <MenuItem value="Lawful Neutral">Lawful Neutral</MenuItem>
                                            <MenuItem value="True Neutral">True Neutral</MenuItem>
                                            <MenuItem value="Chaotic Neutral">Chaotic Neutral</MenuItem>
                                            <MenuItem value="Lawful Evil">Lawful Evil</MenuItem>
                                            <MenuItem value="Neutral Evil">Neutral Evil</MenuItem>
                                            <MenuItem value="Chaotic Evil">Chaotic Evil</MenuItem>
                                            {/* Add more alignment options */}
                                        </Select>
                                    </FormControl>
                                </Grid>

                                <Grid item xs={12}>
                                    <FormControl fullWidth margin="normal">
                                        <InputLabel htmlFor="characterBackground">Character Background</InputLabel>
                                        <Select
                                            id="characterBackground"
                                            value={characterBackground}
                                            onChange={(event) => setCharacterBackground(event.target.value)}
                                        >
                                            {availableBackgrounds.map((bg) => (
                                                <MenuItem key={bg} value={bg}>
                                                    {bg}
                                                </MenuItem>
                                            ))}
                                        </Select>
                                    </FormControl>
                                </Grid>

                                <Grid item xs={12}>
                                    <FormControl fullWidth margin="normal">
                                        <InputLabel htmlFor="characterSpell">Character Spell</InputLabel>
                                        <Select
                                            id="characterSpell"
                                            multiple
                                            value={characterSpell}
                                            onChange={(event) => setCharacterSpell(event.target.value)}
                                            renderValue={(selected) => selected.join(", ")}
                                        >
                                            {availableSpells.map((item) => (
                                                <MenuItem key={item} value={item}>
                                                    <Checkbox checked={characterSpell.includes(item)} color="primary" />
                                                    {item}
                                                </MenuItem>
                                            ))}

                                        </Select>
                                    </FormControl>
                                </Grid>

                                <Grid item xs={12}>
                                    <FormControl fullWidth margin="normal">
                                        <InputLabel htmlFor="characterInventory">Character Inventory</InputLabel>
                                        <Select
                                            id="characterInventory"
                                            multiple
                                            value={characterInventory}
                                            onChange={(event) => setCharacterInventory(event.target.value)}
                                            renderValue={(selected) => selected.join(", ")}
                                        >
                                            {availableItems.map((item) => (
                                                <MenuItem key={item} value={item}>
                                                    <Checkbox checked={characterInventory.includes(item)} color="primary" />
                                                    {item}
                                                </MenuItem>
                                            ))}
                                        </Select>
                                    </FormControl>
                                </Grid>
                            </Grid>

                            <Button variant="contained" color="primary" type="submit" sx={{ mt: 3 }} onClick={() => navigate("/userAccount")}>
                                Create Character
                            </Button>
                        </form>
                    </Paper>
                </Box>

            </Container>
        </NavBar>
        
    );
}
