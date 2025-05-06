import { BlueButton } from '@/components/Buttons/Button';
import Image from 'next/image';
import React, { useState } from 'react';
import styles from '../components/homePage/HomePage.module.css'

const CustomiseBy = () => {
  const categories = {
    restaurant: {
      image: {
        url: "/assets/Doroki_Reastaurant_img1.webp",
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
        url: "/assets/Doroki_Retail-img1.webp",
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
        url: "/assets/Doroki_Grocery_img1.webp",
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
        url: "/assets/Doroki_SpaSalon_img1.webp",
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
        url: "/assets/Doroki_Electronics_img1.webp",
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
  const [isbtnAnimating, setBtnIsAnimating] = useState(false);
  const [buttonCategory, setButtonCategory] = useState('restaurant');
  const handleCategoryChange = (category) => {
    if (category !== selectedCategory) {
      setIsAnimating(true);  
      setTimeout(() => {
        setIsAnimating(false); 
        setSelectedCategory(category); 
      }, 600);  
    }
  };

  const handleButtonBackgroundChange = (category) => {
    setButtonCategory(category);
  };

  const currentCategory = categories[selectedCategory];

  return (
    <div>
      <div
        style={{
          height: "28.8rem",
          // height:"30rem",
          backgroundColor: "#223037",
          color: "#ffff",
          display: 'flex',
           
          borderTopRightRadius: '2rem',
          borderTopLeftRadius: "2rem"
        }}
      >
        <div style={{   position: 'relative', margin: "2rem 0rem", right: "-50rem", zIndex: 1 }}>
          <div style={{
            display: 'flex', gap: '0.6rem', position: 'absolute', right: '-5rem', width: "50rem",
            alignItems: 'center', fontFamily: "GilroyUlight" , fontSize:"0.8rem"
          }}>
            <p style={{marginRight:'1.3rem'}}>Customise by </p> 
            {Object.keys(categories).map((category) => (
          <button className={styles.customise_btns}
            style={{ 
              fontSize: "0.8rem",
              backgroundColor: buttonCategory === category ? "white" : "#223037",
              color: buttonCategory === category ? "#223037" : "white",
              fontFamily: buttonCategory === category ? "GilroySemiBold" : "GilroyRegular",
              transition: "background-color 200ms ease",   
              cursor:"pointer"
            }}
            key={category}
            onClick={() => {
              handleButtonBackgroundChange(category);
              handleCategoryChange(category);
            }}
          >
            <p> {category === "spaSalon" ? "Spa & Salon" : category.charAt(0).toUpperCase() + category.slice(1)}</p>
          </button>
        ))}

          </div>
        </div>  
        
        <div style={{  display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' , }}>
          <div style={{ width: "30rem", marginTop: "2rem",marginLeft: "5rem",  }}>
            <h1 style={{ fontFamily: "GilroySemiBold", lineHeight: "1.4em" }}>
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
            </h1> 
            <p style={{ fontFamily: "GilroyRegular", lineHeight: "1.7rem", margin: "1rem 0" }}>
            Take control of your Business operations effortlessly, streamlining everything from orders to inventory management.
            </p>
            {/* <BlueButton text="Get in Touch" style={{ width: "10rem", height: "3rem", marginTop:"1.5rem" }} /> */}
          </div>

          <div className={styles.Customise_img}>
            <Image 
              src={currentCategory.image.url} 
              alt={currentCategory.image.title} 
              fill
              className={isAnimating ? styles.imageOut : styles.imageIn}
            />
          </div>
        </div>

      </div>
      <div className={`${styles.box_container} ${isAnimating ? styles.animating : ''}`}>
        {currentCategory.content.map((item, index) => (
          <div
            key={index}
            className={styles.animated_box}
            style={{
              backgroundColor: item.bgColor,
              padding: '2rem 1rem 2rem 2rem',
              margin: "1rem 0",
               
              borderBottomRightRadius: '1.6rem',
              borderBottomLeftRadius: '1.5rem',
              width: "40%",
              height:"10.5rem"

            }}
          >
            <div
              style={{
                width: '4rem',
                position:"relative",
                height: '4rem',
                 
                borderRadius: '1rem',
                margin: "0 0 1rem 0"
              }}
            > <Image src={item.icon} fill alt='icon'/></div>
            <p style={{ fontFamily: "GilroyMedium" , fontSize:"1.1rem", lineHeight:"1.7rem", color:"#283740", fontSize:"1rem",letterSpacing:"0px",}}>{item.txt}</p>
          </div>
        ))}
      </div>
      
    </div>
  );
};

export default CustomiseBy;