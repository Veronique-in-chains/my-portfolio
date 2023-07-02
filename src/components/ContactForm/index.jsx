import React, { useState } from "react";
import ReactDOM from "react-dom";
import { useFormspark } from "@formspark/use-formspark";

const FORMSPARK_FORM_ID = "rH39WJDY";



const ContactForm = () => {
  const [submit, submitting] = useFormspark({
    formId: FORMSPARK_FORM_ID,
  });

  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [nameVisible, setNameVisible] = useState(false);
  const [emailVisible, setEmailVisible] = useState(false);
  const [messageVisible, setMessageVisible] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    await submit({ message, name, email });
    alert("Děkuji. Zpráva byla odeslána.");
  };

  return (
    <form className="form" onSubmit={onSubmit}>
      <div className="form__row">
        <div className="form__column">
          <label htmlFor="name" className={nameVisible ? "visible" : null}>
            jméno:
          </label>
          <input
              type="text"
              id="name"
              name="name"
              required=""
              placeholder="jméno"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                setNameVisible(!false);
              }}
          />
        </div>

        <div className="form__column">
          <label htmlFor="email" className={emailVisible ? "visible" : null}>
            e-mail:
          </label>
          <input
              type="email"
              id="email"
              name="email"
              required=""
              placeholder="e-mail"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setEmailVisible(!false);
              }}
            />
        </div>

      </div>
      <div className="form__row">
        <div className="form__column">
          <label htmlFor="message" className={messageVisible ? "visible" : null}>
            váš vzkaz:
          </label>
          <textarea 
              id="message"
              placeholder="váš vzkaz"
              value={message} 
              onChange={(e) => {
                setMessage(e.target.value);
                setMessageVisible(!false);
              }} 
            />
        </div>
      </div>
      <div className="form__row">
        <div className="form__column">
          <button type="submit" disabled={submitting}>
            odeslat
          </button>
        </div>

      </div>

    </form>
  );
};

export default ContactForm;
