'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { gsap } from 'gsap'
import { ChevronDown } from 'lucide-react'
import clsx from 'clsx'
import ScrollReveal from './ScrollReveal'

const slides = [
    {
        id: 1,
        image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1920&q=85',
        tag: 'Luxury Living',
        heading: ['Pinnacle', 'Of Luxury', 'Living.'],
        sub: 'Where your dreams can flourish at their extreme.',
    },
    {
        id: 2,
        image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1920&q=85',
        tag: 'Exceptional Properties',
        heading: ['Captivating', 'Landscapes', 'Of Malabar.'],
        sub: 'Exquisite properties in the captivating landscapes of the Malabar Area.',
    },
    {
        id: 3,
        image: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=1920&q=85',
        tag: 'Trusted Developer',
        heading: ['Innovation.', 'Quality.', 'Satisfaction.'],
        sub: 'Our resolute commitment to innovation, quality, and customer satisfaction.',
    },
]

const features = [
    { label: 'STARTING PRICE ₹ 6.75 CR*' },
    { label: 'DISCOUNTS UPTO ₹ 50 LACS*' },
    { label: 'PAYMENT PLAN 25:75' },
    { label: 'PAY ONLY 25%*' },
]

export default function HeroSlider() {
    const [current, setCurrent] = useState(0)
    const [animating, setAnimating] = useState(false)
    const headingRefs = useRef<(HTMLSpanElement | null)[]>([])
    const tagRef = useRef<HTMLSpanElement>(null)
    const subRef = useRef<HTMLParagraphElement>(null)
    const btnRef = useRef<HTMLDivElement>(null)
    const barRef = useRef<HTMLDivElement>(null)
    const progressRef = useRef<HTMLDivElement>(null)

    const runEntrance = () => {
        setAnimating(true)
        const tl = gsap.timeline({
            onComplete: () => setAnimating(false),
        })

        // Reset
        gsap.set([tagRef.current, subRef.current, btnRef.current], {
            opacity: 0,
            y: 20,
        })
        gsap.set(headingRefs.current.filter(Boolean), { y: '110%' })

        // Animate gold bar reveal
        if (barRef.current) {
            gsap.fromTo(
                barRef.current,
                { scaleX: 0, transformOrigin: 'left center' },
                { scaleX: 1, duration: 0.5, ease: 'power3.out' }
            )
        }

        tl.to(tagRef.current, { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' }, 0.2)
        tl.to(
            headingRefs.current.filter(Boolean),
            { y: '0%', duration: 0.9, stagger: 0.12, ease: 'expo.out' },
            0.35
        )
        tl.to(subRef.current, { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' }, 0.7)
        tl.to(btnRef.current, { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' }, 0.85)
    }

    useEffect(() => {
        // Initial entrance
        runEntrance()
        // Auto-advance
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % slides.length)
        }, 6000)
        return () => clearInterval(interval)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        runEntrance()
        // Animate progress bar
        if (progressRef.current) {
            gsap.fromTo(progressRef.current, { width: '0%' }, { width: '100%', duration: 6, ease: 'none' })
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [current])

    const goTo = (idx: number) => {
        if (idx === current || animating) return
        setCurrent(idx)
    }

    const slide = slides[current]

    return (
        <section className="relative h-screen w-full overflow-hidden" id="home">
            {/* Background Images */}
            {slides.map((s, i) => (
                <div
                    key={s.id}
                    className={clsx(
                        'absolute inset-0 transition-opacity duration-1000',
                        i === current ? 'opacity-100' : 'opacity-0'
                    )}
                >
                    <Image
                        src={s.image}
                        alt={`Slide ${i + 1}`}
                        fill
                        priority={i === 0}
                        className="object-cover object-center scale-105"
                        sizes="100vw"
                    />
                </div>
            ))}

            {/* Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-r from-white/50 via-white/40 to-white/10 z-10" />
            <div className="absolute inset-0 bg-gradient-to-t from-white/40 via-transparent to-white/10 z-10" />

            {/* Content */}
            <div className="relative z-20 h-full flex items-center px-8 md:px-16 lg:px-24 max-w-7xl">
                <div className="max-w-3xl">
                    {/* Tag */}
                    <span
                        ref={tagRef}
                        className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.3em] uppercase text-gold mb-6 opacity-0"
                    >
                        <span ref={barRef} className="inline-block w-8 h-px bg-gold origin-left" />
                        {slide.tag}
                    </span>

                    {/* Heading */}
                    <h1 className="overflow-hidden mb-6">
                        {slide.heading.map((line, i) => (
                            <span key={i} className="block overflow-hidden leading-[1.05]">
                                <span
                                    ref={(el) => { headingRefs.current[i] = el }}
                                    className="block text-5xl md:text-7xl lg:text-8xl font-black tracking-tight text-dark translate-y-full"
                                    style={{ fontFamily: 'Outfit, sans-serif' }}
                                >
                                    {line}
                                </span>
                            </span>
                        ))}
                    </h1>

                    {/* Sub */}
                    <p
                        ref={subRef}
                        className="text-base md:text-lg text-dark/70 font-light max-w-md mb-10 opacity-0"
                    >
                        {slide.sub}
                    </p>

                    {/* Buttons */}
                    <div ref={btnRef} className="flex items-center gap-4 opacity-0">
                        <a
                            href="#projects"
                            onClick={(e) => {
                                e.preventDefault()
                                document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })
                            }}
                            className="px-8 py-4 bg-gold text-dark font-semibold text-sm tracking-widest uppercase hover:bg-gold-light transition-colors duration-300"
                        >
                            View Projects
                        </a>
                        <a
                            href="#about"
                            onClick={(e) => {
                                e.preventDefault()
                                document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })
                            }}
                            className="px-8 py-4 border border-dark/30 text-dark font-medium text-sm tracking-widest uppercase hover:border-gold hover:text-gold transition-colors duration-300"
                        >
                            About Us
                        </a>
                    </div>
                </div>
            </div>

            {/* Slide Indicators */}
            <div className="absolute bottom-12 left-15 md:left-16 lg:left-24 z-20 flex items-center gap-3">
                {slides.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => goTo(i)}
                        aria-label={`Slide ${i + 1}`}
                        className={clsx(
                            'transition-all duration-500 rounded-full',
                            i === current
                                ? 'w-8 h-2 bg-gold'
                                : 'w-2 h-2 bg-dark/20 hover:bg-dark/50'
                        )}
                    />
                ))}
            </div>

            {/* Pricing Boxes - Right Aligned */}
            <div className="absolute bottom-24 md:bottom-28 lg:bottom-32 right-0 z-20 pointer-events-none flex justify-end w-full px-8 md:px-16 lg:px-24">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 pointer-events-auto w-full md:w-[75%] lg:w-[65%] xl:w-[55%]">
                    {features.map((feature, i) => (
                        <div key={i} className="border border-white/40 p-4 md:p-5 lg:p-6 bg-white/60 backdrop-blur-md hover:border-gold/60 hover:bg-white/95 transition-all duration-500 group cursor-pointer flex flex-col items-center justify-center text-center h-full">
                            <p className="text-dark text-xs sm:text-sm lg:text-base font-black leading-snug tracking-widest uppercase">
                                {feature.label}
                            </p>
                            <div className="w-8 h-1 bg-gold mt-auto pt-4 group-hover:w-full transition-all duration-700" />
                        </div>
                    ))}
                </div>
            </div>

            {/* Progress Bar */}
            <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-dark/10 z-20">
                <div ref={progressRef} className="h-full bg-gold" style={{ width: '0%' }} />
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-12 right-8 md:right-16 z-20 flex flex-col items-center gap-2 text-dark/40">
                <span className="text-[9px] tracking-[0.25em] uppercase rotate-90 mb-4">Scroll</span>
                <ChevronDown size={16} className="animate-bounce" />
            </div>

            {/* Slide Number */}
            <div className="absolute top-1/2 right-8 md:right-16 -translate-y-1/2 z-20 text-dark/30 font-mono text-xs tracking-widest">
                <span className="text-gold/70">{String(current + 1).padStart(2, '0')}</span>
                <span className="mx-1">/</span>
                <span>{String(slides.length).padStart(2, '0')}</span>
            </div>
        </section>
    )
}
