export interface SuccessAuthResponse {
    displayName: string;
    token: string;
    username: string;
}

export interface LoginRequest {
    email: string;
    password: string;
}

export interface SignupRequest {
    email: string;
    password: string;
    displayName: string;
    username: string;
}

export interface ApiError {
    message: string;
}