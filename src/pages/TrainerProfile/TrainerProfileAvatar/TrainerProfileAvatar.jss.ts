import { SxProps } from '@mui/system/styleFunctionSx';
import { Theme } from '@mui/material/styles';

export const styles = {
  avatar: {
    width: '200px',
    height: '200px',
    marginBottom: (theme) => theme.spacing(0.5),
  } as SxProps<Theme>,

  name: {
    fontSize: '1.5rem',
    fontWeight: (theme) => theme.typography.fontWeightMedium,
  } as SxProps<Theme>,

  favoriteButton: {
    background: '#ffffff !important',
    position: 'absolute',
    right: 0,
    transform: 'translateX(50%)',
    padding: (theme) => theme.spacing(1),
    zIndex: (theme) => theme.zIndex.appBar,
  } as SxProps<Theme>,

  rating: {
    marginRight: (theme) => theme.spacing(1),
  } as SxProps<Theme>,
};
