import Faq from "@/routes/faq";
import Home from "@/routes/home";
import Layout from "@/routes/layout";
import NotFound from "@/routes/notFound";
import About from "@/routes/sobre";
import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import { AuthProvider, useAuth } from "./contexts/AuthContext";
import PrivateRoute from "./PrivateRoute";
import Steps from "@/routes/etapas";

const AppRoutes = () => {

  return (
    <AuthProvider>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/home" element={<Home />} />
          <Route path="/sobre" element={<About />} />
          <Route path="/faq" element={<Faq />} />
           <Route path="/etapas" element={<Steps currentStep={0}/>} />
          <Route element={<PrivateRoute />} >
           {/*  <Route path="/etapas" element={<Steps />} /> */}
          </Route>
        </Route>
        <Route path="*" element={<NotFound />} />\
        {/* <Route path="/login" element={<Login />} />
        <Route path="/registrar" element={<Register />} /> */}
      </Routes>
    </AuthProvider>
  );
};

export default AppRoutes;
