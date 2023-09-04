import SplitType from 'split-type'
import { ScrollTrigger, gsap } from 'gsap/all'

export const Animation = () => {
    gsap.registerPlugin( ScrollTrigger )

    const residenceTitle = new SplitType( '.contact__container .section__title', {
        types: 'chars',
    } )

    const residenceDis = new SplitType( '.contact__col-1__discription', {
        types: 'chars',
    } )






    const tl2 = gsap.timeline( {
        scrollTrigger: {
            trigger: '.contact__container',
            start: 'top 65%',
            toggleActions: 'restart none none reverse',
        },
        ease: 'power1.out',
    } )

    tl2.fromTo(
        '.contact__container .section__subtitle',
        { y: `50%`, opacity: 0 },
        { y: 0, opacity: 1 },

    )

    tl2.fromTo(
        '.contact__col-2', 1,
        { x: 50, opacity: 0 },
        { x: 0, opacity: 1 }, '<'

    )

    tl2.from(
        '.contact__container .section__title .char',
        {
            opacity: 0.3,
            y: '100%',
            stagger: {
                amount: 0.4,
            },
        },
        '<'
    )
    tl2.from(
        '.contact__container .contact__col-1__discription .char',
        {
            opacity: 0.3,
            y: '100%',
            stagger: {
                amount: 0.4,
            },
        },
        '<'
    )


    tl2.from( '.contact__card-item ', 0.7,
        {
            scale: 0.2,
            opacity: 0,
            stagger: { amount: 0.4 },
            ease: 'power2.out',
            clearProps: true
        },
        '<'
    )

}