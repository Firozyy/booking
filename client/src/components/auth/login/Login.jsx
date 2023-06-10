import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import "./login.css";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../../reudx/action/useraction.js"

const Login = () => {
    const navigate = useNavigate()
    const { loading, message, error, isAuthenticated } = useSelector(state => state.users);
    const dispatch = useDispatch()
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("")
    console.log(isAuthenticated);

    const submithandler = (e) => {
        e.preventDefault()
        dispatch(login(username, password))

    };

    return (
        <div className="login">
            <div className="lContainer">
                <input
                    type="text"
                    placeholder="username"
                    id="username"
                    onChange={(e) => { setUsername(e.target.value) }}
                    className="lInput"
                />
                <input
                    type="password"
                    placeholder="password"
                    id="password"
                    onChange={(e) => { setPassword(e.target.value) }}
                    className="lInput"
                />
                <span>{error}</span>
                <button disabled={loading} onClick={submithandler} className="lButton">
                    Login
                </button>

            </div>
        </div>
    );
};

export default Login;