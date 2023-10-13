import React, { useEffect, useState } from "react";
// import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { MdCall, MdEmail, MdFacebook, MdClose } from "react-icons/md";
import toast, { Toaster } from 'react-hot-toast';
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { contactModal } from "../../app/features/auth/authSlice";
import { AiFillLinkedin, AiOutlineLinkedin } from "react-icons/ai";
import { createContact } from "../../app/features/contact/contactService";
import { FallingLines, Watch } from  'react-loader-spinner'

function Contact() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false)
  const contacts = [
    {title: "Email", reach: "mailto:johannesyonela@gmail.com", icon: <MdEmail size={25} />},
    {title: "Call", reach: "tell:0748835699", icon: <MdCall size={25} />},
    {title: "Facebook", reach: "https://www.facebook.com/nomi.com.za", icon: <MdFacebook size={25} />},
    {title: "LinkedIn", reach: "https://www.facebook.com/nomi.com.za", icon: <AiFillLinkedin size={25} />},
  ]

  const [data, setData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    subject: "",
    comment: "",
  });

  const submitForm = async () => {
    setLoading(true)
    const { first_name, last_name, email, subject, comment } = data
    if(first_name === '' || last_name === '', email === '' || subject === '' || comment === ''){
      setLoading(false)
      toast('Enter all required fields!')
    }else{
      const response  = await createContact(data)
      if(response.message === 'Message sent'){
        setLoading(false)
        toast('Email sent successful')
        setData({})
      }else{
        setLoading(false)
        toast('Email sent failed, check your details')
      }
    }
  }

  return (
    <div className="absolute flex flex-col h-full items-center justify-center w-full backdrop-blur-[67px] z-40 top-0 bottom-0 left-0 right-0">
      <Toaster />
      {loading ? (
        <FallingLines
          color="#5A2E98"
          width="100"
          visible={true}
          ariaLabel='falling-lines-loading'
        />
        ): (
        <div className="flex flex-col items-center relative bg-bg_alt rounded-md pt-10 w-full p-5 lg:w-[700px] overflow-y-scroll sm:overflow-hidden mb-10">
        <div
            onClick={() => dispatch(contactModal())}
            className="absolute top-4 right-4 cursor-pointer"
          >
            <MdClose size={20} />
          </div>
            <h2 className="text-[22px] sm:text-4xl md:mb-5 mb-2 text-title md:text-center font-bold">
            Reach Out to Me
            </h2>
            <p className='text-base md:text-lg md:text-center mb-5 text-lighter'>Find My Contact Details.<br />I'm always ready to help by providing the best service for you</p>
            <div className="flex flex-col items-center justify-center gap-8  mb-10">
              <div className="w-full">
                <div className="flex gap-4 items-center justify-center h-full ">
                  {contacts?.map((contact) => (
                    <a href={contact.reach} key={contact?.title} target="_blank" className="flex text-center items-center text-lighter rounded-md w-[150px-bg_alt cu:bg-bg_ligh">
                  {contact.icon}
                      <div className="">
                        <p className="">{contact?.title}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
          </div>
          <div className="flex flex-col w-full md:flex-row gap-10 items-center justify-center mb-10">
            <div className="bg-bg_cl rounded-md px-6 w-full py-10 lg:px-8">
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
                        onChange={(e) => setData({...data, email: e.target.value})}
                        placeholder="Email"
                        type="email"
                        autoComplete="email"
                        className="block w-full rounded-md border-0 px-3.5 py-2 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <div className="mt-2.5">
                      <input
                        onChange={(e) => setData({...data, subject: e.target.value})}
                        placeholder="Subject"
                        type="text"
                        className="block w-full rounded-md border-0 px-3.5 py-2 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <div className="mt-2.5">
                      <textarea
                        placeholder="How can I help?"
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
          </div>
        </div>
        )}
    </div>
  );
}

export default Contact;
