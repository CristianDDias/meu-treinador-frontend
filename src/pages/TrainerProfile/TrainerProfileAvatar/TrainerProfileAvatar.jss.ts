import { makeStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) => ({
  avatar: {
    width: '200px',
    height: '200px',
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
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
  price: {
    fontSize: '1.125rem',
    fontWeight: theme.typography.fontWeightMedium,
    marginBottom: theme.spacing(0.5),
    padding: theme.spacing(0.5),
    borderBottomLeftRadius: theme.shape.borderRadius,
    borderBottomRightRadius: theme.shape.borderRadius,
    background: theme.palette.primary.main,
    color: '#ffffff',
    width: '200px',
    textAlign: 'center',
  },
}));
