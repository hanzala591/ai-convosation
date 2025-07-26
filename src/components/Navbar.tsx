import { LogOut } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function Navbar() {
  const navLinks = [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Learning Companions",
      href: "/learning-companions",
    },
    {
      label: "My Journey",
      href: "/my-journey",
    },
  ];
  return (
    <header className="w-full shadow">
      <div className="flex justify-between items-center p-5  container mx-auto ">
        <div className="font-extrabold">AI CONVOSATION</div>
        <div className="flex gap-4">
          <div className="gap-4 hidden md:flex">
            {navLinks.map((value, index) => (
              <Link href={value.href} key={index} className="font-semibold">
                {value.label}
              </Link>
            ))}
          </div>
          <div className="size-7 rounded-full bg-primary">H</div>
          <LogOut className="text-primary" />
        </div>
      </div>
    </header>
  );
}
