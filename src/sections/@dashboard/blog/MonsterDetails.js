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
        description: "Size: " + monsterDetails.size + " | Type: " + monsterDetails.type + " | Alignment: " + monsterDetails.alignment,
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
                        AC: {monsterDetails.ac || "none"}
                    </Typography>
                    <Typography variant="subtitle1" gutterBottom>
                        HP: {monsterDetails.hp || "none"}
                    </Typography>
                    <Typography variant="subtitle1" gutterBottom>
                        Speed: {monsterDetails.type || "speed"}
                    </Typography>
                    <Typography variant="subtitle1" gutterBottom>
                        Strength: {monsterDetails.str || "none"}
                    </Typography>
                    <Typography variant="subtitle1" gutterBottom>
                        Dexterity: {monsterDetails.dex || "none"}
                    </Typography>
                    <Typography variant="subtitle1" gutterBottom>
                        Constitution: {monsterDetails.con || "none"}
                    </Typography>
                    <Typography variant="subtitle1" gutterBottom>
                        Intelligence: {monsterDetails.int || "none"}
                    </Typography>
                    <Typography variant="subtitle1" gutterBottom>
                        Wisdom: {monsterDetails.wis || "none"}
                    </Typography>
                    <Typography variant="subtitle1" gutterBottom>
                        Charisma: {monsterDetails.cha || "none"}
                    </Typography>
                    <Typography variant="subtitle1" gutterBottom>
                        Save: {monsterDetails.save || "none"}
                    </Typography>
                    <Typography variant="subtitle1" gutterBottom>
                        Skill: {monsterDetails.skill || "none"}
                    </Typography>
                    <Typography variant="subtitle1" gutterBottom>
                        Resist: {monsterDetails.resist || "none"}
                    </Typography>
                    <Typography variant="subtitle1" gutterBottom>
                        Vulnerable: {monsterDetails.vulnerable || "none"}
                    </Typography>
                    <Typography variant="subtitle1" gutterBottom>
                        Immune: {monsterDetails.immune || "none"}
                    </Typography>
                    <Typography variant="subtitle1" gutterBottom>
                        Condition Immune: {monsterDetails.conditionImmune || "none"}
                    </Typography>
                    <Typography variant="subtitle1" gutterBottom>
                        Senses: {monsterDetails.senses || "none"}
                    </Typography>
                    <Typography variant="subtitle1" gutterBottom>
                        Passive: {monsterDetails.passive || "none"}
                    </Typography>
                    <Typography variant="subtitle1" gutterBottom>
                        Languages: {monsterDetails.languages || "none"}
                    </Typography>
                    <Typography variant="subtitle1" gutterBottom>
                        CR: {monsterDetails.cr || "none"}
                    </Typography>
                    <Typography variant="subtitle1" gutterBottom>
                        Trait: {monsterDetails.trait || "none"}
                    </Typography>
                    <Typography variant="subtitle1" gutterBottom>
                        Action: {monsterDetails.action || "none"}
                    </Typography>
                    <Typography variant="subtitle1" gutterBottom>
                        Spells: {monsterDetails.spells || "none"}
                    </Typography>
                    <Typography variant="subtitle1" gutterBottom>
                        Slots: {monsterDetails.slots || "none"}
                    </Typography>
                    <Typography variant="subtitle1" gutterBottom>
                        Environment: {monsterDetails.environment || "none"}
                    </Typography>
                    <Typography variant="h6" gutterBottom>Legendary Actions</Typography>
                    <List>
                        {monsterDetails.legendary.map((legendaryAction, index) => (
                            <ListItem key={index}>
                                <ListItemText
                                    primary={legendaryAction.name}
                                    secondary={
                                        <div>
                                            <Typography variant="body2" color="textSecondary">{legendaryAction.text.join(' ')}</Typography>
                                            {legendaryAction.attack && <Typography variant="body2" color="textSecondary">Attack: {legendaryAction.attack}</Typography>}
                                        </div>
                                    }
                                />
                            </ListItem>
                        ))}
                    </List>

                    <Typography variant="h6" gutterBottom>Reactions</Typography>
                    <List>
                        <ListItem>
                            <ListItemText
                                primary={monsterDetails.reaction.name}
                                secondary={
                                    <div>
                                        <Typography variant="body2" color="textSecondary">{monsterDetails.reaction.text.join(' ')}</Typography>
                                        {monsterDetails.reaction.attack && <Typography variant="body2" color="textSecondary">Attack: {monsterDetails.reaction.attack}</Typography>}
                                    </div>
                                }
                            />
                        </ListItem>
                    </List>

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
