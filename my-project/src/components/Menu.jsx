import React from 'react'
import MenuCard from './MenuCard'
import { useState } from 'react'
import EmptyMenu from './EmptyMenu'

function Menu() {
    
        
       
        const menu = {
            starters: [
            {
                id: 1,
                image: 'starter1.jpg',
                name: "Samosa",
                desc: "Crispy, propely filled, three cones",
                price: "60",
            },
            {
                id: 2,
                image: 'starter2.jpg',
                name: "Paneer Tikka",
                desc: "Soft paneer, properly fried, crispy",
                price: "140",
            },
            {
                id: 3,
                image: 'starter3.jpg',
                name: "Chilli Paneer",
                desc: "4 vegetables, soft paneer, crispy",
                price: "185",
            },
            {
                id: 4,
                image: 'starter4.jpg',
                name: "Manchurian",
                desc: "4 balls, 4 vegetables, crispy, spicy",
                price: "230",
            },
            {
                id: 5,
                image: 'starter5.jpg',
                name: "Dahi Vada",
                desc: "4 balls, masalas, pomegranate, dry fruits",
                price: "170",
            },
            {
                id: 6,
                image: 'starter6.jpg',
                name: "Aloo Tikki",
                desc: "2 tikkas, proper masala, chutneys",
                price: "120",
            },
            ],
            breakfast : [
            {
                id: 1,
                image: 'breakfast1.jpg',
                name: "Idli",
                desc: "Soft, 4 peices, sambhar, chutney",
                price: "160",
            },
            {
                id: 2,
                image: 'breakfast2.jpg',
                name: "Dosa",
                desc: "Crispy, properly filled, 2 chutneys, sambhar",
                price: "90",
            },
            {
                id: 3,
                image: 'breakfast3.jpg',
                name: "Chole Bhature",
                desc: "2 bhature, proper dahi, salad, crispy",
                price: "110",
            },
            {
                id: 4,
                image: 'breakfast4.jpg',
                name: "Poha",
                desc: "Nuts, fried, plain, peas",
                price: "80",
            },
            {
                id: 5,
                image: 'breakfast5.jpg',
                name: "Maggi",
                desc: "4 vegetables, dry/wet, peas, proper masala",
                price: "60",
            },
            {
                id: 6,
                image: 'breakfast6.jpg',
                name: "Dhokla",
                desc: "Soft, chutney, fried, 5 pieces",
                price: "210",
            },
            ],
            lunch : [
            {
                id: 1,
                image: 'lunch1.jpg',
                name: "Magnam Tiste",
                desc: "Lorem, deren, trataro, filede, nerada",
                price: "20",
            },
            {
                id: 2,
                image: 'lunch2.jpg',
                name: "Magnam Tiste",
                desc: "Lorem, deren, trataro, filede, nerada",
                price: "20",
            },
            {
                id: 3,
                image: 'lunch3.jpg',
                name: "Magnam Tiste",
                desc: "Lorem, deren, trataro, filede, nerada",
                price: "20",
            },
            {
                id: 4,
                image: 'lunch4.jpg',
                name: "Magnam Tiste",
                desc: "Lorem, deren, trataro, filede, nerada",
                price: "20",
            },
            {
                id: 5,
                image: 'lunch5.jpg',
                name: "Magnam Tiste",
                desc: "Lorem, deren, trataro, filede, nerada",
                price: "20",
            },
            {
                id: 6,
                image: 'lunch6.jpg',
                name: "Magnam Tiste",
                desc: "Lorem, deren, trataro, filede, nerada",
                price: "20",
            },
            ],
            dinner: [
            // {
            //     id: 1,
            //     image: 'lunch6.jpg',
            //     name: "Magnam Tiste",
            //     desc: "Lorem, deren, trataro, filede, nerada",
            //     price: "20",
            // },
            // {
            //     id: 2,
            //     image: 'lunch6.jpg',
            //     name: "Magnam Tiste",
            //     desc: "Lorem, deren, trataro, filede, nerada",
            //     price: "20",
            // },
            // {
            //     id: 3,
            //     image: 'lunch6.jpg',
            //     name: "Magnam Tiste",
            //     desc: "Lorem, deren, trataro, filede, nerada",
            //     price: "20",
            // },
            // {
            //     id: 4,
            //     image: 'lunch6.jpg',
            //     name: "Magnam Tiste",
            //     desc: "Lorem, deren, trataro, filede, nerada",
            //     price: "20",
            // },
            // {
            //     id: 5,
            //     image: 'lunch6.jpg',
            //     name: "Magnam Tiste",
            //     desc: "Lorem, deren, trataro, filede, nerada",
            //     price: "20",
            // },
            // {
            //     id: 6,
            //     image: 'lunch6.jpg',
            //     name: "Magnam Tiste",
            //     desc: "Lorem, deren, trataro, filede, nerada",
            //     price: "20",
            // },
            ],
            categories: [
  { key: "starters", label: "Starters" },
  { key: "breakfast", label: "Breakfast" },
  { key: "lunch", label: "Lunch" },
  { key: "dinner", label: "Dinner" }
]

        }
    
        const [selectedMeal, setSelectedMeal] = useState('starters')
        const handleMealChange = (item) => {
            setSelectedMeal(item)
        }
        const itemsToShow = menu[selectedMeal.toLowerCase()];
        const activeCat = menu.categories.find(
            c => c.key === selectedMeal
        )

  return (
    <div>
      {/* <MenuCard menu={menu} selectedMeal={selectedMeal} activeMeal={activeMeal} handleMealChange={handleMealChange}/> */}
      <div className='text-white w-full h-fit mt-[5rem]'>
                  <div className='w-full flex justify-center items-center gap-6 text-[1.1rem] text-[#757575]'>
                  {menu.categories.map((item) => (
                      <button key={item.key} onClick={() => handleMealChange(item.key)}
                      className='hover:text-[white] transition-all duration-750 ease-linear cursor-pointer'
                      >{item.label}</button>
                  ))}</div>
                  <h1 className='text-center mt-[2rem] text-[#7423f5] text-[1.4rem] mx-auto border-b-2 w-fit border-[#383838]'>Menu</h1>
                  <p className='text-[2.2rem] text-[#fe2424] text-center mt-[1rem]'>{activeCat.label}</p>
                  {itemsToShow.length === 0 ? <EmptyMenu/> : 
                  <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:px-40 md:p-30 p-10 gap-20 mt-[2rem]'>
                      {itemsToShow.map((food) => (
                          <MenuCard key={food.id} image={food.image} name={food.name} desc={food.desc} price={food.price}/>
                      ))}
                  </div>}
              </div>
    </div>
  )
}

export default Menu
