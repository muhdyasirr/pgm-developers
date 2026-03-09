'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { gsap } from 'gsap'
import { ChevronDown } from 'lucide-react'
import { useEnquiry } from '@/context/EnquiryContext'

const slide = {
    tag: 'Trusted Developer',
    heading: ['Where refined living', 'meets serenity.'],
}

const features = [
    { label: 'STARTING PRICE 80 LAKHS' },
    { label: 'FREE SOLAR SYSTEM ' },
    { label: 'BANK LOAN FACILITY' },
    { label: 'PAY ONLY 15%*' },
]

export default function HeroSection() {
    const { open: openEnquiry } = useEnquiry()
    const headingRefs = useRef<(HTMLSpanElement | null)[]>([])
    const tagRef = useRef<HTMLSpanElement>(null)
    const subRef = useRef<HTMLParagraphElement>(null)
    const btnRef = useRef<HTMLDivElement>(null)
    const barRef = useRef<HTMLDivElement>(null)
    const boxRef = useRef<HTMLDivElement>(null)

    const runEntrance = () => {
        const tl = gsap.timeline()

        gsap.set([tagRef.current, subRef.current, btnRef.current, boxRef.current], { opacity: 0, y: 24 })
        gsap.set(headingRefs.current.filter(Boolean), { y: '110%' })

        if (barRef.current) {
            gsap.fromTo(barRef.current, { scaleX: 0, transformOrigin: 'left center' }, { scaleX: 1, duration: 0.5, ease: 'power3.out' })
        }
        tl.to(tagRef.current, { opacity: 1, y: 0, duration: 0.6 }, 0.2)
        tl.to(headingRefs.current.filter(Boolean), { y: '0%', duration: 0.9, stagger: 0.12, ease: 'expo.out' }, 0.35)
        tl.to(subRef.current, { opacity: 1, y: 0, duration: 0.6 }, 0.7)
        tl.to(btnRef.current, { opacity: 1, y: 0, duration: 0.5 }, 0.85)
        tl.to(boxRef.current, { opacity: 1, y: 0, duration: 0.6 }, 1.0)
    }

    useEffect(() => { runEntrance() }, [])

    return (
        <section className="relative w-full overflow-hidden" id="home" style={{ minHeight: '100svh' }}>
            {/* Background Image */}
            <div className="absolute inset-0 z-10">
                <Image
                    src="/14 CLUB HOUSE 01.jpeg"
                    alt="Club House"
                    fill priority
                    className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/40 to-black/15" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </div>

            {/* RERA info — absolute far right, desktop only */}
            <div className="hidden md:flex absolute right-0 top-32 items-center gap-3 z-30 pr-4 lg:pr-8">
                {/* Text block (right-aligned) */}
                <div className="flex flex-col items-end justify-center text-right">
                    <p style={{
                        fontFamily: 'Inter, sans-serif',
                        fontSize: '11px',
                        fontWeight: 500,
                        color: 'white',
                        letterSpacing: '0.05em',
                        textTransform: 'uppercase',
                        marginBottom: '4px'
                    }}>
                        K-RERA/PRJ/PKD/071/2024
                    </p>
                    <p style={{
                        fontFamily: 'Inter, sans-serif',
                        fontSize: '10px',
                        color: 'rgba(255,255,255,0.7)',
                        marginBottom: '2px'
                    }}>
                        rera.kerala.gov.in
                    </p>
                    <p style={{
                        fontFamily: 'Inter, sans-serif',
                        fontSize: '10px',
                        color: 'rgba(255,255,255,0.7)'
                    }}>
                        www.pgmdevelopers.com
                    </p>
                </div>

                {/* QR Code */}
                <div className="bg-transparent p-1.5 rounded-sm">
                    <Image
                        src="/qr.png"
                        alt="RERA QR Code"
                        width={110}
                        height={110}
                        className="object-contain"
                        style={{ display: 'block' }}
                    />
                </div>
            </div>

            {/* Content — stacks vertically on mobile */}
            <div className="relative z-20 flex flex-col justify-between min-h-[100svh] px-5 sm:px-8 md:px-14 lg:px-20 pt-28 pb-6 sm:pt-32 max-w-7xl mx-auto w-full">

                {/* Top: headline block */}
                <div className="flex-1 flex flex-col justify-center">
                    {/* Tag */}
                    <span ref={tagRef} className="inline-flex items-center gap-2 mb-5 sm:mb-6 opacity-0"
                        style={{ fontFamily: 'Inter, sans-serif', fontSize: '10px', letterSpacing: '0.28em', textTransform: 'uppercase', fontWeight: 500, color: '#c2a06a' }}>
                        <span ref={barRef} className="inline-block w-6 sm:w-8 h-px bg-gold origin-left" />
                        {slide.tag}
                    </span>

                    {/* Heading */}
                    <h1 className="overflow-hidden mb-5 sm:mb-6">
                        {slide.heading.map((line, i) => (
                            <span key={i} className="block overflow-hidden" style={{ lineHeight: 1.05 }}>
                                <span
                                    ref={(el) => { headingRefs.current[i] = el }}
                                    className="block translate-y-full text-white"
                                    style={{
                                        fontFamily: 'Cormorant Garamond, serif',
                                        fontSize: 'clamp(40px, 10vw, 96px)',
                                        fontWeight: 700,
                                        letterSpacing: '-0.01em',
                                        fontStyle: i === 1 ? 'italic' : 'normal',
                                    }}
                                >
                                    {line}
                                </span>
                            </span>
                        ))}
                    </h1>

                    {/* Sub */}
                    <p ref={subRef} className="text-white/70 mb-7 sm:mb-9 opacity-0 max-w-xs sm:max-w-sm md:max-w-md"
                        style={{ fontFamily: 'Inter, sans-serif', fontSize: 'clamp(18px, 4.5vw, 28px)', lineHeight: 1.6, fontWeight: 300 }}>
                        PGM Rivera <span style={{ color: '#c2a06a', fontWeight: 600 }}>Mannarkkad</span> premium villa community
                    </p>

                    {/* Button */}
                    <div ref={btnRef} className="opacity-0 flex justify-center md:justify-start">
                        <a href="#" onClick={(e) => { e.preventDefault(); openEnquiry() }}
                            className="lux-btn-filled">
                            Enquire Now
                        </a>
                    </div>
                </div>

                {/* Bottom: pricing boxes — full-width grid on mobile */}
                <div ref={boxRef} className="opacity-0 mt-8 sm:mt-10 pb-6 sm:pb-4">
                    <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3">
                        {features.map((feature, i) => (
                            <div key={i}
                                className="group relative overflow-hidden flex flex-col items-center justify-center text-center py-4 sm:py-5 px-3 sm:px-5"
                                style={{
                                    background: 'rgba(255,252,248,0.12)',
                                    backdropFilter: 'blur(16px) saturate(150%)',
                                    WebkitBackdropFilter: 'blur(16px) saturate(150%)',
                                    border: '1px solid rgba(194,160,106,0.25)',
                                    transition: 'all 0.35s ease',
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
                                <p style={{
                                    fontFamily: 'Inter, sans-serif',
                                    fontSize: 'clamp(9px, 2.2vw, 12px)',
                                    fontWeight: 700,
                                    letterSpacing: '0.10em',
                                    textTransform: 'uppercase',
                                    color: 'white',
                                    lineHeight: 1.4,
                                }}>
                                    {feature.label}
                                </p>
                                <div className="w-6 h-px bg-gold mt-2 group-hover:w-full transition-all duration-700" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Scroll Indicator — hide on very small screens */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 hidden sm:flex flex-col items-center gap-1.5 text-white/40">
                <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '8px', letterSpacing: '0.25em', textTransform: 'uppercase' }}>Scroll</span>
                <ChevronDown size={13} className="animate-bounce" />
            </div>
        </section>
    )
}