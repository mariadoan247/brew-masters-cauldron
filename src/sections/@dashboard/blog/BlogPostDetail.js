import * as React from "react";
import {
    Box,
    Container,
    Typography,
    Grid,
    List,
    ListItem,
    ListItemText,
    Chip,
    Divider,
} from '@mui/material';
import MainFeaturedPost from './MainFeaturedPost';
import NavBar from "../../../components/navbar";
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

export default function BlogPostDetail({ mode, theme, colorMode }) {
    const { postId } = useParams();
    const races = useSelector((state) => state.races.races);
    const raceDetails = races.find((race) => race._id === postId);

    if (!raceDetails) {
        return <div>Race details not found</div>;
    }

    const mainFeaturedPost = {
        title: raceDetails.name,
        description: "Size: " + raceDetails.size + " | Speed: " + raceDetails.speed + " | Ability: " + raceDetails.ability,
        image: raceDetails.image,
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
                        Homebrew: {raceDetails.isHomebrew ? <CheckCircleOutlineIcon color="success" /> : <HighlightOffIcon color="error" />}  |  
                        Public: {raceDetails.public ? <CheckCircleOutlineIcon color="success" /> : <HighlightOffIcon color="error" />}
                    </Typography>
                    <Typography variant="subtitle1" gutterBottom>
                        Spell Ability: {raceDetails.spellAbility || "No spell ability for this race"}
                    </Typography>
                    <Typography variant="subtitle1" gutterBottom>
                        Proficiency: {raceDetails.proficiency || "No proficiencies for this race"}
                    </Typography>
                </Box>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <Typography variant="h6" gutterBottom>Traits</Typography>
                        <List>
                            {raceDetails.trait.map(renderTrait)}
                        </List>
                    </Grid>
                </Grid>
            </Container>
        </NavBar>
    );
}
