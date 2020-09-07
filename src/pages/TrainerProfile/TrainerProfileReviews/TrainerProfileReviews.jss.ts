import { makeStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: theme.spacing(0.5),
    '& > :not(:last-child)': {
      marginBottom: theme.spacing(2),
      paddingBottom: theme.spacing(2),
      borderBottom: `1px solid ${theme.palette.divider}`,
    },
  },
  review: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
  },
  user: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: theme.spacing(0.5),
  },
  name: {
    fontWeight: theme.typography.fontWeightMedium,
  },
  rating: {
    display: 'flex',
    alignItems: 'center',
    '& > :first-child': {
      marginRight: theme.spacing(0.5),
    },
  },
}));
