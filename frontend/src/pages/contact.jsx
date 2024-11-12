import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { FaEnvelopeOpen, FaLinkedin, FaPhoneSquareAlt } from "react-icons/fa";
import { FiSend } from "react-icons/fi";
import Navbar from "../components/navbar";
import Themes from "../components/themes";
import "../assets/css/contact.css";
const serverBaseUrl = import.meta.env.VITE_BACKEND_SERVER_URL;

const Contact = () => {
  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .matches(/^[A-Za-z\s]+$/, "Name should contain only letters and spaces.")
      .required("Name is required.")
      .trim()
      .strict()
      .test(
        "no-leading-trailing-spaces",
        "No leading or trailing spaces allowed.",
        (value) => value === value?.trim()
      ),
    email: Yup.string()
      .email("Invalid email address.")
      .required("Email is required.")
      .trim()
      .strict()
      .test(
        "no-leading-trailing-spaces",
        "No leading or trailing spaces allowed.",
        (value) => value === value?.trim()
      ),
    phoneNumber: Yup.string()
      .matches(/^(\+?\d{1,3})?[\s-]?\(?\d{2,4}\)?[\s-]?\d{3,4}[\s-]?\d{4}$/, {
        message: "Invalid phone number format.",
        excludeEmptyString: true,
      })
      .nullable()
      .notRequired()
      .trim()
      .strict()
      .test(
        "no-leading-trailing-spaces",
        "No leading or trailing spaces allowed.",
        (value) => !value || value === value?.trim()
      ),
    subject: Yup.string()
      .required("Subject is required.")
      .trim()
      .strict()
      .test(
        "no-leading-trailing-spaces",
        "No leading or trailing spaces allowed.",
        (value) => value === value?.trim()
      ),
    message: Yup.string()
      .trim()
      .strict()
      .test(
        "no-leading-trailing-spaces",
        "No leading or trailing spaces allowed.",
        (value) => value === value?.trim()
      ),
  });

  const [alert, setAlert] = useState(false);
  const [fieldErrors, setFieldErrors] = useState({});
  const defaultFormData = {
    name: "",
    email: "",
    phoneNumber: "",
    subject: "",
    message: "",
  };

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    setSubmitting(true);
    try {
      const response = await fetch(`${serverBaseUrl}/contact-us`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...values }),
      });
      const responseData = await response.json();
      if (response.status === 201) {
        setAlert({ success: responseData.message });
        resetForm();
        setTimeout(() => setAlert({ success: false }), 3000);
      } else if (response.status === 403) {
        const error = typeof responseData.error;
        if (error === "object") {
          setFieldErrors(responseData.error);
        } else {
          setAlert(responseData.message || "An error occurred");
          setTimeout(() => setAlert({ error: false }), 3000);
        }
      } else {
        setAlert({ error: responseData.message });
        setTimeout(() => setAlert({ error: false }), 3000);
      }
    } catch (error) {
      setAlert({ error: "An error occurred while sending your message" });
      setTimeout(() => setAlert({ error: false }), 3000);
    } finally {
      setSubmitting(false);
    }
  };
  return (
    <>
      {alert?.success && (
        <div className="success form-error">{alert.success}</div>
      )}
      <Navbar />
      <Themes />
      {alert?.error && <div className="error form-error">{alert.error}</div>}
      <section className="contact section">
        <h2 className="section-title">
          Get In <span>Touch</span>
        </h2>

        <div className="contact-container container grid">
          <div className="contact-data">
            <h3 className="contact-title">Don't be Shy !</h3>

            <p className="contact-description">
              Feel free to get in touch with me. I am always open to discussing
              new projects, creative ideas or oppurtunities to be a part of you
              visions.
            </p>

            <div className="contact-info">
              <div className="info-item">
                <FaEnvelopeOpen className="info-icon" />

                <div>
                  <span className="info-title">Mail me</span>
                  <h4 className="info-description">hkmnoon787@gmail.com</h4>
                </div>
              </div>
              <div className="info-item">
                <FaPhoneSquareAlt className="info-icon" />

                <div>
                  <span className="info-title">Watsapp me</span>
                  <h4 className="info-description">+92 314 5046367</h4>
                </div>
              </div>
              <div className="info-item">
                <FaLinkedin className="info-icon" />

                <div>
                  <span className="info-title">LinkedIn</span>
                  <a
                    href="https://www.linkedin.com/in/hamidnawaz3"
                    target="_blank"
                    className="info-description profile-link"
                  >
                    go to profile
                  </a>
                </div>
              </div>
            </div>
          </div>

          <Formik
            initialValues={defaultFormData}
            validate={(values) => {
              setFieldErrors({});
              try {
                validationSchema.validateSync(values, { abortEarly: false });
                return {};
              } catch (err) {
                const errors = {};
                err.inner.forEach((validationError) => {
                  errors[validationError.path] = validationError.message;
                });
                return errors;
              }
            }}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form className="contact-form">
                <div className="form-input-group">
                  <div className="form-input-div">
                    <Field
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Your Name"
                      className="form-control"
                    />
                    <ErrorMessage
                      name="name"
                      component="p"
                      className="joi-error-message"
                    />
                    {fieldErrors.name && (
                      <p className="joi-error-message">{fieldErrors.name[0]}</p>
                    )}
                  </div>

                  <div className="form-input-div">
                    <Field
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Your Email"
                      className="form-control"
                    />
                    <ErrorMessage
                      name="email"
                      component="p"
                      className="joi-error-message"
                    />
                    {fieldErrors.email && (
                      <p className="joi-error-message">
                        {fieldErrors.email[0]}
                      </p>
                    )}
                  </div>

                  <div className="form-input-div">
                    <Field
                      id="phoneNumber"
                      name="phoneNumber"
                      type="tel"
                      placeholder="Your Phone Number"
                      className="form-control"
                    />
                    <ErrorMessage
                      name="phoneNumber"
                      component="p"
                      className="joi-error-message"
                    />
                    {fieldErrors.phoneNumber && (
                      <p className="joi-error-message">
                        {fieldErrors.phoneNumber[0]}
                      </p>
                    )}
                  </div>

                  <div className="form-input-div">
                    <Field
                      id="subject"
                      name="subject"
                      type="text"
                      placeholder="Your Subject"
                      className="form-control"
                    />
                    <ErrorMessage
                      name="subject"
                      component="p"
                      className="joi-error-message"
                    />
                    {fieldErrors.subject && (
                      <p className="joi-error-message">
                        {fieldErrors.subject[0]}
                      </p>
                    )}
                  </div>
                </div>

                <div className="form-input-div">
                  <Field
                    id="message"
                    name="message"
                    as="textarea"
                    placeholder="Your message"
                    className="form-control textarea"
                  ></Field>
                  <ErrorMessage
                    name="message"
                    component="p"
                    className="joi-error-message"
                  />
                  {fieldErrors.message && (
                    <p className="joi-error-message">
                      {fieldErrors.message[0]}
                    </p>
                  )}
                </div>

                <button
                  className="button"
                  type="submit"
                  disabled={isSubmitting}
                >
                  Send Message{" "}
                  <span className="button-icon contact-button-icon">
                    <FiSend />
                  </span>
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </section>
    </>
  );
};

export default Contact;
