
import React, { useState } from 'react'
import { MessageCircle, User, Phone, MapPin, Send, Gift } from 'lucide-react'

const Advisor = () => {

    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        tripDetails: ''
    })

    // A 2 Z WhatsApp Number
    const whatsappNumber = '918955229556'

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const message = `
Hello A 2 Z Tours & Travels!

I want a Free Trip Advisor consultation.

Name: ${formData.name}
Phone Number: ${formData.phone}

Trip Details:
${formData.tripDetails}

Please contact me regarding my trip.

Thank You!
        `

        const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`

        window.open(whatsappURL, '_blank', 'noopener,noreferrer')

        setFormData({
            name: '',
            phone: '',
            tripDetails: ''
        })
    }

    return (
        <section className="w-full bg-[#F5EBDD] px-5 md:px-10 py-16 md:py-20">

            <div className="max-w-7xl mx-auto">

                {/* Heading */}
                <div className="text-center mb-12">

                    <p className="text-[#70462E] text-xs md:text-sm tracking-[4px] uppercase font-semibold mb-3">
                        A 2 Z Tours & Travels
                    </p>

                    <h2 className="text-3xl md:text-5xl font-serif font-bold text-[#101F23]">
                        Book a Trip <span className="text-[#D9AF6C]">Advisor</span>
                    </h2>

                    <p className="text-[#70462E]/80 text-sm md:text-base mt-4">
                        Get expert travel guidance and plan your perfect journey.
                    </p>

                    <div className="w-20 h-[2px] bg-[#D9AF6C] mx-auto mt-5"></div>

                </div>

                {/* Form Container */}
                <div className="max-w-2xl mx-auto bg-[#101F23] rounded-3xl p-6 md:p-10 shadow-xl border border-[#D9AF6C]/30">

                    {/* Free Advisor Badge */}
                    <div className="flex justify-center mb-7">

                        <div className="flex items-center gap-2 bg-[#D9AF6C]/15 border border-[#D9AF6C]/30 px-5 py-2 rounded-full text-[#D9AF6C]">

                            <Gift size={17} />

                            <span className="text-xs md:text-sm font-semibold tracking-wide">
                                FREE OF COST
                            </span>

                        </div>

                    </div>

                    <h3 className="text-2xl md:text-3xl font-serif text-center text-[#F5EBDD] mb-2">
                        Plan Your Next Trip
                    </h3>

                    <p className="text-center text-[#F5EBDD]/50 text-sm mb-8">
                        Fill in your details and our travel advisor will contact you.
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-6">

                        {/* Name */}
                        <div>

                            <label className="block text-[#D9AF6C] text-sm mb-2 font-medium">
                                Your Name
                            </label>

                            <div className="relative">

                                <User
                                    size={19}
                                    className="absolute left-4 top-1/2 -translate-y-1/2 text-[#D9AF6C]"
                                />

                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Enter your full name"
                                    required
                                    className="w-full bg-[#172B30] border border-[#D9AF6C]/20 rounded-xl py-4 pl-12 pr-4 text-[#F5EBDD] placeholder:text-[#F5EBDD]/35 outline-none focus:border-[#D9AF6C] transition"
                                />

                            </div>

                        </div>

                        {/* Phone */}
                        <div>

                            <label className="block text-[#D9AF6C] text-sm mb-2 font-medium">
                                Phone Number
                            </label>

                            <div className="relative">

                                <Phone
                                    size={19}
                                    className="absolute left-4 top-1/2 -translate-y-1/2 text-[#D9AF6C]"
                                />

                                <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    placeholder="Enter your phone number"
                                    pattern="[0-9]{10}"
                                    maxLength="10"
                                    required
                                    className="w-full bg-[#172B30] border border-[#D9AF6C]/20 rounded-xl py-4 pl-12 pr-4 text-[#F5EBDD] placeholder:text-[#F5EBDD]/35 outline-none focus:border-[#D9AF6C] transition"
                                />

                            </div>

                        </div>

                        {/* Trip Details */}
                        <div>

                            <label className="block text-[#D9AF6C] text-sm mb-2 font-medium">
                                Trip Details
                            </label>

                            <div className="relative">

                                <MapPin
                                    size={19}
                                    className="absolute left-4 top-4 text-[#D9AF6C]"
                                />

                                <textarea
                                    name="tripDetails"
                                    value={formData.tripDetails}
                                    onChange={handleChange}
                                    placeholder="Where do you want to travel? Mention destination, travel dates, number of people and other details..."
                                    rows="5"
                                    required
                                    className="w-full bg-[#172B30] border border-[#D9AF6C]/20 rounded-xl py-4 pl-12 pr-4 text-[#F5EBDD] placeholder:text-[#F5EBDD]/35 outline-none focus:border-[#D9AF6C] transition resize-none"
                                />

                            </div>

                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="w-full bg-[#D9AF6C] text-[#101F23] py-4 rounded-full font-bold flex items-center justify-center gap-3 hover:bg-[#F5EBDD] transition duration-300 shadow-lg"
                        >
                            <MessageCircle size={20} />
                            Send Enquiry on WhatsApp
                            <Send size={17} />
                        </button>

                    </form>

                    <p className="text-center text-[#F5EBDD]/40 text-xs mt-6">
                        Your trip planning assistance is absolutely free!
                    </p>

                </div>

            </div>

        </section>
    )
}

export default Advisor
