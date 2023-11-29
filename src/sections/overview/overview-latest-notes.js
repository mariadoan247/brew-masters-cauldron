import React, { useState } from 'react';
import { format } from 'date-fns';
import PropTypes from 'prop-types';
import ArrowRightIcon from '@heroicons/react/24/solid/ArrowRightIcon';
import DeleteIcon from '@mui/icons-material/Delete';
import {
  Box,
  Button,
  Card,
  CardActions,
  CardHeader,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Divider,
  SvgIcon,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TextField,
} from '@mui/material';


export const OverviewLatestNotes = (props) => {
  const { notes, onSaveNotes, sx } = props;

  const [openNoteDialog, setOpenNoteDialog] = useState(false);
  const [deleteConfirmationDialog, setDeleteConfirmationDialog] = useState(false);
  const [newNote, setNewNote] = useState('');
  const [selectedNoteIndex, setSelectedNoteIndex] = useState(-1);
  const [editingNoteIndex, setEditingNoteIndex] = useState(-1);
  const [editedNote, setEditedNote] = useState('');
  const [isNewNote, setIsNewNote] = useState(true); // Track if it's a new note

  const handleEditNote = (index) => {
    setEditingNoteIndex(index);
    setEditedNote(notes[index].details);
    setIsNewNote(false); // It's an existing note
    handleOpenNoteDialog();
  };

  const handleUpdateNote = () => {
    if (editedNote.trim() !== '') {
      const updatedNote = {
        ...notes[editingNoteIndex],
        details: editedNote,
        dateUpdated: format(new Date(), 'yyyy-MM-dd HH:mm:ss'),
      };
      // Remove the updated note from its current position
      const updatedNotes = notes.filter((_, index) => index !== editingNoteIndex);
      // Unshift the updated note to start of the array
      updatedNotes.unshift(updatedNote);
      // Save the updated notes array
      onSaveNotes(updatedNotes);
      // Close the dialog and reset state
      handleCloseNoteDialog();
      setEditingNoteIndex(-1);
      setIsNewNote(true);
    }
  };  

  const handleSaveNewNote = () => {
    if (newNote.trim() !== '') {
      const noteObject = {
        details: newNote,
        dateUpdated: format(new Date(), 'yyyy-MM-dd HH:mm:ss'),
      };
      const updatedNotes = [noteObject, ...notes];
      onSaveNotes(updatedNotes);
      handleCloseNoteDialog();
      setIsNewNote(true); // Reset back to new note for the next one
    }
  };

  const handleOpenNoteDialog = () => {
    setOpenNoteDialog(true);
  };

  const handleCloseNoteDialog = () => {
    setNewNote('');
    setOpenNoteDialog(false);
  };

  const handleDeleteNote = () => {
    if (selectedNoteIndex !== -1) {
      const updatedNotes = notes.filter((_, index) => index !== selectedNoteIndex);
      onSaveNotes(updatedNotes);
      setDeleteConfirmationDialog(false);
      setSelectedNoteIndex(-1);
    }
  };

  return (
    <Card sx={sx}>
      <CardHeader title="My Notes" />

      <Box sx={{ minWidth: 800 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                Note
              </TableCell>
              <TableCell>
                Date
              </TableCell>
              <TableCell>
                Actions
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {notes.map((note, index) => (
                <TableRow hover key={index}>
                    <TableCell>
                        {note.details}
                    </TableCell>
                    <TableCell>
                        {note.dateUpdated}
                    </TableCell>
                    <TableCell>
                        <Button
                            color="error"
                            onClick={() => {
                                setDeleteConfirmationDialog(true);
                                setSelectedNoteIndex(index);
                            }}
                        >
                            <DeleteIcon />
                        </Button>
                        <Button
                    color="primary"
                    onClick={() => handleEditNote(index)}
                  >
                    Edit
                  </Button>
                    </TableCell>
                </TableRow>
            ))}
        </TableBody>
        </Table>
      </Box>

      <Divider />
      <CardActions sx={{ justifyContent: 'flex-end' }}>
        <Button
          color="inherit"
          endIcon={(
            <SvgIcon fontSize="small">
              <ArrowRightIcon />
            </SvgIcon>
          )}
          size="small"
          variant="text"
          onClick={handleOpenNoteDialog}
        >
          Add Note
        </Button>
      </CardActions>

      <Dialog open={openNoteDialog} onClose={handleCloseNoteDialog}>
        <DialogContent>
          <TextField
            label="Note"
            multiline
            rows={4}
            fullWidth
            variant="outlined"
            value={editingNoteIndex !== -1 ? editedNote : newNote}
            onChange={(e) => {
              if (editingNoteIndex !== -1) {
                setEditedNote(e.target.value);
              } else {
                setNewNote(e.target.value);
              }
            }}
          />
           {isNewNote ? (
          <Button onClick={handleSaveNewNote}>Save</Button>
        ) : (
          <Button onClick={handleUpdateNote}>Update</Button>
        )}
        <Button onClick={handleCloseNoteDialog}>Close</Button>
      </DialogContent>
      </Dialog>

      <Dialog open={deleteConfirmationDialog} onClose={() => setDeleteConfirmationDialog(false)}>
        <DialogTitle>Delete Note</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to delete this note?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setDeleteConfirmationDialog(false)}>Cancel</Button>
          <Button onClick={handleDeleteNote} color="error">Delete</Button>
        </DialogActions>
      </Dialog>
    </Card>
  );
};

OverviewLatestNotes.propTypes = {
  notes: PropTypes.array,
  onSaveNotes: PropTypes.func,
  sx: PropTypes.object,
};