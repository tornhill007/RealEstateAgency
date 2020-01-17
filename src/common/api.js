//import * as axios from "axios";

const baseUrl = '';

const instance = '';
// const instance = axios.create({
//     withCredentials: true,
//     baseUrl: '',
//     headers: {
//         "API-KEY": ""
//     }
// });

export const authAPI = {
    me() {
        return '';
        //instance.get(``)
    },
    login(email, password, rememberMe = false) {
        return instance.post(`auth/login`, {email, password, rememberMe});
    },
    logout() {
        return instance.delete(`auth/login`);
    }
}