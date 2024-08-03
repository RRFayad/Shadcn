"use client";
import * as React from "react";

import { Input } from "./input";
import { cn } from "@/lib/utils";
import { EyeIcon, EyeOffIcon } from "lucide-react";

export interface PasswordInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const PasswordInput = React.forwardRef<HTMLInputElement, PasswordInputProps>(
  ({ className, type, ...props }, ref) => {
    const [passwordIsShown, setPasswordIsShown] = React.useState(false);

    const togglePasswordIsShown = () => {
      setPasswordIsShown((prevState) => !prevState);
    };

    return (
      <div className="relative">
        <Input
          {...props}
          type={passwordIsShown ? "text" : "password"}
          ref={ref}
          className={cn("pr-10", className)}
        />
        <span
          className="absolute right-1 top-[8px] cursor-pointer select-none"
          onClick={togglePasswordIsShown}
        >
          {" "}
          {/*select-none prevents selecting the text*/}
          {passwordIsShown ? <EyeIcon /> : <EyeOffIcon />}
        </span>
      </div>
    );
  },
);
PasswordInput.displayName = "PasswordInput";

export { PasswordInput };
