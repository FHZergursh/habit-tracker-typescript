import React from 'react'
import Button from './components/Button'
import HabitForm from './components/HabitForm'

const App = () => {
  return (
    <div className='max-w-2xl mx-auto p-4 flex flex-col gap-4'>
      <Header />
      <HabitForm />
      



    </div>
  )
}

function Header() {
  return (
    <header className='flex items-center justify-between'>
      <div className='flex flex-col gap-1'>
        <h1 className='text-3xl font-bold'>Habit tracker</h1>
        <span className='text-zinc-400 text-sm'>1/1 done today</span>
      </div>
      <div className='flex flex-col gap-1'>
        <span className='text-zinc-400'>14 May - 21 May</span>
        <div className='flex items-center gap-3'>
          <Button text="prev" />
          <Button text="next" />
        </div>
      </div>


    </header>
  )
}

export default App