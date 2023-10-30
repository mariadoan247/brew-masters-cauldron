import PropTypes from 'prop-types';
import ComputerDesktopIcon from '@heroicons/react/24/solid/ComputerDesktopIcon';
import EmailIcon from '@heroicons/react/24/solid/EnvelopeIcon';
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Stack,
  SvgIcon,
  Typography,
} from '@mui/material';


const iconMap = {
  Username: (
    <SvgIcon>
      <ComputerDesktopIcon />
    </SvgIcon>
  ),
  Email: (
    <SvgIcon>
      <EmailIcon />
    </SvgIcon>
  )
};

export const OverviewUserInfo = (props) => {
  const { chartSeries, labels, sx, username, email } = props;

  return (
    <Card sx={sx}>
      <CardHeader title="User Information" sx={{ marginBottom:'-30px' }} />
      <CardContent>
        <Stack
          direction="column" // Display items in separate columns
          spacing={2}
          sx={{ mt: 2 }}
        >
          {chartSeries.map((item, index) => {
            const label = labels[index];
            const icon = iconMap[label];

            if (label === 'Username') {
              return (
                <Box
                  key={label}
                  sx={{
                    display: 'flex',
                    flexDirection: 'row', // Display icon and text side by side
                    alignItems: 'center',
                    ml: 1, // Add margin to separate icon and text
                  }}
                >
                  {icon}
                  <Typography variant="h6" sx={{ ml: 1 }}>{`Username: ${username}`}</Typography>
                </Box>
              );
            } else if (label === 'Email') {
              return (
                <Box
                  key={label}
                  sx={{
                    display: 'flex',
                    flexDirection: 'row', // Display icon and text side by side
                    alignItems: 'center',
                    ml: 1, // Add margin to separate icon and text
                  }}
                >
                  {icon}
                  <Typography variant="h6" sx={{ ml: 1 }}>{`Email: ${email}`}</Typography>
                </Box>
              );
            }
            return null;
          })}
        </Stack>
      </CardContent>
    </Card>
  );
};

OverviewUserInfo.propTypes = {
  chartSeries: PropTypes.array.isRequired,
  labels: PropTypes.array.isRequired,
  sx: PropTypes.object,
  username: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};