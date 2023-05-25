import http from"./interceptor/AxiosInterceptor";
export default class LoginService 
{
    login (data){
        console.log("data on login is:",data)
       return http.post("/auth/login",data)

    }
    logout(){
        console.log('logout');
        return http.get("/auth/logout");
    }
    
}