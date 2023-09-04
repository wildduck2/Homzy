import { valuesItemsInfo } from '../../../../constants'
import { ValueItem } from '../valueItem/ValueItem'

export const Values = () => {
    return (
        <>
            <div className='value__Values'>
                {valuesItemsInfo.map((item) => {
                    return (
                        <ValueItem
                            key={item.id}
                            title={item.title}
                            tagImg={item.tagImg}
                            discription={item.discription}
                        />
                    )
                })}
            </div>
        </>
    )
}
