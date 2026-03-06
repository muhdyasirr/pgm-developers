'use client'

import { MapPin, Phone, Mail, Navigation } from 'lucide-react'
import ScrollReveal from './ScrollReveal'
import { useEnquiry } from '@/context/EnquiryContext'

export default function CTASection() {
    const { open: openEnquiry } = useEnquiry()
    const mapSrc = 'https://maps.google.com/maps?q=11.1520003,75.8925509&z=16&output=embed'

    return (
        <section id="contact" className="overflow-hidden" style={{ background: '#fefcf8' }}>
            <div className="lux-divider" />

            <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12 py-16 md:py-24 lg:py-32">
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
                            <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(40px, 5.5vw, 74px)', fontWeight: 700, color: '#0a0a0a', lineHeight: 1.05 }}>
                                Our{' '}
                                <em style={{ fontStyle: 'italic', color: '#c2a06a' }}>Location</em>
                            </h2>
                        </ScrollReveal>
                    </div>

                    <ScrollReveal delay={0.2} direction="left">
                        <div className="flex flex-col sm:flex-row gap-3">
                            <a href="https://maps.google.com/?q=Kozhikode,Kerala,India" target="_blank" rel="noopener noreferrer" className="lux-btn">
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
                        <div className="relative w-full" style={{ height: 'min(420px, 60vw)', minHeight: '260px' }}>
                            <iframe
                                src={mapSrc} width="100%" height="100%"
                                style={{ border: 0, filter: 'saturate(90%) contrast(1.05)', display: 'block' }}
                                allowFullScreen loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="PGM Developers Location"
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
                                    Malabar Region · Kerala
                                </p>

                                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                                    <div className="flex items-start gap-4">
                                        <MapPin size={15} className="text-gold mt-0.5 flex-shrink-0" />
                                        <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', fontWeight: 300, color: 'rgba(255,255,255,0.65)', lineHeight: 1.7 }}>
                                            NH 66, Kozhikode,<br />Kerala – 673 001, India
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
                                <a href="https://maps.google.com/?q=Kozhikode,Kerala,India" target="_blank" rel="noopener noreferrer"
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
