"use client";

import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Check, Zap, Gift } from "lucide-react";

interface OrderBumpProps {
  checked: boolean;
  onCheckedChange: (checked: boolean) => void;
  className?: string;
}

export function OrderBump({ checked, onCheckedChange, className = "" }: OrderBumpProps) {
  return (
    <Card className={`relative overflow-hidden border-2 ${checked ? 'border-amber-500 bg-amber-50/50 dark:bg-amber-950/20' : 'border-dashed border-amber-500/50 hover:border-amber-500'} transition-all ${className}`}>
      <div className="p-4">
        <div className="flex items-start gap-4">
          <Checkbox
            id="order-bump"
            checked={checked}
            onCheckedChange={(val) => onCheckedChange(!!val)}
            className="mt-1 data-[state=checked]:bg-amber-500 data-[state=checked]:border-amber-500"
          />
          <div className="flex-1">
            <Label
              htmlFor="order-bump"
              className="cursor-pointer"
            >
              <div className="flex items-center gap-2 mb-2">
                <Gift className="h-5 w-5 text-amber-500" />
                <span className="font-semibold">Add Premium Trading Signals Package</span>
                <span className="text-xs px-2 py-0.5 rounded border border-green-600 text-green-600">
                  SAVE $50
                </span>
              </div>
              
              <p className="text-sm text-muted-foreground mb-3">
                Get <strong>30 days of premium trading signals</strong> delivered directly to your Telegram! 
                Our expert analysts will send you 2-3 high-probability gold trades daily with exact entry, 
                stop-loss, and take-profit levels.
              </p>

              <div className="flex flex-wrap gap-2 mb-3">
                {[
                  "Daily Gold Signals",
                  "Telegram Delivery",
                  "Expert Analysis",
                  "Support & Guidance",
                ].map((feature) => (
                  <span
                    key={feature}
                    className="inline-flex items-center gap-1 text-xs bg-muted px-2 py-1 rounded"
                  >
                    <Check className="h-3 w-3 text-green-600" />
                    {feature}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-2">
                <span className="text-sm line-through text-muted-foreground">$99</span>
                <span className="text-lg font-bold text-green-600">+$49</span>
                <Zap className="h-4 w-4 text-amber-500 animate-pulse" />
              </div>
            </Label>
          </div>
        </div>
      </div>
    </Card>
  );
}
