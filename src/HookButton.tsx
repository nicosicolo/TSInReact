import { useEffect, useRef, useState } from "react"

type Children = {
    children?: React.ReactNode; //In the component we always pass the children with the name children (i mean, this is obvious but it doesn't hurt to remerber it!)
}

type User = {
    name: string;
    age: number;
}

type ButtonColor = 'red' | 'blue' | 'green';

type Guest = Omit<User, 'name'>; //To define the Guest alias type take the alias User, but omit the name attribute.

export default function HookButton ({children}: Children) {

    const [ user, setUser ] = useState<User | null>(null);

    const [count, setCount] = useState<number>(0);

    const name = user?.name;

    const ref = useRef<HTMLButtonElement | null>(null); //We can also use Element or HTMLElement, but HTMLButtonElement is more specific.

    useEffect(()=>{
        const previousButtonColor = localStorage.getItem('buttonColor') as ButtonColor;
    }, [])

    return <button ref={ref}>{children}</button>
}