
import { ScrollTrigger, gsap } from 'gsap/all'
import SplitType from 'split-type'

export const Animation = ( worksSecitonRef: HTMLDivElement ) => {
    gsap.registerPlugin( ScrollTrigger )

    const residenceTitle = new SplitType( '.residence__title', {
        types: 'chars',
    } )

    const ctx = gsap.context( () => {
        const tl1 = gsap.timeline( {
            defaults: {
                scrollTrigger: {
                    trigger: '.residence__container',
                    start: 'top 90% ',
                    end: 'top 50%',
                    scrub: 1,
                },
            },
        } )

        tl1.from(
            '.img__wrapper',
            {
                rotate: () => Math.floor( Math.random() * 50 - 20 ),
                x: () => Math.floor( Math.random() * 300 - 150 ),
                y: () => Math.floor( Math.random() * 300 - 150 ),
            },
            '-=1'
        )

        tl1.from( '.card__slider-card', 2, { scale: 0.92 }, '<' )
        tl1.from( '.img__wrapper img', { scale: 3 } )

        const tl2 = gsap.timeline( {
            defaults: {
                scrollTrigger: {
                    trigger: '.residence__container',
                    start: 'top center ',
                    end: 'center 20%',
                    scrub: 1,
                },
            },
        } )
        tl2.from(
            '.card__slider-info',
            2,
            { opacity: 0, y: `-100%`, stagger: 0.2 },
            '+=2'
        )

        const tl3 = gsap.timeline( {
            scrollTrigger: {
                trigger: '.residence__container',
                start: 'top 70%',
                toggleActions: 'restart none none reverse',
            },
            ease: 'power1.out',
        } )

        tl3.fromTo(
            '.residence__title .char',
            {
                opacity: 0.3,
                y: '100%',
            },
            {
                opacity: 1,
                y: `-5px`,
                stagger: {
                    amount: 0.4,
                },
            }
        )

        tl3.fromTo(
            '.residence__subtitle',
            { xPercent: `-50%`, opacity: 0 },
            { xPercent: 0, opacity: 1 },
            '<.1'
        )
    }, worksSecitonRef )

    return () => ctx.revert()
}