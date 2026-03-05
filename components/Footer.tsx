'use client'

import { Instagram, Facebook, Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react'

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
    const handleNav = (href: string) => {
        const el = document.querySelector(href)
        if (el) el.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <footer className="bg-light-2 border-t border-dark/5">
            {/* Main Footer */}
            <div className="max-w-7xl mx-auto px-6 md:px-12 py-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
                    {/* Brand */}
                    <div className="lg:col-span-1">
                        <div className="mb-6">
                            <div className="text-3xl font-black tracking-wider text-dark leading-none">PGM</div>
                            <div className="text-[10px] font-light tracking-[0.35em] text-gold uppercase mt-0.5">
                                Developers
                            </div>
                        </div>
                        <p className="text-gray-text text-sm font-light leading-relaxed mb-6 max-w-xs">
                            PGM Group of Companies consists of 14 great organizations across Kerala and Gulf Countries with successful business experience in Rubber, Gold, Shipping & Transport and Real-estate & Developers.
                        </p>
                        {/* Socials */}
                        <div className="flex items-center gap-3">
                            {socials.map(({ icon: Icon, href, label }) => (
                                <a
                                    key={label}
                                    href={href}
                                    aria-label={label}
                                    className="w-10 h-10 border border-dark/10 flex items-center justify-center text-gray-text hover:border-gold hover:text-gold transition-colors duration-300"
                                >
                                    <Icon size={16} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-dark text-xs font-semibold tracking-[0.25em] uppercase mb-6">
                            Quick Links
                        </h4>
                        <ul className="space-y-3">
                            {quickLinks.map((link) => (
                                <li key={link.href}>
                                    <button
                                        onClick={() => handleNav(link.href)}
                                        className="text-gray-text hover:text-gold text-sm font-light transition-colors duration-300 flex items-center gap-2 group"
                                    >
                                        <span className="w-0 group-hover:w-4 h-px bg-gold transition-all duration-300" />
                                        {link.label}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-dark text-xs font-semibold tracking-[0.25em] uppercase mb-6">
                            Services
                        </h4>
                        <ul className="space-y-3">
                            {services.map((s) => (
                                <li key={s}>
                                    <span className="text-gray-text text-sm font-light">{s}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-dark text-xs font-semibold tracking-[0.25em] uppercase mb-6">
                            Contact Us
                        </h4>
                        <ul className="space-y-4">
                            <li>
                                <a
                                    href="mailto:info@pgmdevelopers.com"
                                    className="flex items-start gap-3 text-gray-text hover:text-gold text-sm font-light transition-colors duration-300 group"
                                >
                                    <Mail size={14} className="mt-0.5 shrink-0" />
                                    info@pgmdevelopers.com
                                </a>
                            </li>
                            <li>
                                <a
                                    href="tel:+919072224466"
                                    className="flex items-center gap-3 text-gray-text hover:text-gold text-sm font-light transition-colors duration-300"
                                >
                                    <Phone size={14} className="shrink-0" />
                                    +91 90 72 22 44 66
                                </a>
                            </li>
                            <li>
                                <div className="flex items-start gap-3 text-gray-text text-sm font-light">
                                    <MapPin size={14} className="mt-0.5 shrink-0" />
                                    <span>
                                        Kodathipadi, Mannarkkad,
                                        <br />
                                        Kerala, India — 678582
                                    </span>
                                </div>
                            </li>
                        </ul>

                        <a
                            href="mailto:info@pgmdevelopers.com"
                            className="mt-8 inline-flex items-center gap-2 text-gold text-xs font-semibold tracking-widest uppercase border border-gold/40 px-5 py-3 hover:bg-gold hover:text-dark transition-colors duration-300"
                        >
                            Send Enquiry
                            <ArrowUpRight size={14} />
                        </a>
                    </div>
                </div>
            </div>

            {/* Bottom bar */}
            <div className="border-t border-dark/5">
                <div className="max-w-7xl mx-auto px-6 md:px-12 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
                    <span className="text-dark/40 text-xs font-light tracking-widest">
                        © {new Date().getFullYear()} PGM Developers. All Rights Reserved.
                    </span>
                    <span className="text-dark/40 text-xs font-light">
                        Build. Inspire. Endure.
                    </span>
                </div>
            </div>
        </footer>
    )
}
