import emailjs from '@emailjs/browser';
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const FormStyle = styled.form`
  width: 100%;
  .form-group {
    width: 100%;
    margin-bottom: 10px;
  }
  label {
    font-size: 20px;
  }
  input,
  textarea {
    width: 100%;
    font-size: 18px;
    padding: 22px;
    color: var(--gray-1);
    background-color: var(--p-cl-alt);
    outline: none;
    border: none;
    border-radius: 8px;
    margin-top: 5px;
  }
  textarea {
    min-height: 250px;
    resize: vertical;
  }
  button[type='submit'] {
    color: var(--body-bg);
    background-color: var(--p-cl-alt);;
    font-size: 22px;
    display: inline-block;
    outline: none;
    border: none;
    padding: 1rem 4rem;
    border-radius: 8px;
    cursor: pointer;
  }
  @media only screen and (max-width: 768px) {
    label{
      font-size: 16px;
    }
    button[type='submit'] {
      font-size: 16px;
    }
  }
`;
export default function   ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const serviceID = "service_eil4qyo";
  const templateID = "template_n5g7hiq";

  useEffect(() => {
    (() => {
      emailjs.init("zsV4h-JnUD7_cJhzg");
  })();
  });

  const submit = (e) => {
    e.preventDefault()
    const params = {
      name:  name,
      email: email,
      message: message
    };

    emailjs.send(serviceID, templateID, params)
    .then(
      res => {
        setName('');
        setEmail('');
        setMessage('');
        alert("Your message sent successfull.")
      }
    )
      .catch((err) => console.log(err))
}
  return (
    <>
      <FormStyle>
        <div className="form-group">
          <label htmlFor="name">
            Your Name
            <input
              type="text"
              id="name"
              name="name"
              placeholder='Enter name'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="email">
            Your Email
            <input
            placeholder='Enter Email'
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
        </div>
        <div className="form-group">
        </div>
        <div className="form-group">
          <label htmlFor="message">
            Your message
            <textarea
              type="text"
              id="message"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </label>
        </div>
        <button className='submit' type="submit" onClick={submit}>Send</button>
      </FormStyle>
    </>
  );
}
