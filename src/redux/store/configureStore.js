import {createStore, combineReducers, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import loggerMiddleware from 'redux-logger';
// import thunk from 'redux-thunk';
// import {persistStore, persistReducer} from 'redux-persist';
// import AsyncStorage from '@react-native-community/async-storage';
// import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import counterReducer from '../reducer/counterReducer';
import sagas from '../sagas'
import {rootSaga} from '../store/rootSaga'





const rootReducer = combineReducers({
  // counterReducer,
  counterReducer,
});

// const persistConfig = {
//   key: 'root',
//   storage: AsyncStorage,
//   stateReconciler: autoMergeLevel2,
//   whitelist: [
//   ],
// };

// const pReducer = persistReducer(persistConfig, rootReducer);
// const middleware = applyMiddleware(thunk, loggerMiddleware);

// export const configureStore = createStore(pReducer, middleware);
// export const persistor = persistStore(configureStore);

// export default persistor;
// const store = createStore(rootReducer, applyMiddleware(thunk));
const sagaMiddleware= createSagaMiddleware();
export  const configureStore = createStore(rootReducer,applyMiddleware(sagaMiddleware,loggerMiddleware));

sagaMiddleware.run(rootSaga);
export  default configureStore ;
