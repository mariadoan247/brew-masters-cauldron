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

export default function BlogBackgroundDetail({ mode, theme, colorMode }) {
    const { postId } = useParams();
    const backgrounds = useSelector((state) => state.backgrounds.backgrounds);
    const backgroundDetails = backgrounds.find((background) => background._id === postId);

    if (!backgroundDetails) {
        return <div>Background details not found</div>;
    }

    const mainFeaturedPost = {
        title: backgroundDetails.name,
        description: "Description here",
        image: backgroundDetails.image,
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
                        Homebrew: {backgroundDetails.isHomebrew ? <CheckCircleOutlineIcon color="success" /> : <HighlightOffIcon color="error" />}  |  
                        Public: {backgroundDetails.public ? <CheckCircleOutlineIcon color="success" /> : <HighlightOffIcon color="error" />}
                    </Typography>
                    <Typography variant="subtitle1" gutterBottom>
                        Proficiency: {backgroundDetails.proficiency || "No proficiencies for this background"}
                    </Typography>
                </Box>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <Typography variant="h6" gutterBottom>Traits</Typography>
                        <List>
                            {backgroundDetails.trait.map(renderTrait)}
                        </List>
                    </Grid>
                </Grid>
            </Container>
        </NavBar>
    );
}
