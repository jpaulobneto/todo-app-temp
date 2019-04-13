import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Root } from './components/Root/Root';
import * as serviceWorker from './services/serviceWorker/serviceWorker';
import { configureStore } from './services/configureStore/configureStore';

const store = configureStore();

ReactDOM.render(<Root store={store} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
