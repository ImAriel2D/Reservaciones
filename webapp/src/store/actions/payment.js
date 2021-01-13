import createReservation from '../../lib/apiCreateReservation';

export const executePayment = () => (dispatch, getState) => {
  const storedUser = getState().user;

  const data = {
    user: {
      name: storedUser.get('name'),
      paternalSurname: storedUser.get('paternalSurname'),
      maternalSurname: storedUser.get('maternalSurname'),
      dateOfBirth: storedUser.get('dateOfBirth'),
      email: storedUser.get('email'),
      phone: storedUser.get('phone'),
    },

  };

  createReservation(data)
    .then(() => {
      // TODO: HANDLE SUCCESS
    })
    .catch(() => {
      // TODO: HANDLE ERROR
    });
};
