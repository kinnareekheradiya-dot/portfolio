import dotenv from 'dotenv';import bcrypt from 'bcryptjs';import {pool,initDb} from './config/db.js';dotenv.config();
await initDb();
const adminHash=await bcrypt.hash('Admin@123',10),userHash=await bcrypt.hash('Demo@123',10);
await pool.query('INSERT IGNORE INTO users(name,email,password,role) VALUES (?,?,?,?)',['Admin','admin@novacart.dev',adminHash,'admin']);
await pool.query('INSERT IGNORE INTO users(name,email,password,role) VALUES (?,?,?,?)',['Demo User','demo@novacart.dev',userHash,'user']);
const products=[
['Aero Wireless Headphones','Immersive sound with adaptive noise cancellation and 40-hour battery life.',129.99,'Audio','https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=900&q=80','TRENDING',4.8,18],
['Luma Smart Watch','Minimal titanium design, health tracking, notifications and a bright AMOLED display.',179.99,'Wearables','https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=900&q=80','NEW',4.7,12],
['Orbit Backpack','Water-resistant everyday backpack with laptop protection and modular storage.',89.00,'Lifestyle','https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=900&q=80','BESTSELLER',4.6,24],
['Pixel Desk Lamp','Adjustable smart desk lighting with warm-to-cool modes and USB-C charging.',59.50,'Workspace','https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=900&q=80','HOT',4.5,31],
['Nova Mechanical Keyboard','Compact hot-swappable keyboard with tactile switches and RGB backlight.',99.00,'Workspace','https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=900&q=80','POPULAR',4.9,15],
['Cloud Runner Shoes','Lightweight everyday runners with responsive cushioning and breathable mesh.',119.00,'Lifestyle','https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=80','LIMITED',4.7,20]
];
const[count]=await pool.query('SELECT COUNT(*) c FROM products');if(!count[0].c){for(const p of products)await pool.query('INSERT INTO products(name,description,price,category,image,badge,rating,stock) VALUES(?,?,?,?,?,?,?,?)',p)}console.log('Seed complete');await pool.end();
