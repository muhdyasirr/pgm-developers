import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
    try {
        const { name, phone, villaType, message } = await req.json()
        const timestamp = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })

        // ── EMAIL (only if SMTP is configured) ──────────────────────
        let emailSuccess = false
        if (process.env.SMTP_USER && process.env.SMTP_PASS) {
            try {
                const nodemailer = (await import('nodemailer')).default
                const transporter = nodemailer.createTransport({
                    host: process.env.SMTP_HOST || 'smtp.gmail.com',
                    port: Number(process.env.SMTP_PORT) || 587,
                    secure: false,
                    auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
                })
                await transporter.sendMail({
                    from: `"PGM Website Enquiry" <${process.env.SMTP_USER}>`,
                    to: 'info@pgmdevelopers.com',
                    subject: `🏠 New Enquiry from ${name} — ${villaType}`,
                    html: `
                        <div style="font-family:Arial,sans-serif;max-width:560px;margin:0 auto;padding:32px;background:#fefcf8;border:1px solid #e0d8c8;">
                            <div style="border-bottom:2px solid #c2a06a;padding-bottom:16px;margin-bottom:24px;">
                                <h1 style="font-family:Georgia,serif;font-size:26px;color:#0a0a0a;margin:0;">PGM Developers</h1>
                                <p style="font-size:11px;letter-spacing:0.2em;text-transform:uppercase;color:#c2a06a;margin:4px 0 0;">New Website Enquiry</p>
                            </div>
                            <table style="width:100%;border-collapse:collapse;">
                                <tr><td style="padding:10px 0;width:140px;font-size:12px;font-weight:600;letter-spacing:0.1em;text-transform:uppercase;color:#6b7280;">Name</td><td style="padding:10px 0;font-size:15px;color:#0a0a0a;">${name}</td></tr>
                                <tr style="border-top:1px solid #f0ebe0;"><td style="padding:10px 0;font-size:12px;font-weight:600;letter-spacing:0.1em;text-transform:uppercase;color:#6b7280;">Phone</td><td style="padding:10px 0;font-size:15px;color:#0a0a0a;">${phone}</td></tr>
                                <tr style="border-top:1px solid #f0ebe0;"><td style="padding:10px 0;font-size:12px;font-weight:600;letter-spacing:0.1em;text-transform:uppercase;color:#6b7280;">Villa Budget</td><td style="padding:10px 0;font-size:15px;color:#c2a06a;font-weight:600;">${villaType}</td></tr>
                                <tr style="border-top:1px solid #f0ebe0;"><td style="padding:10px 0;font-size:12px;font-weight:600;letter-spacing:0.1em;text-transform:uppercase;color:#6b7280;vertical-align:top;">Message</td><td style="padding:10px 0;font-size:15px;color:#0a0a0a;line-height:1.7;">${message || '—'}</td></tr>
                                <tr style="border-top:1px solid #f0ebe0;"><td style="padding:10px 0;font-size:12px;font-weight:600;letter-spacing:0.1em;text-transform:uppercase;color:#6b7280;">Received</td><td style="padding:10px 0;font-size:13px;color:#6b7280;">${timestamp}</td></tr>
                            </table>
                        </div>`,
                })
                emailSuccess = true
                console.log(`✅ SUCCESS: Email sent to info@pgmdevelopers.com for ${name}`)
            } catch (err) {
                console.error('❌ EMAIL ERROR:', err)
            }
        }

        // ── GOOGLE SHEETS (only if URL is configured) ────────────────
        let sheetSuccess = false
        if (process.env.GOOGLE_SHEET_URL && !process.env.GOOGLE_SHEET_URL.includes('YOUR_SCRIPT_ID')) {
            try {
                const res = await fetch(process.env.GOOGLE_SHEET_URL, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ name, phone, villaType, message: message || '', timestamp }),
                })
                if (res.ok) {
                    sheetSuccess = true
                    console.log(`✅ SUCCESS: Data saved to Google Sheets for ${name}`)
                } else {
                    console.error('❌ GOOGLE SHEETS ERROR: Status', res.status)
                }
            } catch (err) {
                console.error('❌ GOOGLE SHEETS ERROR:', err)
            }
        }

        if (emailSuccess || sheetSuccess) {
            return NextResponse.json({ success: true, email: emailSuccess, sheets: sheetSuccess })
        } else {
            return NextResponse.json({ success: false, error: 'Both Email and Google Sheets failed. Check console.' }, { status: 500 })
        }
    } catch (err) {
        console.error('Enquiry API CRITICAL error:', err)
        return NextResponse.json({ success: false, error: 'Internal server error' }, { status: 500 })
    }
}
