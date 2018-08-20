import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';
import App from './app/layout/App';
import './index.css';

const rootElement = document.getElementById('root');
let render = () => {
  ReactDOM.render(
  <BrowserRouter>
  <App />
  </BrowserRouter>  
  ,
   rootElement);
};
if (module.hot) {
    module.hot.accept('./app/layout/App', () => {
      setTimeout(render);
  });
}
render();






