import React, { useState } from 'react';
import { format } from 'date-fns';
import { useDispatch } from "react-redux";
import { createNewNote } from '../../actions/userActions';
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
  const dispatch = useDispatch();

  const { notes, user, onSaveNotes, sx } = props;

  const [openNoteDialog, setOpenNoteDialog] = useState(false);
  const [deleteConfirmationDialog, setDeleteConfirmationDialog] = useState(false);
  const [newNote, setNewNote] = useState('');
  const [selectedNoteIndex, setSelectedNoteIndex] = useState(-1);

  console.log(notes);

  const handleOpenNoteDialog = () => {
    setOpenNoteDialog(true);
  };

  const handleCloseNoteDialog = () => {
    setNewNote('');
    setOpenNoteDialog(false);
  };

  const handleSaveNote = (event) => {
    event.preventDefault();
    if (newNote.trim() !== '') {
        const noteObject = {
            details: newNote,
            dateUpdated: format(new Date(), 'yyyy-MM-dd HH:mm:ss')
        };
        const updatedNotes = [...notes, noteObject];

        // Dispatch the action to create a new note
        dispatch(createNewNote(user.email, updatedNotes)); // Make sure user's email is accessible
        handleCloseNoteDialog();
    }
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
            value={newNote}
            onChange={(e) => setNewNote(e.target.value)}
          />
          <Button onClick={handleSaveNote}>Save</Button>
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
