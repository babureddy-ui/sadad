import Image from 'next/image';
import React from 'react';
import styles from '../styles/HiddenPowers.module.css';

const HiddenPowers = () => {
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
    <div className={styles.container}>
      <div className={styles.header}>
        <p className={styles.headerText}>Doroki’s hidden powers</p>
        <div className={styles.starIcon}>
          <Image src="/assets/stars.svg" alt="Stars" fill />
        </div>
      </div>
      <div className={styles.mainContainer}>
        {Powers.map((ele, index) => (
          <div
            key={index}
            className={styles.elements}
            style={{ backgroundColor: "white" , flex: "1 1 calc(25% - 20px)",}}
            onMouseEnter={(e) => {
               e.currentTarget.style.backgroundColor = ele.hoverCol;
              e.currentTarget.style.color = ele.hoverTextCol;
              e.currentTarget.querySelector(`.${styles.title}`).style.color = ele.hoverTextCol;
              e.currentTarget.querySelector(`.${styles.text}`).style.color = ele.hoverTextCol;
              e.currentTarget.querySelector(`.${styles.borderElement}`).style.borderColor = ele.hoverTextCol;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "white";
              e.currentTarget.style.color = "#555";
              e.currentTarget.querySelector(`.${styles.title}`).style.color = "#0000";
              e.currentTarget.querySelector(`.${styles.text}`).style.color = "#555";
              e.currentTarget.querySelector(`.${styles.borderElement}`).style.borderColor = ele.tagColor;
            }}
          >
            <div className={styles.iconContainer}>
              <Image src={ele.icon} alt={ele.title} fill />
            </div>
            <div className={`${styles.borderElement}`} style={{ borderLeftColor: ele.tagColor }}>
              <h6 className={styles.title}>{ele.title}</h6>
            </div>
            <p className={styles.text}>{ele.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HiddenPowers;
