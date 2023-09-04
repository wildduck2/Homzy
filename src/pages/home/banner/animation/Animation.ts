import { ScrollTrigger, gsap } from 'gsap/all'

export const BannerAnimation = () => {

    gsap.registerPlugin( ScrollTrigger )

    const tl = gsap.timeline( {
        scrollTrigger: {
            trigger: '.banner',
            start: `top 80%`,
            end: `top 50%`,
            scrub: 1,
        },
    } )

    tl.fromTo( '.banner img', {
        yPercent: -70,
    }, {
        yPercent: 0,
        stagger: .2,
        delay: .1
    } )

}
