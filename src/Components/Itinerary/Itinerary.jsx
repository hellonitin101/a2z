import React from 'react'
import {
    MapPin,
    Clock,
    ArrowUpRight,
    Route,
    Hotel,
    CarFront
} from 'lucide-react'
import { Link } from 'react-router-dom'

const Itinerary = () => {

    const data = [
        {
            id: 1,
            title: 'Jaipur To Delhi',
            from: 'Jaipur',
            to: 'Delhi',
            price: 6500,
            duration: '2 Days',
            toll: 'As Per Actual Statement',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPUg0mrfThkq5SH-bKyOy70s-1ouPy14DesLOsY5U-8Q&s=10',
            description: 'Enjoy a comfortable journey from Jaipur to Delhi with a convenient and reliable travel experience.',
            tag: 'One Way Trip',
        },
        {
            id: 2,
            title: 'Jaipur To Ajmer',
            from: 'Jaipur',
            to: 'Ajmer',
            price: 2500,
            duration: '1 Days',
            toll: 'As Per Actual Statement',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZZDwTk79wTOpln8i2n345jR22sf3qSqLF2VqcybaP9g&s=10',
            description: 'Explore Ajmer and enjoy a peaceful journey with comfortable transportation from Jaipur.',
            tag: 'Popular Trip',
        },
        {
            id: 3,
            title: 'Golden Triangle Tour',
            from: 'Jaipur',
            to: 'Delhi → Agra',
            price: 7500,
            duration: '3 Days',
            toll: 'Extra',
            image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1200&q=85',
            description: 'Explore the beauty of Delhi, Jaipur and Agra in one memorable journey. Discover famous attractions and heritage destinations.',
            tag: 'Special Package',
        }
    ]

    const vehicleRates = [
        {
            id: 1,
            name: 'Sedan',
            rate: 11,
            description: 'Comfortable & Budget Friendly'
        },
        {
            id: 2,
            name: 'Ertiga',
            rate: 14,
            description: 'Perfect For Family Trips'
        },
        {
            id: 3,
            name: 'Crysta',
            rate: 17,
            description: 'Premium Travel Experience'
        }
    ]

    return (
        <section className="w-full bg-[#F5EBDD] px-5 md:px-10 py-16">

            <div className="max-w-7xl mx-auto">

                {/* Heading */}
                <div className="text-center mb-10">

                    <p className="text-[#70462E] text-xs md:text-sm tracking-[4px] uppercase font-semibold mb-3">
                        Explore With A 2 Z
                    </p>

                    <h2 className="text-3xl md:text-5xl font-serif font-bold text-[#101F23]">
                        Our <span className="text-[#D9AF6C]">Itineraries</span>
                    </h2>

                    <p className="text-[#70462E]/80 text-sm md:text-base max-w-2xl mx-auto mt-4 leading-7">
                        Discover our travel routes and specially planned packages
                        for comfortable and memorable journeys.
                    </p>

                    <div className="w-20 h-[2px] bg-[#D9AF6C] mx-auto mt-5"></div>

                </div>

                {/* Hotel Information */}
                <div className="bg-[#101F23] border border-[#D9AF6C]/30 rounded-2xl p-5 md:p-7 mb-12 flex flex-col md:flex-row items-start md:items-center gap-4">

                    <div className="w-12 h-12 shrink-0 rounded-full bg-[#D9AF6C]/15 text-[#D9AF6C] flex items-center justify-center">
                        <Hotel size={25} />
                    </div>

                    <div>
                        <h3 className="text-[#F5EBDD] text-lg md:text-xl font-serif font-semibold">
                            Hotel Accommodation Information
                        </h3>

                        <p className="text-[#F5EBDD]/65 text-sm leading-7 mt-2">
                            Please note that hotel accommodation is not included
                            in our tour package prices. Hotels can be arranged
                            separately according to your budget, preferences
                            and requirements.
                        </p>
                    </div>

                </div>

                {/* Itinerary Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">

                    {data.map((e) => (

                        <div
                            key={e.id}
                            className="group bg-[#101F23] rounded-2xl overflow-hidden border border-[#70462E]/20 hover:border-[#D9AF6C] shadow-lg hover:-translate-y-2 transition-all duration-300"
                        >

                            {/* Image */}
                            <div className="relative h-[230px] overflow-hidden">

                                <img
                                    src={e.image}
                                    alt={e.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                />

                                <div className="absolute inset-0 bg-gradient-to-t from-[#101F23]/90 via-transparent to-transparent"></div>

                                <span className="absolute top-4 left-4 bg-[#D9AF6C] text-[#101F23] text-xs font-bold px-4 py-2 rounded-full">
                                    {e.tag}
                                </span>

                                <h3 className="absolute bottom-5 left-5 text-[#F5EBDD] text-2xl font-serif font-semibold">
                                    {e.title}
                                </h3>

                            </div>

                            {/* Details */}
                            <div className="p-6">

                                <div className="flex flex-wrap items-center gap-3 text-[#F5EBDD] text-sm mb-5">

                                    <div className="flex items-center gap-2">
                                        <MapPin size={17} className="text-[#D9AF6C]" />
                                        <span>{e.from}</span>
                                    </div>

                                    <ArrowUpRight size={17} className="text-[#D9AF6C]" />

                                    <span>{e.to}</span>

                                </div>

                                <p className="text-[#F5EBDD]/60 text-sm leading-6 min-h-[72px]">
                                    {e.description}
                                </p>

                                <div className="border-t border-[#D9AF6C]/20 mt-5 pt-5 space-y-4">

                                    {/* Duration */}
                                    <div className="flex justify-between items-center">

                                        <div className="flex items-center gap-2 text-[#F5EBDD]/70 text-sm">
                                            <Clock size={17} className="text-[#D9AF6C]" />
                                            Duration
                                        </div>

                                        <span className="text-[#F5EBDD] text-sm font-medium">
                                            {e.duration}
                                        </span>

                                    </div>

                                    {/* Toll Tax */}
                                    <div className="flex justify-between items-center">

                                        <div className="flex items-center gap-2 text-[#F5EBDD]/70 text-sm">
                                            <Route size={17} className="text-[#D9AF6C]" />
                                            Toll Tax
                                        </div>

                                        <span className="text-[#F5EBDD] text-xs font-medium text-right">
                                            {e.toll}
                                        </span>

                                    </div>

                                </div>

                                {/* Book Button */}
                                <Link
                                    to="/book"
                                    className="mt-6 w-full bg-[#D9AF6C] text-[#101F23] py-3.5 rounded-full flex items-center justify-center gap-2 font-semibold hover:bg-[#F5EBDD] transition duration-300"
                                >
                                    Book This Trip
                                    <ArrowUpRight size={18} />
                                </Link>

                            </div>

                        </div>

                    ))}

                </div>

                {/* Vehicle Rates */}
                <div className="mt-16">

                    <div className="text-center mb-8">

                        <p className="text-[#70462E] text-xs tracking-[4px] uppercase font-semibold mb-3">
                            Choose Your Vehicle
                        </p>

                        <h2 className="text-2xl md:text-4xl font-serif font-bold text-[#101F23]">
                            Our <span className="text-[#D9AF6C]">Vehicle Rates</span>
                        </h2>

                        <p className="text-[#70462E]/80 text-sm mt-3">
                            Choose your vehicle according to your travel needs.
                        </p>

                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 max-w-4xl mx-auto">

                        {vehicleRates.map((vehicle) => (

                            <div
                                key={vehicle.id}
                                className="bg-[#101F23] border border-[#D9AF6C]/20 rounded-xl p-5 text-center hover:border-[#D9AF6C] hover:-translate-y-1 transition duration-300"
                            >

                                <div className="w-11 h-11 rounded-full bg-[#D9AF6C]/15 text-[#D9AF6C] flex items-center justify-center mx-auto mb-3">
                                    <CarFront size={23} />
                                </div>

                                <h3 className="text-[#F5EBDD] font-serif text-lg font-semibold">
                                    {vehicle.name}
                                </h3>

                                <p className="text-[#F5EBDD]/50 text-xs mt-1">
                                    {vehicle.description}
                                </p>

                                <div className="mt-3">

                                    <span className="text-[#D9AF6C] text-2xl font-bold">
                                        ₹{vehicle.rate}
                                    </span>

                                    <span className="text-[#F5EBDD]/60 text-sm">
                                        / km
                                    </span>

                                </div>

                            </div>

                        ))}

                    </div>

                    <p className="text-center text-[#70462E] text-xs mt-5">
                        * Vehicle rates are indicative. Final fare and applicable extra charges will be confirmed at booking.
                    </p>

                </div>

                {/* Bottom Note */}
                <div className="text-center mt-12">

                    <p className="text-[#70462E] text-sm leading-7">
                        Need a customized trip? Contact us for personalized
                        routes, vehicle options and travel plans.
                    </p>

                    <Link
                        to="/contact"
                        className="inline-flex items-center gap-2 mt-4 text-[#101F23] font-semibold border-b-2 border-[#D9AF6C] pb-1 hover:text-[#70462E] transition"
                    >
                        Contact Us
                        <ArrowUpRight size={17} />
                    </Link>

                </div>

            </div>

        </section>
    )
}

export default Itinerary