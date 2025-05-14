import Cookies from 'js-cookie'

const access_token_key = 'access_token'

const cookieOptions = {
    expires:0.5,
    path:'/',
    secure: true,
    sameSite:'strict'

};

export const setToken = (token) => {
    Cookies.set(access_token_key, token, cookieOptions)
}

export const getToken = () => {
    return Cookies.get(access_token_key)
}

export const removeToken = () => {
    Cookies.remove(access_token_key, {path:'/'})
}