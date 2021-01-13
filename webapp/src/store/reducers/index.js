import { combineReducers } from 'redux';

import formReducer from './formReducer';
import userReducer from './userReducer';
import roomsReducer from './roomsReducer';
import appReducer from './appReducer';

const reducers = combineReducers({
  app: appReducer,
  form: formReducer,
  user: userReducer,
  rooms: roomsReducer,
});

export default reducers;
