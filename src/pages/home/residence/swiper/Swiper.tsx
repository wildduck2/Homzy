import React, { useState } from 'react'
import { projectsCardInfo } from '../../../../constants'
export type divElRef = React.MutableRefObject<HTMLDivElement>
export type NavigationProps = {
    containerRef: divElRef
    cardRef?: divElRef
    worksSecitonRef?: divElRef
    buttonNavRef?: React.MutableRefObject<HTMLDivElement>
}

export type CardSlideProps = NavigationProps

export const Swiper = ({ containerRef, cardRef }: CardSlideProps) => {
    const [draggable, setDraggable] = useState(false)
    const [prePageX, setPrevPageX] = useState(0)
    const [prevScrollLeft, setPrevScrollLeft] = useState(0)

    const onMouseDownHandler = (e: React.MouseEvent) => {
        setDraggable(true)
        setPrevPageX(e.pageX)
        setPrevScrollLeft(containerRef.current.scrollLeft)
    }

    const onDraggHandler = (e: React.MouseEvent) => {
        if (draggable) {
            console.log('hi')
            let diffPostion = e.pageX - prePageX
            containerRef.current.scrollLeft = prevScrollLeft - diffPostion
        }
    }

    const onMouseUpHandler = () => {
        setDraggable(false)
    }

    return (
        <div
            className='card__slider'
            onMouseDown={onMouseDownHandler}
            onMouseMove={onDraggHandler}
            onMouseUp={onMouseUpHandler}
            ref={containerRef}
        >
            {/* mapping the card info  */}
            {projectsCardInfo.map((card) => {
                return (
                    <div
                        className='card__slider-card'
                        key={card.id}
                        ref={cardRef}
                    >
                        <div className='img__wrapper'>
                            <img
                                className='img'
                                src={card.img}
                                alt='propject__img'
                                draggable='false'
                            />
                        </div>
                        <div className='card__slider-info'>
                            <h5>
                                <span>$</span>
                                {card.subtitle}
                            </h5>
                            <h3 className='card__slider-title'>{card.title}</h3>
                            <p className='card__slider-paragraph'>
                                {card.paragraph}
                            </p>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
