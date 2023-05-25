import React from "react";
import { Box, Button, TextField } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../components/Header"
import { useNavigate } from "react-router-dom";
import CustomersService from "../services/customerService"

const AddCustomer=()=>{
    const isNonMobile = useMediaQuery("(min-width:600px)");

    const cts=new CustomersService()
    
    const navigate=useNavigate()
  const handleFormSubmit = (values) => {
    console.log(values);
    cts.create(values).then((res)=>{
      console.log(res.data)
    })
    navigate(-1)   
  };
    return (
        <Box m="20px">
          <Header title="CREATE CUSTOMER" subtitle="Create a New Customer Profile" />
    
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
                    label="adresse"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.firstName}
                    name="adresse"
                    error={!!touched.adresse && !!errors.adresse}
                    helperText={touched.adresse && errors.adresse}
                    sx={{ gridColumn: "span 3" }}
                  />
                  <TextField
                    fullWidth
                    variant="filled"
                    type="text"
                    label="Tel"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.Tel}
                    name="Tel"
                    error={!!touched.Tel && !!errors.Tel}
                    helperText={touched.Tel && errors.Tel}
                    sx={{ gridColumn: "span 3" }}
                  />
                  
                </Box>
                <Box display="flex"  mt="20px">
                  <Button type="submit" color="secondary" variant="contained">
                    Create New Customer
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
  adresse: yup.string().required("required"),
  Tel: yup
    .string()
    .matches(phoneRegExp, "Phone number is not valid")
    .required("required"),
  
});
const initialValues = {
  adresse: "",
  Tel: "",
  
};
export default AddCustomer