import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DataTable } from "@/components/ui/data-table";
import { Skeleton } from "@/components/ui/skeleton";
import { employeesData } from "@/lib/employees-data";
import { setTimeout } from "timers/promises";
import { columns } from "./columns";

async function EmployeesPage() {
  await setTimeout(2000);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Employees</CardTitle>
      </CardHeader>
      <CardContent>
        <DataTable data={employeesData} columns={columns}></DataTable>
      </CardContent>
    </Card>
  );
}

export default EmployeesPage;
