/** @format */
import './style.css';

function DataTree() {
  return (
    <main className="registeration-container">
      <section className="personal-details registeration-section">
        {/* left image and logo  */}
        <div className="image-container client-image-container"></div>
        {/* form fields  */}
        <div className="field-container">
          <h1 className="form-title inter-font">Organisation Details</h1>
          <h3 className="form-subtitle inter-font">
            You are about to create Admin or super user.
          </h3>
          <div className="inputs-wrapper organisation-wrapper">
            {/* form fields goes here  */}
            <article>
              <div className="left-input-box">
                <input
                  id="orgName"
                  className="input-box"
                  type="text"
                  placeholder="Organisation Name*"
                  autoComplete="off"
                />
                <input
                  id="sourceId"
                  className="input-box"
                  type="text"
                  placeholder="Source Id* (Numberic)"
                  autoComplete="off"
                />
                <input
                  id="mobile"
                  className="input-box"
                  type="text"
                  placeholder="Mobile Number"
                  autoComplete="off"
                />
                <input
                  id="website"
                  className="input-box"
                  type="text"
                  placeholder="Website (If have any)"
                  autoComplete="off"
                />
                <textarea
                  className="input-box text-area"
                  value=""
                  type="textaria"
                  id="address"
                  placeholder="Address"
                  autoComplete="off"
                ></textarea>
              </div>
              <div className="middle-input-box">
                <div className="dropdown-multiselect multi-select-wrapper">
                  <div className="chips-wrapper">
                    <span id="DomainSelectMsg" className="chip">
                      Click items to remove
                    </span>
                  </div>
                  <select
                    className="multihide-feat"
                    id="domainName"
                    autoComplete="off"
                  >
                    <option selected disabled value="default">
                      Select Domain(s)
                    </option>
                  </select>
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
              <div className="right-input-box"></div>
            </article>
          </div>
          <div className="btn-group" style={{ marginTop: '16px' }}>
            <div>
              <a href="/user-registeration.html">
                <button
                  id="back-btn"
                  type="button"
                  className="btn btn-secondary inter-font font-size-12"
                >
                  Add user
                </button>
              </a>

              <a href="/organisation-details.html">
                <button
                  className="btn btn-secondary inter-font font-size-12"
                  type="button"
                >
                  See Organisation
                </button>
              </a>
            </div>
            <button
              id="next-btn"
              className="btn btn-primary btn-default-size poppins-font"
              type="button"
            >
              Okay
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}

export default DataTree;
