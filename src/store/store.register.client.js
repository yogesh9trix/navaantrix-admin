/** @format */

import { createContext, useReducer, useContext } from 'react';
import { registerClient } from '../hooks/reducers/reducer.registerclient';

const RegisterClientContext = createContext();

const initialState = {
  orgName: {
    value: '',
    required: true,
    placeholder: 'Organisation Name*',
    type: 'input',
    error: '',
  },
  sourceId: {
    value: '',
    required: true,
    placeholder: 'Source Id* (Numeric)',
    type: 'input',
    error: '',
  },
  mobileNum: {
    value: '',
    required: false,
    placeholder: 'Mobile Number',
    type: 'input',
    error: '',
  },
  website: {
    value: '',
    required: false,
    placeholder: 'Website (If have any)',
    type: 'input',
    error: '',
  },
  address: {
    value: '',
    required: false,
    placeholder: 'Address',
    type: 'textarea',
    error: '',
  },
  domains: {
    total: [],
    selected: [],
    required: true,
    type: 'select',
    error: '',
  },
};

function RegisterClientProvider({ children }) {
  const [state, dispatch] = useReducer(registerClient, initialState);

  const updateFieldVal = ({ field, value }) => {
    dispatch({ type: 'UPDATE_FIELD', payload: { field, value } });
  };

  const setAvailableDomains = (value) => {
    dispatch({
      type: 'AVAIL_DOMAINS',
      payload: { field: 'domains', value },
    });
  };

  const setSelectedDomains = (value) => {
    dispatch({
      type: 'SELECTED_DOMAINS',
      payload: { field: 'domains', value },
    });
  };

  const value = {
    state,
    updateFieldVal,
    setAvailableDomains,
    setSelectedDomains,
  };
  return (
    <RegisterClientContext.Provider value={value}>
      {children}
    </RegisterClientContext.Provider>
  );
}
export default RegisterClientProvider;

export function useRegisterClientCtx() {
  return useContext(RegisterClientContext);
}
