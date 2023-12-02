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
        description: "",
        image: featDetails.image,
        imageText: 'main image description',
    };

    const renderText = (text) => {
        if (Array.isArray(text)) {
            return text.filter(t => t).join(' ');
        } else if (typeof text === 'string') {
            return text;
        } else if (typeof text === 'object' && text !== null) {
            return JSON.stringify(text);
        }
        return '';
    };

    const renderTrait = (trait) => (
        <ListItem key={trait.name}>
            <ListItemText primary={trait.name} secondary={renderText(trait.text)} />
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
                        Prerequisite: {featDetails.prerequisite || "No prerequisite for this feat"}
                    </Typography>
                    <Typography variant="subtitle1" gutterBottom>
                        Proficiency: {featDetails.proficiency || "No proficiencies for this feat"}
                    </Typography>
                </Box>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <Typography variant="h6" gutterBottom>Details</Typography>
                        <List>
                            {featDetails.text.map((item, index) => (
                                <ListItem key={index}>
                                    <ListItemText primary={renderText(item)} />
                                </ListItem>
                            ))}
                        </List>
                    </Grid>
                </Grid>
            </Container>
        </NavBar>
    );
}
