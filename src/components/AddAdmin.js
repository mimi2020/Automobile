import React from "react";
import { Box, Button, TextField } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../components/Header"
import { useNavigate } from "react-router-dom";
import AdminService from "../services/adminService"

const AddAdmin=()=>{
    const isNonMobile = useMediaQuery("(min-width:600px)");

    const adm=new AdminService()
        // const navigate=useNavigate()

  const handleFormSubmit = (values) => {
    console.log(values);
    adm.create(values).then((res)=>{
      console.log(res.data)
    })
    // navigate(-1)
  };
    return (
        <Box m="20px">
          <Header title="CREATE ADMIN" subtitle="Create a New Admin Profile" />
    
          <Formik
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
            }) => (
              <form onSubmit={handleSubmit}>
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
                    label="Permission"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.Permission}
                    name="Permission"
                    error={!!touched.Permission && !!errors.Permission}
                    helperText={touched.Permission && errors.Permission}
                    sx={{ gridColumn: "span 3" }}
                  />
                 
          
                </Box>
                <Box display="flex"  mt="20px">
                  <Button type="submit" color="secondary" variant="contained">
                    Create New Admin
                  </Button>
                </Box>
              </form>
            )}
          </Formik>
        </Box>
      );
}
const phoneRegExp =
  /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

const checkoutSchema = yup.object().shape({
  Permission: yup.string().required("required"),
  
});
const initialValues = {
  Permission: "",
 
};
export default AddAdmin