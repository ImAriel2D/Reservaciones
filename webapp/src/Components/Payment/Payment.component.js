import React from 'react';
import PropTypes from 'prop-types';

import SubmitForm from 'Components/SubmitForm';
import Input from 'Components/Input';

import './styles/payment.scss';

const PaymentComponent = ({
  handleSubmitForm,
  total,
  paymentInfo,
  setPaymentInfo,
}) => {
  const months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const years = [
    2021, 2022, 2023, 2024, 2025,
    2026, 2027, 2028, 2029, 2030,
    2031, 2032, 2033, 2034, 2035,
    2036, 2037, 2038, 2039, 2040,
  ];

  return (
    <SubmitForm handleSubmit={handleSubmitForm} title="Información de pago">
      <p className="total">
        Total:
        { total }
      </p>
      <Input
        placeHolder="Número de tarjeta"
        error={false}
        handleSetValue={(e) => setPaymentInfo({ ...paymentInfo, number: e.target.value })}
        value={paymentInfo.number}
        maxLength={16}
      />
      <Input
        placeHolder="Nombre del titular"
        error={false}
        handleSetValue={(e) => setPaymentInfo({ ...paymentInfo, name: e.target.value })}
        value={paymentInfo.name}
        maxLength={16}
      />
      <Input
        placeHolder="CVV"
        error={false}
        handleSetValue={(e) => setPaymentInfo({ ...paymentInfo, cvv: e.target.value })}
        value={paymentInfo.cvv}
        maxLength={3}
      />
      <h1 className="card-info">Mes</h1>
      <select
        className="number-selector"
        onChange={(e) => setPaymentInfo({ ...paymentInfo, months: parseInt(e.target.value, 10) })}
      >
        {
          months.map((value) => <option key={value} value={value}>{value}</option>)
        }
      </select>
      <h1 className="card-info">Año</h1>
      <select
        className="number-selector"
        onChange={(e) => setPaymentInfo({ ...paymentInfo, year: parseInt(e.target.value, 10) })}
      >
        {
          years.map((value) => <option key={value} value={value}>{value}</option>)
        }
      </select>
    </SubmitForm>
  );
};

PaymentComponent.propTypes = {
  handleSubmitForm: PropTypes.func.isRequired,
  paymentInfo: PropTypes.shape({
    number: PropTypes.string.isRequired,
    cvv: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    month: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
  }).isRequired,
  setPaymentInfo: PropTypes.func.isRequired,
  total: PropTypes.string.isRequired,
};

export default PaymentComponent;
