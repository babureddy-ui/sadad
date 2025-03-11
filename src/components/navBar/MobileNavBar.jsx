import React, { useState } from 'react';
import styles from '../MobilePages/Mobile.module.css';
import Image from 'next/image';
import { BlackButton, BlueButton, DropDownInput } from '../Buttons/Button';
import contactUs from '@/services/contactUs';
import states, { Busineeses } from '@/services/states';
import axios from "axios";
import Link from 'next/link';

const MobileNavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const[getFreeDemo, setGetFreeDemo] = useState(false);
  const [thanks, setThanks] = useState(false);
  const [comingSoon, setComingSoon] = useState(false)
   

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
   
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
  const [state, setState] = useState("IDLE");
  const [validate, setValidate] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
   
  
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
       setThanks(true);
       setGetFreeDemo(false)
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

  return (
    <div className={styles.navbar}>
      <div className={styles.hamburger} onClick={toggleMenu}>
          {isMenuOpen ? (
            <div style={{fontSize:"2.5rem",  marginTop:"-0.8rem"}}>&times;</div>
          ) : (
             <>
              <div className={styles.line}></div>
              <div className={styles.line}></div>
              <div className={styles.line}></div>
            </>
          )}
        </div>

        <Link href="/"><div
        style={{
          height: "2.3rem",
          width: "9rem",
          position: "relative",
          margin: "0rem 10rem 0 0rem",
        }}
      >
    
        <Image
          src="/assets/NavigationBar/Doroki-logo1.svg"
          alt="Doroki logo"
          fill
        />
      </div></Link>

      {isMenuOpen && (
        <div className={styles.menu}>
          <div className={styles.menuItemWrapper}>
            <a href="#" className={styles.menuItem}>Trusted by Businesses</a>
          </div>
          <div className={styles.menuItemWrapper}>
            <a href="#" className={styles.menuItem}>Industries we offer</a>
          </div>
          <div className={styles.menuItemWrapper}>
            <a href="#" className={styles.menuItem}>Key Features</a>
          </div>
          <div className={styles.menuItemWrapper}>
            <a href="#" className={styles.menuItem}>Other Features</a>
          </div>
          <div className={styles.menuItemWrapper}>
            <a href="#" className={styles.menuItem}>Banking Services</a>
          </div>
          <div className={styles.menuItemWrapper}>
            <a href="#" className={styles.menuItem}>Devices</a>
          </div>
          <div className={styles.menuItemWrapper}>
            <a href="#" className={styles.menuItem}>Testimonials</a>
          </div>
          <div className={styles.menuItemWrapper}>
            <a href="#" className={styles.menuItem}>FAQs</a>
          </div>
          
            <a href="#" className={styles.menuItem}>Subscribe to Newsletter</a>
          
            <div style={{display:"flex", flexDirection:"column", gap:"0.8rem", margin:"4rem 0 0 0 "}}> 
            <BlueButton text="Get Free Demo" style={{ height: "3.4rem", width:"100%",fontSize:"1.1rem" }}  onClick={setGetFreeDemo} />
          
            <BlackButton text="Login" style={{ height: "3.4rem", width:"100%", fontSize:"1.1rem"}} onClick={() => (window.location.href="https://admin.doroki.com/")}/>
            {/* <BlackButton text="Login" style={{ height: "3.4rem", width:"100%", fontSize:"1.1rem"}} onClick={()=>setComingSoon(true)}/> */}
            </div>
          
        </div>
      )}

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
                <div style={{position:"relative",display:"flex", justifyContent:"center", alignItems:'center',top:"20%" }}>
                <div style={{ position:"relative", width:"20rem", height:"29rem", backgroundColor:"#ffff", padding:"2rem", display:"flex",alignItems:"center", flexDirection:"column",justifyContent:"space-between", borderRadius:"1.5rem",textAlign:"center", gap:"1rem"}}>
       
                <div style={{position:'relative', width:"15rem", height:"10rem", margin:"1rem 0 0 0.5rem"}}> <Image  src='/assets/coming_soon.webp' fill alt='coming soon'/></div>
                 <div style={{ display:"grid",gap:"1rem", marginTop:"1rem"}}> 
                <h2 style={{fontFamily:"GilroyBold",lineHeight:"2rem"}}>Dashboard launching soon <br />stay tuned!</h2>
                <p style={{fontFamily:"GilroyRegular", lineHeight:"1.5rem"}}>Seamlessly track, analyze and manage your business on Doroki dashboard, arriving to transform your business soon!</p>
                </div>
      
                <BlackButton text='Coming Soon' style={{height:"3.4rem",   margin:"2rem 0 0 0" ,width:"100%"}}  onClick={()=>setComingSoon(false)}/>
                </div>
                   
      
                </div>
      
      
              </div>
            )}


      { getFreeDemo && (
        <div style={{zIndex:"1001", display:"flex", flexDirection:'column', justifyContent:"flex-start", backgroundColor:"white", marginTop:"-2rem", position:"absolute", left:0, top:'2rem'}}>

          
          <button 
              style={{
                position: "absolute",
                top: "1rem",
                left: "1rem",
                backgroundColor: "transparent",
                border: "none",
                fontSize: "2rem",
                cursor: "pointer",
                zIndex: "1002",
                backgroundColor:"#0000004D",
                padding:" 0 0.6rem",
                color:"white",
                borderRadius:"0.5rem"
              }} 
              onClick={() => setGetFreeDemo(false)}
            >
              &times;
            </button>
          <div style={{ position: 'relative', width: "100vw", height: "50vh",}}>
              <Image src="/assets/MobileView/freeDemo_img.webp" fill alt="Demo Image" />
              <div style={{
                position: 'absolute',
                width: "100vw",
                top: '80%',
                left: '40%',
                transform: 'translate(-40%, -80%)',
                textAlign: 'center',
                color: '#fff',  
                fontFamily: 'GilroyRegular',
                
                
              }}>
                <p style={{
                  fontSize: "1rem",
                  lineHeight: "1.5rem",
                  textAlign:"start",
                  margin: " 0 2rem ",
                  fontFamily:"GilroyMedium"
                }}>
                  Transform your business with Doroki—schedule <br />
                  a demo for effortless management today!
                </p>
              </div>
            </div>



            <div 
                style={{  
                  display: 'flex', flexDirection: 'column',backgroundColor:"white", padding:"1.5rem", marginTop:"-4.5rem", borderTopRightRadius:"1.5rem",borderTopLeftRadius:"1.5rem", zIndex:0
                }}
              >
                <div 
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    height: "53vh",  
                    overflowY: "auto",   
                    paddingBottom: "1rem"
                  }}
                >
                  <div style={{display: "flex", position: "relative", fontSize:"1.2rem", alignItems:"center", }}>
                    <h2 style={{fontFamily:"GilroySemiBold", fontSize:"1.2rem", color:"#2B3B45"}}>
                      Schedule a free demo
                    </h2>
                    <div style={{height: "1.1rem", width: "1.2rem", position: 'relative', marginLeft:"0.5rem" }}>
                      <Image src='/assets/stars.svg' fill alt="stars" />
                    </div>
                     
                  </div>
                  <div style={{ backgroundColor: "#FF6A6A",minHeight: "0.4rem",  width: "3.5rem",borderRadius:"5px"}}></div> <br />

                   
                   
                 

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
                    height: "3rem",
                    borderRadius: "0.4rem",
                    fontFamily: "GilroyRegular",
                    // padding: "0 0.8rem",
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
                    height: "3rem",
                    borderRadius: "0.4rem",
                    fontFamily: "GilroyRegular",
                    // padding: "0 0.8rem ",
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
            </form>  <br />
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
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backdropFilter: "blur(10px)",
              
          }}
        >
          <div 
            className={styles.thankyou_form} 
            style={{
              backgroundColor: "white",  
              borderRadius: "1.5rem",
              padding: "1rem 2rem ",
              boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",  
            }}
          >
            <div style={{ position: "relative", width: "24.4rem", height: "16rem" }}>
              <Image src="/assets/Thankyou_form.webp" fill alt="Thank You" />
            </div>
            <div style={{ textAlign: "center", padding: "1rem" }}>
              <div 
                style={{
                  display: "flex", 
                  position: "relative", 
                  fontSize: "18px", 
                  alignItems: "center", 
                  justifyContent: "center", 
                  textAlign: 'center'
                }}
              >
                <h1 style={{ fontFamily: "GilroySemiBold" }}>Thanks!</h1>
                <div 
                  style={{
                    height: "2rem", 
                    width: "2rem", 
                    position: "relative", 
                    right: "-0.5rem",
                  }}
                >
                  <Image src='/assets/stars.svg' fill alt="stars" />
                </div>
              </div>
              <br />
              <p 
                style={{
                  fontFamily: "GilroyRegular", 
                  color: "#767676", 
                  fontSize: "0.9rem", 
                  lineHeight: "1.5rem",
                }}
              >
                Thank you for reaching out! Someone from
                our team will connect with you shortly.
              </p>
            </div>
            <div style={{ width: "100%", marginTop: "1rem" }}>
              <BlackButton 
                text="Okay!" 
                style={{ padding: "1rem", height: "3rem", width: "100%" }} 
                onClick={() => setThanks(false)}  
              />
            </div>
          </div>
        </div>
      )}


    </div>
  );
};

export default MobileNavBar;
