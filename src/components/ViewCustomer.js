import {React,useState,useEffect} from "react"
import CustomersService from "../services/customerService"
import { useLocation ,useNavigate} from "react-router-dom"
import {Grid,Card,Typography,Button,CardContent}from "@mui/material";

const ViewCustomer=()=>{
    const location = useLocation()
    const [id, setId]=useState("")
    const [adresse, setAdresse]=useState("")
    const [Tel, setTel]=useState("")
    const cts = new CustomersService()
    useEffect(()=>{

        setId(location.state.id)
        console.log("id is ",location.state.id)
        findCustomerByid(location.state.id)
      },[])

      const findCustomerByid=(id)=>{
        cts.findByid(id).then((res)=>{
            console.log("data is", res.data.data)
            setAdresse(res.data.data.adresse)
            setTel(res.data.data.Tel)

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
            adresse is : {adresse}
           </Typography>
           <Typography
            sx={{
             fontSize: "h4.fontSize",
             fontWeight: "500",
            }}
           >
            Tel is : {Tel}
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

export default ViewCustomer