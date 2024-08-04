import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { UserIcon } from "lucide-react";
import Link from "next/link";

function EmployeesStats() {
  return (
    <div className="grid gap-4 lg:grid-cols-3">
      <Card>
        <CardHeader>
          <CardTitle className="text-base">Total Employees</CardTitle>
        </CardHeader>
        <CardContent className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <UserIcon />
            <div className="text-5xl font-bold">100</div>
          </div>
          <div>
            <Button asChild size={"xs"}>
              <Link href={"/dashboard/employees"}>View All</Link>
            </Button>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle className="text-base">Employees present</CardTitle>
        </CardHeader>
      </Card>
      <Card className="border-pink-500">
        <CardHeader>
          <CardTitle className="text-base">Employee of the month</CardTitle>
        </CardHeader>
      </Card>
    </div>
  );
}

export default EmployeesStats;
