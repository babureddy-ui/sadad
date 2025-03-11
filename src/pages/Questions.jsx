import React, { useEffect, useState } from 'react';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import styles from '../components/homePage/HomePage.module.css'

const Questions = ({ FaqTableData, heading }) => {
   const [showAns, setShowAns] = useState({ key: "", status: false });
   const [showAtRender, setShowAtRender] = useState(true);

   useEffect(() => {
      const timer = setTimeout(() => {
         setShowAtRender(false);
      }, 2000);

      return () => clearTimeout(timer);
   }, []);

   const handleClick = (id) => {
      setShowAns((prev) => {
         if (prev.key === id) {
            return { key: "", status: false };  
         }
         return { key: id, status: true };
      });
   };

   return (
      <div className={styles.Questions_sec}  >
         <div style={{ width: "100%" }}>
            {FaqTableData?.map((ele) => (
               <div style={{borderRadius:"2rem", }} key={ele?.id}>
                  <div>
                     <div
                        style={{
                           padding: "1.5rem",
                           alignItems: "center",
                           backgroundColor: "#f5f8ff", 
                           boxSizing: "border-box",
                           transition: "background-color 0.3s ease",
                           borderRadius: "0.6rem",
                           fontFamily: "GilroyMedium",
                           color: "#767676",
                           marginBottom: "1.2rem",
                           borderLeft: showAns?.key === ele?.id && showAns?.status ? "9px solid #0391f0" : "9px solid transparent",  
                           transition: 'border-left 0.5s ease, translateY 0.10s',
                           lineHeight: "1.5rem",
                           // borderRadius: "0.5rem",
                           justifyConten:"center"
                        }}
                        onClick={() => handleClick(ele?.id)}  
                     >
                        <div
                           style={{
                              display: "flex",
                              justifyContent: "space-between",
                              gap: "2rem",
                              alignItems:"center",
                              cursor: "pointer",
                              color: "#101828",
                              fontFamily: "GilroySemiBold",
                              fontSize: "1.2rem"
                           }}
                        >
                           <p>{ele?.para} </p>
                           <span style={{ color: "black", fontSize: "1.5rem",    }}>
                              {showAns?.key === ele?.id && showAns?.status ? <IoIosArrowUp /> : <IoIosArrowDown />}
                           </span>
                        </div>
                        <div
                           style={{
                              color: "#475467",
                              maxHeight: showAns?.key === ele?.id && showAns?.status ? "50rem" : "0rem",
                              transition: "max-height 0.10s ease-out, padding-top 0.10s ease-out",
                              paddingTop: showAns?.key === ele?.id && showAns?.status ? "1rem" : "0rem",
                              marginRight: "3rem",
                              overflow: "hidden", 
                              display: "block",
                           }}
                        >
                           {showAns?.key === ele?.id && showAns?.status ? ele?.des : ""}
                        </div>
                     </div>
                  </div>
               </div>
            ))}
         </div>
      </div>
   );
};

export default Questions;
