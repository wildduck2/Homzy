type ButtonType = { children: string; header?: string }

export const Button = ({ children, header }: ButtonType) => {
    return (
        <>
            <button className={`button ${header}`}>
                {header === 'hero__button' ? (
                    <span className='button_span'>{children}</span>
                ) : (
                    children
                )}
            </button>
        </>
    )
}
