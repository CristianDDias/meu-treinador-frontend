import { makeStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) => ({
  navigation: {
    boxShadow: theme.shadow.border,
    zIndex: theme.zIndex.appBar,
    position: 'fixed',
    bottom: '0px',
    left: '0px',
    right: '0px',
  },
  button: {
    minWidth: '55px',
  },
}));
