import { useState } from "react"

const Counter = () => {
    const[record , setRecord] = useState(0)

    
    const mines = () => {
        setRecord(
            record - 1
            )        
    }
    const pluse = () => {
        setRecord(
            record + 1
            )
        }
    return(
        <>
            <h1>{record}</h1>
            <button onClick={ () => pluse() }>+</button>
            <button onClick={ () => mines() }>-</button>
        </>
    )
}
export default Counter;