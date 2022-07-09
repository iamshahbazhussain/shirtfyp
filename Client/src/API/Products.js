import axios from "../AxiosInstance"


const GettingProductsAPI = async (id = null) => {
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

export { GettingProductsAPI }