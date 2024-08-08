"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Employee } from "@/lib/employees-data";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.

export const columns: ColumnDef<Employee>[] = [
  {
    accessorKey: "avatar",
    header: "",
    cell: ({ row }) => {
      const avatar = row.getValue("avatar") as string;
      const firstName = row.getValue("firstName") as string;
      const lastName = row.getValue("lastName") as string;

      return (
        <Avatar>
          {!!avatar && (
            <Image
              src={avatar}
              alt={`${firstName} ${lastName} avatar`}
              width={40}
              height={40}
            />
          )}
          <AvatarFallback className="uppercase">{`${firstName[0]}${lastName[0]}`}</AvatarFallback>
        </Avatar>
      );
    },
  },
  {
    accessorKey: "firstName",
    header: "First Name",
  },
  {
    accessorKey: "lastName",
    header: "Last Name",
  },
  {
    accessorKey: "teamName",
    header: "Team",
  },
  {
    accessorKey: "isTeamLeader",
    header: "",
    cell: ({ row }) => {
      const isTeamLeader: boolean = row.getValue("isTeamLeader");
      return isTeamLeader && <Badge variant={"default"}>Team Leader</Badge>;
    },
  },
];
