/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll } from 'motion/react';
import { 
  Cake, 
  Instagram, 
  Phone, 
  MapPin, 
  ChevronRight, 
  Star, 
  Clock, 
  Heart,
  Menu as MenuIcon,
  X,
  ShoppingBag
} from 'lucide-react';
import { CAKE_ITEMS } from './constants';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  const categories = ['All', 'Cream Cake', 'Dry Cake', 'Cupcake', 'Jar Cake', 'Donuts', 'Chocolate Mithai', 'Chocolate Bowl'];
  const filteredItems = activeCategory === 'All' 
    ? CAKE_ITEMS 
    : CAKE_ITEMS.filter(item => item.category === activeCategory);

  const { scrollYProgress } = useScroll();

  return (
    <div className="min-h-screen bg-brand-bg font-sans text-brand-ink">
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-brand-primary z-[60] origin-left"
        style={{ scaleX: scrollYProgress }}
      />
      <AnimatePresence>
        {isLoading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-brand-bg flex flex-col items-center justify-center"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <img src="/logo.png" alt="Logo" className="w-32 h-32 object-contain" />
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-4 border-2 border-brand-primary/20 border-t-brand-primary rounded-full"
              />
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-8 text-brand-primary font-serif italic text-xl"
            >
              Handcrafting your delight...
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Navigation */}
      <nav className="fixed top-0 w-full glass z-50 border-b border-brand-primary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-24">
            <div className="flex items-center gap-6 group">
              <div className="relative">
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute inset-0 bg-brand-secondary/10 rounded-full blur-2xl group-hover:bg-brand-secondary/20 transition-colors"
                />
                <img 
                  src="/logo.png" 
                  alt="Dessert Delight Logo" 
                  className="w-20 h-20 md:w-24 md:h-24 object-contain relative z-10 drop-shadow-xl"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    e.currentTarget.src = 'https://api.dicebear.com/7.x/initials/svg?seed=DD&backgroundColor=8C6A5D';
                  }}
                />
              </div>
              <div className="flex flex-col">
                <span className="text-3xl md:text-4xl font-serif font-bold tracking-tight text-brand-primary leading-none">Dessert Delight</span>
                <span className="text-[11px] uppercase tracking-[0.3em] font-semibold text-brand-secondary mt-2">Handcrafted with Love</span>
              </div>
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-10">
              <a href="#home" className="text-sm font-medium uppercase tracking-widest hover:text-brand-secondary transition-colors">Home</a>
              <a href="#menu" className="text-sm font-medium uppercase tracking-widest hover:text-brand-secondary transition-colors">Menu</a>
              <a href="#gallery" className="text-sm font-medium uppercase tracking-widest hover:text-brand-secondary transition-colors">Gallery</a>
              <a href="#about" className="text-sm font-medium uppercase tracking-widest hover:text-brand-secondary transition-colors">About</a>
              <a href="#faq" className="text-sm font-medium uppercase tracking-widest hover:text-brand-secondary transition-colors">FAQ</a>
              <div className="flex items-center gap-6">
                <a href="https://www.instagram.com/dessert_delight_cakes/" target="_blank" rel="noopener noreferrer" className="text-brand-ink hover:text-brand-secondary transition-colors">
                  <Instagram size={22} />
                </a>
                <a href="#contact" className="px-8 py-3 bg-brand-primary text-white rounded-full hover:bg-brand-ink transition-all shadow-lg font-bold tracking-wider text-sm">Order Now</a>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X /> : <MenuIcon />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-b border-[#F5E8E1] overflow-hidden"
            >
              <div className="px-4 py-6 space-y-4">
                <a href="#home" onClick={() => setIsMenuOpen(false)} className="block text-lg">Home</a>
                <a href="#menu" onClick={() => setIsMenuOpen(false)} className="block text-lg">Menu</a>
                <a href="#gallery" onClick={() => setIsMenuOpen(false)} className="block text-lg">Gallery</a>
                <a href="#about" onClick={() => setIsMenuOpen(false)} className="block text-lg">About</a>
                <a href="#faq" onClick={() => setIsMenuOpen(false)} className="block text-lg">FAQ</a>
                <a href="#contact" onClick={() => setIsMenuOpen(false)} className="block text-lg font-bold text-[#D4A373]">Order Now</a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-48 pb-24 px-4 relative overflow-hidden">
        {/* Atmospheric Background */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-brand-secondary/5 rounded-full blur-[120px]" />
          <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-brand-primary/5 rounded-full blur-[100px]" />
        </div>
        
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="inline-flex items-center gap-3 px-5 py-2 bg-brand-primary/10 rounded-full text-brand-primary text-xs font-bold uppercase tracking-widest mb-8">
              <Star size={14} className="fill-brand-secondary text-brand-secondary" />
              <span>Artisanal Home Bakery</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-serif font-bold text-brand-ink leading-[0.9] mb-8 text-balance">
              Baking <br />
              <span className="italic font-light text-brand-secondary">Memories</span> <br />
              One Slice at a Time.
            </h1>
            <p className="text-xl text-brand-ink/70 mb-10 max-w-lg leading-relaxed font-light">
              Handcrafted with love and passion. From custom birthday cakes to daily delights, we bring sweetness to your special moments.
            </p>
            <div className="flex flex-wrap gap-6">
              <a href="#menu" className="px-10 py-5 bg-brand-primary text-white rounded-full font-bold hover:bg-brand-ink transition-all shadow-2xl flex items-center gap-3 group">
                Explore Menu <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="https://www.instagram.com/dessert_delight_cakes/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-10 py-5 border border-brand-primary/30 text-brand-primary rounded-full font-bold hover:bg-brand-primary hover:text-white transition-all flex items-center gap-3"
              >
                <Instagram size={20} /> View Designs
              </a>
            </div>
            
            <div className="mt-16 p-8 glass rounded-[2rem] inline-flex flex-wrap items-center gap-12">
              <div className="text-center">
                <p className="text-3xl font-serif font-bold text-brand-primary">100%</p>
                <p className="text-[10px] uppercase tracking-widest font-bold text-brand-ink/40">Homemade</p>
              </div>
              <div className="w-px h-12 bg-brand-primary/10 hidden sm:block"></div>
              <div className="text-center">
                <p className="text-3xl font-serif font-bold text-brand-primary">Fresh</p>
                <p className="text-[10px] uppercase tracking-widest font-bold text-brand-ink/40">Daily Baked</p>
              </div>
              <div className="w-px h-12 bg-brand-primary/10 hidden sm:block"></div>
              <div className="text-center">
                <p className="text-3xl font-serif font-bold text-brand-primary">Kondhwa</p>
                <p className="text-[10px] uppercase tracking-widest font-bold text-brand-ink/40">Pune Delivery</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2 }}
            className="relative"
          >
            <div className="relative z-10 aspect-[4/5] rounded-[4rem] overflow-hidden shadow-[0_32px_64px_-12px_rgba(0,0,0,0.2)] border-[12px] border-white">
              <img 
                src="/chocolate-cake.jpg" 
                alt="Delicious Chocolate Cake" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  e.currentTarget.src = 'https://picsum.photos/seed/bakery-hero/800/1000';
                }}
              />
            </div>
            
            {/* Floating Badge */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-10 -left-10 glass p-8 rounded-[2.5rem] shadow-2xl max-w-[240px] z-20"
            >
              <div className="flex items-center gap-1 text-brand-secondary mb-3">
                {[...Array(5)].map((_, i) => <Star key={i} size={14} className="fill-current" />)}
              </div>
              <p className="text-base font-serif italic text-brand-ink leading-snug">"The best chocolate cake I've ever had!"</p>
              <div className="mt-4 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-brand-primary/10 flex items-center justify-center text-brand-primary">
                  <Heart size={14} className="fill-current" />
                </div>
                <p className="text-xs font-bold uppercase tracking-widest text-brand-ink/60">Happy Customer</p>
              </div>
            </motion.div>

            {/* Decorative Elements */}
            <div className="absolute -top-12 -right-12 w-48 h-48 border border-brand-primary/10 rounded-full animate-[spin_20s_linear_infinite]" />
            <div className="absolute top-1/4 -right-6 w-12 h-12 bg-brand-secondary/20 rounded-full blur-xl" />
          </motion.div>
        </div>
      </section>


      {/* Menu Section */}
      <section id="menu" className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-serif font-bold text-brand-ink mb-6">Our Sweet Offerings</h2>
            <p className="text-brand-ink/60 max-w-2xl mx-auto text-lg font-light">Browse through our collection of handcrafted desserts. Each item is made to order to ensure maximum freshness.</p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-8 py-3 rounded-full text-xs font-bold uppercase tracking-widest transition-all ${
                  activeCategory === cat 
                    ? 'bg-brand-primary text-white shadow-xl scale-105' 
                    : 'bg-brand-bg text-brand-primary hover:bg-brand-primary/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item) => (
                <motion.div
                  layout
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="bg-brand-bg rounded-[2.5rem] overflow-hidden border border-brand-primary/5 hover:shadow-[0_32px_64px_-12px_rgba(0,0,0,0.1)] transition-all group"
                >
                  <div className="aspect-[4/3] overflow-hidden relative">
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                      onError={(e) => {
                        e.currentTarget.src = `https://picsum.photos/seed/${item.id}/800/600`;
                      }}
                    />
                    <div className="absolute top-6 right-6 flex flex-col gap-2 items-end">
                      <div className="glass px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest text-brand-primary">
                        {item.category}
                      </div>
                      {item.isSeasonal && (
                        <div className="bg-[#FF6B6B] text-white px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-lg animate-pulse">
                          Seasonal
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="p-8">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-2xl font-serif font-bold text-brand-ink">{item.name}</h3>
                      <span className="text-brand-secondary font-bold text-lg">{item.price}</span>
                    </div>
                    <p className="text-sm text-brand-ink/60 mb-6 line-clamp-2 font-light leading-relaxed">{item.description}</p>
                    <div className="flex flex-wrap gap-2 mb-8">
                      {item.flavors.map(f => (
                        <span key={f} className="text-[9px] uppercase tracking-[0.15em] font-bold bg-brand-primary/5 px-3 py-1.5 rounded-lg text-brand-primary">
                          {f}
                        </span>
                      ))}
                    </div>
                    <button 
                      onClick={() => window.open(`https://wa.me/917020228667?text=Hi, I would like to order the ${item.name}`, '_blank')}
                      className="w-full py-4 bg-white border border-brand-primary/20 text-brand-primary rounded-2xl font-bold hover:bg-brand-primary hover:text-white transition-all flex items-center justify-center gap-3 group shadow-sm"
                    >
                      <ShoppingBag size={18} className="group-hover:scale-110 transition-transform" /> Order via WhatsApp
                    </button>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Gallery Section - Instagram Focused */}
      <section id="gallery" className="py-32 bg-brand-bg">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-serif font-bold text-brand-ink mb-6">Our Design Gallery</h2>
            <p className="text-brand-ink/60 max-w-2xl mx-auto text-lg font-light">We create unique, custom-themed designs for every celebration. Since every design is handcrafted and unique, we showcase our full portfolio on Instagram.</p>
            
            <div className="inline-block glass p-10 rounded-[3rem] text-left max-w-3xl mt-12 mb-16 shadow-xl">
              <h4 className="text-2xl font-serif font-bold text-brand-primary mb-6 flex items-center gap-3">
                <Star size={24} className="text-brand-secondary fill-brand-secondary" /> 
                Customization & Design
              </h4>
              <ul className="space-y-4 text-brand-ink/70">
                <li className="flex items-start gap-4">
                  <span className="w-6 h-6 rounded-full bg-brand-primary/10 flex items-center justify-center text-brand-primary text-xs font-bold shrink-0 mt-1">1</span>
                  <span className="text-lg font-light"><strong>Fresh Cream Designs:</strong> We specialize in fresh cream and chocolate-based themes. (Note: We do not offer fondant cakes).</span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="w-6 h-6 rounded-full bg-brand-primary/10 flex items-center justify-center text-brand-primary text-xs font-bold shrink-0 mt-1">2</span>
                  <span className="text-lg font-light"><strong>Pricing:</strong> Rates vary according to the theme or the customization you want. Customization charges start from ₹100.</span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="w-6 h-6 rounded-full bg-brand-primary/10 flex items-center justify-center text-brand-primary text-xs font-bold shrink-0 mt-1">3</span>
                  <span className="text-lg font-light"><strong>Live Portfolio:</strong> Click below to see our latest designs on Instagram.</span>
                </li>
              </ul>
            </div>

            <div className="relative group rounded-[4rem] overflow-hidden shadow-[0_48px_80px_-16px_rgba(0,0,0,0.3)] h-[600px] max-w-5xl mx-auto">
              <img 
                src="https://picsum.photos/seed/bakery-insta/1200/800" 
                alt="Bakery Gallery Featured" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-brand-ink/60 backdrop-blur-[3px] flex flex-col items-center justify-center text-center p-12">
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <Instagram size={80} className="text-white mb-8 opacity-80" />
                </motion.div>
                <h3 className="text-4xl md:text-6xl font-serif font-bold text-white mb-8">See Our Latest Designs</h3>
                <p className="text-white/80 mb-10 max-w-lg text-xl font-light leading-relaxed">Follow us to see daily updates, behind-the-scenes bakes, and our newest custom cake creations.</p>
                <a 
                  href="https://www.instagram.com/dessert_delight_cakes/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-4 px-14 py-6 bg-white text-brand-ink rounded-full text-xl font-bold shadow-2xl hover:bg-brand-secondary hover:text-white transition-all group"
                >
                  View Instagram Gallery <ChevronRight className="group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 bg-white relative overflow-hidden">
        <div className="absolute top-1/2 left-0 w-full h-px bg-brand-primary/5" />
        <div className="max-w-5xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-5xl md:text-6xl font-serif font-bold text-brand-ink mb-12">The Heart Behind Dessert Delight</h2>
          <div className="space-y-8 text-brand-ink/70 text-xl leading-relaxed font-light">
            <p className="text-balance">
              What started as a simple passion for creating joy through baking has blossomed into <strong className="text-brand-primary font-bold">Dessert Delight</strong>. We believe that every celebration deserves a centerpiece that tastes as beautiful as it looks.
            </p>
            <p className="text-balance">
              Our journey is fueled by the smiles of our customers. Whether it's a milestone birthday, a quiet anniversary, or a simple craving for something sweet, we pour our heart into every creation. We take pride in being a part of your most cherished memories, crafting desserts that bring people together.
            </p>
            <div className="flex flex-wrap justify-center gap-16 pt-12">
              <div className="flex flex-col items-center gap-4 group">
                <div className="w-20 h-20 bg-brand-primary/5 rounded-full flex items-center justify-center text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-all duration-500">
                  <Clock size={36} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-brand-ink uppercase tracking-widest">Freshly Prepared</h4>
                  <p className="text-sm font-light">Made to order for you</p>
                </div>
              </div>
              <div className="flex flex-col items-center gap-4 group">
                <div className="w-20 h-20 bg-brand-primary/5 rounded-full flex items-center justify-center text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-all duration-500">
                  <Heart size={36} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-brand-ink uppercase tracking-widest">Handcrafted</h4>
                  <p className="text-sm font-light">Unique designs every time</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-serif font-bold text-brand-ink mb-6">Why Choose Us?</h2>
            <p className="text-brand-ink/60 text-lg font-light">The secret behind our delicious delights.</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                title: "Freshly Baked",
                desc: "We bake only on order to ensure maximum freshness and taste in every bite.",
                icon: <Clock size={32} />
              },
              {
                title: "Premium Quality",
                desc: "We use only the finest chocolate and fresh cream to create our signature bakes.",
                icon: <Star size={32} />
              },
              {
                title: "100% Eggless",
                desc: "Specializing in delicious eggless bakes that everyone can enjoy without compromise.",
                icon: <Heart size={32} />
              },
              {
                title: "Custom Designs",
                desc: "Your vision, our creation. We tailor every cake to match your unique celebration theme.",
                icon: <ShoppingBag size={32} />
              }
            ].map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-10 rounded-[3rem] bg-brand-bg border border-brand-primary/5 hover:border-brand-primary/20 transition-all text-center group shadow-sm"
              >
                <div className="w-16 h-16 bg-brand-primary/10 rounded-2xl flex items-center justify-center text-brand-primary mx-auto mb-6 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h4 className="text-xl font-serif font-bold text-brand-ink mb-4">{item.title}</h4>
                <p className="text-brand-ink/60 font-light leading-relaxed text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Ordering Info Section */}
      <section className="py-32 bg-brand-bg relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-3 gap-12">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass p-10 rounded-[3rem] text-center group hover:bg-brand-primary hover:text-white transition-all duration-500"
            >
              <div className="w-16 h-16 bg-brand-primary/10 rounded-2xl flex items-center justify-center text-brand-primary mx-auto mb-6 group-hover:bg-white group-hover:text-brand-primary transition-colors">
                <Clock size={32} />
              </div>
              <h4 className="text-xl font-serif font-bold mb-4 uppercase tracking-widest">Ordering Time</h4>
              <p className="font-light leading-relaxed opacity-70 group-hover:opacity-100">Please place orders 1-2 days in advance. Urgent requests are accepted depending on availability.</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="glass p-10 rounded-[3rem] text-center group hover:bg-brand-primary hover:text-white transition-all duration-500"
            >
              <div className="w-16 h-16 bg-brand-primary/10 rounded-2xl flex items-center justify-center text-brand-primary mx-auto mb-6 group-hover:bg-white group-hover:text-brand-primary transition-colors">
                <ShoppingBag size={32} />
              </div>
              <h4 className="text-xl font-serif font-bold mb-4 uppercase tracking-widest">Easy Pickup</h4>
              <p className="font-light leading-relaxed opacity-70 group-hover:opacity-100">Self-pickup from our Kondhwa location. Timings are flexible to suit your celebration needs.</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="glass p-10 rounded-[3rem] text-center group hover:bg-brand-primary hover:text-white transition-all duration-500"
            >
              <div className="w-16 h-16 bg-brand-primary/10 rounded-2xl flex items-center justify-center text-brand-primary mx-auto mb-6 group-hover:bg-white group-hover:text-brand-primary transition-colors">
                <Star size={32} />
              </div>
              <h4 className="text-xl font-serif font-bold mb-4 uppercase tracking-widest">Payments</h4>
              <p className="font-light leading-relaxed opacity-70 group-hover:opacity-100">We accept UPI (GPay, PhonePe) and Cash. Payment can be made at the time of pickup/delivery.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-32 bg-brand-bg relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-serif font-bold text-brand-ink mb-6">Customer Love</h2>
            <p className="text-brand-ink/60 text-lg font-light">What our happy customers have to say about our bakes.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                review: "Hey dear. It was the best cake ever I had.. thank u so much for making special cake.. on my birthday.. taste was as usual superb..",
                stars: 5
              },
              {
                review: "Perfect taste, perfect look! Everyone at home loved it ❤️",
                stars: 5
              },
              {
                review: "The cake was absolutely delicious and beautifully designed!",
                stars: 5
              }
            ].map((testimonial, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass p-10 rounded-[3rem] relative flex flex-col justify-center text-center"
              >
                <div className="flex justify-center gap-1 text-brand-secondary mb-6">
                  {[...Array(testimonial.stars)].map((_, i) => <Star key={i} size={16} className="fill-current" />)}
                </div>
                <p className="text-xl font-serif italic text-brand-ink leading-relaxed">"{testimonial.review}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-32 bg-white relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-serif font-bold text-brand-ink mb-6">Common Questions</h2>
            <p className="text-brand-ink/60 text-lg font-light">Everything you need to know about ordering with Dessert Delight.</p>
          </div>

          <div className="space-y-6">
            {[
              {
                q: "Do you offer eggless cakes?",
                a: "Yes! All our cakes and desserts can be made 100% eggless upon request. We specialize in fresh cream and premium chocolate designs."
              },
              {
                q: "Do you provide home delivery?",
                a: "We primarily offer self-pickup from our Kondhwa location. However, if you need delivery, we can arrange a courier service for you (charges as per actuals)."
              },
              {
                q: "Can I customize my cake theme?",
                a: "Absolutely! We love creating unique designs. Customization charges start from ₹100 and vary based on the complexity of the theme."
              },
              {
                q: "Do you work with fondant?",
                a: "We specialize in fresh cream and chocolate-based designs to ensure the best taste and texture. We do not offer full fondant cakes."
              },
              {
                q: "How do I place an order?",
                a: "The best way is to browse our menu, then click the 'Order via WhatsApp' button to share your requirements with us directly!"
              }
            ].map((faq, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 rounded-[2rem] bg-brand-bg border border-brand-primary/5 hover:border-brand-primary/20 transition-all group"
              >
                <h4 className="text-xl font-serif font-bold text-brand-primary mb-3 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-brand-primary/10 flex items-center justify-center text-xs font-bold shrink-0">Q</span>
                  {faq.q}
                </h4>
                <p className="text-brand-ink/70 font-light leading-relaxed pl-11">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 bg-brand-ink text-white relative overflow-hidden">
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-primary/10 rounded-full blur-[100px]" />
        
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-24">
            <div>
              <h2 className="text-5xl md:text-6xl font-serif font-bold mb-8">Ready to Order?</h2>
              <p className="text-white/60 mb-12 text-xl font-light leading-relaxed">We'd love to bake something special for you. Reach out to us for orders, inquiries, or custom cake consultations.</p>
              
              <div className="space-y-10">
                <div className="flex items-center gap-6 group">
                  <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center group-hover:bg-brand-secondary transition-colors duration-500">
                    <Phone size={28} />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-white/40 mb-1">Call or WhatsApp</p>
                    <p className="text-2xl font-bold tracking-tight">+91 70202 28667</p>
                  </div>
                </div>
                <div className="flex items-center gap-6 group">
                  <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center group-hover:bg-brand-secondary transition-colors duration-500">
                    <Instagram size={28} />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-white/40 mb-1">Follow us on Instagram</p>
                    <p className="text-2xl font-bold tracking-tight">@dessert_delight_cakes</p>
                  </div>
                </div>
                <div className="flex items-center gap-6 group">
                  <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center group-hover:bg-brand-secondary transition-colors duration-500">
                    <MapPin size={28} />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-white/40 mb-1">Location</p>
                    <p className="text-lg font-bold tracking-tight leading-tight">
                      A2 Building, Flat No. 1, Anandtirth Society,<br />
                      Kondhwa, Pune (Near RMD School)
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-[3rem] p-12 text-brand-ink shadow-2xl">
              <h3 className="text-3xl font-serif font-bold mb-8">Send a Message</h3>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-brand-ink/40">Name</label>
                    <input type="text" className="w-full px-6 py-4 rounded-2xl bg-brand-bg border border-brand-primary/10 focus:outline-none focus:border-brand-primary transition-colors" placeholder="Your Name" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-brand-ink/40">Phone</label>
                    <input type="tel" className="w-full px-6 py-4 rounded-2xl bg-brand-bg border border-brand-primary/10 focus:outline-none focus:border-brand-primary transition-colors" placeholder="Your Number" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-brand-ink/40">Occasion</label>
                  <select className="w-full px-6 py-4 rounded-2xl bg-brand-bg border border-brand-primary/10 focus:outline-none focus:border-brand-primary transition-colors appearance-none">
                    <option>Birthday</option>
                    <option>Anniversary</option>
                    <option>Wedding</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-brand-ink/40">Message / Requirements</label>
                  <textarea className="w-full px-6 py-4 rounded-2xl bg-brand-bg border border-brand-primary/10 focus:outline-none focus:border-brand-primary transition-colors h-40 resize-none" placeholder="Tell us about your dream cake..."></textarea>
                </div>
                <button className="w-full py-5 bg-brand-primary text-white rounded-2xl font-bold hover:bg-brand-ink transition-all shadow-xl text-lg tracking-widest uppercase">
                  Send Inquiry
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Back to Top Button */}
      <motion.button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ margin: "100px" }}
        className="fixed bottom-8 left-8 z-50 w-12 h-12 glass rounded-full flex items-center justify-center text-brand-primary shadow-xl hover:bg-brand-primary hover:text-white transition-all"
      >
        <ChevronRight size={24} className="-rotate-90" />
      </motion.button>

      {/* Floating WhatsApp Button */}
      <motion.a
        href="https://wa.me/917020228667"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-8 right-8 z-50 w-16 h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl hover:bg-[#128C7E] transition-colors"
      >
        <Phone size={32} className="fill-current" />
      </motion.a>


      {/* Footer */}
      <footer className="py-20 bg-[#1A110F] text-white border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex justify-center gap-8 mb-12">
            <a href="https://www.instagram.com/dessert_delight_cakes/" target="_blank" rel="noopener noreferrer" className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center hover:bg-brand-secondary transition-all duration-500">
              <Instagram size={28} />
            </a>
            <a href="tel:+917020228667" className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center hover:bg-brand-secondary transition-all duration-500">
              <Phone size={28} />
            </a>
          </div>
          <div className="mb-8">
            <span className="text-2xl font-serif font-bold text-brand-primary">Dessert Delight</span>
            <p className="text-white/30 text-sm mt-2 uppercase tracking-[0.4em]">Handcrafted with Love</p>
          </div>
          <p className="text-white/20 text-sm">© 2024 Dessert Delight Pune. All rights reserved.</p>
          <p className="text-[10px] mt-4 italic text-white/10 uppercase tracking-widest">Baked with love in the heart of Pune.</p>
        </div>
      </footer>
    </div>
  );
}
