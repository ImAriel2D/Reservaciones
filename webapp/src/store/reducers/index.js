import { combineReducers } from 'redux';

import appReducer from './appReducer';
import datesReducer from './datesReducer';
import formReducer from './formReducer';
import userReducer from './userReducer';
import roomsReducer from './roomsReducer';

const reducers = combineReducers({
  app: appReducer,
  dates: datesReducer,
  form: formReducer,
  user: userReducer,
  rooms: roomsReducer,
});

export default reducers;
