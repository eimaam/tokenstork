"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BiHomeAlt, BiBook, BiMap, BiInfoCircle } from "react-icons/bi";
import { BiSolidHome, BiSolidBook, BiSolidMap, BiSolidInfoCircle } from "react-icons/bi";
import { SlGraph } from "react-icons/sl";
import { BsInfo } from "react-icons/bs";

const navigation = [
  { name: "Tokens", href: "/", icon: SlGraph, activeIcon: BiSolidHome },
  { name: "Learn", href: "/learn", icon: BiBook, activeIcon: BiSolidBook },
  { name: "Roadmap", href: "/roadmap", icon: BiMap, activeIcon: BiSolidMap },
  { name: "About", href: "/about", icon: BsInfo, activeIcon: BiSolidInfoCircle },
];

export default function BottomNavbar() {
  const pathname = usePathname();

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-secondary backdrop-blur-lg border-t border-accent/10 mt-[100px]">
      <div className="flex justify-around items-center h-16">
        {navigation.map((item) => {
          const isActive = pathname === item.href;
          const Icon = isActive ? item.activeIcon : item.icon;
          return (
            <Link
              key={item.name}
              href={item.href}
              className={`flex !no-underline flex-col items-center justify-center w-full h-full text-xs ${isActive ? 'text-accent' : 'text-textcolor'}`}
            >
              <Icon className="h-5 w-5" />
              <span className="mt-1">{item.name}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}