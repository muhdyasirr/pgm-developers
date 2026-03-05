'use client'

import { useEffect, useRef, ReactNode } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import clsx from 'clsx'

gsap.registerPlugin(ScrollTrigger)

interface ScrollRevealProps {
    children: ReactNode
    className?: string
    delay?: number
    direction?: 'up' | 'down' | 'left' | 'right'
    distance?: number
}

export default function ScrollReveal({
    children,
    className = '',
    delay = 0,
    direction = 'up',
    distance = 40,
}: ScrollRevealProps) {
    const ref = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (!ref.current) return

        const fromVars: gsap.TweenVars = { opacity: 0 }
        if (direction === 'up') fromVars.y = distance
        if (direction === 'down') fromVars.y = -distance
        if (direction === 'left') fromVars.x = distance
        if (direction === 'right') fromVars.x = -distance

        gsap.fromTo(ref.current, fromVars, {
            opacity: 1,
            x: 0,
            y: 0,
            duration: 1,
            delay,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: ref.current,
                start: 'top 88%',
                toggleActions: 'play none none none',
            },
        })
    }, [delay, direction, distance])

    return (
        <div ref={ref} className={clsx('opacity-0', className)}>
            {children}
        </div>
    )
}
