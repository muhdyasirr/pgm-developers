'use client'

import Image from 'next/image'
import { Waves, UtensilsCrossed, Dumbbell, TreePine, BookOpen, Users } from 'lucide-react'
import ScrollReveal from './ScrollReveal'
import { useEnquiry } from '@/context/EnquiryContext'

const amenityFeatures = [
    { icon: Waves, label: 'Infinity Pool' },
    { icon: Dumbbell, label: 'Fitness Center' },
    { icon: UtensilsCrossed, label: 'Fine Dining' },
    { icon: TreePine, label: 'Landscaped Gardens' },
    { icon: BookOpen, label: 'Reading Lounge' },
    { icon: Users, label: 'Clubhouse Events' },
]

export default function ExpertiseSection() {
    const { open: openEnquiry } = useEnquiry()
    return (
        <section id="expertise" className="py-16 md:py-28 lg:py-36 overflow-hidden" style={{ background: 'linear-gradient(160deg, #faf7f2 0%, #fefcf8 50%, #faf7f2 100%)' }}>
            <div className="max-w-7xl mx-auto px-6 md:px-12">

                {/* Label */}
                <ScrollReveal className="flex items-center gap-4 mb-16">
                    <div className="w-8 h-px bg-gold" />
                    <span className="lux-label">Amenities</span>
                </ScrollReveal>

                {/* Gallery grid */}
                <ScrollReveal delay={0.05}>
                    <div className="grid grid-cols-3 grid-rows-2 gap-2 sm:gap-3 h-[55vw] sm:h-[65vh] min-h-[240px] sm:min-h-[380px] mb-12 md:mb-24">
                        <div className="relative col-span-2 row-span-2 overflow-hidden group">
                            <Image src="/14 CLUB HOUSE 01.jpeg" alt="Club House" fill className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="66vw" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                            {/* Glass label on image */}
                            <div className="absolute bottom-6 left-6 glass-panel px-4 py-2 rounded-full">
                                <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', fontWeight: 500, letterSpacing: '0.18em', color: '#0a0a0a', textTransform: 'uppercase' }}>
                                    Club House
                                </span>
                            </div>
                        </div>
                        <div className="relative col-span-1 row-span-1 overflow-hidden group">
                            <Image src="/17 POOL 05.jpg.jpeg" alt="Infinity Pool" fill className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="33vw" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                        </div>
                        <div className="relative col-span-1 row-span-1 overflow-hidden group">
                            <Image src="/06 VILLA_Living2.jpg.jpeg" alt="Luxury Living" fill className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="33vw" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                        </div>
                    </div>
                </ScrollReveal>

                {/* Bottom: image + text */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    <ScrollReveal direction="left">
                        <div className="relative h-[420px] overflow-hidden rounded-xl shadow-[0_20px_60px_rgba(194,160,106,0.12)]">
                            <Image src="/04 BACK VIEW -CLUB AND RIVER.jpg.jpeg" alt="Riverfront Club" fill className="object-cover" sizes="50vw" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/55 to-transparent" />
                            <div className="absolute bottom-6 left-6">
                                <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '9px', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.55)' }}>PGM Developers</span>
                                <p style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '22px', fontWeight: 700, color: 'white', marginTop: '4px' }}>Riverfront Club & Gardens</p>
                            </div>
                        </div>
                    </ScrollReveal>

                    <div>
                        <ScrollReveal delay={0.1}>
                            <h2 className="mb-6" style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(36px, 4.5vw, 60px)', fontWeight: 700, color: '#0a0a0a', lineHeight: 1.05 }}>
                                World‑Class{' '}
                                <em style={{ fontStyle: 'italic', color: '#c2a06a' }}>Amenities</em>{' '}
                                Await
                            </h2>
                        </ScrollReveal>

                        <ScrollReveal delay={0.2}>
                            <p className="lux-body mb-10">
                                Step into a lifestyle crafted to perfection. Our clubhouse, spanning over 10,000 sq. ft., is a sanctuary of refined luxury — where world-class amenities meet the serenity of Kerala&apos;s natural beauty. Every detail has been thoughtfully designed to give you an elevated living experience from day one.
                            </p>
                        </ScrollReveal>

                        {/* Clay amenity chips */}
                        <ScrollReveal delay={0.3}>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-10 md:mb-12">
                                {amenityFeatures.map(({ icon: Icon, label }) => (
                                    <div key={label} className="clay-card flex items-center gap-4 px-5 py-4">
                                        <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                                            style={{ background: 'rgba(194,160,106,0.10)', border: '1px solid rgba(194,160,106,0.2)' }}>
                                            <Icon size={16} className="text-gold" />
                                        </div>
                                        <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', fontWeight: 500, color: '#0a0a0a' }}>{label}</span>
                                    </div>
                                ))}
                            </div>
                        </ScrollReveal>

                        <ScrollReveal delay={0.4}>
                            <button onClick={() => openEnquiry()}
                                className="lux-btn-filled">
                                Enquire Now
                            </button>
                        </ScrollReveal>
                    </div>
                </div>
            </div>
        </section>
    )
}
