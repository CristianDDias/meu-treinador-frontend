import { makeStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    '& > :not(:last-child)': {
      marginBottom: theme.spacing(1),
    },
  },
  button: {
    color: '#ffffff',
  },
}));
