'use client'

import { Mail, Phone, MapPin } from 'lucide-react'
import Image from 'next/image'
import { useEnquiry } from '@/context/EnquiryContext'

export default function Footer() {
    const { open: openEnquiry } = useEnquiry()

    return (
        <footer style={{ background: '#faf7f2', borderTop: '1px solid rgba(194,160,106,0.15)' }}>
            <div className="max-w-7xl mx-auto px-5 sm:px-6 md:px-12 py-16 md:py-24">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-16 lg:gap-32">

                    <div className="flex flex-col gap-10">
                        {/* Logo */}
                        <div className="flex justify-center md:justify-start">
                            <Image
                                src="/logo1.png"
                                alt="PGM Rivera"
                                width={240}
                                height={100}
                                className="object-contain"
                                style={{ height: '90px', width: 'auto' }}
                            />
                        </div>

                        {/* RERA Card - Prominent Feature */}
                        <div className="bg-white rounded-xl border border-gold/15 p-6 shadow-xl shadow-gold/5 flex flex-col sm:flex-row items-center justify-between gap-6 max-w-sm">
                            <div className="text-center sm:text-left">
                                <p className="text-[12px] font-bold text-dark tracking-wider uppercase mb-1">
                                    K-RERA/PRJ/PKD/071/2024
                                </p>
                                <p className="text-[11px] text-gray-text">rera.kerala.gov.in</p>
                            </div>
                            <div className="bg-light-2 p-1.5 rounded-lg border border-gold/10">
                                <Image
                                    src="/qr.png"
                                    alt="RERA QR"
                                    width={90}
                                    height={90}
                                    className="object-contain"
                                />
                            </div>
                        </div>

                        {/* Text Description */}
                        <p
                            style={{
                                fontFamily: 'Inter, sans-serif',
                                fontSize: '15px',
                                fontWeight: 300,
                                lineHeight: 1.8,
                                color: '#6b7280',
                                maxWidth: '440px'
                            }}
                        >
                            PGM Group of Companies consists of 14 great organizations across Kerala and Gulf Countries with successful business experience in Rubber, Gold, Shipping & Transport and Real-estate & Developers.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-outfit text-sm font-bold tracking-widest uppercase mb-6" style={{ color: '#0a0a0a' }}>
                            Get In Touch
                        </h4>

                        <ul className="space-y-4">
                            <li>
                                <a
                                    href="mailto:info@pgmdevelopers.com"
                                    className="flex items-start gap-4 transition-all duration-300 group"
                                    style={{
                                        fontFamily: 'Inter, sans-serif',
                                        fontSize: '15px',
                                        fontWeight: 400,
                                        color: '#6b7280'
                                    }}
                                >
                                    <div className="w-8 h-8 rounded-full bg-gold/5 flex items-center justify-center shrink-0 group-hover:bg-gold/10 transition-colors">
                                        <Mail size={14} className="color-gold" style={{ color: '#c2a06a' }} />
                                    </div>
                                    <span className="mt-1 group-hover:text-gold transition-colors">info@pgmdevelopers.com</span>
                                </a>
                            </li>

                            <li>
                                <a
                                    href="tel:+919072224466"
                                    className="flex items-center gap-4 transition-all duration-300 group"
                                    style={{
                                        fontFamily: 'Inter, sans-serif',
                                        fontSize: '15px',
                                        fontWeight: 400,
                                        color: '#6b7280'
                                    }}
                                >
                                    <div className="w-8 h-8 rounded-full bg-gold/5 flex items-center justify-center shrink-0 group-hover:bg-gold/10 transition-colors">
                                        <Phone size={14} style={{ color: '#c2a06a' }} />
                                    </div>
                                    <span className="group-hover:text-gold transition-colors">+91 90 72 22 44 66</span>
                                </a>
                            </li>

                            <li>
                                <div
                                    className="flex items-start gap-4"
                                    style={{
                                        fontFamily: 'Inter, sans-serif',
                                        fontSize: '15px',
                                        fontWeight: 400,
                                        color: '#6b7280'
                                    }}
                                >
                                    <div className="w-8 h-8 rounded-full bg-gold/5 flex items-center justify-center shrink-0">
                                        <MapPin size={14} style={{ color: '#c2a06a' }} />
                                    </div>
                                    <span className="mt-1">
                                        Kodathipadi, Mannarkkad,<br />
                                        Kerala, India - 678582
                                    </span>
                                </div>
                            </li>
                        </ul>

                        <button
                            onClick={() => openEnquiry()}
                            className="bg-gold text-white px-8 py-3 rounded-full mt-8 font-inter text-xs font-bold tracking-widest uppercase hover:bg-dark transition-all duration-300 shadow-lg shadow-gold/20"
                        >
                            Send Enquiry
                        </button>
                    </div>

                </div>
            </div>

            <div style={{ borderTop: '1px solid rgba(194,160,106,0.12)' }}>
                <div className="max-w-7xl mx-auto px-5 sm:px-6 md:px-12 py-5 flex flex-col md:flex-row items-center justify-between gap-4">

                    <span
                        style={{
                            fontFamily: 'Inter, sans-serif',
                            fontSize: '13px',
                            fontWeight: 300,
                            letterSpacing: '0.1em',
                            color: 'rgba(10,10,10,0.35)'
                        }}
                    >
                        © {new Date().getFullYear()} PGM Developers. All Rights Reserved.
                    </span>

                    <span
                        style={{
                            fontFamily: 'Cormorant Garamond, serif',
                            fontSize: '13px',
                            fontStyle: 'italic',
                            color: '#c2a06a',
                            letterSpacing: '0.08em'
                        }}
                    >
                        Build. Inspire. Endure.
                    </span>

                </div>
            </div>

        </footer>
    )
}