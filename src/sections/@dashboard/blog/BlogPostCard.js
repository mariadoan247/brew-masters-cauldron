import PropTypes from 'prop-types';
import { alpha, styled } from '@mui/material/styles';
import { Link, Card, Grid, CardContent } from '@mui/material';
import { Link as RouterLink, useLocation } from 'react-router-dom';

const StyledCardMedia = styled('div')({
  position: 'relative',
  paddingTop: 'calc(100% * 3 / 4)',
  cursor: 'pointer',
});

const StyledCardContent = styled(CardContent)(({ theme }) => ({
  padding: theme.spacing(2),
  backgroundColor: alpha(theme.palette.background.paper, 0.8),
  position: 'absolute',
  bottom: 0,
  width: '100%',
  boxSizing: 'border-box', // make sure padding doesn't affect the width
}));

const StyledTitle = styled(Link)(({ theme }) => ({
  height: 'auto',
  overflow: 'hidden',
  WebkitLineClamp: 2,
  display: '-webkit-box',
  WebkitBoxOrient: 'vertical',
  textDecoration: 'none', // Remove underline from Link
  ...theme.typography.h5,
  [theme.breakpoints.down('md')]: {
    ...theme.typography.h6,
  },
  [theme.breakpoints.down('sm')]: {
    ...theme.typography.subtitle1,
  },
}));

const StyledCover = styled('img')({
  top: 0,
  width: '100%',
  height: '100%',
  objectFit: 'contain',
  position: 'absolute',
});

BlogPostCard.propTypes = {
  post: PropTypes.object.isRequired
};

export default function BlogPostCard({ post }) {
  const { image, name } = post;
  const location = useLocation();

  const pathSegments = location.pathname.split('/');
  const category = pathSegments[1] || null;
  
  console.log(location)
  console.log(category)
  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <RouterLink to={category ? `/${category}/blog/${post._id}` : `/blog/${post._id}`} style={{ textDecoration: 'none' }}>
        <Card sx={{ position: 'relative' }}>
          <StyledCardMedia sx={{ pt: 'calc(100% * 4 / 3)' }}>
            <StyledCover alt={name} src={image} />
          </StyledCardMedia>

          <StyledCardContent>
            <StyledTitle
              color="inherit"
              variant="subtitle2"
              to={category ? `/${category}/blog/${post._id}` : `/blog/${post.__id}`}
            >
              {name}
            </StyledTitle>
          </StyledCardContent>
        </Card>
      </RouterLink>
    </Grid>
  );
}
