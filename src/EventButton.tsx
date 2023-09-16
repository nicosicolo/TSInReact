export default function EventButton () {
    
    const handleClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => { //This is the type of an html event.
        console.log("Click");
        
    }
    
    return <button onClick={handleClick}>Click Me!</button>
}