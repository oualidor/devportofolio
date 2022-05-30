import { createStore, applyMiddleware, compose } from 'redux';

import rootReducer from './Reducers';


const reduxStore = createStore(
    rootReducer,
);

export default reduxStore;
