import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import CalendarIcon from '@material-ui/icons/DateRange';
import FavoriteIcon from '@material-ui/icons/FavoriteBorder';
import ProfileIcon from '@material-ui/icons/AccountCircle';
import SearchIcon from '@material-ui/icons/Search';
import TrainingIcon from '@material-ui/icons/DirectionsRun';
import { useStyles } from './NavBar.jss';

export const NavBar: React.FC = () => {
  const classes = useStyles();
  const history = useHistory();
  const location = useLocation();

  const navigateTo = (_: any, value: string): void => {
    history.push(`/${value}`);
  };

  const value = location.pathname.split('/')[1];

  return (
    <BottomNavigation className={classes.navigation} value={value} onChange={navigateTo}>
      <BottomNavigationAction
        className={classes.button}
        label="Buscar"
        value="trainers"
        icon={<SearchIcon />}
      />
      <BottomNavigationAction
        className={classes.button}
        label="Favoritos"
        value="favorites"
        icon={<FavoriteIcon />}
      />
      <BottomNavigationAction
        className={classes.button}
        label="Calendário"
        value="calendar"
        icon={<CalendarIcon />}
      />
      <BottomNavigationAction
        className={classes.button}
        label="Treinos"
        value="trainings"
        icon={<TrainingIcon />}
      />
      <BottomNavigationAction
        className={classes.button}
        label="Perfil"
        value="profile"
        icon={<ProfileIcon />}
      />
    </BottomNavigation>
  );
};
