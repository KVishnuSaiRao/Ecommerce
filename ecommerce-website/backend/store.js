const DISCOUNT_N = 3;
const DISCOUNT_PERCENTAGE = 0.10; 

const products = [
  {
    "id": "1",
    "name": "Nike Air Max",
    "image": "https://static.nike.com/a/images/t_web_pdp_936_v2/f_auto/be262bc4-5978-4534-9d02-0266bf5907bf/WMNS+AIR+MAX+PLUS.png",
    "category": "Wearables",
    "price": 8999,
    "rating": 4.5,
    "description": "Comfortable running shoes with cushioned support.",
    "brand": "Nike",
    "reviews": 1523,
    "stock": 42,
    "discount": 10,
    "colors": ["Black", "White"],
    "info": {
      "color": "Black",
      "weight": "850g",
      "guarantee": "6 months",
      "warranty": "1 year",
      "return": "10 days easy return"
    },
    "comments": [
      { "username": "Rajesh", "rating": 5, "comment": "Super comfortable and stylish!" },
      { "username": "Priya", "rating": 4, "comment": "Good cushioning but a bit pricey." },
      { "username": "Kiran", "rating": 5, "comment": "Perfect for running, loved it." }
    ]
  },

  {
    "id": "2",
    "name": "iPhone 15",
    "image": "https://www.apple.com/newsroom/images/2023/09/apple-debuts-iphone-15-and-iphone-15-plus/article/Apple-iPhone-15-lineup-color-lineup-geo-230912_big.jpg.large_2x.jpg",
    "category": "Accessories",
    "price": 79999,
    "rating": 4.8,
    "description": "Latest Apple smartphone with powerful performance.",
    "brand": "Apple",
    "reviews": 3211,
    "stock": 18,
    "discount": 5,
    "colors": ["Blue", "Black", "Pink"],
    "info": {
      "color": "Blue",
      "weight": "171g",
      "guarantee": "None",
      "warranty": "1 year Apple warranty",
      "return": "7 days replacement"
    },
    "comments": [
      { "username": "Akash", "rating": 5, "comment": "Camera quality is top-level!" },
      { "username": "Meera", "rating": 4, "comment": "Super smooth but expensive." },
      { "username": "Karthik", "rating": 5, "comment": "Performance is unbeatable." },
      { "username": "Aditi", "rating": 5, "comment": "Premium feel, loved the color." }
    ]
  },

  {
    "id": "3",
    "name": "Sony WH-1000XM5",
    "image": "https://images-cdn.ubuy.co.in/652127b10b0a4502220f9985-sony-wh-1000xm5-headphones-wireless.jpg",
    "category": "Accessories",
    "price": 29999,
    "rating": 4.7,
    "description": "Industry-leading noise cancellation with premium comfort.",
    "brand": "Sony",
    "reviews": 842,
    "stock": 33,
    "discount": 8,
    "colors": ["Black", "Silver"],
    "info": {
      "color": "Silver",
      "weight": "250g",
      "guarantee": "6 months",
      "warranty": "1 year",
      "return": "7 days return"
    },
    "comments": [
      { "username": "Shreya", "rating": 5, "comment": "Noise cancellation is insane!" },
      { "username": "Arvind", "rating": 4, "comment": "Very comfortable for long use." },
      { "username": "Deepak", "rating": 5, "comment": "Bass is perfect." }
    ]
  },

  {
    "id": "4",
    "name": "Samsung Galaxy Watch 6",
    "image": "https://images.samsung.com/in/galaxy-watch6/feature/galaxy-watch6-safety-mo.jpg",
    "category": "Wearables",
    "price": 23999,
    "rating": 4.4,
    "description": "Advanced smartwatch with fitness and health tracking.",
    "brand": "Samsung",
    "reviews": 1260,
    "stock": 54,
    "discount": 12,
    "colors": ["Black", "Grey"],
    "info": {
      "color": "Black",
      "weight": "59g",
      "guarantee": "6 months",
      "warranty": "1 year Samsung warranty",
      "return": "7 days replacement"
    },
    "comments": [
      { "username": "Rahul", "rating": 5, "comment": "Tracking is very accurate." },
      { "username": "Kavya", "rating": 4, "comment": "Display is crisp and bright." }
    ]
  },

  {
    "id": "5",
    "name": "ASUS ROG Strix Laptop",
    "image": "https://dlcdnwebimgs.asus.com/files/media/71a33ba1-1be2-44c1-9541-70b4c800abf8/v1/images/Strix_G16_KV_16x9.webp",
    "category": "Accessories",
    "price": 124999,
    "rating": 4.6,
    "description": "High-performance gaming laptop for professionals.",
    "brand": "ASUS",
    "reviews": 740,
    "stock": 12,
    "discount": 6,
    "colors": ["Black"],
    "info": {
      "color": "Black",
      "weight": "2.3kg",
      "guarantee": "None",
      "warranty": "1 year",
      "return": "Replacement only"
    },
    "comments": [
      { "username": "Harsh", "rating": 5, "comment": "Runs all games smoothly!" },
      { "username": "Sneha", "rating": 4, "comment": "RGB looks awesome." },
      { "username": "Varun", "rating": 5, "comment": "Great cooling system." }
    ]
  },

  {
    "id": "6",
    "name": "Puma Sports T-shirt",
    "image": "https://cdn02.outlet46.de/item/images/215018/full/3erPack-656578-xx-Deal.jpg",
    "category": "Clothing",
    "price": 1299,
    "rating": 1.2,
    "description": "Breathable lightweight T-shirt for workouts.",
    "brand": "Puma",
    "reviews": 980,
    "stock": 88,
    "discount": 15,
    "colors": ["Red", "Black"],
    "info": {
      "color": "Red",
      "weight": "200g",
      "guarantee": "No guarantee",
      "warranty": "6 months",
      "return": "15 days return"
    },
    "comments": [
      { "username": "Sandeep", "rating": 4, "comment": "Fabric is super soft." },
      { "username": "Haritha", "rating": 5, "comment": "Perfect for gym!" }
    ]
  },

  {
    "id": "7",
    "name": "Wildcraft Backpack 35L",
    "image": "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    "category": "Accessories",
    "price": 2499,
    "rating": 4.3,
    "description": "Durable and spacious backpack for travel and college.",
    "brand": "Wildcraft",
    "reviews": 610,
    "stock": 73,
    "discount": 10,
    "colors": ["Grey", "Blue"],
    "info": {
      "color": "Grey",
      "weight": "780g",
      "guarantee": "6 months",
      "warranty": "1 year",
      "return": "10 days return"
    },
    "comments": [
      { "username": "Aditya", "rating": 5, "comment": "Very durable and strong." },
      { "username": "Nisha", "rating": 4, "comment": "Spacious and comfortable." },
      { "username": "Prem", "rating": 5, "comment": "Zippers are of good quality." }
    ]
  },

  {
    "id": "8",
    "name": "Boat Airdopes 141",
    "image": "https://m.media-amazon.com/images/I/71RFdy6y6LL.jpg",
    "category": "Accessories",
    "price": 1499,
    "rating": 3.1,
    "description": "Wireless earbuds with long battery life and fast charging.",
    "brand": "Boat",
    "reviews": 1900,
    "stock": 65,
    "discount": 18,
    "colors": ["White", "Black"],
    "info": {
      "color": "White",
      "weight": "60g",
      "guarantee": "3 months",
      "warranty": "1 year",
      "return": "7 days replacement"
    },
    "comments": [
      { "username": "Vivek", "rating": 4, "comment": "Battery lasts very long." },
      { "username": "Tanisha", "rating": 5, "comment": "Bass is great for the price" }
    ]
  },

  {
    "id": "9",
    "name": "Canon EOS 1500D",
    "image": "https://m.media-amazon.com/images/I/914hFeTU2-L.jpg",
    "category": "Accessories",
    "price": 36999,
    "rating": 4.5,
    "description": "Perfect DSLR camera for beginners and content creators.",
    "brand": "Canon",
    "reviews": 2200,
    "stock": 23,
    "discount": 7,
    "colors": ["Black"],
    "info": {
      "color": "Black",
      "weight": "475g",
      "guarantee": "None",
      "warranty": "2 years",
      "return": "7 days return"
    },
    "comments": [
      { "username": "Ishaan", "rating": 5, "comment": "Amazing photo quality!" },
      { "username": "Swati", "rating": 4, "comment": "Great for beginners." },
      { "username": "Vikram", "rating": 5, "comment": "Auto-focus works really well." }
    ]
  },

  {
    "id": "10",
    "name": "Wooden Study Table",
    "image": "https://images.unsplash.com/photo-1555041469-a586c61ea9bc",
    "category": "Furniture",
    "price": 4999,
    "rating": 4.2,
    "description": "Premium wooden study table with smooth finish.",
    "brand": "UrbanWood",
    "reviews": 540,
    "stock": 34,
    "discount": 20,
    "colors": ["Brown"],
    "info": {
      "color": "Brown",
      "weight": "12kg",
      "guarantee": "1 year",
      "warranty": "2 years",
      "return": "10 days return"
    },
    "comments": [
      { "username": "Ramesh", "rating": 4, "comment": "Very strong and sturdy." },
      { "username": "Lakshmi", "rating": 5, "comment": "Perfect height for study." },
      { "username": "Manoj", "rating": 5, "comment": "Wood quality is great." }
    ]
  },
  {
  "id": "11",
  "name": "Philips Air Fryer XL",
  "image": "https://m.media-amazon.com/images/I/61uW8f03HcL._AC_UF350,350_QL80_.jpg",
  "category": "Kitchen",
  "price": 8999,
  "rating": 4.4,
  "description": "Healthy oil-free cooking with advanced rapid air technology.",
  "brand": "Philips",
  "reviews": 640,
  "stock": 27,
  "discount": 12,
  "colors": ["Black"],
  "info": {
    "color": "Black",
    "weight": "6.2kg",
    "guarantee": "1 year",
    "warranty": "2 years",
    "return": "7 days return"
  },
  "comments": [
    { "username": "Neha", "rating": 5, "comment": "Cooks really well without oil!" },
    { "username": "Suresh", "rating": 4, "comment": "Useful for daily cooking." }
  ]
},

{
  "id": "12",
  "name": "LG 55-inch 4K Smart TV",
  "image": "https://rukminim2.flixcart.com/image/480/480/xif0q/television/6/u/v/55uq9000psd-55uq9000psd-lg-original-imaggczydzebqkqp.jpeg?q=90",
  "category": "Accessories",
  "price": 52999,
  "rating": 4.6,
  "description": "Crystal clear 4K display with AI sound tuning.",
  "brand": "LG",
  "reviews": 1102,
  "stock": 14,
  "discount": 10,
  "colors": ["Black"],
  "info": {
    "color": "Black",
    "weight": "14.5kg",
    "guarantee": "None",
    "warranty": "1 year",
    "return": "7 days replacement"
  },
  "comments": [
    { "username": "Pooja", "rating": 5, "comment": "Picture quality is amazing!" },
    { "username": "Mahesh", "rating": 4, "comment": "Sound is great but bass could improve." },
    { "username": "Rohan", "rating": 5, "comment": "Value for money." }
  ]
},

{
  "id": "13",
  "name": "Prestige Mixer Grinder",
  "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJqR0_Z2rtGxWM2Qoz3t6aJGZc3r4nkUprNQ&s",
  "category": "Kitchen",
  "price": 3199,
  "rating": 3.1,
  "description": "Powerful 750W motor for smooth grinding.",
  "brand": "Prestige",
  "reviews": 860,
  "stock": 61,
  "discount": 15,
  "colors": ["White", "Red"],
  "info": {
    "color": "White",
    "weight": "3.5kg",
    "guarantee": "1 year",
    "warranty": "2 years",
    "return": "10 days return"
  },
  "comments": [
    { "username": "Anjali", "rating": 5, "comment": "Works perfectly for chutneys!" },
    { "username": "Prakash", "rating": 4, "comment": "A bit noisy but powerful." }
  ]
},

{
  "id": "14",
  "name": "Ray-Ban Aviator Sunglasses",
  "image": "https://images.unsplash.com/photo-1517423440428-a5a00ad493e8",
  "category": "Accessories",
  "price": 6499,
  "rating": 4.5,
  "description": "Classic metal frame aviators with polarized lenses.",
  "brand": "Ray-Ban",
  "reviews": 450,
  "stock": 30,
  "discount": 8,
  "colors": ["Gold", "Black"],
  "info": {
    "color": "Gold",
    "weight": "120g",
    "guarantee": "None",
    "warranty": "1 year",
    "return": "7 days return"
  },
  "comments": [
    { "username": "Manish", "rating": 5, "comment": "Looks super premium!" },
    { "username": "Ritika", "rating": 4, "comment": "Perfect for long drives." }
  ]
},

{
  "id": "15",
  "name": "Nike Running Shorts",
  "image": "https://images.unsplash.com/photo-1523381210434-271e8be1f52b",
  "category": "Clothing",
  "price": 1599,
  "rating": 2.2,
  "description": "Breathable and stretchable running shorts.",
  "brand": "Nike",
  "reviews": 710,
  "stock": 75,
  "discount": 12,
  "colors": ["Blue", "Black"],
  "info": {
    "color": "Blue",
    "weight": "160g",
    "guarantee": "None",
    "warranty": "6 months",
    "return": "15 days return"
  },
  "comments": [
    { "username": "Gaurav", "rating": 4, "comment": "Very comfortable for running." },
    { "username": "Kavita", "rating": 5, "comment": "Lightweight and perfect fit." }
  ]
},

{
  "id": "16",
  "name": "Dell Inspiron 5518",
  "image": "https://images.unsplash.com/photo-1517336714731-489689fd1ca8",
  "category": "Laptops",
  "price": 62999,
  "rating": 4.4,
  "description": "Powerful laptop with Intel i7 and fast SSD.",
  "brand": "Dell",
  "reviews": 560,
  "stock": 20,
  "discount": 7,
  "colors": ["Silver"],
  "info": {
    "color": "Silver",
    "weight": "1.75kg",
    "guarantee": "None",
    "warranty": "1 year",
    "return": "7 days replacement"
  },
  "comments": [
    { "username": "Srinivas", "rating": 4, "comment": "Fast performance." },
    { "username": "Varsha", "rating": 5, "comment": "Excellent for office work." }
  ]
},

{
  "id": "17",
  "name": "Rolex Submariner Watch",
  "image": "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
  "category": "Wearables",
  "price": 799999,
  "rating": 1.9,
  "description": "Luxury automatic watch with premium build.",
  "brand": "Rolex",
  "reviews": 98,
  "stock": 3,
  "discount": 2,
  "colors": ["Black", "Silver"],
  "info": {
    "color": "Black",
    "weight": "220g",
    "guarantee": "None",
    "warranty": "5 years",
    "return": "No return"
  },
  "comments": [
    { "username": "Arun", "rating": 5, "comment": "Exceptional build quality!" },
    { "username": "Eshwar", "rating": 5, "comment": "Feels premium and classy." }
  ]
},

{
  "id": "18",
  "name": "Adidas Football",
  "image": "https://images.unsplash.com/photo-1599058917212-d750089bc07e",
  "category": "Sports",
  "price": 1299,
  "rating": 4.3,
  "description": "Durable football designed for all-weather play.",
  "brand": "Adidas",
  "reviews": 740,
  "stock": 58,
  "discount": 10,
  "colors": ["White", "Black"],
  "info": {
    "color": "White",
    "weight": "450g",
    "guarantee": "6 months",
    "warranty": "1 year",
    "return": "10 days return"
  },
  "comments": [
    { "username": "Rohit", "rating": 5, "comment": "Good grip and bounce." },
    { "username": "Kalyan", "rating": 4, "comment": "Very durable." }
  ]
},

{
  "id": "19",
  "name": "Minimalist Vitamin C Serum",
  "image": "https://m.media-amazon.com/images/I/717Kb7GUFyL._AC_UF1000,1000_QL80_.jpg",
  "category": "Beauty",
  "price": 699,
  "rating": 4.5,
  "description": "Skin-brightening serum with 10% Vitamin C.",
  "brand": "Minimalist",
  "reviews": 2200,
  "stock": 120,
  "discount": 18,
  "colors": ["White"],
  "info": {
    "color": "White",
    "weight": "60ml",
    "guarantee": "None",
    "warranty": "No warranty",
    "return": "7 days return"
  },
  "comments": [
    { "username": "Nandini", "rating": 5, "comment": "Clearer skin in 2 weeks!" },
    { "username": "Divya", "rating": 4, "comment": "Lightweight and effective." }
  ]
},

{
  "id": "20",
  "name": "IKEA Study Lamp",
  "image": "https://images.unsplash.com/photo-1484704849700-f032a568e944",
  "category": "Home Decor",
  "price": 1299,
  "rating": 2.4,
  "description": "Adjustable metal study lamp with warm lighting.",
  "brand": "IKEA",
  "reviews": 540,
  "stock": 45,
  "discount": 10,
  "colors": ["Black", "White"],
  "info": {
    "color": "Black",
    "weight": "890g",
    "guarantee": "6 months",
    "warranty": "1 year",
    "return": "10 days return"
  },
  "comments": [
    { "username": "Imran", "rating": 5, "comment": "Perfect light for study." },
    { "username": "Sneha", "rating": 4, "comment": "Build quality is solid." }
  ]
},
{
  "id": "21",
  "name": "Sony WH-1000XM5",
  "image": "https://images-cdn.ubuy.co.in/652127b10b0a4502220f9985-sony-wh-1000xm5-headphones-wireless.jpg",
  "category": "Accessories",
  "price": 29999,
  "rating": 4.8,
  "description": "Premium noise-cancelling wireless Electronics.",
  "brand": "Sony",
  "reviews": 4210,
  "stock": 33,
  "discount": 5,
  "colors": ["Black", "Silver"],
  "info": {
    "color": "Black",
    "weight": "249g",
    "guarantee": "1 year",
    "warranty": "1 year",
    "return": "7 days replacement"
  },
  "comments": [
    { "username": "Amit", "rating": 5, "comment": "Noise cancellation is insane!" },
    { "username": "Ritika", "rating": 4, "comment": "Sound is amazing but costly." },
    { "username": "Suresh", "rating": 5, "comment": "Best Electronics I ever bought." }
  ]
},

{
  "id": "22",
  "name": "Adidas Ultraboost 22",
  "image": "https://images.unsplash.com/photo-1519744792095-2f2205e87b6f",
  "category": "Wearables",
  "price": 12999,
  "rating": 4.6,
  "description": "Lightweight and comfortable running shoes.",
  "brand": "Adidas",
  "reviews": 2680,
  "stock": 58,
  "discount": 12,
  "colors": ["Blue", "Black"],
  "info": {
    "color": "Blue",
    "weight": "940g",
    "guarantee": "6 months",
    "warranty": "1 year",
    "return": "10 days return"
  },
  "comments": [
    { "username": "Karthik", "rating": 5, "comment": "Ultra comfortable!" },
    { "username": "Neha", "rating": 4, "comment": "Looks cool and fits well." }
  ]
},
{
  "id": "23",
  "name": "Apple MacBook Air M2",
  "image": "https://images.unsplash.com/photo-1517336714731-489689fd1ca8",
  "category": "Accessories",
  "price": 99999,
  "rating": 4.9,
  "description": "Powerful and lightweight laptop with M2 chip.",
  "brand": "Apple",
  "reviews": 5102,
  "stock": 12,
  "discount": 7,
  "colors": ["Midnight", "Silver"],
  "info": {
    "color": "Midnight",
    "weight": "1.24kg",
    "guarantee": "1 year",
    "warranty": "1 year",
    "return": "7 days replacement"
  },
  "comments": [
    { "username": "Harsha", "rating": 5, "comment": "Super fast and sleek." },
    { "username": "Lavanya", "rating": 5, "comment": "Battery life is amazing!" },
    { "username": "Rohit", "rating": 4, "comment": "Expensive but worth every rupee." }
  ]
},
{
  "id": "24",
  "name": "Puma Sports T-Shirt",
  "image": "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab",
  "category": "Clothing",
  "price": 1299,
  "rating": 4.3,
  "description": "Breathable and lightweight sportswear.",
  "brand": "Puma",
  "reviews": 620,
  "stock": 85,
  "discount": 20,
  "colors": ["Red", "Black"],
  "info": {
    "color": "Red",
    "weight": "220g",
    "guarantee": "No guarantee",
    "warranty": "6 months",
    "return": "15 days return"
  },
  "comments": [
    { "username": "Deepak", "rating": 4, "comment": "Comfortable for workouts." },
    { "username": "Anusha", "rating": 5, "comment": "Material is very soft." }
  ]
},
{
  "id": "25",
  "name": "Samsung 55\" QLED TV",
  "image": "https://m.media-amazon.com/images/I/81tU8cXmOoL.jpg",
  "category": "Accessories",
  "price": 64999,
  "rating": 4.7,
  "description": "Crystal clear 4K display with vibrant colors.",
  "brand": "Samsung",
  "reviews": 3540,
  "stock": 20,
  "discount": 10,
  "colors": ["Black"],
  "info": {
    "color": "Black",
    "weight": "14kg",
    "guarantee": "1 year",
    "warranty": "2 years",
    "return": "10 days return"
  },
  "comments": [
    { "username": "Mohan", "rating": 5, "comment": "Picture quality is brilliant!" },
    { "username": "Chitra", "rating": 4, "comment": "Sound is good but not great." }
  ]
},
{
  "id": "26",
  "name": "Wooden Coffee Table",
  "image": "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
  "category": "Furniture",
  "price": 4999,
  "rating": 4.4,
  "description": "Elegant wooden table for home and office.",
  "brand": "HomeCraft",
  "reviews": 830,
  "stock": 28,
  "discount": 15,
  "colors": ["Brown"],
  "info": {
    "color": "Brown",
    "weight": "8kg",
    "guarantee": "1 year",
    "warranty": "1 year",
    "return": "10 days return"
  },
  "comments": [
    { "username": "Sanjay", "rating": 5, "comment": "Very sturdy and stylish." },
    { "username": "Jyothi", "rating": 4, "comment": "Matches my living room perfectly." }
  ]
},

{
  "id": "27",
  "name": "Dell Wireless Keyboard & Mouse",
  "image": "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04",
  "category": "Accessories",
  "price": 2299,
  "rating": 4.2,
  "description": "Slim and responsive wireless combo set.",
  "brand": "Dell",
  "reviews": 940,
  "stock": 60,
  "discount": 8,
  "colors": ["Black"],
  "info": {
    "color": "Black",
    "weight": "610g",
    "guarantee": "1 year",
    "warranty": "1 year",
    "return": "7 days replacement"
  },
  "comments": [
    { "username": "Naveen", "rating": 4, "comment": "Good quality for the price." },
    { "username": "Swathi", "rating": 5, "comment": "Keys feel very smooth." }
  ]
},
{
  "id": "28",
  "name": "Lakme Face Cream",
  "image": "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9",
  "category": "Beauty",
  "price": 499,
  "rating": 4.1,
  "description": "Lightweight moisturizing face cream.",
  "brand": "Lakme",
  "reviews": 2040,
  "stock": 120,
  "discount": 18,
  "colors": ["White"],
  "info": {
    "color": "White",
    "weight": "120g",
    "guarantee": "No guarantee",
    "warranty": "No warranty",
    "return": "7 days return"
  },
  "comments": [
    { "username": "Pooja", "rating": 5, "comment": "Skin feels fresh and soft!" },
    { "username": "Shalini", "rating": 4, "comment": "Good for daily use." }
  ]
},

{
  "id": "29",
  "name": "Nike Backpack",
  "image": "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
  "category": "Accessories",
  "price": 2099,
  "rating": 4.5,
  "description": "Durable and spacious backpack for school or travel.",
  "brand": "Nike",
  "reviews": 1400,
  "stock": 44,
  "discount": 10,
  "colors": ["Black", "Grey"],
  "info": {
    "color": "Grey",
    "weight": "750g",
    "guarantee": "6 months",
    "warranty": "1 year",
    "return": "15 days return"
  },
  "comments": [
    { "username": "Abhinav", "rating": 5, "comment": "Very spacious and strong!" },
    { "username": "Megha", "rating": 4, "comment": "Good for regular travel." }
  ]
},

{
  "id": "30",
  "name": "Philips Trimmer QP2525",
  "image": "https://m.media-amazon.com/images/I/41QZJEqhTFL._AC_UF1000,1000_QL80_.jpg",
  "category": "Accessories",
  "price": 1649,
  "rating": 4.4,
  "description": "Rechargeable beard trimmer with long battery life.",
  "brand": "Philips",
  "reviews": 3100,
  "stock": 39,
  "discount": 14,
  "colors": ["Black", "Green"],
  "info": {
    "color": "Green",
    "weight": "320g",
    "guarantee": "1 year",
    "warranty": "2 years",
    "return": "7 days replacement"
  },
  "comments": [
    { "username": "Vishal", "rating": 5, "comment": "Battery backup is excellent." },
    { "username": "Harini", "rating": 4, "comment": "Trimming is smooth and easy." }
  ]
},
{
  "id": "31",
  "name": "Boat Airdopes 441",
  "image": "https://www.boat-lifestyle.com/cdn/shop/products/last-grey_8e6e3ed2-88e5-49ea-97e3-e109de842bd4_1500x.jpg?v=1667497977",
  "category": "Accessories",
  "price": 2499,
  "rating": 4.2,
  "description": "Truly wireless earbuds with booming bass.",
  "brand": "Boat",
  "reviews": 3900,
  "stock": 70,
  "discount": 30,
  "colors": ["Black", "Red"],
  "info": {
    "color": "Red",
    "weight": "48g",
    "guarantee": "6 months",
    "warranty": "1 year",
    "return": "7 days replacement"
  },
  "comments": [
    { "username": "Ramesh", "rating": 4, "comment": "Good bass and battery backup." },
    { "username": "Sneha", "rating": 5, "comment": "Loved the sound clarity!" }
  ]
},

{
  "id": "32",
  "name": "Roadster Denim Jacket",
  "image": "https://images.unsplash.com/photo-1539533113208-f6df8cc8b543",
  "category": "Clothing",
  "price": 1999,
  "rating": 3.8,
  "description": "Stylish blue denim jacket for casual wear.",
  "brand": "Roadster",
  "reviews": 850,
  "stock": 55,
  "discount": 50,
  "colors": ["Blue"],
  "info": {
    "color": "Blue",
    "weight": "1.1kg",
    "guarantee": "No guarantee",
    "warranty": "6 months",
    "return": "15 days return"
  },
  "comments": [
    { "username": "Vikram", "rating": 4, "comment": "Nice fit and durable." },
    { "username": "Naina", "rating": 3, "comment": "Good but slightly heavy." }
  ]
},

{
  "id": "33",
  "name": "Meesho Cotton Bedsheet",
  "image": "https://images.meesho.com/images/products/384957637/08yz1_512.avif?width=512",
  "category": "Home Decor",
  "price": 799,
  "rating": 2.9,
  "description": "Soft cotton bedsheet with floral patterns.",
  "brand": "Meesho",
  "reviews": 620,
  "stock": 90,
  "discount": 70,
  "colors": ["Pink", "White"],
  "info": {
    "color": "Pink",
    "weight": "650g",
    "guarantee": "No guarantee",
    "warranty": "No warranty",
    "return": "10 days return"
  },
  "comments": [
    { "username": "Lalitha", "rating": 3, "comment": "Color is slightly dull." },
    { "username": "Pratap", "rating": 2, "comment": "Fabric is thin." }
  ]
},

{
  "id": "34",
  "name": "Wildcraft Rucksack 45L",
  "image": "https://m.media-amazon.com/images/I/91LmTh1L0EL._AC_UY1100_.jpg",
  "category": "Accessories",
  "price": 3499,
  "rating": 4.7,
  "description": "Large and durable trekking backpack.",
  "brand": "Wildcraft",
  "reviews": 1800,
  "stock": 38,
  "discount": 25,
  "colors": ["Grey", "Orange"],
  "info": {
    "color": "Grey",
    "weight": "1.4kg",
    "guarantee": "1 year",
    "warranty": "1 year",
    "return": "15 days return"
  },
  "comments": [
    { "username": "Sameer", "rating": 5, "comment": "Perfect for trekking trips." },
    { "username": "Divya", "rating": 4, "comment": "Very spacious and strong." }
  ]
},

{
  "id": "35",
  "name": "Himalaya Neem Face Wash",
  "image": "https://m.media-amazon.com/images/I/61+xByXvt2L._AC_UF350,350_QL80_.jpg",
  "category": "Beauty",
  "price": 199,
  "rating": 1.9,
  "description": "Herbal face wash for acne-prone skin.",
  "brand": "Himalaya",
  "reviews": 2410,
  "stock": 150,
  "discount": 80,
  "colors": ["Green"],
  "info": {
    "color": "Green",
    "weight": "120g",
    "guarantee": "No guarantee",
    "warranty": "No warranty",
    "return": "7 days return"
  },
  "comments": [
    { "username": "Shivani", "rating": 2, "comment": "Doesn’t suit my skin." },
    { "username": "Pankaj", "rating": 1, "comment": "Very harsh on skin." }
  ]
},

{
  "id": "36",
  "name": "Prestige Non-stick Pan",
  "image": "https://judge.ttkprestige.com/media/catalog/product/4/5/4565-37032-IMG1.jpg",
  "category": "Kitchen",
  "price": 999,
  "rating": 4.1,
  "description": "Durable non-stick frying pan.",
  "brand": "Prestige",
  "reviews": 980,
  "stock": 60,
  "discount": 18,
  "colors": ["Black"],
  "info": {
    "color": "Black",
    "weight": "870g",
    "guarantee": "6 months",
    "warranty": "1 year",
    "return": "10 days return"
  },
  "comments": [
    { "username": "Raghu", "rating": 4, "comment": "Good quality and heats evenly." },
    { "username": "Keerthi", "rating": 5, "comment": "Perfect for daily cooking." }
  ]
},

{
  "id": "37",
  "name": "Samsung Galaxy Buds Pro",
  "image": "https://m.media-amazon.com/images/I/61X8UTiYMZL._AC_UF350,350_QL80_.jpg",
  "category": "Accessories",
  "price": 15999,
  "rating": 4.9,
  "description": "Premium wireless earbuds with ANC.",
  "brand": "Samsung",
  "reviews": 2700,
  "stock": 27,
  "discount": 40,
  "colors": ["Black", "Violet"],
  "info": {
    "color": "Black",
    "weight": "60g",
    "guarantee": "1 year",
    "warranty": "1 year",
    "return": "7 days replacement"
  },
  "comments": [
    { "username": "Arun", "rating": 5, "comment": "ANC is fantastic!" },
    { "username": "Manisha", "rating": 5, "comment": "Crystal clear sound." }
  ]
},

{
  "id": "38",
  "name": "Reebok Men's Running Shoes",
  "image": "https://m.media-amazon.com/images/I/71bSzvYuW-S._AC_UY1000_.jpg",
  "category": "Wearables",
  "price": 2999,
  "rating": 3.5,
  "description": "Sports running shoes with breathable design.",
  "brand": "Reebok",
  "reviews": 1500,
  "stock": 55,
  "discount": 35,
  "colors": ["Black", "Blue"],
  "info": {
    "color": "Blue",
    "weight": "850g",
    "guarantee": "6 months",
    "warranty": "1 year",
    "return": "10 days return"
  },
  "comments": [
    { "username": "Vikas", "rating": 3, "comment": "Average cushioning." },
    { "username": "Sahana", "rating": 4, "comment": "Comfortable for long walks." }
  ]
},

{
  "id": "39",
  "name": "Mi Smart LED Bulb",
  "image": "https://images.unsplash.com/photo-1509223197845-458d87318791",
  "category": "Home Decor",
  "price": 799,
  "rating": 4.0,
  "description": "Smart LED bulb with app control.",
  "brand": "Xiaomi",
  "reviews": 1900,
  "stock": 110,
  "discount": 60,
  "colors": ["White"],
  "info": {
    "color": "White",
    "weight": "350g",
    "guarantee": "6 months",
    "warranty": "1 year",
    "return": "7 days return"
  },
  "comments": [
    { "username": "Gowtham", "rating": 4, "comment": "Bright and smart features work well." },
    { "username": "Ritu", "rating": 4, "comment": "Easy to connect with the app." }
  ]
},

{
  "id": "40",
  "name": "Fastrack Analog Watch",
  "image": "https://images.unsplash.com/photo-1524594081293-190a2fe0baae",
  "category": "Wearables",
  "price": 1699,
  "rating": 2.3,
  "description": "Trendy analog watch with leather strap.",
  "brand": "Fastrack",
  "reviews": 940,
  "stock": 42,
  "discount": 75,
  "colors": ["Brown"],
  "info": {
    "color": "Brown",
    "weight": "190g",
    "guarantee": "6 months",
    "warranty": "1 year",
    "return": "7 days return"
  },
  "comments": [
    { "username": "Sriram", "rating": 2, "comment": "Strap quality could be better." },
    { "username": "Ankita", "rating": 3, "comment": "Looks good but average build." }
  ]
},
{
  "id": "41",
  "name": "Apple AirPods Pro 2",
  "image": "https://www.techhive.com/wp-content/uploads/2023/04/AirPods-Pro-2nd-gen-hero.jpg?quality=50&strip=all",
  "category": "Electronics",
  "price": 24999,
  "rating": 4.8,
  "description": "Next-level active noise cancellation and adaptive audio.",
  "brand": "Apple",
  "reviews": 1290,
  "stock": 40,
  "discount": 15,
  "colors": ["White"],
  "info": {
    "color": "White",
    "weight": "54g",
    "guarantee": "6 months",
    "warranty": "1 year",
    "return": "7 days replacement"
  },
  "comments": [
    { "username": "Rohit", "rating": 5, "comment": "Noise cancellation is top-class." },
    { "username": "Pavani", "rating": 5, "comment": "Extremely comfortable fit." }
  ]
},
{
  "id": "42",
  "name": "Samsung Galaxy Watch 6",
  "image": "https://images.samsung.com/in/galaxy-watch6/feature/galaxy-watch6-banner-watch6-classic-mo.jpg",
  "category": "Electronics",
  "price": 28999,
  "rating": 4.6,
  "description": "Premium smartwatch with advanced health tracking.",
  "brand": "Samsung",
  "reviews": 980,
  "stock": 28,
  "discount": 12,
  "colors": ["Black", "Silver"],
  "info": {
    "color": "Black",
    "weight": "58g",
    "guarantee": "1 year",
    "warranty": "1 year",
    "return": "10 days return"
  },
  "comments": [
    { "username": "Harsha", "rating": 5, "comment": "Display quality is amazing!" },
    { "username": "Meena", "rating": 4, "comment": "Battery could be better." }
  ]
},
{
  "id": "43",
  "name": "Lenovo IdeaPad Slim 5",
  "image": "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed",
  "category": "Laptops",
  "price": 54999,
  "rating": 4.4,
  "description": "Lightweight laptop with strong performance.",
  "brand": "Lenovo",
  "reviews": 1530,
  "stock": 22,
  "discount": 20,
  "colors": ["Grey"],
  "info": {
    "color": "Grey",
    "weight": "1.4kg",
    "guarantee": "1 year",
    "warranty": "1 year",
    "return": "7 days replacement"
  },
  "comments": [
    { "username": "Ajay", "rating": 4, "comment": "Perfect for students." },
    { "username": "Ragini", "rating": 5, "comment": "Fast boot time, very smooth." }
  ]
},
{
  "id": "44",
  "name": "ASUS ROG Strix G16",
  "image": "https://dlcdnwebimgs.asus.com/files/media/71a33ba1-1be2-44c1-9541-70b4c800abf8/v1/images/Strix_G16_KV_16x9.webp",
  "category": "Laptops",
  "price": 139999,
  "rating": 4.9,
  "description": "High-performance gaming laptop with RTX GPU.",
  "brand": "ASUS",
  "reviews": 670,
  "stock": 10,
  "discount": 18,
  "colors": ["Black"],
  "info": {
    "color": "Black",
    "weight": "2.5kg",
    "guarantee": "1 year",
    "warranty": "2 years",
    "return": "7 days return"
  },
  "comments": [
    { "username": "Sandeep", "rating": 5, "comment": "Gaming performance is unreal!" },
    { "username": "Vidhya", "rating": 5, "comment": "RGB keyboard is stunning." }
  ]
},
{
  "id": "45",
  "name": "Nike Sports Hoodie",
  "image": "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
  "category": "Clothing",
  "price": 3499,
  "rating": 4.3,
  "description": "Comfortable fleece hoodie for winter wear.",
  "brand": "Nike",
  "reviews": 560,
  "stock": 60,
  "discount": 25,
  "colors": ["Black", "Red"],
  "info": {
    "color": "Black",
    "weight": "650g",
    "guarantee": "No guarantee",
    "warranty": "6 months",
    "return": "15 days return"
  },
  "comments": [
    { "username": "Tejas", "rating": 4, "comment": "Soft and warm hoodie." },
    { "username": "Shalini", "rating": 5, "comment": "Perfect winter wear!" }
  ]
},
{
  "id": "46",
  "name": "HP Pavilion x360",
  "image": "https://images.unsplash.com/photo-1517336714731-489689fd1ca8",
  "category": "Laptops",
  "price": 69999,
  "rating": 4.1,
  "description": "Versatile 2-in-1 laptop with touch screen.",
  "brand": "HP",
  "reviews": 920,
  "stock": 25,
  "discount": 22,
  "colors": ["Silver"],
  "info": {
    "color": "Silver",
    "weight": "1.65kg",
    "guarantee": "1 year",
    "warranty": "1 year",
    "return": "10 days return"
  },
  "comments": [
    { "username": "Rupesh", "rating": 4, "comment": "Touchscreen works flawlessly." },
    { "username": "Mahima", "rating": 4, "comment": "Good quality and performance." }
  ]
},
{
  "id": "47",
  "name": "Adidas Classic Hoodie",
  "image": "https://assets.adidas.com/images/w_600,f_auto,q_auto/e13df4e9d1d34ca39a8b6fa0e86185b0_9366/Neuclassics_Hoodie_Black_IW0975_23_hover_model.jpg",
  "category": "Clothing",
  "price": 2999,
  "rating": 3.9,
  "description": "Casual hoodie with soft cotton material.",
  "brand": "Adidas",
  "reviews": 420,
  "stock": 48,
  "discount": 30,
  "colors": ["Grey", "White"],
  "info": {
    "color": "Grey",
    "weight": "590g",
    "guarantee": "No guarantee",
    "warranty": "6 months",
    "return": "10 days return"
  },
  "comments": [
    { "username": "Kamal", "rating": 4, "comment": "Very comfortable fit." },
    { "username": "Pooja", "rating": 3, "comment": "Color faded slightly." }
  ]
},
{
  "id": "48",
  "name": "Dell Inspiron 15",
  "image": "https://images.unsplash.com/photo-1517336714731-489689fd1ca8",
  "category": "Laptops",
  "price": 61999,
  "rating": 4.2,
  "description": "Reliable laptop for work and study.",
  "brand": "Dell",
  "reviews": 1100,
  "stock": 18,
  "discount": 14,
  "colors": ["Silver", "Black"],
  "info": {
    "color": "Silver",
    "weight": "1.8kg",
    "guarantee": "1 year",
    "warranty": "1 year",
    "return": "7 days replacement"
  },
  "comments": [
    { "username": "Siddharth", "rating": 4, "comment": "Smooth performance." },
    { "username": "Nandini", "rating": 4, "comment": "Best for office work." }
  ]
},
{
  "id": "49",
  "name": "Sony Alpha A6400 Camera",
  "image": "https://m.media-amazon.com/images/I/71gB-5SVNUL._AC_UF1000,1000_QL80_.jpg",
  "category": "Electronics",
  "price": 84999,
  "rating": 4.9,
  "description": "Mirrorless camera with fast autofocus.",
  "brand": "Sony",
  "reviews": 660,
  "stock": 15,
  "discount": 10,
  "colors": ["Black"],
  "info": {
    "color": "Black",
    "weight": "403g",
    "guarantee": "1 year",
    "warranty": "2 years",
    "return": "7 days return"
  },
  "comments": [
    { "username": "Tarun", "rating": 5, "comment": "Image quality is mind-blowing!" },
    { "username": "Ritika", "rating": 5, "comment": "Perfect for content creators." }
  ]
},
{
  "id": "50",
  "name": "Zara Premium Shirt",
  "image": "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab",
  "category": "Clothing",
  "price": 1899,
  "rating": 4.0,
  "description": "Premium cotton shirt with stylish fit.",
  "brand": "Zara",
  "reviews": 350,
  "stock": 75,
  "discount": 35,
  "colors": ["White", "Blue"],
  "info": {
    "color": "White",
    "weight": "370g",
    "guarantee": "No guarantee",
    "warranty": "6 months",
    "return": "15 days return"
  },
  "comments": [
    { "username": "Arjun", "rating": 4, "comment": "Premium fabric quality." },
    { "username": "Suhani", "rating": 4, "comment": "Fits perfectly." }
  ]
}
]

const store = {
  products: products, 
  carts: {}, 
  orders: [], 
  discountCodes: [], 
  globalOrderCount: 0, 
  stats: {
    totalItemsPurchased: 0,
    totalPurchaseAmount: 0.0,
    totalDiscountAmount: 0.0
  }
};

module.exports = { store, DISCOUNT_N, DISCOUNT_PERCENTAGE };