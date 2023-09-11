import { home } from '../../../../assets'

export const Col2 = () => {
    return (
        <>
            <div className='col-2'>
                <div className='col-2__orbe'></div>

                <div className='col-2__img'>
                    <img
                        src={home}
                        alt='building img'
                        draggable={false}
                    />
                </div>
            </div>
        </>
    )
}
