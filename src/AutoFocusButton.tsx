import React, { ComponentPropsWithoutRef } from "react";
/*
type ButtonProps = {
    type: 'submit' | 'reset' | 'button';
    autoFocus?: boolean;
};
*/


type ButtonProps = React.ComponentPropsWithoutRef<"button"> //now we can receive every props that a button element could receive

export default function AutoFocusButton ({type, autoFocus, ...rest}: ButtonProps) { //We use spread operator to scoop the rest of props that are not exclusive for the button html element.

    return <button type={type} autoFocus={autoFocus} {...rest}>Click Me!</button> //Spread the rest of props
}