import React from 'react'

function MenuCard({ image, name, desc, price }) {
  return (
    <div>
      <div>
        <img src={image} className='w-60 m-auto h-60 rounded-full hover:scale-110 overflow-hidden transition-all duration-300 ease-linear cursor-pointer'/>
        <h6 className='mt-[1rem] text-[1.2rem] text-center'>{name}</h6>
        <p className='text-[0.9rem] text-[#5c5c5c] text-center'>{desc}</p>
        <p className='text-[1.1rem] text-[#12d612] text-center'>$.{price}</p>
        </div>
    </div>
  )
}

export default MenuCard
