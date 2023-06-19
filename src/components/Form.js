import React, { useState } from "react";
import styles from "../style/Form.module.css";

function Form() {
  const [details, setDetails] = useState({
    projectType: "single family resident",
    name: "",
    email: "",
    phn: "",
    msg: "",
  });

  function submitHandler(e) {
    e.preventDefault();
    const { name, email, phn, msg } = details;
    if (!name || !email || !phn || !msg) {
      return;
    }
    setDetails({ name: "", email: "", phn: "", msg: "" });
  }

  return (
    <form onSubmit={submitHandler}>
      <div className={styles.formContent}>
        <label htmlFor="type">Project Type</label>
        <select
          name="type"
          id="type"
          className={styles.field}
          onChange={(e) =>
            setDetails({ ...details, projectType: e.target.value })
          }
        >
          <option value="single family resident">
            Single family residential
          </option>
          <option value="multi family">Multi family</option>
          <option value="boutique commercial">Boutique commercial</option>
          <option value="hospitality">Hospitality</option>
          <option value="other">Other</option>
        </select>
      </div>
      <div className={styles.formContent}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          className={styles.field}
          onChange={(e) => setDetails({ ...details, name: e.target.value })}
        />
      </div>
      <div className={styles.formContent}>
        <label htmlFor="email">Email Address</label>
        <input
          type="email"
          className={styles.field}
          onChange={(e) => setDetails({ ...details, email: e.target.value })}
        />
      </div>
      <div className={styles.formContent}>
        <label htmlFor="phn">Phone Number</label>
        <input
          type="number"
          className={styles.field}
          onChange={(e) => setDetails({ ...details, phn: e.target.value })}
        />
      </div>
      <div className={styles.formContent}>
        <label htmlFor="msg">Message</label>
        <textarea
          name="msg"
          id="msg"
          cols="30"
          rows="10"
          className={styles.textArea}
          onChange={(e) => setDetails({ ...details, msg: e.target.value })}
        ></textarea>
      </div>
      <div className={styles.formContent}>
        <button type="submit" className={styles.button}>
          Submit
        </button>
      </div>
    </form>
  );
}

export default Form;
