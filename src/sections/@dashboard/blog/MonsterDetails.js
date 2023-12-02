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
        description: `Size: ${monsterDetails.size} | Type: ${monsterDetails.type} | Alignment: ${monsterDetails.alignment}`,
        image: monsterDetails.image,
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

    const renderListItems = (items) => {
        return items.map((item, index) => (
            <ListItem key={index}>
                <ListItemText primary={item.name} secondary={renderText(item.text)} />
            </ListItem>
        ));
    };

    return (
        <NavBar mode={mode} theme={theme} colorMode={colorMode}>
            <Container maxWidth="lg" sx={{ my: 5 }}>
                <MainFeaturedPost post={mainFeaturedPost} />
                <Box sx={{ my: 3 }}>
                    <Typography variant="h5" gutterBottom>Details</Typography>
                    <Divider sx={{ mb: 2 }} />
                    <Typography variant="subtitle1" gutterBottom>
                        Homebrew: {monsterDetails.isHomebrew ? <CheckCircleOutlineIcon color="success" /> : <HighlightOffIcon color="error" />} |
                        Public: {monsterDetails.public ? <CheckCircleOutlineIcon color="success" /> : <HighlightOffIcon color="error" />}
                    </Typography>
                    <Typography variant="subtitle1" gutterBottom>AC: {monsterDetails.ac || "none"}</Typography>
                    <Typography variant="subtitle1" gutterBottom>HP: {monsterDetails.hp || "none"}</Typography>
                    <Typography variant="subtitle1" gutterBottom>Speed: {monsterDetails.speed || "none"}</Typography>
                    <Typography variant="subtitle1" gutterBottom>Strength: {monsterDetails.str || "none"}</Typography>
                    <Typography variant="subtitle1" gutterBottom>Dexterity: {monsterDetails.dex || "none"}</Typography>
                    <Typography variant="subtitle1" gutterBottom>Constitution: {monsterDetails.con || "none"}</Typography>
                    <Typography variant="subtitle1" gutterBottom>Intelligence: {monsterDetails.int || "none"}</Typography>
                    <Typography variant="subtitle1" gutterBottom>Wisdom: {monsterDetails.wis || "none"}</Typography>
                    <Typography variant="subtitle1" gutterBottom>Charisma: {monsterDetails.cha || "none"}</Typography>
                    <Typography variant="subtitle1" gutterBottom>Save: {renderText(monsterDetails.save)}</Typography>
                    <Typography variant="subtitle1" gutterBottom>Skill: {renderText(monsterDetails.skill)}</Typography>
                    <Typography variant="subtitle1" gutterBottom>Resist: {renderText(monsterDetails.resist)}</Typography>
                    <Typography variant="subtitle1" gutterBottom>Vulnerable: {renderText(monsterDetails.vulnerable)}</Typography>
                    <Typography variant="subtitle1" gutterBottom>Immune: {renderText(monsterDetails.immune)}</Typography>
                    <Typography variant="subtitle1" gutterBottom>Condition Immune: {renderText(monsterDetails.conditionImmune)}</Typography>
                    <Typography variant="subtitle1" gutterBottom>Senses: {monsterDetails.senses || "none"}</Typography>
                    <Typography variant="subtitle1" gutterBottom>Passive: {monsterDetails.passive || "none"}</Typography>
                    <Typography variant="subtitle1" gutterBottom>Languages: {monsterDetails.languages || "none"}</Typography>
                    <Typography variant="subtitle1" gutterBottom>CR: {monsterDetails.cr || "none"}</Typography>
                    <Typography variant="subtitle1" gutterBottom>Spells: {monsterDetails.spells || "none"}</Typography>
                    <Typography variant="subtitle1" gutterBottom>Slots: {renderText(monsterDetails.slots)}</Typography>
                    <Typography variant="subtitle1" gutterBottom>Environment: {monsterDetails.environment || "none"}</Typography>

                    <Typography variant="h6" gutterBottom>Traits</Typography>
                    <List>
                        {monsterDetails.trait && renderListItems(monsterDetails.trait)}
                    </List>

                    <Typography variant="h6" gutterBottom>Legendary Actions</Typography>
                    <List>
                        {monsterDetails.legendary && renderListItems(monsterDetails.legendary)}
                    </List>

                    <Typography variant="h6" gutterBottom>Reactions</Typography>
                    <List>
                        {monsterDetails.reaction && (
                            <ListItem>
                                <ListItemText
                                    primary={monsterDetails.reaction.name}
                                    secondary={renderText(monsterDetails.reaction.text)}
                                />
                            </ListItem>
                        )}
                    </List>
                </Box>
            </Container>
        </NavBar>
    );
}
