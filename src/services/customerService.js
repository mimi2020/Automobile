import http from "./interceptor/AxiosInterceptor";

export default class CustomersService {
    create(data){
        console.log("add customer",data)
          return http.post("/customers/",data);
    }
    getAll(){
        console.log('hello');
        return http.get("/customers/");
    }
    remove(id){
        return http.delete("/customers/"+id);
    }
    update(id,data){
        return http.put("/customers/updatecustomers/"+id,data);
    }
    findByid(id){
        return http.get("/customers/"+id);
    }
}