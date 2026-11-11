
import React, { useState } from 'react'
import {
    User,
    Phone,
    MapPin,
    CalendarDays,
    Clock,
    CarFront,
    Users,
    Hotel,
    Send,
    CheckCircle2
} from 'lucide-react'

const Book = () => {

    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        pickup: '',
        drop: '',
        date: '',
        totalDays: '',
        car: '',
        hotel: '',
        totalPerson: ''
    })

    const [submitted, setSubmitted] = useState(false)

    // A2 Z WhatsApp Number
    const whatsappNumber = '919461947107'

    // Handle Input Change
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })

        setSubmitted(false)
    }

    // Handle Form Submit
    const handleSubmit = (e) => {
        e.preventDefault()

        // WhatsApp Message
        const message = `
Hello A2 Z Tours & Travels!

I want to book a trip. Here are my details:

Name: ${formData.name}
Phone Number: ${formData.phone}

Pickup Location: ${formData.pickup}
Drop Location: ${formData.drop}

Journey Date: ${formData.date}
Total Days: ${formData.totalDays}

Selected Car: ${formData.car}
Hotel Required: ${formData.hotel}
Total Persons: ${formData.totalPerson}

Please contact me regarding the trip booking.

Thank You!
        `

        // Create WhatsApp URL
        const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`

        // Open WhatsApp
        window.open(whatsappURL, '_blank', 'noopener,noreferrer')

        // Show Success Message
        setSubmitted(true)

        // Reset Form
        setFormData({
            name: '',
            phone: '',
            pickup: '',
            drop: '',
            date: '',
            totalDays: '',
            car: '',
            hotel: '',
            totalPerson: ''
        })
    }

    return (
        <section className="w-full bg-[#F5EBDD] px-5 md:px-10 py-16 md:py-20">

            <div className="max-w-7xl mx-auto">

                {/* Heading */}
                <div className="text-center mb-12">

                    <p className="text-[#70462E] text-xs md:text-sm tracking-[4px] uppercase font-semibold mb-3">
                        A2 Z Tours & Travels
                    </p>

                    <h1 className="text-3xl md:text-5xl font-serif font-bold text-[#101F23]">
                        Book <span className="text-[#D9AF6C]">Your Trip</span>
                    </h1>

                    <p className="text-[#70462E]/80 text-sm md:text-base mt-4 max-w-xl mx-auto leading-7">
                        Share your travel details with us and let our experts
                        help you plan a comfortable and memorable journey.
                    </p>

                    <div className="w-20 h-[2px] bg-[#D9AF6C] mx-auto mt-5"></div>

                </div>

                {/* Form Container */}
                <div className="max-w-4xl mx-auto bg-[#101F23] rounded-3xl p-6 md:p-10 shadow-xl border border-[#D9AF6C]/30">

                    <h2 className="text-2xl md:text-3xl font-serif text-[#F5EBDD] mb-2 text-center">
                        Trip Booking Details
                    </h2>

                    <p className="text-center text-[#F5EBDD]/50 text-sm mb-9">
                        Please fill in all the details below.
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-6">

                        {/* Name & Phone */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                            <div>
                                <label className="block text-[#D9AF6C] text-sm mb-2">
                                    Your Name *
                                </label>

                                <div className="relative">
                                    <User size={19} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#D9AF6C]" />

                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="Enter your name"
                                        required
                                        className="w-full bg-[#172B30] border border-[#D9AF6C]/20 rounded-xl py-4 pl-12 pr-4 text-[#F5EBDD] placeholder:text-[#F5EBDD]/35 outline-none focus:border-[#D9AF6C] transition"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-[#D9AF6C] text-sm mb-2">
                                    Phone Number *
                                </label>

                                <div className="relative">
                                    <Phone size={19} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#D9AF6C]" />

                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        placeholder="Enter 10 digit number"
                                        pattern="[0-9]{10}"
                                        maxLength="10"
                                        required
                                        className="w-full bg-[#172B30] border border-[#D9AF6C]/20 rounded-xl py-4 pl-12 pr-4 text-[#F5EBDD] placeholder:text-[#F5EBDD]/35 outline-none focus:border-[#D9AF6C] transition"
                                    />
                                </div>
                            </div>

                        </div>

                        {/* Pickup & Drop */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                            <div>
                                <label className="block text-[#D9AF6C] text-sm mb-2">
                                    Pickup Location *
                                </label>

                                <div className="relative">
                                    <MapPin size={19} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#D9AF6C]" />

                                    <input
                                        type="text"
                                        name="pickup"
                                        value={formData.pickup}
                                        onChange={handleChange}
                                        placeholder="Enter pickup location"
                                        required
                                        className="w-full bg-[#172B30] border border-[#D9AF6C]/20 rounded-xl py-4 pl-12 pr-4 text-[#F5EBDD] placeholder:text-[#F5EBDD]/35 outline-none focus:border-[#D9AF6C] transition"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-[#D9AF6C] text-sm mb-2">
                                    Drop Location *
                                </label>

                                <div className="relative">
                                    <MapPin size={19} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#D9AF6C]" />

                                    <input
                                        type="text"
                                        name="drop"
                                        value={formData.drop}
                                        onChange={handleChange}
                                        placeholder="Enter destination"
                                        required
                                        className="w-full bg-[#172B30] border border-[#D9AF6C]/20 rounded-xl py-4 pl-12 pr-4 text-[#F5EBDD] placeholder:text-[#F5EBDD]/35 outline-none focus:border-[#D9AF6C] transition"
                                    />
                                </div>
                            </div>

                        </div>

                        {/* Date & Total Days */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                            <div>
                                <label className="block text-[#D9AF6C] text-sm mb-2">
                                    Journey Date *
                                </label>

                                <div className="relative">
                                    <CalendarDays size={19} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#D9AF6C]" />

                                    <input
                                        type="date"
                                        name="date"
                                        value={formData.date}
                                        onChange={handleChange}
                                        min={new Date().toISOString().split('T')[0]}
                                        required
                                        className="w-full bg-[#172B30] border border-[#D9AF6C]/20 rounded-xl py-4 pl-12 pr-4 text-[#F5EBDD] outline-none focus:border-[#D9AF6C] transition [color-scheme:dark]"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-[#D9AF6C] text-sm mb-2">
                                    Total Days *
                                </label>

                                <div className="relative">
                                    <Clock size={19} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#D9AF6C]" />

                                    <input
                                        type="number"
                                        name="totalDays"
                                        value={formData.totalDays}
                                        onChange={handleChange}
                                        placeholder="Enter total days"
                                        min="1"
                                        required
                                        className="w-full bg-[#172B30] border border-[#D9AF6C]/20 rounded-xl py-4 pl-12 pr-4 text-[#F5EBDD] placeholder:text-[#F5EBDD]/35 outline-none focus:border-[#D9AF6C] transition"
                                    />
                                </div>
                            </div>

                        </div>

                        {/* Car & Total Persons */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                            <div>
                                <label className="block text-[#D9AF6C] text-sm mb-2">
                                    Select Car *
                                </label>

                                <div className="relative">
                                    <CarFront size={19} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#D9AF6C]" />

                                    <select
                                        name="car"
                                        value={formData.car}
                                        onChange={handleChange}
                                        required
                                        className="w-full bg-[#172B30] border border-[#D9AF6C]/20 rounded-xl py-4 pl-12 pr-4 text-[#F5EBDD] outline-none focus:border-[#D9AF6C] transition"
                                    >
                                        <option value="">Select your car</option>
                                        <option value="Swift Dzire">Swift Dzire</option>
                                        <option value="Maruti Ertiga">Maruti Ertiga</option>
                                        <option value="Toyota Innova Crysta">Toyota Innova Crysta</option>
                                        <option value="Toyota Etios">Toyota Etios</option>
                                        <option value="Tuk Tuk">Tuk Tuk</option>
                                    </select>
                                </div>
                            </div>

                            <div>
                                <label className="block text-[#D9AF6C] text-sm mb-2">
                                    Total Persons *
                                </label>

                                <div className="relative">
                                    <Users size={19} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#D9AF6C]" />

                                    <input
                                        type="number"
                                        name="totalPerson"
                                        value={formData.totalPerson}
                                        onChange={handleChange}
                                        placeholder="Number of persons"
                                        min="1"
                                        required
                                        className="w-full bg-[#172B30] border border-[#D9AF6C]/20 rounded-xl py-4 pl-12 pr-4 text-[#F5EBDD] placeholder:text-[#F5EBDD]/35 outline-none focus:border-[#D9AF6C] transition"
                                    />
                                </div>
                            </div>

                        </div>

                        {/* Hotel Required */}
                        <div>

                            <label className="block text-[#D9AF6C] text-sm mb-3">
                                Hotel Required? *
                            </label>

                            <div className="flex gap-4">

                                {['Yes', 'No'].map((option) => (
                                    <label
                                        key={option}
                                        className={`flex-1 flex items-center justify-center gap-2 py-4 rounded-xl border cursor-pointer transition ${formData.hotel === option
                                            ? 'bg-[#D9AF6C] text-[#101F23] border-[#D9AF6C]'
                                            : 'bg-[#172B30] text-[#F5EBDD] border-[#D9AF6C]/20 hover:border-[#D9AF6C]'
                                            }`}
                                    >
                                        <input
                                            type="radio"
                                            name="hotel"
                                            value={option}
                                            checked={formData.hotel === option}
                                            onChange={handleChange}
                                            required
                                            className="accent-[#101F23]"
                                        />

                                        <Hotel size={18} />
                                        <span className="font-semibold">{option}</span>
                                    </label>
                                ))}

                            </div>
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="w-full bg-[#D9AF6C] text-[#101F23] py-4 rounded-full font-bold flex items-center justify-center gap-3 hover:bg-[#F5EBDD] transition duration-300 shadow-lg"
                        >
                            <Send size={19} />
                            Submit Your Trip Details
                        </button>

                    </form>

                    {/* Success Message */}
                    {submitted && (
                        <div className="mt-7 bg-[#D9AF6C]/10 border border-[#D9AF6C]/40 rounded-2xl p-5 flex gap-3 items-start">

                            <CheckCircle2
                                size={25}
                                className="text-[#D9AF6C] shrink-0 mt-1"
                            />

                            <div>
                                <h3 className="text-[#D9AF6C] font-semibold text-lg mb-2">
                                    Thank You For Choosing A2 Z!
                                </h3>

                                <p className="text-[#F5EBDD]/80 text-sm leading-7">
                                    Thank you for submitting your trip enquiry.
                                    Our travel experts will contact you shortly
                                    to discuss your travel requirements, available
                                    vehicle options, hotel arrangements and pricing.
                                    We will help you choose the best option for
                                    a comfortable and memorable journey.
                                </p>
                            </div>

                        </div>
                    )}

                </div>

            </div>

        </section>
    )
}

export default Book
