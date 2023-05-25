import http from "./interceptor/AxiosInterceptor";

export default class AdminService {
    create(data){
        console.log("add admin",data)
          return http.post("/admin/",data);
    }
    getAll(){
        console.log('hello');
        return http.get("/admin/");
    }
    remove(id){
        return http.delete("/admin/"+id);
    }
    update(id,data){
        return http.put("/admin/updateadmin/"+id,data);
    }
    findByid(id){
        return http.get("/admin/"+id);
    }
}

