import { createStore, combineReducers, applyMiddleware, compose} from "redux";
import EpgEvents from "./EpgEvents/reducer"
import createSagaMiddleware from 'redux-saga';
import EventSagas from "./EpgEvents/sagas" 

const sagaMiddleware = createSagaMiddleware();
const middlewares = [
  sagaMiddleware,
];

const enhancers = [
  applyMiddleware(...middlewares),
];

const rootReducer = combineReducers({
  EpgEvents,
});

const composeEnhancers =
    process.env.NODE_ENV !== 'production' &&
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose;

const store = createStore(
  rootReducer,
  {},
  composeEnhancers(...enhancers)
);

// then run the saga
sagaMiddleware.run(...EventSagas)


export default store;