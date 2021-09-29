import { SxProps } from '@mui/system/styleFunctionSx';
import { Theme } from '@mui/material/styles';

export const styles = {
  layout: {
    display: 'grid',
    gridTemplate: `
      "avatar trainer" 100px
      "info   info   " auto
      / auto 1fr
    `,
    width: '100%',
    gap: (theme) => theme.spacing(2, 2),
    background: (theme) => theme.palette.background.paper,
    borderRadius: 1,
    padding: (theme) => theme.spacing(2),
    boxShadow: (theme) => theme.shadow.card,
  } as SxProps<Theme>,

  avatar: {
    gridArea: 'avatar',
    width: '100px',
    height: '100px',
  } as SxProps<Theme>,

  trainer: {
    gridArea: 'trainer',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    minWidth: 0,
  } as SxProps<Theme>,

  info: {
    gridArea: 'info',
    display: '-webkit-box',
    boxOrient: 'vertical',
    lineClamp: 3,
    lineHeight: '1.125rem',
    maxHeight: '3.375rem',
    overflow: 'hidden',
  } as SxProps<Theme>,

  name: {
    fontSize: '1.125rem',
    fontWeight: (theme) => theme.typography.fontWeightMedium,
  } as SxProps<Theme>,

  rating: {
    display: 'flex',
    alignItems: 'center',
    '& > :not(:last-child)': {
      marginRight: (theme) => theme.spacing(0.5),
    },
  } as SxProps<Theme>,
};
