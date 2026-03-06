'use client'

import { Instagram, Facebook, Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react'
import { useEnquiry } from '@/context/EnquiryContext'

const quickLinks = [
    { label: 'About Us', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Expertise', href: '#expertise' },
    { label: 'Contact', href: '#contact' },
]

const services = [
    'Budget-friendly Projects',
    'Luxury Villas',
    'Property Consulting',
    'Site Visits',
    'Legal Support & Documentation',
    'Interior Design & Customization',
]

const socials = [
    { icon: Facebook, href: 'https://www.facebook.com/pgmdevelopers/', label: 'Facebook' },
    { icon: Instagram, href: 'https://www.instagram.com/pgm_developers/', label: 'Instagram' },
]

export default function Footer() {
    const { open: openEnquiry } = useEnquiry()
    const handleNav = (href: string) => {
        const el = document.querySelector(href)
        if (el) el.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <footer style={{ background: '#faf7f2', borderTop: '1px solid rgba(194,160,106,0.15)' }}>
            {/* Main Footer */}
            <div className="max-w-7xl mx-auto px-6 md:px-12 py-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">

                    {/* Brand */}
                    <div className="lg:col-span-1">
                        <div className="mb-6">
                            <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '28px', fontWeight: 900, letterSpacing: '0.06em', color: '#0a0a0a', lineHeight: 1 }}>PGM</div>
                            <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '10px', letterSpacing: '0.35em', color: '#c2a06a', textTransform: 'uppercase', fontStyle: 'italic', marginTop: '2px' }}>
                                Developers
                            </div>
                        </div>
                        <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', fontWeight: 300, lineHeight: 1.85, color: '#6b7280', marginBottom: '20px', maxWidth: '260px' }}>
                            PGM Group of Companies consists of 14 great organizations across Kerala and Gulf Countries with successful business experience in Rubber, Gold, Shipping & Transport and Real-estate & Developers.
                        </p>
                        {/* Socials */}
                        <div className="flex items-center gap-3">
                            {socials.map(({ icon: Icon, href, label }) => (
                                <a key={label} href={href} aria-label={label}
                                    className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:border-gold group"
                                    style={{ border: '1px solid rgba(194,160,106,0.25)', color: '#6b7280' }}
                                    onMouseEnter={e => { const el = e.currentTarget; el.style.borderColor = '#c2a06a'; el.style.color = '#c2a06a' }}
                                    onMouseLeave={e => { const el = e.currentTarget; el.style.borderColor = 'rgba(194,160,106,0.25)'; el.style.color = '#6b7280' }}
                                >
                                    <Icon size={15} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="lux-label mb-6" style={{ color: '#0a0a0a' }}>Quick Links</h4>
                        <ul style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                            {quickLinks.map((link) => (
                                <li key={link.href}>
                                    <button onClick={() => handleNav(link.href)}
                                        className="flex items-center gap-2 group transition-colors duration-300"
                                        style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', fontWeight: 300, color: '#6b7280' }}
                                        onMouseEnter={e => (e.currentTarget.style.color = '#c2a06a')}
                                        onMouseLeave={e => (e.currentTarget.style.color = '#6b7280')}
                                    >
                                        <span className="w-0 group-hover:w-4 h-px bg-gold transition-all duration-300 block" />
                                        {link.label}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="lux-label mb-6" style={{ color: '#0a0a0a' }}>Services</h4>
                        <ul style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                            {services.map((s) => (
                                <li key={s} style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', fontWeight: 300, color: '#6b7280' }}>{s}</li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="lux-label mb-6" style={{ color: '#0a0a0a' }}>Contact Us</h4>
                        <ul style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                            <li>
                                <a href="mailto:info@pgmdevelopers.com" className="flex items-start gap-3 transition-colors duration-300"
                                    style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', fontWeight: 300, color: '#6b7280' }}
                                    onMouseEnter={e => (e.currentTarget.style.color = '#c2a06a')}
                                    onMouseLeave={e => (e.currentTarget.style.color = '#6b7280')}
                                >
                                    <Mail size={13} style={{ marginTop: '2px', flexShrink: 0, color: '#c2a06a' }} />
                                    info@pgmdevelopers.com
                                </a>
                            </li>
                            <li>
                                <a href="tel:+919072224466" className="flex items-center gap-3 transition-colors duration-300"
                                    style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', fontWeight: 300, color: '#6b7280' }}
                                    onMouseEnter={e => (e.currentTarget.style.color = '#c2a06a')}
                                    onMouseLeave={e => (e.currentTarget.style.color = '#6b7280')}
                                >
                                    <Phone size={13} style={{ flexShrink: 0, color: '#c2a06a' }} />
                                    +91 90 72 22 44 66
                                </a>
                            </li>
                            <li>
                                <div className="flex items-start gap-3"
                                    style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', fontWeight: 300, color: '#6b7280' }}>
                                    <MapPin size={13} style={{ marginTop: '2px', flexShrink: 0, color: '#c2a06a' }} />
                                    <span>Kodathipadi, Mannarkkad,<br />Kerala, India — 678582</span>
                                </div>
                            </li>
                        </ul>

                        <button onClick={() => openEnquiry()} className="lux-btn mt-8 inline-flex">
                            Send Enquiry <ArrowUpRight size={13} />
                        </button>
                    </div>
                </div>
            </div>

            {/* Bottom bar */}
            <div style={{ borderTop: '1px solid rgba(194,160,106,0.12)' }}>
                <div className="max-w-7xl mx-auto px-6 md:px-12 py-5 flex flex-col md:flex-row items-center justify-between gap-4">
                    <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', fontWeight: 300, letterSpacing: '0.1em', color: 'rgba(10,10,10,0.35)' }}>
                        © {new Date().getFullYear()} PGM Developers. All Rights Reserved.
                    </span>
                    <span style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '13px', fontStyle: 'italic', color: '#c2a06a', letterSpacing: '0.08em' }}>
                        Build. Inspire. Endure.
                    </span>
                </div>
            </div>
        </footer>
    )
}
