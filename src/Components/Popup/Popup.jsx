
import { X, MapPin, Compass, Plane } from 'lucide-react'
import React, { useEffect, useState } from 'react'

const Popup = () => {

    const [show, setShow] = useState(false)

    useEffect(() => {
        const timer = setTimeout(() => {
            setShow(true)
        }, 3500)

        return () => clearTimeout(timer)
    }, [])

    if (!show) return null

    return (
        <div className='fixed inset-0 z-50 bg-[#101F23]/80 backdrop-blur-sm flex items-center justify-center px-4 py-6'>

            <div className='relative bg-[#F5EBDD] border border-[#D9AF6C]/40 text-[#101F23] w-full max-w-2xl p-6 md:p-10 rounded-3xl text-center shadow-2xl'>

                {/* Close Button */}
                <button
                    onClick={() => setShow(false)}
                    className='absolute cursor-pointer top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full bg-[#101F23] text-white hover:bg-[#D9AF6C] hover:text-[#101F23] transition duration-300'
                >
                    <X size={20} />
                </button>

                {/* Logo / Welcome */}
                <div className='flex items-center justify-center gap-2 mb-5'>
                    <Plane size={25} className='text-[#B58A4B]' />
                    <p className='text-xl md:text-2xl font-bold tracking-widest'>
                        A2Z <span className='text-[#B58A4B]'>TOURS & TRAVELS</span>
                    </p>
                </div>

                {/* Sub Heading */}
                <p className='text-[#B58A4B] text-xs md:text-sm font-bold tracking-[4px] uppercase mb-3'>
                    Your Journey Begins Here
                </p>

                {/* Heading */}
                <h2 className='text-3xl md:text-5xl font-bold text-[#101F23] leading-tight'>
                    Explore The World
                    <span className='block text-[#B58A4B] mt-1'>
                        With A2Z
                    </span>
                </h2>

                <p className='text-[#70462E] mt-4 text-sm md:text-base max-w-md mx-auto'>
                    Discover beautiful destinations, enjoy comfortable rides
                    and create unforgettable travel memories with us.
                </p>

                {/* Travel Highlights */}
                <div className='grid grid-cols-3 gap-3 md:gap-5 mt-8'>

                    {/* Destinations */}
                    <div className='h-28 md:h-36 border border-[#D9AF6C]/50 bg-white/60 rounded-2xl flex flex-col items-center justify-center hover:bg-[#D9AF6C]/20 hover:border-[#B58A4B] transition duration-300'>
                        <MapPin size={27} className='text-[#B58A4B] mb-3' />

                        <h3 className='text-sm md:text-base font-bold'>
                            Destinations
                        </h3>

                        <span className='text-[9px] md:text-[10px] tracking-wider text-[#70462E] mt-1'>
                            EXPLORE MORE
                        </span>
                    </div>

                    {/* Comfortable Rides */}
                    <div className='h-28 md:h-36 border border-[#D9AF6C]/50 bg-white/60 rounded-2xl flex flex-col items-center justify-center hover:bg-[#D9AF6C]/20 hover:border-[#B58A4B] transition duration-300'>
                        <Compass size={27} className='text-[#B58A4B] mb-3' />

                        <h3 className='text-sm md:text-base font-bold'>
                            Road Trips
                        </h3>

                        <span className='text-[9px] md:text-[10px] tracking-wider text-[#70462E] mt-1'>
                            TRAVEL EASY
                        </span>
                    </div>

                    {/* Tour Packages */}
                    <div className='h-28 md:h-36 border border-[#D9AF6C]/50 bg-white/60 rounded-2xl flex flex-col items-center justify-center hover:bg-[#D9AF6C]/20 hover:border-[#B58A4B] transition duration-300'>
                        <Plane size={27} className='text-[#B58A4B] mb-3' />

                        <h3 className='text-sm md:text-base font-bold'>
                            Tour Packages
                        </h3>

                        <span className='text-[9px] md:text-[10px] tracking-wider text-[#70462E] mt-1'>
                            PLAN YOUR TRIP
                        </span>
                    </div>

                </div>

                {/* Bottom Branding */}
                <div className='mt-8 pt-5 border-t border-[#D9AF6C]/50'>
                    <p className='text-xs md:text-sm tracking-[3px] font-semibold text-[#70462E]'>
                        TRAVEL MORE, WORRY LESS
                        <span className='text-[#B58A4B]'>.</span>
                    </p>
                </div>

            </div>

        </div>
    )
}

export default Popup
