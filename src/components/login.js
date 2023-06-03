import React from "react"
import { Box, Button, TextField } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "./Header";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import UserService from "../services/userService";

const Login = () => {

  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const navigate =useNavigate()
  const US = new UserService()
  const AddLogin = (e) => {
    e.preventDefault()
      // const data = {
      //     "email" : email,
      //     "password": password
      // }

      const formdata = new FormData()
      
      formdata.append("email",email)
      formdata.append("password",password)
      US.createLogin(formdata)
     
      .then((res) => {
        console.log("then", res.data)
        if(res.data.items === "Customer") {
          navigate ('/dashboardCustomer')
          // alert("Customer")
        }else if(res.data.items === "Vendeur") {
          // alert("Vendeur")
          navigate ('/dashboardVendeur')
         }else if(res.data.items === "Admin") {
          // alert("Admin")
          console.log("accepted")
         navigate ('/dashboard')
         }
         localStorage.setItem("token",res.data.access_token);
         console.log("token is", res.data.access_token)
      })
  }

  const ResetPasswordFunction =(e)=>{
e.preventDefault()
const data1 = {
  "email" : email,
  
}
US.resetPassword(data1).then((res)=>{
  console.log("rest password")
})
  }
return (
  <div
  style={{marginLeft:"15px"}}
  >
      <h2>  LOGIN</h2>
      <br></br>
      <br></br>
      <form>
          <TextField
            id="email"
            label="Email"
            variant="outlined"
          
            fullWidth
            sx={{mb: 2}}
            value={email} 
            onChange={e => setEmail((e).target.value)}
          />
          <TextField
            
          
            id="password"
            label="Password"
            variant="outlined"
           
            fullWidth
            sx={{mb: 2, gridColumn: "span 3" }}
            value={password} 
            onChange={e => setPassword((e).target.value)}
          />
          {/* <TextField
                    fullWidth
                    variant="filled"
                    type="text"
                    label="Permission"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.Permission}
                    name="Permission"
                    error={!!touched.Permission && !!errors.Permission}
                    helperText={touched.Permission && errors.Permission}
                    sx={{ gridColumn: "span 3" }}
                  /> */}
          <div>
          <Box display="flex"  mt="20px">
            <Button type="submit" color="secondary" variant="contained" onClick={(e)=>AddLogin(e)}
            >
              Login
            </Button>
            </Box>
          </div>
  <br></br>
  <br></br>
       <p onClick={(e)=>ResetPasswordFunction(e)}>Forget Password</p>   
      </form>
  </div>
)
}
export default Login