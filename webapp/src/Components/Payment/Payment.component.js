import React from 'react';
import PropTypes from 'prop-types';

import SubmitForm from 'Components/SubmitForm';
import Input from 'Components/Input';

const PaymentComponent = ({
  handleSubmitForm,
  total,
}) => (
  <SubmitForm handleSubmit={handleSubmitForm} title="Información de pago">
    <p className="total">
      Total:
      { total }
    </p>
    <Input
      placeHolder="ID de cuenta"
      error={false}
      handleSetValue={() => console.log('temp')}
      value=""
      maxLength={16}
    />
    <Input
      placeHolder="Numero de cuenta"
      error={false}
      handleSetValue={() => console.log('temp')}
      value=""
      maxLength={16}
    />
    <Input
      placeHolder="CVV"
      error={false}
      handleSetValue={() => console.log('temp')}
      value=""
      maxLength={3}
    />
  </SubmitForm>
);

PaymentComponent.propTypes = {
  handleSubmitForm: PropTypes.func.isRequired,
  total: PropTypes.string.isRequired,
};

export default PaymentComponent;
