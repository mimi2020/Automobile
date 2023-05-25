import {React,useState,useEffect} from "react"
import InspectionService from "../services/inspectionService"
import { useLocation,useNavigate } from "react-router-dom"
import {Grid,Card,Typography,Button,CardContent}from "@mui/material";

const ViewInspection=()=>{
    const location = useLocation()
    const [id, setId]=useState("")
    const [feux, setfeux]=useState("")
    const [Consommables_avant, setConsommables_avant]=useState("")
    const [Freinage, setFreinage]=useState("")
    const it = new InspectionService()
    useEffect(()=>{

        setId(location.state.id)
        console.log("id is ",location.state.id)
        findInspectionByid(location.state.id)
      },[])

      const findInspectionByid=(id)=>{
        it.findByid(id).then((res)=>{
            console.log("data is", res.data.data)
            setfeux(res.data.data.feux)
            setConsommables_avant(res.data.data.Consommables_avant)
            setFreinage(res.data.data.Freinage)


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
            feux is : {feux}
           </Typography>
           <Typography
            sx={{
             fontSize: "h4.fontSize",
             fontWeight: "500",
            }}
           >
            Consommables_avant is : {Consommables_avant}
           </Typography>
           <Typography
            sx={{
             fontSize: "h4.fontSize",
             fontWeight: "500",
            }}
           >
            Freinage is : {Freinage}
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

export default ViewInspection