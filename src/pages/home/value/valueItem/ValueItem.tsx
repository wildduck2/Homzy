import { useRef, useState } from 'react'
import { downArrow } from '../../../../assets'

type valueItemType = {
    title: string
    tagImg: string
    discription: string
}

export const ValueItem = ({ title, discription, tagImg }: valueItemType) => {
    const [active, setActive] = useState('')
    const itemRef = useRef<HTMLDivElement>(null)

    const onClickHanderActive = () => {
        setActive('set')
        itemRef.current?.classList.toggle('accordion-open')
    }

    return (
        <>
            <div
                className={`value__item ${
                    active !== '' ? 'accordion-open' : ''
                }`}
                ref={itemRef}
            >
                <header
                    className='value__item-header'
                    onClick={onClickHanderActive}
                >
                    <div className='value__item-icon value__icon'>
                        <img
                            src={tagImg}
                            alt='icon'
                        />
                    </div>
                    <h3 className='value__item-title'>{title}</h3>
                    <div className='value__item-arrow value__icon'>
                        <img
                            src={downArrow}
                            alt='arrow'
                        />
                    </div>
                </header>

                <div className='value__item-content'>
                    <p className='value__item-description'>{discription}</p>
                </div>
            </div>
        </>
    )
}
