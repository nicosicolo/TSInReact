/*
type ButtonProps = {
    type: 'submit' | 'reset' | 'button';
    autoFocus?: boolean;
};
*/

import { ComponentProps } from "react"

type ButtonProps = ComponentProps<"button"> //now we can receive every props that a button element could receive

export default function AutoFocusButton ({type, autoFocus}: ButtonProps) {

    return <button>Click Me!</button>
}