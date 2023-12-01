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

export default function BlogClassDetail({ mode, theme, colorMode }) {
    const { postId } = useParams();
    const classes = useSelector((state) => state.classes.classes);
    const classDetails = classes.find((classObj) => classObj._id === postId);

    if (!classDetails) {
        return <div>Class details not found</div>;
    }

    const mainFeaturedPost = {
        title: classDetails.name,
        description: "Hit Dice: " + classDetails.hd + " | Number of Skills: " + classDetails.numSkills,
        image: classDetails.image,
        imageText: 'main image description',
    };

    // Helper function to render autolevel features
    const renderAutoLevelFeature = (feature) => (
        <Grid container spacing={3} key={feature.name}>
            <Grid item xs={12}>
                <Typography variant="subtitle1" gutterBottom>
                    {feature.name}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                    {feature.slots}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                    {feature.spellAbility}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                    {feature.proficiency}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                    {feature.armor}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                    {feature.weapons}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                    {feature.tools}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                    {feature.wealth}
                </Typography>
                {feature.feature && (
                <React.Fragment>
                    <Typography variant="subtitle1" gutterBottom>
                        {feature.feature.name}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                        {feature.feature.text.join(' ')}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                        {feature.feature.modifier || "No modifier"}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                        {feature.feature.proficiency || "No proficiency"}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                        {feature.feature.armor || "No armor"}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                        {feature.feature.weapons || "No weapons"}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                        {feature.feature.tools || "No tools"}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                        {feature.feature.wealth || "No wealth"}
                    </Typography>
                </React.Fragment>
            )}
            </Grid>
        </Grid>
    );

    return (
        <NavBar mode={mode} theme={theme} colorMode={colorMode}>
            <Container maxWidth="lg" sx={{ my: 5 }}>
                <MainFeaturedPost post={mainFeaturedPost} />
                <Box sx={{ my: 3 }}>
                    <Typography variant="h5" gutterBottom>Details</Typography>
                    <Divider sx={{ mb: 2 }} />
                    <Typography variant="subtitle1" gutterBottom>
                        Homebrew: {classDetails.isHomebrew ? <CheckCircleOutlineIcon color="success" /> : <HighlightOffIcon color="error" />}  |  
                        Public: {classDetails.public ? <CheckCircleOutlineIcon color="success" /> : <HighlightOffIcon color="error" />}
                    </Typography>
                    <Typography variant="subtitle1" gutterBottom>
                        Proficiency: {classDetails.proficiency || "No proficiencies for this class"}
                    </Typography>
                    <Typography variant="subtitle1" gutterBottom>
                        Spell Ability: {classDetails.spellAbility || "No spell ability for this class"}
                    </Typography>
                </Box>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <Typography variant="h6" gutterBottom>Auto Levels</Typography>
                        <List>
                            {classDetails.autolevel.map(renderAutoLevelFeature)}
                        </List>
                    </Grid>
                </Grid>
            </Container>
        </NavBar>
    );
}
