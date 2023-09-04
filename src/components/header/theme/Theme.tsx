import { useRef } from 'react'

export const Theme = () => {
    const themeToggleRef = useRef() as React.MutableRefObject<HTMLButtonElement>

    const themeToggleHandler = () => {
        document.body.classList.toggle('dark-theme')
        themeToggleRef.current.classList.toggle('dark')
        themeToggleRef.current.classList.toggle('light')
    }

    return (
        <>
            <button
                className='header__theme light'
                id='theme-toggle'
                ref={themeToggleRef}
                onClick={themeToggleHandler}
            >
                <svg
                    className='sun-and-moon'
                    width='30'
                    height='30'
                    viewBox='0 0 24 24'
                >
                    <mask id='moon-mask'>
                        <rect
                            x='0'
                            y='0'
                            width='100%'
                            height='100%'
                            fill='white'
                        ></rect>
                        <circle
                            stroke='none'
                            cx='30'
                            cy='17'
                            r='6'
                            fill='black'
                        ></circle>
                    </mask>
                    <circle
                        className='sun'
                        cx='12'
                        cy='12'
                        r='5'
                        mask='url(#moon-mask)'
                    ></circle>
                    <g className='sun-dots'>
                        <line
                            x1='12'
                            y1='1'
                            x2='12'
                            y2='3'
                        ></line>
                        <line
                            x1='12'
                            y1='21'
                            x2='12'
                            y2='23'
                        ></line>
                        <line
                            x1='4.22'
                            y1='4.22'
                            x2='5.64'
                            y2='5.64'
                        ></line>
                        <line
                            x1='18.36'
                            y1='18.36'
                            x2='19.78'
                            y2='19.78'
                        ></line>
                        <line
                            x1='1'
                            y1='12'
                            x2='3'
                            y2='12'
                        ></line>
                        <line
                            x1='21'
                            y1='12'
                            x2='23'
                            y2='12'
                        ></line>
                        <line
                            x1='4.22'
                            y1='19.78'
                            x2='5.64'
                            y2='18.36'
                        ></line>
                        <line
                            x1='18.36'
                            y1='5.64'
                            x2='19.78'
                            y2='4.22'
                        ></line>
                    </g>
                </svg>
            </button>
        </>
    )
}
