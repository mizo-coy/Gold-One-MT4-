"use client";

import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";

interface CountdownTimerProps {
  targetDate?: Date;
  className?: string;
  variant?: "default" | "compact" | "banner";
}

export function CountdownTimer({ 
  targetDate,
  className = "",
  variant = "default"
}: CountdownTimerProps) {
  // Set default target to 24 hours from now if not provided
  const defaultTarget = new Date();
  defaultTarget.setHours(defaultTarget.getHours() + 24);
  
  const target = targetDate || defaultTarget;
  
  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = target.getTime() - new Date().getTime();
      
      if (difference > 0) {
        setTimeLeft({
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [target]);

  const formatNumber = (num: number) => num.toString().padStart(2, "0");

  if (variant === "banner") {
    return (
      <div className={`bg-gradient-to-r from-amber-500/10 via-yellow-500/10 to-amber-500/10 border border-amber-500/20 rounded-lg px-4 py-2 ${className}`}>
        <div className="flex items-center justify-center gap-2 text-sm">
          <span className="text-amber-700 dark:text-amber-400 font-medium">⏰ Limited Offer Ends In:</span>
          <span className="font-mono font-bold text-amber-600 dark:text-amber-300">
            {formatNumber(timeLeft.hours)}:{formatNumber(timeLeft.minutes)}:{formatNumber(timeLeft.seconds)}
          </span>
        </div>
      </div>
    );
  }

  if (variant === "compact") {
    return (
      <span className={`font-mono font-bold text-amber-600 dark:text-amber-300 ${className}`}>
        {formatNumber(timeLeft.hours)}:{formatNumber(timeLeft.minutes)}:{formatNumber(timeLeft.seconds)}
      </span>
    );
  }

  return (
    <div className={`flex items-center justify-center gap-3 ${className}`}>
      {[
        { value: timeLeft.hours, label: "Hours" },
        { value: timeLeft.minutes, label: "Min" },
        { value: timeLeft.seconds, label: "Sec" },
      ].map((item, index) => (
        <div key={item.label} className="flex items-center gap-3">
          <Card className="p-3 min-w-[60px] text-center bg-gradient-to-b from-amber-50 to-yellow-50 dark:from-amber-950/50 dark:to-yellow-950/50 border-amber-500/30">
            <div className="text-2xl font-bold text-amber-600 dark:text-amber-400 font-mono">
              {formatNumber(item.value)}
            </div>
            <div className="text-xs text-muted-foreground">{item.label}</div>
          </Card>
          {index < 2 && (
            <span className="text-2xl font-bold text-amber-500 animate-pulse">:</span>
          )}
        </div>
      ))}
    </div>
  );
}
