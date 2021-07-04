// import React Bootstrap components
import { Form, Col } from "react-bootstrap";

// import css module file
import cssModules from "./Form.module.css";

// inline style
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

// change component name because it has used by react-bootstrap
function FormComponent() {
  return (
    //inline styling
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
      {/* css module */}
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
      {/* css global */}
      <div className="form-group">
        <label htmlFor="gender" className="form-label">
          Gender
        </label>
        <select id="gender" className="form-select" defaultValue="Choose...">
          <option>Choose...</option>
          <option>Male</option>
          <option>Female</option>
        </select>
      </div>
      {/* react-bootstrap componen */}
      <Form.Row>
        <Form.Group as={Col} md="6">
          <Form.Label>City</Form.Label>
          <Form.Control type="text" placeholder="City" required />
        </Form.Group>
        <Form.Group as={Col} md="6">
          <Form.Label>State</Form.Label>
          <Form.Control type="text" placeholder="State" required />
        </Form.Group>
      </Form.Row>
    </form>
  );
}

export default FormComponent;
