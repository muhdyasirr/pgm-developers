'use client'

import { useEffect, useRef, useState } from 'react'
import { X, CheckCircle, Loader2 } from 'lucide-react'
import { useEnquiry } from '@/context/EnquiryContext'
import { useRouter } from 'next/navigation'

const villaOptions = [
    { value: '', label: 'Select Preferred Budget' },
    { value: '80+ Lakhs', label: '₹ 80+ Lakhs' },
    { value: '1+ Crore', label: '₹ 1+ Crore' },
]

type Status = 'idle' | 'loading' | 'success' | 'error'

export default function EnquiryModal() {
    const { isOpen, close, setSubmitted } = useEnquiry()
    const overlayRef = useRef<HTMLDivElement>(null)
    const router = useRouter()

    const [form, setForm] = useState({ name: '', phone: '', villaType: '', message: '' })
    const [status, setStatus] = useState<Status>('idle')
    const [errorMsg, setErrorMsg] = useState('')

    // Close on ESC
    useEffect(() => {
        const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') close() }
        if (isOpen) document.addEventListener('keydown', handler)
        return () => document.removeEventListener('keydown', handler)
    }, [isOpen, close])

    // Lock body scroll
    useEffect(() => {
        document.body.style.overflow = isOpen ? 'hidden' : ''
        return () => { document.body.style.overflow = '' }
    }, [isOpen])

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        if (!form.name || !form.phone) {
            setErrorMsg('Please fill in your name and phone number.')
            return
        }
        setErrorMsg('')
        setStatus('loading')
        try {
            const res = await fetch('/api/enquiry', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(form),
            })
            if (res.ok) {
                setSubmitted()
                setForm({ name: '', phone: '', villaType: '', message: '' })
                close()
                router.push('/thank-you')
            } else {
                throw new Error('Server error')
            }
        } catch {
            setStatus('error')
            setErrorMsg('Something went wrong. Please call us directly.')
        }
    }

    const handleReset = () => { setStatus('idle'); setErrorMsg('') }

    if (!isOpen) return null

    return (
        /* ── Backdrop ── */
        <div
            ref={overlayRef}
            className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-4"
            style={{ background: 'rgba(10,10,10,0.65)', backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)' }}
            onClick={(e) => { if (e.target === overlayRef.current) close() }}
        >
            <style>{`
                @keyframes modalIn {
                    from { opacity: 0; transform: scale(0.94) translateY(12px); }
                    to   { opacity: 1; transform: scale(1) translateY(0); }
                }
                .lux-input {
                    width: 100%;
                    padding: 10px 14px;
                    background: rgba(255,252,248,0.7);
                    border: 1px solid rgba(194,160,106,0.22);
                    border-radius: 9px;
                    font-family: 'Inter', sans-serif;
                    font-size: 14px;
                    color: #0a0a0a;
                    outline: none;
                    transition: border-color 0.25s ease, box-shadow 0.25s ease, background 0.25s ease;
                    -webkit-appearance: none;
                }
                .lux-input::placeholder { color: #aaa; }
                .lux-input:focus {
                    border-color: rgba(194,160,106,0.65);
                    box-shadow: 0 0 0 3px rgba(194,160,106,0.10);
                    background: #fff;
                }
                .lux-select { appearance: none; cursor: pointer; }
                .lux-select option[value=""] { color: #aaa; }
            `}</style>

            {/* ── Modal card ── */}
            <div
                className="relative w-full max-w-md"
                style={{
                    background: 'linear-gradient(155deg, #fefcf8 0%, #faf7f2 100%)',
                    borderRadius: '18px',
                    boxShadow: '0 32px 80px rgba(10,10,10,0.28), 0 0 0 1px rgba(194,160,106,0.25)',
                    animation: 'modalIn 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
                }}
            >
                {/* Close button */}
                <button
                    onClick={close}
                    className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200"
                    style={{ background: 'rgba(194,160,106,0.12)', color: '#6b7280' }}
                    onMouseEnter={e => { const el = e.currentTarget; el.style.background = 'rgba(194,160,106,0.25)'; el.style.color = '#0a0a0a' }}
                    onMouseLeave={e => { const el = e.currentTarget; el.style.background = 'rgba(194,160,106,0.12)'; el.style.color = '#6b7280' }}
                    aria-label="Close"
                >
                    <X size={15} />
                </button>

                <div className="p-6 sm:p-8">
                    {/* ── SUCCESS STATE ── */}
                    {status === 'success' ? (
                        <div className="flex flex-col items-center justify-center py-8 text-center">
                            <CheckCircle size={48} strokeWidth={1.5} style={{ color: '#c2a06a', marginBottom: '16px' }} />
                            <h3 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '28px', fontWeight: 700, color: '#0a0a0a', marginBottom: '10px' }}>
                                Thank You!
                            </h3>
                            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '15px', color: '#6b7280', lineHeight: 1.6, maxWidth: '300px' }}>
                                Your enquiry has been received. Our team will reach out to you shortly.
                            </p>
                            <button onClick={() => { handleReset(); close() }} className="lux-btn-filled mt-6">
                                Done
                            </button>
                        </div>
                    ) : (
                        <>
                            {/* Header */}
                            <div className="mb-5">
                                <div className="flex items-center gap-3 mb-2">
                                    <div className="w-5 h-px bg-gold" />
                                    <span className="lux-label" style={{ fontSize: '10px' }}>Exclusive Enquiry</span>
                                </div>
                                <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(24px, 5vw, 30px)', fontWeight: 700, color: '#0a0a0a', lineHeight: 1.1 }}>
                                    Reserve Your <em style={{ fontStyle: 'italic', color: '#c2a06a' }}>Dream</em> Villa
                                </h2>
                                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#6b7280', marginTop: '6px', lineHeight: 1.5 }}>
                                    Our consultant will contact you within 24 hours.
                                </p>
                            </div>

                            {/* Form */}
                            <form onSubmit={handleSubmit} noValidate>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>

                                    {/* Name */}
                                    <div>
                                        <label className="lux-label block mb-1" style={{ fontSize: '10px', color: '#0a0a0a' }}>
                                            Full Name <span style={{ color: '#c2a06a' }}>*</span>
                                        </label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={form.name}
                                            onChange={handleChange}
                                            className="lux-input"
                                            required
                                        />
                                    </div>

                                    {/* Phone */}
                                    <div>
                                        <label className="lux-label block mb-1" style={{ fontSize: '10px', color: '#0a0a0a' }}>
                                            Phone Number <span style={{ color: '#c2a06a' }}>*</span>
                                        </label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={form.phone}
                                            onChange={handleChange}
                                            className="lux-input"
                                            required
                                        />
                                    </div>

                                    {/* Villa Type */}
                                    <div>
                                        <label className="lux-label block mb-1" style={{ fontSize: '10px', color: '#0a0a0a' }}>
                                            Preferred Budget{' '}
                                            <span style={{ color: '#6b7280', fontSize: '9px' }}>(Optional)</span>
                                        </label>
                                        <div style={{ position: 'relative' }}>
                                            <select
                                                name="villaType"
                                                value={form.villaType}
                                                onChange={handleChange}
                                                className="lux-input lux-select"
                                                style={{ color: form.villaType ? '#0a0a0a' : '#aaa', paddingRight: '36px' }}
                                            >
                                                {villaOptions.map(opt => (
                                                    <option key={opt.value} value={opt.value}>
                                                        {opt.label}
                                                    </option>
                                                ))}
                                            </select>
                                            <span style={{ position: 'absolute', right: '14px', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none', color: '#c2a06a', fontSize: '11px' }}>▾</span>
                                        </div>
                                    </div>

                                    {/* Message — compact 2-row textarea */}
                                    <div>
                                        <label className="lux-label block mb-1" style={{ fontSize: '10px', color: '#0a0a0a' }}>
                                            Message{' '}
                                            <span style={{ color: '#6b7280', fontSize: '9px' }}>(Optional)</span>
                                        </label>
                                        <textarea
                                            name="message"
                                            value={form.message}
                                            onChange={handleChange}
                                            placeholder="Any specific requirements..."
                                            className="lux-input"
                                            rows={2}
                                            style={{ resize: 'none' }}
                                        />
                                    </div>

                                    {/* Error */}
                                    {(status === 'error' || errorMsg) && (
                                        <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#e05252', padding: '8px 12px', background: 'rgba(224,82,82,0.06)', borderRadius: '8px', border: '1px solid rgba(224,82,82,0.18)' }}>
                                            {errorMsg || 'Something went wrong. Please try again.'}
                                        </p>
                                    )}

                                    {/* Submit */}
                                    <button type="submit" disabled={status === 'loading'} className="lux-btn-filled w-full justify-center mt-1" style={{ opacity: status === 'loading' ? 0.75 : 1 }}>
                                        {status === 'loading' ? (
                                            <><Loader2 size={15} className="animate-spin" /> Sending...</>
                                        ) : (
                                            'Submit Enquiry'
                                        )}
                                    </button>

                                    <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '10px', color: '#aaa', textAlign: 'center', lineHeight: 1.4 }}>
                                        Your details are kept private & secure.
                                    </p>
                                </div>
                            </form>
                        </>
                    )}
                </div>
            </div>
        </div>
    )
}
