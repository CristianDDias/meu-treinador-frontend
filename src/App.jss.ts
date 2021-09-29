import { SxProps } from '@mui/system/styleFunctionSx';
import { Theme } from '@mui/material/styles';

export const styles = {
  container: {
    height: 'calc(100vh - 48px - 56px)',
    overflow: 'auto',
    marginTop: '48px',
    marginBottom: '56px',
    '@media (max-width: 600px)': {
      paddingLeft: 0,
      paddingRight: 0,
    },
    '@media (min-width: 600px)': {
      paddingLeft: 1,
      paddingRight: 1,
    },
  } as SxProps<Theme>,
};
