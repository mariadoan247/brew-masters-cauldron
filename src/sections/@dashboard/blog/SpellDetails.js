// DOES NOT MATCH SPELL SCHEMA RN IT DOES NOT WORK!!!

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

export default function BlogSpellDetail({ mode, theme, colorMode }) {
    const { postId } = useParams();
    const spells = useSelector((state) => state.spells.spells);
    const spellDetails = spells.find((spell) => spell._id === postId);

    if (!spellDetails) {
        return <div>Spell details not found</div>;
    }

    const mainFeaturedPost = {
        title: spellDetails.name,
        description: "Level: " + spellDetails.level,
        image: spellDetails.image,
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
                        Homebrew: {spellDetails.isHomebrew ? <CheckCircleOutlineIcon color="success" /> : <HighlightOffIcon color="error" />}  |  
                        Public: {spellDetails.public ? <CheckCircleOutlineIcon color="success" /> : <HighlightOffIcon color="error" />}
                    </Typography>
                    <Typography variant="subtitle1" gutterBottom>
                        School: {spellDetails.school || "No school for this spell"}
                    </Typography>
                    <Typography variant="subtitle1" gutterBottom>
                        Ritual: {spellDetails.ritual}
                    </Typography>
                    <Typography variant="subtitle1" gutterBottom>
                        Time: {spellDetails.time}
                    </Typography>
                    <Typography variant="subtitle1" gutterBottom>
                        Range: {spellDetails.range}
                    </Typography>
                    <Typography variant="subtitle1" gutterBottom>
                        Components: {spellDetails.components}
                    </Typography>
                    <Typography variant="subtitle1" gutterBottom>
                        Duration: {spellDetails.duration}
                    </Typography>
                    <Typography variant="subtitle1" gutterBottom>
                        Classes: {spellDetails.classes}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                        {spellDetails.text.join(' ')}
                    </Typography>
                </Box>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <Typography variant="h6" gutterBottom>Traits</Typography>
                        {spellDetails.trait ? (
                            <List>
                                {spellDetails.trait.map(renderTrait)}
                            </List>
                        ) : (
                            <div>No traits for this spell</div>
                        )}
                    </Grid>
                </Grid>
            </Container>
        </NavBar>
    );
}
