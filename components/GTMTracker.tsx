'use client'

import { useEffect } from 'react'

export default function GTMTracker() {
    useEffect(() => {
        // You can add any custom client-side tracking logic here if needed
        // The GoogleTagManager component in layout handles the main script injection
    }, [])

    return null
}
