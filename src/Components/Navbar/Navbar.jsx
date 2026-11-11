
import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X, ArrowUpRight } from 'lucide-react'

const Navbar = () => {

    const [menuOpen, setMenuOpen] = useState(false)

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About Us', path: '/about' },
        { name: 'Services', path: '/services' },
        { name: 'Itinerary', path: '/itinerary' },
        { name: 'Contact Us', path: '/contact' }
    ]

    return (
        <nav className="w-full bg-[#101F23] text-[#F5EBDD] sticky top-0 z-50 shadow-lg">

            <div className="max-w-7xl mx-auto px-5 md:px-10">

                <div className="h-20 flex items-center justify-between">

                    {/* Logo */}
                    <Link to="/" className="flex flex-col">
                        <h1 className="text-3xl md:text-4xl font-serif tracking-wider">
                            A <span className="text-[#D9AF6C]">2</span> Z
                        </h1>

                        <span className="text-[8px] md:text-[9px] tracking-[3px] text-[#D9AF6C]">
                            TOURS & TRAVELS
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-9">

                        {navLinks.map((link) => (
                            <NavLink
                                key={link.name}
                                to={link.path}
                                className={({ isActive }) =>
                                    `text-sm tracking-wide transition-colors duration-300 ${isActive
                                        ? 'text-[#D9AF6C]'
                                        : 'text-[#F5EBDD] hover:text-[#D9AF6C]'
                                    }`
                                }
                            >
                                {link.name}
                            </NavLink>
                        ))}

                    </div>

                    {/* Book Now */}
                    <Link
                        to="/book"
                        className="hidden md:flex items-center gap-2 bg-[#D9AF6C] text-[#101F23] px-6 py-3 rounded-full text-sm font-medium hover:bg-[#F5EBDD] transition-all duration-300"
                    >
                        Book Now
                        <ArrowUpRight size={16} />
                    </Link>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="md:hidden text-[#D9AF6C] cursor-pointer"
                        aria-label="Toggle navigation menu"
                        aria-expanded={menuOpen}
                    >
                        {menuOpen ? <X size={27} /> : <Menu size={27} />}
                    </button>

                </div>

                {/* Mobile Navigation */}
                <div
                    className={`md:hidden overflow-hidden transition-all duration-300 ${menuOpen ? 'max-h-96 pb-6' : 'max-h-0'
                        }`}
                >
                    <div className="flex flex-col gap-5 border-t border-[#D9AF6C]/20 pt-6">

                        {navLinks.map((link) => (
                            <NavLink
                                key={link.name}
                                to={link.path}
                                onClick={() => setMenuOpen(false)}
                                className={({ isActive }) =>
                                    `text-sm tracking-wide transition-colors ${isActive
                                        ? 'text-[#D9AF6C]'
                                        : 'text-[#F5EBDD] hover:text-[#D9AF6C]'
                                    }`
                                }
                            >
                                {link.name}
                            </NavLink>
                        ))}

                        <Link
                            to="/book"
                            onClick={() => setMenuOpen(false)}
                            className="flex items-center justify-center gap-2 bg-[#D9AF6C] text-[#101F23] px-5 py-3 rounded-full text-sm font-medium w-full"
                        >
                            Book Now
                            <ArrowUpRight size={16} />
                        </Link>

                    </div>
                </div>

            </div>

        </nav>
    )
}

export default Navbar
