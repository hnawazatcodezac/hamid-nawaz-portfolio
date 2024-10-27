import React from "react";
import {
  FaDribbble,
  FaEnvelopeOpen,
  FaFacebookF,
  FaPhoneSquareAlt,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { FiSend } from "react-icons/fi";
import "../assets/css/contact.css";

const Contact = () => {
  return (
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
          </div>

          <div className="contact-social">
            <a href="https://facebook.com" className="contact-social-link">
              <FaFacebookF />
            </a>
            <a href="https://twitter.com" className="contact-social-link">
              <FaTwitter />
            </a>
            <a href="https://youtube.com" className="contact-social-link">
              <FaYoutube />
            </a>
            <a href="https://dribble.com" className="contact-social-link">
              <FaDribbble />
            </a>
          </div>
        </div>

        <form className="contact-form">
          <div className="form-input-group">
            <div className="form-input-div">
              <input
                type="text"
                placeholder="Your Name"
                className="form-control"
              />
            </div>

            <div className="form-input-div">
              <input
                type="email"
                placeholder="Your Email"
                className="form-control"
              />
            </div>

            <div className="form-input-div">
              <input
                type="text"
                placeholder="Your Subject"
                className="form-control"
              />
            </div>
          </div>

          <div className="form-input-div">
            <textarea
              placeholder="Your message"
              className="form-control textarea"
            ></textarea>
          </div>

          <button className="button">
            Send Message{" "}
            <span className="button-icon contact-button-icon">
              <FiSend />
            </span>
          </button>
        </form>

        <div className="contact-info-div">
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
          </div>

          <div className="contact-social">
            <a href="https://facebook.com" className="contact-social-link">
              <FaFacebookF />
            </a>
            <a href="https://twitter.com" className="contact-social-link">
              <FaTwitter />
            </a>
            <a href="https://youtube.com" className="contact-social-link">
              <FaYoutube />
            </a>
            <a href="https://dribble.com" className="contact-social-link">
              <FaDribbble />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
