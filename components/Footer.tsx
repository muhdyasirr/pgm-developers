'use client'

import { Instagram, Facebook, Mail, Phone, MapPin } from 'lucide-react'
import Image from 'next/image'
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
            <div className="max-w-7xl mx-auto px-5 sm:px-6 md:px-12 py-14 md:py-20">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">

                    {/* Brand & RERA (Side-by-side on mobile) */}
                    <div className="lg:col-span-1">
                        <div className="flex flex-row justify-between items-center lg:flex-col lg:items-start mb-8 gap-4">
                            {/* Logo */}
                            <div className="mb-0 lg:mb-6">
                                <Image
                                    src="/logo1.png"
                                    alt="PGM Rivera"
                                    width={180}
                                    height={70}
                                    className="object-contain"
                                    style={{ height: '60px', width: 'auto' }}
                                />
                            </div>

                            {/* RERA Block (only side-by-side on mobile, or stacked below logo on larger screens) */}
                            <div className="flex items-center gap-2 lg:mt-2">
                                <div className="flex flex-col items-end lg:items-start">
                                    <p className="text-[9px] font-bold text-dark tracking-wider uppercase">K-RERA/PRJ/PKD/071/2024</p>
                                    <p className="text-[8px] text-gray-text">rera.kerala.gov.in</p>
                                </div>
                                <div className="bg-white p-1 rounded-sm border border-gold/20">
                                    <Image
                                        src="/qr.png"
                                        alt="RERA QR"
                                        width={45}
                                        height={45}
                                        className="object-contain"
                                    />
                                </div>
                            </div>
                        </div>

                        <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', fontWeight: 300, lineHeight: 1.85, color: '#6b7280', marginBottom: '20px', maxWidth: '280px' }}>
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
                                    <span>Kodathipadi, Mannarkkad,<br />Kerala, India - 678582</span>
                                </div>
                            </li>
                        </ul>

                        <button onClick={() => openEnquiry()} className="lux-btn-filled mt-8 inline-flex">
                            Send Enquiry
                        </button>
                    </div>
                </div>
            </div>

            {/* Bottom bar */}
            <div style={{ borderTop: '1px solid rgba(194,160,106,0.12)' }}>
                <div className="max-w-7xl mx-auto px-5 sm:px-6 md:px-12 py-5 flex flex-col md:flex-row items-center justify-between gap-4">
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
