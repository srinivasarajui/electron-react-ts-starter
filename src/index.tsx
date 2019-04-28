import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './ui/App';
import { Provider } from "react-redux";
import configureStore from './ui/store';
import * as serviceWorker from './serviceWorker';

export const store = configureStore();

const Root = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(<Root />, document.getElementById('root'));

serviceWorker.unregister();
