export interface MenuItem {
  name: string;
  description: string;
  price: string;
  tags?: ('V' | 'VE' | 'GF')[];
  image?: string;
}

export interface MenuCategory {
  name: string;
  items: MenuItem[];
}

export const menuData: MenuCategory[] = [
  {
    name: "Breakfast",
    items: [
      {
        name: "Sourdough Toast & Preserves",
        description: "Two thick slices of our own sourdough, salted butter, and whatever jam we made this week",
        price: "£4.50",
        tags: ["V"],
      },
      {
        name: "The Full Flour Jar",
        description: "The lot — free-range eggs your way, dry-cured bacon, roasted tomatoes, mushrooms, house beans and a slice of sourdough. You won't need lunch",
        price: "£12.50",
      },
      {
        name: "Shakshuka",
        description: "Eggs baked low and slow in a spiced tomato sauce, with crumbled feta and a warm flatbread to mop it all up. Sam's been making this one since day one",
        price: "£10.50",
        tags: ["V", "GF"],
      },
      {
        name: "Granola Bowl",
        description: "Made in-house — oats, seeds, a little honey, toasted until it smells right. Served with Greek yoghurt and whatever fruit is good that morning",
        price: "£7.50",
        tags: ["V"],
      },
      {
        name: "Avocado & Poached Eggs",
        description: "Smashed avocado on sourdough with two poached eggs. Chilli flakes, pumpkin seeds, a squeeze of lemon. Simple, but we do it properly",
        price: "£9.50",
        tags: ["V"],
      },
    ],
  },
  {
    name: "Light Bites",
    items: [
      {
        name: "Soup of the Day",
        description: "Changes every day depending on what came in. Always made from scratch, always served with proper crusty bread. Ask at the counter",
        price: "£6.50",
        tags: ["V", "GF"],
      },
      {
        name: "Halloumi & Grain Bowl",
        description: "Grilled halloumi, a mix of ancient grains, roasted veg, tahini dressing and a handful of pomegranate seeds. Filling without being heavy",
        price: "£11.00",
        tags: ["V"],
      },
      {
        name: "Smoked Salmon Tartine",
        description: "Open rye toast with cream cheese, capers, pickled red onion and a bit of dill. No fuss, just good things together",
        price: "£9.50",
      },
      {
        name: "Roasted Beetroot Salad",
        description: "Heritage beetroot from our usual farm in Hertfordshire, whipped goat's cheese, candied walnuts, a simple honey vinaigrette. One of the ones people quietly order every time",
        price: "£9.00",
        tags: ["V", "GF"],
      },
    ],
  },
  {
    name: "Sandwiches",
    items: [
      {
        name: "Croque Monsieur",
        description: "Gruyère, thick-cut ham, béchamel, brioche. Baked until it's golden and slightly too good. We make these to order",
        price: "£10.50",
      },
      {
        name: "Grilled Vegetable & Pesto",
        description: "Courgette, aubergine, peppers, rocket and a generous amount of basil pesto on ciabatta. Messier than it looks on the menu board",
        price: "£9.00",
        tags: ["VE"],
      },
      {
        name: "Chicken & Tarragon",
        description: "Free-range chicken, house tarragon mayo, baby gem, cornichons. On sourdough. The kind of sandwich you think about afterwards",
        price: "£10.00",
      },
      {
        name: "Falafel Wrap",
        description: "We make the falafel ourselves — herby, not dry. Hummus, pickled cabbage, tahini, fresh herbs. Wraps up tidily, which is more than we can say for most",
        price: "£9.00",
        tags: ["VE"],
      },
    ],
  },
  {
    name: "Sweet Things",
    items: [
      {
        name: "Cinnamon Roll",
        description: "Still warm from the oven, most days. Soft dough, proper cinnamon, cream cheese glaze that goes everywhere. We bake these at 7am and they don't always last until noon",
        price: "£4.00",
        tags: ["V"],
      },
      {
        name: "Flourless Chocolate Cake",
        description: "Dense, fudgy, and genuinely gluten-free — not an afterthought. A spoonful of crème fraîche on the side cuts through it nicely",
        price: "£5.50",
        tags: ["V", "GF"],
      },
      {
        name: "Lemon & Poppy Seed Loaf",
        description: "Light, zingy, with a thin lemon glaze that sets just enough. One of the simpler things we bake and one of the ones that disappears fastest",
        price: "£4.00",
        tags: ["V"],
      },
      {
        name: "Seasonal Fruit Crumble",
        description: "Whatever fruit is best this week, under an oat crumble, served warm with vanilla custard poured at the table. Changes often — worth asking what's in it today",
        price: "£6.00",
        tags: ["V"],
      },
    ],
  },
  {
    name: "Drinks",
    items: [
      {
        name: "Flat White",
        description: "Double shot, velvety microfoam. We use Square Mile's house roast — it's been the same one since we opened and we're not changing it",
        price: "£3.50",
        tags: ["V"],
      },
      {
        name: "Matcha Latte",
        description: "Ceremonial-grade matcha whisked properly, with oat milk and just a little honey. Not sweet, just balanced",
        price: "£4.00",
        tags: ["VE"],
      },
      {
        name: "Chai Latte",
        description: "We blend our own spice mix — cardamom, ginger, clove, a bit of pepper. Steeped in whole milk, finished with cinnamon. It's a proper one",
        price: "£3.80",
        tags: ["V"],
      },
      {
        name: "Fresh Orange Juice",
        description: "Pressed when you order it. Blood oranges when they're in season, regular when they're not. Always fresh, never from a carton",
        price: "£4.50",
        tags: ["VE", "GF"],
      },
      {
        name: "Hot Chocolate",
        description: "Valrhona dark chocolate melted into steamed milk. Thick enough to be a treat, not so thick it feels like a mistake. Marshmallows on top if you want them",
        price: "£4.00",
        tags: ["V"],
      },
      {
        name: "Lemonade",
        description: "Made in-house with fresh lemons, mint and a dash of elderflower cordial. Cold, sharp, and properly refreshing on a warm day on the Hill",
        price: "£3.50",
        tags: ["VE", "GF"],
      },
    ],
  },
];

export const featuredItems = [
  {
    name: "Cinnamon Roll",
    description: "Still warm, cream cheese glaze, gone by noon most days. Come early.",
    image: "https://cdn.pixabay.com/photo/2022/11/10/17/08/cinnamon-rolls-7583282_1280.jpg",
  },
  {
    name: "The Full Flour Jar",
    description: "Everything on one plate. Free-range eggs, bacon, the works. Our most ordered breakfast by a mile.",
    image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?w=600&h=400&fit=crop",
  },
  {
    name: "Flat White",
    description: "Square Mile roast, double shot, made properly. Same recipe since we opened.",
    image: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=600&h=400&fit=crop",
  },
  {
    name: "Shakshuka",
    description: "Baked eggs, spiced tomato sauce, crumbled feta. Sam's been making this one since before we had a name.",
    image: "https://images.unsplash.com/photo-1590412200988-a436970781fa?w=600&h=400&fit=crop",
  },
];

export const teamMembers = [
{
  name: "Ruth Hargreaves",
  role: "Head Baker & Co-founder",
  bio: "Mum. Started baking for the family, ended up baking for the neighbourhood. She's in at 5:30am most days and will absolutely judge your sourdough if you let her.",
image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=300&h=300&fit=crop&crop=face",},
  {
    name: "Sam Okonkwo",
    role: "Head Chef",
    bio: "Grew up between Lagos and London, and it shows in how he cooks. His shakshuka has its own fan club. He also makes the soup of the day, which people ask about before they've even sat down.",
image: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=300&h=300&fit=crop&crop=face",  },
  {
    name: "Lily Hargreaves",
    role: "Front of House",
    bio: "Knows everyone by name, knows most people's orders before they reach the counter. The reason first-time visitors feel like regulars.",
  image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&h=300&fit=crop&crop=face",
  },
];

export const openingHours = [
  { day: "Monday – Friday", hours: "7:30 AM – 5:00 PM" },
  { day: "Saturday", hours: "8:00 AM – 6:00 PM" },
  { day: "Sunday", hours: "9:00 AM – 4:00 PM" },
];