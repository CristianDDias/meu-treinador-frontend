import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import { AppProvider } from './contexts/AppContext';
import { reportWebVitals } from './reportWebVitals';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import { mockServer } from './mock-server/mock-server';

async function bootstrap() {
  await mockServer.start();

  ReactDOM.render(
    <React.StrictMode>
      <AppProvider>
        <App />
      </AppProvider>
    </React.StrictMode>,
    document.getElementById('root')
  );

  // If you want your app to work offline and load faster, you can change
  // unregister() to register() below. Note this comes with some pitfalls.
  // Learn more about service workers: https://cra.link/PWA
  serviceWorkerRegistration.register();

  // If you want to start measuring performance in your app, pass a function
  // to log results (for example: reportWebVitals(console.log))
  // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
  // eslint-disable-next-line no-console
  reportWebVitals(console.log);
}
bootstrap();
