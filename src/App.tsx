import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { makeStyles, ThemeProvider } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Header } from "./components/Header/Header";
import { NavBar } from "./components/NavBar/NavBar";
import { Trainers } from "./pages/Trainers/Trainers";
import { TrainerProfile } from "./pages/TrainerProfile/TrainerProfile";
import { Trainings } from "./pages/Trainings/Trainings";
import { Calendar } from "./pages/Calendar/Calendar";
import { Profile } from "./pages/Profile/Profile";
import { theme } from "./theme";

const useStyles = makeStyles({
  layout: {
    height: "calc(100vh - 56px)",
    display: "flex",
    flexDirection: "column",
    "& > :nth-child(2)": {
      flexGrow: 1,
      flexBasis: 0,
    },
  },
});

export const App = () => {
  const classes = useStyles();
  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <div className={classes.layout}>
            <Header />
            <Container maxWidth="xs" disableGutters>
              <Switch>
                <Route exact path="/trainers">
                  <Trainers />
                </Route>
                <Route path="/trainers/:trainerId">
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
                <Redirect exact from="/" to="/trainers" />
              </Switch>
            </Container>
            <NavBar />
          </div>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
};
