import React from 'react';
import PropTypes from 'prop-types';

import SubmitForm from '../SubmitForm';
import Input from '../Input';

const PaymentComponent = ({
  handleSubmitForm,
}) => (
  <SubmitForm handleSubmit={handleSubmitForm} title="Información de pago">
    <p className="total">TOTAL: 50000000000</p>
    <Input
      placeHolder="ID de cuenta"
      error={false}
      handleSetValue={() => console.log('temp')}
      value=""
    />
    <Input
      placeHolder="Numero de cuenta"
      error={false}
      handleSetValue={() => console.log('temp')}
      value=""
    />
    <Input
      placeHolder="CVV"
      error={false}
      handleSetValue={() => console.log('temp')}
      value=""
    />
  </SubmitForm>
);

PaymentComponent.propTypes = {
  handleSubmitForm: PropTypes.func.isRequired,
};

export default PaymentComponent;
