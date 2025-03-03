import { BlackButton, BlueButton, ContactUsButton, DropDownInput, LoginButton } from '@/components/Buttons/Button'
// import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import styles from '../homePage/HomePage.module.css'
import Image from 'next/image'
import contactUs from '@/services/contactUs';
import states, { Busineeses } from '@/services/states';
import axios from "axios";
import Link from 'next/link';
// import doc  from "../../pages/termsOfService/DOROKICOMMERCETERMSOFUSE"

export const NavigationBar = () => {
  const [contact, setContact] = useState(false);
  const [thanks, setThanks] = useState(false);
  const [aboutUs, setAboutUs] = useState(false)
  const dropdownRef = useRef(null);
  const [state, setState] = useState("IDLE");
  const [validate, setValidate] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [comingSoon, setComingSoon] = useState(false)
  const ThanksForm=(eve)=>{
    eve.preventDefault();  
      setContact(false); 
      setThanks(true);  
  }
  const ContactForm = () => {
    setContact(!contact)  
  }



const [formData, setFormData] = useState({
  firstName: "",
  lastName: "",
  phoneNumber: "",
  email: "",
  businessName: "",
  businessType: "",
  state: "",
  city: "",


});

const handleChange = (e) => {
  setFormData({ ...formData, [e.target.name]: e.target.value });
  setErrorMessage(null);

};

const handleBusinessTypeChange = (selectedOption) => {
  setFormData((prevData) => ({ ...prevData, businessType: selectedOption?.value || "" }));
};
const handleStateChange = (selectedOption) => {
  setFormData((prevData) => ({ ...prevData, state: selectedOption?.value || "" }));
};
const validateForm = () => {
  if (!formData.businessType && !formData.state) {
     setValidate(true);
     setErrorMessage("Please fill in all required fields.");
     return false;
  }
  else if(!formData.state){
    setValidate(true);
    setErrorMessage("Please select state");
    return false;
  }
  else if(!formData.businessType){
    setValidate(true);
    setErrorMessage("Please select BusinessType");
    return false;
  }
  return true;
};

const freeDemoSubscribe = async (e) => {
  e.preventDefault();
  setState("LOADING");
   setValidate(true);
   setErrorMessage("");

   if (!validateForm()) return;

  try {
    await axios.post("/api/newsletter", formData);
    
    setState("SUCCESS");
     setThanks(true)
     setContact(false)
    setFormData({
      firstName: "",
      lastName: "",
      phoneNumber: "",
      email: "",
      businessName: "",
      businessType: "",
      state: "",
      city: "",
    });

  } catch (e) {
    setErrorMessage(e.response?.data?.error || "An error occurred");
    setState("ERROR");
  }
};


const toggleAboutUs = () => {
  setAboutUs((prev) => !prev);
};

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setAboutUs(false);  
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);


  return (
    <>
      <div style={{ height: "4.3rem", width: "100%", position: "fixed", top: 0, boxShadow: "0px 4px 6px 0px rgba(0, 0, 0, 0.10)", display: "flex",alignItems: "center",fontSize:"1rem",backgroundColor: "white",fontFamily:"GilroyMedium",zIndex: 1000,justifyContent:"space-between"  }}>
          <div className={styles.nav_bar}>
            {/* <div>  */}
            <div style={{ height: "2.6rem", width: "11.16rem", position: "relative", margin:"0rem 5rem 0 2rem" }}>
         <Link href="/"> <Image  src="/assets/NavigationBar/Doroki-logo1.svg"  alt="Doroki logo" fill /> </Link>
        </div>
        <div style={{display:"flex", width:"75%",justifyContent:'space-between' ,   padding:"0rem 2rem"}}>
          <div style={{display:'flex', width:"23rem", justifyContent:"space-between",alignItems:"center", paddingTop:"-1rem ",fontSize:"0.9rem",   }}>
              <a href="#" className={styles.menuItem}>Consumer</a>
              <a href="#" className={styles.menuItem}>Enterprise</a>
              
                {/* <a className={styles.menuItem} onClick={toggleAboutUs}>
                  Company
                </a> */}

                {aboutUs && (
                  <div className={styles.dropdownMenu} ref={dropdownRef}>
                    <div>
                      <p className={styles.comapnt_title}>About Us</p>
                      <a href="https://www.mypaga.com/paga-web/company.paga"><p className={styles.comapnt_item}>About Paga Group</p></a>
                      <a href="https://www.mypaga.com/paga-web/company.paga"><p className={styles.comapnt_item}>Leaders</p></a>
                      <a href="https://www.mypaga.com/paga-web/company.paga"><p className={styles.comapnt_item}>Meet our Board</p></a>
                    </div>
                    <div>
                      <p className={styles.comapnt_title}>Resources</p>
                      <a href="https://www.wearepaga.com/"><p className={styles.comapnt_item}>Careers</p> </a>
                      <a href="https://paga.frontify.com/auth?referer=%2F"><p className={styles.comapnt_item}>Media Kit</p></a>
                      <p className={styles.comapnt_item}>Blog</p>
                      <Link href="/terms-of-service"><p className={styles.comapnt_item}>Terms of Service</p></Link>
                    </div>
                  </div>
                )}
    
  


              <a href="https://play.google.com/store/apps/details?id=YOUR_APP_ID" target="_blank">  <div className={styles.hover_container}>
                {/* <Image
                  src="/assets/NavigationBar/Playstore.svg"
                  alt="Playstore"
                  fill
                  className={styles.image_default}
                /> */}
                <Image
                  src="/assets/NavigationBar/Playstore2.svg"
                  alt="Playstore Hover"
                  fill
                  // className= {styles.image_hover}
                />
              </div></a>
          </div>
          <div style={{display:'flex', gap:"1rem", fontFamily:"Gilroymedium",paddingRight:"1.8rem"}}>
            
            <BlueButton text="Get Free Demo" style={{width:"9rem", height:"2.5rem",fontSize:"0.8rem" }}
            onClick={ContactForm}
            
            />
            {/* <BlackButton text="Login" style={{ width: "9rem", height: "2.5rem", fontSize: "0.8rem" }}  onClick={() => (window.location.href="https://qa.doroki.com/")}/> */}
            <BlackButton text="Login" style={{ width: "9rem", height: "2.5rem", fontSize: "0.8rem" }} onClick={()=>setComingSoon(true)}/>
              
          </div>
        </div>
        </div>
          {/* </div> */}
      </div>
      {comingSoon && (
        <div style={{
          position: "fixed",  
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          zIndex: 1000,
          backgroundColor: "rgba(0, 0, 0, 0.7)",  
          // backdropFilter: "blur(10px)",  
        }}>
          <div style={{position:"relative",display:"grid", justifyContent:"center", alignItems:'center',top:"14%" }}>
          <div style={{ position:"relative", width:"28rem", height:"33rem", backgroundColor:"#ffff", padding:"2rem", display:"flex",alignItems:"center", flexDirection:"column", borderRadius:"1.5rem",textAlign:"center",  justifyContent:"space-between"}}>
 
          <div style={{position:'relative', width:"20rem", height:"13rem", margin:"2rem 0 1rem 0"}}> <Image  src='/assets/coming_soon.webp' fill alt='coming soon'/></div>
          <div style={{ display:"grid",gap:"1rem"}}> 
          <h2 style={{fontFamily:"GilroyBold", lineHeight:"2.1rem"}}>Dashboard launching soon <br />stay tuned!</h2>
          <p style={{fontFamily:"GilroyRegular", lineHeight:"1.5rem"}}>Seamlessly track, analyze and manage your business on Doroki dashboard, arriving to transform your business soon!</p>
          </div>

          <BlackButton text='Excitement awaits—coming soon!' style={{height:"3rem", padding:"1rem", margin:"2rem 0 0 0" ,width:"100%"}}  onClick={()=>setComingSoon(false)}/>
          </div>
             

          </div>


        </div>
      )}
      
      {contact && (

        <div 
        style={{
          position: "fixed",  
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          zIndex: 1000,
          backgroundColor: "rgba(0, 0, 0, 0.5)",  
          backdropFilter: "blur(10px)",  
        }}
        >
        <div className={styles.contact_form}>
          <button className={styles.close_button } onClick={() => setContact(false)} >&times; </button>
          <div style={{position:'relative', height:"42rem", width:"35rem"}}> <Image src='/assets/contactForm_img.webp' fill alt="contact img" /> </div>
          <div style={{padding: '2rem', display: 'flex', flexDirection: 'column', width: '29rem', padding:"1rem 2.5rem 1rem 1rem"}}>
          <div style={{display: "flex", position: "relative", fontSize:"1.2rem", alignItems:"center", margin:"0.5rem 0"}}>
          <h1 style={{fontFamily:"GilroySemiBold"}}>Schedule a free demo</h1>
          <div style={{height: "2rem", width: "2rem", position: 'relative',marginLeft:"1rem" }}>
            <Image src='/assets/stars.svg' fill alt="stars" />
          </div>
          </div>
           
          <p style={{fontFamily:"GilroyRegular", color:"#767676", fontSize:"0.9rem",lineHeight:"1.4rem"}}>Discover how Doroki transforms your business—schedule a demotoday and experience effortless management firsthand</p> <br />
          <form onSubmit={freeDemoSubscribe}>
              <fieldset className={styles.input_divs}>
                <input
                  className={styles.inputs}
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  required
                  onChange={handleChange}
                  value={formData.firstName}
                />
                <legend className={styles.legend}>First Name</legend>
              </fieldset>

              <fieldset className={styles.input_divs}>
                <input
                  className={styles.inputs}
                  type="tel"
                  name="phoneNumber"
                  placeholder="Phone Number"
                  required
                  onChange={handleChange}
                  value={formData.phoneNumber}
                />
                <legend className={styles.legend}>Phone Number</legend>
              </fieldset>

              <fieldset className={styles.input_divs}>
                <input
                  className={styles.inputs}
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  required
                  onChange={handleChange}
                  value={formData.email}
                />
                <legend className={styles.legend}>Email Address</legend>
              </fieldset>

              <div className={styles.input_divs_opts}> 
                <DropDownInput
                  styles={{
                    height: "4rem",
                    borderRadius: "0.4rem",
                    fontFamily: "GilroyRegular",
                    padding: "0 0.8rem",
                    color: "#5A5A5A",
                    fontWeight: "300",
                    border: "none",
                    width: "100%",
                    labelMargin: "1.46rem",
                    backgroundColor: "none"
                  }}
                  // key={formData.businessType}
                  req={true}
                  placeHolderStyles={true}
                  placeholder="Select Business Type"
                  options={Busineeses.map((item) => ({
                    value: item.value,
                    label: item.type,
                  }))}
                  onChange={handleBusinessTypeChange}
                  value={formData.businessType || null} 
                />
              </div>  

              <div className={styles.input_divs_opts}> 
                <DropDownInput
                  styles={{
                    height: "4rem",
                    borderRadius: "0.4rem",
                    fontFamily: "GilroyRegular",
                    padding: "0 0.8rem ",
                    color: "#5A5A5A",
                    fontWeight: "300",
                    width: "100%",
                    labelMargin: "1.46rem",
                    border: "none",
                    backgroundColor: "none"
                  }}
                  req={true}
                  // key={formData.state}
                  placeHolderStyles={true}
                  placeholder="Select State"
                  options={states.regions.map((item) => ({
                    regionId: item.regionId,
                    value: item.value,
                    label: item.name,
                  }))}
                  onChange={handleStateChange}
                  value={formData.state || null} 
                />
              </div>

              <fieldset className={styles.input_divs}>
                <input
                  className={styles.inputs}
                  type="text"
                  name="city"
                  placeholder="City (Optional)"
                  onChange={handleChange}
                  value={formData.city}
                />
                <legend className={styles.legend}>City</legend>
              </fieldset>

              <BlackButton
                text="Kickstart your success"
                style={{ width: "100%", padding: "1rem", height: "4rem", zIndex: 0 }}
              />
              {errorMessage && <p className={styles.error}>{errorMessage}</p>}
            </form>

        </div>
        </div>

        </div>
      )}
      {thanks && (
        <div 
        style={{
          position: "fixed",  
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          zIndex: 1000,
          backgroundColor: "rgba(0, 0, 0, 0.5)",  
          backdropFilter: "blur(10px)",  
        }}
        >
        <div className={styles.thankyou_form}>
          <div style={{ position: "relative", width: "25rem", height: "16rem" }}>
            <Image src="/assets/Thankyou_form.webp" fill alt="Thank You" />
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
        </div>
      )}
 
    </>
  )
}
