import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  AlertTriangleIcon,
  BadgeCheckIcon,
  UserCheck2Icon,
  UserIcon,
  UserRoundXIcon,
} from "lucide-react";
import Link from "next/link";

function EmployeesStats() {
  const totalEmployees = 100;
  const employeesPresent = 70;

  return (
    <div className="grid gap-4 lg:grid-cols-3">
      <Card>
        <CardHeader className="pb-2">
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
        <CardHeader className="pb-2">
          <CardTitle className="text-base">Employees present</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex gap-2">
            {employeesPresent > 75 ? <UserCheck2Icon /> : <UserRoundXIcon />}
            <div className="text-5xl font-bold">{employeesPresent}</div>
          </div>
        </CardContent>
        <CardFooter>
          {(employeesPresent / totalEmployees) * 100 > 75 ? (
            <span className="flex items-center gap-1 text-xs text-green-500">
              <BadgeCheckIcon />
              {(employeesPresent / totalEmployees) * 100}% of employees are
              present
            </span>
          ) : (
            <span className="flex items-center gap-1 text-xs text-red-500">
              <AlertTriangleIcon />
              Only {(employeesPresent / totalEmployees) * 100}% of employees are
              present
            </span>
          )}
        </CardFooter>
      </Card>

      <Card className="border-pink-500">
        <CardHeader className="pb-2">
          <CardTitle className="text-base">Employee of the month</CardTitle>
        </CardHeader>
      </Card>
    </div>
  );
}

export default EmployeesStats;
