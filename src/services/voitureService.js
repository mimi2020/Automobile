import http from "./interceptor/AxiosInterceptor";

export default class VoituresService {
    create(data){
        console.log("add car ",data)
          return http.post("/voitures/",data);
    }
    getAll(){
        console.log('hello');
        return http.get("/voitures/");
    }
    remove(id){
        return http.delete("/voitures/"+id);
    }
    update(id,data){
        return http.put("/voitures/updateVoitures/"+id,data);
    }
    findByid(id){
        return http.get("/voitures/"+id);
    }
}