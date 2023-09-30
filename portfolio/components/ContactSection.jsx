import React from 'react';
import styled from 'styled-components';
import { MdEmail } from 'react-icons/md';
import ContactForm from './ContactForm';
import ContactInfoItem from './ContactInfoItem';

const ContactSectionStyle = styled.div`
    padding: 150px 0;   
  .contactSection__wrapper {
    display: flex;
    gap: 5rem;
    margin-top: 7rem;
    justify-content: space-between;
    position: relative;
  }
  .left {
    width: 100%;
    max-width: 600px;
  }
  .right {
    max-width: 600px;
    width: 100%;
    border-radius: 12px;
  }
  @media only screen and (max-width: 768px) {
    .contactSection__wrapper {
      flex-direction: column;
    }
    .contactSection__wrapper::after {
      display: none;
    }
    .left,
    .right {
      max-width: 100%;
    }
    .right {
      max-width: 100%;
    }
  }
`;

export default function ContactSection() {
  return (
    <ContactSectionStyle id="contact">
      <div className="container">
        <h1 className='title'>Get in touch</h1>
        <div className="contactSection__wrapper">
          <div className="left">
            <ContactInfoItem icon={<MdEmail />} text="johannesyonela@gmail.com" />
            <ContactInfoItem text="Cape Town" />
          </div>
          <div className="right">
            <ContactForm />
          </div>
        </div>
      </div>
    </ContactSectionStyle>
  );
}
