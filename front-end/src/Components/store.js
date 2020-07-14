import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunkMiddleWare from 'redux-thunk';
import {searchItemsReducer, requestSearchItemsReducer, requestUserLoginReducer} from './Reducers.js';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';



const persistConfig = {
	key: 'root',
	storage: storage,
	whitelist: ['requestUserLoginReducer'] // which reducer want to store
  };
  
  
  const rootReducers = combineReducers({searchItemsReducer, requestSearchItemsReducer, requestUserLoginReducer});
  const middleware = applyMiddleware(thunkMiddleWare);
  const pReducer = persistReducer(persistConfig, rootReducers);

  export const store = createStore(pReducer, middleware);
  export const persistor = persistStore(store);

  export default { store, persistor };