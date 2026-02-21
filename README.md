# Gold One MT4 - Professional Trading Indicator Website

<p align="center">
  <img src="public/gold-logo.png" alt="Gold One MT4 Logo" width="120" height="120">
</p>

<p align="center">
  <strong>The Ultimate Gold Trading Indicator for MetaTrader 4</strong>
</p>

<p align="center">
  <a href="#features">Features</a> •
  <a href="#demo">Demo</a> •
  <a href="#installation">Installation</a> •
  <a href="#technologies">Technologies</a> •
  <a href="#license">License</a>
</p>

---

## About

This is the official website for **Gold One MT4**, a professional-grade trading indicator designed specifically for gold (XAUUSD) trading on MetaTrader 4 platform. The website showcases the product features, documentation, pricing, and provides a seamless checkout experience.

### Key Highlights

- **87% Success Rate** - Advanced algorithm with proven accuracy
- **10,000+ Active Traders** - Trusted by traders worldwide
- **Multi-Timeframe Analysis** - Trade with the trend across all timeframes
- **Smart Risk Management** - Built-in stop-loss and take-profit recommendations
- **Real-time Alerts** - Never miss a trading opportunity

---

## Features

### Website Features

- **Responsive Design** - Fully responsive and optimized for all devices
- **Modern UI/UX** - Clean, professional design with gold-themed aesthetics
- **Dark/Light Mode** - Toggle between themes for comfortable viewing
- **Interactive Components** - Countdown timer, testimonials carousel, FAQ accordion
- **RTL Support** - Full support for right-to-left languages (Arabic)
- **SEO Optimized** - Structured for search engine visibility

### Product Features

| Feature | Description |
|---------|-------------|
| Precision Entry Signals | Advanced algorithm identifies optimal entry points |
| Smart Risk Management | Built-in SL/TP with calculated risk-reward ratios |
| Trend Analysis | Multi-timeframe trend detection |
| Instant Alerts | Real-time notifications on MT4 |
| Market Scanner | Automatic scanning for high-probability setups |
| Session Optimization | Optimized for London and New York sessions |

---

## Pages & Sections

The website is a single-page application with the following sections:

1. **Hero Section** - Main landing with CTA buttons and stats
2. **Features Section** - Detailed product features
3. **How It Works** - 3-step process guide
4. **Documentation** - Tabbed interface with installation, usage, settings, strategies, and FAQ
5. **Testimonials** - Customer reviews carousel
6. **Pricing** - Free vs Pro comparison with detailed feature table
7. **Checkout** - Order form with Order Bump upsell
8. **Free Download** - Lead capture for free version
9. **FAQ** - Comprehensive frequently asked questions
10. **Trust Badges** - Security and trust indicators

---

## Demo

### Live Preview

Visit the live website to see the full experience.

### Screenshots

<details>
<summary>Click to view screenshots</summary>

#### Hero Section
![Hero](screenshots/hero.png)

#### Features Section
![Features](screenshots/features.png)

#### Pricing Section
![Pricing](screenshots/pricing.png)

#### Checkout Section
![Checkout](screenshots/checkout.png)

</details>

---

## Installation

### Prerequisites

- Node.js 18.0 or higher
- npm, yarn, pnpm, or bun

### Quick Start

```bash
# Clone the repository
git clone https://github.com/mizo-coy/Gold-One-MT4-.git

# Navigate to project directory
cd Gold-One-MT4-

# Install dependencies
bun install

# Start development server
bun run dev
```

### Build for Production

```bash
# Build the application
bun run build

# Start production server
bun run start
```

### Environment Variables

Create a `.env.local` file in the root directory:

```env
# Add any required environment variables
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

---

## Technologies

### Frontend

- **[Next.js 15](https://nextjs.org/)** - React framework with App Router
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe JavaScript
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[shadcn/ui](https://ui.shadcn.com/)** - Beautiful UI components
- **[Lucide Icons](https://lucide.dev/)** - Beautiful open-source icons

### Fonts

- **[Cairo](https://fonts.google.com/specimen/Cairo)** - Multilingual font supporting Arabic and English

### Features & Libraries

- **next-themes** - Dark/Light mode support
- **React Hooks** - useState, useEffect, useCallback
- **CSS Gradients** - Custom gold gradient effects
- **Responsive Design** - Mobile-first approach

---

## Project Structure

```
gold-one-mt4/
├── public/
│   ├── gold-logo.png
│   ├── logo.svg
│   └── robots.txt
├── src/
│   ├── app/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx
│   │   │   └── Footer.tsx
│   │   ├── ui/
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   └── ... (other UI components)
│   │   └── ui-custom/
│   │       ├── CountdownTimer.tsx
│   │       ├── FAQSection.tsx
│   │       ├── OrderBump.tsx
│   │       ├── TestimonialsCarousel.tsx
│   │       └── TrustBadges.tsx
│   ├── hooks/
│   │   ├── use-mobile.ts
│   │   └── use-toast.ts
│   └── lib/
│       ├── db.ts
│       └── utils.ts
├── tailwind.config.ts
├── next.config.ts
├── tsconfig.json
├── package.json
└── README.md
```

---

## Customization

### Colors

The website uses a gold-themed color palette. Customize in `tailwind.config.ts`:

```javascript
// Primary gold colors
colors: {
  gold: {
    50: '#FFFBEB',
    100: '#FEF3C7',
    // ... custom gold shades
    500: '#D4AF37', // Primary gold
    600: '#FFD700', // Bright gold
  }
}
```

### Typography

The website uses the Cairo font. Modify in `src/app/layout.tsx`:

```javascript
const inter = Cairo({
  subsets: ['arabic', 'latin'],
  // ... other options
});
```

### Content

Update product information, pricing, and content in `src/app/page.tsx`:

- `stats` - Statistics array
- `features` - Features array
- `comparisonData` - Pricing comparison
- `faqItems` - FAQ questions and answers

---

## Payment Integration

The website includes UI for payment methods:

- **Stripe** - Credit card payments
- **PayPal** - Fast checkout

To integrate actual payments, you'll need to:

1. Create Stripe/PayPal accounts
2. Add API keys to environment variables
3. Create API routes for payment processing
4. Update checkout form to handle submissions

---

## Links

### Store Links

- **Website**: [InfinityAlgo Academy](https://infinityalgoacademy.net)
- **Free Download**: [Gold One MT4 Free](https://infinityalgoacademy.net/item/gold-one-mt4-free-download/)
- **Checkout**: [Buy Gold One MT4](https://infinityalgoacademy.net/checkout/?fct_cart_hash=cf75fe51160b7ecd43e2e0a234909671)

### Payment Methods

- Stripe
- PayPal

---

## Support

For support, please visit [InfinityAlgo Academy](https://infinityalgoacademy.net) or contact us through the website.

---

## License

This project is proprietary software. All rights reserved by **InfinityAlgo Academy**.

---

<p align="center">
  <strong>InfinityAlgo Academy</strong><br>
  <em>Professional Trading Tools for Serious Traders</em>
</p>

<p align="center">
  Copyright © 2025 InfinityAlgo Academy. All rights reserved.
</p>
