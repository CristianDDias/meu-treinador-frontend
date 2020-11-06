import { makeStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) => ({
  container: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(1),
    background: theme.palette.background.paper,
    boxShadow: theme.shadow,
    zIndex: theme.zIndex.appBar,
  },
  input: {
    flexBasis: 0,
    flexGrow: 1,
    marginRight: theme.spacing(1),
  },
}));
