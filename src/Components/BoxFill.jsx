import React from 'react'

const BoxFill = ({props}) => {
  return (
    <div className='bg-red-400 text-white cursor-pointer w-10 h-10 border border-red-400 border-2 flex justify-center items-center text-xl text-red-600'>
        {props}
    </div>
  )
}

export default BoxFill