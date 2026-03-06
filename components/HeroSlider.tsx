'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { gsap } from 'gsap'
import { ChevronDown } from 'lucide-react'
import { useEnquiry } from '@/context/EnquiryContext'

const slide = {
    tag: 'Trusted Developer',
    heading: ['Innovation.', 'Quality.', 'Satisfaction.'],
    sub: 'Our resolute commitment to innovation, quality, and customer satisfaction.',
}

const features = [
    { label: 'STARTING PRICE ₹ 6.75 CR*' },
    { label: 'DISCOUNTS UPTO ₹ 50 LACS*' },
    { label: 'PAYMENT PLAN 25:75' },
    { label: 'PAY ONLY 25%*' },
]

export default function HeroSection() {
    const [animating, setAnimating] = useState(false)
    const { open: openEnquiry } = useEnquiry()
    const headingRefs = useRef<(HTMLSpanElement | null)[]>([])
    const tagRef = useRef<HTMLSpanElement>(null)
    const subRef = useRef<HTMLParagraphElement>(null)
    const btnRef = useRef<HTMLDivElement>(null)
    const barRef = useRef<HTMLDivElement>(null)

    const runEntrance = () => {
        setAnimating(true)
        const tl = gsap.timeline({ onComplete: () => setAnimating(false) })

        gsap.set([tagRef.current, subRef.current, btnRef.current], { opacity: 0, y: 20 })
        gsap.set(headingRefs.current.filter(Boolean), { y: '110%' })

        if (barRef.current) {
            gsap.fromTo(barRef.current, { scaleX: 0, transformOrigin: 'left center' }, { scaleX: 1, duration: 0.5, ease: 'power3.out' })
        }
        tl.to(tagRef.current, { opacity: 1, y: 0, duration: 0.6 }, 0.2)
        tl.to(headingRefs.current.filter(Boolean), { y: '0%', duration: 0.9, stagger: 0.12, ease: 'expo.out' }, 0.35)
        tl.to(subRef.current, { opacity: 1, y: 0, duration: 0.6 }, 0.7)
        tl.to(btnRef.current, { opacity: 1, y: 0, duration: 0.6 }, 0.85)
    }

    useEffect(() => { runEntrance() }, [])

    return (
        <section className="relative h-screen w-full overflow-hidden" id="home">
            {/* Background Image */}
            <div className="absolute inset-0 z-10">
                <Image
                    src="/14 CLUB HOUSE 01.jpeg"
                    alt="Club House"
                    fill priority
                    className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-black/10" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </div>

            {/* Content */}
            <div className="relative z-20 h-full flex items-center px-8 md:px-16 lg:px-24 max-w-7xl">
                <div className="max-w-3xl">
                    {/* Tag */}
                    <span ref={tagRef} className="inline-flex items-center gap-2 mb-6 opacity-0" style={{ fontFamily: 'Inter, sans-serif', fontSize: '10px', letterSpacing: '0.28em', textTransform: 'uppercase', fontWeight: 500, color: '#c2a06a' }}>
                        <span ref={barRef} className="inline-block w-8 h-px bg-gold origin-left" />
                        {slide.tag}
                    </span>

                    {/* Heading — Cormorant Garamond */}
                    <h1 className="overflow-hidden mb-6">
                        {slide.heading.map((line, i) => (
                            <span key={i} className="block overflow-hidden" style={{ lineHeight: 1.05 }}>
                                <span
                                    ref={(el) => { headingRefs.current[i] = el }}
                                    className="block translate-y-full text-white"
                                    style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(48px, 8vw, 96px)', fontWeight: 700, letterSpacing: '-0.01em', fontStyle: i === 1 ? 'italic' : 'normal' }}
                                >
                                    {line}
                                </span>
                            </span>
                        ))}
                    </h1>

                    {/* Sub */}
                    <p ref={subRef} className="text-white/70 max-w-md mb-10 opacity-0" style={{ fontFamily: 'Inter, sans-serif', fontSize: '15px', lineHeight: 1.85, fontWeight: 300 }}>
                        {slide.sub}
                    </p>

                    {/* Buttons */}
                    <div ref={btnRef} className="flex items-center gap-4 opacity-0">
                        <a href="#" onClick={(e) => { e.preventDefault(); openEnquiry() }} className="lux-btn-filled">
                            Enquire Now
                        </a>
                        {/* <a href="#" onClick={(e) => { e.preventDefault(); openEnquiry() }} className="lux-btn" style={{ color: 'white', borderColor: 'rgba(255,255,255,0.35)' }}
                            onMouseEnter={e => {
                                const el = e.currentTarget
                                el.style.background = 'rgba(255,255,255,0.12)'
                                el.style.borderColor = 'rgba(255,255,255,0.7)'
                            }}
                            onMouseLeave={e => {
                                const el = e.currentTarget
                                el.style.background = 'transparent'
                                el.style.borderColor = 'rgba(255,255,255,0.35)'
                            }}>
                            Discover More
                        </a> */}
                    </div>
                </div>
            </div>

            {/* Pricing Boxes — glassmorphism */}
            <div className="absolute bottom-24 md:bottom-28 lg:bottom-32 right-0 z-20 w-full px-8 md:px-16 lg:px-24 flex justify-end">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 w-full md:w-[75%] lg:w-[65%] xl:w-[55%]">
                    {features.map((feature, i) => (
                        <div key={i} className="group relative overflow-hidden flex flex-col items-center justify-center text-center p-5 md:p-6"
                            style={{
                                background: 'rgba(255,252,248,0.12)',
                                backdropFilter: 'blur(16px) saturate(150%)',
                                WebkitBackdropFilter: 'blur(16px) saturate(150%)',
                                border: '1px solid rgba(194,160,106,0.25)',
                                transition: 'all 0.4s ease',
                            }}
                            onMouseEnter={e => {
                                const el = e.currentTarget
                                el.style.background = 'rgba(255,252,248,0.88)'
                                el.style.borderColor = 'rgba(194,160,106,0.55)'
                                el.style.transform = 'translateY(-2px)'
                            }}
                            onMouseLeave={e => {
                                const el = e.currentTarget
                                el.style.background = 'rgba(255,252,248,0.12)'
                                el.style.borderColor = 'rgba(194,160,106,0.25)'
                                el.style.transform = 'translateY(0)'
                            }}
                        >
                            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '11px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#0a0a0a' }}>
                                {feature.label}
                            </p>
                            <div className="w-8 h-px bg-gold mt-3 group-hover:w-full transition-all duration-700" />
                        </div>
                    ))}
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-white/40">
                <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '8px', letterSpacing: '0.25em', textTransform: 'uppercase' }}>Scroll</span>
                <ChevronDown size={14} className="animate-bounce" />
            </div>
        </section>
    )
}