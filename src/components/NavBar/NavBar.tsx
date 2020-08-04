import React from "react";
import { useHistory, useLocation } from "react-router-dom";
import { makeStyles, Theme } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import CalendarIcon from "@material-ui/icons/DateRange";
import FavoriteIcon from "@material-ui/icons/FavoriteBorder";
import ProfileIcon from "@material-ui/icons/AccountCircle";
import SearchIcon from "@material-ui/icons/Search";
import TrainingIcon from "@material-ui/icons/DirectionsRun";

const useStyles = makeStyles((theme: Theme) => ({
  navigation: {
    borderTop: theme.border,
    zIndex: theme.zIndex.appBar,
    position: "fixed",
    bottom: "0px",
    left: "0px",
    right: "0px",
  },
  button: {
    minWidth: "55px",
  },
}));

export const NavBar = () => {
  const classes = useStyles();
  const history = useHistory();
  const location = useLocation();

  const navigateTo = (_: any, value: string) => {
    history.push(`/${value}`);
  };

  const value = location.pathname.split("/")[1];

  return (
    <BottomNavigation
      value={value}
      onChange={navigateTo}
      className={classes.navigation}
    >
      <BottomNavigationAction
        label="Buscar"
        value="trainers"
        className={classes.button}
        icon={<SearchIcon />}
      />
      <BottomNavigationAction
        label="Favoritos"
        value="favorites"
        className={classes.button}
        icon={<FavoriteIcon />}
      />
      <BottomNavigationAction
        label="Calendário"
        value="calendar"
        className={classes.button}
        icon={<CalendarIcon />}
      />
      <BottomNavigationAction
        label="Treinos"
        value="trainings"
        className={classes.button}
        icon={<TrainingIcon />}
      />
      <BottomNavigationAction
        label="Perfil"
        value="profile"
        className={classes.button}
        icon={<ProfileIcon />}
      />
    </BottomNavigation>
  );
};
