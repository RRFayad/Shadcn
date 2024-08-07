"use client";

import React, { useState } from "react";
import MainMenu from "./components/main-menu";
import MenuTitle from "./components/menu-title";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import { MenuIcon } from "lucide-react";
import { useMediaQuery } from "@/hooks/use-media-query";

function dashboardLayout({ children }: { children: React.ReactNode }) {
  const isDesktop = useMediaQuery("(min-width:768px)");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="h-screen md:grid md:grid-cols-[250px_1fr]">
      {/*_is space in tailwind and 1fr fill the remaining space in grid*/}
      <MainMenu className="hidden md:flex" />
      {!isDesktop && (
        <div className="sticky left-0 top-0 flex justify-between bg-background p-4 md:hidden">
          <MenuTitle />
          <Drawer
            direction="right"
            open={mobileMenuOpen}
            onOpenChange={(open) => setMobileMenuOpen(open)}
            onClose={() => setMobileMenuOpen(false)}
          >
            <DrawerTrigger>
              <MenuIcon />
            </DrawerTrigger>
            <DrawerContent>
              <MainMenu />
            </DrawerContent>
          </Drawer>
        </div>
      )}
      <div className="overflow-auto px-4 py-2">
        <h1 className="pb-4">Welcome Back, Renan!</h1>
        {children}
      </div>
    </div>
  );
}

export default dashboardLayout;
