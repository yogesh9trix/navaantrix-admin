/** @format */

import Headings from './Headings';
import FormFooter from './FormFooter';
import InputBoxes from './InputBoxes';
import './style.css';
import RegisterClientProvider from '../../../store/store.register.client';

function RegisterClient() {
  const submitHandler = (event) => {
    event.preventDefault();
  };
  return (
    <RegisterClientProvider>
      <main className="registeration-container">
        <section className="personal-details registeration-section">
          {/* left image and logo  */}
          <div className="image-container client-image-container"></div>
          {/* form fields  */}
          <div className="field-container">
            <Headings />
            <div className="inputs-wrapper organisation-wrapper">
              <InputBoxes />
            </div>
            <FormFooter submitHandler={submitHandler} />
          </div>
        </section>
      </main>
    </RegisterClientProvider>
  );
}

export default RegisterClient;
