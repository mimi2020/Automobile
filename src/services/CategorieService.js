import http from "./interceptor/AxiosInterceptor";

export default class CategoriesService {
    create(data){
        console.log("add category",data)
          return http.post("/categories/create/",data);
    }
    getAll(){
        console.log('hello');
        return http.get("/categories/");
    }
    remove(id){
        return http.delete("/categories/"+id);
    }
    update(id,data){
        return http.put("/categories/"+id,data);
    }
    findByid(id){
        return http.get("/categories/"+id);
    }
}