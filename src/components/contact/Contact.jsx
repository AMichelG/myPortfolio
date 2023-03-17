import React, { useRef } from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { BsWhatsapp } from "react-icons/bs";
import emailjs, { send } from "emailjs-com";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_x0jtpxl",
        "template_ehsjjjx",
        form.current,
        "7k2zuO3moOj1Dfiax"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Get in touch</h5>
      <h2>Contact me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h5>Email</h5>
            <h6>antonio.michel.gonzalez@gmail.com</h6>
            <a href="mailto:antonio.michel.gonzalez@gmail.com" target="_blank">
              Send me an email
            </a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h5>Phone</h5>
            <h4>+52 477 173 9249</h4>
            <a href="https://wa.me/5214771739249" target="_blank">
              Send me a text
            </a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Fullname" required />
          <input type="text" name="email" placeholder="Email" required />
          <textarea
            name="message"
            rows={7}
            placeholder="Type your message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
