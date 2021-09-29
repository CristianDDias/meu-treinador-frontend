import { SxProps } from '@mui/system/styleFunctionSx';
import { Theme } from '@mui/material/styles';

export const styles = {
  card: {
    display: 'flex',
    flexDirection: 'column',
    background: (theme) => theme.palette.background.paper,
    borderRadius: 1,
    padding: 2,
    boxShadow: (theme) => theme.shadow.card,
    width: '100%',
  } as SxProps<Theme>,

  title: {
    fontSize: '1.25rem',
    fontWeight: (theme) => theme.typography.fontWeightMedium,
    marginBottom: (theme) => theme.spacing(1),
  } as SxProps<Theme>,
};
