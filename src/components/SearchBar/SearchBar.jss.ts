import { makeStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) => ({
  container: {
    display: 'flex',
    alignItems: 'center',
    background: theme.palette.background.paper,
    padding: theme.spacing(1),
    borderBottom: theme.border,
  },
  input: {
    flexBasis: 0,
    flexGrow: 1,
    marginRight: theme.spacing(1),
  },
}));
