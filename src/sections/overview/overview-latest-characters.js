import { formatDistanceToNow } from 'date-fns';
import PropTypes from 'prop-types';
import ArrowRightIcon from '@heroicons/react/24/solid/ArrowRightIcon';
import EllipsisVerticalIcon from '@heroicons/react/24/solid/EllipsisVerticalIcon';
import {
  Box,
  Button,
  Card,
  CardActions,
  CardHeader,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  SvgIcon
} from '@mui/material';

export const OverviewLatestCharacters = (props) => {
  const { pages = [], sx } = props;

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
              <ListItemAvatar>
                {
                  page.image
                    ? (
                      <Box
                        component="img"
                        src={page.image}
                        sx={{
                          borderRadius: 1,
                          height: 48,
                          width: 48
                        }}
                      />
                    )
                    : (
                      <Box
                        sx={{
                          borderRadius: 1,
                          backgroundColor: 'neutral.200',
                          height: 48,
                          width: 48
                        }}
                      />
                    )
                }
              </ListItemAvatar>
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
  sx: PropTypes.object
};
