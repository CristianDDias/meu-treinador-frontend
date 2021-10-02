import { SxProps } from '@mui/system/styleFunctionSx';
import { Theme } from '@mui/material/styles';

export const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    padding: (theme) => theme.spacing(1),
    background: (theme) => theme.palette.background.paper,
    boxShadow: (theme) => theme.shadow.border,
    zIndex: (theme) => theme.zIndex.appBar,
    borderBottomLeftRadius: (theme) => theme.shape.borderRadius,
    borderBottomRightRadius: (theme) => theme.shape.borderRadius,
  } as SxProps<Theme>,

  input: {
    flexBasis: 0,
    flexGrow: 1,
    marginRight: (theme) => theme.spacing(1),
  } as SxProps<Theme>,
};
