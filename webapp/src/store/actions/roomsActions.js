import { consultRooms } from 'lib/apiRooms';
import { setAppIsLoading } from 'store/actions/appActions';

import {
  ROOMS_SET_ROOMS,
  ROOMS_SET_AVAILABLE_ROOMS,
} from '../constants';

export const setStoredRooms = (payload) => ({ type: ROOMS_SET_ROOMS, payload });
export const setAvailableRooms = (payload) => ({ type: ROOMS_SET_AVAILABLE_ROOMS, payload });

export const fetchRooms = () => (dispatch, getState) => {
  dispatch(setAppIsLoading(true));

  const entryDate = getState().dates.get('entryDate');
  const leavingDate = getState().dates.get('leavingDate');

  const body = {
    fechaEntrada: entryDate.format('YYYY-MM-DD'),
    fechaSalida: leavingDate.format('YYYY-MM-DD'),
  };

  consultRooms(body)
    .then((result) => {
      const { numHabitaciones } = result.data;
      const rooms = numHabitaciones[0];

      dispatch(setAvailableRooms(rooms));
      dispatch(setAppIsLoading(false));
    })
    .catch(() => {
      dispatch(setAppIsLoading(false));
    });
};
