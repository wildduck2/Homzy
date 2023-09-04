import { useEffect, useRef } from 'react'

export const BackTop = () => {
    const backTopRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        addEventListener('scroll', () => {
            window.scrollY > 60
                ? backTopRef.current?.classList.add('show-scroll')
                : backTopRef.current?.classList.remove('show-scroll')
        })
    })

    return (
        <>
            <div
                className='back__top'
                ref={backTopRef}
                onClick={() => scrollTo(0, 0)}
            >
                <svg
                    width='20'
                    height='20'
                    viewBox='0 0 24 24'
                >
                    <path
                        d='m12 3.879-7.061 7.06 2.122 2.122L12 8.121l4.939 4.94 2.122-2.122z'
                        fill='#6c7493'
                    ></path>
                    <path
                        d='m4.939 17.939 2.122 2.122L12 15.121l4.939 4.94 2.122-2.122L12 10.879z'
                        fill='#6c7493'
                    ></path>
                </svg>
            </div>
        </>
    )
}
