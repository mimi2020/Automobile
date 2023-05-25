import React from "react";
import { Box, Button, TextField } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "./Header"
import { useNavigate } from "react-router-dom";
import InspectionService from "../services/inspectionService"

const AddInspection=()=>{
    const isNonMobile = useMediaQuery("(min-width:600px)");

    const it=new InspectionService()
    const navigate=useNavigate()
  const handleFormSubmit = (values) => {
    console.log(values);
    it.create(values).then((res)=>{
      console.log(res.data)
    })
    navigate(-1)   
  };
    return (
        <Box m="20px">
          <Header title="CREATE INSPECTION" subtitle="Create a New Inspection " />
    
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
                    label="feux"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.feux}
                    name="feux"
                    error={!!touched.feux && !!errors.feux}
                    helperText={touched.feux && errors.feux}
                    sx={{ gridColumn: "span 3" }}
                  />
                  <br></br>
                  <TextField
                    fullWidth
                    variant="filled"
                    type="text"
                    label="Consommables_avant"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.Consommables_avant}
                    name="Consommables_avant"
                    error={!!touched.Consommables_avant && !!errors.Consommables_avant}
                    helperText={touched.Consommables_avant && errors.Consommables_avant}
                    sx={{ gridColumn: "span 3" }}
                  />
                  <br></br>
                  <TextField
                    fullWidth
                    variant="filled"
                    type="text"
                    label="Freinage"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.Freinage}
                    name="Freinage"
                    error={!!touched.Freinage && !!errors.Freinage}
                    helperText={touched.Freinage && errors.Freinage}
                    sx={{ gridColumn: "span 3" }}
                  />
                  
                </Box>
                <Box display="flex" mt="20px">
                  <Button type="submit" color="secondary" variant="contained">
                    Create New Inspection
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
  feux: yup.string().required("required"),
  Consommables_avant: yup.string().required("required"),
  Freinage: yup.string().required("required"),
});
const initialValues = {
  feux: "",
  Consommables_avant: "",
  Freinage: "",
};
export default AddInspection