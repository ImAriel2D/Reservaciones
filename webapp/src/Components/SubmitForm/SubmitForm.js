import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import {
  decreaseIndex,
} from '../../store/actions/formActions';

import './styles/submitForm.scss';

const SubmitForm = ({ children, handleSubmit, title }) => {
  const dispatch = useDispatch();

  return (
    <form className="submit-form" onSubmit={handleSubmit}>
      <h1 id="title">{ title }</h1>
      { children }

      <div className="form-buttons">
        <button className="form-button" type="button" onClick={() => dispatch(decreaseIndex())}>
          Anterior
        </button>
        <button className="form-button" type="submit">
          Siguiente
        </button>
      </div>
    </form>
  );
};

SubmitForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default SubmitForm;
