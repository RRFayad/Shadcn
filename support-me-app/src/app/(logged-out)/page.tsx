import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PersonStandingIcon } from "lucide-react";

function LandingPage() {
  return (
    <>
      <h1 className="flex items-center gap-2">
        <PersonStandingIcon size={50} className="text-pink-500" />
        Support Me
      </h1>
      <p>The best dashboard to manage customer support</p>
      <div className="flex items-center justify-center gap-2">
        <Button asChild>
          <Link href="/login">Log In</Link>
        </Button>
        <small>or</small>
        <Button variant={"outline"} asChild>
          <Link href={"/sign-up"}>Sign Up</Link>
        </Button>
      </div>
    </>
  );
}

export default LandingPage;
