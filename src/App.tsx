import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Header } from './components/Header/Header';
import { NavBar } from './components/NavBar/NavBar';
import { SearchTrainers } from './pages/SearchTrainers/SearchTrainers';
import { FavoriteTrainers } from './pages/FavoriteTrainers/FavoriteTrainers';
import { TrainerProfile } from './pages/TrainerProfile/TrainerProfile';
import { Trainings } from './pages/Trainings/Trainings';
import { Calendar } from './pages/Calendar/Calendar';
import { Profile } from './pages/Profile/Profile';
import { theme } from './theme';
import { useStyles } from './App.jss';

export const App = () => {
  const classes = useStyles();
  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Header />
          <Container className={classes.container} maxWidth="sm" disableGutters>
            <Switch>
              <Route path="/trainers" exact>
                <SearchTrainers />
              </Route>
              <Route path="/trainers/:trainerId">
                <TrainerProfile />
              </Route>
              <Route path="/favorites" exact>
                <FavoriteTrainers />
              </Route>
              <Route path="/favorites/:trainerId">
                <TrainerProfile />
              </Route>
              <Route path="/calendar">
                <Calendar />
              </Route>
              <Route path="/trainings">
                <Trainings />
              </Route>
              <Route path="/profile">
                <Profile />
              </Route>
              <Redirect from="/" to="/trainers" exact />
            </Switch>
          </Container>
          <NavBar />
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
};
