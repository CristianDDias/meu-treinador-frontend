import { makeStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) => ({
  layout: {
    display: 'grid',
    gridTemplate: `
      "avatar trainer price" 72px
      "info   info    info " auto
      / auto 1fr auto
    `,
    columnGap: theme.spacing(1),
    background: theme.palette.background.paper,
    borderRadius: theme.shape.borderRadius,
    padding: theme.spacing(2),
    width: '100%',
  },
  avatar: {
    gridArea: 'avatar',
    width: '72px',
    height: '72px',
  },
  trainer: {
    gridArea: 'trainer',
    alignSelf: 'center',
  },
  name: {
    fontWeight: theme.typography.fontWeightMedium,
    lineHeight: 1.25,
    marginBottom: theme.spacing(0.5),
  },
  price: {
    gridArea: 'price',
    alignSelf: 'center',
    fontWeight: theme.typography.fontWeightMedium,
  },
  info: {
    gridArea: 'info',
    display: '-webkit-box',
    boxOrient: 'vertical',
    lineClamp: 3,
    lineHeight: '1.25rem',
    maxHeight: '3.75rem',
    overflow: 'hidden',
    marginTop: theme.spacing(2),
  },
  rating: {
    display: 'flex',
    alignItems: 'center',
    '& > :first-child': {
      marginRight: theme.spacing(0.5),
    },
  },
}));
