import { makeStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) => ({
  container: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  list: {
    display: 'flex',
    flexDirection: 'column',
    flexBasis: 0,
    flexGrow: 1,
    overflow: 'auto',
  },
  indicator: {
    display: 'flex',
    flexBasis: 0,
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: theme.spacing(2, 2, 4),
  },
  label: {
    padding: theme.spacing(1),
    background: theme.palette.background.paper,
    fontWeight: theme.typography.fontWeightMedium,
    boxShadow: theme.shadow.border,
    zIndex: theme.zIndex.appBar,
  },
}));
