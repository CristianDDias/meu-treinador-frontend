import { makeStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) => ({
  avatar: {
    width: '200px',
    height: '200px',
    marginBottom: theme.spacing(0.5),
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
  rating: {
    marginRight: theme.spacing(1),
  },
}));
