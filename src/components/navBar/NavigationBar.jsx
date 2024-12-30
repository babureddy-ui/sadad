import { BlackButton, BlueButton, ContactUsButton, LoginButton } from '@/components/Buttons/Button'
// import Image from 'next/image'
import React, { useState } from 'react'
import styles from '../homePage/HomePage.module.css'
import Image from 'next/image'
import contactUs from '@/services/contactUs';


export const NavigationBar = () => {
  const [contact, setContact] = useState(false);
  const [thanks, setThanks] = useState(false);
  const ThanksForm=(eve)=>{
    eve.preventDefault();  
      setContact(false); 
      setThanks(true);  
  }
  const ContactForm = () => {
    setContact(!contact)  
  }
    const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);

    const payload = {
      firstname: formData.get("fullName"),
      phnum: formData.get("phoneNumber"),
      email: formData.get("email"),
      city: formData.get("city"),
      businessType: formData.get("businessType"),
    };
    try {
      await contactUs(payload);
      setContact(false); 
      setThanks(true);  
    } catch (error) {
      console.error("Error submitting the form:", error);
      alert("Please try again.");
    }
  };
  return (
    <>
      <div style={{ height: "4.3rem", width: "100%", position: "fixed", top: 0, boxShadow: "0px 4px 6px 0px rgba(0, 0, 0, 0.10)", display: "flex",alignItems: "center",fontSize:"16px",backgroundColor: "white",fontFamily:"GilroyMedium",zIndex: 1000,justifyContent:"space-between"  }}>
          <div className={styles.nav_bar}>
            {/* <div>  */}
          <div style={{ height: "2.6rem", width: "11.16rem", position: "relative", margin:"0rem 5rem 0 2rem" }}>
          <Image  src="/assets/NavigationBar/Doroki-logo1.svg"  alt="Doroki logo" fill />
        </div>
        <div style={{display:"flex", width:"75%",justifyContent:'space-between' ,  alignItems:"", padding:"0rem 2rem"}}>
          <div style={{display:'flex', width:"30rem", justifyContent:"space-between",alignItems:"center", paddingTop:"-1rem ",fontSize:"1rem"  }}>
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
                  fill
                  className= {styles.image_hover}
                />
              </div>
          </div>
          <div style={{display:'flex', gap:"1rem", fontFamily:"Gilroymedium",paddingRight:"1.8rem"}}>
            
            <BlueButton text="Contact Us" style={{width:"9rem", height:"2.5rem", }}
            onClick={ContactForm}
            
            />
            <BlackButton text="Login" style={{width:"9rem", height:"2.5rem"}}/>
          </div>
        </div>
        </div>
          {/* </div> */}
      </div>
      
      {contact && (
        <div className={styles.contact_form}>
          <button className={styles.close_button } onClick={() => setContact(false)} >&times; </button>
          <div style={{position:'relative', height:"35rem", width:"28rem"}}> <Image src='/assets/contact_img.svg' fill alt="contact img" /> </div>
          <div style={{padding: '2rem', display: 'flex', flexDirection: 'column', width: '29rem', padding:"1rem 2.5rem 1rem 1rem"}}>
          <div style={{display: "flex", position: "relative", fontSize:"1.2rem", alignItems:"center"}}>
          <h1 style={{fontFamily:"GilroySemiBold"}}>Schedule a free demo</h1>
          <div style={{height: "2rem", width: "2rem", position: 'relative',marginLeft:"1rem" }}>
            <Image src='/assets/stars.svg' fill alt="stars" />
          </div>
          </div>
          <br />
          <p style={{fontFamily:"GilroyRegular", color:"#767676", fontSize:"0.9rem",lineHeight:"1.1rem"}}>Discover how Doroki transforms your business—schedule a demotoday and experience effortless management firsthand</p> <br />
          <form onSubmit={handleSubmit}>
            <div className={styles.input_contact}>
              <input className={styles.inputs}
                type="text" 
                id="fullName" 
                name="fullName" 
                placeholder=" Full Name" 
                required 
              />
            </div>
            <div className={styles.input_contact}>
            
              <input className={styles.inputs}
                type="tel" 
                id="phoneNumber" 
                name="phoneNumber" 
                placeholder="Phone Number"
                
                required 
              />
            </div>

            <div className={styles.input_contact}>
            
              <input className={styles.inputs}
                type="email" 
                id="email" 
                name="email" 
                placeholder="Email Address" 
                required 
              />
            </div>

            <div className={styles.input_contact}>
              
              <select className={styles.inputs}
                id="city" 
                name="city" 
                required 
                
              >
                <option value=""> City</option>
                <option value="New York">New York</option>
                <option value="Los Angeles">Los Angeles</option>
                <option value="Chicago">Chicago</option>
                <option value="San Francisco">San Francisco</option>
              </select>
            </div>

            <div  className={styles.input_contact}>
              
              <select  className={styles.inputs}
                id="businessType" 
                name="businessType" 
                required 
               
              >
                <option value="">Business Type</option>
                <option value="Retail">Retail</option>
                <option value="Technology">Technology</option>
                <option value="Service">Service</option>
                <option value="Manufacturing">Manufacturing</option>
              </select>
            </div>
            <BlackButton text="Submit" style={{width:"100%", padding:'1rem', height:'3rem' }}   />
          </form>
        </div>
        </div>
      )}
      {thanks && (
  <div className={styles.thankyou_form}>
    <div style={{ position: "relative", width: "30rem", height: "16rem" }}>
      <Image src="/assets/thankyou.svg" fill alt="Thank You" />
    </div>
    <div style={{ textAlign: "center", padding: "1rem" }}>
    <div style={{display: "flex", position: "relative", fontSize:"18px", alignItems:"center",justifyContent:"center", textAlign:'center'}}>
          <h1 style={{fontFamily:"GilroySemiBold"}}>Thanks!</h1>
          <div style={{height: "2rem", width: "2rem", position: 'relative', right: "-0.5rem", }}>
            <Image src='/assets/stars.svg' fill alt="stars" />
          </div>
          </div> <br />
      <p style={{ fontFamily: "GilroyRegular", color: "#767676", fontSize: "1rem", lineHeight: "1.5rem" }}>
        Thank you for reaching out! Someone from <br />
        our team will connect with you shortly.
      </p>
    </div> 
    <div style={{ width: "100%", marginTop: "1rem" }}>
      <BlackButton 
        text="Okay!" 
        style={{ width: "100%", padding: "1rem", height: "3rem" }} 
        onClick={() => setThanks(false)}  
      />
    </div>
  </div>
  
)}
 
    </>
  )
}
