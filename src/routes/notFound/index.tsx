// import { useLocation, useNavigate } from "react-router-dom";
// import { useEffect } from "react";
// import H1 from "@/components/ui/textos/Title";
// import Button from "@/components/ui/button/Button";

// const NotFound = () => {
//   const location = useLocation();

//   const navigate = useNavigate();

//   useEffect(() => {
//     console.error(
//       "404 Error: User attempted to access non-existent route:",
//       location.pathname
//     );
//   }, [location.pathname]);

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100">
//       <div className="text-center flex flex-col justify-center items-center">
//         <H1>
//           404
//         </H1>
//         <div className="w-64 h-auto">
//           <img src="/dinosaur-notfound.png" alt="Dinosaurs" />
//         </div>
//         <p className="text-muted-foreground text-lg mb-4 max-w-80 lg:max-w-[25rem]">Oops! Nosso dinossaurinho médico também não conseguiu achar esse caminho.</p>
//         <Button className="text-white" variant="primary" onClick={() => navigate("/home")}>
//           Voltar para a Home
//         </Button>
//       </div>
//     </div>
//   );
// };

// export default NotFound;
