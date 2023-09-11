import { useEffect } from 'react'
import { BannerAnimation } from './animation/Animation'

import { logo1, logo2, logo3, logo4 } from '../../../assets'

export const Banner = () => {
    useEffect(() => BannerAnimation(), [])

    return (
        <>
            <section className='banner'>
                <picture className='banner__picture'>
                    <img
                        src={logo1}
                        alt='banner__logo'
                    />
                </picture>
                <picture className='banner__picture'>
                    <img
                        src={logo2}
                        alt='banner__logo'
                    />
                </picture>
                <picture className='banner__picture'>
                    <img
                        src={logo3}
                        alt='banner__logo'
                    />
                </picture>
                <picture className='banner__picture'>
                    <img
                        src={logo4}
                        alt='banner__logo'
                    />
                </picture>
            </section>
        </>
    )
}
