import { useEffect } from 'react'
import { BannerAnimation } from './animation/Animation'

export const Banner = () => {
    useEffect(() => BannerAnimation(), [])

    return (
        <>
            <section className='banner'>
                <picture className='banner__picture'>
                    <img
                        src='./src/assets/img/logo1.png'
                        alt='banner__logo'
                    />
                </picture>
                <picture className='banner__picture'>
                    <img
                        src='./src/assets/img/logo2.png'
                        alt='banner__logo'
                    />
                </picture>
                <picture className='banner__picture'>
                    <img
                        src='./src/assets/img/logo3.png'
                        alt='banner__logo'
                    />
                </picture>
                <picture className='banner__picture'>
                    <img
                        src='./src/assets/img/logo4.png'
                        alt='banner__logo'
                    />
                </picture>
            </section>
        </>
    )
}
