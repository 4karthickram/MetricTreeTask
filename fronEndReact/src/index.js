import React from 'react';
import ReactDOM from 'react-dom';
import 'react-toastify/dist/ReactToastify.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import createSaga from 'redux-saga';
import { logger } from 'redux-logger';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers/rootReducer';
import rootSaga from './sagas/rootSaga';

const Saga = createSaga();

const Store = createStore(rootReducer, applyMiddleware(logger, Saga));

Saga.run(rootSaga);

ReactDOM.render(<Provider store={Store}><App /></Provider>, document.getElementById('app'));
registerServiceWorker();
