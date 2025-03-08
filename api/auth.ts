import client from "@/lib/axios";
import {LoginRequest, SignupRequest} from "@/api/types";


export const LoginUser = async (payload: LoginRequest): Promise<string> => {
    const {data} = await client.post('Account/login', payload);
    return data;
}

export const VerifyLogin = async (payload: LoginRequest): Promise<string> => {
    const {data} = await client.post('Account/verify-login', payload);
    return data;
}

export const SignupUser = async (payload: SignupRequest): Promise<string> => {
    const {data} = await client.post('Account/register', payload);
    return data;
}