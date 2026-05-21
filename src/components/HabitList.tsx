import React from 'react'
import Button from './Button'
import {eachDayOfInterval, endOfWeek, format, startOfWeek} from "date-fns"

const HabitList = () => {
  const habits = [
    {
      id: "a",
      name: "Dave"
    }
  ]

  if (habits.length === 0) {
    return <p className='text-center text-zinc-300 py-12'>
      No habits yet, add one to get started.
      

    </p>
  }

  return (
    <div className='flex flex-col gap-3'>
      {habits.map(habit => (
        <HabitItem key={habit.id} habit={habit}></HabitItem>
      ))}

      

    </div>
  )
}

type HabitItemProps = {
  habit: {id: string; name: string}
}

function HabitItem({habit} : HabitItemProps) {
  const visibleDates = eachDayOfInterval( {start: startOfWeek(new Date(), {weekStartsOn: 1}), end: endOfWeek(new Date(),{weekStartsOn: 1})})


  return <div className='rounded-xl bg-zinc-800 p-4 flex flex-col gap-3'>
    <div className='flex items-center justify-between'>
      <div className='flex gap-3 items-center'>
        <span className='font-medium'>{habit.name}</span>
        <span className='text-sm text-amber-400'>🔥3</span>
      </div>
      <Button>Delete</Button>
    </div>

    <div className='flex gap-1.5'>
      {visibleDates.map(date => (
        <Button key={date.toISOString()}>
          <span className='font-medium'>{format(date, "EEE")}</span>
        </Button>
      ))}
    </div>




  </div>
}

export default HabitList