import { contact } from '../../../../assets'

export const Col2 = () => {
    return (
        <>
            <div className='contact__col-2'>
                <div className='contact__col-2__orbe'></div>

                <div>
                    <img
                        className='contact__col-2__img'
                        src={contact}
                        alt='building img'
                    />
                </div>
            </div>
        </>
    )
}
