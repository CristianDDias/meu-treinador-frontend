import { SxProps } from '@mui/system/styleFunctionSx';
import { Theme } from '@mui/material/styles';

export const styles = {
  container: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  } as SxProps<Theme>,

  list: {
    display: 'flex',
    flexDirection: 'column',
    flexBasis: 0,
    flexGrow: 1,
    overflow: 'auto',
  } as SxProps<Theme>,

  indicator: {
    display: 'flex',
    flexBasis: 0,
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: (theme) => theme.spacing(2),
  } as SxProps<Theme>,

  label: {
    padding: (theme) => theme.spacing(1),
    background: (theme) => theme.palette.background.paper,
    fontWeight: (theme) => theme.typography.fontWeightMedium,
    boxShadow: (theme) => theme.shadow.border,
    zIndex: (theme) => theme.zIndex.appBar,
    borderBottomLeftRadius: (theme) => theme.shape.borderRadius,
    borderBottomRightRadius: (theme) => theme.shape.borderRadius,
  } as SxProps<Theme>,
};
