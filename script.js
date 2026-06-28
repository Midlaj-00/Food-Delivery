/* ============================================
   FOODIE EXPRESS — Application Logic
   ============================================ */

// ============================================
// DATA STORE
// ============================================
const restaurants = [
  {
    id: 1,
    name: "Spice Garden",
    cuisines: ["North Indian", "Mughlai"],
    rating: 4.3,
    deliveryTime: "30-35 min",
    costForTwo: 450,
    image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=600&h=400&fit=crop",
    offer: "20% OFF up to ₹100",
    veg: false,
    menu: [
      { category: "Starters", items: [
        { id: 101, name: "Paneer Tikka", price: 249, veg: true, desc: "Marinated cottage cheese grilled to perfection in a tandoor with bell peppers and onions" },
        { id: 102, name: "Chicken Seekh Kebab", price: 279, veg: false, desc: "Minced chicken mixed with aromatic spices, shaped on skewers and grilled" },
        { id: 103, name: "Hara Bhara Kebab", price: 199, veg: true, desc: "Spinach and green pea patties with mild spices, pan-fried until golden" },
      ]},
      { category: "Main Course", items: [
        { id: 104, name: "Butter Chicken", price: 349, veg: false, desc: "Tender chicken in a rich, creamy tomato-based gravy with a hint of fenugreek" },
        { id: 105, name: "Dal Makhani", price: 249, veg: true, desc: "Slow-cooked black lentils simmered overnight with butter and cream" },
        { id: 106, name: "Mutton Rogan Josh", price: 429, veg: false, desc: "Kashmiri-style mutton curry with aromatic spices and a rich red gravy" },
        { id: 107, name: "Palak Paneer", price: 269, veg: true, desc: "Fresh cottage cheese cubes in a creamy spinach gravy with garlic and spices" },
      ]},
      { category: "Breads", items: [
        { id: 108, name: "Garlic Naan", price: 69, veg: true, desc: "Soft leavened bread topped with garlic and butter, baked in tandoor" },
        { id: 109, name: "Laccha Paratha", price: 59, veg: true, desc: "Layered whole wheat bread with a flaky, buttery texture" },
      ]},
      { category: "Desserts", items: [
        { id: 110, name: "Gulab Jamun", price: 129, veg: true, desc: "Soft milk-solid dumplings soaked in rose-flavored sugar syrup, served warm" },
      ]}
    ]
  },
  {
    id: 2,
    name: "Pizza Planet",
    cuisines: ["Italian", "Pizza"],
    rating: 4.5,
    deliveryTime: "25-30 min",
    costForTwo: 550,
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&h=400&fit=crop",
    offer: "Flat ₹75 OFF",
    veg: false,
    menu: [
      { category: "Pizzas", items: [
        { id: 201, name: "Margherita", price: 249, veg: true, desc: "Classic pizza with fresh mozzarella, tomato sauce, and fresh basil leaves" },
        { id: 202, name: "Pepperoni Feast", price: 399, veg: false, desc: "Loaded with spicy pepperoni, mozzarella cheese, and signature tomato sauce" },
        { id: 203, name: "Farmhouse", price: 349, veg: true, desc: "Bell peppers, mushrooms, onions, and olives on a cheesy base" },
        { id: 204, name: "BBQ Chicken", price: 449, veg: false, desc: "Grilled chicken, red onions, and green peppers with smoky BBQ sauce" },
      ]},
      { category: "Pasta", items: [
        { id: 205, name: "Alfredo Penne", price: 299, veg: true, desc: "Penne in a creamy white sauce with parmesan and herbs" },
        { id: 206, name: "Arrabbiata", price: 279, veg: true, desc: "Penne in a spicy tomato sauce with garlic and red chili flakes" },
      ]},
      { category: "Sides", items: [
        { id: 207, name: "Garlic Bread", price: 149, veg: true, desc: "Freshly baked bread with garlic butter and herbs, served with marinara dip" },
        { id: 208, name: "Cheesy Fries", price: 179, veg: true, desc: "Crispy golden fries topped with melted cheddar and mozzarella" },
      ]},
      { category: "Beverages", items: [
        { id: 209, name: "Iced Tea", price: 99, veg: true, desc: "Refreshing lemon iced tea served chilled with ice" },
        { id: 210, name: "Cold Coffee", price: 149, veg: true, desc: "Rich cold coffee blended with ice cream and topped with whipped cream" },
      ]}
    ]
  },
  {
    id: 3,
    name: "Dragon Wok",
    cuisines: ["Chinese", "Thai"],
    rating: 4.1,
    deliveryTime: "35-40 min",
    costForTwo: 500,
    image: "https://images.unsplash.com/photo-1563245372-f21724e3856d?w=600&h=400&fit=crop",
    offer: "30% OFF up to ₹150",
    veg: false,
    menu: [
      { category: "Starters", items: [
        { id: 301, name: "Spring Rolls", price: 199, veg: true, desc: "Crispy rolls stuffed with mixed vegetables and glass noodles" },
        { id: 302, name: "Chicken Dim Sum", price: 249, veg: false, desc: "Steamed dumplings filled with minced chicken and water chestnuts" },
        { id: 303, name: "Crispy Chilli Potatoes", price: 179, veg: true, desc: "Fried potato fingers tossed with bell peppers in a sweet-spicy sauce" },
      ]},
      { category: "Main Course", items: [
        { id: 304, name: "Kung Pao Chicken", price: 329, veg: false, desc: "Stir-fried chicken with peanuts, vegetables, and dried chillies in a tangy sauce" },
        { id: 305, name: "Pad Thai Noodles", price: 289, veg: true, desc: "Thai-style stir-fried rice noodles with tofu, bean sprouts, and tamarind sauce" },
        { id: 306, name: "Schezwan Fried Rice", price: 249, veg: true, desc: "Wok-tossed rice with vegetables in a fiery Schezwan sauce" },
        { id: 307, name: "Thai Green Curry", price: 349, veg: false, desc: "Creamy coconut curry with chicken, basil, and Thai green chilli paste" },
      ]},
      { category: "Soups", items: [
        { id: 308, name: "Hot & Sour Soup", price: 149, veg: true, desc: "Spicy and tangy soup with mushrooms, tofu, and bamboo shoots" },
        { id: 309, name: "Tom Yum Soup", price: 179, veg: false, desc: "Classic Thai soup with prawns, lemongrass, galangal, and lime" },
      ]},
      { category: "Desserts", items: [
        { id: 310, name: "Fried Ice Cream", price: 169, veg: true, desc: "Vanilla ice cream coated in crispy batter, drizzled with chocolate sauce" },
      ]}
    ]
  },
  {
    id: 4,
    name: "Burger Barn",
    cuisines: ["American", "Fast Food"],
    rating: 4.4,
    deliveryTime: "20-25 min",
    costForTwo: 400,
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&h=400&fit=crop",
    offer: "Buy 1 Get 1 FREE",
    veg: false,
    menu: [
      { category: "Burgers", items: [
        { id: 401, name: "Classic Smash Burger", price: 199, veg: false, desc: "Double smashed beef patty with American cheese, lettuce, and special sauce" },
        { id: 402, name: "Crispy Chicken Burger", price: 229, veg: false, desc: "Crunchy fried chicken fillet with coleslaw and spicy mayo" },
        { id: 403, name: "Veggie Supreme", price: 179, veg: true, desc: "Grilled veggie patty with avocado, lettuce, tomato, and chipotle sauce" },
        { id: 404, name: "BBQ Bacon Burger", price: 299, veg: false, desc: "Beef patty topped with crispy bacon, cheddar, and smoky BBQ sauce" },
      ]},
      { category: "Sides", items: [
        { id: 405, name: "Loaded Fries", price: 179, veg: true, desc: "Crispy fries topped with cheese sauce, jalapeños, and sour cream" },
        { id: 406, name: "Onion Rings", price: 149, veg: true, desc: "Thick-cut onion rings in a golden, crispy beer batter" },
        { id: 407, name: "Chicken Wings (6pc)", price: 249, veg: false, desc: "Tossed in your choice of Buffalo, BBQ, or Honey Garlic sauce" },
      ]},
      { category: "Shakes", items: [
        { id: 408, name: "Oreo Shake", price: 179, veg: true, desc: "Thick shake blended with Oreo cookies, vanilla ice cream, and milk" },
        { id: 409, name: "Nutella Shake", price: 199, veg: true, desc: "Creamy Nutella blended with ice cream, topped with whipped cream" },
      ]}
    ]
  },
  {
    id: 5,
    name: "Dosa Factory",
    cuisines: ["South Indian"],
    rating: 4.6,
    deliveryTime: "25-30 min",
    costForTwo: 300,
    image: "https://images.unsplash.com/photo-1630383249896-424e482df921?w=600&h=400&fit=crop",
    offer: "15% OFF on orders above ₹499",
    veg: true,
    menu: [
      { category: "Dosas", items: [
        { id: 501, name: "Masala Dosa", price: 129, veg: true, desc: "Crispy golden crepe stuffed with spiced potato filling, served with sambar and chutney" },
        { id: 502, name: "Mysore Masala Dosa", price: 149, veg: true, desc: "Dosa spread with spicy red chutney and filled with potato masala" },
        { id: 503, name: "Rava Dosa", price: 139, veg: true, desc: "Crispy semolina crepe with onions and coriander, served with coconut chutney" },
        { id: 504, name: "Paneer Dosa", price: 169, veg: true, desc: "Crispy dosa stuffed with spiced paneer bhurji filling" },
      ]},
      { category: "Idli & Vada", items: [
        { id: 505, name: "Idli Sambar (4pc)", price: 99, veg: true, desc: "Steamed rice cakes served with lentil sambar and fresh coconut chutney" },
        { id: 506, name: "Medu Vada (2pc)", price: 89, veg: true, desc: "Crispy urad dal fritters served with sambar and chutney" },
      ]},
      { category: "Rice", items: [
        { id: 507, name: "Curd Rice", price: 119, veg: true, desc: "Comforting rice mixed with yogurt, tempered with mustard seeds and curry leaves" },
        { id: 508, name: "Lemon Rice", price: 129, veg: true, desc: "Tangy rice flavored with lemon, peanuts, and a South Indian tempering" },
      ]},
      { category: "Beverages", items: [
        { id: 509, name: "Filter Coffee", price: 49, veg: true, desc: "Authentic South Indian filter coffee made with fresh decoction and boiled milk" },
        { id: 510, name: "Masala Chai", price: 39, veg: true, desc: "Strong tea brewed with aromatic whole spices and fresh ginger" },
      ]}
    ]
  },
  {
    id: 6,
    name: "Tandoori Nights",
    cuisines: ["North Indian", "Tandoor"],
    rating: 4.2,
    deliveryTime: "35-40 min",
    costForTwo: 600,
    image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=600&h=400&fit=crop",
    offer: "Flat ₹120 OFF",
    veg: false,
    menu: [
      { category: "Tandoor Specials", items: [
        { id: 601, name: "Tandoori Chicken (Half)", price: 329, veg: false, desc: "Half chicken marinated in yogurt and spices, roasted in a clay oven" },
        { id: 602, name: "Malai Tikka", price: 299, veg: false, desc: "Creamy, mildly spiced chicken tikka with a melt-in-mouth texture" },
        { id: 603, name: "Paneer Malai Tikka", price: 269, veg: true, desc: "Soft paneer marinated in cream and cheese, grilled with peppers" },
      ]},
      { category: "Curries", items: [
        { id: 604, name: "Chicken Tikka Masala", price: 369, veg: false, desc: "Grilled chicken tikka in a spiced tomato and onion masala gravy" },
        { id: 605, name: "Paneer Butter Masala", price: 289, veg: true, desc: "Soft paneer cubes in a smooth, buttery tomato gravy with kasuri methi" },
        { id: 606, name: "Kadhai Chicken", price: 349, veg: false, desc: "Chicken cooked with bell peppers and onions in a kadhai spice blend" },
      ]},
      { category: "Breads", items: [
        { id: 607, name: "Butter Naan", price: 59, veg: true, desc: "Soft leavened bread brushed with melted butter" },
        { id: 608, name: "Cheese Naan", price: 89, veg: true, desc: "Naan stuffed with mozzarella cheese, baked until bubbly" },
        { id: 609, name: "Tandoori Roti", price: 35, veg: true, desc: "Whole wheat bread baked in the tandoor, lightly charred" },
      ]},
      { category: "Beverages", items: [
        { id: 610, name: "Mango Lassi", price: 99, veg: true, desc: "Thick and creamy yogurt drink blended with Alphonso mango pulp" },
        { id: 611, name: "Chaas / Buttermilk", price: 59, veg: true, desc: "Refreshing spiced buttermilk with cumin and fresh herbs" },
      ]}
    ]
  },
  {
    id: 7,
    name: "Sushi Zen",
    cuisines: ["Japanese", "Sushi"],
    rating: 4.7,
    deliveryTime: "40-45 min",
    costForTwo: 900,
    image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=600&h=400&fit=crop",
    offer: "Free Miso Soup on ₹799+",
    veg: false,
    menu: [
      { category: "Sushi Rolls", items: [
        { id: 701, name: "California Roll (8pc)", price: 449, veg: false, desc: "Crab stick, avocado, and cucumber wrapped in sushi rice and nori" },
        { id: 702, name: "Spicy Tuna Roll (8pc)", price: 529, veg: false, desc: "Fresh tuna mixed with spicy mayo, wrapped in rice and topped with sesame" },
        { id: 703, name: "Avocado Roll (6pc)", price: 349, veg: true, desc: "Creamy avocado slices wrapped in seasoned sushi rice and nori" },
      ]},
      { category: "Nigiri & Sashimi", items: [
        { id: 704, name: "Salmon Nigiri (4pc)", price: 499, veg: false, desc: "Fresh salmon slices over hand-pressed sushi rice" },
        { id: 705, name: "Prawn Tempura Nigiri (4pc)", price: 479, veg: false, desc: "Crispy tempura prawn atop seasoned sushi rice with unagi sauce" },
      ]},
      { category: "Hot Dishes", items: [
        { id: 706, name: "Chicken Teriyaki", price: 399, veg: false, desc: "Grilled chicken glazed with sweet soy teriyaki sauce, served with steamed rice" },
        { id: 707, name: "Vegetable Tempura", price: 299, veg: true, desc: "Assorted vegetables in a light, crispy batter served with tentsuyu dipping sauce" },
        { id: 708, name: "Ramen Noodle Bowl", price: 449, veg: false, desc: "Rich tonkotsu broth with ramen noodles, chashu pork, egg, and nori" },
      ]},
      { category: "Soups & Sides", items: [
        { id: 709, name: "Miso Soup", price: 129, veg: true, desc: "Traditional Japanese soup with tofu, wakame seaweed, and green onions" },
        { id: 710, name: "Edamame", price: 149, veg: true, desc: "Steamed young soybeans lightly salted and sprinkled with sea salt" },
      ]}
    ]
  },
  {
    id: 8,
    name: "The Biryani Bowl",
    cuisines: ["Biryani", "Hyderabadi"],
    rating: 4.5,
    deliveryTime: "30-35 min",
    costForTwo: 500,
    image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=600&h=400&fit=crop",
    offer: "25% OFF up to ₹125",
    veg: false,
    menu: [
      { category: "Biryani", items: [
        { id: 801, name: "Hyderabadi Chicken Biryani", price: 299, veg: false, desc: "Fragrant basmati rice layered with spiced chicken, cooked dum-style with saffron" },
        { id: 802, name: "Mutton Biryani", price: 399, veg: false, desc: "Tender mutton pieces with aromatic rice, slow-cooked in a sealed pot" },
        { id: 803, name: "Veg Dum Biryani", price: 229, veg: true, desc: "Mixed vegetables and paneer layered with basmati rice, mint, and fried onions" },
        { id: 804, name: "Egg Biryani", price: 249, veg: false, desc: "Spiced biryani rice with boiled eggs marinated in a flavorful masala" },
      ]},
      { category: "Kebabs", items: [
        { id: 805, name: "Chicken 65", price: 229, veg: false, desc: "Crispy, spicy deep-fried chicken with curry leaves and red chillies" },
        { id: 806, name: "Mutton Seekh Kebab", price: 279, veg: false, desc: "Minced mutton kebabs grilled over charcoal with aromatic spices" },
      ]},
      { category: "Sides", items: [
        { id: 807, name: "Mirchi Ka Salan", price: 129, veg: true, desc: "Hyderabadi chilli curry in a peanut and sesame seed-based gravy" },
        { id: 808, name: "Raita", price: 59, veg: true, desc: "Cool yogurt with cucumber, onion, and a hint of cumin" },
      ]},
      { category: "Desserts", items: [
        { id: 809, name: "Double Ka Meetha", price: 139, veg: true, desc: "Hyderabadi bread pudding soaked in saffron-infused milk, topped with dry fruits" },
      ]}
    ]
  },
  {
    id: 9,
    name: "Sweet Tooth Bakery",
    cuisines: ["Desserts", "Bakery"],
    rating: 4.3,
    deliveryTime: "20-25 min",
    costForTwo: 350,
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&h=400&fit=crop",
    offer: "Free delivery on ₹199+",
    veg: true,
    menu: [
      { category: "Cakes", items: [
        { id: 901, name: "Belgian Chocolate Cake (Slice)", price: 199, veg: true, desc: "Rich, moist chocolate cake with layers of Belgian chocolate ganache" },
        { id: 902, name: "Red Velvet Cake (Slice)", price: 229, veg: true, desc: "Classic red velvet sponge with cream cheese frosting" },
        { id: 903, name: "Blueberry Cheesecake (Slice)", price: 269, veg: true, desc: "Creamy New York-style cheesecake topped with blueberry compote" },
      ]},
      { category: "Pastries", items: [
        { id: 904, name: "Chocolate Éclair", price: 129, veg: true, desc: "Choux pastry filled with vanilla cream and topped with chocolate glaze" },
        { id: 905, name: "Fruit Tart", price: 159, veg: true, desc: "Buttery tart shell with pastry cream and fresh seasonal fruits" },
      ]},
      { category: "Brownies & Cookies", items: [
        { id: 906, name: "Fudgy Brownie", price: 119, veg: true, desc: "Dense, fudgy chocolate brownie loaded with chocolate chips and walnuts" },
        { id: 907, name: "Chocolate Chip Cookies (3pc)", price: 99, veg: true, desc: "Soft-baked cookies with premium chocolate chips and a hint of vanilla" },
      ]},
      { category: "Beverages", items: [
        { id: 908, name: "Hot Chocolate", price: 149, veg: true, desc: "Thick, creamy hot chocolate made with real Belgian cocoa" },
        { id: 909, name: "Matcha Latte", price: 179, veg: true, desc: "Ceremonial-grade matcha whisked with steamed milk" },
        { id: 910, name: "Berry Smoothie", price: 169, veg: true, desc: "Blend of strawberries, blueberries, and yogurt with a drizzle of honey" },
      ]}
    ]
  },
  {
    id: 10,
    name: "Green Bowl",
    cuisines: ["Healthy", "Salads", "Bowls"],
    rating: 4.4,
    deliveryTime: "25-30 min",
    costForTwo: 500,
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&h=400&fit=crop",
    offer: "Flat ₹80 OFF",
    veg: false,
    menu: [
      { category: "Bowls", items: [
        { id: 1001, name: "Buddha Bowl", price: 329, veg: true, desc: "Quinoa, roasted sweet potato, chickpeas, avocado, and tahini dressing" },
        { id: 1002, name: "Teriyaki Chicken Bowl", price: 369, veg: false, desc: "Grilled teriyaki chicken with brown rice, edamame, and pickled ginger" },
        { id: 1003, name: "Poke Bowl", price: 449, veg: false, desc: "Fresh salmon cubes with sushi rice, mango, cucumber, and spicy mayo" },
        { id: 1004, name: "Mexican Bowl", price: 339, veg: true, desc: "Black beans, corn, avocado, salsa, and brown rice with lime crema" },
      ]},
      { category: "Salads", items: [
        { id: 1005, name: "Caesar Salad", price: 249, veg: false, desc: "Crisp romaine lettuce, grilled chicken, parmesan, croutons, and Caesar dressing" },
        { id: 1006, name: "Greek Salad", price: 229, veg: true, desc: "Fresh cucumbers, tomatoes, olives, red onion, and feta with oregano vinaigrette" },
        { id: 1007, name: "Asian Sesame Salad", price: 259, veg: true, desc: "Crunchy Asian greens with edamame, mandarin, and toasted sesame dressing" },
      ]},
      { category: "Smoothies", items: [
        { id: 1008, name: "Green Detox Smoothie", price: 179, veg: true, desc: "Spinach, banana, chia seeds, almond milk, and a squeeze of lime" },
        { id: 1009, name: "Protein Power Smoothie", price: 199, veg: true, desc: "Peanut butter, banana, oats, and almond milk blended to perfection" },
      ]},
      { category: "Wraps", items: [
        { id: 1010, name: "Falafel Wrap", price: 219, veg: true, desc: "Crispy falafel with hummus, fresh veggies, and garlic tahini sauce in a tortilla" },
        { id: 1011, name: "Grilled Chicken Wrap", price: 259, veg: false, desc: "Herb-marinated grilled chicken with mixed greens, cheese, and chipotle ranch" },
      ]}
    ]
  }
];

const cuisineFilters = [
  { name: "All", icon: "🍽️" },
  { name: "North Indian", icon: "🍛" },
  { name: "South Indian", icon: "🥘" },
  { name: "Chinese", icon: "🥡" },
  { name: "Italian", icon: "🍕" },
  { name: "Biryani", icon: "🍚" },
  { name: "Fast Food", icon: "🍔" },
  { name: "Japanese", icon: "🍣" },
  { name: "Desserts", icon: "🍰" },
  { name: "Healthy", icon: "🥗" },
];

// ============================================
// CART MANAGER
// ============================================
const CartManager = {
  _KEY: 'foodieExpress_cart',

  getCart() {
    try {
      const data = localStorage.getItem(this._KEY);
      return data ? JSON.parse(data) : { restaurantId: null, restaurantName: '', items: [] };
    } catch {
      return { restaurantId: null, restaurantName: '', items: [] };
    }
  },

  _save(cart) {
    localStorage.setItem(this._KEY, JSON.stringify(cart));
    this._notify();
  },

  addItem(restaurantId, restaurantName, item) {
    let cart = this.getCart();

    // If adding from a different restaurant, ask to clear
    if (cart.restaurantId && cart.restaurantId !== restaurantId && cart.items.length > 0) {
      const confirmed = confirm(
        `Your cart contains items from "${cart.restaurantName}".\nDo you want to clear the cart and add items from "${restaurantName}"?`
      );
      if (!confirmed) return false;
      cart = { restaurantId: null, restaurantName: '', items: [] };
    }

    cart.restaurantId = restaurantId;
    cart.restaurantName = restaurantName;

    const existing = cart.items.find(i => i.id === item.id);
    if (existing) {
      existing.qty += 1;
    } else {
      cart.items.push({ ...item, qty: 1 });
    }

    this._save(cart);
    return true;
  },

  updateQty(itemId, delta) {
    const cart = this.getCart();
    const item = cart.items.find(i => i.id === itemId);
    if (!item) return;

    item.qty += delta;
    if (item.qty <= 0) {
      cart.items = cart.items.filter(i => i.id !== itemId);
    }

    if (cart.items.length === 0) {
      cart.restaurantId = null;
      cart.restaurantName = '';
    }

    this._save(cart);
  },

  removeItem(itemId) {
    const cart = this.getCart();
    cart.items = cart.items.filter(i => i.id !== itemId);
    if (cart.items.length === 0) {
      cart.restaurantId = null;
      cart.restaurantName = '';
    }
    this._save(cart);
  },

  clear() {
    this._save({ restaurantId: null, restaurantName: '', items: [] });
  },

  getItemCount() {
    const cart = this.getCart();
    return cart.items.reduce((sum, i) => sum + i.qty, 0);
  },

  getItemQty(itemId) {
    const cart = this.getCart();
    const item = cart.items.find(i => i.id === itemId);
    return item ? item.qty : 0;
  },

  getSubtotal() {
    const cart = this.getCart();
    return cart.items.reduce((sum, i) => sum + i.price * i.qty, 0);
  },

  getDeliveryFee() {
    const subtotal = this.getSubtotal();
    if (subtotal === 0) return 0;
    return subtotal >= 499 ? 0 : 40;
  },

  getTax() {
    return Math.round(this.getSubtotal() * 0.05);
  },

  getTotal() {
    return this.getSubtotal() + this.getDeliveryFee() + this.getTax();
  },

  // Observer pattern for UI updates
  _listeners: [],

  onChange(fn) {
    this._listeners.push(fn);
  },

  _notify() {
    this._listeners.forEach(fn => fn());
  }
};

// ============================================
// ROUTER
// ============================================
const Router = {
  routes: {},

  register(path, handler) {
    this.routes[path] = handler;
  },

  navigate(hash) {
    window.location.hash = hash;
  },

  _getRoute() {
    const hash = window.location.hash || '#/';
    return hash;
  },

  init() {
    window.addEventListener('hashchange', () => this._handleRoute());
    this._handleRoute();
  },

  _handleRoute() {
    const hash = this._getRoute();

    // Hide all pages
    document.querySelectorAll('.page').forEach(p => {
      p.classList.remove('active');
    });

    // Match route
    if (hash.startsWith('#/restaurant/')) {
      const id = parseInt(hash.split('/')[2]);
      if (this.routes['#/restaurant/:id']) {
        this.routes['#/restaurant/:id'](id);
      }
    } else if (this.routes[hash]) {
      this.routes[hash]();
    } else {
      // Default to landing
      if (this.routes['#/']) this.routes['#/']();
    }

    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'instant' });
  }
};

// ============================================
// TOAST SYSTEM
// ============================================
const Toast = {
  container: null,

  init() {
    this.container = document.getElementById('toast-container');
  },

  show(message, type = 'success', duration = 2500) {
    const icons = { success: '✅', error: '❌', warning: '⚠️' };
    const toast = document.createElement('div');
    toast.className = `toast toast--${type}`;
    toast.innerHTML = `<span>${icons[type] || ''}</span> <span>${message}</span>`;
    this.container.appendChild(toast);

    setTimeout(() => {
      toast.classList.add('leaving');
      toast.addEventListener('animationend', () => toast.remove());
    }, duration);
  }
};

// ============================================
// APP INITIALIZATION
// ============================================
document.addEventListener('DOMContentLoaded', () => {
  Toast.init();
  initNavbar();
  initRouter();
  initCartListeners();
  initScrollReveal();
  initEventDelegation();
});

// ============================================
// NAVBAR
// ============================================
function initNavbar() {
  const navbar = document.getElementById('navbar');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 60) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // Mobile toggle
  const toggle = document.getElementById('mobile-toggle');
  if (toggle) {
    toggle.addEventListener('click', () => {
      const links = document.getElementById('navbar-links');
      links.classList.toggle('mobile-open');
    });
  }
}

// ============================================
// ROUTER SETUP
// ============================================
function initRouter() {
  Router.register('#/', () => {
    document.getElementById('page-landing').classList.add('active');
    renderFeaturedRestaurants();
  });

  Router.register('#/restaurants', () => {
    document.getElementById('page-restaurants').classList.add('active');
    renderAllRestaurants();
    renderFilterPills();
  });

  Router.register('#/restaurant/:id', (id) => {
    const restaurant = restaurants.find(r => r.id === id);
    if (restaurant) {
      document.getElementById('page-restaurant-detail').classList.add('active');
      renderRestaurantDetail(restaurant);
    } else {
      Router.navigate('#/restaurants');
    }
  });

  Router.init();
}

// ============================================
// RENDER FUNCTIONS
// ============================================
function renderFeaturedRestaurants() {
  const grid = document.getElementById('featured-grid');
  if (!grid) return;
  const featured = restaurants.slice(0, 4);
  grid.innerHTML = featured.map(r => createRestaurantCard(r)).join('');
}

function renderAllRestaurants(filter = 'All', searchTerm = '', sortBy = 'default') {
  const grid = document.getElementById('restaurants-grid');
  if (!grid) return;

  let filtered = [...restaurants];

  // Filter by cuisine
  if (filter && filter !== 'All') {
    filtered = filtered.filter(r => r.cuisines.some(c => c.toLowerCase().includes(filter.toLowerCase())));
  }

  // Search
  if (searchTerm) {
    const term = searchTerm.toLowerCase();
    filtered = filtered.filter(r =>
      r.name.toLowerCase().includes(term) ||
      r.cuisines.some(c => c.toLowerCase().includes(term))
    );
  }

  // Sort
  if (sortBy === 'rating') {
    filtered.sort((a, b) => b.rating - a.rating);
  } else if (sortBy === 'delivery') {
    filtered.sort((a, b) => parseInt(a.deliveryTime) - parseInt(b.deliveryTime));
  } else if (sortBy === 'cost-low') {
    filtered.sort((a, b) => a.costForTwo - b.costForTwo);
  } else if (sortBy === 'cost-high') {
    filtered.sort((a, b) => b.costForTwo - a.costForTwo);
  }

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div class="no-results" style="grid-column: 1 / -1;">
        <div class="no-results__icon">🔍</div>
        <p class="no-results__text">No restaurants found. Try a different search or filter.</p>
      </div>
    `;
  } else {
    grid.innerHTML = filtered.map(r => createRestaurantCard(r)).join('');
  }
}

function renderFilterPills() {
  const container = document.getElementById('filter-pills');
  if (!container) return;
  container.innerHTML = cuisineFilters.map((c, i) => `
    <button class="filter-pill ${i === 0 ? 'active' : ''}" data-filter="${c.name}">
      ${c.icon} ${c.name}
    </button>
  `).join('');
}

function createRestaurantCard(r) {
  return `
    <div class="restaurant-card" data-restaurant-id="${r.id}" role="button" tabindex="0" aria-label="View ${r.name}">
      <div class="restaurant-card__img-wrap">
        <img class="restaurant-card__img" src="${r.image}" alt="${r.name}" loading="lazy">
        <span class="restaurant-card__offer">${r.offer}</span>
      </div>
      <div class="restaurant-card__body">
        <div class="restaurant-card__header">
          <h3 class="restaurant-card__name">${r.name}</h3>
          <span class="restaurant-card__rating">⭐ ${r.rating}</span>
        </div>
        <p class="restaurant-card__cuisines">${r.cuisines.join(', ')}</p>
        <div class="restaurant-card__meta">
          <span class="restaurant-card__meta-item">🕒 ${r.deliveryTime}</span>
          <span class="restaurant-card__meta-item">₹${r.costForTwo} for two</span>
        </div>
      </div>
    </div>
  `;
}

function renderRestaurantDetail(r) {
  const container = document.getElementById('restaurant-detail-content');
  if (!container) return;

  let menuHTML = '';
  r.menu.forEach(cat => {
    menuHTML += `
      <div class="menu-category">
        <h3 class="menu-category__title">${cat.category}<span class="menu-category__count">(${cat.items.length})</span></h3>
        ${cat.items.map(item => {
          const qty = CartManager.getItemQty(item.id);
          return `
            <div class="menu-item" data-item-id="${item.id}">
              <div class="menu-item__info">
                <span class="menu-item__type menu-item__type--${item.veg ? 'veg' : 'non-veg'}"></span>
                <h4 class="menu-item__name">${item.name}</h4>
                <p class="menu-item__price">₹${item.price}</p>
                <p class="menu-item__desc">${item.desc}</p>
              </div>
              <div class="menu-item__action">
                ${qty > 0 ? `
                  <div class="qty-controls" data-item-id="${item.id}" data-restaurant-id="${r.id}" data-restaurant-name="${r.name}">
                    <button class="qty-btn" data-action="decrease" data-item-id="${item.id}">−</button>
                    <span class="qty-value">${qty}</span>
                    <button class="qty-btn" data-action="increase" data-item-id="${item.id}" data-price="${item.price}" data-name="${item.name}" data-veg="${item.veg}" data-desc="${item.desc}" data-restaurant-id="${r.id}" data-restaurant-name="${r.name}">+</button>
                  </div>
                ` : `
                  <button class="add-btn" data-action="add-to-cart" data-item-id="${item.id}" data-price="${item.price}" data-name="${item.name}" data-veg="${item.veg ? 'true' : 'false'}" data-desc="${item.desc}" data-restaurant-id="${r.id}" data-restaurant-name="${r.name}">ADD</button>
                `}
              </div>
            </div>
          `;
        }).join('')}
      </div>
    `;
  });

  container.innerHTML = `
    <div class="detail-page__hero">
      <div class="detail-page__banner">
        <img class="detail-page__banner-img" src="${r.image}" alt="${r.name}">
        <div class="detail-page__banner-overlay"></div>
      </div>
      <div class="container">
        <div class="detail-page__info">
          <div>
            <h1 class="detail-page__name">${r.name}</h1>
            <p class="detail-page__cuisines">${r.cuisines.join(', ')}</p>
            <div class="detail-page__meta">
              <span class="detail-page__meta-badge detail-page__meta-badge--rating">⭐ ${r.rating}</span>
              <span class="detail-page__meta-badge">🕒 ${r.deliveryTime}</span>
              <span class="detail-page__meta-badge">₹${r.costForTwo} for two</span>
            </div>
          </div>
          <button class="detail-page__back-btn" data-action="back-to-restaurants">← Back to Restaurants</button>
        </div>
      </div>
    </div>
    <div class="detail-page__menu">
      <div class="container">
        ${menuHTML}
      </div>
    </div>
  `;

  updateFloatingCart();
}

// ============================================
// CART UI
// ============================================
function initCartListeners() {
  CartManager.onChange(() => {
    updateCartBadge();
    updateFloatingCart();
    updateCartSidebar();
    refreshMenuItemButtons();
  });

  // Initial render
  updateCartBadge();
  updateFloatingCart();
}

function updateCartBadge() {
  const badge = document.getElementById('cart-badge');
  const count = CartManager.getItemCount();
  if (badge) {
    badge.textContent = count;
    badge.classList.toggle('show', count > 0);
  }
}

function updateFloatingCart() {
  const bar = document.getElementById('floating-cart');
  const cart = CartManager.getCart();
  const count = CartManager.getItemCount();

  if (bar) {
    bar.classList.toggle('show', count > 0);
    const info = bar.querySelector('.floating-cart__info');
    if (info) {
      info.innerHTML = `${count} item${count > 1 ? 's' : ''} &nbsp;|&nbsp; ₹${CartManager.getTotal()} <br><small>${cart.restaurantName}</small>`;
    }
  }
}

function updateCartSidebar() {
  const cart = CartManager.getCart();
  const itemsContainer = document.getElementById('cart-items');
  const emptyState = document.getElementById('cart-empty');
  const footer = document.getElementById('cart-footer');
  const restaurantInfo = document.getElementById('cart-restaurant-name');

  if (!itemsContainer) return;

  if (cart.items.length === 0) {
    itemsContainer.style.display = 'none';
    if (emptyState) emptyState.style.display = 'flex';
    if (footer) footer.style.display = 'none';
    if (restaurantInfo) restaurantInfo.style.display = 'none';
  } else {
    itemsContainer.style.display = 'block';
    if (emptyState) emptyState.style.display = 'none';
    if (footer) footer.style.display = 'block';
    if (restaurantInfo) {
      restaurantInfo.style.display = 'flex';
      restaurantInfo.innerHTML = `🏪 ${cart.restaurantName}`;
    }

    itemsContainer.innerHTML = cart.items.map(item => `
      <div class="cart-item" data-item-id="${item.id}">
        <div class="cart-item__info">
          <div class="cart-item__name">${item.name}</div>
          <div class="cart-item__price">₹${item.price} each</div>
        </div>
        <div class="cart-item__qty-controls">
          <button class="cart-item__qty-btn" data-action="cart-decrease" data-item-id="${item.id}">−</button>
          <span class="cart-item__qty-value">${item.qty}</span>
          <button class="cart-item__qty-btn" data-action="cart-increase" data-item-id="${item.id}">+</button>
        </div>
        <div class="cart-item__total">₹${item.price * item.qty}</div>
      </div>
    `).join('');

    // Update bill
    const subtotal = CartManager.getSubtotal();
    const delivery = CartManager.getDeliveryFee();
    const tax = CartManager.getTax();
    const total = CartManager.getTotal();

    document.getElementById('bill-subtotal').textContent = `₹${subtotal}`;
    document.getElementById('bill-delivery').textContent = delivery === 0 ? 'FREE' : `₹${delivery}`;
    document.getElementById('bill-tax').textContent = `₹${tax}`;
    document.getElementById('bill-total').textContent = `₹${total}`;
  }
}

function refreshMenuItemButtons() {
  // Re-render the menu item add/qty buttons based on current cart state
  document.querySelectorAll('.menu-item').forEach(menuItem => {
    const itemId = parseInt(menuItem.dataset.itemId);
    const qty = CartManager.getItemQty(itemId);
    const actionDiv = menuItem.querySelector('.menu-item__action');
    if (!actionDiv) return;

    const addBtn = actionDiv.querySelector('.add-btn');
    const qtyControls = actionDiv.querySelector('.qty-controls');

    if (qty > 0 && addBtn) {
      // Replace ADD button with qty controls
      const restaurantId = addBtn.dataset.restaurantId;
      const restaurantName = addBtn.dataset.restaurantName;
      const price = addBtn.dataset.price;
      const name = addBtn.dataset.name;
      const veg = addBtn.dataset.veg;
      const desc = addBtn.dataset.desc;
      actionDiv.innerHTML = `
        <div class="qty-controls" data-item-id="${itemId}">
          <button class="qty-btn" data-action="decrease" data-item-id="${itemId}">−</button>
          <span class="qty-value">${qty}</span>
          <button class="qty-btn" data-action="increase" data-item-id="${itemId}" data-price="${price}" data-name="${name}" data-veg="${veg}" data-desc="${desc}" data-restaurant-id="${restaurantId}" data-restaurant-name="${restaurantName}">+</button>
        </div>
      `;
    } else if (qty > 0 && qtyControls) {
      // Update qty value
      const qtySpan = qtyControls.querySelector('.qty-value');
      if (qtySpan) qtySpan.textContent = qty;
    } else if (qty === 0 && qtyControls) {
      // Replace qty controls with ADD button
      const increaseBtn = qtyControls.querySelector('[data-action="increase"]');
      if (increaseBtn) {
        actionDiv.innerHTML = `
          <button class="add-btn" data-action="add-to-cart" data-item-id="${itemId}" data-price="${increaseBtn.dataset.price}" data-name="${increaseBtn.dataset.name}" data-veg="${increaseBtn.dataset.veg}" data-desc="${increaseBtn.dataset.desc}" data-restaurant-id="${increaseBtn.dataset.restaurantId}" data-restaurant-name="${increaseBtn.dataset.restaurantName}">ADD</button>
        `;
      }
    }
  });
}

function openCartSidebar() {
  document.getElementById('cart-overlay').classList.add('open');
  document.getElementById('cart-sidebar').classList.add('open');
  document.body.style.overflow = 'hidden';
  updateCartSidebar();
}

function closeCartSidebar() {
  document.getElementById('cart-overlay').classList.remove('open');
  document.getElementById('cart-sidebar').classList.remove('open');
  document.body.style.overflow = '';
}

// ============================================
// EVENT DELEGATION
// ============================================
function initEventDelegation() {
  document.body.addEventListener('click', (e) => {
    const target = e.target;

    // --- Restaurant card click ---
    const card = target.closest('.restaurant-card');
    if (card && !target.closest('.add-btn') && !target.closest('.qty-controls')) {
      const id = parseInt(card.dataset.restaurantId);
      Router.navigate(`#/restaurant/${id}`);
      return;
    }

    // --- Add to cart ---
    if (target.closest('[data-action="add-to-cart"]')) {
      const btn = target.closest('[data-action="add-to-cart"]');
      const item = {
        id: parseInt(btn.dataset.itemId),
        name: btn.dataset.name,
        price: parseInt(btn.dataset.price),
        veg: btn.dataset.veg === 'true',
        desc: btn.dataset.desc
      };
      const restaurantId = parseInt(btn.dataset.restaurantId);
      const restaurantName = btn.dataset.restaurantName;

      const added = CartManager.addItem(restaurantId, restaurantName, item);
      if (added) {
        Toast.show(`${item.name} added to cart`, 'success');
      }
      return;
    }

    // --- Qty increase ---
    if (target.closest('[data-action="increase"]')) {
      const btn = target.closest('[data-action="increase"]');
      const itemId = parseInt(btn.dataset.itemId);
      const item = {
        id: itemId,
        name: btn.dataset.name,
        price: parseInt(btn.dataset.price),
        veg: btn.dataset.veg === 'true',
        desc: btn.dataset.desc
      };
      const restaurantId = parseInt(btn.dataset.restaurantId);
      const restaurantName = btn.dataset.restaurantName;
      CartManager.addItem(restaurantId, restaurantName, item);
      return;
    }

    // --- Qty decrease ---
    if (target.closest('[data-action="decrease"]')) {
      const btn = target.closest('[data-action="decrease"]');
      const itemId = parseInt(btn.dataset.itemId);
      CartManager.updateQty(itemId, -1);
      return;
    }

    // --- Cart sidebar qty controls ---
    if (target.closest('[data-action="cart-increase"]')) {
      const btn = target.closest('[data-action="cart-increase"]');
      const itemId = parseInt(btn.dataset.itemId);
      CartManager.updateQty(itemId, 1);
      return;
    }

    if (target.closest('[data-action="cart-decrease"]')) {
      const btn = target.closest('[data-action="cart-decrease"]');
      const itemId = parseInt(btn.dataset.itemId);
      CartManager.updateQty(itemId, -1);
      return;
    }

    // --- Order Now / Navigate to restaurants ---
    if (target.closest('[data-action="order-now"]')) {
      Router.navigate('#/restaurants');
      return;
    }

    // --- Back to restaurants ---
    if (target.closest('[data-action="back-to-restaurants"]')) {
      Router.navigate('#/restaurants');
      return;
    }

    // --- Navigate to landing ---
    if (target.closest('[data-action="go-home"]')) {
      Router.navigate('#/');
      return;
    }

    // --- Open cart sidebar ---
    if (target.closest('[data-action="open-cart"]')) {
      openCartSidebar();
      return;
    }

    // --- Close cart sidebar ---
    if (target.closest('[data-action="close-cart"]')) {
      closeCartSidebar();
      return;
    }

    // --- Cart overlay click (close) ---
    if (target.id === 'cart-overlay') {
      closeCartSidebar();
      return;
    }

    // --- Floating cart bar ---
    if (target.closest('.floating-cart__inner')) {
      openCartSidebar();
      return;
    }

    // --- Filter pills ---
    if (target.closest('.filter-pill')) {
      const pill = target.closest('.filter-pill');
      document.querySelectorAll('.filter-pill').forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      const filter = pill.dataset.filter;
      const searchTerm = document.getElementById('search-input')?.value || '';
      const sortBy = document.getElementById('sort-select')?.value || 'default';
      renderAllRestaurants(filter, searchTerm, sortBy);
      return;
    }

    // --- Place order ---
    if (target.closest('[data-action="place-order"]')) {
      if (CartManager.getItemCount() === 0) return;
      closeCartSidebar();
      showOrderSuccess();
      CartManager.clear();
      return;
    }

    // --- Close order success ---
    if (target.closest('[data-action="close-order-success"]')) {
      document.getElementById('order-success-overlay').classList.remove('open');
      return;
    }

    // --- Logo click → home ---
    if (target.closest('.navbar__logo')) {
      Router.navigate('#/');
      return;
    }
  });

  // --- Search input ---
  const searchInput = document.getElementById('search-input');
  if (searchInput) {
    let debounceTimer;
    searchInput.addEventListener('input', () => {
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(() => {
        const activePill = document.querySelector('.filter-pill.active');
        const filter = activePill ? activePill.dataset.filter : 'All';
        const sortBy = document.getElementById('sort-select')?.value || 'default';
        renderAllRestaurants(filter, searchInput.value, sortBy);
      }, 300);
    });
  }

  // --- Sort select ---
  const sortSelect = document.getElementById('sort-select');
  if (sortSelect) {
    sortSelect.addEventListener('change', () => {
      const activePill = document.querySelector('.filter-pill.active');
      const filter = activePill ? activePill.dataset.filter : 'All';
      const searchTerm = document.getElementById('search-input')?.value || '';
      renderAllRestaurants(filter, searchTerm, sortSelect.value);
    });
  }
}

// ============================================
// ORDER SUCCESS
// ============================================
function showOrderSuccess() {
  const overlay = document.getElementById('order-success-overlay');
  overlay.classList.add('open');
}

// ============================================
// SCROLL REVEAL (Intersection Observer)
// ============================================
function initScrollReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -60px 0px' });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}
