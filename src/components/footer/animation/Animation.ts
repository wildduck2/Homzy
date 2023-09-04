import SplitType from 'split-type'
import { ScrollTrigger, gsap } from 'gsap/all'

export const Animation = () => {
    gsap.registerPlugin( ScrollTrigger )

    const tl2 = gsap.timeline( {
        scrollTrigger: {
            trigger: '.footer',
            start: 'top 65%',
            toggleActions: 'restart none none reverse',
        },
        ease: 'power1.out',
    } )

    tl2.fromTo(
        '.footer ', .5,
        { y: `30%`, opacity: 0 },
        { y: 0, opacity: 1 },

    )

}