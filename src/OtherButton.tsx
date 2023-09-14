type ButtonProps = {
    count?: number,
    setCount?: React.Dispatch<React.SetStateAction<number>>; //I got this type from hovering on the set state function.
    style?: React.CSSProperties; //We can pass any css property that we want.
    handleClick?: (text: string) => number;
    children?: React.ReactNode | JSX.Element, //A children is a ReactNode.
}


export default function OtherButton ({count, setCount, style, handleClick, children}: ButtonProps) {

    return (
        <button style={style} onClick={()=>{handleClick; setCount}}>
            {children}
            {count}
        </button>
    )
}