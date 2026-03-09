'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import ScrollReveal from './ScrollReveal'
import { useEnquiry } from '@/context/EnquiryContext'

gsap.registerPlugin(ScrollTrigger)

const features = [
    '3BHK & 4BHK Luxury Villas',
    '6.5 Acres Gated Community',
    'Free Solar System',
    '24/7 Security',
    'Swimming Pool & Clubhouse',
    'Health Club & Recreation Hall',
    'Landscaped Green Areas',
    'RERA Approved Project',
]

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
        <section id="about" className="relative py-14 md:py-32 lg:py-44 overflow-hidden" style={{ background: 'linear-gradient(160deg, #fefcf8 0%, #faf7f2 60%, #f4f0e8 100%)' }}>
            {/* Very subtle texture */}
            <div className="absolute inset-0 opacity-30" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(194,160,106,0.07) 1px, transparent 0)', backgroundSize: '40px 40px' }} />

            {/* Decorative large background letter */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 text-[20vw] font-cormorant font-bold text-[rgba(194,160,106,0.04)] leading-none select-none pointer-events-none pr-8" aria-hidden="true">
                PGM
            </div>

            <div className="max-w-7xl mx-auto px-5 sm:px-6 md:px-12 relative z-10">
                {/* Label */}
                <ScrollReveal className="flex items-center gap-4 mb-16">
                    <div className="w-10 h-px bg-gold" />
                    <span className="lux-label">About the Project</span>
                </ScrollReveal>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                    {/* Left: text */}
                    <div className="relative pl-0 lg:pl-8">
                        <div ref={lineRef} className="hidden lg:block absolute left-0 top-0 w-[3px] h-full origin-top" style={{ background: 'linear-gradient(180deg, #c2a06a 0%, rgba(194,160,106,0.2) 100%)' }} />

                        <ScrollReveal direction="left">
                            <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(26px, 6vw, 64px)', fontWeight: 700, lineHeight: 1.05, color: '#0a0a0a' }}>
                                Rivera Villas, <em className="text-gold" style={{ fontStyle: 'italic' }}>Premium Gated</em> Villa Community
                            </h2>
                        </ScrollReveal>

                        <ScrollReveal delay={0.15}>
                            <p className="lux-body mt-8 mb-6 text-justify md:text-left hyphens-auto md:hyphens-none">
                                Rivera Villas is a premium gated villa project located in Pothozhi, Mannarkkad, Palakkad, spread across 6.5 acres of lush greenery. The project offers thoughtfully designed 3BHK (1850 Sqft) and 4BHK (2200 Sqft) luxury villas with modern architecture, spacious interiors, and quality amenities.
                            </p>
                        </ScrollReveal>

                        <ScrollReveal delay={0.25}>
                            <p className="lux-body mb-10 text-justify md:text-left hyphens-auto md:hyphens-none">
                                Each villa comes with a Free Solar System, helping homeowners reduce electricity costs and promote sustainable living. RERA Registered (K-RERA/PRJ/PKD/071/2024), ensuring approved plans, legal transparency, and complete buyer protection for a safe and reliable investment.
                            </p>
                        </ScrollReveal>

                        <ScrollReveal delay={0.35}>
                            <div>
                                <button
                                    onClick={() => openEnquiry()}
                                    className="lux-btn-filled"
                                >
                                    Enquire Now
                                </button>
                            </div>
                        </ScrollReveal>
                    </div>

                    {/* Right: feature cards */}
                    <ScrollReveal delay={0.2} direction="left">
                        <div className="grid grid-cols-2 gap-3 sm:gap-4">
                            {features.map((feature) => (
                                <div key={feature} className="clay-card p-4 sm:p-5 flex items-center gap-3">
                                    <span style={{
                                        display: 'inline-flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        width: '28px',
                                        height: '28px',
                                        flexShrink: 0,
                                        background: 'rgba(194,160,106,0.12)',
                                        borderRadius: '50%',
                                    }}>
                                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                                            <path d="M2 6L5 9L10 3" stroke="#c2a06a" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </span>
                                    <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', fontWeight: 500, color: '#0a0a0a', lineHeight: 1.3 }}>
                                        {feature}
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