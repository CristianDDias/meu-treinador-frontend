import { makeStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) => ({
  container: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  list: {
    flexBasis: 0,
    flexGrow: 1,
    overflow: 'auto',
  },
  label: {
    background: theme.palette.background.paper,
    padding: theme.spacing(1),
    fontWeight: theme.typography.fontWeightMedium,
    borderBottom: theme.border,
  },
}));
