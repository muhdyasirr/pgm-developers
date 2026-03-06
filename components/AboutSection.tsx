'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import ScrollReveal from './ScrollReveal'
import { useEnquiry } from '@/context/EnquiryContext'

gsap.registerPlugin(ScrollTrigger)

export default function AboutSection() {
    const lineRef = useRef<HTMLDivElement>(null)
    const { open: openEnquiry } = useEnquiry()

    useEffect(() => {
        const el = lineRef.current
        if (!el) return
        const ctx = gsap.context(() => {
            gsap.fromTo(el,
                { scaleY: 0, transformOrigin: 'top' },
                { scaleY: 1, duration: 1.2, ease: 'power3.out', scrollTrigger: { trigger: el, start: 'top 85%', toggleActions: 'play none none reverse' } }
            )
        })
        return () => ctx.revert()
    }, [])

    return (
        <section id="about" className="relative py-32 md:py-44 overflow-hidden" style={{ background: 'linear-gradient(160deg, #fefcf8 0%, #faf7f2 60%, #f4f0e8 100%)' }}>
            {/* Very subtle texture */}
            <div className="absolute inset-0 opacity-30" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(194,160,106,0.07) 1px, transparent 0)', backgroundSize: '40px 40px' }} />

            {/* Decorative large background letter */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 text-[20vw] font-cormorant font-bold text-[rgba(194,160,106,0.04)] leading-none select-none pointer-events-none pr-8" aria-hidden="true">
                PGM
            </div>

            <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
                {/* Label */}
                <ScrollReveal className="flex items-center gap-4 mb-16">
                    <div className="w-10 h-px bg-gold" />
                    <span className="lux-label">Who We Are</span>
                </ScrollReveal>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Left: text */}
                    <div className="relative pl-8">
                        <div ref={lineRef} className="absolute left-0 top-0 w-[3px] h-full origin-top" style={{ background: 'linear-gradient(180deg, #c2a06a 0%, rgba(194,160,106,0.2) 100%)' }} />

                        <ScrollReveal direction="left">
                            <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(44px, 5.5vw, 76px)', fontWeight: 700, lineHeight: 1.05, color: '#0a0a0a' }}>
                                Building{' '}
                                <em className="text-gold" style={{ fontStyle: 'italic' }}>Tomorrow&apos;s</em>{' '}
                                Landmarks Today
                            </h2>
                        </ScrollReveal>

                        <ScrollReveal delay={0.15}>
                            <p className="lux-body mt-8 mb-6">
                                Experience with us, a pinnacle of luxury living where your dreams can flourish at their extreme. We, the fully approved developers, proudly provide villas with an exceptional portfolio of exquisite properties across the captivating landscapes of the Malabar area.
                            </p>
                        </ScrollReveal>

                        <ScrollReveal delay={0.25}>
                            <p className="lux-body mb-10">
                                At PGM Developers, we go beyond constructing exceptional properties. We provide a comprehensive range of services to ensure a seamless and delightful experience for our clients — from initial consultation to post-sales support.
                            </p>
                        </ScrollReveal>

                        <ScrollReveal delay={0.35}>
                            <button
                                onClick={() => openEnquiry()}
                                className="lux-btn-filled"
                            >
                                Enquire Now
                            </button>
                        </ScrollReveal>
                    </div>

                    {/* Right: clay stat cards */}
                    <ScrollReveal delay={0.2} direction="left">
                        <div className="grid grid-cols-2 gap-5">
                            {[
                                { num: '14+', label: 'Group Companies' },
                                { num: '20+', label: 'Years Experience' },
                                { num: '500+', label: 'Happy Families' },
                                { num: '50+', label: 'Projects Delivered' },
                            ].map((stat) => (
                                <div key={stat.num} className="clay-card p-8 flex flex-col items-center text-center">
                                    <span style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '52px', fontWeight: 700, color: '#c2a06a', lineHeight: 1 }}>
                                        {stat.num}
                                    </span>
                                    <span className="lux-label mt-3" style={{ color: '#6b7280' }}>
                                        {stat.label}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </ScrollReveal>
                </div>
            </div>
        </section>
    )
}