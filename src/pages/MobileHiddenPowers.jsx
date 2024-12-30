import React, { useState } from "react";
import styles from "../styles/HiddenPowers.module.css";

const MobileHiddenPowers = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState("");  
  const [animating, setAnimating] = useState(false);  

  const Powers = [
    {
      icon: "/assets/icon1.svg",
      color: "#FEF4F4",
      title: "Versatile Payments",
      text: "Unlock gaming euphoria with jaw-dropping discounts, where thrills meet unbeatable prices",
      hoverCol: "#c55652",
     
    },
    {
      icon: "/assets/icon2.svg",
      color: "#F9F7FF",
      title: "Staff Management",
      text: "Unlock gaming euphoria with jaw-dropping discounts, where thrills meet unbeatable prices",
      hoverCol: "#5243aa",
       
    },
    {
      icon: "/assets/icon3.svg",
      color: "#FFFBEA",
      title: "Promotions & Discounts",
      text: "Unlock gaming euphoria with jaw-dropping discounts, where thrills meet unbeatable prices",
      hoverCol: "#ff9a27",
       
    },
    {
      icon: "/assets/icon4.svg",
      color: "",
      title: "Reports",
      text: "Unlock gaming euphoria with jaw-dropping discounts, where thrills meet unbeatable prices",
      hoverCol: "#02875c",
       
    },
    {
      icon: "/assets/icon5.svg",
      color: "#F2FAFE",
      title: "Vendor Management",
      text: "Unlock gaming euphoria with jaw-dropping discounts, where thrills meet unbeatable prices",
      hoverCol: "#004878",
       
    },
    {
      icon: "/assets/icon6.svg",
      color: "#FFFBEA",
      title: "Expense Management",
      text: "Unlock gaming euphoria with jaw-dropping discounts, where thrills meet unbeatable prices",
      hoverCol: "#ff8b00",
       
    },
    {
      icon: "/assets/icon7.svg",
      color: "#F1FDF7",
      title: "Multiple Locations",
      text: "Unlock gaming euphoria with jaw-dropping discounts, where thrills meet unbeatable prices",
      hoverCol: "#02875c",
      
    },
    {
      icon: "/assets/icon8.svg",
      color: "#FEF4F4",
      title: "Integrations",
      text: "Unlock gaming euphoria with jaw-dropping discounts, where thrills meet unbeatable prices",
      hoverCol: "#c55652",
    },
  ];

  const handleClick = (index) => {
    if (animating) return; 
    setDirection(index > activeIndex ? "right" : "left");
    setAnimating(true);  
    setTimeout(() => {
      setActiveIndex(index);  
      setDirection("");  
      setAnimating(false);  
    }, 300);  
  };

  return (
    <div>
      <div className={styles.buttonsContainer} style={{ display: "flex", gap: "1rem", flexWrap: "wrap", }}>
        {Powers.map((ele, index) => (
          <button
            key={index}
            onClick={() => handleClick(index)}
            style={{
              padding: "0.5rem 1rem",
              borderRadius: "1rem",
              border: "none",
              cursor: "pointer",
              backgroundColor: activeIndex === index ? "#007BFF" : "#F5F8FF",
              color: activeIndex === index ? "#FFFFFF" : "#000000",
              fontFamily: "GilroySemiBold",
            //   fontSize: "14px",
            //   fontWeight: "600",
            }}
          >
            {ele.title}
          </button>
        ))}
      </div>

      <div
        className={`${styles.Card_elements} ${styles[direction]}`}  
        style={{
          backgroundColor: Powers[activeIndex].color,
           
          padding: "3rem",
          borderRadius: "1rem",
          margin: "2rem 0",
           
          textAlign: "start",
        }}
      >
        <div
          style={{
            width: "4rem",
            height: "4rem",
            position: "relative",
            left: "0",
            marginBottom: "2rem",
          }}
        >
          <img src={Powers[activeIndex].icon} alt={Powers[activeIndex].title} style={{ width: "100%" }} />
        </div>
        <h6
          style={{
            margin: "10px 0",
            fontSize: "18px",
            fontWeight: "600",
            fontFamily: "GilroySemiBold",
            color: Powers[activeIndex].hoverCol,
          }}
        >
          {Powers[activeIndex].title}
        </h6>
        <p
          style={{
            fontSize: "14px",
            fontFamily: "GilroyMedium",
            lineHeight: "1.4rem",
          }}
        >
          {Powers[activeIndex].text}
        </p>
      </div>
    </div>
  );
};

export default MobileHiddenPowers;
