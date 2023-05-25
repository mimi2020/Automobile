import {React,useState,useEffect} from "react"
import VoitureService from "../services/voitureService"
import { useLocation,useNavigate } from "react-router-dom"
import {Grid,Card,Typography,Button,CardContent}from "@mui/material";

const ViewVoiture=()=>{
    const location = useLocation()
    const [id, setId]=useState("")
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
    const vt = new VoitureService()
    useEffect(()=>{

        setId(location.state.id)
        console.log("id is ",location.state.id)
        findInspectionByid(location.state.id)
      },[])

      const findInspectionByid=(id)=>{
        vt.findByid(id).then((res)=>{
            console.log("data is", res.data.data)
            setMarque(res.data.data.Marque)
            setKilometrage(res.data.data.Kilometrage)
            setGovernorat(res.data.data.Governorat)
            setAnnee(res.data.data.Annee)
            setAdresse(res.data.data.Adresse)
            setPhoto(res.data.data.Photo)
            setEnergie(res.data.data.Energie)
            setTel(res.data.data.Tel)
            setPuissance_fiscal(res.data.data.Puissance_fiscal)
            setBoite(res.data.data.Boite)
            setID_category(res.data.data.ID_category)
            setCouleur(res.data.data.Couleur)



        })
      }
      const navigate=useNavigate()
      const goBack=()=>{
          navigate(-1);
      }
    return(
        <Grid container>
  
        <Grid
         
         xs={12}
         lg={4}
         sx={{
          display: "flex",
          alignItems: "stretch",
         }}
        >
         <Card
          variant="outlined"
          sx={{
           p: 0,
           width: "100%",
          }}
         >
          {/* <img src={blog.img} alt="img" width="100%" /> */}
          <CardContent
           sx={{
            paddingLeft: "30px",
            paddingRight: "30px",
           }}
          >
           <Typography
            sx={{
             fontSize: "h4.fontSize",
             fontWeight: "500",
            }}
           >
            Marque is : {Marque}
           </Typography>
           <Typography
            sx={{
             fontSize: "h4.fontSize",
             fontWeight: "500",
            }}
           >
            Kilometrage is : {Kilometrage}
           </Typography>
           <Typography
            sx={{
             fontSize: "h4.fontSize",
             fontWeight: "500",
            }}
           >
            Governorat is : {Governorat}
           </Typography>
           <Typography
            sx={{
             fontSize: "h4.fontSize",
             fontWeight: "500",
            }}
           >
            Annee is : {Annee}
           </Typography>
           <Typography
            sx={{
             fontSize: "h4.fontSize",
             fontWeight: "500",
            }}
           >
            Adresse is : {Adresse}
           </Typography>
           <Typography
            sx={{
             fontSize: "h4.fontSize",
             fontWeight: "500",
            }}
           >
            Photo is : {Photo}
           </Typography>
           <Typography
            sx={{
             fontSize: "h4.fontSize",
             fontWeight: "500",
            }}
           >
            Energie is : {Energie}
           </Typography>
           <Typography
            sx={{
             fontSize: "h4.fontSize",
             fontWeight: "500",
            }}
           >
            Tel is : {Tel}
           </Typography>
           <Typography
            sx={{
             fontSize: "h4.fontSize",
             fontWeight: "500",
            }}
           >
            ID_category is : {ID_category}
           </Typography>
           <Typography
            sx={{
             fontSize: "h4.fontSize",
             fontWeight: "500",
            }}
           >
            Puissance_fiscal is : {Puissance_fiscal}
           </Typography>
           <Typography
            sx={{
             fontSize: "h4.fontSize",
             fontWeight: "500",
            }}
           >
            Boite is : {Boite}
           </Typography>
           <Typography
            sx={{
             fontSize: "h4.fontSize",
             fontWeight: "500",
            }}
           >
            Couleur is : {Couleur}
           </Typography>
           
           
          
           <Button onClick={goBack}
            variant="contained"
            sx={{
             mt: "15px",
            }}
            // color="#0000FF"
           >
            ←Back
           </Button>
          </CardContent>
         </Card>
        </Grid>
       
      </Grid>
    )
}

export default ViewVoiture