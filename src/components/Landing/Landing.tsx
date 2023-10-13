
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import landing from '../../assets/okuhlelanding.png';
import { createSession } from '../../app/features/bookSession/bookSessionSlice';
import { useDispatch } from 'react-redux';

const Landing = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const [data, setData] = useState({
    name: "",
    email: "",
    subject: "",
    description: "",
    time_slot: "",
  });

  const bookSession = () => {
    dispatch(createSession(data))
    setData("");
  };

  return (
    <div className="flex flex-col items-center justify-center sm:h-[70vh] min-h-[80vh] w-full bg-bg_alt text-white">
      <div className="sm:flex items-center justify-around  w-[90%] sm:w-[80%] gap-20 h-[100%]">
        <div className="flex flex-col pt-3 sm:pt-0 justify-center h-full flex-wrap">
          <p className='text-[25px] sm:text-[50px] text-green font-bold m-0 p-0 mb-3'>Where Imagination Meets Innovation!</p>
          <p className='text-[18] sm:text-[20px] text-white m-0 p-0 mb-3'>
            We Transform Your Ideas into Exquisite Websites and Applications</p>
          <div className="">
            <div className="items-center text-lighter flex-wrap">
              <div className="flex gap-2 items-center">
                <p className='rounded-md border border-bg_light py-1 px-2'>Web Development</p>
                <p className='rounded-md border border-bg_light py-1 px-2'>Web Design</p>
                <p className='rounded-md border border-bg_light py-1 px-2'>Full Stack Web Development</p>
              </div>
            </div>
            <p className='mt-6'>Want a Website for Your Business?</p>
            <div className="bg-bg_alt pt-10 pb-4">
              <div className="flex mb-3 w-full items-center justify-between">
                  <div>
                    <input
                      placeholder="Enter Name"
                      type="name"
                      onChange={(e) => setData({...data, name: e.target.value })}
                      autoComplete="name"
                      className="h-[42px] w-full rounded-md border-0 px-3.5 py-2 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6"
                    />
                  </div>
                <div>
                  <input
                    placeholder="Date"
                    name="time_slot"
                    type="date"
                    onChange={(e) => setData({...data, time_slot: e.target.value})}
                    className="h-[42px] w-full rounded-md border-0 px-3.5 py-2 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6"
                  />
                </div>
                  <div>
                    <input
                      placeholder="Email"
                      type="email"
                      name="email"
                      onChange={(e) => setData({...data, email: e.target.value })}
                      autoComplete="email"
                      className="h-[42px] w-full rounded-md border-0 px-3.5 py-2 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6"
                    />
                  </div>
                  <div>
                    <input
                      placeholder="Subject"
                      type="text"
                      name="subject"
                      onChange={(e) => setData({...data, subject: e.target.value })}
                      autoComplete="Subject"
                      className="h-[42px] w-full rounded-md border-0 px-3.5 py-2 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6"
                    />
                  </div>
              </div>
                <div className="sm:col-span-2">
                  <div>
                    <textarea
                      placeholder="Description"
                      name="description"
                      id="description"
                      rows={4}
                      onChange={(e) => setData({...data, description: e.target.value })}
                      className="block w-full rounded-md border-0 px-3.5 py-2 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6"
                      defaultValue={''}
                    />
                  </div>
                </div>
              </div>
            <button onClick={bookSession} className="rounded-md mt-4 mb-10 text-[18px] py-2 px-4  bg-bg_cl text-white hover:bg-green duration-300">Book A Meeting Now!</button>
          </div>
        </div>
        <div className="flex flex-col items-center justify-end h-full">
          <img className="md:object-cover w-[300] h-[300px] md:h-[680px] md:w-[600px]" src={landing} alt="landing" />
        </div>
      </div>

    </div>
  )
}

export default Landing
