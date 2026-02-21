"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Sun, Moon, Coins, TrendingUp, Download } from "lucide-react";
import { useTheme } from "next-themes";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Features", href: "#features" },
  { label: "Docs", href: "#docs" },
  { label: "Pricing", href: "#pricing" },
  { label: "Free Download", href: "#free-download" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  return (
    <header className="sticky top-0 z-50 w-full bg-gradient-to-r from-gray-950 via-black to-gray-950 border-b border-amber-500/20">
      {/* Gold Accent Line */}
      <div className="h-0.5 bg-gradient-to-r from-transparent via-amber-500 to-transparent" />
      
      <div className="container mx-auto px-4">
        <div className="flex h-18 items-center justify-between py-2">
          {/* Logo */}
          <Link href="#home" className="flex items-center gap-3 group">
            <div className="relative w-11 h-11 overflow-hidden rounded-xl bg-gradient-to-br from-amber-400 to-yellow-600 p-0.5 gold-glow">
              <div className="w-full h-full rounded-xl bg-gray-900 flex items-center justify-center">
                <Image
                  src="/gold-logo.png"
                  alt="Gold One MT4"
                  fill
                  className="object-cover p-1 transition-transform group-hover:scale-110"
                />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-gold-gradient">Gold One MT4</span>
              <span className="text-[10px] text-amber-500/70 -mt-0.5">Professional Trading Indicator</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-5 py-2.5 text-sm font-medium text-gray-300 hover:text-amber-400 transition-all duration-300 rounded-lg hover:bg-amber-500/10 relative group"
              >
                {item.label}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-amber-400 to-yellow-500 group-hover:w-3/4 transition-all duration-300" />
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3">
            {/* Theme Toggle */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="hidden sm:flex text-gray-400 hover:text-amber-400 hover:bg-amber-500/10"
            >
              <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>

            {/* CTA Button */}
            <Button
              asChild
              className="hidden sm:flex bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-black font-bold px-6 h-11 shadow-lg shadow-amber-500/25 hover:shadow-amber-500/40 transition-all duration-300"
            >
              <Link href="#checkout">
                <Coins className="mr-2 h-5 w-5" />
                Buy Now - $75
              </Link>
            </Button>

            {/* Mobile Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="lg:hidden">
                <Button variant="ghost" size="icon" className="text-gray-300 hover:text-amber-400 hover:bg-amber-500/10">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[320px] sm:w-[400px] bg-gray-950 border-l border-amber-500/20">
                <div className="flex flex-col gap-2 mt-8">
                  {/* Mobile Logo */}
                  <div className="flex items-center gap-3 mb-6 pb-4 border-b border-amber-500/20">
                    <div className="relative w-12 h-12 overflow-hidden rounded-xl bg-gradient-to-br from-amber-400 to-yellow-600 p-0.5">
                      <div className="w-full h-full rounded-xl bg-gray-900 flex items-center justify-center">
                        <Image
                          src="/gold-logo.png"
                          alt="Gold One MT4"
                          fill
                          className="object-cover p-1"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xl font-bold text-gold-gradient">Gold One MT4</span>
                      <span className="text-[10px] text-amber-500/70">Professional Trading Indicator</span>
                    </div>
                  </div>
                  
                  {/* Mobile Navigation */}
                  {navItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="px-4 py-3.5 text-base font-medium text-gray-300 hover:text-amber-400 transition-all duration-300 rounded-lg hover:bg-amber-500/10 flex items-center gap-3 group"
                    >
                      <TrendingUp className="h-4 w-4 text-amber-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                      {item.label}
                    </Link>
                  ))}
                  
                  <div className="border-t border-amber-500/20 pt-6 mt-4 space-y-3">
                    <Button
                      asChild
                      className="w-full bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-black font-bold py-6 shadow-lg shadow-amber-500/25"
                    >
                      <Link href="#checkout" onClick={() => setIsOpen(false)}>
                        <Coins className="mr-2 h-5 w-5" />
                        Buy Now - $75
                      </Link>
                    </Button>

                    <Button
                      asChild
                      variant="outline"
                      className="w-full py-5 border-amber-500/30 text-amber-400 hover:bg-amber-500/10"
                    >
                      <Link href="#free-download" onClick={() => setIsOpen(false)}>
                        <Download className="mr-2 h-5 w-5" />
                        Free Download
                      </Link>
                    </Button>
                  </div>
                  
                  <Button
                    variant="ghost"
                    className="w-full mt-4 text-gray-400 hover:text-amber-400 hover:bg-amber-500/10"
                    onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  >
                    {theme === "dark" ? (
                      <>
                        <Sun className="mr-2 h-5 w-5" />
                        Light Mode
                      </>
                    ) : (
                      <>
                        <Moon className="mr-2 h-5 w-5" />
                        Dark Mode
                      </>
                    )}
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
