import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";

export const Contact = () => {
  const form = useRef();
  const [message, setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_bkg56qj", "template_preg9u4", form.current, {
        publicKey: "4TiwfDly9BiZRP5N_",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          setMessage("Response sent successfully");
          alert("Response sent successfully");
          form.current.reset(); // Reset the form fields
        },
        (error) => {
          console.log("FAILED...", error.text);
          alert("Check your Network Connection / Try again later");
        }
      );
  };

  return (
    <div className="contactpage">
      <div className="main-div">
        <h1 className="text-center text-lg">Contact Us</h1>
        <p className="text-center mb-2">
          Any Question or remarks? Just write us a message
        </p>
        <form className="contact-form" ref={form} onSubmit={sendEmail}>
          <label>Name</label>
          <input type="text" name="from_name" />
          <label>Email</label>
          <input type="email" name="from_email" />
          <label>Message</label>
          <textarea name="message" />
          <input type="submit" value="Send" />
        </form>
      </div>
    </div>
  );
};

export default Contact;
