import { makeStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) => ({
  layout: {
    display: 'grid',
    gridTemplate: `
      "avatar trainer" 100px
      "info   info   " auto
      / auto 1fr
    `,
    width: '100%',
    gap: theme.spacing(2, 2),
    background: theme.palette.background.paper,
    borderRadius: theme.shape.borderRadius,
    padding: theme.spacing(2),
  },
  avatar: {
    gridArea: 'avatar',
    width: '100px',
    height: '100px',
  },
  trainer: {
    gridArea: 'trainer',
    display: 'flex',
    flexDirection: 'column',
    minWidth: 0,
  },
  info: {
    gridArea: 'info',
    display: '-webkit-box',
    boxOrient: 'vertical',
    lineClamp: 3,
    lineHeight: '1.125rem',
    maxHeight: '3.375rem',
    overflow: 'hidden',
  },
  name: {
    fontSize: '1.125rem',
    fontWeight: theme.typography.fontWeightMedium,
  },
  price: {
    fontWeight: theme.typography.fontWeightBold,
    marginTop: 'auto',
  },
  rating: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: theme.spacing(1),
    '& > :not(:last-child)': {
      marginRight: theme.spacing(0.5),
    },
  },
}));
