import { add, addMinutes, getHours, getMinutes, isBefore, isEqual, parse } from "date-fns";

export const weekday = (index) => {
  const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
  return  days[index]
}

export function classNames(...classes){
  return classes?.join(' ')
}

// function to round to a given date up to the nearest half hour
export const roundToNearestMinutes = (date, interval) => {
  const minutesLeftUntilNextInterval = interval - (getMinutes(date) % interval)
  return addMinutes(date, minutesLeftUntilNextInterval)
}

/**
 * @param startDate Day we want the opening hours for, at midnight
 * @param dbDays Opening hours for the week
 * @returns Array of dates for every opening hour
*/

export const getOpeningTimes = (startDate, dbDays) => {
  const dayOfWeek = startDate.getDay()
  const isToday = isEqual(startDate, new Date('January 15, 2023, 12:00:00').setHours(0, 0, 0, 0))

  const today = dbDays?.find((d) => d.dayOfWeek === dayOfWeek)
  if(!today) throw new Error('This day does not exist in the database')

  const opening = parse(today.openTime, 'kk:mm', startDate)
  const closing = parse(today.closeTime, 'kk:mm', startDate)

  let hours;
  let minutes;
  if(isToday){
    // Round the current time to the nearest interval. If there is no more bookings, throw an error
    const rounded = roundToNearestMinutes(new Date(), 30)
    const tooLate = !isBefore(rounded, closing)
    if(tooLate) throw new Error('No more booking or today')
    console.log('rounded:', rounded)

    const isBeforeOpening = isBefore(rounded, opening)

    hours = getHours(isBeforeOpening ? opening : rounded)
    minutes = getMinutes(rounded)
  }

  const beginning = add(startDate, {hours, minutes})
  const end = add(startDate, { hours: getHours(closing)})
  const interval = 30

  // from beginning to end, every interval, generate a date and put that into an array
  const times = []
  for(let i = beginning; i <= end; i = add(i, {minutes: interval})){
    // times.push(i)
  }
  return times
}
