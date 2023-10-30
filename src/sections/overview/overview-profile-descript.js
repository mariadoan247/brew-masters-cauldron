import PropTypes from 'prop-types';
import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Divider,
} from '@mui/material';

export const OverviewProfileDescript = (props) => {
  const { sx, username } = props;

  return (
    <Card sx={sx}>
      <CardHeader
        title={`${username}'s Profile`}
      />
      <CardContent>
        <p>
          {"No user description available."}
        </p>
      </CardContent>
      <Divider />
      <CardActions sx={{ justifyContent: 'flex-end' }}>
        {/* Add any additional actions or buttons for user interaction */}
      </CardActions>
    </Card>
  );
};

OverviewProfileDescript.propTypes = {
  sx: PropTypes.object, // Styling props for the Card component
  userDescription: PropTypes.string, // Description of the user's profile in the D&D homebrew webpage
  username: PropTypes.string.isRequired, // Username of the user
};
