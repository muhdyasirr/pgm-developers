'use client'

import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import clsx from 'clsx'
import { Menu, X } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Expertise', href: '#expertise' },
    { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)
    const navRef = useRef<HTMLElement>(null)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 80)
        }
        window.addEventListener('scroll', handleScroll, { passive: true })
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const handleNavClick = (href: string) => {
        setMenuOpen(false)
        const el = document.querySelector(href)
        if (el) {
            el.scrollIntoView({ behavior: 'smooth' })
        }
    }

    return (
        <>
            <nav
                ref={navRef}
                className={clsx(
                    'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
                    scrolled
                        ? 'bg-light/95 backdrop-blur-md shadow-md shadow-black/5 py-4'
                        : 'bg-transparent py-6'
                )}
            >
                <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
                    {/* Logo */}
                    <a
                        href="#"
                        className="flex items-center gap-2 group"
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    >
                        <div className="flex flex-col items-start">
                            <span className="text-2xl font-black tracking-wider text-dark leading-none">
                                PGM
                            </span>
                            <span className="text-[10px] font-light tracking-[0.3em] text-gold uppercase leading-none mt-0.5">
                                Developers
                            </span>
                        </div>
                        <div className="w-px h-8 bg-gold/40 mx-2" />
                        <span className="text-[9px] font-light tracking-[0.2em] text-dark/50 uppercase leading-tight max-w-[80px]">
                            Build. Inspire. Endure.
                        </span>
                    </a>

                    {/* Desktop Nav */}
                    <ul className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <li key={link.href}>
                                <button
                                    onClick={() => handleNavClick(link.href)}
                                    className="text-sm font-medium tracking-widest uppercase text-dark/70 hover:text-gold transition-colors duration-300 relative group"
                                >
                                    {link.label}
                                    <span className="absolute -bottom-1 left-0 w-0 h-px bg-gold group-hover:w-full transition-all duration-300" />
                                </button>
                            </li>
                        ))}
                        <li>
                            <button
                                onClick={() => handleNavClick('#contact')}
                                className="ml-4 px-6 py-2.5 bg-gold text-dark font-semibold text-xs tracking-widest uppercase hover:bg-gold-light transition-colors duration-300"
                            >
                                Get In Touch
                            </button>
                        </li>
                    </ul>

                    {/* Mobile Hamburger */}
                    <button
                        className="md:hidden text-dark/80 hover:text-gold transition-colors"
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label="Toggle menu"
                    >
                        {menuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </nav>

            {/* Mobile Drawer */}
            <div
                className={clsx(
                    'fixed inset-0 z-40 bg-light/95 backdrop-blur-lg flex flex-col justify-center items-center gap-8 transition-all duration-500 md:hidden',
                    menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
                )}
            >
                {navLinks.map((link) => (
                    <button
                        key={link.href}
                        onClick={() => handleNavClick(link.href)}
                        className="text-3xl font-light tracking-widest uppercase text-dark/80 hover:text-gold transition-colors duration-300"
                    >
                        {link.label}
                    </button>
                ))}
                <button
                    onClick={() => handleNavClick('#contact')}
                    className="mt-4 px-10 py-4 bg-gold text-dark font-semibold tracking-widest uppercase text-sm hover:bg-gold-light transition-colors"
                >
                    Get In Touch
                </button>
            </div>
        </>
    )
}
