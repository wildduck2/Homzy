import React, { ReactPortal } from 'react'

type INIT__VALUES__TYPE = {
    activeButonMobileMenu: ({
        e,
        mobile,
        ulRef,
    }: activeLinkHandlerProps) => void
}

export type activeLinkHandlerProps = {
    e: React.MouseEvent<HTMLElement, MouseEvent>
    mobile: boolean
    ulRef: HTMLUListElement
}

type ProviderType = { children: ReactPortal }

let INIT__VALUES: INIT__VALUES__TYPE = {
    activeButonMobileMenu: () => {},
}

export const FunctionalityContext = React.createContext(INIT__VALUES)

export const FunctionalityProvider = ({
    children,
}: ProviderType): JSX.Element => {
    const activeLinkHandler = ({
        e,
        mobile,
        ulRef,
    }: activeLinkHandlerProps) => {
        const el = e.target as HTMLElement
        const lis = ulRef?.querySelectorAll('a')
        console.log(lis)

        if (mobile) {
            lis?.forEach((li) => li.classList.remove('active'))
            el.classList.add('active')
        }
    }

    INIT__VALUES = {
        activeButonMobileMenu: activeLinkHandler,
    }

    return (
        <>
            <FunctionalityContext.Provider value={INIT__VALUES}>
                {children}
            </FunctionalityContext.Provider>
        </>
    )
}
