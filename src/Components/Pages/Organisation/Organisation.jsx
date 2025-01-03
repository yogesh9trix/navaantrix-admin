/** @format */

import { Paper } from '@mui/material';
import Headings from './Headings';
import FormFooter from './FormFooter';
import InputBoxes from './InputBoxes';
import { useRegisterClientCtx } from '../../../store/store.register.client';
import { validateFormFields } from '../../../Library/register.client.lib';

import './style.css';
import { isEmpty } from '../../../Util/utils';

function RegisterClient() {
  const { state, ...ctxRegister } = useRegisterClientCtx();

  const submitHandler = () => {
    const properties = Object.keys(state);
    const errors = properties
      .map((property) => {
        let value = '';
        if (property === 'domains') value = state[property].selected;
        else value = state[property].value;

        if (
          property !== 'domains' &&
          isEmpty(value) &&
          !state[property].required
        ) {
          return ''; // console.info('skipping', property);
        }
        return validateFormFields(property, value);
      })
      .filter((error) => error !== '');
    console.info(errors);
  };
  return (
    <main className="registeration-container">
      <Paper className="personal-details registeration-section">
        {/* left image and logo  */}
        <div className="image-container client-image-container"></div>
        {/* form fields  */}
        <Paper elevation={7} className="field-container">
          <Headings />
          <div className="inputs-wrapper organisation-wrapper">
            <InputBoxes />
          </div>
          <FormFooter submitHandler={submitHandler} />
        </Paper>
      </Paper>
    </main>
  );
}

export default RegisterClient;
