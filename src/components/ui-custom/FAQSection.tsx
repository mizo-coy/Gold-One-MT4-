"use client";

import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Search, HelpCircle } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  items: FAQItem[];
  title?: string;
  description?: string;
  className?: string;
}

export function FAQSection({ 
  items, 
  title = "Frequently Asked Questions",
  description = "Find answers to common questions about Gold One MT4",
  className = ""
}: FAQSectionProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [openItems, setOpenItems] = useState<string[]>([]);

  const filteredItems = items.filter(
    (item) =>
      item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className={className}>
      {/* Header */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-2 mb-4">
          <HelpCircle className="h-5 w-5 text-amber-500" />
          <span className="text-sm font-medium text-amber-600 dark:text-amber-400 uppercase tracking-wide">
            Got Questions?
          </span>
        </div>
        <h2 className="text-2xl md:text-3xl font-bold mb-4">{title}</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">{description}</p>
      </div>

      {/* Search */}
      <div className="max-w-md mx-auto mb-8">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search questions..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
      </div>

      {/* FAQ Accordion */}
      <Card className="border-amber-500/20">
        <Accordion
          type="multiple"
          value={openItems}
          onValueChange={setOpenItems}
          className="w-full"
        >
          {filteredItems.map((item, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="px-4">
              <AccordionTrigger className="text-left hover:text-amber-600 dark:hover:text-amber-400">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {filteredItems.length === 0 && (
          <div className="text-center py-8 text-muted-foreground">
            <HelpCircle className="h-12 w-12 mx-auto mb-4 opacity-50" />
            <p>No questions found matching &quot;{searchTerm}&quot;</p>
          </div>
        )}
      </Card>

      {/* Contact CTA */}
      <div className="text-center mt-8">
        <p className="text-sm text-muted-foreground mb-4">
          Still have questions? We&apos;re here to help!
        </p>
        <Button variant="outline" asChild>
          <a href="mailto:support@infinityalgoacademy.net">
            Contact Support
          </a>
        </Button>
      </div>
    </div>
  );
}
