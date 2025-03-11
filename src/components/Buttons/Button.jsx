import React, { useState ,useEffect} from 'react'
import styles from '../../styles/Buttons.module.css'

import Marquee from "react-fast-marquee";
import Image from 'next/image';
import { Label } from '@radix-ui/react-label';
import Select from "react-select";

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
            direction={props.direction ? props.direction : "right"}
            className={styles.mainMarqueeTagHomePage}
            style={{ ...props.style }}
            speed={props.speed || 50}
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
 
const MarqueeComponentMobilePage = (props) => {
   return (
      <div>
         <Marquee
            gradient={false}
            pauseOnHover="true"
            direction={props.direction ? props.direction : "right"}
            className={styles.mainMarqueeTagHomePage}
            style={{ ...props.style }}
            speed={props.speed || 50}
         >
            {props?.ClientsArr?.map((item) => {
               return (
                  <div key={item?.altText} className={styles.marqueeHomePageMobile} style={{ backgroundColor: props?.style?.backgroundColor && props?.style?.backgroundColor }}>
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

export const DropDownInput = (props) => {
   const [state, setState] = useState(null);
   const [touched, setTouched] = useState(false);
   const [error, setError] = useState("");
   // useEffect(() => {
   //    if ((!touched && props.validate) && !props.value) {
   //       setError("This field is required");
   //    } else {
   //       setError("");
   //    }
   // }, [touched, props.value, props.validate]);
   useEffect(() => {
      if (props.reset) {
         setState(null);   
         setTouched(false);   
         setError("");  
      }
   }, [props.reset]);

   const styles36 = {
      container: (base) => ({
         ...base,
         borderRadius: "0.5rem",
      }),
      control: (base) => ({
         ...base,
         minHeight: 30,
         height: props.styles?.height || 36,
         fontFamily: "GilroyRegular",
         cursor: "pointer",
         textAlign: "left",
         outline: "none", 
         fontSize: "0.9rem",  
         boxShadow: "none", 
         color: "#5B5B58", 
         borderRadius: "0.5rem",  
         border: error ? "1px solid red" : base.border,
         "&:hover": {
            borderColor: "#cfcfd4",  
         },
         ...props.styles,
      }),
      dropdownIndicator: (base) => ({
         ...base,
         width: "100%",
         paddingTop: 0,
         paddingBottom: 0,
         color: "#5B5B58",
         fontWeight: 40,  
         fontSize: "0.2rem",  
         "&:hover": {
            color: "#5B5B58", 
         },
      }),
      clearIndicator: (base) => ({
         ...base,
         paddingTop: 0,
         paddingBottom: 0,
      }),
      placeholder: (base) => ({
         ...base,
         color: "#5B5B58",
         fontSize: "0.9rem",
         fontFamily: "GilroyRegular",
      }),
      option: (base, { isFocused, isSelected }) => ({
         ...base,
         fontFamily: "GilroyRegular",  
         fontSize: "0.9rem",
         color: isSelected ? "#ffffff" : "#5A5A5A",
         backgroundColor: isSelected ? "#007bff" : isFocused ? "#f1f1f1" : "#fff",
         cursor: "pointer",
      }),
      menu: (base) => ({
         ...base,
         borderRadius: "0.5rem",  
         overflow: "hidden",
      }),
      menuList: (base) => ({
         ...base,
         borderRadius: "0.5rem",  
      }),
   };

   
   const handleChange = (val) => {
      props.onChange(val);
      setTouched(true);
   };

   const handleBlur = () => {
      setTouched(true);
   };

   useEffect(() => {
      document.querySelector(".css-1u9des2-indicatorSeparator")?.remove();
   }, []);
   

   return (<>
      <div>
         {/* {!props.noLabel && (
            <Label
               style={{
                  fontSize: props.styles?.labelSize || "1rem",
                  marginBottom: props.styles?.labelMargin || "0",
               }}
            >
               {props.label}{" "}
               {props.req && (
                  <span
                     style={{
                        color: "red",
                        position: "relative",
                        bottom: "0.5rem",
                        fontSize: "15px",
                     }}
                  >
                     *
                  </span>
               )}
            </Label>
         )} */}

         <Select
            styles={styles36}
            value={state || props.defaultSelected}
            placeholder={props?.placeholder}
            onChange={handleChange}
            onBlur={handleBlur}
            options={props.options}
            className={styles.DropDownInput}
         />

        
 
      </div>
      
           {error && (
            <div style={{ color: "red", fontSize: "0.6rem", marginTop: "0.3rem", position:"absolute",fontFamily:"GilroyLight" }}>
               {error}
            </div>
         )}
      </>
   );
};



export  {BlueButton, BlackButton, MarqueeComponentHomePage,MarqueeComponentMobilePage,  }