import client from "@/lib/axios";
import {LoginRequest, SignupRequest, SuccessAuthResponse} from "@/api/types";


export const loginUser = async (payload: LoginRequest): Promise<SuccessAuthResponse> => {
    const {data} = await client.post('/Account/login', payload)
    return data
}

export const signupUser = async (payload: SignupRequest): Promise<SuccessAuthResponse> => {
    const {data} = await client.post('/Account/register', payload)
    return data
}