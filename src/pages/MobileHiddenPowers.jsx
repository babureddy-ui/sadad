import React, { useState } from "react";
import styles from "../styles/HiddenPowers.module.css";
import Image from "next/image";

const MobileHiddenPowers = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState("");  
  const [animating, setAnimating] = useState(false);  

  const Powers = [
    {
      icon: "/assets/icon1.svg",
      color: "#FEF4F4",
      title: "Versatile Payments",
      text: "Seamless, secure and convenient transactions for a hassle-free and smooth selling experience.",
      hoverCol: "#c55652",
     
    },
    {
      icon: "/assets/icon2.svg",
      color: "#F9F7FF",
      title: "Staff Management",
      text: "Manage staff efficiently, streamlining tasks, tracking performance and ensuring productivity.",
      hoverCol: "#5243aa",
       
    },
    {
      icon: "/assets/icon6.svg",
      color: "#FFFBEA",
      title: "Expense Management",
      text: "Take control of store expenses for smarter budgeting, better decision-making and greater profit margins over time.",
      hoverCol: "#ff8b00",
       
    },
    {
      icon: "/assets/icon8.svg",
      color: "#FEF4F4",
      title: "Integrations",
      text: "Enable multiple integrations for streamlined operations, better data flow and enhanced business efficiency.",
      hoverCol: "#c55652",
    },
    {
      icon: "/assets/offline.svg",
      color: "#F1FDF7",
      title: "Offline Mode",
      text: "Operate seamlessly offline, ensuring smooth transactions and efficient management without internet connectivity.",
      hoverCol: "#02875c",
       
    },
    {
      icon: "/assets/icon3.svg",
      color: "#FFFBEA",
      title: "Promotions & Discounts",
      text: "Effortlessly manage promotions and discounts, enhancing sales, customer satisfaction and loyalty.",
      hoverCol: "#ff9a27",
       
    },
     
    {
      icon: "/assets/icon5.svg",
      color: "#F2FAFE",
      title: "Vendor Management",
      text: "Simplify tracking, ordering and supplier coordination with efficient vendor management solutions.",
      hoverCol: "#004878",
       
    },
     
     
    {
      icon: "/assets/icon7.svg",
      color: "#F1FDF7",
      title: "Multiple Locations",
      text: "Manage multiple store locations seamlessly for efficient operations and improved decision-making.",
      hoverCol: "#02875c",
      
    },
     
  ];

  const handleClick = (index) => {
    if (animating) return; 
    const newDirection =  "left"  
    setDirection(newDirection);  
    setAnimating(true);  
    setTimeout(() => {
      setActiveIndex(index);  
      setDirection("");  
      setAnimating(false);  
    }, 300);  
  };
  

  return (
    <div>
      <div className={styles.buttonsContainer} style={{ display: "flex", gap: "0.9rem 1rem", flexWrap: "wrap",margin:"-2rem 1rem 0 1.88rem ", }}>
        {Powers.map((ele, index) => (
          <button
            key={index}
            onClick={() => handleClick(index)}
            style={{
              padding: "0.9rem 1.1rem",
              borderRadius: "1.3rem",
              border: "none",
              cursor: "pointer",
              backgroundColor: activeIndex === index ? "#007BFF" : "#F5F8FF",
              color: activeIndex === index ? "#FFFFFF" : "#000000",
              fontFamily: "GilroyMedium",
              fontSize: "0.9rem",
              transition: "background-color 0.3s ease-in-out, color 0.3s ease-in-out",  
            }}
          >
            {ele.title}
          </button>
        ))}
      </div>
        <div style={{ margin:"2rem 0",   overflow:"hidden"}}> 
      <div
        className={`${styles.Card_elements} ${styles[direction]}`}  
        style={{
          backgroundColor: Powers[activeIndex].color,
           
          padding: "0rem 0rem 2rem 2.5rem",
          borderRadius: "1.5rem",
          
           position:"relative",
          textAlign: "start",
        }}
      >
        <div style={{display:"flex",justifyContent:"space-between" , alignItems:"center"  }}> 
        <div
          style={{
            width: "5.5rem",
            height: "5.5rem",
            position: "relative",
            left: "0",
            top:'0.5rem',
            marginBottom: "1rem",
          }}
        >
          <Image src={Powers[activeIndex].icon} alt={Powers[activeIndex].title} fill />
        </div>
        <div style={{width:"13rem", height:"8rem", position:"relative",  bottom:"10%"}}><Image src='/assets/HiddenPowers_blurImg.webp' alt="blurImg" fill/></div>
        </div>
        <div style={{padding: "0rem 3rem 0rem 0rem",}}> 
        <h6
          style={{
            margin: "  0  0 1rem  0",
            fontSize: "1.5rem",
            fontWeight: "600",
            fontFamily: "GilroySemiBold",
            color: Powers[activeIndex].hoverCol,
          }}
        >
          {Powers[activeIndex].title}
        </h6>
        <p
          style={{
            fontSize: "1.1rem",
            fontFamily: "GilroyRegular",
            lineHeight: "1.8rem",
            color:"#000000",
            
          }}
        >
          {Powers[activeIndex].text}
        </p>
        </div>
      </div>
      </div>
    </div>
  );
};

export default MobileHiddenPowers;
