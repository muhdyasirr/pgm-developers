'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, EffectFade, Autoplay } from 'swiper/modules'
import type { Swiper as SwiperType } from 'swiper'
import 'swiper/css'
import 'swiper/css/effect-fade'
import ScrollReveal from './ScrollReveal'

const slides = [
    {
        image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=900&q=80',
        category: 'Residential',
        title: 'The Grandeur Residences',
        description:
            'A landmark residential tower featuring 280 premium apartments with panoramic city views, rooftop amenity deck, and concierge services.',
        year: '2023',
        location: 'Hyderabad',
    },
    {
        image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=900&q=80',
        category: 'Commercial',
        title: 'Skyline Business Hub',
        description:
            'A Grade-A commercial complex spanning 4 lakh sq. ft., housing Fortune 500 tenants with LEED Platinum certification.',
        year: '2022',
        location: 'Bangalore',
    },
    {
        image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=900&q=80',
        category: 'Mixed-Use',
        title: 'Nexus City Center',
        description:
            'An integrated township blending retail, hospitality, and residential components across 18 acres of prime urban land.',
        year: '2021',
        location: 'Pune',
    },
]

export default function SideImageSlider() {
    const swiperRef = useRef<SwiperType | null>(null)
    const prevId = 'side-slider-prev'
    const nextId = 'side-slider-next'

    return (
        <section id="featured" className="bg-light py-0 overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[85vh]">
                {/* Left: Image */}
                <div className="relative min-h-[50vh] lg:min-h-full">
                    <Swiper
                        modules={[Navigation, EffectFade, Autoplay]}
                        effect="fade"
                        autoplay={{ delay: 6000, disableOnInteraction: false }}
                        loop
                        navigation={{ prevEl: `#${prevId}`, nextEl: `#${nextId}` }}
                        className="h-full w-full"
                        style={{ height: '100%', minHeight: '50vh' }}
                        onSwiper={(swiper) => {
                            swiperRef.current = swiper
                        }}
                    >
                        {slides.map((s, i) => (
                            <SwiperSlide key={i} className="relative">
                                <Image
                                    src={s.image}
                                    alt={s.title}
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 1024px) 100vw, 50vw"
                                />
                                <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent" />
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    {/* Navigation arrows on image */}
                    <div className="absolute bottom-8 right-8 z-10 flex items-center gap-3">
                        <button
                            id={prevId}
                            className="w-12 h-12 border border-white/30 flex items-center justify-center text-white hover:bg-gold hover:border-gold transition-all duration-300"
                        >
                            <ArrowLeft size={18} />
                        </button>
                        <button
                            id={nextId}
                            className="w-12 h-12 border border-white/30 flex items-center justify-center text-white hover:bg-gold hover:border-gold transition-all duration-300"
                        >
                            <ArrowRight size={18} />
                        </button>
                    </div>
                </div>

                {/* Right: Text content - mirrors swiper active index */}
                <div className="bg-light-3 flex items-center px-10 md:px-16 py-20 lg:py-0">
                    <div className="max-w-lg">
                        <ScrollReveal>
                            <div className="flex items-center gap-4 mb-8">
                                <div className="w-8 h-px bg-gold" />
                                <span className="text-gold text-xs font-semibold tracking-[0.3em] uppercase">
                                    Featured Projects
                                </span>
                            </div>
                        </ScrollReveal>
                        <ScrollReveal delay={0.1}>
                            <h2 className="text-4xl md:text-5xl font-black leading-tight mb-6 text-dark">
                                Projects That{' '}
                                <span className="text-gold font-display italic">Define</span>{' '}
                                Skylines
                            </h2>
                        </ScrollReveal>

                        {slides.map((slide, index) => (
                            <SwiperContentPanel key={index} slide={slide} index={index} />
                        ))}

                        <ScrollReveal delay={0.4}>
                            <a
                                href="#projects"
                                onClick={(e) => {
                                    e.preventDefault()
                                    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })
                                }}
                                className="mt-10 inline-flex items-center gap-3 text-gold text-sm font-semibold tracking-widest uppercase group"
                            >
                                <span>All Projects</span>
                                <span className="w-8 h-px bg-gold group-hover:w-16 transition-all duration-500" />
                            </a>
                        </ScrollReveal>
                    </div>
                </div>
            </div>
        </section>
    )
}

function SwiperContentPanel({
    slide,
    index,
}: {
    slide: (typeof slides)[0]
    index: number
}) {
    // Show only the first slide panel statically (swiper handles the image)
    if (index !== 0) return null

    return (
        <div>
            <ScrollReveal delay={0.2}>
                <span className="text-xs font-medium tracking-[0.25em] uppercase text-gray-text mb-2 block">
                    {slide.category} · {slide.location} · {slide.year}
                </span>
                <h3 className="text-2xl font-bold text-dark mb-4">{slide.title}</h3>
                <p className="text-gray-text font-light leading-relaxed">{slide.description}</p>
            </ScrollReveal>
        </div>
    )
}
