import { SxProps } from '@mui/system/styleFunctionSx';
import { Theme } from '@mui/material/styles';

export const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    '& > :not(:last-child)': {
      marginBottom: (theme) => theme.spacing(1),
    },
  } as SxProps<Theme>,

  alert: {
    '& .MuiAlert-message': {
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      textAlign: 'center',
    },
  } as SxProps<Theme>,
};
