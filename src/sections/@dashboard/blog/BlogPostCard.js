import PropTypes from 'prop-types';
// @mui
import { alpha, styled } from '@mui/material/styles';
import { Box, Link, Card, Grid, Typography, CardContent } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
// ----------------------------------------------------------------------


const StyledCardMedia = styled('div')({
  position: 'relative',
  paddingTop: 'calc(100% * 3 / 4)', 
  cursor: 'pointer',
});

const StyledCardContent = styled(CardContent)(({ theme }) => ({
  padding: theme.spacing(11.5), // Add padding to lower the text
  backgroundColor: alpha('#000', 0.1), // Apply a semi-transparent background color to the text
  borderRadius: theme.shape.borderRadius, // Maintain card's border radius
}));

const StyledTitle = styled(Link)({
  height: 'auto',
  overflow: 'hidden',
  WebkitLineClamp: 2,
  display: '-webkit-box',
  WebkitBoxOrient: 'vertical',
  color: 'inherit', // Set the text color to inherit from the parent

});

const StyledInfo = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column', // Center text vertically
  alignItems: 'center',
  justifyContent: 'center',
  marginTop: theme.spacing(0),
  color: theme.palette.text.disabled,
}));

const StyledCover = styled('img')({
  top: 0,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  position: 'absolute',
});

// ----------------------------------------------------------------------

BlogPostCard.propTypes = {
  post: PropTypes.object.isRequired,
  index: PropTypes.number,
};

export default function BlogPostCard({ post, index }) {
  const { cover, title } = post;

  return (
    <Grid item xs={12} sx={{ marginBottom: '20px' }} sm={3} md={3}>
       <RouterLink to={`/blog/${post.id}`} sx={{ color: 'charcoal' }}>
      <Card sx={{ position: 'relative'}}> 
        <StyledCardMedia
          sx={{
              pt: 'calc(100% * 4 / 3)',
              '&:after': {
                top: 0,
                content: "''",
                width: '100%',
                height: '100%',
                position: 'absolute',
                bgcolor: (theme) => alpha(theme.palette.grey[800]),
                
              },
          }}
        >
          <StyledCover alt={title} src={cover} />
        </StyledCardMedia>

        <StyledCardContent 
          sx={{
            pt: 1,
            ...({
              bottom: 0,
              width: '100%',
              position: 'center',
            }),
          }}
        >
          <Typography gutterBottom variant="caption" sx={{ color: 'text.disabled', display: 'block' }}>
            
          </Typography>

          <StyledTitle
            color="inherit"
            variant="subtitle2"
            component={RouterLink}
            to={`/blog/${post.id}`} 
            sx={{
              typography: 'h5',
              height: '40px',
              fontSize: '16px',
          }}     
          >
            {title}
          </StyledTitle>

          <StyledInfo>
              <Box
                key={index}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  ml: index === 0 ? 0 : 1.5,
                  // ...({
                  //   color: 'grey.500',
                  // }),
                }}
              >
                
              </Box>
          </StyledInfo>
        </StyledCardContent>
      </Card>
      </RouterLink>
    </Grid>
  );
}
