import { Link } from 'react-router-dom'

export const Col1 = () => {
    return (
        <>
            <div className='footer__col-1'>
                <Link
                    to={'#home'}
                    className='footer__col-1__logo'
                >
                    Homzy
                </Link>
                <p className='footer__col-1__description'>
                    Our vision is to make all pepole <br />
                    the best place to live for them
                </p>
            </div>
        </>
    )
}
