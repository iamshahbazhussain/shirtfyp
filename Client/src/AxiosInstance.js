import axios from "axios"



const Instance = axios.create({
    // baseURL:"http://localhost:80",
    baseURL:"https://shirt-fyp.herokuapp.com"
}) 

export default Instance