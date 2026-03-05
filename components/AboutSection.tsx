'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import ScrollReveal from './ScrollReveal'

gsap.registerPlugin(ScrollTrigger)



export default function AboutSection() {
    const lineRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (!lineRef.current) return
        gsap.fromTo(
            lineRef.current,
            { scaleY: 0, transformOrigin: 'top' },
            {
                scaleY: 1,
                duration: 1.2,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: lineRef.current,
                    start: 'top 85%',
                },
            }
        )
    }, [])

    return (
        <section id="about" className="relative bg-light-2 py-28 md:py-36 overflow-hidden">

            {/* Background texture */}
            <div
                className="absolute inset-0 opacity-50"
                style={{
                    backgroundImage:
                        'repeating-linear-gradient(0deg, transparent, transparent 50px, rgba(0,0,0,0.03) 50px, rgba(0,0,0,0.03) 51px)',
                }}
            />

            <div className="max-w-7xl mx-auto px-6 md:px-12">

                {/* Top label */}
                <ScrollReveal className="flex items-center gap-4 mb-16">
                    <div className="w-12 h-px bg-gold" />
                    <span className="text-gold text-xs font-semibold tracking-[0.3em] uppercase">
                        Who We Are
                    </span>
                </ScrollReveal>

                <div className="max-w-4xl">

                    {/* Left: Text */}
                    <div className="relative">

                        {/* Accent bar */}
                        <div
                            ref={lineRef}
                            className="absolute -left-6 top-0 w-0.5 h-full bg-gold origin-top"
                        />

                        <ScrollReveal direction="left">
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.05] mb-8 text-dark">
                                Building{' '}
                                <span className="text-gold font-display italic">
                                    Tomorrow&apos;s
                                </span>{' '}
                                Landmarks Today
                            </h2>
                        </ScrollReveal>

                        <ScrollReveal delay={0.15}>
                            <p className="text-gray-text font-light leading-relaxed text-base mb-6">
                                Experience with us, a pinnacle of luxury living where your dreams can flourish at their extreme. We, the fully approved developers, can proudly provide you villas with an exceptional portfolio of exquisite properties in the captivating landscapes of the Malabar Area.
                            </p>
                        </ScrollReveal>

                        <ScrollReveal delay={0.25}>
                            <p className="text-gray-text font-light leading-relaxed text-base mb-10">
                                At PGM Developers, we go beyond just constructing exceptional properties; we provide a comprehensive range of services to ensure a seamless and delightful experience for our clients. Our services encompass every aspect of the real estate journey, from initial consultation to post-sales support.
                            </p>
                        </ScrollReveal>

                        <ScrollReveal delay={0.35}>
                            <a
                                href="#projects"
                                onClick={(e) => {
                                    e.preventDefault()
                                    document
                                        .querySelector('#projects')
                                        ?.scrollIntoView({ behavior: 'smooth' })
                                }}
                                className="inline-flex items-center gap-3 text-gold text-sm font-semibold tracking-widest uppercase group"
                            >
                                <span>Explore Our Work</span>
                                <span className="w-8 h-px bg-gold group-hover:w-16 transition-all duration-500" />
                            </a>
                        </ScrollReveal>
                    </div>

                </div>
            </div>
        </section>
    )
}