'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Building2, Home, Briefcase, Leaf, Award, Hammer } from 'lucide-react'
import ScrollReveal from './ScrollReveal'

gsap.registerPlugin(ScrollTrigger)

const services = [
    {
        icon: Home,
        title: 'Budget-friendly Projects',
        desc: 'Developing affordable residential apartments designed for modern living without compromising on quality.',
    },
    {
        icon: Building2,
        title: 'Luxury Villas',
        desc: 'Exquisite properties and premium villas in the captivating landscapes of the Malabar Area.',
    },
    {
        icon: Briefcase,
        title: 'Property Consulting',
        desc: 'We offer personalized assistance and guidance throughout the entire real estate journey.',
    },
    {
        icon: Hammer,
        title: 'Site Visits',
        desc: 'We\'ll walk with you through the entire process of acquiring your dream home one site at a time.',
    },
    {
        icon: Award,
        title: 'Legal Support & Documentation',
        desc: 'Comprehensive legal assistance to ensure a seamless transparent transfer and documentation process.',
    },
    {
        icon: Leaf,
        title: 'Interior Design & Customization',
        desc: 'Tailor-made interior design and customization options to match your personal style and needs.',
    },
]

export default function ExpertiseSection() {
    const cardsRef = useRef<(HTMLDivElement | null)[]>([])

    useEffect(() => {
        const cards = cardsRef.current.filter(Boolean)
        gsap.fromTo(
            cards,
            { opacity: 0, y: 50 },
            {
                opacity: 1,
                y: 0,
                duration: 0.7,
                stagger: 0.1,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: cards[0],
                    start: 'top 85%',
                    toggleActions: 'play none none none',
                },
            }
        )
    }, [])

    return (
        <section id="expertise" className="bg-light-2 py-28 md:py-36 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                {/* Header */}
                <div className="max-w-2xl mb-16">
                    <ScrollReveal>
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-8 h-px bg-gold" />
                            <span className="text-gold text-xs font-semibold tracking-[0.3em] uppercase">
                                Our Expertise
                            </span>
                        </div>
                    </ScrollReveal>
                    <ScrollReveal delay={0.1}>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.05] text-dark">
                            Services Built{' '}
                            <span className="text-gold font-display italic">Around</span> You
                        </h2>
                    </ScrollReveal>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border-t border-l border-dark/10">
                    {services.map((service, i) => {
                        const Icon = service.icon
                        return (
                            <div
                                key={service.title}
                                ref={(el) => { cardsRef.current[i] = el }}
                                className="opacity-0 group relative border-r border-b border-dark/10 p-10 cursor-pointer overflow-hidden transition-colors duration-500 hover:bg-gold"
                            >
                                {/* Hover fill */}
                                <div className="absolute inset-0 bg-gold translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.87,0,0.13,1)]" />

                                <div className="relative z-10">
                                    <div className="mb-6">
                                        <Icon
                                            size={32}
                                            className="text-gold group-hover:text-dark transition-colors duration-500"
                                        />
                                    </div>
                                    <h3 className="text-lg font-bold mb-3 text-dark group-hover:text-white transition-colors duration-500 tracking-tight">
                                        {service.title}
                                    </h3>
                                    <p className="text-gray-text group-hover:text-white/80 text-sm font-light leading-relaxed transition-colors duration-500">
                                        {service.desc}
                                    </p>
                                    <div className="mt-6 w-6 h-px bg-gold group-hover:bg-white group-hover:w-12 transition-all duration-500" />
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
