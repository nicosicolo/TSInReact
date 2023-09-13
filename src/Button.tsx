type Colors = "blue" | "red" | "green";

type ButtonProps = {
    backgroundColor: Colors, //We can specifie the only strings we want to accept as values.
    textColor?: Colors,
    fontSize: number,
    pillShape?: boolean, //We make an optional attribute.
    padding?: [number?, number?, number?, number?]; //Tuple: a little bit more specific array.
}

export default function Button ( props: ButtonProps) {

    //More common way to destructure the props object;
    //const { backgroundColor, fontSize, pillShape } = props;

    //This is how we declare a variable with a specific type.
    let url: string = "https://www.google.com";

    //This is how a function is declared with parameters that are unknown.
    /*
    function convertCurrency (amount:unknown, currency:unknown) {
        //...
    }
    */

    //A function is defined with two arguments (number and string) and it has to return a string.
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