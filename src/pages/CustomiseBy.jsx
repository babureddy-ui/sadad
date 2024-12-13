import { BlueButton } from '@/components/Buttons/Button';
import Image from 'next/image';
import React, { useState } from 'react';
import styles from '../components/homePage/HomePage.module.css'

const CustomiseBy = () => {
  const categories = {
    restaurant: {
      image: {
        url: "/assets/Reastaurant_img.svg",
        title: "Restaurant",
        titleColor: "#FF6347",
      },
      content: [
        {
          txt: "Manage your entire restaurant business process like table/menu management, raw material monitoring.",
          color: "#f1c1be",
          bgColor: "#EBEAF1",
        },
        {
          txt: "Manage your entire restaurant business process like table/menu management, raw material monitoring.",
          color: "#f1c1be",
          bgColor: "#EBEAF1",
        },
        {
            txt: "Manage your entire restaurant business process like table/menu management, raw material monitoring.",
            color: "#f1c1be",
            bgColor: "#EBEAF1",
          },
      ],
    },
    retail: {
      image: {
        url: "/assets/Retail-img.svg",
        title: "Retail",
        titleColor: "#1E92F7",
      },
      content: [
        {
          txt: "Boost sales, track inventory, and improve customer experience.",
          color: "#a4c7ea",
          bgColor: "#EBEAF1",
        },
        {
          txt: "Enhance operational efficiency and grow your retail business.",
          color: "#a4c7ea",
          bgColor: "#EBEAF1",
        },
        {
            txt: "Streamline operations, enhance customer satisfaction, and optimize resources.",
            color: "#a4c7ea",
            bgColor: "#EBEAF1",
          },
      ],
    },
    grocery: {
      image: {
        url: "/assets/Grocery_img.svg",
        title: "Grocery",
        titleColor: "#6ACD6E",
      },
      content: [
        {
          txt: "Manage your entire restaurant business process like table/menu management, raw material monitoring.",
          color: "#bbd8c1",
          bgColor: "#EBEAF1",
        },
        {
          txt: "Manage your entire restaurant business process like table/menu management, raw material monitoring.",
          color: "#bbd8c1",
          bgColor: "#EBEAF1",
        },
        {
            txt: "Manage your entire restaurant business process like table/menu management, raw material monitoring.",
            color: "#bbd8c1",
            bgColor: "#EBEAF1",
          },
      ],
    },
    spaSalon: {
      image: {
        url: "/assets/SpaSalon_img.svg",
        title: "Spa & Salon",
        titleColor: "#CA80E9",
      },
      content: [
        {
          txt: "Manage your entire restaurant business process like table/menu management, raw material monitoring.",
          color: "#cfb8dd",
          bgColor: "#EBEAF1",
        },
        {
          txt: "Manage your entire restaurant business process like table/menu management, raw material monitoring.",
          color: "#cfb8dd",
          bgColor: "#EBEAF1",
        },
        {
            txt: "Manage your entire restaurant business process like table/menu management, raw material monitoring.",
            color: "#cfb8dd",
            bgColor: "#EBEAF1",
          },
      ],
    },
    electronics: {
      image: {
        url: "/assets/Electronics_img.svg",
        title: "Electronics",
        titleColor: "#FF5656",
      },
      content: [
        {
          txt: "Manage your entire restaurant business process like table/menu management, raw material monitoring.",
          color: "#e3acb0",
          bgColor: "#EBEAF1",
        },
        {
          txt: "Manage your entire restaurant business process like table/menu management, raw material monitoring.",
          color: "#e3acb0",
          bgColor: "#EBEAF1",
        },
        {
            txt: "Manage your entire restaurant business process like table/menu management, raw material monitoring.",
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
      <div
        style={{
          height: "28.5rem",
          backgroundColor: "#223037",
          color: "#ffff",
          display: 'flex',
          borderTopRightRadius: "1.8rem",
          borderTopLeftRadius: "1.8rem"
        }}
      >
        <div style={{ display: 'flex', position: 'relative', margin: "2rem 0rem", right: "-50rem", zIndex: 1 }}>
          <div style={{
            display: 'flex', gap: '1rem', position: 'absolute', right: '-5rem', width: "50rem",
            alignItems: 'center', fontFamily: "GilroyUlight"
          }}>
            <p>Customise by</p>
            {Object.keys(categories).map((category) => (
          <button
            style={{
              borderRadius: '1rem',
              border: "0.5px solid white",
              padding: "2px",
              height: "2rem",
              width: '6.5rem',
              fontFamily: "GilroyMedium",
              backgroundColor: selectedCategory === category ? "white" : "#223037",
              color: selectedCategory === category ? "#223037" : "white",
              fontWeight: selectedCategory === category ? "GilroyExtrabold" : "normal",
                  
            }}
            key={category}
            onClick={() => handleCategoryChange(category)}
          >
            {category === "spaSalon" ? "Spa & Salon" : category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
        ))}

          </div>
        </div>
        <div>
          <div style={{ width: "30rem", margin: "8rem 5rem" }}>
          <h1  style={{  fontFamily: "GilroySemiBold",}}>Manage your {' '}
            <span className={`${isAnimating ? styles.Out : styles.In}`}style={{color: currentCategory.image.titleColor,display: "inline-block", transition: "all 0.5s ease",}} >
             {currentCategory.image.title}
              </span><br /> with streamlined technology</h1>
            <br />
            <p style={{ fontFamily: "GilroyRegular", lineHeight: "1.6rem" }}>
              Take control of your restaurant operations effortlessly, streamlining everything from orders to inventory management.
            </p>
            <br />
            <BlueButton text="Get in Touch" style={{ width: "10rem", height: "3rem" }} />
          </div>
        </div>
        <div style={{ position: 'relative', width: '50rem' }}>
          <Image src={currentCategory.image.url} alt={currentCategory.image.title} fill />
        </div>
      </div>
      <div className={`${styles.box_container} ${isAnimating ? styles.animating : ''}`}>
        {currentCategory.content.map((item, index) => (
          <div
            key={index}
            className={styles.animated_box}
            style={{
              backgroundColor: item.bgColor,
              padding: '2rem',
              margin: "1rem 0",
              borderBottomRightRadius: '2rem',
              borderBottomLeftRadius: '2rem',
              width: "21rem"
            }}
          >
            <div
              style={{
                width: '4rem',
                height: '4rem',
                backgroundColor: item.color,
                borderRadius: '1rem',
                margin: "0 0 1rem 0"
              }}
            ></div>
            <p style={{ fontFamily: "GilroyMedium" }}>{item.txt}</p>
          </div>
        ))}
      </div>
      {/* <style jsx>{`
        .box-container {
          display: flex;
          gap: 1rem;
           
          transition: transform 0.5s ease, opacity 0.5s ease;
        }
        .box-container.animating {
          transform: translateY(50px);
          opacity: 0;
        }
        .box-container:not(.animating) {
          transform: translateY(0);
          opacity: 1;
        }
      `}</style> */}
    </div>
  );
};

export default CustomiseBy;