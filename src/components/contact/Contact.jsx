import React from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { AiOutlineLinkedin } from "react-icons/ai";
import { BsWhatsapp } from "react-icons/bs";
import { useRef } from "react";
import emailjs from "emailjs-com";
const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_skqbcj7",
      "template_ps9mw8t",
      form.current,
      "-1-y-zfOcquJ1uyXL"
    );
    e.target.reset().then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
  };

  return (
    <section id="contact">
      <h5> Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>satyajitsahu123@outlook.com</h5>
            <a href="mailto:satyajitsahu123@outlook.com" target="_blank">
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <AiOutlineLinkedin className="contact__option-icon" />
            <h4>LinkedIn</h4>
            <h5>Satyajit Sahu</h5>
            <a
              href="https://www.linkedin.com/in/satyajit-sahu-34396318b/"
              target="_blank"
            >
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h4>Whatsapp</h4>
            <h5>+91 8097395044</h5>
            <a
              href="https://api.whatsapp.com/send?phone=+918097395044"
              target="_blank"
            >
              Send a message
            </a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Enter Your Full Name"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Enter Your Email"
            required
          />
          <textarea
            name="message"
            rows="7"
            placeholder="Enter Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            {" "}
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
