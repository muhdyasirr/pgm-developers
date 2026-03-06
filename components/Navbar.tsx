'use client'

import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import clsx from 'clsx'
import { useEnquiry } from '@/context/EnquiryContext'

const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Amenities', href: '#expertise' },
]

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)
    const { open: openEnquiry } = useEnquiry()

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 80)
        window.addEventListener('scroll', handleScroll, { passive: true })
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const handleNavClick = (href: string) => {
        setMenuOpen(false)
        const el = document.querySelector(href)
        if (el) el.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <>
            <nav
                className={clsx(
                    'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
                    scrolled ? 'py-3 shadow-[0_1px_0_rgba(194,160,106,0.15)]' : 'bg-transparent py-6'
                )}
                style={scrolled ? {
                    background: 'rgba(254,252,248,0.82)',
                    backdropFilter: 'blur(20px) saturate(160%)',
                    WebkitBackdropFilter: 'blur(20px) saturate(160%)',
                } : {}}
            >
                <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
                    {/* Logo */}
                    <a href="#" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="flex items-center gap-3 group">
                        <div className="flex flex-col items-start">
                            <span className={clsx(
                                'text-2xl font-black tracking-wider leading-none transition-colors duration-500',
                                scrolled ? 'text-[#0a0a0a]' : 'text-white'
                            )} style={{ fontFamily: 'Outfit, sans-serif' }}>PGM</span>
                            <span className="text-[11px] font-light tracking-[0.35em] uppercase leading-none mt-0.5 text-gold font-cormorant italic">
                                Developers
                            </span>
                        </div>
                        <div className="w-px h-7 mx-1" style={{ background: 'rgba(194,160,106,0.35)' }} />
                        <span className={clsx(
                            'text-[10px] font-light tracking-[0.18em] uppercase leading-tight max-w-[72px] font-inter transition-colors duration-500',
                            scrolled ? 'text-[#6b7280]' : 'text-white/55'
                        )}>Build. Inspire. Endure.</span>
                    </a>

                    {/* Desktop Nav */}
                    <ul className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <li key={link.href}>
                                <button
                                    onClick={() => handleNavClick(link.href)}
                                    className={clsx(
                                        'text-[13px] font-inter font-medium tracking-[0.18em] uppercase transition-colors duration-300',
                                        scrolled ? 'text-[#0a0a0a]/70 hover:text-gold' : 'text-white/75 hover:text-white'
                                    )}
                                >
                                    {link.label}
                                </button>
                            </li>
                        ))}
                        <li>
                            <button
                                onClick={() => openEnquiry()}
                                className={clsx(
                                    'ml-2 px-5 py-2.5 text-[12px] font-inter font-semibold tracking-[0.18em] uppercase border rounded-sm transition-all duration-300',
                                    scrolled
                                        ? 'border-[rgba(194,160,106,0.5)] text-[#0a0a0a] hover:bg-gold hover:border-gold hover:text-white'
                                        : 'border-white/40 text-white hover:bg-white/15 hover:border-white/70'
                                )}
                            >
                                Enquire Now
                            </button>
                        </li>
                    </ul>

                    {/* Mobile hamburger */}
                    <button
                        className={clsx('md:hidden transition-colors', scrolled ? 'text-[#0a0a0a]/80' : 'text-white/90')}
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label="Toggle menu"
                    >
                        {menuOpen ? <X size={22} /> : <Menu size={22} />}
                    </button>
                </div>
            </nav>

            {/* Mobile drawer — glassmorphism */}
            <div
                className={clsx(
                    'fixed inset-0 z-40 flex flex-col justify-center items-center gap-8 transition-all duration-500 md:hidden',
                    menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
                )}
                style={{
                    background: 'rgba(254,252,248,0.94)',
                    backdropFilter: 'blur(24px)',
                    WebkitBackdropFilter: 'blur(24px)',
                }}
            >
                {navLinks.map((link) => (
                    <button
                        key={link.href}
                        onClick={() => handleNavClick(link.href)}
                        className="font-cormorant text-3xl font-semibold tracking-widest text-[#0a0a0a]/75 hover:text-gold transition-colors duration-300"
                    >
                        {link.label}
                    </button>
                ))}
                <button onClick={() => openEnquiry()} className="lux-btn-filled mt-4">
                    Enquire Now
                </button>
            </div>
        </>
    )
}
