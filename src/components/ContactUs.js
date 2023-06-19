import React from "react";
import styles from "../style/ContactUs.module.css";
import Form from "./Form";

function ContactUs() {
  return (
    <div className={styles.contact}>
      <div className={styles.head}>
        <p className={styles.title}>Contact Us</p>
        <div className={styles.overlay}></div>
      </div>
      <div className={styles.body}>
        <div className={styles.inquiries}>
          <p className={styles.inq}>Inquiries</p>
          <p className={styles.details}>
            For all inquiries, please call us, visit us, or use the form
            provided.
          </p>
          <p className={styles.add}>Design Seed, Inc</p>
          <p className={styles.add}>1965 W Montrose Ave</p>
          <p className={styles.add}>Chicago, IL 60613</p>
          <p className={styles.add}>Office: (773) 362-4230</p>
          <p className={styles.add}>email: info@designseed.info</p>
          <div className={styles.icons}></div>
        </div>
        <div className={styles.form}>
          <Form />
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
