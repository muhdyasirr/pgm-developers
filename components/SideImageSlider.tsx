'use client'

import { useRef, useCallback } from 'react'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Autoplay } from 'swiper/modules'
import type { Swiper as SwiperType } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import { ChevronLeft, ChevronRight, Download } from 'lucide-react'
import ScrollReveal from './ScrollReveal'
import { useEnquiry } from '@/context/EnquiryContext'

// Brochure pages: 0002 → 0018
const PAGES = Array.from({ length: 17 }, (_, i) => {
    const num = String(i + 2).padStart(4, '0')
    return `/PGM-Developers-Brochure-2025_pages-to-jpg-${num}.jpg`
})

const PDF_FILE = '/PGM-Developers-Brochure-2025.pdf'

export default function BrochureSection() {
    const mainSwiperRef = useRef<SwiperType | null>(null)
    const { hasSubmitted, open } = useEnquiry()

    /** Directly triggers the browser download */
    const triggerDownload = useCallback(() => {
        const link = document.createElement('a')
        link.href = PDF_FILE
        link.download = 'PGM-Developers-Brochure-2025.pdf'
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
    }, [])

    /**
     * If the user has already submitted the enquiry form → download right away.
     * Otherwise → open the modal; triggerDownload fires automatically on success.
     */
    const handleDownloadClick = useCallback(() => {
        if (hasSubmitted) {
            triggerDownload()
        } else {
            open(triggerDownload)
        }
    }, [hasSubmitted, open, triggerDownload])

    return (
        <section
            id="brochure"
            className="relative overflow-hidden"
            style={{ background: 'linear-gradient(160deg, #fefcf8 0%, #faf7f2 60%, #f4f0e8 100%)' }}
        >
            {/* Subtle gold texture overlay */}
            <div
                className="absolute inset-0 opacity-30 pointer-events-none"
                style={{
                    backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(194,160,106,0.07) 1px, transparent 0)',
                    backgroundSize: '40px 40px',
                }}
            />

            <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 md:px-12 py-12 md:py-20">

                {/* ── Header ── */}
                <ScrollReveal className="flex items-center gap-4 mb-10">
                    <div className="w-8 h-px bg-gold" />
                    <span className="lux-label">Rivera Villas</span>
                    <h2 style={{
                        fontFamily: 'Cormorant Garamond, serif',
                        fontSize: 'clamp(22px, 5vw, 52px)',
                        fontWeight: 700,
                        color: '#0a0a0a',
                        lineHeight: 1.05,
                    }}>
                        Project{' '}
                        <em style={{ fontStyle: 'italic', color: '#c2a06a' }}>Brochure</em>
                    </h2>
                </ScrollReveal>

                {/* ── Auto slider ── */}
                <ScrollReveal delay={0.1}>
                    <div className="relative" style={{ borderRadius: '16px', overflow: 'hidden', boxShadow: '0 20px 60px rgba(194,160,106,0.15), 0 0 0 1px rgba(194,160,106,0.2)' }}>

                        <Swiper
                            modules={[Navigation, Autoplay]}
                            onSwiper={s => { mainSwiperRef.current = s }}
                            loop
                            autoplay={{ delay: 3000, disableOnInteraction: false, pauseOnMouseEnter: true }}
                            speed={600}
                            style={{ aspectRatio: '16/10', background: '#f4f0e8' }}
                        >
                            {PAGES.map((src, i) => (
                                <SwiperSlide key={i}>
                                    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
                                        <Image
                                            src={src}
                                            alt={`Brochure page ${i + 2}`}
                                            fill
                                            className="object-contain"
                                            sizes="(max-width: 1280px) 100vw, 1280px"
                                            priority={i < 2}
                                        />
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </ScrollReveal>

                {/* ── Bottom CTA ── */}
                <ScrollReveal delay={0.2}>
                    <div
                        className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-5 p-6 sm:p-8"
                        style={{
                            background: 'rgba(255,252,248,0.9)',
                            border: '1px solid rgba(194,160,106,0.25)',
                            borderRadius: '14px',
                            boxShadow: '6px 6px 20px rgba(194,160,106,0.1), -4px -4px 12px rgba(255,255,255,0.85)',
                        }}
                    >
                        <div>
                            <p style={{
                                fontFamily: 'Cormorant Garamond, serif',
                                fontSize: '22px',
                                fontWeight: 700,
                                color: '#0a0a0a',
                                lineHeight: 1.2,
                            }}>
                                PGM Developers <em style={{ fontStyle: 'italic', color: '#c2a06a' }}>Brochure</em>
                            </p>
                            {!hasSubmitted && (
                                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#6b7280', marginTop: '4px' }}>
                                    Fill in a quick form to unlock the PDF download
                                </p>
                            )}
                        </div>

                        <button
                            onClick={handleDownloadClick}
                            className="lux-btn-filled inline-flex items-center gap-3 flex-shrink-0"
                        >
                            <Download size={15} />
                            {hasSubmitted ? 'Download PDF' : 'Get Brochure'}
                        </button>
                    </div>
                </ScrollReveal>

            </div>
        </section>
    )
}
