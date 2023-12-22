import './card.css'
import { useState } from 'react'
function Card() {
    let [count, setCount] = useState(0)
    function increment() {
        setCount(count + 1)
    }
    function decrement() {
        setCount(count - 1)
    }
    return (
        <div className='card-wrapper'>
            <div className="card">
            <div className='count'>{count}</div>
            <div>
                <button onClick={increment} className="btn">Increment</button>
                <button onClick={decrement} className="btn">Decrement</button>
            </div>

        </div> 
        </div>
        
    )
}
export default Card;