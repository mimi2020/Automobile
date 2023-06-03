import axios from "axios";
const token=localStorage.getItem("token")
export default axios.create({
    baseURL:"http://localhost:3000"
    ,
    Headers : {
        // "Content-type": "application/json",
        "Content-type": "multipart/form-data",
        // "Content-type": "application/x-www-form-urlencoded"
      
    },
    headers: {"Authorization" : `Bearer ${token}`}
    // Authorization: token ? `Token ${token}` : '',
});