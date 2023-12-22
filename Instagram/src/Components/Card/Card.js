import './card.css'
import Logo from '../Logo/Logo'
import SignInInputs from '../Inputs/SignInInputs'
import Button from '../Button/Button'
import { useState } from 'react'
import SignUpInputs from '../Inputs/SignUpInput'
import Text from '../Text/Text'

function Card() {
    let [inputs, setInputs] = useState(<SignInInputs />)
    let [change, setChange] = useState(true)
    function toggle() {
        if (change === true) {
            setInputs(<SignUpInputs />)
            let btn = document.querySelector('.btn')
            btn.textContent = "SignUp"
            let text = document.querySelector('.text');
            text.textContent = "have an account?"
            let btn2 = document.querySelector('.button');
            btn2.textContent = "Log in"
            
        }
        else {
            setInputs(<SignInInputs />)
            let btn = document.querySelector('.btn')
            btn.textContent = "Sign In"
            let text = document.querySelector('.text');
            text.textContent = "Don't have an account?"
            let btn2 = document.querySelector('.button');
            btn2.textContent = "SignUp"
           
        }
        setChange(!change)

    }
    return (
        <div className="card-wrapper">
            <div className="card">
                <Logo src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUtZ2q6Dr4ZP4zU01VfGffyc_u-z8vIY4BCA&usqp=CAU" alt="img" height="80px" width="150px" />
                {inputs}
                <Button onClick={toggle} />
                <Text onClick={toggle} />
            </div>
        </div>


    )
}
export default Card