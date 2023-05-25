import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard";
import Team from "./scenes/team";
import Invoices from "./scenes/invoices";
import Contacts from "./scenes/contacts";
import Bar from "./scenes/bar";
import Form from "./scenes/form";
import Line from "./scenes/line";
import Pie from "./scenes/pie";
import FAQ from "./scenes/faq";
import Geography from "./scenes/geography";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Calendar from "./scenes/calendar/calendar";
import ListOfUsers from "./components/ListOfUsers";
import ListOfAdmins from "./components/ListOfAdmins";
import ListOfCategories from "./components/ListOfCategories";
import ListOfCommandes from "./components/ListOfCommandes";
import ListOfInspections from "./components/ListOfInspections";
import ListOfVoitures from "./components/ListOfVoitures";
import ListOfCustomers from "./components/ListOfCustomers";
import ListOfVendeurs from "./components/ListOfVendeurs";
import ViewInspection from "./components/ViewInspection";
import ViewCategorie from "./components/ViewCategorie";
import ViewCommande from "./components/ViewCommande";
import ViewCustomer from "./components/ViewCustomer";
import ViewAdmin from "./components/ViewAdmin";
import ViewVendeur from "./components/ViewVendeur";
import ViewVoiture from "./components/ViewVoiture";
import ViewUser from "./components/ViewUser";
import UpdateAdmin from "./components/UpdateAdmin";
import UpdateCategorie from "./components/UpdateCategorie";
import UpdateCustomer from "./components/UpdateCustomer";
import UpdateInspection from "./components/UpdateInspection";
import UpdateUser from "./components/UpdateUser";
import UpdateVoiture from "./components/UpdateVoiture";
import UpdateVendeur from "./components/Updatevendeur";
import UpdateCmd from "./components/UpdateCmd";
import AddUser from "./components/AddUser";
import AddAdmin from "./components/AddAdmin";
import AddCategorie from "./components/AddCategorie";
import AddCommande from "./components/AddCommande";
import AddCustomer from "./components/AddCustomer";
import AddVendeur from "./components/AddVendeur";
import AddVoiture from "./components/AddVoiture";
import AddInspection from "./components/AddInspection";
import Login from "./components/login";
import DashboardCustomer from "./scenes/dashboard/dashboardCustomer";
import DashboardVendeur from "./scenes/dashboard/dashboardVendeur";

function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          {/* <Sidebar isSidebar={isSidebar} />
          <main className="content">
            <Topbar setIsSidebar={setIsSidebar} /> */}
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/dashboardCustomer" element={<DashboardCustomer />} />
              <Route path="/dashboardVendeur" element={<DashboardVendeur />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/team" element={<Team />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/invoices" element={<Invoices />} />
              <Route path="/form" element={<Form />} />
              <Route path="/bar" element={<Bar />} />
              <Route path="/pie" element={<Pie />} />
              <Route path="/line" element={<Line />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/geography" element={<Geography />} />
              <Route path="/ListOfAdmins" element={<ListOfAdmins />} />
              <Route path="/ListOfCategories" element={<ListOfCategories />} />
              <Route path="/ListOfCommandes" element={<ListOfCommandes />} />
              <Route path="/ListOfCustomers" element={<ListOfCustomers />} />
              <Route path="/ListOfInspections" element={<ListOfInspections />} />
              <Route path="/ListOfUsers" element={<ListOfUsers />} />
              <Route path="/ListOfVendeurs" element={<ListOfVendeurs/>} />
              <Route path="/ListOfVoitures" element={<ListOfVoitures />} />
              <Route path="/ViewInspection/:id" element={<ViewInspection />} />
              <Route path="/ViewUser/:id" element={<ViewUser />} />
              <Route path="/ViewAdmin/:id" element={<ViewAdmin />} />
              <Route path="/ViewVendeur/:id" element={<ViewVendeur />} />
              <Route path="/ViewCategorie/:id" element={<ViewCategorie />} />
              <Route path="/ViewCommande/:id" element={<ViewCommande />} />
              <Route path="/ViewCustomer/:id" element={<ViewCustomer />} />
              <Route path="/ViewVoiture/:id" element={<ViewVoiture />} />
              <Route path="/UpdateAdmin/:id" element={<UpdateAdmin />} />
              <Route path="/UpdateCategorie/:id" element={<UpdateCategorie />} />
              <Route path="/UpdateCmd/:id" element={<UpdateCmd />} />
              <Route path="/UpdateCustomer/:id" element={<UpdateCustomer />} />
              <Route path="/UpdateInspection/:id" element={<UpdateInspection />} />
              <Route path="/UpdateUser/:id" element={<UpdateUser />} />
              <Route path="/UpdateVendeur/:id" element={<UpdateVendeur />} />
              <Route path="/UpdateVoiture/:id" element={<UpdateVoiture />} />
              <Route path="/AddUser" element={<AddUser />} />
              <Route path="/AddAdmin" element={<AddAdmin />} />
              <Route path="/AddCustomer" element={<AddCustomer />} />
              <Route path="/AddCommande" element={<AddCommande />} />
              <Route path="/AddCategorie" element={<AddCategorie />} />
              <Route path="/AddInspection" element={<AddInspection />} />
              <Route path="/AddVendeur" element={<AddVendeur />} />
              <Route path="/AddVoiture" element={<AddVoiture />} />
              <Route path="/Login" element={<Login />} />


            </Routes>
          {/* </main> */}
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
