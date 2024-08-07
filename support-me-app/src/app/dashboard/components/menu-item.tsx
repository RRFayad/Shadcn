"use client";

import { DrawerContext } from "@/components/ui/drawer";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useContext } from "react";

interface MenuItemProps {
  children: React.ReactNode;
  href: string;
}

function MenuItem({ children, href }: MenuItemProps) {
  const { onClose } = useContext(DrawerContext);
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <li>
      <Link
        className={`block rounded-md p-2 text-muted-foreground hover:bg-white hover:text-foreground dark:hover:bg-zinc-700 ${isActive && "bg-primary text-primary-foreground hover:bg-primary hover:text-foreground dark:hover:bg-primary"}`}
        href={href}
        onClick={onClose}
      >
        {children}
      </Link>
    </li>
  );
}

export default MenuItem;
