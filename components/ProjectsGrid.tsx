'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import ScrollReveal from './ScrollReveal'

gsap.registerPlugin(ScrollTrigger)

const projects = [
    {
        image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80',
        title: 'The Grandeur Residences',
        category: 'Residential',
        location: 'Hyderabad',
        span: 'row-span-2',
    },
    {
        image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80',
        title: 'Skyline Business Hub',
        category: 'Commercial',
        location: 'Bangalore',
        span: '',
    },
    {
        image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80',
        title: 'Nexus City Center',
        category: 'Mixed-Use',
        location: 'Pune',
        span: '',
    },
    {
        image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80',
        title: 'Heritage Court',
        category: 'Luxury Villas',
        location: 'Goa',
        span: '',
    },
    {
        image: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=800&q=80',
        title: 'Pinnacle Towers',
        category: 'Commercial',
        location: 'Mumbai',
        span: 'row-span-2',
    },
    {
        image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80',
        title: 'Serene Valley',
        category: 'Residential',
        location: 'Hyderabad',
        span: '',
    },
]

export default function ProjectsGrid() {
    const gridRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (!gridRef.current) return
        const items = gridRef.current.querySelectorAll('.project-card')
        gsap.fromTo(
            items,
            { opacity: 0, y: 60 },
            {
                opacity: 1,
                y: 0,
                duration: 0.8,
                stagger: 0.1,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: gridRef.current,
                    start: 'top 85%',
                    toggleActions: 'play none none none',
                },
            }
        )
    }, [])

    return (
        <section id="projects" className="bg-light py-28 md:py-36">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                    <div>
                        <ScrollReveal>
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-8 h-px bg-gold" />
                                <span className="text-gold text-xs font-semibold tracking-[0.3em] uppercase">
                                    Our Portfolio
                                </span>
                            </div>
                        </ScrollReveal>
                        <ScrollReveal delay={0.1}>
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.05] text-dark">
                                Signature{' '}
                                <span className="text-gold font-display italic">Projects</span>
                            </h2>
                        </ScrollReveal>
                    </div>
                    <ScrollReveal delay={0.2} direction="left">
                        <a
                            href="#"
                            className="inline-flex items-center gap-3 text-gray-text hover:text-gold text-sm font-medium tracking-widest uppercase transition-colors duration-300 group"
                        >
                            <span>View All</span>
                            <span className="w-8 h-px bg-current group-hover:w-16 transition-all duration-500" />
                        </a>
                    </ScrollReveal>
                </div>

                {/* Masonry Grid */}
                <div
                    ref={gridRef}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-[280px]"
                >
                    {projects.map((project) => (
                        <div
                            key={project.title}
                            className={`project-card opacity-0 relative group overflow-hidden cursor-pointer ${project.span}`}
                        >
                            <Image
                                src={project.image}
                                alt={project.title}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                            {/* Default overlay */}
                            <div className="absolute inset-0 bg-black/30 transition-opacity duration-500 group-hover:opacity-0" />

                            {/* Hover overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-black/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.87,0,0.13,1)] flex flex-col justify-end p-8">
                                <span className="text-gold text-xs font-semibold tracking-[0.25em] uppercase mb-2">
                                    {project.category}
                                </span>
                                <h3 className="text-xl font-bold text-white mb-1">{project.title}</h3>
                                <p className="text-white/50 text-sm">{project.location}</p>
                                <div className="mt-4 w-8 h-px bg-gold group-hover:w-16 transition-all duration-500 delay-100" />
                            </div>

                            {/* Category badge (default) */}
                            <div className="absolute top-4 left-4 px-3 py-1 bg-dark/60 backdrop-blur-sm text-white/70 text-xs tracking-widest uppercase font-medium group-hover:opacity-0 transition-opacity duration-300">
                                {project.category}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
