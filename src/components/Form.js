// import css module file
import cssModules from "./Form.module.css";

const styles = {
  form: {
    margin: "16px 20% 0",
  },
  formGroup: {
    marginBottom: "16px",
  },
  formLabel: {
    marginBottom: "8px",
    display: "inline-block",
  },
  formInput: {
    display: "block",
    width: "100%",
    padding: ".375rem .75rem",
    fontSize: "1rem",
    lineHeight: 1.5,
    color: "#212529",
    backgroundColor: "#fff",
    border: "1px solid #ced4da",
    borderRadius: ".25rem",
  },
};

function Form() {
  return (
    // inline styling
    <form style={styles.form}>
      <div style={styles.formGroup}>
        <label htmlFor="username" style={styles.formLabel}>
          Username
        </label>
        <input
          id="username"
          placeholder="Input username"
          style={styles.formInput}
        />
      </div>
      {/* css modules */}
      <div className={cssModules.formGroup}>
        <label htmlFor="email" className={cssModules.formLabel}>
          Email
        </label>
        <input
          id="email"
          type="email"
          placeholder="Input email"
          className={cssModules.formInput}
        />
      </div>
    </form>
  );
}

export default Form;
