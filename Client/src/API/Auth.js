import axios from "../AxiosInstance"


const RegisterAPI = async (enteredData) => {
    let resolved = {
        error: null,
        data: null
    }

    try {
        let res = await axios({
            url: "/api/auth/add",
            method: "POST",
            data: enteredData
        })

        resolved.data = res.data
    } catch (error) {
        if (error.response?.data.msg) {
            resolved.error = error.response.data.msg
        } else {
            resolved.error = "Somthing Went Wrong"
        }
    }

    return resolved
}

const LoginAPI = async (enteredData) => {
    let resolved = {
        error: null,
        data: null
    }

    try {
        let res = await axios({
            url: "/api/auth/",
            method: "POST",
            data: enteredData
        })

        resolved.data = res.data
    } catch (error) {
        if (error.response?.data.msg) {
            resolved.error = error.response.data.msg
        } else {
            resolved.error = "Somthing Went Wrong"
        }
    }

    return resolved
}


export { RegisterAPI, LoginAPI }