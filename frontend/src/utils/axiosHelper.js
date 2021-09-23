import axios from 'axios'

const axiosHelper = () => {

    const baseURL = process.env.REACT_APP_BACKEND_URL;
    console.log(baseURL)
    const headers = {}   

    const axiosHelper = axios.create({
        baseURL,
        headers
    })

    axiosHelper.interceptors.response.use(
        (res) => new Promise((resolve) => {
            resolve(res)
        }),
        (err) => {
            return new Promise((reject) => {
                reject(err);
            });
        }
    )
    return axiosHelper
}

export default axiosHelper