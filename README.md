# ShopBot — E-commerce Assistant

## Problem
Online shoppers in Pakistan often have to scroll through long catalogs to find
something that fits their budget or category, and checking a simple order status
means hunting through emails or an account page. ShopBot answers in plain words:
ask for "shoes under 5000" and the product grid itself filters to match.

## Features
- Product catalog of **24 realistic products** in PKR across Footwear, Clothing,
  Electronics, Accessories, Home & Kitchen, Beauty, and Sports
  (`data/products.json` — names, categories, prices, ratings, stock, descriptions)
- Product search (chat or the search box) and category chips
- Recommendations by budget and/or category, e.g. "shoes under 5000",
  "show electronics", "recommend something under 3000"
- The product grid updates/filters based on the chat
- Cart help: add items from the grid or by typing "add … to cart",
  "show cart", "clear cart", and a demo "checkout" flow (no payment is taken)
- Order-status lookup with mock orders (`data/orders.json`):
  ORD-1001, ORD-1002, ORD-1003, ORD-1004, ORD-1005
- Clean modern UI, mobile-friendly layout, typing indicator, suggestion chips,
  and conversation memory within the session (it remembers your last category
  and budget, so "cheaper ones" refines your previous search)

## How to run
No API key, no paid service, and no backend server are required.

Option A (recommended):
```bash
cd shopbot-ecommerce-assistant
python3 -m http.server 8000
# then open http://localhost:8000 in a browser
```

Option B: open `index.html` directly in a browser. The app embeds a copy of the
product/order data as a fallback, so it works this way too (the JSON files are
still the readable source of truth).

## Sample questions
| Ask | Expected answer |
|---|---|
| `shoes under 5000` | Filters the grid to Footwear under Rs 5,000 (Everyday Canvas Shoes, Rs 4,499) and lists top picks. |
| `show electronics` | Filters the grid to Electronics: earbuds, speaker, smartwatch, power bank. |
| `recommend something under 3000` | Lists top-rated items under Rs 3,000, such as the Vitamin C Face Serum (Rs 2,799), ProGrip Yoga Mat (Rs 2,499), and Wool Winter Shawl (Rs 2,999). |
| `add SoundPods Wireless Earbuds to cart` | Adds the earbuds (Rs 5,999) and shows the new cart total. |
| `order status ORD-1002` | "Order ORD-1002 — Shipped. SoundPods Wireless Earbuds × 1 — Rs 5,999; VoltPro 20000mAh Power Bank × 1 — Rs 4,999. Total: Rs 10,998. Expected delivery in 2–3 days." |
| `cheaper ones` (after a category search) | Refines the previous category to a lower budget and updates the grid. |

## Honest note
This is a **local, rule-based chatbot with mock data**, not a real store and not
an AI model. It matches keywords, budgets, and order IDs with rules in `app.js`.
There are no real products, orders, payments, or deliveries, and nothing leaves
your computer.

## Future upgrade path
1. Replace the rule matcher in `app.js` with a real LLM call (kept behind an
   opt-in setting, never hard-coding a key) for free-text understanding.
2. Replace `data/products.json` / `data/orders.json` with a real store API
   (e.g. Shopify/WooCommerce) and a real order-tracking endpoint.
3. Add accounts, real checkout (Cash on Delivery / card), and delivery tracking.
4. Add Urdu/Roman Urdu understanding for shoppers who ask in Roman Urdu.
