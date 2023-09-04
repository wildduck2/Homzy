import { useEffect } from 'react'
import { Col1 } from './cols/Col1'
import { Col2 } from './cols/Col2'
import { Animation } from './animation/Animation'

export const Contact = () => {
    useEffect(() => Animation(), [])

    return (
        <>
            <section
                className='contact'
                id='contact'
            >
                <div className='contact__container'>
                    <Col1 />
                    <Col2 />
                </div>
            </section>
        </>
    )
}
