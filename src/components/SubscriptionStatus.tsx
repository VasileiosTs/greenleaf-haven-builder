import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

interface SubscriptionStatusProps {
  userId: string;
}

export const SubscriptionStatus = ({ userId }: SubscriptionStatusProps) => {
  const { toast } = useToast();
  const [subscription, setSubscription] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSubscription = async () => {
      try {
        const { data, error } = await supabase
          .from("subscriptions")
          .select("*")
          .eq("user_id", userId)
          .single();

        if (error) throw error;
        setSubscription(data);
      } catch (error: any) {
        console.error("Error fetching subscription:", error);
      } finally {
        setLoading(false);
      }
    };

    if (userId) {
      fetchSubscription();
    }
  }, [userId]);

  const handleUpgrade = () => {
    // TODO: Implement upgrade flow with Stripe
    toast({
      title: "Coming Soon",
      description: "Subscription upgrade functionality will be available soon!",
    });
  };

  if (loading) {
    return <div>Loading subscription details...</div>;
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h2 className="text-xl font-semibold mb-4">Your Subscription</h2>
      {subscription ? (
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
          <Button
            onClick={handleUpgrade}
            className="w-full bg-sage-600 hover:bg-sage-700"
          >
            Upgrade Plan
          </Button>
        </div>
      ) : (
        <div className="text-center space-y-4">
          <p className="text-gray-600">No active subscription</p>
          <Button
            onClick={handleUpgrade}
            className="w-full bg-sage-600 hover:bg-sage-700"
          >
            Get Started
          </Button>
        </div>
      )}
    </div>
  );
};