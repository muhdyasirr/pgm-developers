'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import ScrollReveal from './ScrollReveal'
import { useEnquiry } from '@/context/EnquiryContext'

gsap.registerPlugin(ScrollTrigger)

const projects = [
    { image: '/3 villa.jpg.jpeg', title: 'PGM Luxury Villas', category: 'Luxury Villas', location: 'Kerala', span: 'row-span-2' },
    { image: '/02 VILLA 0new.jpg.jpeg', title: 'Signature Villa Collection', category: 'Residential', location: 'Kerala', span: '' },
    { image: '/03 VILLA 02.jpg.jpeg', title: 'Modern Villa Series', category: 'Architectural', location: 'Kerala', span: '' },
    { image: '/04 BACK VIEW -CLUB AND RIVER.jpg.jpeg', title: 'Riverfront Estates', category: 'Premium Villas', location: 'Kerala', span: '' },
    { image: '/14 CLUB HOUSE 01.jpeg', title: 'The Grand Club House', category: 'Leisure & Club', location: 'Kerala', span: 'row-span-2' },
    { image: '/17 POOL 05.jpg.jpeg', title: 'Infinity Pool Retreat', category: 'Amenities', location: 'Kerala', span: '' },
    { image: '/09 VILLA_bedroom1.jpg.jpeg', title: 'Private Master Suite', category: 'Interiors', location: 'Kerala', span: '' },
]

export default function ProjectsGrid() {
    const gridRef = useRef<HTMLDivElement>(null)
    const { open: openEnquiry } = useEnquiry()

    useEffect(() => {
        if (!gridRef.current) return
        const items = gridRef.current.querySelectorAll('.project-card')
        gsap.fromTo(items, { opacity: 0, y: 60 }, {
            opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out',
            scrollTrigger: { trigger: gridRef.current, start: 'top 85%', toggleActions: 'play none none none' },
        })
    }, [])

    return (
        <section id="projects" className="py-8 md:py-28 lg:py-36" style={{ background: '#fefcf8' }}>
            <div className="max-w-7xl mx-auto px-5 sm:px-6 md:px-12">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                    <div>
                        <ScrollReveal>
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-8 h-px bg-gold" />
                                <span className="lux-label">Our Portfolio</span>
                            </div>
                        </ScrollReveal>
                        <ScrollReveal delay={0.1}>
                            <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(28px, 7vw, 74px)', fontWeight: 700, color: '#0a0a0a', lineHeight: 1.05 }}>
                                Signature{' '}
                                <em style={{ fontStyle: 'italic', color: '#c2a06a' }}>Projects</em>
                            </h2>
                        </ScrollReveal>
                    </div>
                </div>

                {/* Masonry Grid */}
                <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 auto-rows-[220px] sm:auto-rows-[280px]">
                    {projects.map((project) => (
                        <div
                            key={project.title}
                            className={`project-card opacity-0 relative group overflow-hidden cursor-pointer ${project.span}`}
                            style={{ borderRadius: '12px', boxShadow: '0 4px 24px rgba(194,160,106,0.08)' }}
                        >
                            <Image
                                src={project.image} alt={project.title} fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                            <div className="absolute inset-0 bg-black/20 transition-opacity duration-500 group-hover:opacity-0" />

                            {/* Hover overlay */}
                            <div className="absolute inset-0 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.87,0,0.13,1)] flex flex-col justify-end p-8"
                                style={{ background: 'linear-gradient(to top, rgba(10,10,10,0.95) 0%, rgba(10,10,10,0.6) 50%, rgba(194,160,106,0.1) 100%)' }}>
                                <span className="lux-label mb-2">{project.category}</span>
                                <h3 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '24px', fontWeight: 700, color: 'white', marginBottom: '4px' }}>{project.title}</h3>
                                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: 'rgba(255,255,255,0.5)' }}>{project.location}</p>
                                <div className="mt-4 w-8 h-px bg-gold group-hover:w-16 transition-all duration-500 delay-100" />
                            </div>

                            {/* Category badge — glass */}
                            <div className="absolute top-4 left-4 px-3 py-1.5 group-hover:opacity-0 transition-opacity duration-300 glass-panel rounded-full">
                                <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', fontWeight: 500, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#0a0a0a' }}>
                                    {project.category}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA */}
                <div className="mt-14 flex justify-center">
                    <button onClick={() => openEnquiry()} className="lux-btn-filled">
                        Enquire Now
                    </button>
                </div>
            </div>
        </section>
    )
}
