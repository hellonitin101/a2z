
import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {

    return (
        <footer className="w-full bg-[#101F23] text-[#F5EBDD]">

            <div className="max-w-7xl mx-auto px-5 md:px-10 py-7">

                {/* Logo */}
                <div className="flex md:flex-row md:justify-between flex-col items-center gap-3">

                    <Link to="/" className="flex flex-col items-center">
                        <h1 className="text-4xl md:text-5xl font-serif tracking-wider">
                            A <span className="text-[#D9AF6C]">2</span> Z
                        </h1>

                        <span className="text-[9px] tracking-[4px] text-[#D9AF6C]">
                            TOURS & TRAVELS
                        </span>
                    </Link>

                    <p className="text-sm text-[#F5EBDD]/60 text-center max-w-md leading-7">
                        Discover beautiful destinations and create
                        unforgettable memories with A2 Z Tours & Travels.
                    </p>

                </div>

                {/* Divider */}
                <div className="w-full h-px bg-[#D9AF6C]/20 my-8"></div>

                {/* Copyright */}
                <div className="text-center">
                    <p className="text-xs md:text-sm text-[#F5EBDD]/50">
                        © 2026 A2 Z Tours & Travels. All Rights Reserved.
                    </p>
                </div>

            </div>

        </footer>
    )
}

export default Footer
