import { useState } from 'react';
// @mui
import { Menu, Button, MenuItem, Typography } from '@mui/material';
// component
import Iconify from '../../../components/iconify';
import POSTS from '../../../_mock/blog';

// ----------------------------------------------------------------------

const SORT_BY_OPTIONS = [
  { value: 'A-D', label: 'A-D' },
  { value: 'E-H', label: 'E-H' },
  { value: 'I-L', label: 'I-L' },
  { value: 'M-P', label: 'M-P' },
  { value: 'Q-T', label: 'Q-T' },
  { value: 'U-Z', label: 'U-Z' },
];

export default function BlogPostSort() {
  const [open, setOpen] = useState(null);
  const [selectedFilter, setSelectedFilter] = useState('A-D'); // Default filter

  const handleOpen = (event) => {
    setOpen(event.currentTarget);
  };

  const handleClose = () => {
    setOpen(null);
  };
  const handleFilterClick = (filterValue) => {
    setSelectedFilter(filterValue);
    handleClose();
  };

  // Filter the POSTS array based on the selected filter
  const filteredPosts = POSTS.filter((post) => {
    const postTitle = post.title.trim(); // Get the post title
    const firstLetter = postTitle.charAt(0).toLowerCase(); // Get the first letter

    switch (selectedFilter) {
      case 'A-D':
        return firstLetter >= 'a' && firstLetter <= 'd';
      case 'E-H':
        return firstLetter >= 'e' && firstLetter <= 'h';
      case 'I-L':
        return firstLetter >= 'i' && firstLetter <= 'l';
      case 'M-P':
        return firstLetter >= 'm' && firstLetter <= 'p';
      case 'Q-T':
        return firstLetter >= 'q' && firstLetter <= 't';
      case 'U-Z':
        return firstLetter >= 'u' && firstLetter <= 'z';
      default:
        return true; // Show all posts if no filter is selected
    }
  });

  return (
    <>
      <Button
        color="inherit"
        disableRipple
        onClick={handleOpen}
        endIcon={<Iconify icon={open ? 'eva:chevron-up-fill' : 'eva:chevron-down-fill'} />}
        sx={{ marginLeft: 'auto' }} 
      >
        Sort By:&nbsp;
        <Typography component="span" variant="subtitle2" sx={{ color: 'text.secondary' }}>
          {SORT_BY_OPTIONS.find((option) => option.value === selectedFilter)?.label || 'Alphabetical'}
        </Typography>
      </Button>
      <Menu
        keepMounted
        anchorEl={open}
        open={Boolean(open)}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        {SORT_BY_OPTIONS.map((option) => (
          <MenuItem
            key={option.value}
            selected={option.value === selectedFilter}
            onClick={() => handleFilterClick(option.value)}
            sx={{ typography: 'body2' }}
          >
            {option.label}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
}
