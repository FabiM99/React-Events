
import "./style.css"

export function AlertClock(){
    function timeButton(){
        const now = new Date()

        alert(`The current date is ${now.toLocaleDateString()} and the current time is ${now.toLocaleTimeString()}`)
    }
    return(
    <div>
        <p>Click the button below to see the current time</p>
        <button className="bn53" onClick={timeButton}>Click me!</button>
    </div>
    )
}