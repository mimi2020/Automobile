import axios from "axios";
export default axios.create({
    baseURL:"http://localhost:3000"
    ,
    Headers : {
        "Content-type": "application/json",
        // "Content-type": "multipart/form-data",
        // "Content-type": "application/x-www-form-urlencoded"
    },
});