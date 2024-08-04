import MenuItem from "./menu-item";
import MenuTitle from "./menu-title";

function MainMenu() {
  return (
    <div className="overflow-auto bg-muted p-4">
      <div className="border-b border-b-zinc-300 pb-4 dark:border-b-black">
        <MenuTitle />
      </div>
      <div className="flex flex-col py-4">
        <MenuItem href="/dashboard">My dashboard</MenuItem>
        <MenuItem href="/dashboard/teams">Teams</MenuItem>
        <MenuItem href="/dashboard/employees">Employees</MenuItem>
        <MenuItem href="/dashboard/account">Account</MenuItem>
        <MenuItem href="/dashboard/settings">Settings</MenuItem>
      </div>
    </div>
  );
}

export default MainMenu;
