import { SxProps } from '@mui/system/styleFunctionSx';
import { Theme } from '@mui/material/styles';

export const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    padding: (theme) => theme.spacing(2),
    '& > :not(:last-child)': {
      marginBottom: (theme) => theme.spacing(2),
    },
  } as SxProps<Theme>,

  message: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    padding: (theme) => theme.spacing(2),
  } as SxProps<Theme>,
};
