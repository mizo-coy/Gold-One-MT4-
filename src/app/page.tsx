"use client";

import { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { Progress } from "@/components/ui/progress";
import { CountdownTimer } from "@/components/ui-custom/CountdownTimer";
import { TrustBadges } from "@/components/ui-custom/TrustBadges";
import { TestimonialsCarousel } from "@/components/ui-custom/TestimonialsCarousel";
import { OrderBump } from "@/components/ui-custom/OrderBump";
import { FAQSection } from "@/components/ui-custom/FAQSection";
import {
  ArrowRight,
  Play,
  Check,
  X,
  Star,
  TrendingUp,
  Shield,
  Zap,
  Target,
  BarChart3,
  Clock,
  Users,
  Award,
  Download,
  Coins,
  ChevronRight,
  AlertCircle,
  CheckCircle2,
  Info,
  BookOpen,
  Video,
  FileText,
  HelpCircle,
  Settings,
  Lightbulb,
  Rocket,
  RefreshCw,
  Mail,
  Globe,
  Lock,
  Sparkles,
} from "lucide-react";

// Statistics Data
const stats = [
  { value: "10,000+", label: "Active Traders", icon: Users },
  { value: "87%", label: "Success Rate", icon: Target },
  { value: "4.9/5", label: "User Rating", icon: Star },
  { value: "50+", label: "Countries", icon: Globe },
];

// Features Data
const features = [
  {
    icon: Target,
    title: "Precision Entry Signals",
    description: "Advanced algorithm identifies optimal entry points with 87% accuracy. Get clear buy/sell signals with exact price levels.",
    highlight: "87% Accuracy",
  },
  {
    icon: Shield,
    title: "Smart Risk Management",
    description: "Built-in stop-loss and take-profit recommendations. Protect your capital with calculated risk-reward ratios.",
    highlight: "Risk Protection",
  },
  {
    icon: TrendingUp,
    title: "Trend Analysis",
    description: "Multi-timeframe trend detection ensures you always trade in the right direction. Never fight against the market again.",
    highlight: "Multi-TF Analysis",
  },
  {
    icon: Zap,
    title: "Instant Alerts",
    description: "Real-time notifications on your MT4 platform. Never miss a trading opportunity with audio and visual alerts.",
    highlight: "Real-time Alerts",
  },
  {
    icon: BarChart3,
    title: "Market Scanner",
    description: "Automatically scans gold market conditions and identifies high-probability setups throughout the day.",
    highlight: "Auto Scanning",
  },
  {
    icon: Clock,
    title: "Session Optimization",
    description: "Optimized for London and New York sessions. Know exactly when to trade for maximum profitability.",
    highlight: "Best Sessions",
  },
];

// Comparison Data
const comparisonData = [
  { feature: "Entry Signals", free: true, pro: true },
  { feature: "Take Profit Levels", free: "Basic", pro: "Advanced + 3 Levels" },
  { feature: "Stop Loss", free: "Fixed", pro: "Dynamic + Trailing" },
  { feature: "Alert System", free: "Visual Only", pro: "Visual + Audio + Push" },
  { feature: "Multi-Timeframe", free: false, pro: true },
  { feature: "Risk Calculator", free: false, pro: true },
  { feature: "Market Scanner", free: false, pro: true },
  { feature: "Trend Filter", free: false, pro: true },
  { feature: "Support & Updates", free: "Community", pro: "Priority 24/7" },
  { feature: "Strategy Guide", free: false, pro: true },
  { feature: "Video Tutorials", free: false, pro: true },
  { feature: "Telegram Signals", free: false, pro: "Optional Add-on" },
];

// Documentation Tabs
const docsTabs = [
  {
    id: "installation",
    label: "Installation",
    icon: Download,
    content: [
      {
        title: "Step 1: Download the Indicator",
        steps: [
          "After purchase, you'll receive a download link via email",
          "Download the .ex4 file to your computer",
          "Make sure you have MT4 installed on your device",
        ],
      },
      {
        title: "Step 2: Open MT4 Data Folder",
        steps: [
          "Open MetaTrader 4 platform",
          "Click 'File' in the top menu",
          "Select 'Open Data Folder'",
          "Navigate to 'MQL4' → 'Indicators' folder",
        ],
      },
      {
        title: "Step 3: Install the Indicator",
        steps: [
          "Copy the downloaded .ex4 file",
          "Paste it into the 'Indicators' folder",
          "Close and restart MT4",
          "The indicator will appear in Navigator panel",
        ],
      },
      {
        title: "Step 4: Apply to Chart",
        steps: [
          "Open XAUUSD (Gold) chart in MT4",
          "Find 'Gold One MT4' in Navigator → Indicators",
          "Drag and drop onto your chart",
          "Configure settings (see Settings tab)",
        ],
      },
    ],
  },
  {
    id: "usage",
    label: "How to Use",
    icon: Play,
    content: [
      {
        title: "Understanding Signals",
        steps: [
          "GREEN Arrow = BUY Signal - Enter long position",
          "RED Arrow = SELL Signal - Enter short position",
          "Dotted lines show suggested Stop Loss & Take Profit levels",
          "Wait for candle close to confirm signal validity",
        ],
      },
      {
        title: "Best Trading Times",
        steps: [
          "London Session: 08:00 - 17:00 GMT",
          "New York Session: 13:00 - 22:00 GMT",
          "Avoid trading during major news releases",
          "Best results during market overlap (13:00-17:00 GMT)",
        ],
      },
      {
        title: "Entry Rules",
        steps: [
          "Wait for signal arrow to appear",
          "Confirm candle has closed with signal",
          "Check trend filter (if available in Pro version)",
          "Enter at the open of the next candle",
        ],
      },
      {
        title: "Exit Rules",
        steps: [
          "Take Profit: Use suggested TP levels or trail manually",
          "Stop Loss: Place at suggested SL level",
          "Never move SL against your position",
          "Consider partial profits at TP1",
        ],
      },
    ],
  },
  {
    id: "settings",
    label: "Settings",
    icon: Settings,
    content: [
      {
        title: "Basic Settings",
        steps: [
          "Signal_Period: Controls signal sensitivity (default: 14)",
          "Risk_Percent: % of account for position sizing (default: 2%)",
          "SL_Pips: Default stop loss in pips (default: 50)",
          "TP1_Pips, TP2_Pips, TP3_Pips: Take profit levels",
        ],
      },
      {
        title: "Visual Settings",
        steps: [
          "Arrow_Size: Size of signal arrows (default: 2)",
          "Show_SL_TP: Display SL/TP lines (default: true)",
          "Alert_On: Enable/disable alerts (default: true)",
          "Email_Alert: Send email notifications (default: false)",
        ],
      },
      {
        title: "Advanced Settings (Pro Only)",
        steps: [
          "Multi_TF_Filter: Enable trend filter across timeframes",
          "Trailing_Stop: Enable trailing stop feature",
          "Session_Filter: Only show signals during optimal sessions",
          "Risk_Reward_Min: Minimum R:R ratio to show signal",
        ],
      },
      {
        title: "Recommended Presets",
        steps: [
          "Conservative: Signal_Period=20, Risk=1%, SL=60 pips",
          "Moderate: Signal_Period=14, Risk=2%, SL=50 pips (default)",
          "Aggressive: Signal_Period=10, Risk=3%, SL=40 pips",
          "Scalping: Signal_Period=8, Risk=1%, SL=20 pips",
        ],
      },
    ],
  },
  {
    id: "strategies",
    label: "Strategies",
    icon: Lightbulb,
    content: [
      {
        title: "Strategy 1: Trend Following",
        steps: [
          "Wait for signal in direction of daily trend",
          "Use H4 chart to determine overall direction",
          "Enter on H1 or M15 signals that align with H4 trend",
          "Target 1:2 or 1:3 risk-reward ratio",
        ],
      },
      {
        title: "Strategy 2: Session Breakout",
        steps: [
          "Wait for London or NY session open",
          "Look for first signal of the session",
          "These often capture the main move of the day",
          "Use wider stop loss due to volatility",
        ],
      },
      {
        title: "Strategy 3: Multi-Level Take Profit",
        steps: [
          "Enter full position at signal",
          "Close 50% at TP1",
          "Move SL to breakeven",
          "Trail remaining position to TP2 and TP3",
        ],
      },
      {
        title: "Strategy 4: Risk Management",
        steps: [
          "Never risk more than 2% per trade",
          "Maximum 3 open trades at once",
          "Daily loss limit: 6% of account",
          "Stop trading after 3 consecutive losses",
        ],
      },
    ],
  },
  {
    id: "faq",
    label: "FAQ",
    icon: HelpCircle,
    content: [
      {
        title: "Common Questions",
        steps: [
          "Q: What timeframe works best? A: M15-H1 for day trading, H4-D1 for swing trading",
          "Q: Can I use it on other pairs? A: Optimized for XAUUSD, may work on other metals",
          "Q: How many signals per day? A: Average 3-5 high-quality signals on M15",
          "Q: Does it repaint? A: No, signals are confirmed on candle close",
        ],
      },
    ],
  },
];

// FAQ Data
const faqItems = [
  {
    question: "What is Gold One MT4 and how does it work?",
    answer: "Gold One MT4 is a professional technical indicator designed specifically for trading gold (XAUUSD) on the MetaTrader 4 platform. It uses advanced algorithms combining multiple technical indicators, price action analysis, and market structure to identify high-probability trading opportunities. The indicator provides clear buy/sell signals with suggested entry points, stop-loss, and take-profit levels.",
  },
  {
    question: "Is this suitable for beginners?",
    answer: "Absolutely! Gold One MT4 is designed to be user-friendly while providing professional-grade signals. The indicator comes with comprehensive documentation, video tutorials, and a quick-start guide. Many of our users are beginners who have successfully learned to trade gold using our indicator. We also offer email support to help you get started.",
  },
  {
    question: "What's the difference between Free and Pro versions?",
    answer: "The Free version includes basic entry signals and fixed stop-loss/take-profit levels. The Pro version adds multi-timeframe analysis, dynamic risk management, advanced alert systems, a market scanner, session optimization, trailing stops, and priority support. Pro users also get access to video tutorials and strategy guides. See our pricing comparison for complete details.",
  },
  {
    question: "Does the indicator repaint or lag?",
    answer: "No, Gold One MT4 does not repaint. All signals are confirmed on candle close, ensuring you see the final signal. We've optimized the algorithm to minimize lag while maintaining accuracy. You can trust that what you see on historical charts is what you would have seen in real-time trading.",
  },
  {
    question: "What timeframes and trading sessions work best?",
    answer: "Gold One MT4 works on all timeframes but is optimized for M15-H1 for day trading and H4-D1 for swing trading. The best results come during the London (8:00-17:00 GMT) and New York (13:00-22:00 GMT) trading sessions, especially during the overlap period. The Pro version includes a session filter to highlight the best trading times.",
  },
  {
    question: "How much capital do I need to start?",
    answer: "You can start with as little as $100, though we recommend $500-$1,000 for optimal risk management. The indicator includes a position sizing calculator to help you determine appropriate lot sizes based on your account balance and risk tolerance. Never risk more than 2% of your account on any single trade.",
  },
  {
    question: "Do you offer refunds?",
    answer: "Yes! We offer a 30-day money-back guarantee. If you're not completely satisfied with Gold One MT4, simply contact our support team within 30 days of purchase for a full refund. We're confident in our product and want you to trade with confidence.",
  },
  {
    question: "How do I receive the indicator after purchase?",
    answer: "Immediately after purchase, you'll receive an email with your download link, license key, and access to our member area. The member area includes video tutorials, strategy guides, and any future updates. Installation takes less than 5 minutes - just copy the file to your MT4 indicators folder.",
  },
  {
    question: "Is there ongoing support available?",
    answer: "Yes! Pro users receive priority email support with responses within 24 hours. We also have an active community where you can share ideas and get help from other traders. Free users have access to community support through our forums. All users receive free lifetime updates to the indicator.",
  },
  {
    question: "Can I use this on multiple devices?",
    answer: "Your license allows activation on up to 2 MT4 accounts (live or demo). If you need additional activations, contact our support team. The indicator is tied to your MT4 account number, not the device, so you can use it on any computer where your MT4 account is logged in.",
  },
];

// Extended FAQ for Docs section
const docsFaq = [
  ...faqItems,
  {
    question: "What if I see conflicting signals on different timeframes?",
    answer: "This is normal and actually presents an opportunity. When higher timeframes show a different trend than lower timeframes, it often indicates a potential reversal or consolidation. We recommend following the higher timeframe direction for trend trades, or waiting for alignment across multiple timeframes for higher probability setups.",
  },
  {
    question: "How do I handle false signals?",
    answer: "No indicator is 100% accurate. Gold One MT4 maintains an 87% win rate, meaning some signals will be losses. The key is proper risk management: use the suggested stop-loss, never risk more than 2% per trade, and maintain a positive risk-reward ratio. Over time, the winning trades will significantly outweigh the losing ones when you follow proper risk management.",
  },
  {
    question: "Can I automate trading with this indicator?",
    answer: "The standard version is a manual trading indicator. However, we do offer an EA (Expert Advisor) version for an additional fee that can automate trades based on the signals. Contact our sales team for more information about the automated version.",
  },
  {
    question: "How often is the indicator updated?",
    answer: "We release updates quarterly to ensure optimal performance as market conditions evolve. All updates are free for lifetime. Pro users receive email notifications when updates are available, and the update process takes less than a minute.",
  },
];

// Static candlestick data for charts (fixes hydration issues)
const candlestickData1 = [
  { height: 45, margin: 12 }, { height: 32, margin: 25 }, { height: 58, margin: 8 },
  { height: 28, margin: 35 }, { height: 52, margin: 15 }, { height: 38, margin: 28 },
  { height: 65, margin: 5 }, { height: 42, margin: 22 }, { height: 35, margin: 30 },
  { height: 55, margin: 10 }, { height: 48, margin: 18 }, { height: 30, margin: 38 },
  { height: 62, margin: 7 }, { height: 40, margin: 26 }, { height: 50, margin: 14 },
  { height: 36, margin: 32 }, { height: 58, margin: 9 }, { height: 44, margin: 20 },
  { height: 52, margin: 16 }, { height: 38, margin: 28 }
];

const candlestickData2 = [
  { height: 35, margin: 20 }, { height: 28, margin: 30 }, { height: 42, margin: 15 },
  { height: 50, margin: 8 }, { height: 32, margin: 28 }, { height: 45, margin: 12 },
  { height: 38, margin: 25 }, { height: 55, margin: 5 }, { height: 30, margin: 32 },
  { height: 48, margin: 10 }, { height: 52, margin: 7 }, { height: 60, margin: 3 },
  { height: 65, margin: 2 }, { height: 58, margin: 5 }, { height: 70, margin: 1 },
  { height: 62, margin: 4 }, { height: 55, margin: 8 }, { height: 68, margin: 2 }
];

const candlestickData3 = [
  { height: 40, margin: 25 }, { height: 55, margin: 10 }, { height: 32, margin: 30 },
  { height: 48, margin: 15 }, { height: 60, margin: 5 }, { height: 38, margin: 22 },
  { height: 52, margin: 12 }, { height: 45, margin: 18 }, { height: 68, margin: 3 },
  { height: 42, margin: 20 }, { height: 58, margin: 8 }, { height: 35, margin: 28 },
  { height: 65, margin: 4 }, { height: 50, margin: 14 }, { height: 72, margin: 2 },
  { height: 55, margin: 10 }
];

export default function HomePage() {
  const [orderBumpChecked, setOrderBumpChecked] = useState(false);
  const [checkoutEmail, setCheckoutEmail] = useState("");

  // Calculate prices
  const basePrice = 100;
  const discountedPrice = 75;
  const orderBumpPrice = 49;
  const totalPrice = discountedPrice + (orderBumpChecked ? orderBumpPrice : 0);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section id="home" className="relative overflow-hidden bg-gradient-to-b from-amber-50/50 via-background to-background dark:from-amber-950/20">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-100/20 via-transparent to-transparent dark:from-amber-900/10" />
        
        <div className="container mx-auto px-4 py-20 lg:py-32">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Award className="h-4 w-4" />
              Trusted by 10,000+ Traders Worldwide
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="text-gold-gradient">Gold One MT4</span>
              <br />
              <span className="text-foreground">The Ultimate Gold Trading Indicator</span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Professional-grade MT4 indicator with <strong>87% accuracy rate</strong>. 
              Get precise entry signals, smart risk management, and maximize your gold trading profits.
            </p>

            {/* Exclusive Offer Card */}
            <div className="inline-flex items-center gap-4 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 border-2 border-amber-500/50 rounded-xl px-5 py-3 mb-8 shadow-xl">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-amber-400 to-yellow-600 flex items-center justify-center flex-shrink-0">
                <Sparkles className="h-5 w-5 text-white" />
              </div>
              <div className="flex items-center gap-3 flex-nowrap">
                <span className="text-amber-400 text-sm font-bold uppercase tracking-wide">Exclusive Offer</span>
                <span className="px-2 py-0.5 bg-red-500 text-white text-xs font-bold rounded-full animate-pulse">25% OFF</span>
                <span className="text-white font-bold">Save $25!</span>
              </div>
              <div className="h-6 w-px bg-gray-600 hidden sm:block"></div>
              <div className="flex items-center gap-2 flex-shrink-0">
                <span className="text-gray-400 text-xs">Ends:</span>
                <CountdownTimer variant="compact" />
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <Button asChild size="lg" className="btn-gold-gradient text-lg px-8 py-6 h-auto">
                <a href="#checkout">
                  <Coins className="mr-2 h-5 w-5" />
                  Buy Now - $75
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6 h-auto">
                <a href="#free-download">
                  <Download className="mr-2 h-5 w-5" />
                  Try Free Version
                </a>
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-600" />
                <span>Instant Download</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-600" />
                <span>30-Day Money Back</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-600" />
                <span>Lifetime Updates</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-600" />
                <span>24/7 Support</span>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="container mx-auto px-4 pb-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center border-amber-500/20 bg-gradient-to-b from-amber-50/50 to-background dark:from-amber-950/20">
                <CardContent className="pt-6">
                  <stat.icon className="h-8 w-8 mx-auto mb-2 text-amber-500" />
                  <div className="text-3xl font-bold text-gold-gradient">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4" variant="outline">
              <Zap className="h-3 w-3 mr-1" />
              Powerful Features
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Everything You Need to <span className="text-gold-gradient">Trade Gold Successfully</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Professional tools designed for serious traders. Each feature is crafted to give you an edge in the gold market.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="group hover:border-amber-500/50 transition-all hover:shadow-lg">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-amber-100 to-yellow-100 dark:from-amber-900 dark:to-yellow-900 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <feature.icon className="h-6 w-6 text-amber-600 dark:text-amber-400" />
                  </div>
                  <CardTitle className="flex items-center justify-between">
                    {feature.title}
                    <Badge variant="secondary" className="text-xs">{feature.highlight}</Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Trading Showcase Section */}
      <section className="py-20 bg-gradient-to-b from-background via-gray-950 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-gradient-to-r from-amber-500 to-yellow-500 text-white">
              <TrendingUp className="h-3 w-3 mr-1" />
              Real Trading Results
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              See <span className="text-gold-gradient">Gold One MT4</span> in Action
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Experience the power of our professional trading indicator with real market examples
            </p>
          </div>

          {/* Trading Images Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {/* Chart Screenshot 1 */}
            <Card className="overflow-hidden group hover:shadow-2xl hover:shadow-amber-500/20 transition-all duration-500 border-amber-500/20">
              <div className="relative aspect-video bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
                {/* Simulated Trading Chart */}
                <div className="absolute inset-0 p-4">
                  {/* Chart Header */}
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-amber-500 animate-pulse" />
                      <span className="text-amber-400 text-sm font-mono">XAUUSD</span>
                    </div>
                    <span className="text-green-500 text-sm font-bold">+127.5 pips</span>
                  </div>
                  
                  {/* Candlestick Pattern */}
                  <div className="flex items-end gap-1 h-32 mb-2">
                    {candlestickData1.map((candle, i) => (
                      <div key={i} className="flex flex-col items-center flex-1">
                        <div 
                          className={`w-full ${i % 3 === 0 ? 'bg-green-500' : 'bg-red-500'} rounded-sm`}
                          style={{ 
                            height: `${candle.height}px`,
                            marginTop: `${candle.margin}px`
                          }}
                        />
                      </div>
                    ))}
                  </div>
                  
                  {/* Buy Signal Arrow */}
                  <div className="absolute bottom-16 left-8">
                    <div className="relative">
                      <div className="w-0 h-0 border-l-[10px] border-r-[10px] border-b-[16px] border-l-transparent border-r-transparent border-b-green-500 animate-bounce" />
                      <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-green-400 text-xs font-bold whitespace-nowrap">BUY</span>
                    </div>
                  </div>
                  
                  {/* TP Lines */}
                  <div className="absolute top-12 right-4 left-4">
                    <div className="border-t-2 border-dashed border-green-500/50 relative">
                      <span className="absolute -top-3 right-0 text-green-400 text-xs">TP3</span>
                    </div>
                  </div>
                  <div className="absolute top-20 right-4 left-4">
                    <div className="border-t-2 border-dashed border-green-500/50 relative">
                      <span className="absolute -top-3 right-0 text-green-400 text-xs">TP2</span>
                    </div>
                  </div>
                  <div className="absolute top-28 right-4 left-4">
                    <div className="border-t-2 border-dashed border-green-500/50 relative">
                      <span className="absolute -top-3 right-0 text-green-400 text-xs">TP1</span>
                    </div>
                  </div>
                </div>
                
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <div>
                    <p className="text-white font-semibold">Perfect Entry Signal</p>
                    <p className="text-amber-400 text-sm">87% Accuracy Rate</p>
                  </div>
                </div>
              </div>
              <CardContent className="p-4 bg-gray-950">
                <div className="flex items-center justify-between">
                  <span className="text-gray-400 text-sm">Buy Signal - M15</span>
                  <Badge className="bg-green-500/20 text-green-400 border-green-500/30">WIN</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Chart Screenshot 2 */}
            <Card className="overflow-hidden group hover:shadow-2xl hover:shadow-amber-500/20 transition-all duration-500 border-amber-500/20">
              <div className="relative aspect-video bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
                <div className="absolute inset-0 p-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-amber-500 animate-pulse" />
                      <span className="text-amber-400 text-sm font-mono">XAUUSD</span>
                    </div>
                    <span className="text-green-500 text-sm font-bold">+89.3 pips</span>
                  </div>
                  
                  {/* Trend Line */}
                  <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 200">
                    <path
                      d="M 20 150 Q 100 140 150 100 T 280 60 T 380 40"
                      fill="none"
                      stroke="url(#goldGradient)"
                      strokeWidth="3"
                      className="animate-pulse"
                    />
                    <defs>
                      <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#fbbf24" />
                        <stop offset="50%" stopColor="#f59e0b" />
                        <stop offset="100%" stopColor="#d97706" />
                      </linearGradient>
                    </defs>
                  </svg>
                  
                  {/* Candlesticks */}
                  <div className="flex items-end gap-1 h-28 mt-8">
                    {candlestickData2.map((candle, i) => (
                      <div key={i} className="flex flex-col items-center flex-1">
                        <div 
                          className={`w-full ${i > 10 ? 'bg-green-500' : 'bg-red-500'} rounded-sm`}
                          style={{ 
                            height: `${candle.height}px`,
                            marginTop: `${candle.margin}px`
                          }}
                        />
                      </div>
                    ))}
                  </div>
                  
                  {/* Sell Signal */}
                  <div className="absolute top-12 right-16">
                    <div className="relative">
                      <div className="w-0 h-0 border-l-[10px] border-r-[10px] border-t-[16px] border-l-transparent border-r-transparent border-t-red-500 animate-bounce" />
                      <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-red-400 text-xs font-bold whitespace-nowrap">SELL</span>
                    </div>
                  </div>
                </div>
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <div>
                    <p className="text-white font-semibold">Trend Following Strategy</p>
                    <p className="text-amber-400 text-sm">Multi-Timeframe Analysis</p>
                  </div>
                </div>
              </div>
              <CardContent className="p-4 bg-gray-950">
                <div className="flex items-center justify-between">
                  <span className="text-gray-400 text-sm">Sell Signal - H1</span>
                  <Badge className="bg-green-500/20 text-green-400 border-green-500/30">WIN</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Chart Screenshot 3 */}
            <Card className="overflow-hidden group hover:shadow-2xl hover:shadow-amber-500/20 transition-all duration-500 border-amber-500/20">
              <div className="relative aspect-video bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
                <div className="absolute inset-0 p-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-amber-500 animate-pulse" />
                      <span className="text-amber-400 text-sm font-mono">XAUUSD</span>
                    </div>
                    <span className="text-green-500 text-sm font-bold">+156.8 pips</span>
                  </div>
                  
                  {/* Support/Resistance Lines */}
                  <div className="absolute top-8 right-4 left-4">
                    <div className="border-t-2 border-amber-500/70 relative">
                      <span className="absolute -top-3 left-2 text-amber-400 text-xs">Resistance</span>
                    </div>
                  </div>
                  <div className="absolute bottom-20 right-4 left-4">
                    <div className="border-t-2 border-amber-500/70 relative">
                      <span className="absolute -top-3 left-2 text-amber-400 text-xs">Support</span>
                    </div>
                  </div>
                  
                  {/* Price Action */}
                  <div className="flex items-end gap-1.5 h-36 mt-10">
                    {candlestickData3.map((candle, i) => (
                      <div key={i} className="flex flex-col items-center flex-1">
                        <div 
                          className={`w-full ${i % 2 === 0 ? 'bg-green-500' : 'bg-red-500'} rounded-sm`}
                          style={{ 
                            height: `${candle.height}px`,
                            marginTop: `${candle.margin}px`
                          }}
                        />
                      </div>
                    ))}
                  </div>
                  
                  {/* Entry Point */}
                  <div className="absolute bottom-24 left-12">
                    <div className="w-4 h-4 rounded-full bg-amber-500 animate-ping absolute" />
                    <div className="w-4 h-4 rounded-full bg-amber-500 relative" />
                  </div>
                </div>
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <div>
                    <p className="text-white font-semibold">Risk Management</p>
                    <p className="text-amber-400 text-sm">Dynamic SL/TP Levels</p>
                  </div>
                </div>
              </div>
              <CardContent className="p-4 bg-gray-950">
                <div className="flex items-center justify-between">
                  <span className="text-gray-400 text-sm">Buy Signal - H4</span>
                  <Badge className="bg-green-500/20 text-green-400 border-green-500/30">WIN</Badge>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Stats Under Images */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 max-w-4xl mx-auto">
            {[
              { label: "Win Rate", value: "87%", color: "text-green-500" },
              { label: "Avg. Profit/Trade", value: "+45 pips", color: "text-amber-500" },
              { label: "Max Drawdown", value: "< 5%", color: "text-blue-500" },
              { label: "Monthly Signals", value: "60-80", color: "text-purple-500" },
            ].map((stat, index) => (
              <div key={index} className="text-center p-4 rounded-lg bg-gray-900/50 border border-amber-500/10">
                <div className={`text-2xl font-bold ${stat.color}`}>{stat.value}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4" variant="outline">
              <Rocket className="h-3 w-3 mr-1" />
              Simple Process
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Start Trading in <span className="text-gold-gradient">3 Easy Steps</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                step: "01",
                title: "Download & Install",
                description: "Download the indicator and copy it to your MT4 indicators folder. Takes less than 2 minutes.",
                icon: Download,
              },
              {
                step: "02",
                title: "Apply to Chart",
                description: "Open XAUUSD chart and drag Gold One MT4 onto it. Configure your preferred settings.",
                icon: Target,
              },
              {
                step: "03",
                title: "Start Trading",
                description: "Follow the clear buy/sell signals. Use suggested SL/TP levels for optimal risk management.",
                icon: TrendingUp,
              },
            ].map((item, index) => (
              <div key={index} className="relative text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-amber-100 to-yellow-100 dark:from-amber-900 dark:to-yellow-900 flex items-center justify-center">
                  <item.icon className="h-8 w-8 text-amber-600 dark:text-amber-400" />
                </div>
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-amber-500 text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center">
                  {item.step}
                </div>
                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
                {index < 2 && (
                  <ChevronRight className="hidden md:block absolute top-8 -right-4 h-8 w-8 text-muted-foreground/30" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Documentation Section */}
      <section id="docs" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4" variant="outline">
              <BookOpen className="h-3 w-3 mr-1" />
              Complete Guide
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Everything You Need to <span className="text-gold-gradient">Know</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive documentation to help you get the most out of Gold One MT4
            </p>
          </div>

          <Tabs defaultValue="installation" className="max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-5 mb-8">
              {docsTabs.map((tab) => (
                <TabsTrigger key={tab.id} value={tab.id} className="text-xs md:text-sm">
                  <tab.icon className="h-4 w-4 mr-1 hidden sm:block" />
                  {tab.label}
                </TabsTrigger>
              ))}
            </TabsList>

            {docsTabs.map((tab) => (
              <TabsContent key={tab.id} value={tab.id}>
                <Card>
                  <CardContent className="p-6">
                    <div className="space-y-6">
                      {tab.content.map((section, sectionIndex) => (
                        <div key={sectionIndex} className="border-l-2 border-amber-500/30 pl-4">
                          <h4 className="font-semibold mb-3 flex items-center gap-2">
                            <Info className="h-4 w-4 text-amber-500" />
                            {section.title}
                          </h4>
                          <ol className="space-y-2">
                            {section.steps.map((step, stepIndex) => (
                              <li key={stepIndex} className="flex items-start gap-3 text-sm">
                                <span className="w-6 h-6 rounded-full bg-amber-100 dark:bg-amber-900 text-amber-700 dark:text-amber-300 flex items-center justify-center flex-shrink-0 text-xs font-medium">
                                  {stepIndex + 1}
                                </span>
                                <span className="text-muted-foreground">{step}</span>
                              </li>
                            ))}
                          </ol>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>

          {/* Video Tutorials Placeholder */}
          <div className="mt-12 max-w-4xl mx-auto">
            <h3 className="text-xl font-semibold mb-6 text-center">Video Tutorials</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { title: "Getting Started with Gold One MT4", duration: "12:45" },
                { title: "Optimal Settings Explained", duration: "8:30" },
                { title: "Trading Strategies for Gold", duration: "15:20" },
                { title: "Risk Management Best Practices", duration: "10:15" },
              ].map((video, index) => (
                <Card key={index} className="overflow-hidden group cursor-pointer">
                  <div className="aspect-video bg-gradient-to-br from-amber-100 to-yellow-100 dark:from-amber-900 dark:to-yellow-900 flex items-center justify-center relative">
                    <div className="w-16 h-16 rounded-full bg-white/90 dark:bg-black/50 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Play className="h-8 w-8 text-amber-600 dark:text-amber-400 ml-1" />
                    </div>
                    <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                      {video.duration}
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <p className="font-medium">{video.title}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4" variant="outline">
              <Star className="h-3 w-3 mr-1 fill-current" />
              Success Stories
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What Our <span className="text-gold-gradient">Traders Say</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Join thousands of successful traders who trust Gold One MT4
            </p>
          </div>

          <TestimonialsCarousel />
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-gradient-to-r from-amber-500 to-yellow-500 text-white">
              Limited Time Offer
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Choose Your <span className="text-gold-gradient">Trading Package</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Start your journey to profitable gold trading today
            </p>
            
            <div className="mt-6">
              <CountdownTimer variant="banner" />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Free Version */}
            <Card className="relative">
              <CardHeader>
                <CardTitle className="text-xl">Free Version</CardTitle>
                <CardDescription>Perfect for testing the indicator</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold">$0</span>
                  <span className="text-muted-foreground">/forever</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                {[
                  { text: "Basic Entry Signals", included: true },
                  { text: "Fixed Stop Loss & Take Profit", included: true },
                  { text: "Visual Alerts", included: true },
                  { text: "Community Support", included: true },
                  { text: "Multi-Timeframe Analysis", included: false },
                  { text: "Risk Calculator", included: false },
                  { text: "Market Scanner", included: false },
                  { text: "Video Tutorials", included: false },
                  { text: "Priority Support", included: false },
                ].map((item, index) => (
                  <div key={index} className={`flex items-center gap-2 text-sm ${!item.included && 'text-muted-foreground'}`}>
                    {item.included ? (
                      <Check className="h-4 w-4 text-green-600" />
                    ) : (
                      <X className="h-4 w-4 text-muted-foreground/50" />
                    )}
                    {item.text}
                  </div>
                ))}
              </CardContent>
              <CardFooter>
                <Button asChild variant="outline" className="w-full">
                  <a href="#free-download">Download Free</a>
                </Button>
              </CardFooter>
            </Card>

            {/* Pro Version */}
            <Card className="relative border-amber-500 shadow-lg gold-glow">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <Badge className="bg-gradient-to-r from-amber-500 to-yellow-500 text-white">
                  Most Popular
                </Badge>
              </div>
              <CardHeader>
                <CardTitle className="text-xl">Pro Version</CardTitle>
                <CardDescription>Full-featured trading solution</CardDescription>
                <div className="mt-4">
                  <span className="text-muted-foreground line-through text-lg">$100</span>
                  <span className="text-4xl font-bold ml-2 text-green-600">$75</span>
                  <Badge variant="outline" className="ml-2 text-green-600 border-green-600">Save $25</Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                {[
                  { text: "Advanced Entry Signals", included: true },
                  { text: "Dynamic Stop Loss & 3 TP Levels", included: true },
                  { text: "All Alert Types (Visual, Audio, Push)", included: true },
                  { text: "Priority Email Support", included: true },
                  { text: "Multi-Timeframe Trend Filter", included: true },
                  { text: "Built-in Risk Calculator", included: true },
                  { text: "Automatic Market Scanner", included: true },
                  { text: "Video Tutorials & Strategy Guide", included: true },
                  { text: "Lifetime Updates", included: true },
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-2 text-sm">
                    <Check className="h-4 w-4 text-green-600" />
                    {item.text}
                  </div>
                ))}
              </CardContent>
              <CardFooter className="flex-col gap-3">
                <Button asChild className="w-full btn-gold-gradient" size="lg">
                  <a href="#checkout">
                    <Coins className="mr-2 h-5 w-5" />
                    Buy Now - $75
                  </a>
                </Button>
                <p className="text-xs text-muted-foreground text-center">
                  30-day money-back guarantee • Instant download
                </p>
              </CardFooter>
            </Card>
          </div>

          {/* Comparison Table */}
          <div className="mt-16 max-w-4xl mx-auto">
            <h3 className="text-xl font-semibold text-center mb-8">Detailed Comparison</h3>
            <Card>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-4 font-medium">Feature</th>
                      <th className="text-center p-4 font-medium">Free</th>
                      <th className="text-center p-4 font-medium bg-amber-50 dark:bg-amber-950/30">Pro</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonData.map((row, index) => (
                      <tr key={index} className="border-b last:border-0">
                        <td className="p-4 text-sm">{row.feature}</td>
                        <td className="text-center p-4">
                          {typeof row.free === 'boolean' ? (
                            row.free ? <Check className="h-4 w-4 text-green-600 mx-auto" /> : <X className="h-4 w-4 text-muted-foreground/50 mx-auto" />
                          ) : (
                            <span className="text-sm">{row.free}</span>
                          )}
                        </td>
                        <td className="text-center p-4 bg-amber-50/50 dark:bg-amber-950/20">
                          {typeof row.pro === 'boolean' ? (
                            row.pro ? <Check className="h-4 w-4 text-green-600 mx-auto" /> : <X className="h-4 w-4 text-muted-foreground/50 mx-auto" />
                          ) : (
                            <span className="text-sm font-medium text-amber-700 dark:text-amber-400">{row.pro}</span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Checkout Section */}
      <section id="checkout" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4" variant="outline">
              Secure Checkout
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Complete Your <span className="text-gold-gradient">Purchase</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Instant access after payment. Start trading in minutes.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Order Form */}
            <Card>
              <CardHeader>
                <CardTitle>Customer Information</CardTitle>
                <CardDescription>Enter your details to complete purchase</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    value={checkoutEmail}
                    onChange={(e) => setCheckoutEmail(e.target.value)}
                  />
                  <p className="text-xs text-muted-foreground">Download link will be sent to this email</p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="name">Full Name *</Label>
                  <Input id="name" placeholder="John Doe" />
                </div>

                <Separator className="my-4" />

                {/* Order Bump */}
                <OrderBump
                  checked={orderBumpChecked}
                  onCheckedChange={setOrderBumpChecked}
                />

                <Separator className="my-4" />

                {/* Payment Methods */}
                <div className="space-y-3">
                  <Label>Payment Method</Label>
                  <div className="grid grid-cols-2 gap-3">
                    <Button variant="outline" className="h-14 justify-start px-4 border-2 border-amber-500">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-purple-800 rounded flex items-center justify-center text-white text-xs font-bold">S</div>
                        <div className="text-left">
                          <div className="font-medium text-sm">Credit Card</div>
                          <div className="text-xs text-muted-foreground">via Stripe</div>
                        </div>
                      </div>
                    </Button>
                    <Button variant="outline" className="h-14 justify-start px-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center text-white text-xs font-bold">P</div>
                        <div className="text-left">
                          <div className="font-medium text-sm">PayPal</div>
                          <div className="text-xs text-muted-foreground">Fast checkout</div>
                        </div>
                      </div>
                    </Button>
                  </div>
                </div>

                <Button className="w-full btn-gold-gradient text-lg py-6 mt-4" size="lg">
                  <Lock className="mr-2 h-4 w-4" />
                  Complete Purchase - ${totalPrice}
                </Button>

                {/* Security */}
                <TrustBadges variant="inline" className="justify-center" />
              </CardContent>
            </Card>

            {/* Order Summary */}
            <Card className="h-fit">
              <CardHeader>
                <CardTitle>Order Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Product */}
                <div className="flex gap-4">
                  <div className="w-20 h-20 rounded-lg bg-gradient-to-br from-amber-100 to-yellow-100 dark:from-amber-900 dark:to-yellow-900 flex items-center justify-center">
                    <Coins className="h-10 w-10 text-amber-500" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold">Gold One MT4 - Pro Version</h4>
                    <p className="text-sm text-muted-foreground">Lifetime license with updates</p>
                    <div className="flex items-center gap-2 mt-1">
                      <Badge variant="outline" className="text-green-600 border-green-600 text-xs">
                        25% OFF
                      </Badge>
                    </div>
                  </div>
                </div>

                <Separator />

                {/* Pricing */}
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Original Price</span>
                    <span className="line-through">$100.00</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Discount (25%)</span>
                    <span className="text-green-600">-$25.00</span>
                  </div>
                  <div className="flex justify-between font-medium">
                    <span>Subtotal</span>
                    <span>$75.00</span>
                  </div>
                </div>

                {orderBumpChecked && (
                  <>
                    <Separator />
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Sparkles className="h-4 w-4 text-amber-500" />
                        <span className="text-sm font-medium">Premium Signals Package</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">30-day signals subscription</span>
                        <span>$49.00</span>
                      </div>
                    </div>
                  </>
                )}

                <Separator />

                <div className="flex justify-between text-lg font-bold">
                  <span>Total</span>
                  <span className="text-amber-600">${totalPrice}.00</span>
                </div>

                {/* Guarantee */}
                <div className="bg-green-50 dark:bg-green-950/30 rounded-lg p-4 mt-4">
                  <div className="flex items-start gap-3">
                    <Shield className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-green-800 dark:text-green-300">30-Day Money Back Guarantee</p>
                      <p className="text-sm text-green-700 dark:text-green-400 mt-1">
                        Not satisfied? Get a full refund within 30 days, no questions asked.
                      </p>
                    </div>
                  </div>
                </div>

                {/* What You Get */}
                <div className="space-y-2 mt-4">
                  <p className="font-medium text-sm">What you get:</p>
                  {[
                    "Instant download after purchase",
                    "License key for 2 MT4 accounts",
                    "Lifetime free updates",
                    "Priority email support",
                    "Video tutorials & guides",
                    "30-day money-back guarantee",
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Check className="h-4 w-4 text-green-600" />
                      {item}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Free Download Section */}
      <section id="free-download" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4" variant="outline">
                <Download className="h-3 w-3 mr-1" />
                Free Version
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Try <span className="text-gold-gradient">Gold One MT4</span> Free
              </h2>
              <p className="text-muted-foreground">
                Download our free version to test the indicator&apos;s accuracy before upgrading to Pro
              </p>
            </div>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Download className="h-5 w-5 text-amber-500" />
                  Download Free Version
                </CardTitle>
                <CardDescription>
                  Enter your email to receive the download link
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="free-email">Email Address</Label>
                  <Input id="free-email" type="email" placeholder="your@email.com" />
                </div>

                <Button className="w-full" variant="outline">
                  <Download className="mr-2 h-4 w-4" />
                  Send Download Link
                </Button>

                <div className="bg-amber-50 dark:bg-amber-950/30 rounded-lg p-4">
                  <div className="flex items-start gap-3">
                    <AlertCircle className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-amber-800 dark:text-amber-300">Free Version Limitations</p>
                      <p className="text-sm text-amber-700 dark:text-amber-400 mt-1">
                        The free version includes basic signals only. Upgrade to Pro for multi-timeframe analysis,
                        advanced risk management, market scanner, and priority support.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Upgrade CTA */}
            <div className="mt-8 text-center">
              <p className="text-muted-foreground mb-4">Want the full experience?</p>
              <Button asChild className="btn-gold-gradient">
                <a href="#checkout">
                  <Coins className="mr-2 h-4 w-4" />
                  Upgrade to Pro - $75
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <FAQSection items={docsFaq} />
        </div>
      </section>

      {/* Trust Badges Section */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <TrustBadges />
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-amber-50 to-yellow-50 dark:from-amber-950/30 dark:to-yellow-950/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to <span className="text-gold-gradient">Transform Your Trading</span>?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Join 10,000+ successful traders who trust Gold One MT4 for their gold trading decisions
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <Button asChild size="lg" className="btn-gold-gradient text-lg px-8 py-6 h-auto">
              <a href="#checkout">
                <Coins className="mr-2 h-5 w-5" />
                Buy Now - $75
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>

          <CountdownTimer />
        </div>
      </section>

      <Footer />
    </div>
  );
}
