import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import BackIcon from '@mui/icons-material/ArrowBackIos';
import { styles } from './Header.jss';

export const Header: React.FC = () => {
  const history = useHistory();
  const location = useLocation();

  const navigateBack = (): void => {
    history.goBack();
  };

  const hideBackButton = !location.pathname.split('/')[2];

  return (
    <AppBar sx={styles.header} position="fixed">
      <Toolbar variant="dense">
        <IconButton sx={hideBackButton ? styles.hidden : styles.button} edge="start" onClick={navigateBack}>
          <BackIcon />
        </IconButton>
        <Typography sx={styles.title} variant="h6" align="center">
          MEU TREINADOR
        </Typography>
      </Toolbar>
    </AppBar>
  );
};
