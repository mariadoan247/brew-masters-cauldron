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

export default function BlogItemDetail({ mode, theme, colorMode }) {
    const { postId } = useParams();
    const items = useSelector((state) => state.items.items);
    const itemDetails = items.find((item) => item._id === postId);

    if (!itemDetails) {
        return <div>Item details not found</div>;
    }

    const mainFeaturedPost = {
        title: itemDetails.name,
        description: "Type: " + itemDetails.type,
        image: itemDetails.image,
        imageText: 'main image description',
    };

    return (
        <NavBar mode={mode} theme={theme} colorMode={colorMode}>
            <Container maxWidth="lg" sx={{ my: 5 }}>
                <MainFeaturedPost post={mainFeaturedPost} />
                <Box sx={{ my: 3 }}>
                    <Typography variant="h5" gutterBottom>Details</Typography>
                    <Divider sx={{ mb: 2 }} />
                    <Typography variant="subtitle1" gutterBottom>
                        Homebrew: {itemDetails.isHomebrew ? <CheckCircleOutlineIcon color="success" /> : <HighlightOffIcon color="error" />}  |  
                        Public: {itemDetails.public ? <CheckCircleOutlineIcon color="success" /> : <HighlightOffIcon color="error" />}
                    </Typography>
                    <Typography variant="subtitle1" gutterBottom>
                        Weight: {itemDetails.weight || "none"}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                        {itemDetails.text.join(' ') || "text function did not work"}
                    </Typography>
                    <Typography variant="subtitle1" gutterBottom>
                        Magic: {itemDetails.magic || "none"}
                    </Typography>
                    <Typography variant="subtitle1" gutterBottom>
                        Detail: {itemDetails.detail || "none"}
                    </Typography>
                    <Typography variant="subtitle1" gutterBottom>
                        Value: {itemDetails.value || "none"}
                    </Typography>
                    <Typography variant="subtitle1" gutterBottom>
                        Strength: {itemDetails.strength || "none"}
                    </Typography>
                    <Typography variant="subtitle1" gutterBottom>
                        Stealth: {itemDetails.stealth || "none"}
                    </Typography>
                    <Typography variant="subtitle1" gutterBottom>
                        Dmg1: {itemDetails.dmg1 || "none"}
                    </Typography>
                    <Typography variant="subtitle1" gutterBottom>
                        Dmg2: {itemDetails.dmg2 || "none"}
                    </Typography>
                    <Typography variant="subtitle1" gutterBottom>
                        Dmg Type: {itemDetails.dmgType || "none"}
                    </Typography>
                    <Typography variant="subtitle1" gutterBottom>
                        Property: {itemDetails.property || "none"}
                    </Typography>
                    <Typography variant="subtitle1" gutterBottom>
                        Range: {itemDetails.range || "none"}
                    </Typography>
                </Box>
            </Container>
        </NavBar>
    );
}
