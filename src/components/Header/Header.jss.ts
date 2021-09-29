import { SxProps } from '@mui/system/styleFunctionSx';
import { Theme } from '@mui/material/styles';

export const styles = {
  header: {
    boxShadow: (theme) => theme.shadow.border,
  } as SxProps<Theme>,

  title: {
    width: '100%',
    fontStyle: 'italic',
  } as SxProps<Theme>,

  button: {
    position: 'absolute',
    color: '#ffffff',
  } as SxProps<Theme>,

  hidden: {
    display: 'none',
  } as SxProps<Theme>,
};
