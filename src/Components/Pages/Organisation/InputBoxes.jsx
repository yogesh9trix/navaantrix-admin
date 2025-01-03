/** @format */

import { useEffect } from 'react';
import { useRegisterClientCtx } from '../../../store/store.register.client';
import RegisterationService from '../../../Services/service.organisation';
import MultiSelectBox from '../../Molecules/MultiSelect.jsx/MultiSelect';

function InputBoxes() {
  const { state, ...ctxRegister } = useRegisterClientCtx();

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
    <article>
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
        <div className="dropdown-multiselect multi-select-wrapper">
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
              id="customDomainBtn"
              className="btn btn-primary inter-font font-size-12"
            >
              Add new one
            </button>
          </div>
        </div>
        <div className="customDomainInput inter-font">
          <input
            type="text"
            className="input-box"
            placeholder="Custom domain name."
            id="customDomainInputBox"
            autoComplete="off"
          />
          <div className="customBtnWrapper">
            <button
              id="addToListCustomDomainBtn"
              className="btn btn-primary inter-font font-size-12"
            >
              Add to list
            </button>
            <button
              id="custDomBackBtn"
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
  );
}

export default InputBoxes;
