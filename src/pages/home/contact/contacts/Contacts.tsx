import { contactsItemsInfo } from '../../../../constants'
import { Item } from '../contactItem/ContactItem'

export const Contacts = () => {
    return (
        <>
            <div className='contact__card'>
                {contactsItemsInfo.map((item) => {
                    return (
                        <Item
                            key={item.id}
                            icon={item.icon}
                            title={item.title}
                            discription={item.discription}
                            btnText={item.btnText}
                        />
                    )
                })}
            </div>
        </>
    )
}
