
import React from 'react'
import { Link } from 'react-router-dom'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/pagination'

const heroData = [
    {
        id: 1,
        title: 'Discover The Divine Beauty Of Kedarnath',
        description: 'Experience the breathtaking Himalayan mountains and spiritual beauty of Kedarnath.',
        image: 'https://images.openai.com/static-rsc-4/oDfUllcnH2RFyJIdGF9xj-yvtDJmhgUFZM6LepLBl0D0NKCagFzvvQTm6_fwb7hH8cUzHWKKY-BQw6Rkr2M59iNOP1RlCuXeXbsJgNy2gP-sPSkGkgumi6kjciuZ6ieOryhruTd322F6lAPCUiDcJ3OJC7G8Wqj66bXOJxvdrLmJjXlpnzv86rYasLZtc71q?purpose=fullsize',
        badgeTitle: 'Spiritual Mountain Journey',
        badgeName: 'Kedarnath, Uttarakhand'
    },
    {
        id: 2,
        title: 'Discover The Beauty Of Rajasthan',
        description: 'Explore royal palaces, colorful markets and the timeless culture of incredible Rajasthan.',
        image: 'https://images.unsplash.com/photo-1599661046827-dacff0c0f09a?auto=format&fit=crop&w=1400&q=85',
        badgeTitle: 'Royal Heritage',
        badgeName: 'Jaipur, Rajasthan'
    },
    {
        id: 3,
        title: 'Experience The Magic Of Varanasi',
        description: 'Discover spiritual traditions, peaceful river views and unforgettable moments along the Ganges.',
        image: 'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&w=1400&q=85',
        badgeTitle: 'Spiritual Journey',
        badgeName: 'Varanasi, India'
    },
    {
        id: 4,
        title: 'Find Peace In The Himalayas',
        description: 'Experience breathtaking mountains, fresh air and beautiful landscapes on your next adventure.',
        image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1400&q=85',
        badgeTitle: 'Mountain Adventure',
        badgeName: 'Himalayas, India'
    },
    {
        id: 5,
        title: 'Explore The Wonders Of India',
        description: 'Discover incredible destinations, rich heritage and unforgettable journeys across India.',
        image: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=1400&q=85',
        badgeTitle: 'Incredible India',
        badgeName: 'Explore India'
    }
]

const Hero = () => {
    return (
        <div className="px-4 md:px-10 py-5 bg-[#F5EBDD]">

            <Swiper
                modules={[Autoplay, Pagination]}
                slidesPerView={1}
                spaceBetween={20}
                loop={true}
                speed={900}
                pagination={{ clickable: true }}
                autoplay={{
                    delay: 3500,
                    disableOnInteraction: false
                }}
                className="heroSwiper"
            >

                {heroData.map((e) => (
                    <SwiperSlide key={e.id}>

                        <div className="relative bg-[#101F23] border border-[#70462E]/30 rounded-2xl min-h-[600px] md:min-h-[550px] grid grid-cols-1 md:grid-cols-2 items-center overflow-hidden">

                            {/* Left Content */}
                            <div className="p-8 md:pl-16 md:pr-5 py-12 z-10">

                                <p className="text-[#D9AF6C] uppercase tracking-[4px] text-xs md:text-sm font-semibold mb-5">
                                    {e.badgeTitle}
                                </p>

                                <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-[#F5EBDD] leading-[1.1] max-w-xl">
                                    {e.title}
                                </h1>

                                <p className="text-[#F5EBDD]/65 mt-6 text-base md:text-lg max-w-md leading-relaxed">
                                    {e.description}
                                </p>

                                <Link
                                    to="/services"
                                    className="mt-8 bg-[#D9AF6C] text-[#101F23] w-fit px-9 py-4 rounded-full font-semibold flex items-center gap-5 hover:bg-[#F5EBDD] cursor-pointer transition duration-300"
                                >
                                    Explore Now
                                    <span className="text-xl">→</span>
                                </Link>

                            </div>

                            {/* Right Image */}
                            <div className="relative h-[320px] md:h-[550px] flex items-center justify-center p-5 md:p-8 overflow-hidden">

                                <div className="absolute w-[260px] h-[260px] md:w-[400px] md:h-[400px] bg-[#D9AF6C]/15 rounded-full blur-3xl"></div>

                                <img
                                    src={e.image}
                                    alt={e.badgeName}
                                    className="relative z-10 w-full h-full object-cover rounded-xl border border-[#D9AF6C]/20 hover:scale-105 transition duration-700"
                                />

                                {/* Image Badge */}
                                <div className="absolute bottom-7 right-5 md:bottom-12 md:right-12 z-20 bg-[#101F23]/95 backdrop-blur-sm border border-[#D9AF6C]/30 text-[#F5EBDD] px-5 py-4 rounded-xl shadow-xl">

                                    <p className="text-[#D9AF6C] text-xs mb-1">
                                        {e.badgeTitle}
                                    </p>

                                    <h3 className="font-serif text-sm md:text-base">
                                        {e.badgeName}
                                    </h3>

                                </div>

                            </div>

                        </div>

                    </SwiperSlide>
                ))}

            </Swiper>

            {/* Slider Styling */}
            <style>{`
                .heroSwiper .swiper-pagination {
                    bottom: 18px !important;
                }

                .heroSwiper .swiper-pagination-bullet {
                    background: #70462E;
                    opacity: 0.6;
                }

                .heroSwiper .swiper-pagination-bullet-active {
                    background: #D9AF6C;
                    width: 25px;
                    border-radius: 10px;
                    opacity: 1;
                }
            `}</style>

        </div>
    )
}

export default Hero
