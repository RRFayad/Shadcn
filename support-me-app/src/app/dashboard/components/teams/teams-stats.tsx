import Link from "next/link";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ListChecksIcon,
  PieChartIcon,
  StarIcon,
  UsersIcon,
} from "lucide-react";
import { teamLeaders } from "@/lib/teamLeaders";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Image from "next/image";
import TeamsDistributionChart from "./team-distribuition-chart";
import SupportTicketsResolved from "./support-tickets-resolved";

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
            <CardTitle className="flex items-center justify-between text-base">
              <span>Teams leaders</span>
              <StarIcon className="text-yellow-500" />
            </CardTitle>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-2">
            {teamLeaders.map((leader, index) => {
              return (
                <TooltipProvider key={index}>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Avatar>
                        {!!leader.avatar && (
                          <Image
                            src={leader.avatar}
                            alt={leader.firstName + " " + leader.lastName}
                          />
                        )}
                        <AvatarFallback>
                          {leader.firstName[0]}
                          {leader.lastName[0]}
                        </AvatarFallback>
                      </Avatar>
                    </TooltipTrigger>
                    <TooltipContent>
                      {leader.firstName + " " + leader.lastName}
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              );
            })}
          </CardContent>
        </Card>

        <Card className="flex flex-col">
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center justify-between text-base">
              <span>Teams distribuition</span>
              <PieChartIcon className="" />
            </CardTitle>
          </CardHeader>
          <CardContent className="pb-0">
            <TeamsDistributionChart />
          </CardContent>
        </Card>
      </div>

      <Card className="my-4">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-lg">
            <ListChecksIcon />
            Support Tickets Resolved
          </CardTitle>
        </CardHeader>
        <CardContent className="pl-0">
          <SupportTicketsResolved />
        </CardContent>
      </Card>
    </>
  );
}

export default TeamsStats;
