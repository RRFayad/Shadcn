import Link from "next/link";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ListChecksIcon, UsersIcon } from "lucide-react";

function TeamsStats() {
  return (
    <>
      <div className="grid gap-4 lg:grid-cols-3">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base">Total teams</CardTitle>
          </CardHeader>
          <CardContent className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <UsersIcon />
              <div className="text-5xl font-bold">8</div>
            </div>
            <div>
              <Button asChild size={"xs"}>
                <Link href={"/dashboard/teams"}>View All</Link>
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base">Teams leaders</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex gap-2">aa</div>
          </CardContent>
        </Card>

        <Card className="flex flex-col">
          <CardHeader className="pb-2">
            <CardTitle className="text-base">Team distribuition</CardTitle>
          </CardHeader>
          <CardContent></CardContent>
        </Card>
      </div>
      <Card className="my-4">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-lg">
            <ListChecksIcon />
            Support Tickets Resolved
          </CardTitle>
        </CardHeader>
        <CardContent className="pl-0">line graph here</CardContent>
      </Card>
    </>
  );
}

export default TeamsStats;
