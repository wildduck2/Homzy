export type ItemType = {
    icon: string
    title: string
    discription: string
    btnText: string
    key: number
}

export const Item = ({ icon, title, discription, btnText }: ItemType) => {
    return (
        <>
            <div className='contact__card-item'>
                <div className='contact__card-item-info'>
                    <img
                        src={icon}
                        alt='contact icon'
                    />
                    <div>
                        <h3 className='contact__card-title'>{title}</h3>
                        <p className='contact__card-description'>
                            {discription}
                        </p>
                    </div>
                </div>

                <button className='contact__card-button'>{btnText}</button>
            </div>
        </>
    )
}
