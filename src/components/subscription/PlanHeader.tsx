
interface PlanHeaderProps {
  name: string;
  spaceSize: string;
  price: string | number;
  description: string;
}

export const PlanHeader = ({ name, spaceSize, price, description }: PlanHeaderProps) => {
  return (
    <>
      <h3 className="text-2xl font-bold text-sage-500 mb-2">{name}</h3>
      <div className="text-gray-600 mb-4">{spaceSize}</div>
      <div className="flex items-center mb-4">
        {typeof price === 'number' ? (
          <>
            <span className="text-4xl font-bold text-sage-500">€{price}</span>
            <span className="text-gray-500 ml-2">/month</span>
          </>
        ) : (
          <span className="text-4xl font-bold text-sage-500">{price}</span>
        )}
      </div>
      <p className="text-gray-600 mb-6">{description}</p>
    </>
  );
};

