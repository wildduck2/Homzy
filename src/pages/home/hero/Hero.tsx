import { useEffect } from 'react'
import { Col1 } from './cols/Col1'
import { Col2 } from './cols/Col2'
import { Animation } from './animation/Animation'

export const Hero = () => {
    useEffect(() => Animation(), [])

    return (
        <>
            <section
                className='hero'
                id='home'
            >
                <div className='hero__container'>
                    <Col1 />
                    <Col2 />
                </div>
            </section>
        </>
    )
}
