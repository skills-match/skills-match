import Home from "@/routes/home";
import Layout from "@/routes/layout";
// import Login from "@/routes/login";
// import NotFound from "@/routes/notFound";
// import Profile from "@/routes/perfil";
// import Register from "@/routes/registrar";
// import About from "@/routes/sobre";
import { Route, Routes } from "react-router-dom";

const AppRoutes = () => {
    return ( 
        <Routes>
        <Route element={<Layout />}>
          <Route path="/home" element={<Home />} />
          {/* <Route path="/sobre" element={<About />} /> */}
          {/* <Route path="/suporte" element={<Support />} /> */}
          {/* <Route path="/perfil/:id" element={<Profile />} /> */}
        </Route>

        {/* <Route path="*" element={<NotFound />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registrar" element={<Register />} /> */}
      </Routes>
     );
}
 
export default AppRoutes;