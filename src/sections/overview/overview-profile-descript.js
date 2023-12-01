import React, { useState } from 'react';
import PropTypes from 'prop-types';
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';
import {
  Button,
  Card,
  CardActions,
  CardHeader,
  CardContent,
  Dialog,
  Divider,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from '@mui/material';

export const OverviewProfileDescript = (props) => {
  const { username, initialDescription, onSaveDescription, sx } = props;

  const [editMode, setEditMode] = useState(false);
  const [profileDescription, setProfileDescription] = useState(initialDescription);
  const [openSaveDialog, setOpenSaveDialog] = useState(false);

  const handleEdit = () => {
    setEditMode(true);
  };

  const handleSave = () => {
    onSaveDescription(profileDescription);
    setEditMode(false);
    setOpenSaveDialog(false);
  };

  const handleOpenSaveDialog = () => {
    setOpenSaveDialog(true);
  };

  const handleCloseSaveDialog = () => {
    setOpenSaveDialog(false);
    setProfileDescription(initialDescription);
  };

  return (
    <Card sx={sx}>
      <CardHeader
        title={`${username}'s Profile`}
      />
           <Divider />
      <CardContent>
        {editMode ? (
          <TextField
            label="Profile Description"
            multiline
            rows={4}
            fullWidth
            variant="outlined"
            value={profileDescription}
            onChange={(e) => setProfileDescription(e.target.value)}
            
          />
        ) : (
          <div>{profileDescription}</div>
        )}
      </CardContent>
      <CardActions sx={{ justifyContent: 'flex-end' }}>
        {editMode ? (
          <>
            <Button onClick={handleOpenSaveDialog} startIcon={<SaveIcon />}>
              Save
            </Button>
          </>
        ) : (
          <Button onClick={handleEdit} startIcon={<EditIcon />}>
            Edit
          </Button>
        )}
      </CardActions>

      <Dialog open={openSaveDialog} onClose={handleCloseSaveDialog}>
        <DialogTitle>Save Profile Description</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to save the changes to your profile description?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseSaveDialog}>Cancel</Button>
          <Button onClick={handleSave}>Save</Button>
        </DialogActions>
      </Dialog>
    </Card>
  );
};

OverviewProfileDescript.propTypes = {
  username: PropTypes.string,
  initialDescription: PropTypes.string,
  onSaveDescription: PropTypes.func,
  sx: PropTypes.object,
};
