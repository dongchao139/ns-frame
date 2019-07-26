
export abstract class AbstractLoginService {
    abstract doLogin(value: any): string | boolean;
    abstract doLogout(): boolean;
    abstract saveUser(user: any): boolean;
    abstract storeUrl(url:string);
    abstract hasLogin(): boolean;
}
