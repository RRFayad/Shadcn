import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

function dashboardPage() {
  return (
    <Tabs defaultValue="employees">
      <TabsList>
        <TabsTrigger value="employees">Employees Stats</TabsTrigger>
        <TabsTrigger value="teams">Teams Stats</TabsTrigger>
      </TabsList>
      <TabsContent value="employees">Content for employyes here</TabsContent>
      <TabsContent value="teams">Content for teams here</TabsContent>
    </Tabs>
  );
}

export default dashboardPage;
