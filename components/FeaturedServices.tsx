'use client'

import { useEnquiry } from '@/context/EnquiryContext'

const services = [
    {
        number: '01',
        title: 'Property Consulting',
        desc: 'Expert guidance on acquiring your perfect property in Kerala\'s Malabar region.',
        icon: (
            <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
                <rect x="4" y="6" width="20" height="24" rx="2" stroke="#c2a06a" strokeWidth="1.5" />
                <line x1="9" y1="13" x2="19" y2="13" stroke="#c2a06a" strokeWidth="1.5" strokeLinecap="round" />
                <line x1="9" y1="18" x2="19" y2="18" stroke="#c2a06a" strokeWidth="1.5" strokeLinecap="round" />
                <line x1="9" y1="23" x2="15" y2="23" stroke="#c2a06a" strokeWidth="1.5" strokeLinecap="round" />
                <circle cx="27" cy="27" r="5" stroke="#c2a06a" strokeWidth="1.5" />
                <path d="M30.5 30.5 L33 33" stroke="#c2a06a" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
        ),
    },
    {
        number: '02',
        title: 'Site Visits',
        desc: 'Curated on-site tours that give you a first-hand feel of your future home.',
        icon: (
            <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
                <path d="M9 27 L9 16 L18 9 L27 16 L27 27 Z" stroke="#c2a06a" strokeWidth="1.5" strokeLinejoin="round" />
                <rect x="15" y="20" width="6" height="7" stroke="#c2a06a" strokeWidth="1.5" />
                <path d="M5 17 L18 7 L31 17" stroke="#c2a06a" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M21 10 L21 7 L26 7 L26 14" stroke="#c2a06a" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
        ),
    },
    {
        number: '03',
        title: 'Legal Support & Documentation',
        desc: 'End-to-end legal assistance for a seamless and stress-free purchase process.',
        icon: (
            <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
                <rect x="6" y="4" width="18" height="22" rx="2" stroke="#c2a06a" strokeWidth="1.5" />
                <line x1="10" y1="10" x2="20" y2="10" stroke="#c2a06a" strokeWidth="1.5" strokeLinecap="round" />
                <line x1="10" y1="15" x2="20" y2="15" stroke="#c2a06a" strokeWidth="1.5" strokeLinecap="round" />
                <line x1="10" y1="20" x2="15" y2="20" stroke="#c2a06a" strokeWidth="1.5" strokeLinecap="round" />
                <rect x="18" y="22" width="12" height="9" rx="1.5" stroke="#c2a06a" strokeWidth="1.5" />
                <path d="M21 26.5 L23 28.5 L27 24.5" stroke="#c2a06a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
    },
    {
        number: '04',
        title: 'Interior Design & Customization',
        desc: 'Bespoke interiors designed around your lifestyle and personal aesthetic.',
        icon: (
            <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
                <path d="M10 29 L10 18 C10 16 12 14 14 14 L17 14" stroke="#c2a06a" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M17 10 C17 10 19 7 22 9 C24 10 24 13 22 14 L14 26" stroke="#c2a06a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M22 14 L26 10 C28 8 30 10 30 12 C30 14 28 16 26 16 L21 17" stroke="#c2a06a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M24 24 Q27 20.5 30 24 Q33 27 30 30 L24 30 Z" stroke="#c2a06a" strokeWidth="1.5" strokeLinejoin="round" />
            </svg>
        ),
    },
    {
        number: '05',
        title: 'Dedicated After‑sales Service',
        desc: 'Ongoing support and care long after you\&apos;ve moved into your dream home.',
        icon: (
            <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
                <circle cx="18" cy="14" r="7" stroke="#c2a06a" strokeWidth="1.5" />
                <path d="M13 13 C13 10 16 8 20 10 C22 11 22 14 20 15 L18 16" stroke="#c2a06a" strokeWidth="1.5" strokeLinecap="round" />
                <circle cx="18" cy="19" r="1.2" fill="#c2a06a" />
                <path d="M7 31 C7 25 12 22 18 22 C24 22 29 25 29 31" stroke="#c2a06a" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
        ),
    },
]

export default function FeaturedServices() {
    const { open: openEnquiry } = useEnquiry()
    return (
        <section className="w-full py-28 px-6 md:px-16 relative overflow-hidden" style={{ background: '#fefcf8' }}>
            {/* Background decoration */}
            <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full pointer-events-none"
                style={{ background: 'radial-gradient(circle, rgba(194,160,106,0.07) 0%, transparent 70%)', transform: 'translate(30%, 30%)' }} />

            <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16">
                {/* Left: heading block */}
                <div className="md:w-2/5 flex flex-col justify-center">
                    <p className="lux-label mb-5">What We Offer</p>
                    <h2 className="mb-6" style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(40px, 4.8vw, 64px)', fontWeight: 700, color: '#0a0a0a', lineHeight: 1.05, letterSpacing: '-0.01em' }}>
                        Featured <em style={{ fontStyle: 'italic', color: '#c2a06a' }}>Services</em>
                    </h2>
                    <p className="lux-body mb-10 max-w-sm">
                        We&apos;ll walk with you through the entire process of acquiring your dream home — one milestone at a time.
                    </p>
                    <button className="lux-btn self-start" onClick={() => openEnquiry()}>
                        Enquire Now <span style={{ fontSize: '14px' }}>↗</span>
                    </button>
                </div>

                {/* Right: 2+3 grid of clay cards */}
                <div className="md:w-3/5 flex flex-col gap-4">
                    {/* Row 1 */}
                    <div className="grid grid-cols-2 gap-4">
                        {services.slice(0, 2).map((svc) => <ServiceCard key={svc.number} svc={svc} />)}
                    </div>
                    {/* Row 2 */}
                    <div className="grid grid-cols-3 gap-4">
                        {services.slice(2).map((svc) => <ServiceCard key={svc.number} svc={svc} />)}
                    </div>
                </div>
            </div>
        </section>
    )
}

function ServiceCard({ svc }: { svc: typeof services[number] }) {
    return (
        <div className="clay-card p-6 flex flex-col justify-between" style={{ minHeight: '190px' }}>
            <div>
                <p className="lux-label mb-4" style={{ color: 'rgba(194,160,106,0.65)', fontSize: '11px' }}>{svc.number}</p>
                <div className="mb-4">{svc.icon}</div>
            </div>
            <div>
                <p className="mb-2" style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '20px', fontWeight: 700, color: '#0a0a0a', lineHeight: 1.2 }}>
                    {svc.title}
                </p>
                <p className="lux-body mb-3" style={{ fontSize: '15px', lineHeight: 1.6 }}>{svc.desc}</p>
                <button className="flex items-center gap-1.5" style={{ fontFamily: 'Inter, sans-serif', fontSize: '11px', fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#c2a06a' }}>
                    View More <span style={{ fontSize: '11px' }}>↗</span>
                </button>
            </div>
        </div>
    )
}
