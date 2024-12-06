import React, { useEffect, useState } from 'react';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';

const Questions = ({ FaqTableData, heading }) => {
   const [showAns, setShowAns] = useState({ key: "", status: false });
   const [showAtRender, setShowAtRender] = useState(true);

   useEffect(() => {
      const timer = setTimeout(() => {
         setShowAtRender(false);
      }, 2000);

      return () => clearTimeout(timer);
   }, []);

   const handleMouseEnter = (id) => {
      setShowAns({ key: id, status: true });
   };

   const handleMouseLeave = () => {
      setShowAns({ key: "", status: false });
   };

   return (
      <div style={{ margin: "4rem 2rem", display: "flex", gap: "2rem", flexDirection: "column", width: "40rem" }} id="faq-section">
         <div style={{ width: "100%" }}>
            {FaqTableData?.map((ele) => (
               <div style={{borderRadius:"2rem"}}> 
               <div
                  key={ele?.id}
                  style={{
                     marginBottom: "1.5rem",
                     ...(showAns?.key === ele?.id && showAns?.status
                        ? {
                             borderLeft: "9px solid #0391f0", 
                             marginTop: "1.5rem", 
                             lineHeight:"1.5rem",
                             borderRadius:"0.5rem",
                              
                          }
                        : {})
                  }}
               >
                  <div
                     style={{
                        padding: "2rem 1rem 1rem 1rem",
                        borderBottom: "1px solid #ececec",
                        backgroundColor: "#f5f8ff", 
                        boxSizing: "border-box",
                        transition: "background-color 0.3s ease",
                        borderRadius:"0.5rem",
                        fontFamily:"GilroyMedium",
                        color:"#767676"
                         
                     }}
                     onMouseEnter={() => handleMouseEnter(ele?.id)}
                     onMouseLeave={handleMouseLeave}
                  >
                     <div
                        style={{
                           display: "flex",
                           justifyContent: "space-between",
                           gap: "5rem",
                           cursor: "pointer",
                           color: "#101828",
                           fontFamily:"GilroyBold",
                          fontSize:"1.3rem"
                           
                        }}
                     >
                        <p
                           style={{
                              // color: "#626060",
                              marginBottom: "0",
                           }}
                        >
                           {ele?.para}
                        </p>
                        <span style={{ color: "#0391f0", fontSize: "1.8rem" }}>
                           {showAns?.key === ele?.id && showAns?.status ? <IoIosArrowUp /> : <IoIosArrowDown />}
                        </span>
                     </div>
                     <div
                        style={{
                           color: "#475467",
                           maxHeight: showAns?.key === ele?.id && showAns?.status ? "50rem" : "0rem",
                           transition: "max-height 0.3s ease-out, padding-top 0.3s ease-out",
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
