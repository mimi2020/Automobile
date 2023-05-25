import {React,useState,useEffect} from "react"
import VendeurService from "../services/vendeurService"
import { useLocation ,useNavigate} from "react-router-dom"
import {Grid,Card,Typography,Button,CardContent}from "@mui/material";

const ViewVendeur=()=>{
    const location = useLocation()
    const [id, setId]=useState("")
    const [Vendeur_proprietere, setName]=useState("")
    const vd = new VendeurService()
    useEffect(()=>{

        setId(location.state.id)
        console.log("id is ",location.state.id)
        findInspectionByid(location.state.id)
      },[])

      const findInspectionByid=(id)=>{
        vd.findByid(id).then((res)=>{
            console.log("data is", res.data.data)
            setName(res.data.data.Vendeur_proprietere)
           


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
            Name is : {Vendeur_proprietere}
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

export default ViewVendeur