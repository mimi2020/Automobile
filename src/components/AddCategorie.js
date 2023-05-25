import {React,useState} from "react";
import { Box, Button, TextField } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../components/Header"
import CategoriesService from "../services/CategorieService";
import { useNavigate } from "react-router-dom";

const AddCategorie=()=>{
    const isNonMobile = useMediaQuery("(min-width:600px)");

    const cat=new CategoriesService()
    const navigate=useNavigate()
  const handleFormSubmit = (values) => {
    console.log(values);
    cat.create(values).then((res)=>{
      console.log(res.data)
    })
    navigate(-1)   
  };
    return (
        <Box m="20px">
          <Header title="CREATE CATEGORY" subtitle="Create a New Categorie " />
    
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
                  {/* <TextField
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
                    sx={{ gridColumn: "span 2" }}
                  /> */}
                  <TextField
                    fullWidth
                    variant="filled"
                    type="text"
                    label="name"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.name}
                    name="name"
                    error={!!touched.name && !!errors.name}
                    helperText={touched.name && errors.name}
                    sx={{ gridColumn: "span 3" }}
                  />
                  <TextField
                    fullWidth
                    variant="filled"
                    type="text"
                    label="description"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.description}
                    name="description"
                    error={!!touched.description && !!errors.description}
                    helperText={touched.description && errors.description}
                    sx={{ gridColumn: "span 3" }}
                  />
                 
                </Box>
                <Box display="flex"  mt="20px">
                  <Button type="submit" color="secondary" variant="contained">
                    Create New Categorie
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
  // ListOfVoitures: yup.string().required("required"),
  name: yup.string().required("required"),
  description: yup.string().required("required"),
});
const initialValues = {
  // ListOfVoitures: "",
  name: "",
  description: "",
};
export default AddCategorie