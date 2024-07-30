"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";

import { PersonStandingIcon } from "lucide-react";

function LoginPage() {
  return (
    <>
      <PersonStandingIcon size={50} />
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle>Login</CardTitle>
          <CardDescription>Login to your SupportMe account</CardDescription>
        </CardHeader>
        <CardContent>Login Form</CardContent>
        {/*CardFooter is already display:flex*/}
        <CardFooter className="justify-between">
          <small>Don't have an account?</small>
          <Button asChild variant={"outline"} size={"sm"}>
            <Link href="/sign-up">Sign Up</Link>
          </Button>
        </CardFooter>
      </Card>
    </>
  );
}

export default LoginPage;
