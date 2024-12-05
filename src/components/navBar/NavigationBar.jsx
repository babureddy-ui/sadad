import { BlackButton, BlueButton, ContactUsButton, LoginButton } from '@/components/Buttons/Button'
// import Image from 'next/image'
import React from 'react'
import styles from '../homePage/HomePage.module.css'
import Image from 'next/image'

export const NavigationBar = () => {
  return (
    <>
    <div style={{ height: "75px", width: "100%", position: "fixed", top: 0, boxShadow: "0px 4px 6px 0px rgba(0, 0, 0, 0.25)", display: "flex",alignItems: "center",backgroundColor: "white",fontFamily:"GilroyRegular",zIndex: 1000, 
}}
>
        <div style={{ height: "2.6rem", width: "11.16rem", position: "relative", margin:"0 3rem" }}>
          <Image  src="/assets/NavigationBar/Doroki-logo.svg"  alt="Doroki logo" fill />
        </div>
        <div style={{display:"flex", width:"75%",justifyContent:'space-between' ,  alignItems:"center", padding:"0rem 2rem"}}>
          <div style={{display:'flex', width:"30rem", justifyContent:"space-between",alignItems:"center", padding:"1rem 0", height:"100px"}}>
              <a>Home</a>
              <a>Privacy Policy</a>
              <a>Terms of Service</a>
              <div className={styles.hover_container}>
      <Image
        src="/assets/NavigationBar/Playstore.svg"
        alt="Playstore"
         fill
        className={styles.image_default}
      />
      <Image
        src="/assets/NavigationBar/Playstore2.svg"
        alt="Playstore Hover"
        layout="fill"
        className= {styles.image_hover}
      />
    </div>
          </div>
          <div style={{display:'flex', gap:"2rem"}}>
            
            <BlueButton text="Contact Us" style={{width:"9rem", height:"3rem", }}/>
            <BlackButton text="Login" style={{width:"9rem", height:"3rem"}}/>
          </div>
        </div>
      </div>
     

    </>
  )
}
