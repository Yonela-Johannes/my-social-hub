import React, { useEffect, useState } from "react";
// import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { MdCall, MdEmail, MdFacebook, MdClose } from "react-icons/md";
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { contactModal } from "../../app/features/auth/authSlice";

function Contact() {
  const dispatch = useDispatch();
  const contacts = [
    {title: "Email", reach: "mailto:johannesyonela@gmail.com", icon: <MdEmail size={35} />},
    {title: "Call", reach: "tell:0748835699", icon: <MdCall size={35} />},
    {title: "Facebook", reach: "https://www.facebook.com/nomi.com.za", icon: <MdFacebook size={35} />},
  ]

  const [data, setData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    number: "",
    comment: "",
    company: "",
  });

  const submitForm = () => {
      dispatch(createContact(data))
  }

  return (
    <div className="absolute flex flex-col h-full items-center justify-center w-full backdrop-blur-[67px] z-40 top-0 bottom-0 left-0 right-0">
      <div className="flex flex-col items-center relative bg-bg_alt rounded-md pt-10 w-full p-5 lg:w-[80%] overflow-y-scroll sm:overflow-hidden mb-10">
      <div
          onClick={() => dispatch(contactModal())}
          className="absolute top-4 right-4 cursor-pointer"
        >
          <MdClose size={20} />
        </div>
          <h2 className="text-[22px] sm:text-4xl md:mb-5 mb-2 text-title md:text-center font-bold">
          Reach Out to Us
          </h2>
          <p className='text-base md:text-lg md:text-center mb-5 text-lighter'>Find Our Contact Details and Convenient Location.<br />We always ready to help by providing the best service for you</p>
          <div className="flex flex-col items-center justify-center gap-8  mb-10">
            <div className="w-full">
              <div className="flex gap-4 items-center justify-center h-full ">
                {contacts?.map((contact) => (
                  <a href={contact.reach} key={contact?.title} target="_blank" className="flex text-center items-center rounded-md w-[150px-bg_alt cu:bg-bg_ligh">
                {contact.icon}
                    <div className="">
                      <p className="">{contact?.title}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
        </div>
        <div className="flex flex-col md:flex-row gap-10 w-full items-center justify-center">
          <div className="bg-bg_cl px-6 w-full py-10 lg:px-8">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                <div>
                  <div className="mt-2.5">
                    <input
                      onChange={(e) => setData({...data, first_name: e.target.value})}
                      placeholder="First Name"
                      type="text"
                      autoComplete="given-name"
                      className="block w-full rounded-md border-0 px-3.5 py-2 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div>
                  <div className="mt-2.5">
                    <input
                      onChange={(e) => setData({...data, last_name: e.target.value})}
                      placeholder="Last Name"
                      type="text"
                      autoComplete="family-name"
                      className="block w-full rounded-md border-0 px-3.5 py-2 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <div className="mt-2.5">
                    <input
                      onChange={(e) => setData({...data, company: e.target.value})}
                      placeholder="Company"
                      type="text"
                      autoComplete="organization"
                      className="block w-full rounded-md border-0 px-3.5 py-2 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <div className="mt-2.5">
                    <input
                      onChange={(e) => setData({...data, email: e.target.value})}
                      placeholder="Email"
                      type="email"
                      autoComplete="email"
                      className="block w-full rounded-md border-0 px-3.5 py-2 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <div className="relative mt-2.5">
                    <input
                      onChange={(e) => setData({...data, number: e.target.value})}
                      placeholder="Phone number"
                      type="tel"
                      autoComplete="tel"
                      className="block w-full rounded-md border-0 px-3.5 py-2 pl-20 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <div className="mt-2.5">
                    <textarea
                      placeholder="How can we help?"
                      onChange={(e) => setData({...data, comment: e.target.value})}
                      rows={4}
                      className="block w-full rounded-md border-0 px-3.5 py-2 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6"
                      defaultValue={''}
                    />
                  </div>
                </div>
              </div>
              <div className="mt-10">
                <button
                  onClick={submitForm}
                  className="bg-bg_cl w-full rounded-md border border-bg_light"
                >
                  Let's talk
                </button>
              </div>
          </div>
            <div className="flex items-center justify-center bg-bg_cl px-6 w-full py-10 lg:px-8">
            <iframe className="rounded-sm w-[325px] h-[400px] md:w-[500px] md:h-[500px]" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6617.475832204614!2d18.668472393579112!3d-33.97357519999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcc4e5aba584ca1%3A0x47d1aac5f24863c!2sBardale%20Village%20Phase%202!5e0!3m2!1sen!2sza!4v1688391600771!5m2!1sen!2sza" width="500" height="500" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade">
              </iframe>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
