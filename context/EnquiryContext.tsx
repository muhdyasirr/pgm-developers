'use client'

import { createContext, useContext, useEffect, useState, ReactNode } from 'react'

interface EnquiryContextType {
    isOpen: boolean
    hasSubmitted: boolean
    open: (onSuccess?: () => void) => void
    close: () => void
    setSubmitted: () => void
    pendingCallback: (() => void) | null
}

const EnquiryContext = createContext<EnquiryContextType | null>(null)

export function EnquiryProvider({ children }: { children: ReactNode }) {
    const [isOpen, setIsOpen] = useState(false)
    const [hasSubmitted, setHasSubmitted] = useState(false)
    const [pendingCallback, setPendingCallback] = useState<(() => void) | null>(null)

    // Auto-open once per session after 2.5 s
    useEffect(() => {
        const alreadyShown = sessionStorage.getItem('enquiry_shown')
        if (!alreadyShown) {
            const timer = setTimeout(() => {
                setIsOpen(true)
                sessionStorage.setItem('enquiry_shown', '1')
            }, 2500)
            return () => clearTimeout(timer)
        }
    }, [])

    const open = (onSuccess?: () => void) => {
        if (onSuccess) setPendingCallback(() => onSuccess)
        setIsOpen(true)
    }

    const close = () => setIsOpen(false)

    const setSubmitted = () => {
        setHasSubmitted(true)
        // fire the pending callback (e.g. trigger a download)
        if (pendingCallback) {
            pendingCallback()
            setPendingCallback(null)
        }
    }

    return (
        <EnquiryContext.Provider value={{ isOpen, hasSubmitted, open, close, setSubmitted, pendingCallback }}>
            {children}
        </EnquiryContext.Provider>
    )
}

export function useEnquiry() {
    const ctx = useContext(EnquiryContext)
    if (!ctx) throw new Error('useEnquiry must be used within EnquiryProvider')
    return ctx
}
