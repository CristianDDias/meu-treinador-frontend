import { SxProps } from '@mui/system/styleFunctionSx';
import { Theme } from '@mui/material/styles';
import { alertClasses } from '@mui/material/Alert';

export const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    '& > :not(:last-child)': {
      marginBottom: (theme) => theme.spacing(1),
    },
  } as SxProps<Theme>,

  alert: {
    [`& .${alertClasses.message}`]: {
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      textAlign: 'center',
    },
  } as SxProps<Theme>,
};
