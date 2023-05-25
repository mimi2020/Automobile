import http from "./interceptor/AxiosInterceptor";

export default class CommandesService {
    create(data){
        console.log("add commandes ",data)
          return http.post("/commandes/",data);
    }
    getAll(){
        console.log('hello');
        return http.get("/commandes/");
    }
    remove(id){
        return http.delete("/commandes/"+id);
    }
    update(id,data){
        return http.put("/commandes/updatecommandes/"+id,data);
    }
    findByid(id){
        return http.get("/commandes/"+id);
    }
}