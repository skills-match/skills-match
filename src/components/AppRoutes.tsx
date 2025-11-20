import Faq from "@/routes/faq";
import Home from "@/routes/home";
import Layout from "@/routes/layout";
import NotFound from "@/routes/notFound";
import Register from "@/routes/registrar";
import About from "@/routes/sobre";
import { Route, Routes } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import Steps from "@/routes/etapas";
import Login from "@/routes/login";

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/home" element={<Home />} />
        <Route path="/sobre" element={<About />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/etapas" element={<Steps />} />
          <Route element={<PrivateRoute />} >
           {/*  <Route path="/etapas" element={<Steps />} /> */}
          </Route>
      </Route>

      <Route path="*" element={<NotFound />} />\
      <Route path="/login" element={<Login />} />
      <Route path="/registrar" element={<Register />} />
    </Routes>
  );
}

export default AppRoutes;
