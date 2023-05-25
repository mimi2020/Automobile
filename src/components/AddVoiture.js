import {React,useState} from "react";
import { Box, Button, TextField } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../components/Header"
import { useNavigate } from "react-router-dom";
import VoituresService from "../services/voitureService"

const AddVoiture=()=>{
    const isNonMobile = useMediaQuery("(min-width:600px)");

    const vt=new VoituresService()
    const [Marque, setMarque]=useState("")
    const [Kilometrage, setKilometrage]=useState("")
    const [Governorat, setGovernorat]=useState("")
   const [Annee, setAnnee]=useState("")
const [Adresse, setAdresse]=useState("")
const [Photo, setPhoto]=useState("")
const [Energie, setEnergie]=useState("")
const [Tel, setTel]=useState("")
const [Puissance_fiscal, setPuissance_fiscal]=useState("")
const [Boite, setBoite]=useState("")
const [ID_category, setID_category]=useState("")
const [Couleur, setCouleur]=useState("")
const onFileChange = event => { setPhoto(event.target.files[0]) };

    // const navigate=useNavigate()
    const addvoiturefunction = ()=> {
      const formdata = new FormData();
      formdata.append("Marque",Marque)
      formdata.append("Kilometrage",Kilometrage)
      formdata.append("Governorat",Governorat)
      formdata.append("Annee",Annee)
      formdata.append("Adresse",Adresse)
      formdata.append("Energie",Energie)
      formdata.append("Tel",Tel)
      formdata.append("Puissance_fiscal",Puissance_fiscal)
      formdata.append("Boite",Boite)
      formdata.append("ID_category",ID_category)
      formdata.append("Couleur",Couleur)
     formdata.append("Photo",Photo)
        vt.create(formdata).then((res)=>{
          console.log("ok created")
        })
        // navigate(-1)
     };
    return (
        <Box m="20px">
          <Header title="CREATE CAR" subtitle="Create a New Car" />
    
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
                    label="Marque"
                    onChange={(e) => setMarque(e.target.value)}

                    // onBlur={handleBlur}
                    // onChange={handleChange}
                    value={Marque}
                    name="Marque"
                    // error={!!touched.Marque && !!errors.Marque}
                    // helperText={touched.Marque && errors.Marque}
                    sx={{ gridColumn: "span 4" }}
                  />
                  <TextField
                    fullWidth
                    variant="filled"
                    type="text"
                    label="Kilometrage"
                    onChange={(e) => setKilometrage(e.target.value)}

                    // onBlur={handleBlur}
                    // onChange={handleChange}
                    value={Kilometrage}
                    name="Kilometrage"
                    // error={!!touched.Kilometrage && !!errors.Kilometrage}
                    // helperText={touched.Kilometrage && errors.Kilometrage}
                    sx={{ gridColumn: "span  4" }}
                  />
                  <TextField
                    fullWidth
                    variant="filled"
                    type="text"
                    label="Governorat"
                    onChange={(e) => setGovernorat(e.target.value)}

                    // onBlur={handleBlur}
                    // onChange={handleChange}
                    value={Governorat}
                    name="Governorat"
                    // error={!!touched.Governorat && !!errors.Governorat}
                    // helperText={touched.Governorat && errors.Governorat}
                    sx={{ gridColumn: "span 4" }}
                  />
                  <TextField
                    fullWidth
                    variant="filled"
                    type="text"
                    label="Annee"
                    onChange={(e) => setAnnee(e.target.value)}

                    // onBlur={handleBlur}
                    // onChange={handleChange}
                    value={Annee}
                    name="Annee"
                    // error={!!touched.Annee && !!errors.Annee}
                    // helperText={touched.Annee && errors.Annee}
                    sx={{ gridColumn: "span 4" }}
                  />
                  <TextField
                    fullWidth
                    variant="filled"
                    type="text"
                    label="Adresse"
                    onChange={(e) => setAdresse(e.target.value)}

                    // onBlur={handleBlur}
                    // onChange={handleChange}
                    value={Adresse}
                    name="Adresse"
                    // error={!!touched.Adresse && !!errors.Adresse}
                    // helperText={touched.Adresse && errors.Adresse}
                    sx={{ gridColumn: "span 4" }}
                  />
                  <div >
                   <div className="col-md-5">Photo</div>
              <div className="col-md-7">
                <input
                  type="file"
                  className="form-control"
                  onChange={onFileChange}
                />
                </div>
              </div>
                  <TextField
                    fullWidth
                    variant="filled"
                    type="text"
                    label="Energie "
                    onChange={(e) => setEnergie(e.target.value)}

                    // onBlur={handleBlur}
                    // onChange={handleChange}
                    value={Energie}
                    name="Energie"
                    // error={!!touched.Energie && !!errors.Energie}
                    // helperText={touched.Energie && errors.Energie}
                    sx={{ gridColumn: "span 4" }}
                  />
                  <TextField
                    fullWidth
                    variant="filled"
                    type="text"
                    label="Tel "
                    onChange={(e) => setTel(e.target.value)}

                    // onBlur={handleBlur}
                    // onChange={handleChange}
                    value={Tel}
                    name="Tel"
                    // error={!!touched.Tel && !!errors.Tel}
                    // helperText={touched.Tel && errors.Tel}
                    sx={{ gridColumn: "span 4" }}
                  />
                  <TextField
                    fullWidth
                    variant="filled"
                    type="text"
                    label="Puissance_fiscal "
                    onChange={(e) => setPuissance_fiscal(e.target.value)}

                    // onBlur={handleBlur}
                    // onChange={handleChange}
                    value={Puissance_fiscal}
                    name="Puissance_fiscal"
                    // error={!!touched.Puissance_fiscal && !!errors.Puissance_fiscal}
                    // helperText={touched.Puissance_fiscal && errors.Puissance_fiscal}
                    sx={{ gridColumn: "span 4" }}
                  />
                  <TextField
                    fullWidth
                    variant="filled"
                    type="text"
                    label="Boite "
                    onChange={(e) => setBoite(e.target.value)}

                    // onBlur={handleBlur}
                    // onChange={handleChange}
                    value={Boite}
                    name="Boite"
                    // error={!!touched.Boite && !!errors.Boite}
                    // helperText={touched.Boite && errors.Boite}
                    sx={{ gridColumn: "span 4" }}
                  />
                   <TextField
                    fullWidth
                    variant="filled"
                    type="text"
                    label="ID_category "
                    onChange={(e) => setID_category(e.target.value)}

                    // onBlur={handleBlur}
                    // onChange={handleChange}
                    value={ID_category}
                    name="ID_category"
                    // error={!!touched.ID_category && !!errors.ID_category}
                    // helperText={touched.ID_category && errors.ID_category}
                    sx={{ gridColumn: "span 4" }}
                  />
                   <TextField
                    fullWidth
                    variant="filled"
                    type="text"
                    label="Couleur "
                    onChange={(e) => setCouleur(e.target.value)}

                    // onBlur={handleBlur}
                    // onChange={handleChange}
                    value={Couleur}
                    name="Couleur"
                    
                    sx={{ gridColumn: "span 4" }}
                  />

                </Box>
                <Box display="flex"  mt="20px">
                  <Button onClick={addvoiturefunction} type="submit" color="secondary" variant="contained">
                    Create New Voiture
                  </Button>
                </Box>
              </form>
            
        </Box>
      );
}
const phoneRegExp =
  /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

const checkoutSchema = yup.object().shape({
  Marque: yup.string().required("required"),
  Kilometrage: yup.string().required("required"),
  Governorat: yup.string().required("required"),
  Annee: yup.string().required("required"),
  Adresse: yup.string().required("required"),
  Energie: yup.string().required("required"),
  Tel: yup.string().matches(phoneRegExp, "Phone number is not valid").required("required"),
  Puissance_fiscal: yup.string().required("required"),
  Boite: yup.string().required("required"),
  ID_category: yup.string().required("required"),
  Couleur: yup.string().required("required"),
});
const initialValues = {
  Marque: "",
  Tel: "",
  Puissance_fiscal: "",
  Boite: "",
  ID_category: "",
  Couleur: "",
};
export default AddVoiture