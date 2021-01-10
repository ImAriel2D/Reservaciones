import { combineReducers } from 'redux';

import formReducer from './formReducer';
import userReducer from './userReducer';
import roomsReducer from './roomsReducer';

const reducers = combineReducers({
  form: formReducer,
  user: userReducer,
  rooms: roomsReducer,
});

export default reducers;
