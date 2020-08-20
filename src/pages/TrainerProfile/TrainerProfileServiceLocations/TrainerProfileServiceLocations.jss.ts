import { makeStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) => ({
  nested: {
    padding: theme.spacing(0.5, 0, 0.5, 4),
  },
}));
