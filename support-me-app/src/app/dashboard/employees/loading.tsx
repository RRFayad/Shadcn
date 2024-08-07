import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

function Loading() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Employees</CardTitle>
      </CardHeader>
      <CardContent className="grid grid-cols-[60px_1fr_1fr_1fr_1fr] items-center gap-4">
        <Skeleton className="h-10 w-10 rounded-full" />
        <Skeleton className="h-8 w-full" />
        <Skeleton className="h-8 w-full" />
        <Skeleton className="h-8 w-full" />
        <Skeleton className="h-8 w-full" />
        <Skeleton className="h-10 w-10 rounded-full" />
        <Skeleton className="h-8 w-full" />
        <Skeleton className="h-8 w-full" />
        <Skeleton className="h-8 w-full" />
        <Skeleton className="h-8 w-full" />
      </CardContent>
    </Card>
  );
}

export default Loading;

// <div className="flex flex-col space-y-3">
//   <Skeleton className="h-[125px] w-[250px] rounded-xl" />
//   <div className="space-y-2">
//     <Skeleton className="h-4 w-[250px]" />
//     <Skeleton className="h-4 w-[200px]" />
//   </div>
// </div>
