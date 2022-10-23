import axios, { AxiosResponse } from "axios";

import { Token } from "../business/token.interface";

export const validateToken = async (token: string) => {
    let result: AxiosResponse = await axios.post(`http://localhost:6663/validate`, {
        headers: {
            "Authorization": token
        }
    });
    return result.status === 200;
}

export const parseJwt = (token: string) => {
    try {
        return JSON.parse(atob(token.split('.')[1])) as Token
    } catch (e) {
        return null;
    }
}