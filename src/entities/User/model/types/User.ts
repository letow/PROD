export interface User {
    id: string;
    name: string;
}

export interface UserScheme {
    authData?: User;
}
