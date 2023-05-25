import {React,useState} from "react";
import { Box, Button, TextField } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../components/Header"
import { useNavigate } from "react-router-dom";
import UserService from "../services/userService"

const AddUser=()=>{
    const isNonMobile = useMediaQuery("(min-width:600px)");

    const us=new UserService()

    const [name, setName]=useState("")
    const [email, setEmail]=useState("")
    const [photo, setPhoto]=useState("")
    const [password, setPassword]=useState("")
    const [items, setItems]=useState("")
    const onFileChange = event => { setPhoto(event.target.files[0]) };

    const navigate=useNavigate()
    const adduserfunction = ()=> {
      const formdata = new FormData();
      formdata.append("name",name)
     formdata.append("email",email)
     formdata.append("password",password)
     formdata.append("items",items)
     formdata.append("photo",photo)
        us.create(formdata).then((res)=>{
          console.log("ok created")
        })
        navigate(-1)
     };
    return (
      <Box m="20px">
      <Header title="CREATE USER" subtitle="Create a New User Profile" />

      {/* <Formik
        onSubmit={handleFormSubmit}
        initialValues={initialValues}
        validationSchema={checkoutSchema}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
        }) => ( */}
          <form >
            <Box
              display="grid"
              gap="30px"
              gridTemplateColumns="repeat(4, minmax(0, 1fr))"
              sx={{
                "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
              }}
            >
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Name"
               
                onChange={(e) => setName(e.target.value)}
                value={name}
                name="name"
                // error={!!touched.name && !!errors.name}
                // helperText={touched.name && errors.name}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Email"
                
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                name="email"
                // error={!!touched.email && !!errors.email}
                // helperText={touched.email && errors.email}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Password"
               
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                name="password"
                // error={!!touched.password && !!errors.password}
                // helperText={touched.password && errors.password}
                sx={{ gridColumn: "span 4" }}
              />
             
              
            
              <div calss="col-md-3">Picture</div>
              <div class="col-md-7">
                <input
                  type="file"
                  class="form-control"
                  onChange={onFileChange}
                />
              </div>
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Items"
               
                onChange={(e) => setItems(e.target.value)}
                value={items}
                name="items"
                // error={!!touched.items && !!errors.items}
                // helperText={touched.items && errors.items}
                sx={{ gridColumn: "span 4" }}
              />
            </Box>
            <Box display="flex" justifyContent="end" mt="20px">
              <Button onClick={adduserfunction} color="secondary" variant="contained">
                Create New User
              </Button>
            </Box>
          </form>
        
    </Box>
  );
};


const phoneRegExp =
/^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

const checkoutSchema = yup.object().shape({
name: yup.string().required("required"),
email: yup.string().email("invalid email").required("required"),
password: yup.string().required("required"),

items: yup.string().required("required"),

});
const initialValues = {
name: "",
email: "",
password: "",

photo: "",
items: "",
};

export default AddUser