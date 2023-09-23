import React, { useState, useEffect } from "react";
import { add, format, formatISO, isBefore, parse } from "date-fns";
import { useDispatch, useSelector } from "react-redux";
import {
  getCloseDays,
  getDays,
} from "../app/features/bookSession/bookSessionSlice";
import ReactCalendar from "react-calendar";
import { getOpeningTimes, roundToNearestMinutes } from "../helpers/helpers";

const Booking = () => {
  const { days, closeDays } = useSelector((state) => state.book_session);
  const [date, setDate] = useState({
    justDate: null,
    dateTime: null,
  });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDays());
    dispatch(getCloseDays());
  }, []);

  useEffect(() => {
    if (date.dateTime) {
      localStorage.setItem("SelectedTime", date.dateTime.toISOString());
      router.push("/blogs");
    }
  }, [date.dateTime]);

  const getTimes = () => {
    if (!date.justDate) return;
    const { justDate } = date;
    const beginning = add(justDate, { hours: 9 });
    const end = add(justDate, { hours: 16 });
    const interval = 30; // in minutes
    const times = [];
    for (let i = beginning; i <= end; i = add(i, { minutes: interval })) {
      // times.push(i)
    }

    return times;
  };
  const OPENING_HOURS_INTERVAL = 30;
  const now = new Date();
  const times = date.justDate && getOpeningTimes(date.justDate, days);

  // Determine if today is closed
  const today = days?.find((d) => d.dayOfWeek === now.getDay());
  const rounded = roundToNearestMinutes(now, OPENING_HOURS_INTERVAL);
  const closing = parse(today?.closeTime, "kk:mm", now);
  const tooLate = !isBefore(rounded, closing);
  // if(tooLate) closeDays?.push(formatISO(now.setHours(0, 0, 0, 0)))

  return (
    <div className="flex-col justify-center items-center">
      {date.justDate ? (
        <div className="flex gap-4">
          {times?.map((time, i) => (
            <div
              key={`time-${i}`}
              className="rounded-sm bg-gray-200 p-2 text-black"
            >
              <button
                onClick={() => setDate((prev) => ({ ...prev, dateTime: time }))}
              >
                {format(time, "kk:mm")}
              </button>
            </div>
          ))}
        </div>
      ) : (
        <ReactCalendar
          minDate={new Date()}
          className="REACT-CALENDAR p-2"
          view="month"
          tileDisabled={({ date }) => closeDays.includes(formatISO(date))}
          onClickDay={(date) =>
            setDate((prev) => ({ ...prev, justDate: date }))
          }
        />
      )}
    </div>
  );
};

export default Booking;
