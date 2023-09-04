import { useRef, useState } from 'react'
import { Li } from '../menuLi/Li'

export const HeaderMobileMenu = () => {
    const [active, setActive] = useState(false)
    const ulRef = useRef() as React.MutableRefObject<HTMLUListElement>

    const activeHandler = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
        const el = e.target as HTMLElement
        const aLinks = ulRef.current.querySelectorAll(
            'a'
        ) as NodeListOf<HTMLAnchorElement>

        setActive(!active)

        aLinks.forEach((link) => {
            link.classList.remove('active')
        })
        el.classList.add('active')
    }

    return (
        <>
            <ul
                className='mobile__menu'
                ref={ulRef}
            >
                <Li
                    name='home'
                    index={0}
                    mobile={true}
                    active={true}
                    onClick={activeHandler}
                />
                <Li
                    name='residences'
                    index={1}
                    mobile={true}
                    onClick={activeHandler}
                />
                <Li
                    name='value'
                    index={2}
                    mobile={true}
                    onClick={activeHandler}
                />
                <Li
                    name='contact'
                    index={3}
                    mobile={true}
                    onClick={activeHandler}
                />
            </ul>
        </>
    )
}
