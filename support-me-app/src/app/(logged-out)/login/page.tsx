"use client";
import Link from "next/link";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import { Form } from "@/components/ui/form";
import { PersonStandingIcon } from "lucide-react";

const formSchema = z.object({
  email: z.string().email(),
  password: z.string(), // Here we are not really validating because we will validate later in the signup
});

function LoginPage() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  }); // It's for zod to infer the type of our Schema to the form data

  const submitHandler = () => {
    console.log("Login Validated");
  };

  return (
    <>
      <PersonStandingIcon size={50} />
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle>Login</CardTitle>
          <CardDescription>Login to your SupportMe account</CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(submitHandler)}></form>
          </Form>
        </CardContent>
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
