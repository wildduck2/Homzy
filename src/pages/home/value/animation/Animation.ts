import SplitType from 'split-type'
import { ScrollTrigger, gsap } from 'gsap/all'

export const Animation = () => {
    gsap.registerPlugin( ScrollTrigger )

    const residenceTitle = new SplitType( '.value__container .section__title', {
        types: 'chars',
    } )

    const residenceDis = new SplitType( '.value__col-2__discription', {
        types: 'chars',
    } )



    const tl2 = gsap.timeline( {
        scrollTrigger: {
            trigger: '.value__container',
            start: 'top 65%',
            toggleActions: 'restart none none reverse',
        },
        ease: 'power1.out',
    } )

    tl2.fromTo(
        '.value__container .section__subtitle',
        { y: `50%`, opacity: 0 },
        { y: 0, opacity: 1 },

    )

    tl2.fromTo(
        '.value__col-1', 1,
        { x: -50, opacity: 0 },
        { x: 0, opacity: 1 }, '<'

    )

    tl2.fromTo(
        '.value__container .section__title .char', 1,
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
        }, '<'
    )
    tl2.fromTo(
        '.value__container .value__col-2__discription .char', 1,
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
        }, '<'
    )


    tl2.fromTo( '.value__item ', 1, { y: 50, scale: .9 }, { y: 0, scale: 1, stagger: .1 }, '<' )
}