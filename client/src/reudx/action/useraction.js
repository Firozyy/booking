import axios from "axios"

export const register = (username, email, password) => async (dispatch) => {

    try {
        dispatch({ type: "registerRequest" });
        const { data } = await axios.post(`http://127.0.0.1:8080/api/v1/register`, { username, email, password }, {
            headers: {
                "Content-Type": 'application/json'
            },
            withCredentials: true,

        });

        dispatch({ type: "registerSuccess", payload: data })

    } catch (error) {
        dispatch({ type: "registerFail", payload: error.response.data.message })
    }
};
export const login = (username, password) => async (dispatch) => {

    try {
        dispatch({ type: "loginRequest" });
        const { data } = await axios.post(`http://127.0.0.1:8080/api/v1/login`, { username, password }, {
            headers: {
                "Content-Type": 'application/json'
            },
            withCredentials: true,

        });

        dispatch({ type: "loginSuccess", payload: data })

    } catch (error) {
        dispatch({ type: "loginFail", payload: error.response.data.message })
    }
};