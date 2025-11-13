// import React from "react";
// import H1 from "@/components/ui/textos/Title";
// import { CircleCheck, CircleUser, Heart, Lightbulb, Mail } from "lucide-react";
// import { Paragraph } from "@/components/ui/textos/Paragraph";
// import { developers } from "@/data/developer";
// import { H3 } from "@/components/ui/textos/H3";
// import H2 from "@/components/ui/textos/H2";

// const About: React.FC = () => {
//   return (
//     <div className="bg-background py-16">
//       <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Header */}
//         <div className="text-center mb-12 flex flex-col items-center justify-center">
//           <H1>Sobre Nosso Projeto</H1>
//           <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
//             Somos uma equipe dedicada a tornar os serviços de saúde mais
//             acessíveis para pessoas idosas e com dificuldades tecnológicas.
//           </p>
//         </div>

//         {/* Mission */}
//         <div className="rounded-xl p-8 shadow-md border border-border mb-16">
//           <H3 isStronger={true}>Nossa Missão</H3>
//           <Paragraph>
//             Criar um ambiente digital inclusivo e acessível que permita a todas
//             as pessoas, independentemente de sua familiaridade com a tecnologia,
//             acessarem facilmente os serviços do Hospital das Clínicas.
//             Acreditamos que o acesso à saúde deve ser simples, claro e livre de
//             barreiras tecnológicas.
//           </Paragraph>
//         </div>

//         {/* Team */}
//         <div className="mb-16">
//           <H2>Conheça Nossa Equipe</H2>
//           <div className="grid md:grid-cols-3 gap-8 mt-5">
//             {developers.map((developer, index) => (
//               <div
//                 key={index}
//                 className="bg-surface rounded-xl p-6 shadow-md border border-border text-center hover:shadow-lg transition-shadow flex flex-col items-center"
//               >
//                 <div className="bg-gradient-primary rounded-full mb-4 flex items-center justify-center w-48 h-48">
//                   <div className="w-44 h-44 rounded-full overflow-hidden border-4 border-white">
//                     <img
//                       src={developer.image}
//                       alt={developer.name}
//                       className="object-cover w-full h-full"
//                     />
//                   </div>
//                 </div>

//                 <h3 className="text-xl font-semibold text-blue-700 mb-2">
//                   {developer.name}
//                 </h3>

//                 <Paragraph>{developer.description}</Paragraph>

//                 <p className="text-lg font-medium mt-4">
//                   Turma: <span className="font-semibold">1TDSPG</span>
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Values */}
//         <div className="bg-accent rounded-xl p-8 mb-16">
//           <H2>Nossos Valores</H2>
//           <div className="grid md:grid-cols-2 gap-8 mt-5">
//             <div className="flex items-start space-x-3">
//               <div className="w-6 h-6 text-primary mt-1">
//                 <CircleCheck className="text-blue-700" />
//               </div>
//               <div>
//                 <H3 isStronger={true}>Acessibilidade</H3>
//                 <Paragraph>
//                   Criamos soluções que todos podem usar, independente da idade
//                   ou habilidade tecnológica.
//                 </Paragraph>
//               </div>
//             </div>

//             <div className="flex items-start space-x-3">
//               <div className="w-6 h-6 text-primary mt-1">
//                 <Heart className="text-blue-700" />
//               </div>
//               <div>
//                 <H3 isStronger={true}>Empatia</H3>
//                 <Paragraph>
//                   Entendemos as dificuldades e criamos soluções pensando no
//                   usuário em primeiro lugar.
//                 </Paragraph>
//               </div>
//             </div>

//             <div className="flex items-start space-x-3">
//               <div className="w-6 h-6 text-primary mt-1">
//                 <Lightbulb className="text-blue-700" />
//               </div>
//               <div>
//                 <H3 isStronger={true}>Simplicidade</H3>
//                 <Paragraph>
//                   Mantemos tudo simples e direto, sem complicações
//                   desnecessárias.
//                 </Paragraph>
//               </div>
//             </div>

//             <div className="flex items-start space-x-3">
//               <div className="w-6 h-6 text-primary mt-1">
//                 <CircleUser className="text-blue-700" />
//               </div>
//               <div>
//                 <H3 isStronger={true}>Suporte</H3>
//                 <Paragraph>
//                   Oferecemos ajuda personalizada sempre que necessário.
//                 </Paragraph>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Contact CTA */}
//         <div className="text-center">
//           <h2 className="text-2xl font-bold text-foreground mb-4">
//             Quer Saber Mais?
//           </h2>
//           <Paragraph>
//             Entre em contato conosco para sugestões, dúvidas ou feedback sobre
//             nosso projeto.
//           </Paragraph>
//           <a
//             href="mailto:hcconecta@gmail.com"
//             className="inline-flex items-center space-x-2 text-primary hover:text-primary/80 transition-colors"
//           >
//             <div className="flex mt-3 gap-2 items-center">
//               <Mail className="w-5 h-5 text-blue-700" />
//               <span className="text-lg text-blue-700 font-medium">
//                 hcconecta@gmail.com
//               </span>
//             </div>
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default About;
