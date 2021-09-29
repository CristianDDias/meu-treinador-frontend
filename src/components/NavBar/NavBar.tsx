import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import CalendarIcon from '@mui/icons-material/DateRange';
import FavoriteIcon from '@mui/icons-material/FavoriteBorder';
import ProfileIcon from '@mui/icons-material/AccountCircle';
import SearchIcon from '@mui/icons-material/Search';
import TrainingIcon from '@mui/icons-material/DirectionsRun';
import { styles } from './NavBar.jss';

export const NavBar: React.FC = () => {
  const history = useHistory();
  const location = useLocation();

  const navigateTo = (_: any, value: string): void => {
    history.push(`/${value}`);
  };

  const value = location.pathname.split('/')[1];

  return (
    <BottomNavigation sx={styles.navigation} value={value} onChange={navigateTo}>
      <BottomNavigationAction sx={styles.button} label="Buscar" value="trainers" icon={<SearchIcon />} />
      <BottomNavigationAction
        sx={styles.button}
        label="Favoritos"
        value="favorites"
        icon={<FavoriteIcon />}
      />
      <BottomNavigationAction
        sx={styles.button}
        label="Calendário"
        value="calendar"
        icon={<CalendarIcon />}
      />
      <BottomNavigationAction sx={styles.button} label="Treinos" value="trainings" icon={<TrainingIcon />} />
      <BottomNavigationAction sx={styles.button} label="Perfil" value="profile" icon={<ProfileIcon />} />
    </BottomNavigation>
  );
};
