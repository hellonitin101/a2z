
import React from 'react'

import {
    FaEnvelope,
    FaPhoneAlt,
    FaWhatsapp,
    FaInstagram,
    FaYoutube,
    FaArrowRight,
    FaGoogle
} from 'react-icons/fa'

import { MapPin, Plane } from 'lucide-react'

const Contact = () => {

    const contactInfo = [
        {
            icon: FaPhoneAlt,
            title: 'Phone',
            value: '+91 8955229556',
            link: 'tel:+918955229556',
        },
        {
            icon: FaEnvelope,
            title: 'Email',
            value: 'rajputnidhu118@gmail.com',
            link: 'mailto:rajputnidhu118@gmail.com',
        },
        {
            icon: FaWhatsapp,
            title: 'WhatsApp',
            value: 'Chat With Us',
            link: 'https://wa.me/918955229556',
        },
    ]

    const socialLinks = [
        {
            icon: FaGoogle,
            link: 'https://share.google/XQlZiaNOmtiqxk1KE',
        },
        {
            icon: FaInstagram,
            link: '#',
        },
        {
            icon: FaYoutube,
            link: '#',
        },
    ]

    return (
        <section
            id="contact"
            className="min-h-screen bg-[#F5EBDD] text-[#101F23] py-16 px-5 md:px-10 flex items-center"
        >

            <div className="max-w-7xl mx-auto w-full">

                {/* Heading */}
                <div className="text-center mb-14">

                    <p className="text-[#70462E] text-xs md:text-sm font-semibold tracking-[4px] uppercase mb-4">
                        Get In Touch
                    </p>

                    <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif font-semibold">
                        Let's Plan Your
                        <span className="text-[#D9AF6C]"> Journey</span>
                    </h2>

                    <p className="text-[#70462E]/80 mt-5 max-w-2xl mx-auto leading-7 text-sm md:text-base">
                        Have a destination in mind? Get in touch with A 2 Z
                        Tours & Travels and let us help you plan a memorable
                        travel experience.
                    </p>

                    <div className="w-16 h-[2px] bg-[#D9AF6C] mx-auto mt-6"></div>

                </div>

                {/* Main Card */}
                <div className="max-w-6xl mx-auto rounded-3xl overflow-hidden bg-[#101F23] border border-[#70462E]/30 shadow-2xl">

                    <div className="grid lg:grid-cols-2">

                        {/* Left Section */}
                        <div className="p-6 sm:p-8 lg:p-12">

                            <span className="text-[#D9AF6C] text-xs sm:text-sm font-semibold uppercase tracking-[3px]">
                                Contact Information
                            </span>

                            <h3 className="text-2xl sm:text-4xl font-serif font-semibold mt-4 mb-5 text-[#F5EBDD]">
                                Let's Make Your
                                <span className="text-[#D9AF6C]"> Trip Special.</span>
                            </h3>

                            <p className="text-[#F5EBDD]/65 leading-7 text-sm md:text-base max-w-md mb-8">
                                Looking for your next adventure? Contact us
                                for travel enquiries, destination details
                                and booking assistance. We would love to
                                help you plan your journey.
                            </p>

                            {/* Contact Information */}
                            <div className="space-y-4">

                                {contactInfo.map((item) => {

                                    const Icon = item.icon

                                    return (
                                        <a
                                            key={item.title}
                                            href={item.link}
                                            target={item.title === 'WhatsApp' ? '_blank' : undefined}
                                            rel={item.title === 'WhatsApp' ? 'noopener noreferrer' : undefined}
                                            className="flex items-center gap-4 p-4 rounded-2xl bg-[#172B30] border border-[#D9AF6C]/15 hover:border-[#D9AF6C] hover:bg-[#1B3439] transition-all duration-300 group"
                                        >

                                            <div className="w-12 h-12 shrink-0 rounded-xl bg-[#D9AF6C]/10 border border-[#D9AF6C]/30 flex items-center justify-center text-[#D9AF6C] group-hover:bg-[#D9AF6C] group-hover:text-[#101F23] transition-all duration-300">

                                                <Icon size={18} />

                                            </div>

                                            <div className="min-w-0">

                                                <p className="text-xs text-[#F5EBDD]/50 mb-1">
                                                    {item.title}
                                                </p>

                                                <p className="font-medium text-[#F5EBDD] text-sm sm:text-base truncate">
                                                    {item.value}
                                                </p>

                                            </div>

                                            <div className="ml-auto text-[#D9AF6C] opacity-0 group-hover:opacity-100 transition">
                                                <FaArrowRight size={14} />
                                            </div>

                                        </a>
                                    )

                                })}

                            </div>

                        </div>

                        {/* Right Section */}
                        <div className="relative bg-[#172B30] p-7 sm:p-10 lg:p-12 flex flex-col justify-center items-center text-center overflow-hidden">

                            {/* Decorative Circles */}
                            <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full border border-[#D9AF6C]/10"></div>

                            <div className="absolute -bottom-24 -left-20 w-72 h-72 rounded-full border border-[#D9AF6C]/10"></div>

                            {/* Icon */}
                            <div className="relative w-24 h-24 rounded-3xl bg-[#D9AF6C]/10 border border-[#D9AF6C]/30 flex items-center justify-center text-[#D9AF6C] mb-7">

                                <Plane size={42} strokeWidth={1.5} />

                            </div>

                            <p className="relative text-[#D9AF6C] text-xs tracking-[3px] uppercase mb-3">
                                Your Next Adventure
                            </p>

                            <h3 className="relative text-2xl sm:text-3xl font-serif font-semibold mb-4 text-[#F5EBDD]">
                                Ready To Explore?
                            </h3>

                            <p className="relative max-w-sm text-[#F5EBDD]/60 leading-7 text-sm mb-8">
                                From beautiful mountains to amazing
                                destinations, let A 2 Z Tours & Travels
                                make your travel dreams come true.
                            </p>

                            {/* WhatsApp Button */}
                            <a
                                href="https://wa.me/918955229556"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="relative inline-flex items-center gap-3 px-7 py-4 rounded-full bg-[#D9AF6C] text-[#101F23] font-semibold hover:bg-[#F5EBDD] hover:scale-105 transition-all duration-300"
                            >

                                <FaWhatsapp size={19} />

                                Plan Your Trip

                                <FaArrowRight size={14} />

                            </a>

                            {/* Social Icons */}
                            <div className="relative flex gap-4 mt-8">

                                {socialLinks.map((social, index) => {

                                    const Icon = social.icon

                                    return (
                                        <a
                                            key={index}
                                            href={social.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-11 h-11 rounded-full bg-[#101F23] border border-[#D9AF6C]/20 flex items-center justify-center text-[#D9AF6C] hover:bg-[#D9AF6C] hover:text-[#101F23] hover:border-[#D9AF6C] hover:scale-110 transition-all duration-300"
                                        >

                                            <Icon size={18} />

                                        </a>
                                    )

                                })}

                            </div>

                            {/* Founder */}
                            <div className="relative border-t border-[#D9AF6C] mt-10 pt-7 w-full">

                                <p className="text-[#F5EBDD]/50 text-xs uppercase tracking-[3px] mb-3">
                                    Founded By
                                </p>

                                <h3 className="text-xl md:text-2xl font-serif font-semibold text-[#F5EBDD]">
                                    Mukesh Singh
                                    <span className="text-[#D9AF6C]"> Shekhawat</span>
                                </h3>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </section>
    )
}

export default Contact
