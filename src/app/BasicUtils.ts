import { IAuthData } from "./AuthData"

export function product(a: number, b: number): number {
    return a * b
}


export function authenticateUser(username: string, password: string): IAuthData {
    const authStatus = username === "developer" && password === "dev"
    return {
        usernameToLower: username.toLowerCase(),
        usernameCharacters: username.split(""),
        userDetails: {},
        isAuthentication: authStatus,
    }
}


export class UserNameToLowercase {
    public toLower(username: string) {
        if (username === "") {
            throw new Error("Invalid username")
        }
        return username.toLowerCase()
    }
}

