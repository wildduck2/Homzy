import { useEffect } from 'react'
import { Animation } from './animation/Animation'

export const GetStart = () => {
    useEffect(() => Animation(), [])

    return (
        <>
            <section className='section'>
                <div className='section__container'>
                    <h3 className='section__container-title'>
                        Get Started with Holux
                    </h3>
                    <p className='section__container-description'>
                        Subscribe and find super attractive price quotes from
                        us, Find your residence soon
                    </p>
                    <button className='section__container-button'>
                        Get Started
                    </button>
                </div>
            </section>
        </>
    )
}
