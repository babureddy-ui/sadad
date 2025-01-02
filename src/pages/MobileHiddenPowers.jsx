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
      text: "Unlock gaming euphoria with jaw dropping discounts, where thrills meet unbeatable prices,Unlock gaming euphoria with jaw dropping discounts, where thrills meet.Unlock gaming euphoria with jaw dropping discounts, where thrills",
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
      icon: "/assets/offline.svg",
      color: "#F1FDF7",
      title: "Offline Mode",
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
           
          padding: "0rem 0rem 3rem 3rem",
          borderRadius: "1.5rem",
          margin: "2rem 0",
           position:"relative",
          textAlign: "start",
        }}
      >
        <div style={{display:"flex",justifyContent:"space-between" , alignItems:"center"  }}> 
        <div
          style={{
            width: "6rem",
            height: "6rem",
            position: "relative",
            left: "0",
            top:'1.2rem',
            marginBottom: "2rem",
          }}
        >
          <Image src={Powers[activeIndex].icon} alt={Powers[activeIndex].title} fill />
        </div>
        <div style={{width:"16rem", height:"11rem", position:"relative",  bottom:"10%"}}><Image src='/assets/HiddenPowers_blurImg.webp' fill/></div>
        </div>
        <div style={{padding: "0rem 3rem 0rem 0rem",}}> 
        <h6
          style={{
            margin: "10px 0",
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
            lineHeight: "1.7rem",
            color:"#000000",
            
          }}
        >
          {Powers[activeIndex].text}
        </p>
        </div>
      </div>
    </div>
  );
};

export default MobileHiddenPowers;
