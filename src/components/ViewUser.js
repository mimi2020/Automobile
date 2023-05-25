import {React,useState,useEffect} from "react"
import { useLocation,useNavigate } from "react-router-dom"
import UserService from "../services/userService"
import {Grid,Card,Typography,Button,CardContent}from "@mui/material";


const ViewUser=()=>{
  const location = useLocation()
  const [id, setId]=useState("")
  const [name, setName]=useState("")
  const [email, setEmail]=useState("")
  const [photo, setPhoto]=useState("")
  const [password, setPassword]=useState("")
  const [items, setItems]=useState("")
  const us = new UserService()
  useEffect(()=>{

    setId(location.state.id)
    console.log("id is ",location.state.id)

    getUserByid(location.state.id)
  },[])

  const getUserByid=(id)=>{
    us.findByid(id).then((res)=>{
        console.log("data is", res.data)
        setName(res.data.name)
        setEmail(res.data.email)
        setPhoto(res.data.photo)
        setItems(res.data.items)
    
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
        {name}
       </Typography>
       <Typography
        color="textSecondary"
        sx={{
         fontSize: "14px",
         fontWeight: "400",
         mt: 1,
        }}
       >
        {email}
       </Typography>
       <Typography
        color="textSecondary"
        sx={{
         fontSize: "14px",
         fontWeight: "400",
         mt: 1,
        }}
       >
        {photo}
       </Typography>
       <Typography
        color="textSecondary"
        sx={{
         fontSize: "14px",
         fontWeight: "400",
         mt: 1,
        }}
       >
        {items}
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

export default ViewUser