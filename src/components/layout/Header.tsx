"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Sun, Moon, Coins } from "lucide-react";
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
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="#home" className="flex items-center gap-2 group">
            <div className="relative w-10 h-10 overflow-hidden rounded-lg gold-glow">
              <Image
                src="/gold-logo.png"
                alt="Gold One MT4"
                fill
                className="object-cover transition-transform group-hover:scale-110"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold text-gold-gradient">Gold One</span>
              <span className="text-[10px] text-muted-foreground -mt-1">MT4 Indicator</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-md hover:bg-muted"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2">
            {/* Theme Toggle */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="hidden sm:flex"
            >
              <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>

            {/* CTA Button */}
            <Button
              asChild
              className="hidden sm:flex btn-gold-gradient font-semibold"
            >
              <Link href="#checkout">
                <Coins className="mr-2 h-4 w-4" />
                Buy Now - $75
              </Link>
            </Button>

            {/* Mobile Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="lg:hidden">
                <Button variant="ghost" size="icon">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <div className="flex flex-col gap-4 mt-8">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="relative w-10 h-10 overflow-hidden rounded-lg">
                      <Image
                        src="/gold-logo.png"
                        alt="Gold One MT4"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-lg font-bold text-gold-gradient">Gold One</span>
                      <span className="text-[10px] text-muted-foreground -mt-1">MT4 Indicator</span>
                    </div>
                  </div>
                  
                  {navItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="px-4 py-3 text-base font-medium text-muted-foreground hover:text-foreground transition-colors rounded-md hover:bg-muted"
                    >
                      {item.label}
                    </Link>
                  ))}
                  
                  <div className="border-t pt-4 mt-4">
                    <Button
                      asChild
                      className="w-full btn-gold-gradient font-semibold"
                    >
                      <Link href="#checkout" onClick={() => setIsOpen(false)}>
                        <Coins className="mr-2 h-4 w-4" />
                        Buy Now - $75
                      </Link>
                    </Button>
                  </div>
                  
                  <Button
                    variant="outline"
                    className="w-full mt-2"
                    onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  >
                    {theme === "dark" ? (
                      <>
                        <Sun className="mr-2 h-4 w-4" />
                        Light Mode
                      </>
                    ) : (
                      <>
                        <Moon className="mr-2 h-4 w-4" />
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
