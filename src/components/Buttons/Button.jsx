import React from 'react'
import styles from '../../styles/Buttons.module.css'

import Marquee from "react-fast-marquee";
import Image from 'next/image';
 const BlueButton = (props) => {
  return (
    <button className={`${styles.contact_custom_button}`}
    style={{
       height: props?.styles?.height ? props.styles.height : "2rem",
       width: props?.styles?.width ? `${props.styles.width}` : "",
       fontSize: props?.styles?.fontSize ? props.styles.fontSize : "1rem",
       fontWeight: props?.styles?.fontWeight ? props.styles.fontWeight : 400,
       ...props?.style
    }}
    onClick={(e) => {
       props.onClick ? props.onClick(e) : "";
    }}
 >
    {props?.text}
 </button>
  )
}
const BlackButton = (props) => {
    return (
      <button className={`${styles.login_button}`}
      style={{
         height: props?.styles?.height ? props.styles.height : "2rem",
         width: props?.styles?.width ? `${props.styles.width}` : "",
         fontSize: props?.styles?.fontSize ? props.styles.fontSize : "1rem",
         fontWeight: props?.styles?.fontWeight ? props.styles.fontWeight : 400,
         ...props?.style
      }}
      onClick={(e) => {
         props.onClick ? props.onClick(e) : "";
      }}
   >
      {props?.text}
   </button>
    )
  }


  const MarqueeComponentHomePage = (props) => {
   return (
      <div>
         <Marquee
            gradient={false}
            pauseOnHover="true"
            direction={props.direction ? props.direction : "left"}
            className={styles.mainMarqueeTagHomePage}
            style={{ ...props.style }}
         >
            {props?.ClientsArr?.map((item) => {
               return (
                  <div key={item?.altText} className={styles.marqueeHomePage} style={{ backgroundColor: props?.style?.backgroundColor && props?.style?.backgroundColor }}>
                     <div className={styles.clients_image_container} style={{ height: item?.height, width: item?.width }}>
                        <Image
                           src={item?.imgSrc}
                           style={{ ...props.logoStyle }}
                           alt={item?.altText}
                           fill
                        />
                     </div>
                  </div>
               );
            })}
         </Marquee>
      </div>
   );
};


export  {BlueButton, BlackButton, MarqueeComponentHomePage}