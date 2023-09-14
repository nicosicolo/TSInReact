type Colors = "blue" | "red" | "green";

type ButtonProps = {
    backgroundColor: Colors, //We can specifie the only strings we want to accept as values.
    textColor?: Colors,
    fontSize: number,
    pillShape?: boolean, //We make an optional attribute.
    padding?: [number?, number?, number?, number?]; //Tuple: a little bit more specific array.
}

export default function Button ( props: ButtonProps) {

    let url: string = "https://www.google.com";

    function convertCurrency ( amount: number, currency: string ): string{
        //...
        return "hello";
    }

    convertCurrency(100, "USD");

    const handleClick = () => {
        window.open(url);
    }

    return (
        <button className="bg-blue-500 text-white rounded px-4 py-2" onClick={handleClick}>
            Click Me
        </button>
    )
}