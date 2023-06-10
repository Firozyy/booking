import React from 'react'
import { register } from '../../reudx/action/useraction'
import { useDispatch } from 'react-redux'
function Register() {

    const username = "secfcsss"
    const email = "orsccfssf@gmail.com"
    const password = "123456"

    const dispatch = useDispatch()
    const loginhandler = () => {
       
        dispatch(register(username,email,password))
    }

    return (
        <div>

            <button onClick={loginhandler}>
                test
            </button>
        </div>
    )
}

export default Register