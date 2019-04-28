import { createStore, combineReducers, applyMiddleware,Store } from "redux";
import createSagaMiddleware, { SagaMiddleware } from 'redux-saga';
import { all } from 'redux-saga/effects';

import { systemReducer } from "./system/reducers";
import { systemEffects } from "./system/effects";

const rootReducer = combineReducers({
  system: systemReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export function* allSagas() {
  yield all([
    ...systemEffects
  ]);
}

export default function configureStore(initialState?: AppState) {
  const sagaMiddleware: SagaMiddleware = createSagaMiddleware();

  const middleware = [sagaMiddleware];
  const middleWareEnhancer = applyMiddleware(...middleware);
  const store =  createStore(rootReducer, initialState, middleWareEnhancer) as Store<AppState>;
  sagaMiddleware.run(allSagas);
  return store;
}
