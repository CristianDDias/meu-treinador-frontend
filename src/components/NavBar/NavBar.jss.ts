import { SxProps } from '@mui/system/styleFunctionSx';
import { Theme } from '@mui/material/styles';

export const styles = {
  navigation: {
    boxShadow: (theme) => theme.shadow.border,
    zIndex: (theme) => theme.zIndex.appBar,
    position: 'fixed',
    bottom: '0px',
    left: '0px',
    right: '0px',
  } as SxProps<Theme>,

  button: {
    minWidth: '55px',
  } as SxProps<Theme>,
};
