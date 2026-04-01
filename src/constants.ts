export interface CakeItem {
  id: number;
  name: string;
  category: string;
  price: string;
  description: string;
  image: string;
  flavors: string[];
  isSeasonal?: boolean;
}

export const CAKE_ITEMS: CakeItem[] = [
  // Cream Cakes
  {
    id: 1,
    name: "Pineapple Cake",
    category: "Cream Cake",
    price: "₹400 (1/2 kg)",
    description: "Classic pineapple cake with fresh pineapple chunks and whipped cream.",
    image: "/pineapple-cake.jpg",
    flavors: ["Pineapple"]
  },
  {
    id: 2,
    name: "Vanilla Cake",
    category: "Cream Cake",
    price: "₹400 (1/2 kg)",
    description: "Elegant vanilla sponge with smooth vanilla bean cream.",
    image: "/vanilla-cake.jpg",
    flavors: ["Vanilla"]
  },
  {
    id: 3,
    name: "Strawberry Cake",
    category: "Cream Cake",
    price: "₹400 (1/2 kg)",
    description: "Delicate strawberry flavored cream cake.",
    image: "/strawberry-cake.jpg",
    flavors: ["Strawberry"]
  },
  {
    id: 4,
    name: "Butterscotch Cake",
    category: "Cream Cake",
    price: "₹400 (1/2 kg)",
    description: "Crunchy butterscotch bits with caramel cream layers.",
    image: "/butterscotch-cake.jpg",
    flavors: ["Butterscotch"]
  },
  {
    id: 5,
    name: "Orange Cake",
    category: "Cream Cake",
    price: "₹450 (1/2 kg)",
    description: "Zesty orange flavored cream cake.",
    image: "/orange-cake.jpg",
    flavors: ["Orange"]
  },
  {
    id: 6,
    name: "Black Forest Cake",
    category: "Cream Cake",
    price: "₹400 (1/2 kg)",
    description: "Classic German chocolate cake with cherries and cream.",
    image: "/black-forest-cake.jpg",
    flavors: ["Black Forest"]
  },
  {
    id: 7,
    name: "White Forest Cake",
    category: "Cream Cake",
    price: "₹450 (1/2 kg)",
    description: "Vanilla version of the classic forest cake with white chocolate.",
    image: "/white-forest-cake.jpg",
    flavors: ["White Forest"]
  },
  {
    id: 8,
    name: "Mix Fruit Cake",
    category: "Cream Cake",
    price: "₹450 (1/2 kg)",
    description: "Loaded with a variety of fresh seasonal fruits.",
    image: "/mix-fruit-cake.jpg",
    flavors: ["Mix Fruit"]
  },
  {
    id: 9,
    name: "Chocolate Cake",
    category: "Cream Cake",
    price: "₹500 (1/2 kg)",
    description: "Rich chocolate sponge with decadent chocolate cream.",
    image: "/chocolate-cake.jpg",
    flavors: ["Chocolate"]
  },
  {
    id: 10,
    name: "Rasmalai Cake",
    category: "Cream Cake",
    price: "₹700 (1/2 kg)",
    description: "Fusion cake with the goodness of traditional Rasmalai.",
    image: "/rasmalai-cake.jpg",
    flavors: ["Rasmalai"]
  },
  {
    id: 11,
    name: "Rose Cake",
    category: "Cream Cake",
    price: "₹450 (1/2 kg)",
    description: "Fragrant rose flavored cream cake.",
    image: "/rose-cake.jpg",
    flavors: ["Rose"]
  },
  {
    id: 12,
    name: "Gulkand Cake",
    category: "Cream Cake",
    price: "₹450 (1/2 kg)",
    description: "Unique flavor of sweet rose petal preserve.",
    image: "/gulkand-cake.jpg",
    flavors: ["Gulkand"]
  },
  {
    id: 13,
    name: "Kitkat Cake",
    category: "Cream Cake",
    price: "₹700 (1/2 kg)",
    description: "Chocolate cake surrounded by Kitkat bars and topped with gems.",
    image: "/kitkat-cake.jpg",
    flavors: ["Kitkat"]
  },
  {
    id: 14,
    name: "Fresh Fruit Cake",
    category: "Cream Cake",
    price: "Market Price",
    description: "Premium cake with an abundance of fresh fruits. Price varies as per fruit.",
    image: "/fresh-fruit-cake.jpg",
    flavors: ["Fresh Fruit"]
  },
  {
    id: 15,
    name: "Paan Cake",
    category: "Cream Cake",
    price: "₹500 (1/2 kg)",
    description: "Refreshing betel leaf flavored fusion cake.",
    image: "/paan-cake.jpg",
    flavors: ["Paan"]
  },
  {
    id: 16,
    name: "Oreo Cake",
    category: "Cream Cake",
    price: "₹500 (1/2 kg)",
    description: "Cookies and cream delight with Oreo chunks.",
    image: "/oreo-cake.jpg",
    flavors: ["Oreo"]
  },
  {
    id: 17,
    name: "Chocolate Truffle Cake",
    category: "Cream Cake",
    price: "₹600 (1/2 kg)",
    description: "Dense, rich chocolate truffle for true chocolate lovers.",
    image: "/truffle-cake.jpg",
    flavors: ["Truffle"]
  },

  // Dry Cakes
  {
    id: 18,
    name: "Tuti-Fruti Cake",
    category: "Dry Cake",
    price: "₹250 (1/2 kg)",
    description: "Classic dry cake loaded with colorful tutti-fruti.",
    image: "/tuti-fruti-dry-cake.jpg",
    flavors: ["Tuti-Fruti"]
  },
  {
    id: 19,
    name: "Slice Cake",
    category: "Dry Cake",
    price: "₹140 per box",
    description: "Perfectly baked soft slice cake for your tea time.",
    image: "/slice-cake.jpg",
    flavors: ["Vanilla", "Marble"]
  },
  {
    id: 20,
    name: "Wheat Jaggery Cake",
    category: "Dry Cake",
    price: "₹300 (1/2 kg)",
    description: "Healthy and delicious cake made with whole wheat and jaggery.",
    image: "/wheat-jaggery-dry-cake.jpg",
    flavors: ["Wheat Jaggery"]
  },

  // Other Categories
  {
    id: 21,
    name: "Signature Jar Cakes",
    category: "Jar Cake",
    price: "₹100 - ₹150",
    description: "Delicious layers in a portable jar. Prices: Chocolate (₹150), Black Forest/Pineapple/Strawberry (₹120), Vanilla (₹100).",
    image: "/jar-cake.jpg",
    flavors: ["Chocolate", "Pineapple", "Strawberry", "Black Forest", "Vanilla"]
  },
  {
    id: 22,
    name: "Assorted Cupcakes",
    category: "Cupcake",
    price: "₹25 - ₹35 each",
    description: "Perfect little treats. Prices: Chocolate (₹35), Pineapple/Strawberry (₹30), Vanilla (₹25).",
    image: "/cupcake.jpg",
    flavors: ["Vanilla", "Chocolate", "Pineapple", "Strawberry"]
  },
  {
    id: 23,
    name: "Fresh Donuts",
    category: "Donuts",
    price: "₹40 each",
    description: "Soft and fluffy donuts with delicious glazes.",
    image: "/donuts.jpg",
    flavors: ["Classic Glazed"]
  },
  {
    id: 24,
    name: "Premium Chocolate Mithai",
    category: "Chocolate Mithai",
    price: "₹2,000 per kg",
    description: "Fusion sweets combining traditional flavors with premium chocolate. Any flavor, same rate.",
    image: "/mithai.jpg",
    flavors: ["Rose", "Gulkand", "Paan", "Rabdi", "Mawa", "Thandai", "Rajbhog"]
  },

  // Chocolate Bowls
  {
    id: 25,
    name: "Triple Chocolate Bowl",
    category: "Chocolate Bowl",
    price: "₹200",
    description: "A deep bowl of chocolate heaven with three types of chocolate layers.",
    image: "/triple-choc-bowl.jpg",
    flavors: ["Dark", "Milk", "White"]
  },
  {
    id: 26,
    name: "Strawberry Chocolate Bowl",
    category: "Chocolate Bowl",
    price: "₹190",
    description: "Fresh strawberries paired with rich chocolate. Note: This is a seasonal flavor and depends on the availability of fresh strawberries.",
    image: "/strawberry-choc-bowl.jpg",
    flavors: ["Fresh Strawberry", "Chocolate"],
    isSeasonal: true
  },
  {
    id: 27,
    name: "Oreo Chocolate Bowl",
    category: "Chocolate Bowl",
    price: "₹180",
    description: "Crunchy Oreo chunks layered with smooth chocolate cream.",
    image: "/oreo-choc-bowl.jpg",
    flavors: ["Oreo", "Chocolate"]
  },
  {
    id: 28,
    name: "Kit Kat Chocolate Bowl",
    category: "Chocolate Bowl",
    price: "₹170",
    description: "The classic snap of Kit Kat combined with our signature chocolate bowl.",
    image: "/kitkat-choc-bowl.jpg",
    flavors: ["Kit Kat", "Chocolate"]
  },
  {
    id: 29,
    name: "Plain Chocolate Bowl",
    category: "Chocolate Bowl",
    price: "₹150",
    description: "Simple, elegant, and purely chocolate for the true connoisseur.",
    image: "/plain-choc-bowl.jpg",
    flavors: ["Pure Chocolate"]
  }
];
