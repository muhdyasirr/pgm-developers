'use client'

import { useState } from 'react'

// ─── Replace these with real numbers when ready ───
const PHONE_NUMBER = '+919072224466'
const WHATSAPP_NUMBER = '+919072224466' // with country code, no spaces or +
const WHATSAPP_MESSAGE = 'Hello! I am interested in Rivera Villas. Please share more details.'
// ──────────────────────────────────────────────────

export default function FloatingContact() {
    const [hoveredCall, setHoveredCall] = useState(false)
    const [hoveredWA, setHoveredWA] = useState(false)

    const waLink = `https://wa.me/${WHATSAPP_NUMBER.replace(/\D/g, '')}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`
    tel: +919072224466
    return (
        <div
            style={{
                position: 'fixed',
                right: '20px',
                bottom: '36px',
                zIndex: 9999,
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
                alignItems: 'flex-end',
            }}
        >
            {/* WhatsApp */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                {/* Tooltip */}
                <span
                    style={{
                        fontFamily: 'Inter, sans-serif',
                        fontSize: '12px',
                        fontWeight: 600,
                        letterSpacing: '0.08em',
                        color: '#fff',
                        background: '#25D366',
                        padding: '5px 12px',
                        borderRadius: '4px',
                        whiteSpace: 'nowrap',
                        pointerEvents: 'none',
                        opacity: hoveredWA ? 1 : 0,
                        transform: hoveredWA ? 'translateX(0)' : 'translateX(8px)',
                        transition: 'opacity 0.25s ease, transform 0.25s ease',
                        boxShadow: '0 4px 14px rgba(37,211,102,0.35)',
                    }}
                >
                    Chat on WhatsApp
                </span>

                <a
                    href={waLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Chat on WhatsApp"
                    onMouseEnter={() => setHoveredWA(true)}
                    onMouseLeave={() => setHoveredWA(false)}
                    style={{
                        width: '64px',
                        height: '64px',
                        borderRadius: '50%',
                        background: hoveredWA ? '#1ebe5b' : '#25D366',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: hoveredWA
                            ? '0 6px 24px rgba(37,211,102,0.55)'
                            : '0 4px 16px rgba(37,211,102,0.38)',
                        transition: 'background 0.25s ease, box-shadow 0.25s ease, transform 0.25s ease',
                        transform: hoveredWA ? 'scale(1.1)' : 'scale(1)',
                        flexShrink: 0,
                    }}
                >
                    {/* WhatsApp SVG */}
                    <svg width="34" height="34" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd"
                            d="M16 3C9.373 3 4 8.373 4 15c0 2.34.672 4.523 1.834 6.371L4 29l7.85-1.809A11.944 11.944 0 0016 28c6.627 0 12-5.373 12-12S22.627 3 16 3z"
                            fill="white" />
                        <path
                            d="M21.5 19.26c-.28-.14-1.65-.81-1.9-.9-.26-.1-.44-.14-.63.14-.18.28-.72.9-.88 1.08-.16.18-.33.2-.6.07-.28-.14-1.17-.43-2.23-1.37-.82-.73-1.38-1.63-1.54-1.9-.16-.28-.02-.43.12-.57.12-.12.28-.32.42-.47.14-.16.18-.28.28-.46.1-.18.05-.35-.02-.49-.07-.14-.63-1.52-.87-2.08-.23-.55-.46-.47-.63-.48h-.54c-.18 0-.47.07-.72.35-.24.28-.93.91-.93 2.22 0 1.31.95 2.58 1.08 2.75.14.18 1.87 2.86 4.53 4.01.63.27 1.12.43 1.5.55.63.2 1.2.17 1.66.1.5-.07 1.55-.63 1.77-1.24.22-.6.22-1.12.15-1.24-.07-.1-.25-.17-.53-.3z"
                            fill="#25D366" />
                    </svg>
                </a>
            </div>

            {/* Call */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                {/* Tooltip */}
                <span
                    style={{
                        fontFamily: 'Inter, sans-serif',
                        fontSize: '12px',
                        fontWeight: 600,
                        letterSpacing: '0.08em',
                        color: '#fff',
                        background: '#c2a06a',
                        padding: '5px 12px',
                        borderRadius: '4px',
                        whiteSpace: 'nowrap',
                        pointerEvents: 'none',
                        opacity: hoveredCall ? 1 : 0,
                        transform: hoveredCall ? 'translateX(0)' : 'translateX(8px)',
                        transition: 'opacity 0.25s ease, transform 0.25s ease',
                        boxShadow: '0 4px 14px rgba(194,160,106,0.4)',
                    }}
                >
                    Call Us Now
                </span>

                <a
                    href={`tel:${PHONE_NUMBER}`}
                    aria-label="Call Us"
                    onMouseEnter={() => setHoveredCall(true)}
                    onMouseLeave={() => setHoveredCall(false)}
                    style={{
                        width: '64px',
                        height: '64px',
                        borderRadius: '50%',
                        background: hoveredCall
                            ? 'linear-gradient(135deg, #dfc08a 0%, #c2a06a 100%)'
                            : 'linear-gradient(135deg, #c2a06a 0%, #a8875a 100%)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: hoveredCall
                            ? '0 6px 24px rgba(194,160,106,0.6)'
                            : '0 4px 16px rgba(194,160,106,0.4)',
                        transition: 'background 0.25s ease, box-shadow 0.25s ease, transform 0.25s ease',
                        transform: hoveredCall ? 'scale(1.1)' : 'scale(1)',
                        flexShrink: 0,
                    }}
                >
                    {/* Phone SVG */}
                    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"
                            fill="white"
                        />
                    </svg>
                </a>
            </div>
        </div>
    )
}
