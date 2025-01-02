import React, { useEffect, useState } from 'react';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';

const MobileQuestions = ({ FaqTableData, heading }) => {
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
       <div style={{ margin: "1rem 0rem",width: "100%", height:"42rem" ,  }}  >
          <div style={{ width: "100%",   }}>
             {FaqTableData?.map((ele) => (
                <div style={{borderRadius:"2rem", }} key={ele?.id}>
                   <div
                      style={{
                         marginBottom: "1rem",
                          
                      }}
                   >
                      <div
                         style={{
                            padding: "1.5rem",
                            backgroundColor: "#f5f8ff", 
                            boxSizing: "border-box",
                            transition: "background-color 0.3s ease",
                            borderRadius: "0.5rem",
                            fontFamily: "GilroyMedium",
                           borderLeft: showAns?.key === ele?.id && showAns?.status ? "9px solid #0391f0" : "9px solid transparent",  
                            color: "#767676",
                            transition: 'border-left 0.5s ease, translateY 0.5s',
                           lineHeight: "1.5rem",
                           borderRadius: "0.5rem",
                         }}
                         onClick={() => handleClick(ele?.id)}  
                      >
                         <div
                            style={{
                               display: "flex",
                               justifyContent: "space-between",
                               // gap: "6rem",
                                
                               cursor: "pointer",
                               color: "#101828",
                               fontFamily: "GilroyBold",
                               fontSize: "1rem"
                            }}
                         >
                            <p>{ele?.para} </p>
                            <span style={{ color: "black", fontSize: "1rem" }}>
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
export default MobileQuestions
