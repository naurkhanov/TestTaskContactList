import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { Global } from './styled';
import { Provider } from 'react-redux';
import { store } from './redux/configureStore';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <Global />
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);
