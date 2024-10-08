import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import MenuItem from "./menu-item";
import MenuTitle from "./menu-title";
import Link from "next/link";
import LightDarkToggle from "@/components/ui/light-dark-toggle";

function MainMenu({ className }: { className?: string }) {
  return (
    <nav className={`flex flex-col overflow-auto p-4 md:bg-muted ${className}`}>
      <header className="hidden border-b border-b-zinc-300 pb-4 dark:border-b-black md:block">
        <MenuTitle />
      </header>
      <ul className="flex grow flex-col py-4">
        <MenuItem href="/dashboard">My dashboard</MenuItem>
        <MenuItem href="/dashboard/teams">Teams</MenuItem>
        <MenuItem href="/dashboard/employees">Employees</MenuItem>
        <MenuItem href="/dashboard/account">Account</MenuItem>
        <MenuItem href="/dashboard/settings">Settings</MenuItem>
      </ul>
      <footer className="flex items-center gap-2">
        <Avatar>
          <AvatarFallback className="bg-pink-300 dark:bg-primary">
            RF
          </AvatarFallback>
        </Avatar>
        <Link href={"/"} className="hover:underline">
          Logout
        </Link>
        <LightDarkToggle className="ml-auto" />
      </footer>
    </nav>
  );
}

export default MainMenu;
