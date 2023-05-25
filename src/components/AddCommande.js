import React from "react";
import { Box, Button, TextField } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../components/Header"
import { useNavigate } from "react-router-dom";
import CommandesService from "../services/commandeService"

const AddCommande=()=>{
    const isNonMobile = useMediaQuery("(min-width:600px)");

    const cd=new CommandesService()
    // const navigate=useNavigate()
  const handleFormSubmit = (values) => {
    console.log(values);
    cd.create(values).then((res)=>{
      console.log(res.data)
    })
    // navigate(-1)   
  };
    return (
        <Box m="20px">
          <Header title="CREATE COMMANDE" subtitle="Create a New Commande " />
    
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
                    label="ListOfVoitures"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.ListOfVoitures}
                    name="ListOfVoitures"
                    error={!!touched.ListOfVoitures && !!errors.ListOfVoitures}
                    helperText={touched.ListOfVoitures && errors.ListOfVoitures}
                    sx={{ gridColumn: "span 3" }}
                  />
                  <TextField
                    fullWidth
                    variant="filled"
                    type="text"
                    label="client"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.client}
                    name="client"
                    error={!!touched.client && !!errors.client}
                    helperText={touched.client && errors.client}
                    sx={{ gridColumn: "span 3" }}
                  />
                 
                  
                 
                </Box>
                <Box display="flex"  mt="20px">
                  <Button type="submit" color="secondary" variant="contained">
                    Create New Commande
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
  ListOfVoitures: yup.string().required("required"),
  client: yup.string().required("required"),
  
});
const initialValues = {
  ListOfVoitures: "",
  client: "",
  
};
export default AddCommande