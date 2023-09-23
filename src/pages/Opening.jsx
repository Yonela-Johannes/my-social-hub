import { useState } from 'react';
import { formatISO } from 'date-fns';
import { Switch } from '@headlessui/react'
import TimeSelector from '../components/TimeSelector';
import { Button } from '@chakra-ui/react';
import Calendar from 'react-calendar';
import ReactCalendar from "react-calendar";
import toast, { Toaster } from 'react-hot-toast';
import { useSelector } from 'react-redux';
import { classNames, weekday } from '../helpers/helpers';

// Define your Opening component
function Opening() {
  // const { days, closeDays } = useSelector((state) => state.book_session);
  const closeDays = []
  const days = [
    {dayOfWeek: 0, name: 'sunday', openTime: '09:00', closeTime: '16:00'},
    {dayOfWeek: 1, name: 'monday', openTime: '09:00', closeTime: '16:00'},
    {dayOfWeek: 2, name: 'tuesday', openTime: '09:00', closeTime: '16:00'},
    {dayOfWeek: 3, name: 'wednesday', openTime: '09:00', closeTime: '16:00'},
    {dayOfWeek: 4, name: 'thursday', openTime: '09:00', closeTime: '16:00'},
    {dayOfWeek: 5, name: 'friday', openTime: '09:30', closeTime: '15:00'},
    {dayOfWeek: 6, name: 'saturday', openTime: '09:00', closeTime: '13:00'},

  ]
  const [enabled, setEnabled] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [openingHrs, setOpeningHrs] = useState([
    { name: 'sunday', openTime: days[0]?.openTime, closeTime: days[0]?.closeTime },
    { name: 'monday', openTime: days[1]?.openTime, closeTime: days[1]?.closeTime },
    { name: 'tuesday', openTime: days[2]?.openTime, closeTime: days[2]?.closeTime },
    { name: 'wednesday', openTime: days[3]?.openTime, closeTime: days[3]?.closeTime },
    { name: 'thursday', openTime: days[4]?.openTime, closeTime: days[4]?.closeTime },
    { name: 'friday', openTime: days[5]?.openTime, closeTime: days[5]?.closeTime },
    { name: 'saturday', openTime: days[6]?.openTime, closeTime: days[6]?.closeTime },
  ])

  const dayIsClosed = selectedDate && closeDays?.includes(formatISO(selectedDate));

  // Function to change the time for a specific day
  function changeTime(day, time, type = 'openTime' | 'closeTime') {
    console.log(day)
      const index = openingHrs.findIndex((x) => x.name === weekday(day.dayOfWeek))
      console.log(index)
      const newOpeningHrs = [...openingHrs]
      // console.log(newOpeningHrs)
      // newOpeningHrs[index][type] = time
      // setOpeningHrs(newOpeningHrs)
  }

  const now = new Date();
  const capitalize = (day) => {
    if(day){
      return day[0].toUpperCase() + day.slice(1)
    }else{
      return ''
    }
  }

  return (
    <div className='mx-auto max-w-xl'>
      <Toaster />
      <div className='mt-6 flex justify-center gap-6'>
        <p className={!enabled ? 'font-medium text-teal-900' : ''}>Opening times</p>
        <Switch
          checked={enabled}
          onChange={setEnabled}
          className={classNames(
            enabled ? 'bg-indigo-600' : 'bg-gray-200', 'relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2'
          )}
        >
          <span className='sr-only'>Use setting</span>
          <span
            aria-hidden='true'
            // Add your span styling here
          />
        </Switch>
        <p className={enabled ? 'font-medium text-teal-900' : ' '}>Opening days</p>
      </div>

      {!enabled ? (
        // Opening times options
        <div className='my-12 flex flex-col gap-8'>
          {days.map((day) => (
            <div className='grid grid-cols-3 place-items-center' key={day.dayOfWeek}>
              <h3 className='font-semibold'>{capitalize(day.name)}</h3>
              <div className='mx-4'>
                <TimeSelector
                  type='openTime'
                  changeTime={changeTime}
                  selected={
                    openingHrs[openingHrs?.findIndex((x) => x.name === weekday(day.dayOfWeek))]?.openTime
                  }
                />
              </div>
              <div className='mx-4'>
              <TimeSelector
                  type='closeTime'
                  changeTime={changeTime}
                  selected={
                    openingHrs[openingHrs?.findIndex((x) => x.name === weekday(day.dayOfWeek))]?.closeTime
                  }
                />
              </div>
            </div>
          ))}
          <Button
            onClick={() => {
              const withId = openingHrs?.map((day) => ({
                ...day,
                id: days[days?.findIndex((d) => d.name === day.name)]?.id,
              }))
                // Send to database
              // saveOpenHrs(withId)
              // isLoading={isLoading}
              colorScheme='green'
            }}
          >
            Save
          </Button>
        </div>
      ) : (
        // Opening days options
        <div className='mt-6 flex flex-col items-center gap-6'>
          <ReactCalendar
            minDate={now}
            className='REACT-CALENDAR p-2'
            view='month'
            onClickDay={(date) => setSelectedDate(date)}
            tileClassName={({activeStartDate, date , view}) => {
              return closeDays?.includes(formatISO(date)) ? 'closed-day' : null;
            }}
          />
          <Button
            onClick={() => {
              if (dayIsClosed) openDay({date: selectedDate})
              else if (selectedDate) closeDays({date: selectedDate})
            }}
            disabled={!selectedDate}
            // isLoading={isLoading}
            colorScheme='green'
            variant='solid'
          >
            {dayIsClosed ? 'Open Nomi this day' : 'Close Nomi this day'}
          </Button>
        </div>
      )}
    </div>
  );
}

export default Opening;
