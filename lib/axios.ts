import axios, {AxiosInstance} from "axios";


const client: AxiosInstance = axios.create({
    baseURL: process.env.API_URL || "http://localhost:5001/api/",
    headers: {
        'Content-Type': 'application/json',
    },
});



// client.interceptors.response.use(
//     (response: AxiosResponse) => response.data,
//     (error: AxiosError<ApiError>) => {
//         throw new Error(error.response?.data?.message || 'An error occurred');
//     }
// );

export default client;
