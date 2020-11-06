import { makeStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) => ({
  item: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    margin: theme.spacing(0.5, 0),
  },
  author: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: theme.spacing(1),
  },
  name: {
    fontWeight: theme.typography.fontWeightMedium,
  },
  rating: {
    display: 'flex',
    alignItems: 'center',
    '& > :first-child': {
      marginRight: theme.spacing(1),
    },
  },
}));
