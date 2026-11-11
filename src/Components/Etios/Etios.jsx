
import React from 'react'
import { Link } from 'react-router-dom'
import {
    Clock,
    CalendarDays,
    ArrowUpRight,
    CarFront,
    CheckCircle2,
    CircleAlert,
    Gift,
    Droplets,
    MapPin,
    UserRoundCheck
} from 'lucide-react'
import Charges from '../Charges/Charges'

const Etios = () => {


    return (
        <section className="w-full min-h-screen bg-[#F5EBDD] px-5 md:px-10 py-14 md:py-20">

            <div className="max-w-7xl mx-auto">

                {/* Heading */}
                <div className="text-center mb-12">

                    <p className="text-[#70462E] text-xs md:text-sm tracking-[4px] uppercase font-semibold mb-3">
                        A 2 Z Tours & Travels
                    </p>

                    <h1 className="text-4xl md:text-6xl font-serif font-bold text-[#101F23]">
                        Etios <span className="text-[#D9AF6C]">Car</span>
                    </h1>

                    <p className="text-[#70462E]/80 max-w-2xl mx-auto mt-4 text-sm md:text-base leading-7">
                        Enjoy comfortable and affordable journeys with our
                        Etios car rental services. Book your ride for a few
                        hours or enjoy a complete day of travel.
                    </p>

                    <div className="w-20 h-[2px] bg-[#D9AF6C] mx-auto mt-6"></div>

                </div>

                {/* Main Content */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

                    {/* Car Image */}
                    <div className="relative group">

                        <div className="absolute -inset-3 border border-[#D9AF6C]/40 rounded-3xl"></div>

                        <div className="relative overflow-hidden rounded-2xl shadow-xl">

                            <img
                                src="https://rentacarinindia.in/wp-content/uploads/2023/09/etios-1.png"
                                alt="Etios"
                                className="w-full h-[280px] md:h-[450px] object-cover group-hover:scale-105 transition duration-700"
                            />

                            <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-[#101F23] to-transparent p-6 pt-16">

                                <span className="text-[#D9AF6C] text-xs tracking-[3px] uppercase">
                                    Comfortable Journey
                                </span>

                                <h2 className="text-3xl font-serif text-[#F5EBDD] mt-2">
                                    Innova Etios
                                </h2>

                            </div>

                        </div>
                    </div>

                    {/* Booking Options */}
                    <div>

                        <p className="text-[#70462E] text-sm uppercase tracking-[3px] font-semibold mb-3">
                            Choose Your Package
                        </p>

                        <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#101F23] mb-7">
                            Select Your <span className="text-[#D9AF6C]">Ride</span>
                        </h2>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

                            {/* Rental */}
                            <div className="bg-[#101F23] p-6 md:p-7 rounded-2xl border border-[#D9AF6C]/30 hover:border-[#D9AF6C] shadow-lg transition duration-300">

                                <div className="w-12 h-12 rounded-full bg-[#D9AF6C]/15 flex items-center justify-center text-[#D9AF6C] mb-5">
                                    <Clock size={23} />
                                </div>

                                <h3 className="text-xl font-serif font-semibold text-[#F5EBDD]">
                                    Rental
                                </h3>

                                <p className="text-[#F5EBDD]/60 text-sm leading-6 mt-3 min-h-[72px]">
                                    Book a Etios for hourly travel and enjoy
                                    comfortable rides according to your needs.
                                </p>

                                <div className="border-t border-[#D9AF6C]/20 mt-5 pt-5">

                                    <p className="text-[#F5EBDD]/50 text-xs uppercase tracking-wider">
                                        Starting Price
                                    </p>

                                    <h4 className="text-3xl font-bold text-[#D9AF6C] mt-2">
                                        ₹230
                                        <span className="text-sm font-normal text-[#F5EBDD]/60">
                                            / Hour
                                        </span>
                                        <br />
                                        <span className='text-[#D9AF6C]/60 text-sm'>Total :- 80-KM</span>
                                    </h4>

                                    <p className="text-[#F5EBDD]/60 text-xs mt-3">
                                        Minimum booking: 8 hours
                                    </p>

                                </div>

                                <Link
                                    to="/book"
                                    className="mt-6 w-full bg-[#D9AF6C] text-[#101F23] py-3 rounded-full flex items-center justify-center gap-2 font-semibold hover:bg-[#F5EBDD] transition duration-300"
                                >
                                    Book Now <ArrowUpRight size={18} />
                                </Link>

                            </div>

                            {/* One Day */}
                            <div className="bg-[#101F23] p-6 md:p-7 rounded-2xl border border-[#D9AF6C]/30 hover:border-[#D9AF6C] shadow-lg transition duration-300">

                                <div className="w-12 h-12 rounded-full bg-[#D9AF6C]/15 flex items-center justify-center text-[#D9AF6C] mb-5">
                                    <CalendarDays size={23} />
                                </div>

                                <h3 className="text-xl font-serif font-semibold text-[#F5EBDD]">
                                    One Day
                                </h3>

                                <p className="text-[#F5EBDD]/60 text-sm leading-6 mt-3 min-h-[72px]">
                                    Perfect for full-day trips, sightseeing,
                                    family outings and outstation journeys.
                                </p>

                                <div className="border-t border-[#D9AF6C]/20 mt-5 pt-5">

                                    <p className="text-[#F5EBDD]/50 text-xs uppercase tracking-wider">
                                        Daily Package
                                    </p>

                                    <h4 className="text-3xl font-bold text-[#D9AF6C] mt-2">
                                        ₹2,750
                                        <span className="text-sm font-normal text-[#F5EBDD]/60">
                                            / Day
                                        </span>
                                        <br />
                                        <span className='text-[#D9AF6C]/60 text-sm'>Total :- 250-KM</span>
                                    </h4>

                                </div>

                                <Link
                                    to="/book"
                                    className="mt-6 w-full bg-[#D9AF6C] text-[#101F23] py-3 rounded-full flex items-center justify-center gap-2 font-semibold hover:bg-[#F5EBDD] transition duration-300"
                                >
                                    Book Now <ArrowUpRight size={18} />
                                </Link>

                            </div>

                        </div>

                        {/* Bottom Info */}
                        <div className="flex flex-wrap gap-5 mt-7">

                            <div className="flex items-center gap-2 text-[#70462E] text-sm">
                                <CheckCircle2 size={17} className="text-[#D9AF6C]" />
                                Comfortable Travel
                            </div>

                            <div className="flex items-center gap-2 text-[#70462E] text-sm">
                                <CarFront size={17} className="text-[#D9AF6C]" />
                                Etios Car
                            </div>

                        </div>

                    </div>

                </div>

            </div>
            {/* Extra Charges & Free Benefits */}
            <Charges />

        </section>
    )
}

export default Etios
