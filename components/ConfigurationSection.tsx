'use client'

export default function ConfigurationSection() {
    const rows = [
        { type: 'Golf Suites — 4.5BHK + S' },
        { type: 'Penthouses' },
    ]

    return (
        <section className="w-full py-24 px-6 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #fefcf8 0%, #faf7f2 100%)' }}>
            {/* Decorative background circle */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
                style={{ background: 'radial-gradient(circle, rgba(194,160,106,0.05) 0%, transparent 70%)' }} />

            {/* Hairline divider top */}
            <div className="lux-divider mb-16 max-w-3xl mx-auto" />

            {/* Label + Heading */}
            <div className="text-center mb-12">
                <p className="lux-label mb-4">Unit Configuration</p>
                <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(40px, 4.5vw, 60px)', fontWeight: 700, color: '#0a0a0a', letterSpacing: '-0.01em' }}>
                    Configuration
                </h2>
            </div>

            {/* Clay card table */}
            <div className="max-w-2xl mx-auto clay-card overflow-hidden p-0">
                {/* Header row */}
                <div className="grid grid-cols-3 text-center py-4 px-6"
                    style={{ background: 'linear-gradient(90deg, rgba(194,160,106,0.12) 0%, rgba(194,160,106,0.06) 100%)', borderBottom: '1px solid rgba(194,160,106,0.2)' }}>
                    {['Type', 'Area', 'Price'].map((h) => (
                        <span key={h} className="lux-label" style={{ color: '#0a0a0a' }}>{h}</span>
                    ))}
                </div>

                {/* Data rows */}
                {rows.map((row, i) => (
                    <div key={i} className="grid grid-cols-3 items-center text-center py-6 px-6 group hover:bg-[rgba(194,160,106,0.04)] transition-colors duration-300"
                        style={{ borderBottom: i < rows.length - 1 ? '1px solid rgba(194,160,106,0.12)' : 'none' }}>
                        <span style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '20px', fontWeight: 600, color: '#0a0a0a' }}>
                            {row.type}
                        </span>

                        {/* Area badge */}
                        <div className="flex justify-center">
                            <span className="px-4 py-1.5 rounded-full text-[9px] font-inter font-semibold tracking-widest uppercase"
                                style={{ border: '1px solid rgba(194,160,106,0.5)', color: '#c2a06a', background: 'rgba(194,160,106,0.06)' }}>
                                On Request
                            </span>
                        </div>

                        {/* Price badge */}
                        <div className="flex justify-center">
                            <span className="px-4 py-1.5 rounded-full text-[11px] font-inter font-semibold tracking-widest uppercase"
                                style={{ border: '1px solid rgba(194,160,106,0.5)', color: '#c2a06a', background: 'rgba(194,160,106,0.06)' }}>
                                On Request
                            </span>
                        </div>
                    </div>
                ))}
            </div>

            {/* Hairline divider bottom */}
            <div className="lux-divider mt-16 max-w-3xl mx-auto" />
        </section>
    )
}
