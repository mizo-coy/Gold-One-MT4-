import { 
  ShieldCheck, 
  Lock, 
  CreditCard, 
  RefreshCw,
  Headphones,
  Award
} from "lucide-react";
import { Card } from "@/components/ui/card";

const badges = [
  {
    icon: ShieldCheck,
    title: "Secure Payment",
    description: "256-bit SSL encryption",
    color: "text-green-600",
    bgColor: "bg-green-50 dark:bg-green-950/50",
  },
  {
    icon: Lock,
    title: "Data Protected",
    description: "Your info is safe",
    color: "text-blue-600",
    bgColor: "bg-blue-50 dark:bg-blue-950/50",
  },
  {
    icon: CreditCard,
    title: "Multiple Payment",
    description: "Stripe & PayPal",
    color: "text-purple-600",
    bgColor: "bg-purple-50 dark:bg-purple-950/50",
  },
  {
    icon: RefreshCw,
    title: "30-Day Refund",
    description: "Money-back guarantee",
    color: "text-amber-600",
    bgColor: "bg-amber-50 dark:bg-amber-950/50",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Always here to help",
    color: "text-teal-600",
    bgColor: "bg-teal-50 dark:bg-teal-950/50",
  },
  {
    icon: Award,
    title: "Verified Product",
    description: "Trusted by 10,000+",
    color: "text-rose-600",
    bgColor: "bg-rose-50 dark:bg-rose-950/50",
  },
];

interface TrustBadgesProps {
  variant?: "full" | "compact" | "inline";
  className?: string;
}

export function TrustBadges({ variant = "full", className = "" }: TrustBadgesProps) {
  if (variant === "inline") {
    return (
      <div className={`flex flex-wrap items-center justify-center gap-4 ${className}`}>
        {badges.slice(0, 4).map((badge) => (
          <div key={badge.title} className="flex items-center gap-2">
            <badge.icon className={`h-4 w-4 ${badge.color}`} />
            <span className="text-sm text-muted-foreground">{badge.title}</span>
          </div>
        ))}
      </div>
    );
  }

  if (variant === "compact") {
    return (
      <div className={`flex flex-wrap items-center justify-center gap-3 ${className}`}>
        {badges.slice(0, 4).map((badge) => (
          <div
            key={badge.title}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-full ${badge.bgColor}`}
          >
            <badge.icon className={`h-4 w-4 ${badge.color}`} />
            <span className="text-xs font-medium">{badge.title}</span>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 ${className}`}>
      {badges.map((badge) => (
        <Card
          key={badge.title}
          className="p-4 text-center hover:shadow-md transition-shadow"
        >
          <div className={`w-12 h-12 mx-auto mb-3 rounded-full ${badge.bgColor} flex items-center justify-center`}>
            <badge.icon className={`h-6 w-6 ${badge.color}`} />
          </div>
          <h3 className="font-semibold text-sm">{badge.title}</h3>
          <p className="text-xs text-muted-foreground mt-1">{badge.description}</p>
        </Card>
      ))}
    </div>
  );
}
