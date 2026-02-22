import Link from "next/link";
import Image from "next/image";
import { 
  Twitter, 
  Youtube, 
  MessageCircle, 
  Mail,
  ShieldCheck,
  CreditCard,
  Send,
  MapPin,
  Phone
} from "lucide-react";

const footerLinks = {
  product: [
    { label: "Features", href: "#features" },
    { label: "Documentation", href: "#docs" },
    { label: "Pricing", href: "#pricing" },
    { label: "Free Download", href: "#free-download" },
    { label: "FAQ", href: "#faq" },
  ],
  company: [
    { label: "About Us", href: "https://infinityalgoacademy.net" },
    { label: "Blog", href: "https://infinityalgoacademy.net" },
    { label: "Contact", href: "mailto:support@infinityalgoacademy.net" },
    { label: "Support", href: "mailto:support@infinityalgoacademy.net" },
  ],
  legal: [
    { label: "Terms of Service", href: "#" },
    { label: "Privacy Policy", href: "#" },
    { label: "Refund Policy", href: "#" },
    { label: "License Agreement", href: "#" },
  ],
};

const socialLinks = [
  { icon: Twitter, href: "https://twitter.com/infinityalgo", label: "Twitter" },
  { icon: Youtube, href: "#", label: "YouTube" },
  { icon: MessageCircle, href: "#", label: "Telegram" },
  { icon: Send, href: "#", label: "WhatsApp" },
];

export function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-950 via-black to-black border-t border-amber-500/20">
      {/* Gold Accent Line */}
      <div className="h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent" />
      
      <div className="container mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link href="#home" className="flex items-center gap-3 mb-6 group">
              <div className="relative w-12 h-12 overflow-hidden rounded-xl bg-gradient-to-br from-amber-400 to-yellow-600 p-0.5 gold-glow">
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
                <span className="text-xs text-amber-500/70">Professional Trading Indicator</span>
              </div>
            </Link>
            
            <p className="text-gray-400 mb-6 max-w-sm leading-relaxed">
              Professional MT4 indicator for gold trading. Get accurate signals and maximize your 
              trading profits with <span className="text-amber-400">Gold One MT4</span> by InfinityAlgo Academy.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-3 text-gray-400 hover:text-amber-400 transition-colors">
                <Mail className="h-4 w-4 text-amber-500" />
                <a href="mailto:support@infinityalgoacademy.net" className="text-sm">
                  support@infinityalgoacademy.net
                </a>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <MapPin className="h-4 w-4 text-amber-500" />
                <span className="text-sm">Worldwide Trading Community</span>
              </div>
            </div>
            
            {/* Social Links */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 rounded-lg bg-gray-800/50 border border-amber-500/20 flex items-center justify-center text-gray-400 hover:text-amber-400 hover:border-amber-500/50 hover:bg-amber-500/10 transition-all duration-300"
                  aria-label={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <social.icon className="h-5 w-5" />
                </Link>
              ))}
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="font-semibold text-white mb-5 flex items-center gap-2">
              <span className="w-8 h-0.5 bg-gradient-to-r from-amber-500 to-transparent" />
              Product
            </h3>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-amber-400 transition-colors text-sm flex items-center gap-2 group"
                  >
                    <span className="w-0 h-0.5 bg-amber-500 group-hover:w-3 transition-all duration-300" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-semibold text-white mb-5 flex items-center gap-2">
              <span className="w-8 h-0.5 bg-gradient-to-r from-amber-500 to-transparent" />
              Company
            </h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-amber-400 transition-colors text-sm flex items-center gap-2 group"
                    target={link.href.startsWith("http") || link.href.startsWith("mailto") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  >
                    <span className="w-0 h-0.5 bg-amber-500 group-hover:w-3 transition-all duration-300" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="font-semibold text-white mb-5 flex items-center gap-2">
              <span className="w-8 h-0.5 bg-gradient-to-r from-amber-500 to-transparent" />
              Legal
            </h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-amber-400 transition-colors text-sm flex items-center gap-2 group"
                  >
                    <span className="w-0 h-0.5 bg-amber-500 group-hover:w-3 transition-all duration-300" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="my-10 h-px bg-gradient-to-r from-transparent via-amber-500/30 to-transparent" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Copyright */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-400 to-yellow-600 flex items-center justify-center">
              <span className="text-black font-bold text-sm">∞</span>
            </div>
            <div>
              <p className="text-white font-medium">InfinityAlgo Academy</p>
              <p className="text-gray-500 text-xs">© 2025 All rights reserved.</p>
            </div>
          </div>

          {/* Payment Methods */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <div className="flex items-center gap-2 px-4 py-2 bg-gray-800/50 rounded-lg border border-amber-500/20">
              <ShieldCheck className="h-4 w-4 text-green-500" />
              <span className="text-gray-300 text-sm">SSL Secured</span>
            </div>
            
            {/* Payment Icons */}
            <div className="flex items-center gap-2">
              <div className="px-4 py-2 bg-gradient-to-r from-purple-600 to-purple-700 rounded-lg text-white text-xs font-semibold flex items-center gap-2">
                <CreditCard className="h-4 w-4" />
                Stripe
              </div>
              <div className="px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg text-white text-xs font-semibold">
                PayPal
              </div>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-10 pt-6 border-t border-gray-800">
          <p className="text-gray-500 text-xs text-center max-w-3xl mx-auto leading-relaxed">
            <span className="text-amber-500 font-medium">Disclaimer:</span> Trading forex carries a high level of risk and may not be suitable for all investors. 
            Past performance is not indicative of future results. The high degree of leverage can work against you as well as for you. 
            Before deciding to trade forex, you should carefully consider your investment objectives, level of experience, and risk appetite.
          </p>
        </div>
      </div>
      
      {/* Bottom Gold Accent */}
      <div className="h-1 bg-gradient-to-r from-amber-600 via-amber-400 to-amber-600" />
    </footer>
  );
}
