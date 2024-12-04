import Image from 'next/image';
import React from 'react';
import styles from '../styles/HiddenPowers.module.css'

export const HiddenPowers = () => {
  const Powers = [
    {
      icon: "/assets/icon1.svg",
      tagColor: "#c55652",
      title: "Versatile Payments",
      text: "Unlock gaming euphoria with jaw-dropping discounts, where thrills meet unbeatable prices",
      hoverCol: "#c55652",
      hoverTextCol: "#FBE1E0",
    },
    {
      icon: "/assets/icon2.svg",
      tagColor: "#5243aa",
      title: "Staff Management",
      text: "Unlock gaming euphoria with jaw-dropping discounts, where thrills meet unbeatable prices",
      hoverCol: "#5243aa",
      hoverTextCol: "#EAE6FF",
    },
    {
      icon: "/assets/icon3.svg",
      tagColor: "#ff9a27",
      title: "Promotions & Discounts",
      text: "Unlock gaming euphoria with jaw-dropping discounts, where thrills meet unbeatable prices",
      hoverCol: "#ff9a27",
      hoverTextCol: "#FEF1B3",
    },
    {
      icon: "/assets/icon4.svg",
      tagColor: "#02875c",
      title: "Reports",
      text: "Unlock gaming euphoria with jaw-dropping discounts, where thrills meet unbeatable prices",
      hoverCol: "#02875c",
      hoverTextCol: "#E3FCEF",
    },
    {
      icon: "/assets/icon5.svg",
      tagColor: "#004878", 
      title: "Vendor Management",
      text: "Unlock gaming euphoria with jaw-dropping discounts, where thrills meet unbeatable prices",
      hoverCol: "#004878", 
      hoverTextCol: "#DCF0FD", 
    },
    {
      icon: "/assets/icon6.svg",
      tagColor: "#ff8b00",
      title: "Expense Management",
      text: "Unlock gaming euphoria with jaw-dropping discounts, where thrills meet unbeatable prices",
      hoverCol: "#ff8b00",
      hoverTextCol: "#FEF1B3",
    },
    {
      icon: "/assets/icon7.svg",
      tagColor: "#02875c",
      title: "Multiple Locations",
      text: "Unlock gaming euphoria with jaw-dropping discounts, where thrills meet unbeatable prices",
      hoverCol: "#02875c",
      hoverTextCol: "#E3FCEF",
    },
    {
      icon: "/assets/icon8.svg",
      tagColor: "#c55652",
      title: "Integrations",
      text: "Unlock gaming euphoria with jaw-dropping discounts, where thrills meet unbeatable prices",
      hoverCol: "#c55652",
      hoverTextCol: "#FBE1E0",
    },
  ];

  return (
    <div style={{ padding: "5rem 8rem",  backgroundColor:"#F5F8FF"}}>
        <div className={styles.header}>
            <p style={{backgroundColor:"#ffedd6", padding:"0.5rem 1.5rem", borderRadius:"2rem"}}>Doroki’s hidden powers</p>
            <div style={{height:"30px", width:"30px", position:"absolute", right:"65rem"}}><Image src='/assets/stars.svg' fill/></div>
        </div>
      <div className={styles.mainContainer}
       >
        {Powers.map((ele, index) => (
          <div  key={index} className={styles.elements} style={{backgroundColor: "#ffffff",}}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = ele.hoverCol;
              e.currentTarget.style.color = ele.hoverTextCol;
              e.currentTarget.querySelector("h6").style.color = ele.hoverTextCol;
              e.currentTarget.querySelector("p").style.color = ele.hoverTextCol;
              e.currentTarget.querySelector("div").style.borderColor = ele.hoverTextCol;
              const borderElement = e.currentTarget.querySelector(".border-element");
                if (borderElement) {
                borderElement.style.borderLeftColor = ele.hoverTextCol;
                }
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "#ffffff";
              e.currentTarget.style.color = "#555";
              e.currentTarget.querySelector("h6").style.color = "#000";
              e.currentTarget.querySelector("p").style.color = "#555";
              e.currentTarget.querySelector("div").style.borderColor = "#ffffff";
              const borderElement = e.currentTarget.querySelector(".border-element");
                if (borderElement) {
                borderElement.style.borderLeftColor = ele.tagColor;
                }
            }} >
            <div style={{width: "50px", height: "50px",position: "relative",left:"0"}}>
              <Image src={ele.icon} alt={ele.title} fill />
            </div>
            <div
            className="border-element"
              // style={{ borderLeft: `2px solid ${ele.tagColor}`, paddingLeft: "0.5rem",marginTop: "1.5rem", }} 
              >
              <h6
                style={{ margin: "10px 0",fontSize: "15px",fontWeight: "600", margin:"1.5rem 0"}} >
                {ele.title}
              </h6>
            </div>
            
            <p style={{  fontSize: "14px", color: "#555" }}>
              {ele.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

