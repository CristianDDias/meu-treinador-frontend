import { SxProps } from '@mui/system/styleFunctionSx';
import { Theme, alpha } from '@mui/material/styles';

export const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
  } as SxProps<Theme>,

  chip: {
    margin: (theme) => theme.spacing(0.5),
    color: (theme) => theme.palette.primary.main,
    background: (theme) => alpha(theme.palette.primary.main, 0.1),
  } as SxProps<Theme>,
};
