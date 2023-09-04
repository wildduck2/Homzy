import { useEffect } from 'react'
import { Animation } from './animation/Animation'
import { Col1 } from './cols/Col1'
import { Col2 } from './cols/Col2'
import { FooterCopyright } from './footerCopyright/FooterCopyright'

export const Footer = () => {
    useEffect(() => Animation(), [])

    return (
        <>
            <footer className='footer'>
                <nav className='footer__container'>
                    <Col1 />
                    <Col2 />
                </nav>

                <FooterCopyright />
            </footer>
        </>
    )
}
