import http from "./interceptor/AxiosInterceptor";

export default class VendeurService {
    create(data){
        console.log("add vendeur",data)
          return http.post("/vendeur/",data);
    }
    getAll(){
        console.log('hello');
        return http.get("/vendeur/");
    }
    remove(id){
        return http.delete("/vendeur/"+id);
    }
    update(id,data){
        return http.put("/vendeur/updatevendeur/"+id,data);
    }
    findByid(id){
        return http.get("/vendeur/"+id);
    }
}