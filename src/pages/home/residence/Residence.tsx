import { useEffect, useRef } from 'react'
import { Swiper } from './swiper/Swiper'
import { Navigation } from './navigation/Navigation'
import { Animation } from './animation/Animation'

export const Residence = () => {
    const containerRef = useRef() as React.MutableRefObject<HTMLDivElement>
    const cardRef = useRef() as React.MutableRefObject<HTMLDivElement>
    const worksSecitonRef = useRef() as React.MutableRefObject<HTMLDivElement>
    const buttonNavRef = useRef() as React.MutableRefObject<HTMLDivElement>

    useEffect(() => Animation(worksSecitonRef.current), [])

    return (
        <>
            <section
                className='residence'
                id='residences'
                ref={worksSecitonRef}
            >
                <div className='residence__container'>
                    <div>
                        <div>
                            <span className='section__subtitle residence__subtitle'>
                                Best Choise
                            </span>
                            <h2 className='section__title residence__title'>
                                Popular Residences<span>.</span>
                            </h2>
                        </div>
                        <Navigation
                            cardRef={cardRef}
                            containerRef={containerRef}
                            buttonNavRef={buttonNavRef}
                        />
                    </div>

                    <Swiper
                        containerRef={containerRef}
                        cardRef={cardRef}
                    />
                </div>
            </section>
        </>
    )
}
