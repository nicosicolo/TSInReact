
const convertToArray = (value: any) => { //any type means that anything goes as an argument.
    return [value];
}

const genericConvertToArray = <T, >(value: T): T[] => { //Althoug it may look ugly this is the way to use a Type Parameter.
    return [value];
}

function typeConvertToArray<T>(value: T): T[]{
    return [value];
} //Using type parameter without arrow functions has a slightly better syntax.

type ButtonProps<T> = {
    countValue: T;
    countHistory: T[];
}

export default function GenericsButton<T> ({countValue, countHistory}: ButtonProps<T>) {
    return <button>Click Me!</button>
}