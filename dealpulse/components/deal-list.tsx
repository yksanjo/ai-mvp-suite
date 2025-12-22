import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { format } from "date-fns";

interface Deal {
  id: string;
  deal_name: string;
  company_name: string;
  deal_value: number | null;
  stage: string;
  created_at: string;
}

export function DealList({ deals }: { deals: Deal[] }) {
  if (deals.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-600 mb-4">No deals yet</p>
        <Link href="/dashboard/deals/new">
          <Button>Create Your First Deal</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {deals.map((deal) => (
        <Card key={deal.id}>
          <CardContent className="p-4">
            <div className="flex justify-between items-start">
              <div>
                <Link href={`/dashboard/deals/${deal.id}`}>
                  <h3 className="font-semibold text-lg hover:underline">
                    {deal.deal_name}
                  </h3>
                </Link>
                <p className="text-sm text-gray-600">{deal.company_name}</p>
                <div className="flex gap-4 mt-2 text-sm text-gray-500">
                  <span>Stage: {deal.stage}</span>
                  {deal.deal_value && (
                    <span>Value: ${deal.deal_value.toLocaleString()}</span>
                  )}
                  <span>
                    Created: {format(new Date(deal.created_at), "MMM d, yyyy")}
                  </span>
                </div>
              </div>
              <Link href={`/dashboard/deals/${deal.id}/analyze`}>
                <Button variant="outline">Analyze</Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

