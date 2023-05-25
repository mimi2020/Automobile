import React from "react"

import { Box, Typography, useTheme,TableCell,TableRow,TableBody,TableHead,Table,Chip } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../theme";
import { mockDataTeam } from "../data/mockData";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import Header from "./Header";
import { useState, useEffect} from "react";
import InspectionService from "../services/inspectionService";
import Swal from "sweetalert2"
import { useNavigate } from "react-router-dom";

const ListOfInspections =()=>{
    const [inspections, setInspections]=useState([])
    const [feux, setfeux]=useState("")
    const [Consommables_avant, setConsommables_avant]=useState("")
    const [Freinage, setFreinage]=useState("")

    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const columns = [
        { field: "id", headerName: "ID" },
        {
          field: "name",
          headerName: "Name",
          flex: 1,
          cellClassName: "name-column--cell",
        },
        {
          field: "age",
          headerName: "Age",
          type: "number",
          headerAlign: "left",
          align: "left",
        },
        {
          field: "phone",
          headerName: "Phone Number",
          flex: 1,
        },
        {
          field: "email",
          headerName: "Email",
          flex: 1,
        },
        {
          field: "accessLevel",
          headerName: "Access Level",
          flex: 1,
          renderCell: ({ row: { access } }) => {
            return (
              <Box
                width="60%"
                m="0 auto"
                p="5px"
                display="flex"
                justifyContent="center"
                backgroundColor={
                  access === "admin"
                    ? colors.greenAccent[600]
                    : access === "manager"
                    ? colors.greenAccent[700]
                    : colors.greenAccent[700]
                }
                borderRadius="4px"
              >
                {access === "admin" && <AdminPanelSettingsOutlinedIcon />}
                {access === "manager" && <SecurityOutlinedIcon />}
                {access === "user" && <LockOpenOutlinedIcon />}
                <Typography color={colors.grey[100]} sx={{ ml: "5px" }}>
                  {access}
                </Typography>
              </Box>
            );
          },
        },
      ];

      const ispt = new InspectionService()

      useEffect(() => {
    GetAllinspectionsFromBack();
  }, []);
  const GetAllinspectionsFromBack=()=>{
     console.log('Hello')
     ispt.getAll().then((res)=>{console.log(res.data.data)
      setInspections(res.data.data)})
  }

  const deleteInspection=(id) => {
    console.log("ok supprimer", id);
    Swal.fire({
      title: "Vous-êtez sûr??",
      text: "Vous ne pourrez pas revenir en arrière!",
      icon: "avertissement",
      showCancelButton: true,
      confirmButtonColor: "#3085D6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Oui, supprimez-le!",
    }).then((result) => {
      if (result.isConfirmed) {
        ispt.remove(id).then((res) => {
          console.log(res.status);
          console.log("resposne", res);
          if (res.status === 200) {
            GetAllinspectionsFromBack();
            Swal.fire("Supprimé!", "Votre fichier a été supprimé.", "Succès");
          }
        });
      }
    });
  };
  const navigate = useNavigate()

  const ViewDetailsInspection= (id) => {
    navigate("/ViewInspection/" + id, { state: { id: id } })
  }
  const ViewDetailupdated= (id) => {
    navigate("/UpdateInspection/" + id, { state: { id: id } })
  }

      return (
        <Box m="20px">
          <Header title="Inspections" subtitle="Managing the inspections" />
          <Box
            m="40px 0 0 0"
            height="75vh"
            sx={{
              "& .MuiDataGrid-root": {
                border: "none",
              },
              "& .MuiDataGrid-cell": {
                borderBottom: "none",
              },
              "& .name-column--cell": {
                color: colors.greenAccent[300],
              },
              "& .MuiDataGrid-columnHeaders": {
                backgroundColor: colors.blueAccent[700],
                borderBottom: "none",
              },
              "& .MuiDataGrid-virtualScroller": {
                backgroundColor: colors.primary[400],
              },
              "& .MuiDataGrid-footerContainer": {
                borderTop: "none",
                backgroundColor: colors.blueAccent[700],
              },
              "& .MuiCheckbox-root": {
                color: `${colors.greenAccent[200]} !important`,
              },
            }}
          >
            {/* <DataGrid checkboxSelection rows={mockDataTeam} columns={columns} /> */}
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>
                  ID
                  </TableCell>
                  
                  <TableCell>
                  feux
                  </TableCell>
                  <TableCell>
                  Consommables_avant
                  </TableCell>
                  <TableCell>
                  Freinage
                  </TableCell>
                  <TableCell>
                  Action
                  </TableCell>
                  

                </TableRow>
              </TableHead>
              <TableBody>
              {inspections.map((ipt,index)=>(
                <TableRow key={ipt._id}>
                  <TableCell>
                    {index+1}
                  </TableCell>
                
                  <TableCell >
                    {ipt.feux}
                  </TableCell>
                  <TableCell >
                    {ipt.Consommables_avant}
                  </TableCell>
                  <TableCell >
                    {ipt.Freinage}
                  </TableCell>
                 
                 
                  <TableCell >
                  <Chip
          sx={{
           pl: "4px",
           pr: "4px",
           backgroundColor: "error.main",
           color: "#fff",
          }}
          size="small"
          label="Delete"
          onClick={(e) => { deleteInspection(ipt._id) }}
         ></Chip>
                  
         <Chip
          sx={{
           pl: "4px",
           pr: "4px",
           backgroundColor: "#5499C7",
           color: "#fff",
          }}
          size="small"
          label="View Details"
          onClick={(e) => { ViewDetailsInspection(ipt._id) }}
         ></Chip>
        
         <Chip
          sx={{
           pl: "4px",
           pr: "4px",
           backgroundColor: "green",
           color: "#fff",
          }}
          size="small"
          label="update"
          onClick={(e) => { ViewDetailupdated(inspections._id) }}
         ></Chip>
        </TableCell>

                </TableRow>
              ))}
              </TableBody>
            </Table>
          </Box>
        </Box>
      );
}

export default ListOfInspections
