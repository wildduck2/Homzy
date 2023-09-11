import { useEffect } from 'react'

import gsap from 'gsap'

export const Loader = () => {
    const logoText = 'Homyz'

    useEffect(() => {
        const tl = gsap.timeline({ defaults: { ease: 'power1.out' } })

        tl.set('.loader__char', { display: 'block' })
        tl.set('.first-char', { x: '100%', y: '100%' })
        tl.set('.other-char', { y: '100%', opacity: 0.2, scale: 0.6 })
        tl.to('.first-char', { y: 0 })
        tl.to('.first-char', { x: 0 })
        tl.to(
            '.other-char',
            {
                y: 0,
                opacity: 1,
                scale: 1,
                stagger: { amount: 0.15 },
            },
            '<'
        )
        tl.to('.loader__char', {
            y: '100%',
            opacity: 1,
            scale: 1,
            stagger: { amount: 0.15 },
        })
        tl.to('.loader', 1, { x: '100%', ease: 'power1.out' }, '<.1')
    })

    return (
        <>
            <div className='loader'>
                <div className='loader__wrapper'>
                    {logoText.split('').map((char: string, index: number) => {
                        return (
                            <div
                                className={`loader__char ${
                                    index === 0 ? 'first-char' : 'other-char'
                                }`}
                                key={index}
                            >
                                {char}
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}
