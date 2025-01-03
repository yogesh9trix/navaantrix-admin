/** @format */

function FormFooter({ submitHandler }) {
  return (
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
        className="btn btn-primary btn-default-size poppins-font"
        type="submit"
        onClick={submitHandler}
      >
        Okay
      </button>
    </div>
  );
}

export default FormFooter;
