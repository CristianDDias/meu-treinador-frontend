import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
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
});
