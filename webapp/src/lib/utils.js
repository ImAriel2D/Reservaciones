const acceptNumbersOnlyFromInput = (e) => {
  const { value } = e.target;

  const positiveIntegersExp = /^([1-9][0-9]{0,2})$/;
  return positiveIntegersExp.test(value) ? parseInt(value, 10) : 0;
};

export default acceptNumbersOnlyFromInput;
