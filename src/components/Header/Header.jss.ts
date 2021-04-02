import { makeStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) => ({
  header: {
    boxShadow: theme.shadow.border,
  },
  title: {
    width: '100%',
    color: '#ffffff',
  },
  button: {
    position: 'absolute',
    color: '#ffffff',
  },
  hidden: {
    display: 'none',
  },
}));
