'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import ScrollReveal from './ScrollReveal'

gsap.registerPlugin(ScrollTrigger)

export default function CTASection() {
    const bgRef = useRef<HTMLDivElement>(null)
    const sectionRef = useRef<HTMLElement>(null)

    useEffect(() => {
        if (!bgRef.current || !sectionRef.current) return
        // Parallax background
        gsap.to(bgRef.current, {
            yPercent: 30,
            ease: 'none',
            scrollTrigger: {
                trigger: sectionRef.current,
                start: 'top bottom',
                end: 'bottom top',
                scrub: 1.5,
            },
        })
    }, [])

    return (
        <section ref={sectionRef} id="contact" className="relative py-40 md:py-52 overflow-hidden">
            {/* Parallax Background */}
            <div ref={bgRef} className="absolute inset-[-20%] z-0">
                <Image
                    src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1920&q=80"
                    alt="CTA Background"
                    fill
                    className="object-cover object-center"
                    sizes="100vw"
                />
            </div>

            {/* Overlay */}
            <div className="absolute inset-0 bg-light/75 z-10" />
            {/* Gold accent bar top */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent z-20" />

            {/* Content */}
            <div className="relative z-20 max-w-5xl mx-auto px-6 md:px-12 text-center">
                <ScrollReveal>
                    <div className="flex items-center justify-center gap-4 mb-8">
                        <div className="w-12 h-px bg-gold" />
                        <span className="text-gold text-xs font-semibold tracking-[0.3em] uppercase">
                            Start Your Journey
                        </span>
                        <div className="w-12 h-px bg-gold" />
                    </div>
                </ScrollReveal>

                <ScrollReveal delay={0.1}>
                    <h2 className="text-4xl md:text-6xl lg:text-7xl font-black leading-[1.02] text-dark mb-6">
                        Ready to Build{' '}
                        <span className="text-gold font-display italic">Something</span>{' '}
                        Extraordinary?
                    </h2>
                </ScrollReveal>

                <ScrollReveal delay={0.2}>
                    <p className="text-gray-text text-lg font-light max-w-2xl mx-auto mb-12">
                        Partner with PGM Developers to transform your vision into a landmark that stands
                        the test of time. Let&apos;s create something exceptional together.
                    </p>
                </ScrollReveal>

                <ScrollReveal delay={0.3}>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <a
                            href="mailto:info@pgmdevelopers.com"
                            className="px-10 py-5 bg-gold text-dark font-bold text-sm tracking-widest uppercase hover:bg-gold-light transition-colors duration-300 w-full sm:w-auto text-center"
                        >
                            Get In Touch
                        </a>
                        <a
                            href="tel:+919072224466"
                            className="px-10 py-5 border border-dark/30 text-dark font-medium text-sm tracking-widest uppercase hover:border-gold hover:text-gold transition-colors duration-300 w-full sm:w-auto text-center"
                        >
                            Call Us Now
                        </a>
                    </div>
                </ScrollReveal>

                <ScrollReveal delay={0.4}>
                    <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-8 text-dark/30 text-sm">
                        <span>info@pgmdevelopers.com</span>
                        <span className="hidden sm:block w-px h-4 bg-dark/20" />
                        <span>+91 90 72 22 44 66</span>
                        <span className="hidden sm:block w-px h-4 bg-dark/20" />
                        <span>Kerala, India</span>
                    </div>
                </ScrollReveal>
            </div>

            {/* Gold accent bar bottom */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent z-20" />
        </section>
    )
}
