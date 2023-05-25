import React from "react";
import { Box, Button, TextField } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../components/Header"
import { useNavigate } from "react-router-dom";
import VendeurService from "../services/vendeurService"

const AddVendeur=()=>{
    const isNonMobile = useMediaQuery("(min-width:600px)");

    const vd=new VendeurService()
    // const navigate=useNavigate()
  const handleFormSubmit = (values) => {
    console.log(values);
    vd.create(values).then((res)=>{
      console.log(res.data)
    })
    // navigate(-1)   
  };

    return (
        <Box m="20px">
          <Header title="CREATE SELLER" subtitle="Create a New Seller Profile" />
    
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
                    label="Vendeur_proprietere"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.Vendeur_proprietere}
                    name="Vendeur_proprietere"
                    error={!!touched.Vendeur_proprietere && !!errors.Vendeur_proprietere}
                    helperText={touched.Vendeur_proprietere && errors.Vendeur_proprietere}
                    sx={{ gridColumn: "span 3" }}
                  />
                 
                  
                </Box>
                <Box display="flex"  mt="20px">
                  <Button type="submit" color="secondary" variant="contained">
                    Create New Vendeur
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
  Vendeur_proprietere: yup.string().required("required"),
 
});
const initialValues = {
  Vendeur_proprietere: "",
 
};
export default AddVendeur