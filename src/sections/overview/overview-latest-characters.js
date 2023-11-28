import { formatDistanceToNow } from 'date-fns';
import PropTypes from 'prop-types';
import ArrowRightIcon from '@heroicons/react/24/solid/ArrowRightIcon';
import EllipsisVerticalIcon from '@heroicons/react/24/solid/EllipsisVerticalIcon';
import {
  Button,
  Card,
  CardActions,
  CardHeader,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemText,
  SvgIcon
} from '@mui/material';

export const OverviewLatestCharacters = (props) => {
  const { pages = [], createdCharacter, sx } = props;

  return (
    <Card sx={sx}>
      <CardHeader title="Your Characters" />
      <List>
        {pages.map((page, index) => {
          const hasDivider = index < pages.length - 1;
          const ago = formatDistanceToNow(page.updatedAt);

          return (
            <ListItem
              divider={hasDivider}
              key={page.id}
            >
              <ListItemText
                primary={page.name}
                primaryTypographyProps={{ variant: 'subtitle1' }}
                secondary={`Visited ${ago} ago`}
                secondaryTypographyProps={{ variant: 'body2' }}
              />
              <IconButton edge="end">
                <SvgIcon>
                  <EllipsisVerticalIcon />
                </SvgIcon>
              </IconButton>
            </ListItem>
          );
        })}

        {/* Display the created character */}
        {createdCharacter && (
          <ListItem>
            <ListItemText
              primary={createdCharacter.name}
              primaryTypographyProps={{ variant: 'subtitle1' }}
              secondary="Newly Created Character"
              secondaryTypographyProps={{ variant: 'body2' }}
            />
          </ListItem>
        )}
      </List>
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
        >
          View all
        </Button>
      </CardActions>
    </Card>
  );
};

OverviewLatestCharacters.propTypes = {
  pages: PropTypes.array,
  createdCharacter: PropTypes.object, // Add the prop for the created character
  sx: PropTypes.object
};
