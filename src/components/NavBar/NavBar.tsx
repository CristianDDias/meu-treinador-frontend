import React from "react";
import { useHistory, useLocation } from "react-router-dom";
import { makeStyles, Theme } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import CalendarIcon from "@material-ui/icons/DateRange";
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
      showLabels
      value={value}
      onChange={navigateTo}
      className={classes.navigation}
    >
      <BottomNavigationAction
        label="Buscar"
        value="trainers"
        icon={<SearchIcon />}
      />
      <BottomNavigationAction
        label="Calendário"
        value="calendar"
        icon={<CalendarIcon />}
      />
      <BottomNavigationAction
        label="Treinos"
        value="trainings"
        icon={<TrainingIcon />}
      />
      <BottomNavigationAction
        label="Perfil"
        value="profile"
        icon={<ProfileIcon />}
      />
    </BottomNavigation>
  );
};
