import axios from "../AxiosInstance"


const GettingPaymentsAPI = async (id = null) => {
    let resolved = {
        error: null,
        data: null
    }

    try {
        let res = await axios({
            url: id != null ? `/api/product?id=${id}` : `/api/product`,
            method: "GET",
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

const CreatePaymentAPI = async (price , data , user) => {
    let resolved = {
        error: null,
        data: null
    }

    try {
        let res = await axios({
            url: `/api/payment`,
            method: "POST",
            data:{
                price,
                products:data,
                user
            }
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

export { GettingPaymentsAPI, CreatePaymentAPI }