import { useState } from "react";

type Colors = "blue" | "red" | "green";

type ButtonProps = {
    backgroundColor: Colors, //We can specifie the only strings we want to accept as values.
    textColor?: Colors,
    fontSize: number,
    pillShape?: boolean, //We make an optional attribute.
    padding?: [number?, number?, number?, number?]; //Tuple: a little bit more specific array.
}


/**Ejemplo de Custom Hook */
const useToggle = (initialState: boolean = false): [boolean, (() => void)] => {
    const [toggle, setToggle] = useState<boolean>(initialState);
    const toggleFunction = () => setToggle(prevState => !prevState);
    return [toggle, toggleFunction];
}

export default function Button ({backgroundColor, fontSize, padding}: ButtonProps) {

    let url: string = "https://www.google.com";

    const [toggleText, setToggleText] = useToggle();

    function convertCurrency ( amount: number, currency: string ): string{
        //...
        return "hello";
    }

    convertCurrency(fontSize, "USD");

    const handleClick = () => {
        setToggleText();
        /* window.open(url); */
    }

    return (
        <button className="bg-blue-500 text-white rounded px-4 py-2" onClick={handleClick}>
            {toggleText ? "Turn On" : "Turn Off"}
        </button>
    )
}