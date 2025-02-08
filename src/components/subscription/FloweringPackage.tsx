
interface FloweringPackageProps {
  name: string;
  description: string;
  price: string | number;
}

export const FloweringPackage = ({ name, description, price }: FloweringPackageProps) => {
  return (
    <div className="mb-6 p-4 bg-sage-50 rounded-lg">
      <h4 className="font-semibold text-sage-700 mb-2">{name}</h4>
      <p className="text-sm text-gray-600 mb-2">{description}</p>
      <p className="text-sage-600 font-medium">
        {price === 'Custom' ? (
          'Custom pricing'
        ) : (
          <>+€{price}/month</>
        )}
      </p>
    </div>
  );
};

