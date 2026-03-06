'use client'

import { createContext, useContext, useState, ReactNode } from 'react'

interface EnquiryContextType {
    isOpen: boolean
    open: () => void
    close: () => void
}

const EnquiryContext = createContext<EnquiryContextType | null>(null)

export function EnquiryProvider({ children }: { children: ReactNode }) {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <EnquiryContext.Provider value={{ isOpen, open: () => setIsOpen(true), close: () => setIsOpen(false) }}>
            {children}
        </EnquiryContext.Provider>
    )
}

export function useEnquiry() {
    const ctx = useContext(EnquiryContext)
    if (!ctx) throw new Error('useEnquiry must be used within EnquiryProvider')
    return ctx
}
