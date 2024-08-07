import React from "react";
import MainMenu from "./components/main-menu";
import MenuTitle from "./components/menu-title";

function dashboardLayout({ children }: { children: React.ReactNode }) {
  {
    /*_is space in tailwind and 1fr fill the remaining space in grid*/
  }
  return (
    <div className="grid h-screen md:grid-cols-[250px_1fr]">
      <MainMenu className="hidden md:flex" />
      <div className="sticky left-0 top-0 block bg-background p-4 md:hidden">
        <MenuTitle />
      </div>
      <div className="overflow-auto px-4 py-2">
        <h1 className="pb-4">Welcome Back, Renan!</h1>
        {children}
      </div>
    </div>
  );
}

export default dashboardLayout;
