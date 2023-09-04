import { useRef } from 'react'

export type divElRef = React.MutableRefObject<HTMLDivElement>

export type NavigationProps = {
    containerRef: divElRef
    cardRef?: divElRef
    worksSecitonRef?: divElRef
    buttonNavRef?: React.MutableRefObject<HTMLDivElement>
}

export const Navigation = ({
    cardRef,
    containerRef,
    buttonNavRef,
}: NavigationProps) => {
    const leftRef = useRef() as React.MutableRefObject<HTMLButtonElement>
    const rightRef = useRef() as React.MutableRefObject<HTMLButtonElement>

    // Navigation button on click
    const onMoveHandler = (e: React.MouseEvent) => {
        const navigaitonButton = e.target as HTMLButtonElement
        const cardBoindingClientRect: DOMRect | null =
            cardRef!.current.getBoundingClientRect()

        if (
            navigaitonButton.classList.contains('nav-left') &&
            containerRef.current.scrollLeft > 0
        ) {
            containerRef.current.scrollLeft -= cardBoindingClientRect!.width
        } else if (navigaitonButton.classList.contains('nav-right')) {
            containerRef.current.scrollLeft += cardBoindingClientRect!.width
        }
    }

    return (
        <div
            className='slider-navigation'
            ref={buttonNavRef}
        >
            <button
                className='btn-nav nav-left btn-text'
                onClick={onMoveHandler}
                ref={leftRef}
            >
                <svg
                    width='17'
                    height='16'
                    viewBox='0 0 17 16'
                    fill='none'
                >
                    <path
                        d='M7.99085 8.00003L12.6576 12.48L11.3242 13.76L5.32422 8.00003L11.3242 2.23999L12.6576 3.51999L7.99085 8.00003Z'
                        fill='white'
                    />
                </svg>
            </button>
            <button
                className='btn-nav nav-right btn-text active'
                onClick={onMoveHandler}
                ref={rightRef}
            >
                <svg
                    width='17'
                    height='16'
                    viewBox='0 0 17 16'
                    fill='none'
                >
                    <path
                        d='M10.3425 8.00004L5.6759 3.33333L7.00923 2L13.0092 8.00004L7.00923 14L5.6759 12.6667L10.3425 8.00004Z'
                        fill='white'
                    />
                </svg>
            </button>
        </div>
    )
}
