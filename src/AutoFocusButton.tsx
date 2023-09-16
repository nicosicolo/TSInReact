import React, { ComponentPropsWithoutRef } from "react";

type SuperButtonProps = ButtonProps & {
    defaultValue: string;
};



type ButtonProps = React.ComponentPropsWithoutRef<"button"> //now we can receive every props that a button element could receive

export default function AutoFocusButton ({type, autoFocus, defaultValue}: SuperButtonProps) { //We use spread operator to scoop the rest of props that are not exclusive for the button html element.

    return <button type={type} autoFocus={autoFocus} defaultValue={defaultValue}>Click Me!</button> //Spread the rest of props
}