import { developers } from "@/data/developer";
import Subtitle from "../ui/textos/Subtitle";
import { Text } from "../ui/textos/Text";

const Developers = () => {
  return (
    <section className="max-w-5xl mx-auto mb-20">
      <Subtitle position="center">Equipe de Desenvolvimento</Subtitle>

      <Text colors="mutedForeground" className="mt-4 mb-10">
        Somos o time da turma 1TDSPG que é responsável pela criação, arquitetura e melhoria contínua
        do Skills Match, unindo design, front-end, back-end e experiência do
        usuário.
      </Text>

      <div className="grid md:grid-cols-3 gap-8">
        {developers.map((dev, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center text-center border hover:shadow-lg transition-all"
          >
            <div className="w-28 h-28 rounded-full overflow-hidden shadow mb-4">
              <img
                src={dev.image}
                alt={dev.name}
                className="w-full h-full object-cover"
              />
            </div>

            <h3 className="font-semibold text-lg"><span className="text-primary"> {dev.name.split("-")[0]} </span> - {dev.name.split(" ")[3]}</h3>
            <Text colors="mutedForeground" className="mt-2">
              {dev.description}
            </Text>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Developers;
