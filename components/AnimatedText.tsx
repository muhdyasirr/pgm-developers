'use client'

import { useEffect, useRef, ReactNode } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface AnimatedTextProps {
    children: ReactNode
    className?: string
    delay?: number
    tag?: 'h1' | 'h2' | 'h3' | 'p' | 'span' | 'div'
}

export default function AnimatedText({
    children,
    className = '',
    delay = 0,
    tag: Tag = 'div',
}: AnimatedTextProps) {
    const ref = useRef<HTMLElement>(null)
    const innerRef = useRef<HTMLElement>(null)

    useEffect(() => {
        if (!innerRef.current) return

        gsap.fromTo(
            innerRef.current,
            { y: '100%' },
            {
                y: '0%',
                duration: 1,
                delay,
                ease: 'expo.out',
                scrollTrigger: {
                    trigger: ref.current,
                    start: 'top 88%',
                    toggleActions: 'play none none none',
                },
            }
        )
    }, [delay])

    return (
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        <Tag ref={ref as any} className={`overflow-hidden ${className}`}>
            <span ref={innerRef} className="block" style={{ display: 'block' }}>
                {children}
            </span>
        </Tag>
    )
}
