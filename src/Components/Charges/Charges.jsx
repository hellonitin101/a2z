
import React from 'react'
import {
    CircleAlert,
    Gift,
    Droplets,
    MapPin,
    UserRoundCheck,
    CheckCircle2
} from 'lucide-react'

const Charges = () => {

    const extraCharges = [
        'Toll Tax',
        'Applicable Taxes',
        'Parking Charges',
        'Driver Allowance after 10:00 PM'
    ]

    const freeBenefits = [
        {
            icon: <Droplets size={21} />,
            title: 'Free Drinking Water',
            description: 'Complimentary drinking water during your journey.'
        },
        {
            icon: <UserRoundCheck size={21} />,
            title: 'Company Tour Guide',
            description: 'A company guide at no extra cost with a minimum 3-day tour package.'
        },
        {
            icon: <MapPin size={21} />,
            title: 'Local Sightseeing',
            description: 'Cover local destinations without any extra charges of Car.'
        }
    ]

    return (
        <section className="w-full bg-[#F5EBDD] px-5 md:px-10 py-16">

            <div className="max-w-7xl mx-auto">

                {/* Heading */}
                <div className="text-center mb-12">

                    <h2 className="text-3xl md:text-5xl font-serif font-bold text-[#101F23]">
                        Charges & <span className="text-[#D9AF6C]">Benefits</span>
                    </h2>

                    <p className="text-[#70462E]/80 text-sm md:text-base max-w-2xl mx-auto mt-4 leading-7">
                        Know about additional travel charges and enjoy
                        complimentary benefits with A 2 Z Tours & Travels.
                    </p>

                    <div className="w-20 h-[2px] bg-[#D9AF6C] mx-auto mt-5"></div>

                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-7">

                    {/* Extra Charges */}
                    <div className="bg-[#101F23] rounded-2xl p-7 md:p-9 border border-[#70462E]/30 shadow-lg">

                        <div className="flex items-center gap-4 mb-8">

                            <div className="w-12 h-12 rounded-full bg-[#D9AF6C]/15 flex items-center justify-center text-[#D9AF6C]">
                                <CircleAlert size={23} />
                            </div>

                            <div>
                                <h3 className="text-2xl font-serif font-bold text-[#F5EBDD]">
                                    Extra <span className="text-[#D9AF6C]">Charges</span>
                                </h3>

                                <p className="text-[#F5EBDD]/50 text-xs mt-1">
                                    Additional charges as applicable
                                </p>
                            </div>

                        </div>

                        <div className="space-y-5">

                            {extraCharges.map((charge, index) => (

                                <div
                                    key={index}
                                    className="flex items-center gap-3 border-b border-[#D9AF6C]/15 pb-4 last:border-0 last:pb-0"
                                >

                                    <CheckCircle2
                                        size={19}
                                        className="text-[#D9AF6C] shrink-0"
                                    />

                                    <p className="text-[#F5EBDD]/80 text-sm md:text-base">
                                        {charge}
                                    </p>

                                </div>

                            ))}

                        </div>

                    </div>

                    {/* Free Benefits */}
                    <div className="bg-[#101F23] rounded-2xl p-7 md:p-9 border border-[#D9AF6C]/30 shadow-lg">

                        <div className="flex items-center gap-4 mb-8">

                            <div className="w-12 h-12 rounded-full bg-[#D9AF6C]/15 flex items-center justify-center text-[#D9AF6C]">
                                <Gift size={23} />
                            </div>

                            <div>
                                <h3 className="text-2xl font-serif font-bold text-[#F5EBDD]">
                                    Complimentary <span className="text-[#D9AF6C]">Benefits</span>
                                </h3>

                                <p className="text-[#F5EBDD]/50 text-xs mt-1">
                                    Enjoy these benefits at no extra cost
                                </p>
                            </div>

                        </div>

                        <div className="space-y-6">

                            {freeBenefits.map((benefit, index) => (

                                <div
                                    key={index}
                                    className="flex items-start gap-4"
                                >

                                    <div className="w-11 h-11 shrink-0 rounded-full bg-[#D9AF6C]/15 flex items-center justify-center text-[#D9AF6C]">
                                        {benefit.icon}
                                    </div>

                                    <div>
                                        <h4 className="text-[#F5EBDD] font-semibold text-sm md:text-base">
                                            {benefit.title}
                                        </h4>

                                        <p className="text-[#F5EBDD]/55 text-xs md:text-sm leading-6 mt-1">
                                            {benefit.description}
                                        </p>
                                    </div>

                                </div>

                            ))}

                        </div>

                    </div>

                </div>

            </div>

        </section>
    )
}

export default Charges
