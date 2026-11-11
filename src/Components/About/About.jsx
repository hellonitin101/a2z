
import React from 'react'

import {
    Award,
    Heart,
    ShieldCheck,
    Headphones,
    MapPin,
    Compass,
    ArrowUpRight
} from 'lucide-react'

import Founder from '../../Assets/Founder.png'

const About = () => {

    const features = [
        {
            icon: <Award size={24} />,
            title: 'Best Travel Experience',
            desc: 'We create memorable journeys with carefully planned travel experiences.'
        },
        {
            icon: <Heart size={24} />,
            title: 'Travel With Passion',
            desc: 'Every journey is planned with care, passion and attention to detail.'
        },
        {
            icon: <ShieldCheck size={24} />,
            title: 'Safe & Reliable',
            desc: 'Your comfort and safety remain our priority throughout the journey.'
        },
        {
            icon: <Headphones size={24} />,
            title: 'Travel Support',
            desc: 'We are here to help you throughout your travel experience.'
        }
    ]

    return (
        <div className="w-full bg-[#F5EBDD] text-[#101F23]">

            {/* About Heading */}
            <section className="max-w-7xl mx-auto px-5 md:px-10 pt-10 pb-8">

                <div className="text-center">

                    <p className="text-[#70462E] text-xs tracking-[4px] uppercase mb-3 font-semibold">
                        Who We Are
                    </p>

                    <h1 className="text-3xl md:text-5xl font-serif font-semibold">
                        About A <span className="text-[#D9AF6C]">2</span> Z
                    </h1>

                    <p className="text-[#70462E]/80 text-sm md:text-base max-w-2xl mx-auto mt-4 leading-7">
                        Your journey begins with us. Discover beautiful destinations,
                        explore new places and create unforgettable memories with
                        A2 Z Tours & Travels.
                    </p>

                    <div className="w-16 h-[2px] bg-[#D9AF6C] mx-auto mt-6"></div>

                </div>

            </section>

            {/* About Story */}
            <section className="max-w-7xl mx-auto px-5 md:px-10 py-10">

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">

                    {/* Travel Image */}
                    <div className="relative">

                        <img
                            src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=85"
                            alt="Beautiful mountain destination"
                            className="w-full h-[280px] md:h-[420px] object-cover rounded-2xl shadow-xl"
                        />

                        <div className="absolute bottom-4 left-4 bg-[#101F23] border border-[#D9AF6C]/40 px-5 py-4 rounded-xl shadow-lg">

                            <p className="text-xs text-[#D9AF6C]">
                                Our Philosophy
                            </p>

                            <p className="font-serif font-semibold text-sm text-[#F5EBDD] mt-1">
                                Explore. Experience. Enjoy.
                            </p>

                        </div>

                    </div>

                    {/* Story Content */}
                    <div className="py-3">

                        <p className="text-[#70462E] text-xs tracking-[3px] uppercase mb-3 font-semibold">
                            Our Story
                        </p>

                        <h2 className="text-2xl md:text-4xl font-serif font-semibold leading-tight mb-5">
                            More Than Just
                            <span className="text-[#D9AF6C]"> A Journey.</span>
                        </h2>

                        <p className="text-[#70462E]/80 text-sm md:text-base leading-7 mb-4">
                            At A2 Z Tours & Travels, we believe that travelling
                            is more than just visiting new places. It is about
                            discovering different cultures, experiencing nature
                            and creating beautiful memories.
                        </p>

                        <p className="text-[#70462E]/80 text-sm md:text-base leading-7">
                            Our aim is to make every journey comfortable,
                            memorable and enjoyable. From peaceful mountain
                            destinations to beautiful cities, we help you
                            explore the places you love.
                        </p>

                        <div className="flex gap-8 mt-8">

                            <div>
                                <h3 className="text-2xl md:text-3xl font-serif font-semibold">
                                    A <span className="text-[#D9AF6C]">2</span> Z
                                </h3>

                                <p className="text-xs text-[#70462E] mt-1">
                                    Our Brand
                                </p>
                            </div>

                            <div className="w-px bg-[#70462E]/30"></div>

                            <div>
                                <h3 className="text-2xl md:text-3xl font-serif font-semibold">
                                    Travel
                                </h3>

                                <p className="text-xs text-[#70462E] mt-1">
                                    Our Passion
                                </p>
                            </div>

                        </div>

                    </div>

                </div>

            </section>

            {/* Why Choose Us */}
            <section className="bg-[#101F23] py-14 md:py-20 mt-8">

                <div className="max-w-7xl mx-auto px-5 md:px-10">

                    <div className="text-center mb-10">

                        <p className="text-[#D9AF6C] text-xs tracking-[3px] uppercase mb-3">
                            Why Choose Us
                        </p>

                        <h2 className="text-2xl md:text-4xl font-serif font-semibold text-[#F5EBDD]">
                            Travel With A2 Z
                        </h2>

                        <p className="text-[#F5EBDD]/60 text-sm mt-3">
                            Making every journey special and memorable.
                        </p>

                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">

                        {features.map((item, index) => (

                            <div
                                key={index}
                                className="group bg-[#172B30] p-7 rounded-2xl border border-[#D9AF6C]/15 hover:border-[#D9AF6C] hover:-translate-y-1 transition-all duration-300"
                            >

                                <div className="w-12 h-12 rounded-full bg-[#D9AF6C]/15 text-[#D9AF6C] flex items-center justify-center mb-5 group-hover:bg-[#D9AF6C] group-hover:text-[#101F23] transition-all duration-300">
                                    {item.icon}
                                </div>

                                <h3 className="font-semibold text-base mb-2 text-[#F5EBDD]">
                                    {item.title}
                                </h3>

                                <p className="text-[#F5EBDD]/60 text-sm leading-6">
                                    {item.desc}
                                </p>

                                <div className="mt-5 text-[#D9AF6C] flex justify-end">
                                    <ArrowUpRight size={18} />
                                </div>

                            </div>

                        ))}

                    </div>

                </div>

            </section>

            {/* Founder Section */}
            <section className="max-w-7xl mx-auto px-5 md:px-10 py-14 md:py-20">

                <div className="bg-[#101F23] border border-[#70462E]/30 rounded-3xl overflow-hidden grid grid-cols-1 md:grid-cols-2 items-center">

                    {/* Founder Image */}
                    <div className="py-10 md:py-14 flex justify-center items-center">

                        <div className="h-[260px] w-[260px] sm:h-[300px] sm:w-[300px] md:h-[350px] md:w-[350px] overflow-hidden rounded-full border-4 border-[#D9AF6C] shadow-2xl">

                            <img
                                src={Founder}
                                alt="Mukesh Singh Shekhawat - Founder of A2 Z Tours and Travels"
                                className="w-full h-full object-cover object-top"
                            />

                        </div>

                    </div>

                    {/* Founder Details */}
                    <div className="p-7 md:p-12 lg:p-16 text-center md:text-left">

                        <p className="text-[#D9AF6C] text-xs tracking-[3px] uppercase mb-4">
                            Meet The Founder
                        </p>

                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold leading-tight text-[#F5EBDD]">
                            Mukesh Singh
                            <span className="text-[#D9AF6C] block">
                                Shekhawat
                            </span>
                        </h2>

                        <p className="text-[#F5EBDD]/60 text-sm mt-4 mb-6">
                            Founder of A2 Z Tours & Travels
                        </p>

                        <div className="w-14 h-[2px] bg-[#D9AF6C] mb-6 mx-auto md:mx-0"></div>

                        <p className="text-[#F5EBDD]/70 text-sm md:text-base leading-7">
                            With a passion for travel and a vision to create
                            memorable experiences, Mukesh Singh Shekhawat
                            leads A2 Z Tours & Travels with a commitment
                            to making every journey special.
                        </p>

                        <div className="mt-8 flex items-center justify-center md:justify-start gap-3">

                            <MapPin size={19} className="text-[#D9AF6C]" />

                            <span className="text-[#D9AF6C] text-sm">
                                Explore The India With A2 Z
                            </span>

                        </div>

                    </div>

                </div>

            </section>

        </div>
    )
}

export default About
