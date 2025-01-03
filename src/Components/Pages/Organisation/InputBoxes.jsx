/** @format */

import { useEffect, useState } from 'react';
import { useRegisterClientCtx } from '../../../store/store.register.client';
import RegisterationService from '../../../Services/service.organisation';
import MultiSelectBox from '../../Molecules/MultiSelect.jsx/MultiSelect';
import { Snackbar } from '@mui/material';

function InputBoxes() {
  const { state, ...ctxRegister } = useRegisterClientCtx();
  const [hideMultiSelect, setHideMultiSelect] = useState(false);
  const [customDomain, setCustomDomain] = useState('');
  const [snackbar, setSnackbar] = useState(false);

  const inputList = Object.keys(state).filter((key) => key !== 'domains');

  const handleMultiSelect = (e, value, reason) => {
    const selected = typeof value === 'string' ? value.split(',') : value;
    ctxRegister.setSelectedDomains(selected);
  };

  useEffect(() => {
    RegisterationService.getDomainNames({}).then((response) => {
      if (response.status === 200) {
        ctxRegister.setAvailableDomains(Object.values(response.data.Domains));
      }
    });
  }, []);

  return (
    <>
      <article style={{ padding: '10px' }}>
        <div className="left-input-box">
          {inputList.map((key) => {
            if (state[key].type === 'input') {
              return (
                <input
                  key={key}
                  className="input-box"
                  type={state[key].type}
                  placeholder={state[key].placeholder}
                  autoComplete="off"
                  value={state[key].value}
                  onChange={(e) =>
                    ctxRegister.updateFieldVal({
                      field: key,
                      value: e.target.value,
                    })
                  }
                ></input>
              );
            } else {
              return (
                <textarea
                  key={key}
                  className="input-box text-area"
                  type={state[key].type}
                  placeholder={state[key].placeholder}
                  autoComplete="off"
                  value={state[key].value}
                  onChange={(e) =>
                    ctxRegister.updateFieldVal({
                      field: key,
                      value: e.target.value,
                    })
                  }
                ></textarea>
              );
            }
          })}
        </div>
        <div className="middle-input-box">
          <div
            className="dropdown-multiselect multi-select-wrapper"
            style={{ display: hideMultiSelect ? 'none' : 'block' }}
          >
            <MultiSelectBox
              variant="outlined"
              placeholder="Select Domain"
              handleChange={handleMultiSelect}
              handleClose={() => {}}
              selectAllHandler={(value) => {}}
              selectList={state.domains.total}
              selectedList={state.domains.selected}
            />
            <div
              className="multihide-feat inter-font"
              id="customDomainBtnWrapper"
            >
              <div>If domain name is not present in the list.</div>
              <button
                onClick={() => setHideMultiSelect(true)}
                className="btn btn-primary inter-font font-size-12"
              >
                Add new one
              </button>
            </div>
          </div>
          <div
            className="customDomainInput inter-font multi-select-wrapper"
            style={{ display: hideMultiSelect ? 'block' : 'none' }}
          >
            <input
              type="text"
              className="input-box"
              placeholder="Custom domain name."
              id="customDomainInputBox"
              autoComplete="off"
              value={customDomain}
              onChange={(e) => setCustomDomain(e.target.value)}
            />
            <div className="customBtnWrapper">
              <button
                className="btn btn-primary inter-font font-size-12"
                onClick={() => {
                  if (customDomain === '') return;
                  setSnackbar(true);
                  ctxRegister.setAvailableDomains([
                    ...state.domains.total,
                    customDomain,
                  ]);
                  ctxRegister.setSelectedDomains([
                    ...state.domains.selected,
                    customDomain,
                  ]);
                }}
              >
                Add to list
              </button>
              <button
                onClick={() => setHideMultiSelect(false)}
                className="btn btn-secondary inter-font font-size-12"
              >
                Go back
              </button>
            </div>
          </div>
          <article className="domainFileTable multi-select-wrapper">
            <div className="common-row inter-font">
              <span id="clientNameFiles" title="Client Name">
                Navaantrix
              </span>
              <span id="clientIdFiles" title="Client Id">
                426
              </span>
            </div>
            <div className="table-body poppins-font"></div>
          </article>
        </div>
      </article>
      <Snackbar
        open={snackbar}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        autoHideDuration={1500}
        onClose={() => {
          setSnackbar(false);
          setCustomDomain('');
        }}
        message={`Added ${customDomain}`}
      />
    </>
  );
}

export default InputBoxes;
