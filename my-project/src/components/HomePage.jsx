import React from 'react'
import * as FaIcons from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import './HomePage.css'


function HomePage() {
  return (
    <div className='w-full h-fit bg-[#000000] relative'>
        <div className='absolute fixed bottom-4 right-4'>
            <a href='#home'><FaIcons.FaArrowUp className='w-10 h-10 rounded-full bg-[#313131] p-3 text-[white]'/></a>
        </div>
      <nav id='nav' className='w-full h-30 md:h-40 z-100 sticky top-0 bg-[#000000] flex flex-wrap justify-between px-20 py-[1rem] items-center'>
        <div className='flex gap-4 items-center justify-center'>
            <FaIcons.FaUtensils className='text-[3rem] text-[#2c2c2c]'/>
            <h1 className='font-extrabold text-4xl text-[white]'>
                Restraunt
            </h1>
        </div>
        <div className='flex lg:gap-20 lg:flex-row items-center flex-col gap-4'>
        <div className='lg:flex md:flex hidden'>
            <ul className='flex gap-6 font-bold text-[1.1rem]'>
                <li className='text-[#525252] font-bold hover:text-[#c2c2c2] cursor-pointer focus:text-[white] transition-all duration-700 ease-linear'>
                    <a href='#home'>Home</a>
                </li>
                <li className='text-[#525252] font-bold hover:text-[#c2c2c2] cursor-pointer focus:text-[white] transition-all duration-700 ease-linear'>
                    <a href='#about'>About Us</a>
                </li>
                <li className='text-[#525252] font-bold hover:text-[#c2c2c2] cursor-pointer focus:text-[white] transition-all duration-700 ease-linear'>
                    <a href='#menu'>Menu</a>
                </li>
                <li className='text-[#525252] font-bold hover:text-[#c2c2c2] cursor-pointer focus:text-[white] transition-all duration-700 ease-linear'>
                    <a href='#contact'>Contact Us</a>
                </li>
            </ul>
        </div>
        <div className='flex lg:flex-col gap-4 lg:flex md:flex hidden flex-row'>
            <p className='text-[white] flex gap-2 lg:hidden justify-center items-center py-4 px-6 rounded-2xl bg-[#232323]'>
                <FaIcons.FaPhoneAlt/>
                5555-1234-4321
            </p>
            <button className='text-[white] py-3 font-extrabold cursor-pointer px-4 rounded-2xl bg-[#6a00ff]'>
                Book A Table
            </button>
        </div></div>
      </nav>
      <main>
        <section id='home' className='relative flex lg:flex-row lg:gap-0 gap-10 flex-col'>
            <div className='flex flex-col w-full justify-center items-center z-10 mt-[4rem]'>
                <p className='text-[#acacac] cansium-text text-[3rem] font-bold m-0'>
                    Welcome To
                </p>
                <p className='text-[white] caveat-text text-[8rem]'>
                    Table
                </p>
                <p className='text-[white] caveat-text text-[8rem]'>
                    Cafe
                </p>
            </div>
            <img 
            src="resto.jpg" 
            alt="Resto" 
            className='absolute inset-0 w-full h-200 z-0 object-cover'
            /> 
            <div className='z-20 flex flex-col items-center justify-end'>
                <p className='lg:px-30 px-10 lg:text-left text-center text-[1.2rem] text-[#cacaca]'>
                    Savor moments of bliss with every sip, as our expertly crafted coffees and delectable pastries embrace your senses.
                </p>
                <div className='flex w-full gap-4 justify-center items-center mt-[1.5rem]'>
                    <FaIcons.FaInstagram className='w-8 h-8 text-[white] hover:text-[#bf28e0] cursor-pointer transition-all duration-300 ease-linear'/>
                    <FaIcons.FaTelegram className='w-8 h-8 text-[white] hover:text-[#2399e7] cursor-pointer transition-all duration-300 ease-linear'/>
                    <FaIcons.FaWhatsapp className='w-8 h-8 text-[white] hover:text-[#2be71e] cursor-pointer transition-all duration-300 ease-linear'/>
                    <FaIcons.FaMapMarkerAlt className='w-8 h-8 text-[white] hover:text-[#e02828] cursor-pointer transition-all duration-300 ease-linear'/>
                </div>
            </div>                     
        </section>
        <section id='about' className='mt-[20rem]'>
            <div>
                <h1 className='lg:text-[3.5rem] mt-[8rem] text-[white] text-center font-extrabold'>
                    About
                </h1>
                <p className='lg:px-40 px-10 text-[gray] text-[1.1rem] font-bold text-center'>
                    Our achievement story stands as a powerful testament to teamwork and perseverance. United, we have faced challenges, celebrated victories, and woven a narrative of growth and success.
                </p>
                <div className='flex flex-col mt-[2rem]'>
                    <img src='resto2.jpg' className='w-[80%] self-center'/>
                    <div className='flex gap-10 w-fit flex-wrap lg:m-0 m-10 h-fit py-8 px-10 items-center justify-center rounded-2xl bg-[#0e0e0e] self-center lg:-mt-20 mt-[1rem]'>
                        <div className='flex flex-col justify-center items-center'>
                            <img src='experience.png' alt='' className='rounded-2xl'/>
                            <p className='text-[#6516dc] font-extrabold text-[2rem]'>
                                7+
                            </p>
                            <p className='text-[#aeaeae] font-bold text-[1.1rem]'>
                                Years Of Experience
                            </p>
                        </div>
                        <div className='flex flex-col justify-center items-center'>
                            <img 
                            src='menu.png' 
                            alt=''
                            className='rounded-2xl'/>
                            <p className='text-[#6516dc] font-extrabold text-[2rem]'>
                                30+
                            </p>
                            <p className='text-[#aeaeae] font-bold text-[1.1rem]'>
                                Dishes in Our Menu
                            </p>
                        </div>
                        <div className='flex flex-col justify-center items-center'>
                            <img 
                            src='reviews.png' 
                            alt=''
                            className='rounded-2xl'/>
                            <p className='text-[#6516dc] font-extrabold text-[2rem]'>
                                500+
                            </p>
                            <p className='text-[#aeaeae] font-bold text-[1.1rem]'>
                                Customer Reviews
                            </p>
                        </div>
                        <div className='flex flex-col justify-center items-center'>
                            <img 
                            src='happy.png' 
                            alt=''
                            className='rounded-2xl'/>
                            <p className='text-[#6516dc] font-extrabold text-[2rem]'>
                                10k+
                            </p>
                            <p className='text-[#aeaeae] font-bold text-[1.1rem]'>
                                Happy Customers
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section> 
        <section id='menu'>
            <h1 className='lg:text-[3.5rem] mt-[8rem] text-[white] text-center font-extrabold'>Menu</h1>
            <div className='flex lg:flex-row flex-row lg:px-36 md:px-25 px-10 justify-center items-center lg:gap-8 md:gap-6 gap-4 mt-[2rem]'>
                <div className='flex flex-col lg:gap-8 md:gap-6 gap-4'>
                    <div className='relative rounded-[30px] overflow-hidden cursor-pointer group'>
                        <img src="menu1.jpg" alt="" className='rounded-[30px]'/>
                        <div className='absolute inset-0 bg-[#2e2e2ed4] flex flex-col justify-center items-center text-2xl text-white opacity-0 group-hover:opacity-100 transition-all duration-500 ease-linear'><p>Caesar Salad</p>$.40<p></p></div>
                    </div>
                    <div className='relative rounded-[30px] overflow-hidden cursor-pointer group'>
                        <img src="menu4.jpg" alt="" className='rounded-[30px]'/>
                        <div className='absolute inset-0 bg-[#2e2e2ed4] flex flex-col justify-center items-center text-2xl text-white opacity-0 group-hover:opacity-100 transition-all duration-500 ease-linear'><p>Sauteed mushrooms with pumpkin and sweet pepper</p>$.60<p></p></div>
                    </div>
                </div>
                <div className='flex flex-col lg:gap-8 md:gap-6 gap-4'>
                    <div className='relative rounded-[30px] overflow-hidden cursor-pointer group'>
                        <img src="menu2.jpg" alt="" className='rounded-[30px]'/>
                        <div className='absolute inset-0 bg-[#2e2e2ed4] flex flex-col justify-center items-center text-2xl text-white opacity-0 group-hover:opacity-100 transition-all duration-500 ease-linear'><p>Christmas salad</p>$.35<p></p></div>
                    </div>
                    <div className='relative rounded-[30px] overflow-hidden cursor-pointer group'>
                        <img src="menu3.jpg" alt="" className='rounded-[30px]'/>
                        <div className='absolute inset-0 bg-[#2e2e2ed4] flex flex-col justify-center items-center text-2xl text-white opacity-0 group-hover:opacity-100 transition-all duration-500 ease-linear'><p>Chicken Feast Pizza</p>$.20<p></p></div>
                        
                    </div>
                </div>
            </div>
        </section>
        <section id='contact'>
            <h1 className='lg:text-[3.5rem] mt-[8rem] text-[white] text-center font-extrabold'>Contact Us</h1>
            <div className='grid gap-6 lg:grid-cols-2 grid-cols-1 mt-[5rem] lg:px-10 md:px-10 px-4'>
            <div className='flex flex-col w-full gap-4 justify-center items-center text-[white]'>
                <div className='flex gap-4 lg:w-[80%] md:w-[80%] w-full h-fit p-4 bg-[#0e0e0e] rounded-[20px] items-center'>
                    <FaIcons.FaMapMarkerAlt className='w-10 h-10 p-2 rounded-full bg-[#220f4d] text-[#5100ff]'/>
                    <div>
                        <strong>
                            Address:
                        </strong>
                        <p>
                            12, Posh Street, New Delhi
                        </p>
                    </div>
                </div>
                <div className='flex gap-4 lg:w-[80%] md:w-[80%] w-full h-fit p-4 bg-[#0e0e0e] rounded-[20px] items-center'>
                    <FaIcons.FaPhoneAlt className='w-10 h-10 p-2 rounded-full bg-[#220f4d] text-[#5100ff]'/>
                    <div>
                        <strong>
                            Call Us:
                        </strong>
                        <p>
                            +2222-3413
                        </p>
                    </div>
                </div>
                <div className='flex gap-4 lg:w-[80%] md:w-[80%] w-full h-fit p-4 bg-[#0e0e0e] rounded-[20px] items-center'>
                    <FaIcons.FaEnvelope className='w-10 h-10 p-2 rounded-full bg-[#220f4d] text-[#5100ff]'/>
                    <div>
                        <strong>
                            Email Us:
                        </strong>
                        <p>
                            abs122@gmail.com
                        </p>
                    </div>
                </div>
                <div className='flex gap-4 lg:w-[80%] md:w-[80%] w-full h-fit p-4 bg-[#0e0e0e] rounded-[20px] items-center'>
                    <FaIcons.FaClock className='w-10 h-10 p-2 rounded-full bg-[#220f4d] text-[#5100ff]'/>
                    <div>
                        <strong>
                            Opening Hours:
                        </strong>
                        <p>
                            Mon-Sat: 11AM - 23PM; Sunday: Closed
                        </p>
                    </div>
                </div>
            </div>
            <div className='w-full h-full bg-[#0e0e0e] rounded-[40px] overflow-hidden lg:px-12 md:px-12 px-4'>
                <div className='flex lg:flex-row md:flex-row flex-col gap-5 mt-[4rem] justify-center items-center'>
                    <input type='text' name='Name' placeholder='Name' className='w-full h-10 bg-[#1a1a1a] rounded-[10px] text-[white] font-bold pl-4'/>
                    <input type='email' name='Email' placeholder='Email' className='w-full h-10 bg-[#1a1a1a] rounded-[10px] text-[white] font-bold pl-4'/>
                </div>
                <input type='text' name='text' placeholder='Subject' className='w-full h-10 bg-[#1a1a1a] rounded-[10px] text-[white] font-bold pl-4 mt-[2rem]'/>
                <textarea  placeholder='Message' className='w-full h-15 max-h-30 bg-[#1a1a1a] rounded-[10px] text-[white] font-bold pl-4 pt-2 mt-[2rem]'/>
                <button className='flex items-center justify-center text-[white] font-bold gap-2 mx-auto w-fit h-fit py-2 px-4 hover:opacity-80 rounded-[10px] cursor-pointer my-4 bg-[#5f06ed]'>
                    Send
                    <FaIcons.FaPaperPlane/>
                </button>
            </div>
            </div>
        </section>
      </main>
      <footer className='w-screen h-fit border-t border-[#242424] bg-[#000000] py-10 mt-[5rem]'>
        <div className='flex flex-wrap justify-around gap-6 items-center px-10'>
            <div className='flex flex-col'>
                <div className='flex items-center gap-2'>
                    <FaIcons.FaMapMarkerAlt className='text-[#2f06d3] text-[1.3rem]'/>
                    <p className='text-[1.3rem] text-[#4108de]'>
                        Address
                    </p>
                </div>
                <div className='text-[1.2rem] text-[#d4d4d4]'>
                    <p>
                        23, Posh Street,
                    </p>
                    <p>
                        New Delhi
                    </p>
                </div>
            </div>
            <div>
                <div className='flex items-center gap-2'>
                    <FaIcons.FaPhoneAlt className='text-[#2f06d3] text-[1.3rem]'/>
                    <p className='text-[1.3rem] text-[#4108de]'>
                        Contact
                    </p>
                </div>
                <div className='text-[1.2rem] text-[#d4d4d4]'>
                    <p className='flex gap-2'>
                        <strong>
                            Phone:
                        </strong>
                        +12123-32132
                    </p>
                    <p className='flex gap-2'>
                        <strong>
                            Email:
                        </strong>
                        abs12@gamil.com
                    </p>
                </div>
            </div>
            <div>
                <div className='flex items-center gap-2'>
                    <FaIcons.FaClock className='text-[#2f06d3] text-[1.3rem]'/>
                    <p className='text-[1.3rem] text-[#4108de]'>
                        Opening Hours
                    </p>
                </div>
                <div className='text-[1.2rem] text-[#d4d4d4]'>
                    <p className='flex gap-2'>
                        <strong>
                            Mon-Sat: 
                        </strong>
                        11AM - 22PM 
                    </p>
                    <p className='flex gap-2'>
                        <strong>
                            Sun:
                        </strong>
                        Closed
                    </p>
                </div>
            </div>
            <div className='flex flex-col'>
                <h2 className='text-[white] text-[2rem]'>
                    Table Cafe
                </h2>
                <div className='flex mt-[0.6rem] justify-around'>
                    <FaXTwitter className='text-[1.5rem] text-[gray] hover:text-[white] cursor-pointer'/>
                    <FaIcons.FaInstagram className='text-[1.5rem] text-[gray] hover:text-[white] cursor-pointer'/>
                    <FaIcons.FaTelegram className='text-[1.5rem] text-[gray] hover:text-[white] cursor-pointer'/>
                    <FaIcons.FaWhatsapp className='text-[1.5rem] text-[gray] hover:text-[white] cursor-pointer'/>
                </div>
            </div>
        </div>
        <hr className='text-[#484848] w-[95%] mx-auto mt-[2rem]'/>
        <div className='flex flex-col justify-center items-center text-[white] text-[1.2rem] mt-[1rem]'>
            <p>
                @All Copyright Reserved
            </p>
            <p>
                2014 - 2026
            </p>
        </div>
      </footer>
    </div>
  )
}

export default HomePage
