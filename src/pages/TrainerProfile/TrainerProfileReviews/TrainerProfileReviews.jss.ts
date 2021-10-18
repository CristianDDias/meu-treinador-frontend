import { SxProps } from '@mui/system/styleFunctionSx';
import { Theme } from '@mui/material/styles';

export const styles = {
  item: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    margin: (theme) => theme.spacing(0.5, 0),
  } as SxProps<Theme>,

  author: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: (theme) => theme.spacing(1),
  } as SxProps<Theme>,

  name: {
    fontWeight: (theme) => theme.typography.fontWeightMedium,
  } as SxProps<Theme>,

  rating: {
    display: 'flex',
    alignItems: 'center',
    '& > :first-child': {
      marginRight: (theme) => theme.spacing(1),
    },
  } as SxProps<Theme>,

  loading: {
    padding: (theme) => theme.spacing(1, 0),
    '& > :not(:last-child)': {
      marginBottom: (theme) => theme.spacing(1),
    },
  } as SxProps<Theme>,
};
