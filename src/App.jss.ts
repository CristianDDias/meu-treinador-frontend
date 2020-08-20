import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
  '@global': {
    body: {
      background: '#ececf0',
    },
  },
  container: {
    height: 'calc(100vh - 48px - 56px)',
    overflow: 'auto',
    marginTop: '48px',
    marginBottom: '56px',
  },
});
