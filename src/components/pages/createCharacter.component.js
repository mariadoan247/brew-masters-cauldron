import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';
import { useDispatch } from "react-redux";
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
import { updateCharacters } from "../../actions/userActions";

export default function Characters({ mode, theme, colorMode }) {
    const [characterName, setCharacterName] = useState("");
    const [characterRace, setCharacterRace] = useState("");
    const [characterClass, setCharacterClass] = useState("");
    const [characterAlignment, setCharacterAlignment] = useState("");
    const [characterBackground, setCharacterBackground] = useState("");
    const [characterSpell, setCharacterSpell] = useState([]);
    const [characterInventory, setCharacterInventory] = useState([]);
    const availableRaceNames = useSelector((state) => state.races.races).map(c => c.name);
    const availableClassNames = useSelector((state) => state.classes.classes).map(c => c.name);
    const availableBackgroundNames = useSelector((state) => state.backgrounds.backgrounds).map(c => c.name);
    const availableSpellNames = useSelector((state) => state.spells.spells).map(c => c.name);
    const availableItemNames = useSelector((state) => state.items.items).map(c => c.name);
    const user = useSelector((state) => state.auth.user);
    const characters = useSelector((state) => state.characters.characters) || [];

    const dispatch = useDispatch();
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

        console.log("characters:", characters);
        console.log("createCharacter:", character);

        const updatedCharacters = [character, ...characters];

        // Only navigate after successful submission
        dispatch(updateCharacters(user.email, updatedCharacters));
        navigate("/userAccount", { state: { createdCharacter: character } });
    };

    const handleChangeSpell = (event) => {
        const selectedSpells = event.target.value;
        setCharacterSpell(selectedSpells);
    };

    // For characterInventory
    const handleChangeInventory = (event) => {
        const selectedItems = event.target.value;
        setCharacterInventory(selectedItems);
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
                                            {availableRaceNames.map((name, index) => (
                                                <MenuItem key={index} value={name}>
                                                    {name}
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
                                            {availableClassNames.map((name, index) => (
                                                <MenuItem key={index} value={name}>
                                                    <Checkbox checked={characterSpell.includes(name)} color="primary" />
                                                    {name}
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
                                            {availableBackgroundNames.map((name, index) => (
                                                <MenuItem key={index} value={name}>
                                                    {name}
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
                                            onChange={handleChangeSpell}
                                            renderValue={(selected) => selected.join(", ")}
                                        >
                                            {availableSpellNames.map((name, index) => (
                                                <MenuItem key={index} value={name}>
                                                    <Checkbox checked={characterSpell.includes(name)} color="primary" />
                                                    {name}
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
                                            onChange={handleChangeInventory}
                                            renderValue={(selected) => selected.join(", ")}
                                        >
                                            {availableItemNames.map((name, index) => (
                                                <MenuItem key={index} value={name}>
                                                    <Checkbox checked={characterInventory.includes(name)} color="primary" />
                                                    {name}
                                                </MenuItem>
                                            ))}
                                        </Select>
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
