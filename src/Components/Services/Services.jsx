
import React from 'react'
import { ArrowUpRight, Users } from 'lucide-react'
import { Link } from 'react-router-dom'

const Services = () => {

    const vehicles = [
        {
            id: 1,
            name: 'Swift Dzire',
            category: 'Sedan',
            description: 'Comfortable and affordable rides for city travel and outstation journeys.',
            image: 'https://abhimanyuholiday.com/images/Dzire.webp',
            seats: '4 Passengers',
            link: '/sedan'
        },
        {
            id: 2,
            name: 'Maruti Ertiga',
            category: 'Family Car',
            description: 'A spacious and comfortable choice for family trips and group travel.',
            image: 'https://stimg.cardekho.com/images/carexteriorimages/630x420/Maruti/Ertiga-Tour/9617/1762858404297/front-left-side-47.jpg?tr=w-664',
            seats: '6-7 Passengers',
            link: '/ertiga'
        },
        {
            id: 3,
            name: 'Toyota Innova Crysta',
            category: 'Premium SUV',
            description: 'Enjoy a premium travel experience with extra comfort and spacious seating.',
            image: 'https://asset.autocarindia.com/static/models/colors/20260605_045917_e4bbbe21.jpg?w=640&q=75&fm=auto',
            seats: '6-7 Passengers',
            link: '/crysta'
        },
        {
            id: 4,
            name: 'Toyota Etios',
            category: 'Sedan',
            description: 'A reliable and budget-friendly option for comfortable everyday journeys.',
            image: 'https://rentacarinindia.in/wp-content/uploads/2023/09/etios-1.png',
            seats: '4 Passengers',
            link: '/etios'
        },
        {
            id: 5,
            name: 'Tuk Tuk',
            category: 'Auto Rickshaw',
            description: 'Explore local streets and nearby places with convenient city rides.',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ71K3ht0JxVTx5lqB3XE-GHL4rUEIGOVHGdJVhIacRog&s=10',
            seats: '3 Passengers',
            link: '/tuktuk'
        }
    ]

    return (
        <section className="w-full bg-[#F5EBDD] py-16 px-5 md:px-10">

            <div className="max-w-7xl mx-auto">

                {/* Heading */}
                <div className="text-center mb-12">

                    <p className="text-[#70462E] text-xs md:text-sm tracking-[4px] uppercase font-semibold mb-3">
                        Travel In Comfort
                    </p>

                    <h2 className="text-3xl md:text-5xl font-serif font-semibold text-[#101F23]">
                        Our <span className="text-[#D9AF6C]">Services</span>
                    </h2>

                    {/* Rental Introduction */}
                    <p className="text-[#70462E]/90 text-sm md:text-base max-w-3xl mx-auto mt-5 leading-7">
                        At A 2 Z Tours & Travels, we provide all our vehicles
                        on a rental basis as well as daily basis. Whether you
                        need a car for a single day, family vacation, local
                        sightseeing or an outstation journey, we offer
                        comfortable and reliable travel options to make
                        every journey memorable.
                    </p>

                    <div className="w-16 h-[2px] bg-[#D9AF6C] mx-auto mt-5"></div>

                </div>

                {/* Vehicle Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">

                    {vehicles.map((vehicle) => (

                        <Link
                            to={vehicle.link}
                            key={vehicle.id}
                            className="group bg-[#101F23] rounded-2xl overflow-hidden border border-[#70462E]/20 hover:border-[#D9AF6C] shadow-lg hover:-translate-y-2 transition-all duration-300"
                        >

                            {/* Image */}
                            <div className="relative h-[220px] overflow-hidden">

                                <img
                                    src={vehicle.image}
                                    alt={vehicle.name}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                />

                                <div className="absolute inset-0 bg-gradient-to-t from-[#101F23]/70 to-transparent"></div>

                                <span className="absolute top-4 left-4 bg-[#D9AF6C] text-[#101F23] text-xs font-semibold px-4 py-2 rounded-full">
                                    {vehicle.category}
                                </span>

                            </div>

                            {/* Details */}
                            <div className="p-6">

                                <h3 className="text-xl font-serif font-semibold text-[#F5EBDD] group-hover:text-[#D9AF6C] transition">
                                    {vehicle.name}
                                </h3>

                                <p className="text-[#F5EBDD]/60 text-sm leading-6 mt-3 min-h-[72px]">
                                    {vehicle.description}
                                </p>

                                <div className="flex items-center justify-between border-t border-[#D9AF6C]/20 mt-5 pt-4">

                                    <div className="flex items-center gap-2 text-[#D9AF6C] text-sm">
                                        <Users size={17} />
                                        {vehicle.seats}
                                    </div>

                                    <div className="w-9 h-9 rounded-full bg-[#D9AF6C]/10 text-[#D9AF6C] flex items-center justify-center group-hover:bg-[#D9AF6C] group-hover:text-[#101F23] transition">
                                        <ArrowUpRight size={19} />
                                    </div>

                                </div>

                            </div>

                        </Link>

                    ))}

                </div>

            </div>

        </section>
    )
}

export default Services
