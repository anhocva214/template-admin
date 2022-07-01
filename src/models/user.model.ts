export class User{

}

export class UserLogin{
    username: string;
    password: string;
    constructor();
    constructor(obj?: UserLogin)
    constructor(obj?: any){
        this.username = obj?.username || "";
        this.password = obj?.password || "";
    }
}