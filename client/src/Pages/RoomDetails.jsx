import React, { useEffect, useState } from 'react'
import Footerr from '../components/Footer'
import { useNavigate, useParams } from 'react-router-dom'
import {  assets, facilityIcons, roomCommonData, roomsDummyData } from '../assets/assets'
import StarRating from '../components/StarRating'

const RoomDetails = () => {
    const {id} = useParams()

    const [room,setRoom] = useState(null)
    const [mainImage,setMainImage] = useState(null)
    const navigate = useNavigate()

    useEffect(()=>{
        const room = roomsDummyData.find(room => room._id.toString() === id)
        if (room) {
            setRoom(room)
            setMainImage(room.images[0])
        }
    }, [id])


  return room && 
  (
    <>
        <div className='py-28 mf:py-35 px-4 md:px-16 lg:px-24 xl:px-32'>
            {/* Room details  */}
            <div className='flex flex-col md:flex-row items-start md:items-center gap-2'>
               <h1 className='text-3xl md:text-4xl font-playfair'>
                  {room.hotel.name}<span className='font-inter text-sm'>({room.roomType})</span>
                </h1>
               <p className='text-xs- font-inter py-1.5 px-3 text-white bg-orange-500 rounded-full'>20% OFF</p>
            </div>

{/* Rooms Reating  */}
            <div className='flex items-center gap-1 mt-2'>
                <StarRating/>
                <p>200+ reviews</p>
            </div>

            {/* Rooms Address  */}
            <div className='flex items-center gap-1 text-gray-500 mt-2'>
                <img src={assets.locationIcon} alt="lcation-icon" />
                <span>{room.hotel.address}</span>
            </div>

            {/* Room images  */}
            <div className='flex flex-col lg:flex-row mt-6 gap-6'>
                <div className='lg:w-1/2 w-full'>
                    <img src={mainImage} alt="Room-image" className='w-full rounded-xl shadaw-lg object-cover'/>
                </div>
                <div className='grid grid-cols-2 gap-4 lg:w-1/2 w-full'>
                    {room?.images.length > 1 && room.images.map((image,i)=>(
                        <img onClick={()=>setMainImage(image)} src={image} key={i} className={`w-full rounded-xl shadow-lg object-cover course-pointer ${mainImage === image && 'outline-3 outline-orange-500'}`}/>
                    ))}
                </div>
            </div>

            {/* Room HeighLight  */}
            <div className='flex flex-col md:flex-row md:justify-between mt-10'>
                <div className='flex flex-col'>
                    <h1 className='text-3xl md:text-4xl font-playfair'>Expariance Luxury Like Never Before</h1>
                    <div className='flex flex-wrap items-center mt-3 mb-6 gap-4'>
                        {room.amenities.map((item,index)=>(
                            <div key={index} className='flex items-center gap-2 px-3 rounded-lg bg -gray-100'>
                                <img src={facilityIcons[item]} alt={item}  className='w-5 h-5'/>
                                <p className='text-xs'>{item}</p>
                            </div>
                        ))}
                    </div>
                </div>
                 {/* RoomPrice  */}
                 <p className='text-2xl font-medium'>${room.pricePerNight}/night</p>
            </div>

            {/* CheckIn CheckOut From  */}
             <form className='flex flex-col md:flex-row items-start md:items-center justify-between ng-white shadow-[0px_0px_20px_rgba(0,0,0,0.15)] p-6 rounded-xl mz-auto mt-16 max-w-6xl'>
                
                <div className='flex flex-col flex-wrap md:flex-row items-start md:items-center gap-4 md:gap-10 text-fray-500'>
                    <div className='flex flex-col'>
                        <label htmlFor="checkInDate" className='font-medium'>Check-In</label>
                        <input type="date" id='checkInDate' placeholder='Check-in'
                         className='w-full rounded border border-gray-300 px-3 py-2 mt-1.5 outline-none' required  
                        />
                    </div>

                    <div className='w-px h-15 bg-gray-300/70 max-md:hidden'></div>
                    <div className='flex flex-col'>
                        <label htmlFor="checkOutDate" className='font-medium'>Check-Out</label>
                        <input type="date" id='checkOutDate' placeholder='Check-Out'
                         className='w-full rounded border border-gray-300 px-3 py-2 mt-1.5 outline-none' required  
                        />
                    </div>
                  
                    <div className='w-px h-15 bg-gray-300/70 max-md:hidden'></div>
                    <div className='flex flex-col'>
                        <label htmlFor="guests" className='font-medium'>Guests</label>
                        <input type="number" id='guests' placeholder='Check-Out'
                         className='max-w-20 rounded- border border-gray-300 px-3 py-2 mt-1.5 outline-mone' required  
                        />
                    </div>

                </div>
                
                <button
                    type="submit"
                    className="bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-400 hover:to-pink-400 active:scale-95 transition-all text-white font-semibold rounded-xl mt-6 md:mt-0 px-8 py-3 shadow-md hover:shadow-lg"
                  >
                    Check Availablity
                </button>

             </form>

             {/* common specafication  */}


             <div className='mt-25 space-y-4'>
                {roomCommonData.map((spec,index)=>(
                    <div key={index} className='flex items-start gap-2'>
                        <img src={spec.icon} alt={`${spec.title}-icon`} className='w-6.5' />
                        <div>
                            <p className='text-base'>{spec.title}</p>
                            <p className='text-gray-500'>{spec.description}</p>
                        </div>
                    </div>
                ))}
             </div>

             {/* description  */}
             <div className='max-w-3xl border-y border-gray-300 my-15 py-10 text-gray-500'>
                <p>
                    Guests will be allocated on the ground floor according to availability. You get a comfortable Two bedroom apartment has a true city feeling. The price quoted is for two guest, at the guest slot please mark the number of guests to get the exact price for groups. The Guests will be allocated ground floor according to availability. You get the comfortable two bedroom apartment that has a true city feeling.
                </p>
             </div>

             {/* Owner details  */}

             <div className='flex flex-col items-center gap-4'>
                <div className='flex gap-4'>
                    <img src={room.hotel.owner.image} alt="host" className='h-14 w-14 md:h-18 md:w-18 rounded-full'/>
                    <div>
                        <p className='text-lg md:text-xl'>Hosted by <span className='text-3xl font-bold text-gray-500'>BONI AMIN JAYED(Computer Engineer)</span></p>
                        <div className='flex items-center mt-1'>
                            <StarRating/>
                            <p className='ml-2'>200+ reviews</p>
                        </div>
                    </div>
                </div>
                  <button
                    onClick={()=>{navigate('/contact')}}
                    type="submit"
                    className="bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-400 hover:to-pink-400 active:scale-95 transition-all text-white font-semibold rounded-xl mt-6 md:mt-0 px-8 py-3 shadow-md hover:shadow-lg"
                  >
                    Contact
                </button>
             </div>

           

        </div>
       
       <Footerr/>
    </>
  )
}

export default RoomDetails