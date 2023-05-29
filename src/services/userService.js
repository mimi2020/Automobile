import http from "./interceptor/AxiosInterceptor";

export default class UserService {
    create(data){
        console.log("add user ",data)
          return http.post("/user/",data);
    }
    getAll(){
        console.log('hello');
        return http.get("/user/");
    }
    remove(id){
        return http.delete("/user/"+id);
    }
    update(id,data){
        return http.put("/user/updateUser/"+id,data);
    }
    findByid(id){
        return http.get("/user/"+id);
    }
    createLogin(data){
        return http.post("/auth/login",data)
    }

    sendMail(data){
        console.log("data on mail is",data)
        return http.post("/user/mail",data)
    }
    resetPassword(data){
        console.log("data on mail is",data)
        return http.post("/user/reserPassord",data)
    }
}