import { Contacts } from '../contacts/Contacts'

export const Col1 = () => {
    return (
        <>
            <div className='contact__col-1'>
                <div>
                    <span className='section__subtitle'>Contact Us</span>
                    <h2 className='section__title'>
                        Easy to Contact us<span>.</span>
                    </h2>
                    <p className='contact__col-1__discription'>
                        Is there a problem finding your dream home? Need a guide
                        in buying first home? or need a consultation on
                        residential issues? just contact us.
                    </p>

                    <Contacts />
                </div>
            </div>
        </>
    )
}
