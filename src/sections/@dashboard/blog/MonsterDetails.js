// DOES NOT MATCH MONSTER SCHEMA RN IT DOES NOT WORK!!!

import * as React from "react";
import {
    Box,
    Container,
    Typography,
    Grid,
    List,
    ListItem,
    ListItemText,
    Divider,
} from '@mui/material';
import MainFeaturedPost from './MainFeaturedPost';
import NavBar from "../../../components/navbar";
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

export default function BlogMonsterDetail({ mode, theme, colorMode }) {
    const { postId } = useParams();
    const monsters = useSelector((state) => state.monsters.monsters);
    const monsterDetails = monsters.find((monster) => monster._id === postId);

    if (!monsterDetails) {
        return <div>Monster details not found</div>;
    }

    const mainFeaturedPost = {
        title: monsterDetails.name,
        description: "Size: " + monsterDetails.size + " | Speed: " + monsterDetails.speed + " | Ability: " + monsterDetails.ability,
        image: monsterDetails.image,
        imageText: 'main image description',
    };

    // Helper function to render traits
    const renderTrait = (trait) => (
        <ListItem key={trait.name}>
            <ListItemText primary={trait.name} secondary={trait.text.join(' ')} />
        </ListItem>
    );

    return (
        <NavBar mode={mode} theme={theme} colorMode={colorMode}>
            <Container maxWidth="lg" sx={{ my: 5 }}>
                <MainFeaturedPost post={mainFeaturedPost} />
                <Box sx={{ my: 3 }}>
                    <Typography variant="h5" gutterBottom>Details</Typography>
                    <Divider sx={{ mb: 2 }} />
                    <Typography variant="subtitle1" gutterBottom>
                        Homebrew: {monsterDetails.isHomebrew ? <CheckCircleOutlineIcon color="success" /> : <HighlightOffIcon color="error" />}  |  
                        Public: {monsterDetails.public ? <CheckCircleOutlineIcon color="success" /> : <HighlightOffIcon color="error" />}
                    </Typography>
                    <Typography variant="subtitle1" gutterBottom>
                        Spell Ability: {monsterDetails.spellAbility || "No spell ability for this monster"}
                    </Typography>
                    <Typography variant="subtitle1" gutterBottom>
                        Proficiency: {monsterDetails.proficiency || "No proficiencies for this monster"}
                    </Typography>
                </Box>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <Typography variant="h6" gutterBottom>Traits</Typography>
                        <List>
                            {monsterDetails.trait.map(renderTrait)}
                        </List>
                    </Grid>
                </Grid>
            </Container>
        </NavBar>
    );
}
