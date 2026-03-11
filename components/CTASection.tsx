'use client'

import { MapPin, Phone, Mail, Navigation } from 'lucide-react'
import Image from 'next/image'
import ScrollReveal from './ScrollReveal'
import { useEnquiry } from '@/context/EnquiryContext'

export default function CTASection() {
    const { open: openEnquiry } = useEnquiry()
    return (
        <section id="contact" className="overflow-hidden" style={{ background: '#fefcf8' }}>
            <div className="lux-divider" />

            <div className="max-w-7xl mx-auto px-5 sm:px-6 md:px-12 py-8 md:py-24 lg:py-32">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
                    <div>
                        <ScrollReveal>
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-8 h-px bg-gold" />
                                <span className="lux-label">Find Us</span>
                            </div>
                        </ScrollReveal>
                        <ScrollReveal delay={0.1}>
                            <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(28px, 7vw, 74px)', fontWeight: 700, color: '#0a0a0a', lineHeight: 1.05 }}>
                                Our{' '}
                                <em style={{ fontStyle: 'italic', color: '#c2a06a' }}>Location</em>
                            </h2>
                        </ScrollReveal>
                    </div>

                    <ScrollReveal delay={0.2} direction="left">
                        <div className="flex flex-col sm:flex-row justify-center md:justify-end gap-3">
                            <a href="https://www.google.com/maps?q=10.978845,76.4368917&z=17&hl=en" target="_blank" rel="noopener noreferrer" className="lux-btn">
                                <Navigation size={13} /> Open Map
                            </a>
                            <button onClick={() => openEnquiry()} className="lux-btn-filled">
                                Enquire Now
                            </button>
                        </div>
                    </ScrollReveal>
                </div>

                {/* Map + Info */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 overflow-hidden"
                    style={{ borderRadius: '16px', boxShadow: '0 20px 60px rgba(194,160,106,0.12)', border: '1px solid rgba(194,160,106,0.15)' }}>
                    {/* Map */}
                    <ScrollReveal className="lg:col-span-2" delay={0.1}>
                        <div className="relative w-full overflow-hidden" style={{ height: 'min(750px, 95vw)', minHeight: '520px' }}>
                            <Image
                                src="/PGM-Developers-Brochure-2025_pages-to-jpg-00181.jpg"
                                alt="PGM Rivera Project Plan"
                                fill
                                className="object-cover transition-transform duration-700 hover:scale-105"
                                sizes="(max-width: 1024px) 100vw, 66vw"
                            />
                        </div>
                    </ScrollReveal>

                    {/* Info Panel */}
                    <ScrollReveal delay={0.2} direction="left">
                        <div className="flex flex-col justify-between p-10 lg:p-12 h-full min-h-[420px]" style={{ background: '#0a0a0a' }}>
                            <div>
                                <div className="w-8 h-px bg-gold mb-8" />
                                <h3 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '30px', fontWeight: 700, color: 'white', marginBottom: '4px' }}>
                                    PGM Developers
                                </h3>
                                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '9px', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)', marginBottom: '36px' }}>
                                    Mannarkkad · Palakkad
                                </p>

                                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                                    <div className="flex items-start gap-4">
                                        <MapPin size={15} className="text-gold mt-0.5 flex-shrink-0" />
                                        <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', fontWeight: 300, color: 'rgba(255,255,255,0.65)', lineHeight: 1.7 }}>
                                            Pothozhi, Mannarkkad,<br />Palakkad, Kerala - 678582
                                        </p>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <Phone size={15} className="text-gold flex-shrink-0" />
                                        <a href="tel:+919072224466" style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', fontWeight: 300, color: 'rgba(255,255,255,0.65)' }}
                                            className="hover:text-gold transition-colors duration-300">
                                            +91 90 72 22 44 66
                                        </a>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <Mail size={15} className="text-gold flex-shrink-0" />
                                        <a href="mailto:info@pgmdevelopers.com" style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', fontWeight: 300, color: 'rgba(255,255,255,0.65)' }}
                                            className="hover:text-gold transition-colors duration-300">
                                            info@pgmdevelopers.com
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-12">
                                <a href="https://www.google.com/maps?q=10.978845,76.4368917&z=17&hl=en" target="_blank" rel="noopener noreferrer"
                                    className="inline-flex items-center gap-3 group"
                                    style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#c2a06a' }}>
                                    <span>Get Directions</span>
                                    <span className="block h-px bg-gold group-hover:w-16 transition-all duration-500" style={{ width: '32px' }} />
                                </a>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </div>

            <div className="lux-divider" />
        </section>
    )
}
