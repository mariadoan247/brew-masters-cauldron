// DOES NOT MATCH FEAT SCHEMA RN IT DOES NOT WORK!!!

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

export default function BlogFeatDetail({ mode, theme, colorMode }) {
    const { postId } = useParams();
    const feats = useSelector((state) => state.feats.feats);
    const featDetails = feats.find((feat) => feat._id === postId);

    if (!featDetails) {
        return <div>Feat details not found</div>;
    }

    const mainFeaturedPost = {
        title: featDetails.name,
        description: "Size: " + featDetails.size + " | Speed: " + featDetails.speed + " | Ability: " + featDetails.ability,
        image: featDetails.image,
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
                        Homebrew: {featDetails.isHomebrew ? <CheckCircleOutlineIcon color="success" /> : <HighlightOffIcon color="error" />}  |  
                        Public: {featDetails.public ? <CheckCircleOutlineIcon color="success" /> : <HighlightOffIcon color="error" />}
                    </Typography>
                    <Typography variant="subtitle1" gutterBottom>
                        Spell Ability: {featDetails.spellAbility || "No spell ability for this feat"}
                    </Typography>
                    <Typography variant="subtitle1" gutterBottom>
                        Proficiency: {featDetails.proficiency || "No proficiencies for this feat"}
                    </Typography>
                </Box>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <Typography variant="h6" gutterBottom>Traits</Typography>
                        <List>
                            {featDetails.trait.map(renderTrait)}
                        </List>
                    </Grid>
                </Grid>
            </Container>
        </NavBar>
    );
}
