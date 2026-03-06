'use client'

import { useRef, useState } from 'react'
import Image from 'next/image'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, EffectFade, Autoplay } from 'swiper/modules'
import type { Swiper as SwiperType } from 'swiper'
import 'swiper/css'
import 'swiper/css/effect-fade'
import ScrollReveal from './ScrollReveal'
import { useEnquiry } from '@/context/EnquiryContext'

const slides = [
    { image: '/02 VILLA 01.jpg.jpeg', category: 'Residential', title: 'Luxury Villa Series', description: 'A premium collection of high-end villas designed with modern aesthetics and sustainable architecture in the heart of Kerala.', year: '2024', location: 'Kerala' },
    { image: '/03 VILLA 02.jpg.jpeg', category: 'Architectural', title: 'Modern Living Spaces', description: 'Experience contemporary living with open-plan designs, smart home integration, and breathtaking views of the surrounding landscape.', year: '2024', location: 'Kerala' },
    { image: '/04 BACK VIEW -CLUB AND RIVER.jpg.jpeg', category: 'Leisure', title: 'Riverfront Club House', description: 'Our signature club house offering world-class amenities, fitness centers, and recreational spaces with a stunning river backdrop.', year: '2023', location: 'Kerala' },
    { image: '/06 VILLA_Living2.jpg.jpeg', category: 'Interiors', title: 'Premium Living Rooms', description: 'Spacious and elegantly designed interiors that blend comfort with luxury, using high-quality materials and bespoke finishes.', year: '2024', location: 'Kerala' },
    { image: '/09 VILLA_bedroom1.jpg.jpeg', category: 'Private Spaces', title: 'Elegant Bedrooms', description: 'Private sanctuaries designed for ultimate relaxation, featuring master suites with ensuite facilities and ergonomic layouts.', year: '2024', location: 'Kerala' },
    { image: '/17 POOL 05.jpg.jpeg', category: 'Amenities', title: 'Infinity Pool Deck', description: 'A luxurious infinity pool overlooking the valley, designed for rejuvenation and leisure in a serene tropical setting.', year: '2023', location: 'Kerala' },
]

export default function SideImageSlider() {
    const swiperRef = useRef<SwiperType | null>(null)
    const [activeIndex, setActiveIndex] = useState(0)
    const { open: openEnquiry } = useEnquiry()
    const prevId = 'side-slider-prev'
    const nextId = 'side-slider-next'

    return (
        <section id="featured" className="overflow-hidden" style={{ background: '#fefcf8' }}>
            <div className="grid grid-cols-1 lg:grid-cols-2" style={{ minHeight: '80vh' }}>
                {/* Left: Image */}
                <div className="relative" style={{ minHeight: '50vh' }}>
                    <Swiper
                        modules={[Navigation, EffectFade, Autoplay]}
                        effect="fade"
                        autoplay={{ delay: 6000, disableOnInteraction: false }}
                        loop
                        navigation={{ prevEl: `#${prevId}`, nextEl: `#${nextId}` }}
                        className="h-full w-full"
                        style={{ height: '100%', minHeight: '50vh' }}
                        onSwiper={(swiper) => { swiperRef.current = swiper }}
                        onSlideChange={(swiper) => { setActiveIndex(swiper.realIndex) }}
                    >
                        {slides.map((s, i) => (
                            <SwiperSlide key={i} className="relative">
                                <Image src={s.image} alt={s.title} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
                                <div className="absolute inset-0 bg-gradient-to-r from-black/15 to-transparent" />
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    {/* Navigation arrows — glass style */}
                    <div className="absolute bottom-8 right-8 z-10 flex items-center gap-3">
                        <button id={prevId} className="w-12 h-12 flex items-center justify-center transition-all duration-300 glass-panel hover:bg-gold hover:border-gold group"
                            style={{ borderRadius: '50%' }}>
                            <ArrowLeft size={16} className="text-white group-hover:text-dark transition-colors" />
                        </button>
                        <button id={nextId} className="w-12 h-12 flex items-center justify-center transition-all duration-300 glass-panel hover:bg-gold hover:border-gold group"
                            style={{ borderRadius: '50%' }}>
                            <ArrowRight size={16} className="text-white group-hover:text-dark transition-colors" />
                        </button>
                    </div>
                </div>

                {/* Right: Text */}
                <div className="flex items-center px-6 sm:px-10 md:px-14 py-14 lg:py-0" style={{ background: 'linear-gradient(150deg, #fefcf8 0%, #faf7f2 100%)' }}>
                    <div className="max-w-lg">
                        <ScrollReveal>
                            <div className="flex items-center gap-4 mb-8">
                                <div className="w-8 h-px bg-gold" />
                                <span className="lux-label">Featured Projects</span>
                            </div>
                        </ScrollReveal>
                        <ScrollReveal delay={0.1}>
                            <h2 className="mb-8" style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(36px, 4.5vw, 58px)', fontWeight: 700, color: '#0a0a0a', lineHeight: 1.05 }}>
                                Projects That{' '}
                                <em style={{ fontStyle: 'italic', color: '#c2a06a' }}>Define</em>{' '}
                                Skylines
                            </h2>
                        </ScrollReveal>

                        {slides.map((slide, index) => (
                            index === activeIndex ? (
                                <ScrollReveal key={index} delay={0.2}>
                                    <div className="clay-card p-6 mb-8">
                                        <span className="lux-label mb-2 block" style={{ color: '#6b7280', fontSize: '12px' }}>
                                            {slide.category} · {slide.location} · {slide.year}
                                        </span>
                                        <h3 className="mb-3" style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '26px', fontWeight: 700, color: '#0a0a0a' }}>
                                            {slide.title}
                                        </h3>
                                        <p className="lux-body" style={{ fontSize: '17px' }}>{slide.description}</p>
                                    </div>
                                </ScrollReveal>
                            ) : null
                        ))}

                        <ScrollReveal delay={0.4}>
                            <a href="#" onClick={(e) => { e.preventDefault(); openEnquiry() }}
                                className="lux-btn">
                                Enquire Now <span>↗</span>
                            </a>
                        </ScrollReveal>
                    </div>
                </div>
            </div>
        </section>
    )
}
