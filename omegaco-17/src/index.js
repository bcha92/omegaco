import { StrictMode } from 'react';
import { render } from 'react-dom';
import './stylesheets/global.scss';
import App from './App';

render(
    <StrictMode>
      <App />
    </StrictMode>,
    document.querySelector("#root")
);

/*
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './stylesheets/global.scss';
import App from './App';

const root = document.querySelector("#root");

ReactDOM.render(<React.StrictMode>
  <App />
</React.StrictMode>, root);
*/