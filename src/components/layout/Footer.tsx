import Link from "next/link";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import { 
  Twitter, 
  Youtube, 
  MessageCircle, 
  Mail,
  ShieldCheck,
  CreditCard
} from "lucide-react";

const footerLinks = {
  product: [
    { label: "Features", href: "#features" },
    { label: "Documentation", href: "#docs" },
    { label: "Pricing", href: "#pricing" },
    { label: "Free Download", href: "#free-download" },
  ],
  company: [
    { label: "About Us", href: "https://infinityalgoacademy.net" },
    { label: "Blog", href: "https://infinityalgoacademy.net" },
    { label: "Contact", href: "mailto:support@infinityalgoacademy.net" },
  ],
  legal: [
    { label: "Terms of Service", href: "#" },
    { label: "Privacy Policy", href: "#" },
    { label: "Refund Policy", href: "#" },
  ],
};

const socialLinks = [
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Youtube, href: "#", label: "YouTube" },
  { icon: MessageCircle, href: "#", label: "Telegram" },
];

export function Footer() {
  return (
    <footer className="border-t bg-muted/30">
      <div className="container mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link href="#home" className="flex items-center gap-2 mb-4">
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
            </Link>
            <p className="text-sm text-muted-foreground mb-4 max-w-xs">
              Professional MT4 indicator for gold trading. Get accurate signals and maximize your trading profits with Gold One MT4 by InfinityAlgo Academy.
            </p>
            
            {/* Social Links */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  className="w-9 h-9 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-primary/10 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="h-4 w-4" />
                </Link>
              ))}
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-2">
              {footerLinks.product.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Separator className="my-8" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>© 2025 InfinityAlgo Academy. All rights reserved.</span>
          </div>

          {/* Payment Methods */}
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <CreditCard className="h-4 w-4" />
              <span>Secure Payment</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <ShieldCheck className="h-4 w-4 text-green-600" />
              <span>SSL Secured</span>
            </div>
            
            {/* Payment Icons */}
            <div className="flex items-center gap-2">
              <div className="px-2 py-1 bg-muted rounded text-xs font-medium">Stripe</div>
              <div className="px-2 py-1 bg-muted rounded text-xs font-medium">PayPal</div>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-8 pt-6 border-t border-border/50">
          <p className="text-xs text-muted-foreground text-center max-w-3xl mx-auto">
            <strong>Disclaimer:</strong> Trading forex carries a high level of risk and may not be suitable for all investors. 
            Past performance is not indicative of future results. The high degree of leverage can work against you as well as for you. 
            Before deciding to trade forex, you should carefully consider your investment objectives, level of experience, and risk appetite.
          </p>
        </div>
      </div>
    </footer>
  );
}
