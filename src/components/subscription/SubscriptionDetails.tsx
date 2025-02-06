interface SubscriptionDetailsProps {
  subscription: {
    plan_size: string;
    status: string;
    start_date: string;
  };
}

export const SubscriptionDetails = ({ subscription }: SubscriptionDetailsProps) => {
  return (
    <div className="space-y-4">
      <div>
        <p className="text-gray-600">Current Plan:</p>
        <p className="text-lg font-medium">{subscription.plan_size}</p>
      </div>
      <div>
        <p className="text-gray-600">Status:</p>
        <p className="text-lg font-medium capitalize">{subscription.status}</p>
      </div>
      <div>
        <p className="text-gray-600">Start Date:</p>
        <p className="text-lg font-medium">
          {new Date(subscription.start_date).toLocaleDateString()}
        </p>
      </div>
    </div>
  );
};