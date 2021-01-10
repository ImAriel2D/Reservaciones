export const checkForEmptyUserProperties = (user) => {
  const userProperties = Object.entries(user);
  const errors = {};

  userProperties.forEach(([prop]) => {
    errors[prop] = !user[prop];
  });
  return errors;
};

export const validateEmail = (email) => {
  const validEmailExp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return validEmailExp.test(email);
};

export const objectHasFalseAttributes = (object) => {
  const userProperties = Object.entries(object);
  return userProperties.some(([prop]) => object[prop] === true);
};
