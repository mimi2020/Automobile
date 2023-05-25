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
      const data = {
          "email" : email,
          "password": password
      }
      console.log("data is",data)
      US.createLogin(data)
     
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
      </form>
  </div>
)
}
export default Login