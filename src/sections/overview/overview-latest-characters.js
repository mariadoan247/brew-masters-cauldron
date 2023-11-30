import PropTypes from 'prop-types';
import ArrowRightIcon from '@heroicons/react/24/solid/ArrowRightIcon';
import {
  Box,
  Button,
  Card,
  CardHeader,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Divider,
  List,
  ListItem,
  ListItemText,
  SvgIcon,
  Modal,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import DeleteIcon from '@mui/icons-material/Delete';


export const OverviewLatestCharacters = (props) => {
  const { pages = [], sx } = props;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [clickedCharacter, setClickedCharacter] = useState(null);
  const [characters, setCharacters] = useState(pages);
  const [viewAllMode, setViewAllMode] = useState(false);
  const [deleteConfirmationDialog, setDeleteConfirmationDialog] = useState(false);


  // Get the location object
  //const location = useLocation();

  // Extract the created character from the location state
  //const createdCharacter = location.state ? location.state.createdCharacter : null;

  const handleCharacterClick = (character) => {
    setClickedCharacter(character);
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };


  const handleDeleteClick = (character) => {
    if (character) {
      setDeleteConfirmationDialog(true);
      setClickedCharacter(character);
    }
  };

  const handleDeleteClickConfirmation = () => {
    if (clickedCharacter) {
      // Filter out the character with a matching name from the list
      const updatedCharacters = characters.filter((c) => c.name !== clickedCharacter.name);
      
      // Update the state with the new characters list
      setCharacters(updatedCharacters);
      // Close the modal after deletion
      setIsModalOpen(false);
      // Clear the clicked character
      setClickedCharacter(null);
      // Close the delete confirmation dialog
      setDeleteConfirmationDialog(false);
    }
  };
  


  const simulatedCharacters = [
    {
      name: "Aria Shadowheart",
      race: "Elf",
      class: "Rogue",
      alignment: "Chaotic Neutral",
      background: "Urban Bounty Hunter",
      spell: ["Invisibility", "Mage Hand"],
      inventory: ["Dagger", "Thieves' Tools", "Potion of Healing"],
    },
    {
      name: "Grommash Ironfist",
      race: "Orc",
      class: "Barbarian",
      alignment: "Chaotic Good",
      background: "Outlander",
      spell: [], // Barbarians typically don't cast spells
      inventory: ["Great Axe", "Javelin", "Fur Armor"],
    },
  ];

  return (
    <>
      <Card sx={sx} style={{ position: 'relative' }}>
        <CardHeader title="Your Characters" />
        <Divider />




        {/* replace simulatedCharacters.map to characters.map once connected to backend!! */}
        <List>
        
          {simulatedCharacters.map((character, index) => (

            <React.Fragment key={index}>
              <ListItem
                onClick={() => handleCharacterClick(character)}
                sx={{ '&:hover': { backgroundColor: 'rgba(0, 0, 0, 0.04)' } }} // Background color on hover
              >
                <ListItemText
                  primary={character.name}
                  primaryTypographyProps={{ variant: 'subtitle1' }}
                />
                <Button color="error" onClick={() => handleDeleteClick(character)}>
                  <DeleteIcon />
                </Button>
              </ListItem>
              <Divider />
            </React.Fragment>
          ))}
        </List>
        {/* Display the created character
                {createdCharacter && (
                        <ListItem>
                            <ListItemText
                                primary={createdCharacter.name}
                                primaryTypographyProps={{
                                    variant: 'subtitle1',
                                    style: { cursor: 'pointer' },
                                }}
                                secondary="Newly Created Character"
                                secondaryTypographyProps={{ variant: 'body2' }}
                                onClick={() => handleCharacterClick(createdCharacter)}
                            />
                        </ListItem>
                    )} */}


        <Box sx={{ position: 'absolute', bottom: 0, right: 0, p: 2 }}>
          <Button
            color="inherit"
            endIcon={<SvgIcon fontSize="small"><ArrowRightIcon /></SvgIcon>}
            size="small"
            variant="text"
            onClick={() => setViewAllMode(true)}
          >
            View all
          </Button>
        </Box>



      </Card>

      {/* Modal for displaying character information */}
      <Modal open={isModalOpen} onClose={handleModalClose}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 600, // Adjust the width as needed
            bgcolor: 'background.paper',
            boxShadow: 24,
            p: 4,
          }}
        >
          <Typography variant="h5">{clickedCharacter?.name}</Typography>
          <Typography variant="body1">Race: {clickedCharacter?.race}</Typography>
          <Typography variant="body1">Class: {clickedCharacter?.class}</Typography>
          <Typography variant="body1">Alignment: {clickedCharacter?.alignment}</Typography>
          <Typography variant="body1">Background: {clickedCharacter?.background}</Typography>
          <Typography variant="body1">Spells: {clickedCharacter?.spell?.join(", ")}</Typography>
          <Typography variant="body1">Inventory: {clickedCharacter?.inventory?.join(", ")}</Typography>
        </Box>
      </Modal>

      {/* Delete confirmation dialog */}
      <Dialog
        open={deleteConfirmationDialog}
        onClose={() => setDeleteConfirmationDialog(false)}
      >
        <DialogTitle>Delete Character</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to delete {clickedCharacter?.name}?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setDeleteConfirmationDialog(false)}>
            Cancel
          </Button>
          <Button onClick={handleDeleteClickConfirmation} color="error">
            Delete
          </Button>
        </DialogActions>
      </Dialog>

     {/* View all characters modal */}
     <Modal open={viewAllMode} onClose={() => setViewAllMode(false)}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 600,
            bgcolor: 'background.paper',
            boxShadow: 24,
            p: 4,
          }}
        >
          <Typography variant="h5">All Characters</Typography>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Date Created</TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {characters.map((character, index) => (
                <TableRow key={index}>
                  <TableCell>{character.name}</TableCell>
                  <TableCell>{character.dateCreated}</TableCell>
                  <TableCell>
                    <Button color="error" onClick={() => handleDeleteClick(character)}>
                      <DeleteIcon />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
      </Modal>
    </>
  );
};


OverviewLatestCharacters.propTypes = {
  pages: PropTypes.array,
  sx: PropTypes.object,
};
