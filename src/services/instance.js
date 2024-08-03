import axios from "axios"

//define baseURL for the API
const baseURL = "https://node-password-reset-tjd6.onrender.com"

//create an axios instance
const instance = axios.create({
    baseURL,
    timeout : 5000,
    headers : {
        "Content-Type" : "application/json"
    }
})

export {instance}