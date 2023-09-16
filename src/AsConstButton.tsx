export default function AsConstButton () {

    const buttonTextOptions = [
        "Click me",
        "Click Me!",
        "Click this button"

    ] as const; //Pure TypeScript. We are indicating that this array is a read-only array.

    return <button>
        {buttonTextOptions.map(option => {
            return option;
        })}
    </button>
}