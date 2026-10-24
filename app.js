
// ShopBot — local rule-based e-commerce assistant. No API key, no backend.
// Data: tries data/products.json + data/orders.json (works over http.server);
// falls back to the embedded copy below so opening index.html directly also works.
const FALLBACK_PRODUCTS = [{"id": "P01", "name": "AirFlex Running Sneakers", "category": "Footwear", "price": 7499, "rating": 4.6, "inStock": true, "tag": "Bestseller", "description": "Lightweight breathable running shoes with cushioned soles for daily walks and jogging."}, {"id": "P02", "name": "Classic Leather Loafers", "category": "Footwear", "price": 12999, "rating": 4.8, "inStock": true, "tag": "Premium", "description": "Hand-finished genuine leather loafers, perfect for office wear and formal occasions."}, {"id": "P03", "name": "Everyday Canvas Shoes", "category": "Footwear", "price": 4499, "rating": 4.3, "inStock": true, "tag": "Budget pick", "description": "Comfortable canvas sneakers in a clean everyday style that goes with jeans and kurtas."}, {"id": "P04", "name": "Formal Oxford Shoes", "category": "Footwear", "price": 14999, "rating": 4.7, "inStock": true, "tag": "Premium", "description": "Polished black Oxford shoes for weddings, interviews and formal events."}, {"id": "P05", "name": "Men's Cotton Kurta", "category": "Clothing", "price": 3999, "rating": 4.5, "inStock": true, "tag": "Bestseller", "description": "Soft breathable cotton kurta with a relaxed fit, ideal for summer and festive wear."}, {"id": "P06", "name": "Women's Lawn Suit (3-Piece)", "category": "Clothing", "price": 6499, "rating": 4.6, "inStock": true, "tag": "New", "description": "Printed 3-piece lawn suit with dupatta and dyed trouser, made for everyday comfort."}, {"id": "P07", "name": "Slim-Fit Denim Jeans", "category": "Clothing", "price": 4999, "rating": 4.4, "inStock": true, "tag": "", "description": "Stretch denim jeans with a modern slim fit and durable stitching."}, {"id": "P08", "name": "Fleece Hoodie", "category": "Clothing", "price": 3499, "rating": 4.5, "inStock": true, "tag": "Winter pick", "description": "Warm fleece hoodie with kangaroo pocket, great for winter evenings in Lahore and Islamabad."}, {"id": "P09", "name": "Cotton Polo T-Shirt", "category": "Clothing", "price": 2499, "rating": 4.2, "inStock": true, "tag": "Budget pick", "description": "Classic cotton polo t-shirt, breathable and easy to wash."}, {"id": "P10", "name": "Wool Winter Shawl", "category": "Clothing", "price": 2999, "rating": 4.4, "inStock": false, "tag": "", "description": "Soft warm wool shawl in a neutral colour. Currently out of stock — ask for similar winter items."}, {"id": "P11", "name": "SoundPods Wireless Earbuds", "category": "Electronics", "price": 5999, "rating": 4.5, "inStock": true, "tag": "Bestseller", "description": "Wireless earbuds with charging case, clear sound and up to 24 hours total playback."}, {"id": "P12", "name": "BoomBox Bluetooth Speaker", "category": "Electronics", "price": 7999, "rating": 4.6, "inStock": true, "tag": "", "description": "Portable Bluetooth speaker with deep bass, waterproof design and 18-hour battery."}, {"id": "P13", "name": "FitTrack Smartwatch", "category": "Electronics", "price": 11999, "rating": 4.4, "inStock": true, "tag": "New", "description": "Smartwatch with heart-rate tracking, step counter, notifications and 7-day battery life."}, {"id": "P14", "name": "VoltPro 20000mAh Power Bank", "category": "Electronics", "price": 4999, "rating": 4.5, "inStock": true, "tag": "Budget pick", "description": "Fast-charging 20000mAh power bank with two USB ports for phones and earbuds."}, {"id": "P15", "name": "Urban Laptop Backpack", "category": "Accessories", "price": 5499, "rating": 4.6, "inStock": true, "tag": "", "description": "Water-resistant 15.6-inch laptop backpack with padded straps and multiple pockets."}, {"id": "P16", "name": "Ceramic Dinner Set (24 pcs)", "category": "Home & Kitchen", "price": 15999, "rating": 4.7, "inStock": true, "tag": "Premium", "description": "Elegant 24-piece ceramic dinner set for 6 people, dishwasher safe."}, {"id": "P17", "name": "Non-Stick Cookware Set", "category": "Home & Kitchen", "price": 13999, "rating": 4.6, "inStock": true, "tag": "", "description": "5-piece non-stick cookware set with glass lids, suitable for daily Pakistani cooking."}, {"id": "P18", "name": "Glow LED Table Lamp", "category": "Home & Kitchen", "price": 3499, "rating": 4.3, "inStock": true, "tag": "", "description": "Adjustable LED desk lamp with 3 brightness levels and USB charging."}, {"id": "P19", "name": "Cotton Double Bedsheet Set", "category": "Home & Kitchen", "price": 4499, "rating": 4.4, "inStock": true, "tag": "", "description": "Soft cotton double bedsheet with 2 pillow covers, fade-resistant print."}, {"id": "P20", "name": "Vitamin C Face Serum", "category": "Beauty", "price": 2799, "rating": 4.5, "inStock": true, "tag": "Bestseller", "description": "Brightening vitamin C serum for daily skincare, suitable for most skin types."}, {"id": "P21", "name": "Matte Lipstick Set (4 pcs)", "category": "Beauty", "price": 1999, "rating": 4.3, "inStock": true, "tag": "Budget pick", "description": "Long-lasting matte lipsticks in 4 everyday shades."}, {"id": "P22", "name": "Adjustable Dumbbell Pair (20kg)", "category": "Sports", "price": 8999, "rating": 4.5, "inStock": true, "tag": "", "description": "Adjustable dumbbell pair for home workouts, total 20kg with easy weight plates."}, {"id": "P23", "name": "ProGrip Yoga Mat", "category": "Sports", "price": 2499, "rating": 4.4, "inStock": true, "tag": "Budget pick", "description": "Non-slip 6mm yoga mat with carry strap, easy to roll and clean."}, {"id": "P24", "name": "Kashmir Willow Cricket Bat", "category": "Sports", "price": 6999, "rating": 4.7, "inStock": true, "tag": "Bestseller", "description": "Full-size Kashmir willow cricket bat with grip and cover, for tennis and hard-ball practice."}];
const FALLBACK_ORDERS = [{"id": "ORD-1001", "status": "Delivered", "customer": "Ayesha Khan", "items": [{"productId": "P01", "name": "AirFlex Running Sneakers", "qty": 1, "price": 7499}], "total": 7499, "eta": "Delivered on 20 Oct 2026", "note": "Delivered to Lahore. Thank you for shopping with ShopBot."}, {"id": "ORD-1002", "status": "Shipped", "customer": "Bilal Ahmed", "items": [{"productId": "P11", "name": "SoundPods Wireless Earbuds", "qty": 1, "price": 5999}, {"productId": "P14", "name": "VoltPro 20000mAh Power Bank", "qty": 1, "price": 4999}], "total": 10998, "eta": "Expected delivery in 2-3 days", "note": "Your parcel is on its way via courier."}, {"id": "ORD-1003", "status": "Processing", "customer": "Fatima Noor", "items": [{"productId": "P06", "name": "Women's Lawn Suit (3-Piece)", "qty": 1, "price": 6499}], "total": 6499, "eta": "Expected delivery in 4-5 days", "note": "Your order is being packed at our warehouse."}, {"id": "ORD-1004", "status": "Out for delivery", "customer": "Usman Tariq", "items": [{"productId": "P24", "name": "Kashmir Willow Cricket Bat", "qty": 1, "price": 6999}], "total": 6999, "eta": "Expected today", "note": "Your rider is on the way. Please keep your phone nearby."}, {"id": "ORD-1005", "status": "Delivered", "customer": "Zainab Ali", "items": [{"productId": "P20", "name": "Vitamin C Face Serum", "qty": 2, "price": 2799}], "total": 5598, "eta": "Delivered on 18 Oct 2026", "note": "Delivered to Karachi."}];

let products = FALLBACK_PRODUCTS;
let orders = FALLBACK_ORDERS;
let cart = []; // {id, qty}
let memory = { lastCategory: null, lastBudget: null, lastQuery: null, lastResults: [] };
let currentFilter = { category: "All", query: "", maxPrice: null };

const $ = (s) => document.querySelector(s);
const fmt = (n) => "Rs " + n.toLocaleString("en-PK");
const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

async function loadData() {
  try {
    const [p, o] = await Promise.all([
      fetch("data/products.json").then((r) => { if (!r.ok) throw new Error("products"); return r.json(); }),
      fetch("data/orders.json").then((r) => { if (!r.ok) throw new Error("orders"); return r.json(); }),
    ]);
    if (Array.isArray(p) && p.length) products = p;
    if (Array.isArray(o) && o.length) orders = o;
  } catch (e) { /* file:// blocks fetch — fallback data above is used */ }
  buildCategoryChips();
  renderGrid(products, "All products");
  updateCartUI();
}

function buildCategoryChips() {
  const cats = ["All", ...new Set(products.map((p) => p.category))];
  $("#categoryChips").innerHTML = cats.map((c) =>
    `<button class="chip ${currentFilter.category === c ? "active" : ""}" data-cat="${esc(c)}">${esc(c)}</button>`).join("");
  document.querySelectorAll("#categoryChips .chip").forEach((b) =>
    b.addEventListener("click", () => { currentFilter.category = b.dataset.cat; currentFilter.query = ""; currentFilter.maxPrice = null; $("#searchInput").value = ""; buildCategoryChips(); applyFilter(); }));
}

function applyFilter() {
  let list = products;
  if (currentFilter.category !== "All") list = list.filter((p) => p.category === currentFilter.category);
  if (currentFilter.query) {
    const q = currentFilter.query.toLowerCase();
    list = list.filter((p) => (p.name + " " + p.category + " " + p.description).toLowerCase().includes(q));
  }
  if (currentFilter.maxPrice) list = list.filter((p) => p.price <= currentFilter.maxPrice);
  const label = [currentFilter.category !== "All" ? currentFilter.category : "All products",
    currentFilter.query ? `matching “${currentFilter.query}”` : "",
    currentFilter.maxPrice ? `under ${fmt(currentFilter.maxPrice)}` : ""].filter(Boolean).join(" · ");
  renderGrid(list, label);
  return list;
}

function renderGrid(list, label) {
  $("#gridTitle").textContent = label;
  $("#resultCount").textContent = list.length + (list.length === 1 ? " product" : " products");
  $("#grid").innerHTML = list.length ? list.map((p) => `
    <article class="card">
      <div class="card-top"><span class="tag">${esc(p.tag || p.category)}</span><span class="rating">★ ${p.rating}</span></div>
      <h3>${esc(p.name)}</h3>
      <p class="cat">${esc(p.category)} · ${p.id}</p>
      <p class="desc">${esc(p.description)}</p>
      <div class="price-row"><strong>${fmt(p.price)}</strong><span class="${p.inStock ? "in" : "out"}">${p.inStock ? "In stock" : "Out of stock"}</span></div>
      <div class="card-actions">
        <button class="btn small" ${p.inStock ? "" : "disabled"} onclick="addToCart('${p.id}')">Add to cart</button>
        <button class="btn small ghost" onclick="askAbout('${p.id}')">Ask about this</button>
      </div>
    </article>`).join("")
    : `<p class="empty">No products match that. Try a different category, a higher budget, or ask ShopBot for a recommendation.</p>`;
}

function addToCart(id) {
  const item = cart.find((i) => i.id === id);
  if (item) item.qty += 1; else cart.push({ id, qty: 1 });
  const p = products.find((x) => x.id === id);
  addMessage("bot", `${esc(p.name)} added to your cart (${fmt(p.price)}). Your cart total is now ${fmt(cartTotal())}. Type “show cart” to review it, or “checkout” for next steps.`);
  updateCartUI();
}
function cartTotal() { return cart.reduce((s, i) => s + (products.find((p) => p.id === i.id)?.price || 0) * i.qty, 0); }
function updateCartUI() {
  const n = cart.reduce((s, i) => s + i.qty, 0);
  $("#cartCount").textContent = n;
  $("#cartSummary").innerHTML = cart.length ? cart.map((i) => {
    const p = products.find((x) => x.id === i.id);
    return `<div class="cart-line"><span>${esc(p.name)} × ${i.qty}</span><span>${fmt(p.price * i.qty)}</span></div>`;
  }).join("") + `<div class="cart-line total"><span>Total</span><span>${fmt(cartTotal())}</span></div>`
  : `<p class="muted">Your cart is empty. Ask for shoes, electronics, or anything under a budget, then add a favourite.</p>`;
}
function cartText() {
  if (!cart.length) return "Your cart is empty right now. Ask me for recommendations — for example, “shoes under 5000” — and tap “Add to cart” on anything you like.";
  const lines = cart.map((i) => { const p = products.find((x) => x.id === i.id); return `• ${p.name} × ${i.qty} — ${fmt(p.price * i.qty)}`; });
  return `Your cart:\n${lines.join("\n")}\nTotal: ${fmt(cartTotal())}\nType “checkout” to continue (this demo does not take real payment).`;
}

function addMessage(role, html) {
  const div = document.createElement("div");
  div.className = "msg " + role;
  div.innerHTML = role === "bot" ? html : esc(html);
  $("#messages").appendChild(div);
  $("#messages").scrollTop = $("#messages").scrollHeight;
}
function showTyping() {
  const div = document.createElement("div");
  div.className = "msg bot typing"; div.id = "typing";
  div.innerHTML = `<span></span><span></span><span></span>`;
  $("#messages").appendChild(div);
  $("#messages").scrollTop = $("#messages").scrollHeight;
}
function hideTyping() { document.getElementById("typing")?.remove(); }

function parseBudget(text) {
  const m = text.match(/(?:under|below|less than|upto|up to|budget(?: of)?|max(?:imum)?)\s*(?:rs\.?|pkr)?\s*([\d,]+)/);
  if (!m) return null;
  const n = parseInt(m[1].replace(/,/g, ""), 10);
  return Number.isFinite(n) && n > 0 ? n : null;
}
const CATEGORY_WORDS = [
  ["Footwear", ["shoe", "shoes", "sneaker", "sneakers", "loafer", "loafers", "footwear", "joggers"]],
  ["Clothing", ["shirt", "kurta", "lawn", "suit", "jeans", "hoodie", "shawl", "clothes", "clothing", "t-shirt", "tshirt", "dress"]],
  ["Electronics", ["earbud", "earbuds", "speaker", "smartwatch", "watch", "power bank", "electronics", "gadget"]],
  ["Accessories", ["backpack", "bag", "accessories"]],
  ["Home & Kitchen", ["dinner", "cookware", "lamp", "bedsheet", "kitchen", "home"]],
  ["Beauty", ["serum", "lipstick", "beauty", "skincare", "makeup"]],
  ["Sports", ["dumbbell", "yoga", "cricket", "bat", "sports", "gym", "workout"]],
];
function detectCategory(text) {
  for (const [cat, words] of CATEGORY_WORDS) if (words.some((w) => text.includes(w))) return cat;
  return null;
}

function handleMessage(raw) {
  const text = raw.trim();
  if (!text) return;
  addMessage("user", text);
  $("#chatInput").value = "";
  showTyping();
  setTimeout(() => {
    hideTyping();
    const r = reply(text.toLowerCase(), text); if (r !== null) addMessage("bot", r);
  }, 550);
}

function reply(lower, original) {
  // Order lookup — highest priority so "ORD-1002" is never treated as a product search
  const orderMatch = original.toUpperCase().match(/ORD[-\s]?(\d+)/);
  if (orderMatch || lower.includes("order status") || lower.includes("track my order") || lower.includes("where is my order") || lower.includes("my order")) {
    if (orderMatch) {
      const id = "ORD-" + orderMatch[1];
      const o = orders.find((x) => x.id === id);
      if (!o) return `I could not find order <b>${esc(id)}</b>. Try one of the demo orders: <b>ORD-1001</b>, <b>ORD-1002</b>, <b>ORD-1003</b>, <b>ORD-1004</b> or <b>ORD-1005</b>.`;
      const items = o.items.map((i) => `• ${esc(i.name)} × ${i.qty} — ${fmt(i.price * i.qty)}`).join("<br>");
      return `<b>Order ${esc(o.id)}</b> — <b>${esc(o.status)}</b><br>${items}<br>Total: <b>${fmt(o.total)}</b><br>${esc(o.eta)}. ${esc(o.note)}`;
    }
    return `To check an order, type its order ID — for example, <b>“order status ORD-1002”</b>. Demo orders: ORD-1001 (Delivered), ORD-1002 (Shipped), ORD-1003 (Processing), ORD-1004 (Out for delivery), ORD-1005 (Delivered).`;
  }
  if (lower.includes("show cart") || lower === "cart" || lower.includes("my cart")) return cartText().replace(/\n/g, "<br>");
  if (lower.includes("checkout")) return cart.length
    ? `Checkout (demo): your total is <b>${fmt(cartTotal())}</b>. In a real store this would ask for your address and Cash on Delivery or card payment. This demo takes no payment and saves nothing — type “clear cart” to start again.`
    : `Your cart is empty, so there is nothing to check out yet. Ask for a recommendation first.`;
  if (lower.includes("clear cart")) { cart = []; updateCartUI(); return "Cart cleared. What would you like to look for next?"; }
  if (/\b(hello|hi|hey|salam)\b/.test(lower) || lower.includes("assalam")) return `Hello! I am ShopBot. I can search products, recommend by budget or category, help with your cart, and check order status. Try: <b>“shoes under 5000”</b>, <b>“show electronics”</b>, or <b>“order status ORD-1002”</b>.`;
  if (lower.includes("delivery") || lower.includes("shipping")) return "Delivery in Pakistan usually takes 2–5 working days and Cash on Delivery is available. This demo uses mock orders, so no real parcel is booked.";
  if (lower.includes("return") || lower.includes("refund")) return "In a real store, most unused items can be returned within 7 days. This demo has no real orders, so returns are just a mock answer — try “order status ORD-1001” to see a delivered order.";
  if (lower.includes("payment") || lower.includes("cash on delivery") || lower.includes("cod")) return "We support Cash on Delivery, debit/credit cards and bank transfer in a real store. This demo takes no payment at all.";
  if (lower.includes("help") || lower.includes("what can you do")) return `I can: (1) search products, (2) filter the grid by budget/category, (3) recommend items, (4) add items to your cart, and (5) look up mock orders. Try <b>“shoes under 5000”</b> or <b>“order status ORD-1003”</b>.`;

  // Add-to-cart phrasing: "add P11 to cart" or "add earbuds to cart"
  const addMatch = lower.match(/add\s+(.+?)\s+to cart/);
  if (addMatch) {
    const q = addMatch[1].trim();
    const p = products.find((x) => x.id.toLowerCase() === q) || products.find((x) => x.name.toLowerCase().includes(q));
    if (p && p.inStock) { addToCart(p.id); return null; } // addToCart already messaged; avoid double message
    if (p && !p.inStock) return `${esc(p.name)} is currently out of stock. Ask for a similar item and I will suggest alternatives.`;
    return `I could not find “${esc(q)}”. Try the product name from the grid, e.g. “add SoundPods Wireless Earbuds to cart”.`;
  }

  const budget = parseBudget(lower);
  const category = detectCategory(lower);
  const isFollowUpCheaper = lower.includes("cheaper") || lower.includes("lower budget") || lower.includes("less expensive");
  const isShowAll = lower.includes("show all") || lower.includes("reset") || lower === "all products";

  if (isShowAll) {
    currentFilter = { category: "All", query: "", maxPrice: null };
    memory = { lastCategory: null, lastBudget: null, lastQuery: null, lastResults: [] };
    $("#searchInput").value = ""; buildCategoryChips(); renderGrid(products, "All products");
    return "Showing all products again. What are you looking for?";
  }
  if (isFollowUpCheaper && memory.lastCategory) {
    const cap = memory.lastBudget ? Math.floor(memory.lastBudget * 0.7) : 5000;
    currentFilter = { category: memory.lastCategory, query: "", maxPrice: cap };
    const list = applyFilter(); memory.lastBudget = cap; memory.lastResults = list;
    return list.length ? `Here are cheaper ${esc(memory.lastCategory.toLowerCase())} options under <b>${fmt(cap)}</b> — I have updated the grid below.` : `Nothing cheaper in ${esc(memory.lastCategory)} under ${fmt(cap)}. Try a higher budget or another category.`;
  }

  if (budget || category || lower.includes("recommend") || lower.includes("suggest") || lower.includes("best") || lower.includes("cheap")) {
    const effCategory = category || null; // fresh recommendations do NOT inherit the last category; only follow-ups like "cheaper ones" use memory
    const effBudget = budget || null;
    currentFilter = { category: effCategory || "All", query: "", maxPrice: effBudget };
    const list = applyFilter();
    memory.lastCategory = effCategory || memory.lastCategory; memory.lastBudget = effBudget || memory.lastBudget; memory.lastResults = list;
    if (!list.length) return `No products found${effCategory ? ` in ${esc(effCategory)}` : ""}${effBudget ? ` under ${fmt(effBudget)}` : ""}. Try a higher budget or a different category.`;
    const top = [...list].sort((a, b) => b.rating - a.rating).slice(0, 3)
      .map((p) => `• <b>${esc(p.name)}</b> — ${fmt(p.price)} (${esc(p.category)}, ★ ${p.rating})`).join("<br>");
    return `I found <b>${list.length}</b> product${list.length === 1 ? "" : "s"}${effCategory ? ` in ${esc(effCategory)}` : ""}${effBudget ? ` under ${fmt(effBudget)}` : ""} and updated the grid below. Top picks:<br>${top}<br>Tap “Add to cart” on any item, or ask for a different budget.`;
  }

  // Generic search: treat the message as a product search
  const q = lower.replace(/^(show|find|search for|i want|i need|looking for)\s+/, "").trim();
  currentFilter = { category: category || "All", query: q, maxPrice: null };
  const list = applyFilter();
  memory.lastQuery = q; memory.lastResults = list;
  if (list.length) return `Here is what I found for “<b>${esc(q)}</b>” — <b>${list.length}</b> product${list.length === 1 ? "" : "s"} in the grid below. Tap “Add to cart” on anything you like, or refine it with a budget, e.g. “under 5000”.`;
  return `Sorry, I found nothing for “<b>${esc(q)}</b>”. Try a category like shoes, electronics or clothing, a budget like “under 5000”, or type “show all”.`;
}

function askAbout(id) {
  const p = products.find((x) => x.id === id);
  if (!p) return;
  $("#chatInput").value = p.name;
  handleMessage(p.name);
}

function sendFromInput() { handleMessage($("#chatInput").value); }

document.addEventListener("DOMContentLoaded", () => {
  loadData();
  $("#sendBtn").addEventListener("click", sendFromInput);
  $("#chatInput").addEventListener("keydown", (e) => { if (e.key === "Enter") sendFromInput(); });
  $("#searchInput").addEventListener("input", (e) => {
    currentFilter.query = e.target.value.trim(); currentFilter.category = currentFilter.category; applyFilter();
  });
  $("#clearFilters").addEventListener("click", () => {
    currentFilter = { category: "All", query: "", maxPrice: null };
    $("#searchInput").value = ""; buildCategoryChips(); renderGrid(products, "All products");
  });
  document.querySelectorAll(".suggestion").forEach((b) =>
    b.addEventListener("click", () => handleMessage(b.dataset.q)));
  // Greeting — note: reply() for greetings is text, so render directly (no double typing)
  addMessage("bot", `Hello! I am <b>ShopBot</b>, your shopping assistant. Ask me for products by category or budget, add things to your cart, or check a mock order. Try a suggestion below.`);
});
