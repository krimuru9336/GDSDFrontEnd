import defaultImage from "../../src/assets/images/default.png"

export const getToken = () => {
    return localStorage.getItem("token")
}


export const isLoggedIn = () => {
    return getToken() ? true : false
}

export const getFileFormatted = (file) =>{
    const formatted = file ? file : defaultImage
    return formatted
}