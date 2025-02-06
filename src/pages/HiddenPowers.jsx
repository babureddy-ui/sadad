import Image from 'next/image';
import React from 'react';
import styles from '../styles/HiddenPowers.module.css';

const HiddenPowers = () => {
  const Powers = [
    {
      icon: "/assets/icon1.svg",
      tagColor: "#c55652",
      title: "Versatile Payments",
      text: "Seamless, secure and convenient transactions for a hassle-free and smooth selling experience.",
      hoverCol: "#c55652",
      hoverTextCol: "#FBE1E0",
    },
    {
      icon: "/assets/icon2.svg",
      tagColor: "#5243aa",
      title: "Staff Management",
      text: "Manage staff efficiently, streamlining tasks, tracking performance and ensuring productivity.",
      hoverCol: "#5243aa",
      hoverTextCol: "#EAE6FF",
    },
    {
      icon: "/assets/icon3.svg",
      tagColor: "#ff9a27",
      title: "Promotions & Discounts",
      text: "Effortlessly manage promotions and discounts, enhancing sales, customer satisfaction and loyalty.",
      hoverCol: "#ff9a27",
      hoverTextCol: "#FEF1B3",
    },
    {
      icon: "/assets/offline.svg",
      tagColor: "#02875c",
      title: "Offline Mode",
      text: "Operate seamlessly offline, ensuring smooth transactions and efficient management without internet connectivity.",
      hoverCol: "#02875c",
      hoverTextCol: "#E3FCEF",
    },
    {
      icon: "/assets/icon5.svg",
      tagColor: "#004878",
      title: "Vendor Management",
      text: "Simplify tracking, ordering and supplier coordination with efficient vendor management solutions.",
      hoverCol: "#004878",
      hoverTextCol: "#DCF0FD",
    },
    {
      icon: "/assets/icon6.svg",
      tagColor: "#ff8b00",
      title: "Expense Management",
      text: "Take control of store expenses for smarter budgeting, better decision-making and greater profit margins over time.",
      hoverCol: "#ff8b00",
      hoverTextCol: "#FEF1B3",
    },
    {
      icon: "/assets/icon7.svg",
      tagColor: "#02875c",
      title: "Multiple Locations",
      text: "Manage multiple store locations seamlessly for efficient operations and improved decision-making.",
      hoverCol: "#02875c",
      hoverTextCol: "#E3FCEF",
    },
    {
      icon: "/assets/icon8.svg",
      tagColor: "#c55652",
      title: "Integrations",
      text: "Enable multiple integrations for streamlined operations, better data flow and enhanced business efficiency.",
      hoverCol: "#c55652",
      hoverTextCol: "#FBE1E0",
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <p className={styles.headerText}>Doroki’s hidden powers</p>
        <div className={styles.starIcon} style={{marginLeft:"0.5rem"}}>
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
              e.currentTarget.querySelector(`.${styles.title}`).style.color = "white";
              e.currentTarget.querySelector(`.${styles.text}`).style.color = "white";
              e.currentTarget.querySelector(`.${styles.borderElement}`).style.borderColor = ele.hoverTextCol;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "white";
              e.currentTarget.style.color = "#555";
              e.currentTarget.querySelector(`.${styles.title}`).style.color = "#212B36";
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
