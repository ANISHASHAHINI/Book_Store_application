import React from 'react'
import { Link } from 'react-router-dom';
import FavBookImg from '../assets/favoritebook.jpg'
const FavBook = () => {
  return (
    <div className=' px-4 lg:px-24 my-20 flex flex-col md:flex-row justify-between gap-11 items-center '>
        <div className=' md:w-1/2'>
            <img src={FavBookImg} alt="" className=' rounded md:w-10/12'/>
        </div>

        <div className=' md:w-1/2 space-y-6'>
            <h2 className=' text-5xl font-bold my-5 md:w-3/4 leading-snug'>Find Your Favourite 
            <span className=' text-blue-700'>Book Here!</span></h2>
            <p className=' mb-10 text-lg md:w-5/6'>Your Gateway to the World of Imagination! 
                Discover a treasure trove of knowledge, adventure, 
                and inspiration within the pages of our vast collection. 
                Whether you're a passionate reader, an avid bookworm, 
                or just looking for your next great read, 
                we've got something for everyone.</p>
            <div className=' flex flex-col sm:flex-row justify-between gap-6 md:w-3/4 my-14'>
                <div>
                    <h3 className=' text-3xl font-bold'>800+</h3>
                    <p className=' text-base'>Book Listing</p>
                </div>
                <div>
                    <h3 className=' text-3xl font-bold'>550+</h3>
                    <p className=' text-base'>Registered User</p>
                </div>
                <div>
                    <h3 className=' text-3xl font-bold'>10200+</h3>
                    <p className=' text-base'>PDF Downloaded</p>
                </div>
            </div>

            <Link to= "/shop" className=' mt-8 block'><button className=' bg-blue-700 text-white rounded
             font-semibold px-5 py-2 hover:bg-black transition-all duration-300'>Explore more</button></Link>
            
        </div>
    </div>
  )
}

export default FavBook