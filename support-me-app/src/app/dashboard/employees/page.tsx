import { employeesData } from "@/lib/employees-data";
import { setTimeout } from "timers/promises";

async function EmployeesPage() {
  await setTimeout(60000);

  return <h2>Employees Page</h2>;
}

export default EmployeesPage;
