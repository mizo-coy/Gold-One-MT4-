"use client";

import { useState, useEffect, useCallback } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Ahmed Hassan",
    role: "Professional Trader",
    location: "Dubai, UAE",
    avatar: "AH",
    rating: 5,
    title: "Game Changer for Gold Trading",
    content: "I've been trading gold for 8 years and Gold One MT4 has completely transformed my approach. The signals are incredibly accurate, especially during volatile market conditions. My win rate improved from 55% to 78% in just 3 months.",
    profit: "+$12,450",
    timeframe: "3 months",
  },
  {
    id: 2,
    name: "Sarah Williams",
    role: "Forex Analyst",
    location: "London, UK",
    avatar: "SW",
    rating: 5,
    title: "Worth Every Penny",
    content: "As a professional analyst, I was skeptical at first. But after testing Gold One on demo for 2 weeks, I went live. The accuracy is remarkable - I've consistently hit my targets with minimal drawdown. Best investment I've made in my trading career.",
    profit: "+$8,200",
    timeframe: "2 months",
  },
  {
    id: 3,
    name: "Mohammed Al-Rashid",
    role: "Part-time Trader",
    location: "Riyadh, Saudi Arabia",
    avatar: "MA",
    rating: 5,
    title: "Perfect for Busy Professionals",
    content: "I have a full-time job and can only trade a few hours daily. Gold One's clear entry and exit signals make it perfect for my schedule. I set my trades and let the indicator do the work. Started with $500, now at $2,800 in 4 months.",
    profit: "+$2,300",
    timeframe: "4 months",
  },
  {
    id: 4,
    name: "Jennifer Chen",
    role: "Day Trader",
    location: "Singapore",
    avatar: "JC",
    rating: 5,
    title: "Exceptional Support & Accuracy",
    content: "The indicator itself is amazing, but what really impressed me was the support team. They helped me understand the optimal settings for Asian trading hours. My accuracy improved significantly after their guidance.",
    profit: "+$15,800",
    timeframe: "5 months",
  },
  {
    id: 5,
    name: "Omar Farouk",
    role: "Trading Coach",
    location: "Cairo, Egypt",
    avatar: "OF",
    rating: 5,
    title: "Recommended to All My Students",
    content: "I teach trading to beginners, and I recommend Gold One MT4 to all my students. It's intuitive, reliable, and helps new traders understand market dynamics. My students using it show 3x better results than those who don't.",
    profit: "+$6,500",
    timeframe: "2 months",
  },
  {
    id: 6,
    name: "David Thompson",
    role: "Investment Manager",
    location: "New York, USA",
    avatar: "DT",
    rating: 5,
    title: "Institutional-Grade Quality",
    content: "I manage portfolios for high-net-worth clients and was looking for a reliable gold indicator. Gold One exceeded my expectations. The risk management features alone are worth the investment. Consistent returns with minimal false signals.",
    profit: "+$45,000",
    timeframe: "6 months",
  },
];

export function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, nextSlide]);

  return (
    <div className="relative">
      {/* Main Carousel */}
      <div 
        className="overflow-hidden"
        onMouseEnter={() => setIsAutoPlaying(false)}
        onMouseLeave={() => setIsAutoPlaying(true)}
      >
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="w-full flex-shrink-0 px-2">
              <Card className="border-amber-500/20 hover:border-amber-500/40 transition-colors">
                <CardContent className="p-6">
                  {/* Header */}
                  <div className="flex items-start gap-4 mb-4">
                    <Avatar className="w-14 h-14 border-2 border-amber-500/30">
                      <AvatarFallback className="bg-gradient-to-br from-amber-100 to-yellow-100 dark:from-amber-900 dark:to-yellow-900 text-amber-700 dark:text-amber-300 font-semibold">
                        {testimonial.avatar}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <h4 className="font-semibold">{testimonial.name}</h4>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      <p className="text-xs text-muted-foreground">{testimonial.location}</p>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center gap-1 mb-1">
                        {Array.from({ length: testimonial.rating }).map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Quote Icon */}
                  <Quote className="h-8 w-8 text-amber-500/20 mb-2" />

                  {/* Title */}
                  <h5 className="font-semibold text-amber-600 dark:text-amber-400 mb-2">
                    &quot;{testimonial.title}&quot;
                  </h5>

                  {/* Content */}
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                    {testimonial.content}
                  </p>

                  {/* Stats */}
                  <div className="flex items-center gap-4 pt-4 border-t">
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-muted-foreground">Profit:</span>
                      <span className="font-bold text-green-600">{testimonial.profit}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-muted-foreground">Period:</span>
                      <span className="font-medium">{testimonial.timeframe}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <Button
        variant="outline"
        size="icon"
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 bg-background/80 backdrop-blur hidden md:flex"
        onClick={prevSlide}
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>
      <Button
        variant="outline"
        size="icon"
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 bg-background/80 backdrop-blur hidden md:flex"
        onClick={nextSlide}
      >
        <ChevronRight className="h-4 w-4" />
      </Button>

      {/* Dots Indicator */}
      <div className="flex justify-center gap-2 mt-6">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentIndex
                ? "bg-amber-500 w-8"
                : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
