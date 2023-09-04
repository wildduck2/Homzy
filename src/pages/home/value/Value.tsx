import { useEffect } from 'react'
import { Col1 } from './cols/Col1'
import { Col2 } from './cols/Col2'
import { Animation } from './animation/Animation'

export const Value = () => {
    useEffect(() => Animation(), [])

    return (
        <>
            <section
                className='value'
                id='value'
            >
                <div className='value__container'>
                    <Col1 />
                    <Col2 />
                </div>
            </section>
        </>
    )
}
