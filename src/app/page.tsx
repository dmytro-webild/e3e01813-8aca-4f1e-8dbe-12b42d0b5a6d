"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import FeatureCardTwentyEight from '@/components/sections/feature/FeatureCardTwentyEight';
import FooterCard from '@/components/sections/footer/FooterCard';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import TestimonialCardFive from '@/components/sections/testimonial/TestimonialCardFive';
import TextAbout from '@/components/sections/about/TextAbout';
import { Facebook, Flame, Instagram, MapPin, Star, Twitter } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="shift-hover"
        defaultTextAnimation="background-highlight"
        borderRadius="pill"
        contentWidth="mediumLarge"
        sizing="largeSizeMediumTitles"
        background="circleGradient"
        cardStyle="outline"
        primaryButtonStyle="flat"
        secondaryButtonStyle="layered"
        headingFontWeight="light"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleApple
      navItems={[
        {
          name: "Home",          id: "#hero"},
        {
          name: "Products",          id: "#products"},
        {
          name: "Catering",          id: "#catering"},
        {
          name: "Cakes",          id: "#cakes"},
        {
          name: "Locations",          id: "#locations"},
        {
          name: "Reviews",          id: "#reviews"},
        {
          name: "Gallery",          id: "#gallery"},
      ]}
      brandName="Pinecrest Bakery"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroSplit
      background={{
        variant: "radial-gradient"}}
      imagePosition="right"
      title="Bite Into Tradition"
      description="Authentic Cuban flavors, handcrafted pastries, gourmet cakes, café cubano and family traditions served fresh 24 hours a day."
      buttons={[
        {
          text: "Order Online",          href: "#products"},
        {
          text: "View Catering",          href: "#catering"},
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/sweet-pastry-display-fresh-baked-goodness-generated-by-ai_188544-40880.jpg"
      imageAlt="Full spread of Cuban pastries, cakes, and coffee"
      mediaAnimation="slide-up"
      fixedMediaHeight={true}
      marqueeItems={[
        {
          type: "text",          text: "Founded in 2012"},
        {
          type: "text",          text: "Millions of pastelitos sold"},
        {
          type: "text",          text: "Multiple South Florida locations"},
        {
          type: "text",          text: "Open 24 Hours"},
        {
          type: "text",          text: "A Taste of Miami's Heart"},
      ]}
      marqueeSpeed={40}
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/beautiful-lady-shirt-jeans-sitting-bar-counter-with-coca-cola-glass-dremily-looking-camera-cafe_574295-310.jpg",          alt: "Satisfied customer Maria"},
        {
          src: "http://img.b2bpic.net/free-photo/portrait-smiling-young-waitress-bar_23-2147874466.jpg",          alt: "Smiling customer John"},
        {
          src: "http://img.b2bpic.net/free-photo/cute-brunette-model-covering-her-face-with-hand_158538-10635.jpg",          alt: "Happy baker Isabella"},
        {
          src: "http://img.b2bpic.net/free-photo/beautiful-african-woman-sleepwear-smiling-looking-laptop-sitting-chair-home-copy-space_176420-13919.jpg",          alt: "Enthusiastic visitor Alex"},
        {
          src: "http://img.b2bpic.net/free-photo/portrait-smiling-young-male-baker-standing-table-with-fresh-croissant-loaf-bread_23-2148189041.jpg",          alt: "Dedicated staff member David"},
      ]}
      avatarText="Loved by over 100,000 customers"
    />
  </div>

  <div id="about" data-section="about">
      <TextAbout
      useInvertedBackground={true}
      title="Miami's Cuban Bakery Tradition"
      tag="Our Story"
      tagIcon={Flame}
    />
  </div>

  <div id="products" data-section="products">
      <ProductCardTwo
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="uniform-all-items-equal"
      useInvertedBackground={false}
      products={[
        {
          id: "p1",          brand: "Pinecrest",          name: "Cuban Pastelitos",          price: "$3.50",          rating: 5,
          reviewCount: "2,400",          imageSrc: "http://img.b2bpic.net/free-photo/vertical-high-angle-shot-delicious-chocolate-muffin-wooden-plate-white-table_181624-34845.jpg",          imageAlt: "Freshly baked guava and cheese pastelito"},
        {
          id: "p2",          brand: "Pinecrest",          name: "Croquetas",          price: "$2.00",          rating: 5,
          reviewCount: "1,800",          imageSrc: "http://img.b2bpic.net/free-photo/front-view-delicious-food-concept_23-2148510917.jpg",          imageAlt: "Crispy ham croquetas"},
        {
          id: "p3",          brand: "Pinecrest",          name: "Café Cubano",          price: "$2.75",          rating: 5,
          reviewCount: "3,100",          imageSrc: "http://img.b2bpic.net/free-photo/view-3d-coffee-cup_23-2151083712.jpg",          imageAlt: "Steaming cup of Cuban coffee"},
        {
          id: "p4",          brand: "Pinecrest",          name: "Cuban Sandwiches",          price: "$12.00",          rating: 5,
          reviewCount: "2,900",          imageSrc: "http://img.b2bpic.net/free-photo/mozzarella-sliders-summer-picnic-sandwiches_53876-108111.jpg",          imageAlt: "Pressed Cuban sandwich"},
        {
          id: "p5",          brand: "Pinecrest",          name: "Gourmet Cakes",          price: "From $50",          rating: 5,
          reviewCount: "1,500",          imageSrc: "http://img.b2bpic.net/free-photo/close-up-tasty-homemade-cake-table_23-2148461084.jpg",          imageAlt: "Elegant gourmet cake"},
        {
          id: "p6",          brand: "Pinecrest",          name: "Tres Leches Cake",          price: "$45.00",          rating: 5,
          reviewCount: "1,200",          imageSrc: "http://img.b2bpic.net/free-photo/two-slices-cakes-white-plate-with-red-tablecloth_114579-75865.jpg",          imageAlt: "Rich Tres Leches cake"},
      ]}
      title="Our Signature Creations"
      description="Experience the iconic flavors that define Pinecrest Bakery, meticulously crafted to bring you the true taste of Cuba."
    />
  </div>

  <div id="catering" data-section="catering">
      <FeatureCardTwentyEight
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={true}
      features={[
        {
          id: "f1",          title: "Corporate Events",          subtitle: "Impress clients and colleagues with an exquisite spread of Cuban delights.",          category: "Events",          value: "Professional",          buttons: [
            {
              text: "Learn More",              href: "#contact"},
          ],
        },
        {
          id: "f2",          title: "Family Gatherings",          subtitle: "Bring family traditions to life with our cherished recipes, perfect for any celebration.",          category: "Gatherings",          value: "Tradition",          buttons: [
            {
              text: "Learn More",              href: "#contact"},
          ],
        },
        {
          id: "f3",          title: "Weddings & Parties",          subtitle: "From elegant tiered cakes to a full Cuban buffet, make your special day unforgettable.",          category: "Celebrations",          value: "Unforgettable",          buttons: [
            {
              text: "Learn More",              href: "#contact"},
          ],
        },
      ]}
      title="Make Every Event Delicious"
      description="Pinecrest Bakery offers premium catering services to elevate your corporate events, family gatherings, weddings, and holiday celebrations with authentic Cuban flavors."
      buttons={[
        {
          text: "Request Catering Quote",          href: "#contact"},
      ]}
    />
  </div>

  <div id="cakes" data-section="cakes">
      <ProductCardTwo
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="bento-grid"
      useInvertedBackground={false}
      products={[
        {
          id: "c1",          brand: "Custom",          name: "Wedding Cakes",          price: "Bespoke",          rating: 5,
          reviewCount: "800",          imageSrc: "http://img.b2bpic.net/free-photo/world-pride-day-still-life-food-composition_23-2148960494.jpg",          imageAlt: "Elegant tiered wedding cake"},
        {
          id: "c2",          brand: "Specialty",          name: "Designer Cakes",          price: "Artisan",          rating: 5,
          reviewCount: "650",          imageSrc: "http://img.b2bpic.net/free-photo/world-pride-day-elements-arrangement_23-2148960500.jpg",          imageAlt: "Artistically designed custom cake"},
        {
          id: "c3",          brand: "Gourmet",          name: "Birthday Creations",          price: "Unique",          rating: 5,
          reviewCount: "720",          imageSrc: "http://img.b2bpic.net/free-photo/vertical-shot-dreamy-cake-with-white-cream-orange-drip-with-forest-reindeers-top_181624-20520.jpg",          imageAlt: "Luxury birthday cake with intricate details"},
        {
          id: "c4",          brand: "Celebration",          name: "Custom Photo Cakes",          price: "Personalized",          rating: 5,
          reviewCount: "400",          imageSrc: "http://img.b2bpic.net/free-photo/i-love-you-title-tasty-cupcakes-near-photo-frame_23-2148109102.jpg",          imageAlt: "Custom photo cake"},
        {
          id: "c5",          brand: "Luxury",          name: "Tiered Masterpieces",          price: "Premium",          rating: 5,
          reviewCount: "550",          imageSrc: "http://img.b2bpic.net/free-photo/closeup-white-topping-cake_181624-33557.jpg",          imageAlt: "Multi-tiered celebration cake"},
        {
          id: "c6",          brand: "Artisan",          name: "Modern Art Cakes",          price: "Exclusive",          rating: 5,
          reviewCount: "300",          imageSrc: "http://img.b2bpic.net/free-photo/top-view-little-creamy-cake-with-sliced-fruits-colored-background-cake-sweet-sugar-bake-color-photo_140725-30610.jpg",          imageAlt: "Geometric shaped modern cake"},
      ]}
      title="Indulge in Our Gourmet Cakes"
      description="Handcrafted masterpieces for every celebration, from custom designs to specialty flavors, baked with passion and precision."
    />
  </div>

  <div id="why-us" data-section="why-us">
      <FeatureCardTwentyEight
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={true}
      features={[
        {
          id: "w1",          title: "Authentic Cuban Recipes",          subtitle: "Generations of family recipes perfected for your enjoyment.",          category: "Tradition",          value: "Heritage"},
        {
          id: "w2",          title: "Freshly Baked Daily",          subtitle: "Every pastry, cake, and bread is baked fresh from scratch, around the clock.",          category: "Quality",          value: "Daily"},
        {
          id: "w3",          title: "Open 24 Hours",          subtitle: "Your cravings satisfied, any time of day or night, at multiple convenient locations.",          category: "Convenience",          value: "Always"},
        {
          id: "w4",          title: "Multiple Locations",          subtitle: "Easily access our delicious offerings across South Florida.",          category: "Accessibility",          value: "Widespread"},
        {
          id: "w5",          title: "Premium Ingredients",          subtitle: "We use only the finest ingredients to ensure superior taste and quality.",          category: "Excellence",          value: "Finest"},
        {
          id: "w6",          title: "Fast & Friendly Service",          subtitle: "Enjoy quick service with a warm, welcoming smile every visit.",          category: "Hospitality",          value: "Efficient"},
      ]}
      title="Why Our Customers Choose Us"
      description="Pinecrest Bakery stands out by delivering unparalleled quality and an authentic Cuban experience every single day."
      tag="Our Promise"
      tagIcon={Star}
    />
  </div>

  <div id="locations" data-section="locations">
      <FeatureCardTwentyEight
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      features={[
        {
          id: "l1",          title: "Miami Location",          subtitle: "123 Main St, Miami, FL 33101",          category: "Open 24/7",          value: "(305) 555-0100"},
        {
          id: "l2",          title: "Kendall Location",          subtitle: "456 Ocean Ave, Kendall, FL 33176",          category: "Open 24/7",          value: "(305) 555-0101"},
        {
          id: "l3",          title: "Hialeah Location",          subtitle: "789 Palm Blvd, Hialeah, FL 33010",          category: "Open 24/7",          value: "(305) 555-0102"},
      ]}
      title="Find Your Nearest Bakery"
      description="Visit one of our many locations across South Florida to experience the true taste of Pinecrest Bakery. Our doors are open 24/7!"
      buttons={[
        {
          text: "View All Locations",          href: "#"},
      ]}
      tag="Always Open"
      tagIcon={MapPin}
    />
  </div>

  <div id="reviews" data-section="reviews">
      <TestimonialCardFive
      textboxLayout="default"
      useInvertedBackground={true}
      testimonials={[
        {
          id: "t1",          name: "Maria G.",          date: "May 15, 2024",          title: "Authentic Cuban Delights!",          quote: "Pinecrest Bakery is my go-to for the best pastelitos and café cubano in Miami. The flavors are simply authentic, reminding me of my childhood. Always fresh and absolutely delicious!",          tag: "Five Stars",          avatarSrc: "http://img.b2bpic.net/free-photo/close-up-successful-woman-with-blue-shirt_1098-3627.jpg",          avatarAlt: "Maria G. avatar",          imageSrc: "http://img.b2bpic.net/free-photo/beautiful-girls-buys-buns-bakery_1157-24675.jpg",          imageAlt: "Bakery items on display"},
        {
          id: "t2",          name: "Carlos R.",          date: "April 28, 2024",          title: "Exceptional Catering Service",          quote: "We used Pinecrest Bakery for our corporate event, and they exceeded all expectations. The Cuban sandwiches were a hit, and the gourmet cakes were stunning. Professional and punctual! ",          tag: "Highly Recommended",          avatarSrc: "http://img.b2bpic.net/free-photo/baker-keeping-tray-baked-buns-shelf_1170-2238.jpg",          avatarAlt: "Carlos R. avatar",          imageSrc: "http://img.b2bpic.net/free-photo/tasty-appetizers-fish-vegetables-served-square-plate_1304-3231.jpg",          imageAlt: "Catering spread"},
        {
          id: "t3",          name: "Sophia L.",          date: "March 10, 2024",          title: "My Favorite Bakery Spot",          quote: "I visit Pinecrest Bakery almost daily! Their croquetas are addictive, and their Cuban coffee is exactly what I need to start my day. The staff are always friendly and welcoming.",          tag: "Daily Visitor",          avatarSrc: "http://img.b2bpic.net/free-photo/portrait-smiling-young-woman-showing-eclairs-bakery-counter_23-2148189123.jpg",          avatarAlt: "Sophia L. avatar",          imageSrc: "http://img.b2bpic.net/free-photo/steam-rises-cup-espresso-coffee-glass-water-cookies-table-closeup-sunlight-selective-focus-empty-space-cafe-breakfast-advertising-banner_166373-2882.jpg",          imageAlt: "Variety of Cuban pastries"},
        {
          id: "t4",          name: "David M.",          date: "Feb 20, 2024",          title: "Best Birthday Cake Ever!",          quote: "Ordered a custom cake for my wife's birthday, and it was a masterpiece! Not only beautiful but also incredibly delicious. Pinecrest Bakery truly delivers premium quality.",          tag: "Custom Cakes",          avatarSrc: "http://img.b2bpic.net/free-photo/happy-relaxed-mature-business-man-standing-office-cafe-leaning-counter-holding-jacket-shoulder_74855-15162.jpg",          avatarAlt: "David M. avatar",          imageSrc: "http://img.b2bpic.net/free-photo/coffee-client_1098-12994.jpg",          imageAlt: "Bakery interior"},
        {
          id: "t5",          name: "Elena P.",          date: "Jan 05, 2024",          title: "Open 24 Hours is a Lifesaver!",          quote: "Whether it's an early morning craving or a late-night treat, Pinecrest Bakery is always there. Their consistency in quality, even at 3 AM, is simply amazing. A true Miami gem!",          tag: "Always Open",          avatarSrc: "http://img.b2bpic.net/free-photo/smiling-businessman-standing-airport-terminal_107420-85070.jpg",          avatarAlt: "Elena P. avatar",          imageSrc: "http://img.b2bpic.net/free-photo/high-angle-bread-white-cloth_23-2148544760.jpg",          imageAlt: "Assorted bakery products"},
      ]}
      title="What Our Customers Say"
      description="Hear directly from our loyal customers who love the authentic flavors and exceptional service at Pinecrest Bakery."
    />
  </div>

  <div id="gallery" data-section="gallery">
      <ProductCardTwo
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="bento-grid"
      useInvertedBackground={false}
      products={[
        {
          id: "g1",          brand: "",          name: "Fresh Pastries",          price: "",          rating: 0,
          reviewCount: "",          imageSrc: "http://img.b2bpic.net/free-photo/colorful-macarons-arranged-circle-dark-background_84443-85804.jpg",          imageAlt: "Assortment of fresh Cuban pastries"},
        {
          id: "g2",          brand: "",          name: "Gourmet Cakes",          price: "",          rating: 0,
          reviewCount: "",          imageSrc: "http://img.b2bpic.net/free-photo/top-view-chocolate-cake-concept_23-2148769265.jpg",          imageAlt: "Elaborate gourmet cake"},
        {
          id: "g3",          brand: "",          name: "Café & Coffee",          price: "",          rating: 0,
          reviewCount: "",          imageSrc: "http://img.b2bpic.net/free-photo/close-up-hands-holding-small-plate_23-2149045718.jpg",          imageAlt: "Steaming cup of Cuban coffee"},
        {
          id: "g4",          brand: "",          name: "Cuban Sandwiches",          price: "",          rating: 0,
          reviewCount: "",          imageSrc: "http://img.b2bpic.net/free-photo/side-view-sandwichs-with-sausage-cheese-plate_176474-120137.jpg",          imageAlt: "Delicious pressed Cuban sandwich"},
        {
          id: "g5",          brand: "",          name: "Store Interiors",          price: "",          rating: 0,
          reviewCount: "",          imageSrc: "http://img.b2bpic.net/free-photo/top-view-cupcakes-with-cinnamon_23-2148604542.jpg",          imageAlt: "Modern Pinecrest Bakery interior"},
        {
          id: "g6",          brand: "",          name: "Happy Customers",          price: "",          rating: 0,
          reviewCount: "",          imageSrc: "http://img.b2bpic.net/free-photo/holidays-spring-party-concept-portrait-nervous-blond-girl-diet-biting-lip-cant-resist-temptation-eat-delicious-cake-looking-dessert-with-hesitant-expression-grimacing-worried_1258-93560.jpg",          imageAlt: "Customers enjoying treats at the bakery"},
        {
          id: "g7",          brand: "",          name: "Assorted Desserts",          price: "",          rating: 0,
          reviewCount: "",          imageSrc: "http://img.b2bpic.net/free-photo/muffins-coffee-table_23-2147693725.jpg",          imageAlt: "Colorful variety of desserts"},
        {
          id: "g8",          brand: "",          name: "Specialty Cakes",          price: "",          rating: 0,
          reviewCount: "",          imageSrc: "http://img.b2bpic.net/free-photo/christmas-small-cake-decorated-with-sweet-figures-christmas-tree-santa-claus-candles_114579-79924.jpg",          imageAlt: "Artistic custom celebration cake"},
      ]}
      title="Our Culinary Journey"
      description="A visual feast of our freshly baked goods, exquisite cakes, and the vibrant atmosphere of Pinecrest Bakery, capturing moments of tradition and delight."
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterCard
      logoText="Pinecrest Bakery"
      copyrightText="© 2024 Pinecrest Bakery. All rights reserved."
      socialLinks={[
        {
          icon: Facebook,
          href: "#",          ariaLabel: "Facebook"},
        {
          icon: Instagram,
          href: "#",          ariaLabel: "Instagram"},
        {
          icon: Twitter,
          href: "#",          ariaLabel: "Twitter"},
      ]}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
