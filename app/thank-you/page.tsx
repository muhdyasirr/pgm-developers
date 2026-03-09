import Link from 'next/link'
import { CheckCircle, Phone, MessageCircle, ArrowLeft } from 'lucide-react'

export default function ThankYouPage() {
    return (
        <main className="min-h-screen flex items-center justify-center p-5 relative overflow-hidden"
            style={{ backgroundColor: '#0a0a0a' }}>

            {/* Background elements */}
            <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[rgba(194,160,106,0.15)] blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[30%] h-[30%] bg-[rgba(194,160,106,0.1)] blur-[100px] rounded-full pointer-events-none" />

            <div className="w-full max-w-lg relative z-10 flex flex-col items-center text-center">
                {/* Success Icon */}
                <div className="w-20 h-20 rounded-full flex items-center justify-center mb-8"
                    style={{ background: 'rgba(194,160,106,0.1)', border: '1px solid rgba(194,160,106,0.3)' }}>
                    <CheckCircle size={40} className="text-gold" strokeWidth={1.5} />
                </div>

                {/* Typography */}
                <h1 className="mb-4"
                    style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(36px, 8vw, 56px)', fontWeight: 700, color: 'white', lineHeight: 1.1 }}>
                    Thank You!
                </h1>

                <p className="mb-10 text-white/70 max-w-sm"
                    style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', lineHeight: 1.6, fontWeight: 300 }}>
                    We have successfully received your enquiry. Our luxury property consultant will get in touch with you shortly.
                </p>

                {/* Fast Contact Options */}
                <div className="w-full flex flex-col gap-4 mb-12">
                    <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.2em', color: '#c2a06a', fontWeight: 500 }} className="mb-2">
                        Need immediate assistance?
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                        {/* Call Button */}
                        <a href="tel:+919745611611"
                            className="flex items-center justify-center gap-3 py-4 px-6 rounded-xl transition-all duration-300 hover:-translate-y-1"
                            style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}>
                            <Phone size={18} className="text-white" />
                            <div className="flex flex-col items-start">
                                <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '10px', color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Call Us</span>
                                <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: 'white', fontWeight: 500 }}>+91 9745 611 611</span>
                            </div>
                        </a>

                        {/* WhatsApp Button */}
                        <a href="https://wa.me/919745611611" target="_blank" rel="noopener noreferrer"
                            className="flex items-center justify-center gap-3 py-4 px-6 rounded-xl transition-all duration-300 hover:-translate-y-1"
                            style={{ background: 'rgba(37,211,102,0.1)', border: '1px solid rgba(37,211,102,0.3)' }}>
                            <MessageCircle size={18} style={{ color: '#25D366' }} />
                            <div className="flex flex-col items-start">
                                <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '10px', color: 'rgba(37,211,102,0.7)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>WhatsApp Message</span>
                                <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: 'white', fontWeight: 500 }}>+91 9745 611 611</span>
                            </div>
                        </a>
                    </div>
                </div>

                {/* Back to Home */}
                <Link href="/" className="inline-flex items-center gap-2 group transition-all duration-300"
                    style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: 'rgba(255,255,255,0.6)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                    <ArrowLeft size={14} className="transition-transform duration-300 group-hover:-translate-x-1" />
                    Back to Homepage
                </Link>
            </div>
        </main>
    )
}
