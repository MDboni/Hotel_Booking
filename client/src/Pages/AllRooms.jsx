import React, { useState } from 'react'
import Footerr from '../components/Footer'
import { assets, facilityIcons, roomsDummyData } from '../assets/assets'
import { useNavigate } from 'react-router-dom'
import StarRating from '../components/StarRating'

const CheckBox = ({label, selected = false,onchange= () => { }})=>{
  return (
    <label className='flex gap-3 items-center cursor-pointer mt-2 text-sm'>
        <input type="checkbox" checked={selected} onchange={(e)=>onchange(e.target.checked, label)} />
        <span className='font-light select-none'>{label}</span>
    </label>
  )
}


const RadieoButton = ({label, selected = false,onchange= () => { }})=>{
  return (
    <label className='flex gap-3 items-center cursor-pointer mt-2 text-sm'>
        <input type="radio" name='sortOption' checked={selected} onchange={(e)=>onchange(label)} />
        <span className='font-light select-none'>{label}</span>
    </label>
  )
}

const AllRooms = () => {
    const navigate = useNavigate()
    const [openFilter,setOpenFilter] = useState(false)

    const roomTypes = [
        'Singale Bed', 
        'Double Bed', 
        'Luxury Bed', 
        'Family Bed', 
    ] ;

    const PriceRanges = [
        '0 to 500',
        '500 to 1000',
        '1000 to 2000',
        '2000 to 3000',
    ] ;

    const sortOptions = [
        "Price Low to Hiegh",
        "Price Hiegh to Low",
        "Newest First",
    ]

  return (
    <>
       <div className='flex flex-col-reverse lg:flex-row items-start justify-between pt-28 md:pt-32 px-4 md:px-16 lg:px-24'>
            <div>
                    <div className='flex flex-col items-start text-left'>
                        <h1 className='font-player text-4xl md:text-[40px]'>Hotel Rooms</h1>
                        <p className='text-sm md:text-base text-gray-500/90 mt-2 max-w-174'>
                            Take advantage of our limited-time offers and special packages to enhance your stay and create unforgettable memories.
                        </p>
                    </div>
                    <div>
                        {
                            roomsDummyData.map((rooms)=>(
                                <div key={rooms._id} className='flex flex-col md:flex-row items-start py-10 gap-6 border-b border-gray-300 last:pb-30 last:border-0'>
                                    <img 
                                    onClick={() => {navigate(`/rooms/${rooms._id}`); scrollTo(0, 0);}}
                                    src={rooms.images[0]} alt="hotel-img"  title='View Room Details' className='max-h-65 md:w-1/2 rounded-xl shadow-lg object-cover cursor-pointer'
                                    />
                                    <div className='md:w-1/2 flex flex-col gap-2'>
                                        <p className='text-gray-500'>{rooms.hotel.city}</p>
                                        <p className='text-gray-500 text-3xl font-playfair cursor-pointer'>{rooms.hotel.name}</p>
                                        <div className='flex items-center'>
                                            <StarRating/>
                                            <p className='ml-2'>200+ review</p>
                                        </div>
                                        <div>
                                            <img src={assets.locationIcon} alt="location-icon" />
                                            <span>{rooms.hotel.address}</span>
                                        </div>

                                        {/* Room aminities  */}
                                        <div className='flex flex-wrap items-center mt-3 mb-6 gap-4'>
                                         {
                                            rooms.amenities.map((item , index)=>(
                                                <div key={index} className='flex items-center gap-2 px-3 py-2 rounded-lg bg-[#e9e9f0]'>
                                                    <img src={facilityIcons[item]} alt="item" className='w-5 h-5' />
                                                    <p className='text-xs'>{item}</p>
                                                </div>
                                            ))
                                         }
                                        </div>

                                        {/* room price Per Night  */}

                                         <div className='flex flex-row items-center gap-3'>
                                            <p className='text-xl font-medium text-gray-700'>${rooms. pricePerNight}</p>
                                            <button onClick={() => {navigate(`/rooms/${rooms._id}`); scrollTo(0, 0);}} className='bg-[#e9e9f0] hover:bg-fuchsia-200 btn py-2 px-3 cursor-pointer'>Book Hotel</button>
                                         </div>
                                        
                                    </div>
                                </div>
                            ))
                        }
                    </div>
            </div>



            {/* filter div  */}
            <div className='bg-white w-80 border border-gray-300 text-gray-600 max-lg:mb-8 lg:mt-16'> 
                <div className={`flex flex-col md:flex-row items-center  justify-between px-5 py-2.5 lg:border-b border-gray-300 ${openFilter && "border-b"}`}>
                    <p className=' text-base font-medium text-gray-800'>FILTERS</p>
                    <div className='text-xs cursor-pointer'>
                        <span onClick={()=> setOpenFilter(!openFilter)} className='lg:hidden'>
                            {
                                openFilter ? 'HIDE' : "SHOW"
                            }
                            
                        </span>
                        {/* <span className='hidden lg:block'>CLEAR</span> */}
                    </div>
                </div>
                <div className={`${openFilter ? 'h-auto' : 'h-0 lg:h-auto'} overflow-hidden transition-all duration-700 `}>
                        <div className='px-5 pt-5'>
                            <p className='font-medium text-gray-800 pb-2'>
                                Populer Filters
                            </p>
                            {
                                PriceRanges.map((room, index)=>(
                                    <CheckBox key={index} label={room}/>
                                ))
                            }
                        </div>
                        <div className='px-5 pt-5'>
                            <p className='font-medium text-gray-800 pb-2'>
                                Price Range
                            </p>
                            {
                                roomTypes.map((range, index)=>(
                                    <CheckBox key={index} label={`$ ${range}`}/>
                                ))
                            }
                        </div>
                        <div className='px-5 pt-5 pb-5'>
                            <p className='font-medium text-gray-800 pb-2'>
                                Sort By
                            </p>
                            {
                                sortOptions.map((option, index)=>(
                                    <RadieoButton key={index} label={option}/>
                                ))
                            }
                        </div>
                </div>
            </div>

        </div>

        <Footerr/>
    </>
  )
}

export default AllRooms