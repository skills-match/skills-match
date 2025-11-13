import { IFeatures } from "@/interfaces/IFeatures";
import { Text } from "../ui/textos/Text";

const FeaturesCard = ({ icon, text, children }: IFeatures) => {
  return (
    <div
      className="flex items-start gap-4 bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition"
    >
      <div className="bg-primary/10 p-3 rounded-xl flex items-center justify-center">
        {icon}
      </div>
      <div className="text-left">
        <h3 className="text-lg font-semibold mb-1">{children}</h3>
        <Text colors="mutedForeground" size="md">
          {text}
        </Text>
      </div>
    </div>
  );
};

export default FeaturesCard;
