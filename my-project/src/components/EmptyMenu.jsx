import React from 'react'
import * as FaIcons from 'react-icons/fa'

function EmptyMenu() {
  return (
    <div className='flex flex-col justify-center items-center mt-[1rem]'>
      <FaIcons.FaBookOpen className='w-10 h-10 text-[#208609]'/>
      <p className='text-[#ffffff]'>No items in this category.</p>
      <p className='text-[gray] text-[0.9rem]'>Choose a different category to continue</p>
    </div>
  )
}

export default EmptyMenu
