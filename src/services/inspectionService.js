import http from "./interceptor/AxiosInterceptor";

export default class InspectionService {
    create(data){
        console.log("add inspection ",data)
          return http.post("/inspection/",data);
    }
    getAll(){
        console.log('hello');
        return http.get("/inspection/");
    }
    remove(id){
        return http.delete("/inspection/"+id);
    }
    update(id,data){
        return http.put("/inspection/updateInspections/"+id,data);
    }
    findByid(id){
        return http.get("/inspection/"+id);
    }
}