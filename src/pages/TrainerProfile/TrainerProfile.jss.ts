import { makeStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) => ({
  container: {
    padding: theme.spacing(2),
    '& > :not(:last-child)': {
      marginBottom: theme.spacing(2),
    },
  },
  avatar: {
    width: '200px',
    height: '200px',
  },
  name: {
    fontSize: '1.5rem',
    fontWeight: theme.typography.fontWeightMedium,
  },
  favoriteButton: {
    background: '#ffffff !important',
    position: 'absolute',
    right: 0,
    transform: 'translateX(50%)',
    padding: theme.spacing(1),
    zIndex: theme.zIndex.appBar,
  },
  contactButton: {
    padding: theme.spacing(1),
    margin: theme.spacing(0, 1),
  },
  rating: {
    marginRight: theme.spacing(1),
  },
}));
