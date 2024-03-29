import { SxProps } from '@mui/system/styleFunctionSx';
import { Theme } from '@mui/material/styles';

export const styles = {
  nested: {
    padding: (theme) => theme.spacing(0.5, 0, 0.5, 4),
  } as SxProps<Theme>,
};
