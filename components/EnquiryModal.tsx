'use client'

import { useEffect, useRef, useState } from 'react'
import { X, CheckCircle, Loader2 } from 'lucide-react'
import { useEnquiry } from '@/context/EnquiryContext'

const villaOptions = [
    { value: '', label: 'Please Select Preferred Villa Type' },
    { value: '80+ Lakhs', label: '₹ 80+ Lakhs' },
    { value: '1+ Crore', label: '₹ 1+ Crore' },
]

type Status = 'idle' | 'loading' | 'success' | 'error'

export default function EnquiryModal() {
    const { isOpen, close, setSubmitted } = useEnquiry()
    const overlayRef = useRef<HTMLDivElement>(null)

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
        if (!form.name || !form.phone || !form.villaType) {
            setErrorMsg('Please fill in all required fields.')
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
                setStatus('success')
                setSubmitted()
                setForm({ name: '', phone: '', villaType: '', message: '' })
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
            className="fixed inset-0 z-[100] flex items-center justify-center p-4"
            style={{ background: 'rgba(10,10,10,0.65)', backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)' }}
            onClick={(e) => { if (e.target === overlayRef.current) close() }}
        >
            {/* ── Modal card (clay style) ── */}
            <div
                className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto"
                style={{
                    background: 'linear-gradient(155deg, #fefcf8 0%, #faf7f2 100%)',
                    borderRadius: '20px',
                    boxShadow: '0 32px 80px rgba(10,10,10,0.28), 0 0 0 1px rgba(194,160,106,0.25)',
                    animation: 'modalIn 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
                }}
            >
                <style>{`
                    @keyframes modalIn {
                        from { opacity: 0; transform: scale(0.94) translateY(16px); }
                        to   { opacity: 1; transform: scale(1) translateY(0); }
                    }
                    .lux-input {
                        width: 100%;
                        padding: 14px 18px;
                        background: rgba(255,252,248,0.7);
                        border: 1px solid rgba(194,160,106,0.22);
                        border-radius: 10px;
                        font-family: 'Inter', sans-serif;
                        font-size: 15px;
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

                {/* Close button */}
                <button
                    onClick={close}
                    className="absolute top-5 right-5 z-10 w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200"
                    style={{ background: 'rgba(194,160,106,0.12)', color: '#6b7280' }}
                    onMouseEnter={e => { const el = e.currentTarget; el.style.background = 'rgba(194,160,106,0.25)'; el.style.color = '#0a0a0a' }}
                    onMouseLeave={e => { const el = e.currentTarget; el.style.background = 'rgba(194,160,106,0.12)'; el.style.color = '#6b7280' }}
                    aria-label="Close"
                >
                    <X size={16} />
                </button>

                <div className="p-8 md:p-10">
                    {/* ── SUCCESS STATE ── */}
                    {status === 'success' ? (
                        <div className="flex flex-col items-center justify-center py-10 text-center">
                            <CheckCircle size={56} strokeWidth={1.5} style={{ color: '#c2a06a', marginBottom: '20px' }} />
                            <h3 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '30px', fontWeight: 700, color: '#0a0a0a', marginBottom: '12px' }}>
                                Thank You!
                            </h3>
                            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', color: '#6b7280', lineHeight: 1.7, maxWidth: '340px' }}>
                                Your enquiry has been received. Our team will reach out to you shortly.
                            </p>
                            <button onClick={() => { handleReset(); close() }} className="lux-btn-filled mt-8">
                                Done
                            </button>
                        </div>
                    ) : (
                        <>
                            {/* Header */}
                            <div className="mb-8">
                                <div className="flex items-center gap-3 mb-3">
                                    <div className="w-6 h-px bg-gold" />
                                    <span className="lux-label" style={{ fontSize: '11px' }}>Exclusive Enquiry</span>
                                </div>
                                <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '34px', fontWeight: 700, color: '#0a0a0a', lineHeight: 1.1 }}>
                                    Reserve Your <em style={{ fontStyle: 'italic', color: '#c2a06a' }}>Dream</em> Villa
                                </h2>
                                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#6b7280', marginTop: '8px', lineHeight: 1.6 }}>
                                    Fill in your details and our luxury property consultant will contact you within 24 hours.
                                </p>
                            </div>

                            {/* Form */}
                            <form onSubmit={handleSubmit} noValidate>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>

                                    {/* Name */}
                                    <div>
                                        <label className="lux-label block mb-2" style={{ fontSize: '10px', color: '#0a0a0a' }}>
                                            Full Name <span style={{ color: '#c2a06a' }}>*</span>
                                        </label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={form.name}
                                            onChange={handleChange}
                                            placeholder="Your full name"
                                            className="lux-input"
                                            required
                                        />
                                    </div>

                                    {/* Phone */}
                                    <div>
                                        <label className="lux-label block mb-2" style={{ fontSize: '10px', color: '#0a0a0a' }}>
                                            Phone Number <span style={{ color: '#c2a06a' }}>*</span>
                                        </label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={form.phone}
                                            onChange={handleChange}
                                            placeholder="+91 98765 43210"
                                            className="lux-input"
                                            required
                                        />
                                    </div>

                                    {/* Villa Type */}
                                    <div>
                                        <label className="lux-label block mb-2" style={{ fontSize: '10px', color: '#0a0a0a' }}>
                                            Preferred Villa Budget <span style={{ color: '#c2a06a' }}>*</span>
                                        </label>
                                        <div style={{ position: 'relative' }}>
                                            <select
                                                name="villaType"
                                                value={form.villaType}
                                                onChange={handleChange}
                                                className="lux-input lux-select"
                                                required
                                                style={{ color: form.villaType ? '#0a0a0a' : '#aaa', paddingRight: '40px' }}
                                            >
                                                {villaOptions.map(opt => (
                                                    <option key={opt.value} value={opt.value} disabled={opt.value === ''}>
                                                        {opt.label}
                                                    </option>
                                                ))}
                                            </select>
                                            {/* Chevron */}
                                            <span style={{ position: 'absolute', right: '16px', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none', color: '#c2a06a', fontSize: '12px' }}>▾</span>
                                        </div>
                                    </div>

                                    {/* Message */}
                                    <div>
                                        <label className="lux-label block mb-2" style={{ fontSize: '10px', color: '#0a0a0a' }}>
                                            Message <span style={{ color: '#6b7280', letterSpacing: '0.1em', fontSize: '9px' }}>(Optional)</span>
                                        </label>
                                        <textarea
                                            name="message"
                                            value={form.message}
                                            onChange={handleChange}
                                            placeholder="Tell us about your requirements, preferred location, timeline..."
                                            className="lux-input"
                                            rows={4}
                                            style={{ resize: 'none' }}
                                        />
                                    </div>

                                    {/* Error */}
                                    {(status === 'error' || errorMsg) && (
                                        <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#e05252', padding: '10px 14px', background: 'rgba(224,82,82,0.06)', borderRadius: '8px', border: '1px solid rgba(224,82,82,0.18)' }}>
                                            {errorMsg || 'Something went wrong. Please try again.'}
                                        </p>
                                    )}

                                    {/* Submit */}
                                    <button type="submit" disabled={status === 'loading'} className="lux-btn-filled w-full justify-center mt-2" style={{ opacity: status === 'loading' ? 0.75 : 1 }}>
                                        {status === 'loading' ? (
                                            <><Loader2 size={16} className="animate-spin" /> Sending...</>
                                        ) : (
                                            'Submit Enquiry'
                                        )}
                                    </button>

                                    <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '11px', color: '#aaa', textAlign: 'center', lineHeight: 1.5 }}>
                                        By submitting you agree to be contacted by our team. Your details are kept private.
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
