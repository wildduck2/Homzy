import {
    arrayOfObj,
    contactsItemsInfoType,
    valuesItemsInfoType,
} from '../vite-env'

import {
    popular1,
    popular2,
    popular3,
    popular4,
    popular5,
    popular6,
    popular7,
    chartSquare,
    chat,
    checkSquare,
    massage,
    phone,
    shield,
    video,
    xSquare,
} from '../assets'

export const projectsCardInfo: arrayOfObj = [
    {
        id: 0,
        img: popular5,
        subtitle: '47,043',
        title: 'Aliva Private Garden',
        paragraph:
            'Street The Garden City Of Miraflores, Lima - Perú Av. Sol #9876',
    },
    {
        id: 1,
        img: popular1,
        subtitle: '66,356',
        title: 'Garden City Assat',
        paragraph:
            'Street The Garden City Of Miraflores, Lima - Perú Av. Sol #9876',
    },
    {
        id: 2,
        img: popular2,
        subtitle: '35,159',
        title: 'Gables Luxurious House',
        paragraph:
            'Street The Garden City Of Miraflores, Lima - Perú Av. Sol #9876',
    },
    {
        id: 3,
        img: popular3,
        subtitle: '75,043',
        title: 'Garden Orchard City',
        paragraph:
            'Street The Garden City Of Miraflores, Lima - Perú Av. Sol #9876',
    },
    {
        id: 4,
        img: popular4,
        subtitle: '62,024',
        title: 'Luxurious City Garden',
        paragraph:
            'Street The Garden City Of Miraflores, Lima - Perú Av. Sol #9876',
    },

    {
        id: 5,
        img: popular6,
        subtitle: '92,400',
        title: 'Lorany City Garden',
        paragraph:
            'Street The Garden City Of Miraflores, Lima - Perú Av. Sol #9876',
    },
    {
        id: 6,
        img: popular7,
        subtitle: '32,240',
        title: 'Marlen City Garden',
        paragraph:
            'Street The Garden City Of Miraflores, Lima - Perú Av. Sol #9876',
    },
]

export const valuesItemsInfo: valuesItemsInfoType = [
    {
        id: 0,
        tagImg: shield,
        title: 'Best interest rates on the market',
        discription:
            'Price we provides is the best for you, we guarantee no price changes on your property due to various unexpected costs that may come.',
    },
    {
        id: 1,
        tagImg: xSquare,
        title: 'Prevent unstable prices',
        discription:
            'Price we provides is the best for you, we guarantee no price changes on your property due to various unexpected costs that may come.',
    },
    {
        id: 2,
        tagImg: chartSquare,
        title: 'Best prices on the market ',
        discription:
            'Price we provides is the best for you, we guarantee no price changes on your property due to various unexpected costs that may come.',
    },
    {
        id: 3,
        tagImg: checkSquare,
        title: 'Security of your data',
        discription:
            'Price we provides is the best for you, we guarantee no price changes on your property due to various unexpected costs that may come.',
    },
]

export const contactsItemsInfo: contactsItemsInfoType = [
    {
        id: 0,
        icon: phone,
        title: 'Call',
        discription: '+2548965237',
        btnText: 'Call Now',
    },
    {
        id: 1,
        icon: chat,
        title: 'Chat',
        discription: '+2548965237',
        btnText: 'Chat Now',
    },
    {
        id: 2,
        icon: video,
        title: 'Video Call',
        discription: 'homzy@video',
        btnText: 'Video Call Now',
    },
    {
        id: 3,
        icon: massage,
        title: 'Message',
        discription: 'homzy@busniss',
        btnText: 'Message Now',
    },
]
