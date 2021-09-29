import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Container from '@mui/material/Container';
import { Header } from './components/Header/Header';
import { NavBar } from './components/NavBar/NavBar';
import { SearchTrainers } from './pages/SearchTrainers/SearchTrainers';
import { FavoriteTrainers } from './pages/FavoriteTrainers/FavoriteTrainers';
import { TrainerProfile } from './pages/TrainerProfile/TrainerProfile';
import { Trainings } from './pages/Trainings/Trainings';
import { Calendar } from './pages/Calendar/Calendar';
import { Profile } from './pages/Profile/Profile';
import { styles } from './App.jss';

export const App: React.FC = () => {
  return (
    <>
      <Header />
      <Container sx={styles.container} maxWidth="sm">
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
    </>
  );
};
