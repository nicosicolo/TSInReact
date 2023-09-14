type ButtonProps = {
    style?: React.CSSProperties; //We can pass any css property that we want.
    handleClick?: () => void; //This is the way to properly pass a function that doesn't return anything as prop.
    children?: React.ReactNode, //A children is a ReactNode.
}


export default function OtherButton ({style, handleClick, children}: ButtonProps) {

    return (
        <button style={style} onClick={handleClick}>
            {children}
        </button>
    )
}