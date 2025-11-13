import plans from "@/data/Plans";
import Button from "../ui/button/Button";
import { useNavigate } from "react-router-dom";
import Subtitle from "../ui/textos/Subtitle";
import { Text } from "@/components/ui/textos/Text";

const Plans = () => {

    const navigate = useNavigate();

    return ( 
      <section className="py-20 px-6 text-start">
      <Subtitle>Planos disponíveis</Subtitle>

      <div className="grid md:grid-cols-2 gap-8 mt-12 max-w-4xl mx-auto">
        {plans.map((plan) => (
          <div
            key={plan.id}
            className={`rounded-2xl p-[2px] ${
              plan.highlight ? plan.borderColor : ""
            }`}
          >
            <div className="bg-white shadow-md rounded-2xl p-8 h-full flex flex-col justify-between">
              <div>
                <h3 className={`text-2xl font-bold text-foreground mb-2`}>
                  {plan.title}
                </h3>
                <Text size="md" colors="foreground" className="mb-4">{plan.subtitle}</Text>
                <Text  colors="primary" className="mb-4 font-bold text-3xl">{plan.price}{plan.id === "premium" ? (<span className="text-muted-foreground text-xl relative right-1"> /mês </span>) : ""} </Text>
                <ul className="text-gray-700 text-left mb-6 space-y-4 mt-5">
                  {plan.features.map((feature, index) => (
                    <li key={index}>• {feature}</li>
                  ))}
                </ul>
              </div>

              <Button
                className="w-full mt-4"
                onClick={() => navigate("/")}
              >
                {plan.buttonLabel}
              </Button>
            </div>
          </div>
        ))}
      </div>
    </section>
     );
}
 
export default Plans;