import React from 'react'

type ButtonProps = {
  text: string 

}


const Button = (props : ButtonProps) => {
  return (
    <button className='bg-violet-600 hover:bg-violet-500 transition-colors rounded px-2 py-1 disabled:opacity-30 disabled:cursor-not-allowed'>
      {props.text}
    </button>
  )
}

export default Button