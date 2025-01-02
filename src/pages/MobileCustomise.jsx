import { BlueButton } from '@/components/Buttons/Button';
import Image from 'next/image';
import React, { useState } from 'react';
import styles from '../components/MobilePages/Mobile.module.css'

const MobileCustomise = () => {
  const categories = {
    restaurant: {
      image: {
        url: "/assets/MobileView/Restaurant.webp",
        title: "Restaurant",
        titleColor: "#FF6347",
      },
      content: [
        {
          icon:"/assets/Reastaurant1.svg",
          txt: "Streamline reservations, optimize seating, & manage orders seamlessly for efficient table operations in your restaurant.",
          color: "#f1c1be",
          bgColor: "#EBEAF1",
        },
        {
          icon:"/assets/Reastaurant2.svg",
          txt: "Seamlessly print KOTs for quick and accurate order management, enhancing efficiency & customer satisfaction",
          color: "#f1c1be",
          bgColor: "#EBEAF1",
        },
        {
            icon:"/assets/Reastaurant3.svg",
            txt: "Integrate delivery partners effortlessly, streamline orders, & enhance your restaurant's reach.",
            color: "#f1c1be",
            bgColor: "#EBEAF1",
          },
      ],
    },
    retail: {
      image: {
        url: "/assets/MobileView/Retail-img.webp",
        title: "Retail",
        titleColor: "#1E92F7",
      },
      content: [
        {
          icon:"/assets/Retail1.svg",
          txt: "Scanning items enhances speed and accuracy, optimizing stock management and minimizing mistakes.",
          color: "#a4c7ea",
          bgColor: "#EBEAF1",
        },
        {
          icon:"/assets/Retail2.svg",
          txt: "Customize receipts to add personal touch, improve clarity, and reinforce brand identity.",
          color: "#a4c7ea",
          bgColor: "#EBEAF1",
        },
        {
          icon:"/assets/Retail3.svg",
            txt: "Manage your store seamlessly offline with manual processes for inventory and transactions.",
            color: "#a4c7ea",
            bgColor: "#EBEAF1",
          },
      ],
    },
    grocery: {
      image: {
        url: "/assets/MobileView/Grocery_img.webp",
        title: "Grocery",
        titleColor: "#6ACD6E",
      },
      content: [
        {
          icon:"/assets/Grocery1.svg",
          txt: "Rapid checkout boosts efficiency, cuts delays, and enhances the overall customer experience.",
          color: "#bbd8c1",
          bgColor: "#EBEAF1",
        },
        {
          icon:"/assets/Grocery2.svg",
          txt: "Launch your online store to offer convenience, increase revenue, and grow your brand.",
          color: "#bbd8c1",
          bgColor: "#EBEAF1",
        },
        {
          icon:"/assets/Grocery3.svg",
            txt: "Offer promotions and discounts to attract customers, increase sales, and build brand loyalty.",
            color: "#bbd8c1",
            bgColor: "#EBEAF1",
          },
      ],
    },
    spaSalon: {
      image: {
        url: "/assets/MobileView/SpaSalon_img.webp",
        title: "Spa & Salon",
        titleColor: "#CA80E9",
      },
      content: [
        {
          icon:"/assets/Spa&Salon1.svg",
          txt: "Simplify appointment scheduling, enhance client management, & create a seamless experience for your spa and salon.",
          color: "#cfb8dd",
          bgColor: "#EBEAF1",
        },
        {
          icon:"/assets/Spa&Salon2.svg",
          txt: "Effortlessly assign staff to clients, ensuring personalized service & smooth operations in your spa and salon.",
          color: "#cfb8dd",
          bgColor: "#EBEAF1",
        },
        {
          icon:"/assets/Spa&Salon3.svg",
            txt: "A well-managed waitlist increases customer retention and enhances the overall spa experience.",
            color: "#cfb8dd",
            bgColor: "#EBEAF1",
          },
      ],
    },
    electronics: {
      image: {
        url: "/assets/MobileView/Electronics_img.webp",
        title: "Electronics",
        titleColor: "#FF5656",
      },
      content: [
        {
          icon:"/assets/Electronic1.svg",
          txt: "Monitor sales in real time to enhance decision-making, efficiency, and business growth.",
          color: "#e3acb0",
          bgColor: "#EBEAF1",
        },
        {
          icon:"/assets/Electronic2.svg",
          txt: "Oversee multiple stores effortlessly, enhancing consistency, & operational efficiency across locations.",
          color: "#e3acb0",
          bgColor: "#EBEAF1",
        },
        {
          icon:"/assets/Electronic3.svg",
            txt: "Get timely stock alerts to manage inventory effectively and avoid product stockouts.",
            color: "#e3acb0",
            bgColor: "#EBEAF1",
          },
      ],
    },
  };

  const [selectedCategory, setSelectedCategory] = useState('restaurant');
  const [isAnimating, setIsAnimating] = useState(false);

  const handleCategoryChange = (category) => {
    if (category !== selectedCategory) {
      setIsAnimating(true);  
      setTimeout(() => {
        setSelectedCategory(category);
        setIsAnimating(false);  
      }, 500);  
    }
  };

  const currentCategory = categories[selectedCategory];

  return (
    <div>
      <div  className={styles.customise_section}>
                <div style={{ position: 'absolute',  left: '0', zIndex: 1, width: '88%',margin:"1rem 2rem", overflowX: 'hidden',   }}>
            <div style={{display: 'flex',gap: '0.5rem',position: 'relative',  width: '100%', overflowX: 'auto',  alignItems: 'center',fontFamily: 'GilroyUlight', whiteSpace: 'nowrap',scrollbarWidth: 'none', }}>
                {Object.keys(categories).map((category) => (
                <button className={styles.customise_btns}
                    style={{ 
                    backgroundColor: selectedCategory === category ? 'white' : '#223037',
                    color: selectedCategory === category ? '#223037' : 'white',
                    fontWeight: selectedCategory === category ? 'GilroyExtrabold' : 'normal',
                    flexShrink: 0,  
                    }}
                    key={category}
                    onClick={() => handleCategoryChange(category)}
                >
                    {category === 'spaSalon' ? 'Spa & Salon' : category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
                ))}
            </div>
            </div>

        
        <div style={{  display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '80%' ,flexDirection:"column",position:"absolute", height:"42rem" }}>
          <div className={styles.customise_title}>
            <h2 style={{ fontFamily: "GilroySemiBold", lineHeight: "1.5em",  }}>
              Manage your{' '}
              <span
                className={isAnimating ? styles.Out : styles.In}
                style={{
                  color: currentCategory.image.titleColor,
                  display: "inline-block",
                  transition: "all 0.5s ease",
                }}
              >
                {currentCategory.image.title}
              </span>
              <br />
              with streamlined technology
            </h2>
             
          </div>

          <div className={styles.customise_img}>
            <Image 
              src={currentCategory.image.url} 
              alt={currentCategory.image.title} 
              fill
            />
             
          </div>
          <BlueButton text="Get in Touch" style={{ width: "12rem", height: "4rem",position:"absloute",bottom:"1rem", borderRadius:"2rem",  left:"25%",  transform: "translateX(-25%)" }} />
          
        </div>

      </div>
      <div 
  className={`${styles.box_container} ${isAnimating ? styles.animating : ''}`} 
  style={{ 
    display: 'flex', 
    overflowX: 'auto',  
    gap: '1rem',
    padding: "1rem", 
    whiteSpace: 'normal',  
    scrollbarWidth: 'none',
    
  }}
>
  {currentCategory.content.map((item, index) => (
    <div
      key={index}
      className={styles.animated_box}
      style={{
        backgroundColor: item.bgColor,
        padding: '1.5rem',  
        margin: "1rem 0",
        borderRadius: '2rem',
        width: "90%",  
        minWidth: "70%",  
        height: "auto",  
        flexShrink: 0,  
        boxSizing: 'border-box',  
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
          
      }}
    >
      <div
        style={{
          width: '4rem',
          height: '4rem',
          backgroundColor: item.color,
          borderRadius: '1rem',
          marginBottom: "1rem",
          position:"relative"
        }}
      > <Image  src={item.icon} fill/></div>
      <p 
        style={{ 
          fontFamily: "GilroyMedium", 
          margin: 0,  
          wordBreak: 'break-word',  
          lineHeight: '1.5',  
          overflow: 'hidden',  
        }}
      >
        {item.txt}
      </p>
    </div>
  ))}
</div>


      
    </div>
  );
};

export default MobileCustomise;

 