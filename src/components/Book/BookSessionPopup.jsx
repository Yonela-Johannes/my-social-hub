import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MdCalendarMonth, MdClose } from "react-icons/md";
import { AiOutlineCloudUpload } from "react-icons/ai";
import axios from "axios";
import { createPost } from "../../app/features/post/postsSlice";

import { toggleBookSessionModal } from "../../app/features/auth/authSlice";
import Booking from "../../pages/Booking";
import { createSession } from "../../app/features/bookSession/bookSessionSlice";

const BookSessionPopup = () => {
  const [showCalendar, setShowCalendar] = useState(false);
  const { _id } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [inputData, setInputData] = useState({
    name: "",
    email: "",
    description: "",
  });

  const bookSession = () => {
    dispatch(createSession(data))
    // setData("");
  };

  return (
    <div className="absolute flex z-40 w-full h-full items-center backdrop-blur-[67px] justify-center">
      <div className="relative bg-bg_alt pt-10 pb-4 w-[500px] rounded-lg">
        <div
          onClick={() => dispatch(toggleBookSessionModal())}
          className="absolute top-4 right-4 cursor-pointer"
        >
          <MdClose size={20} />
        </div>
        <p className="text-center font-bold text-3xl pb-4">Book your meeting</p>
        <p className="text-center text-lighter text-md">
          Bring Your Ideas to Life - Write Your Next Post Today!
        </p>
        <div className="relative flex flex-col gap-4 mb-3 w-full p-10">
          <p className="font-bold text-lighter text-md">Full Name</p>
          <input
            placeholder="Enter full name"
            type="name"
            onChange={(e) => setInputData({ ...data, name: e.target.value })}
            autoComplete="name"
            className="h-[42px] w-full rounded-md border-0 px-3.5 py-2 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6"
          />
          <p className="font-bold text-lighter text-md">Email</p>
          <input
            placeholder="Enter email"
            type="email"
            onChange={(e) => setInputData({ ...data, email: e.target.value })}
            autoComplete="email"
            className="h-[42px] w-full rounded-md border-0 px-3.5 py-2 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6"
          />
          <p className="font-bold text-lighter text-md">Info</p>
          <textarea
            name="post"
            onChange={(e) =>
              setInputData({ ...inputData, post: e.target.value })
            }
            rows={2}
            placeholder="How can we help..."
            className="flex flex-1 h-8 text-base rounded-lg bg-bg_light p-4 w-full"
          />
          <div onClick={() => setShowCalendar(!showCalendar)}  className="flex gap-2 items-center cursor-pointer text-lighter border-b border-lighter pb-1 w-[183px] hover:bg-bg_cl rounded-t-md duration-300">
            <p className="font-bold text-lighter text-md">Schedule A Meeting</p>
            <MdCalendarMonth size={25} />
          </div>
          <button
            onClick={bookSession}
            className="rounded-md mt-4 text-[18px] py-4 px-4  bg-bg_cl text-white hover:bg-green duration-300"
          >
            Book
          </button>
        </div>
        {showCalendar && (
          <div className="absolute flex flex-col items-center top-0 left-0 h-full backdrop-blur-[15px] bg-bg_alt pt-10 pb-4 w-[500px] rounded-2xl">
            <p className="text-center font-bold text-3xl pt-4">Select date/time</p>
            <p className="text-center text-lighter text-md pt-4">
              Bring Your Ideas to Life - Write Your Next Post Today!
            </p>
            <div onClick={() => setShowCalendar(!showCalendar)} className="absolute top-4 right-4 cursor-pointer">
              <MdClose size={20} />
            </div>
            <div className="flex flex-col items-center justify-center w-full h-full">
              <p className="font-bold text-lighter text-start w-full px-10 text-md">CALENDAR</p>
              <Booking />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BookSessionPopup;
