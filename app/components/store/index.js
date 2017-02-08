import { compose, createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';

const createStoreWithMiddleware = compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
);

const store = createStoreWithMiddleware(createStore)(rootReducer);

export default store;