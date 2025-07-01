import Image from 'next/image'
import React, { useState } from 'react'
import styles from "../homePage/HomePage.module.css"
import { BlackButton, BlueButton } from '../Buttons/Button'
import axios from "axios";
import Link from 'next/link';

const DesktopFooter = () => {
  const [thanks, setThanks] = useState(false);
  const [formData, setFormData] = useState({ email: "" });
  const [state, setState] = useState("IDLE");
  const [errorMessage, setErrorMessage] = useState("");
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrorMessage(""); 
  };
  const subscribe = async (e) => {
    e.preventDefault();
    setState("LOADING");
    setErrorMessage("");

    try {
      await axios.post("/api/newsletter", formData);
      
      setState("SUCCESS");
      setThanks(true);
      setFormData({ email: "" }); 

    } catch (e) {
      const errorResponse = e.response?.data?.error;
      setErrorMessage(errorResponse === "Member Exists"
        ? "You are already subscribed to our newsletter."
        : errorResponse || "An error occurred"
      );
      setState("ERROR");
    }
  };

      
  return (
    <div className={styles.pagaLanding}>
      <div className={styles.subscriptionSection}>
        <div style={{display:"flex", justifyContent:"space-between"}}> 
        <div  style={{  position: "absolute",  width: "27rem", height: "49.3rem",left:0 }} >
          <Image src="/assets/footer_backgroundimg1.webp" fill  alt="invt" />
        </div>
        <div  style={{  position: "absolute",  width: "21rem", height: "42.3rem",right:0, bottom:0}} >
          <Image src="/assets/footer_backgroundimg3.webp" fill  alt="invt" />
        </div>
        </div>

        {thanks && (
        <div className={styles.thanks_form}
        >
        <div className={styles.thankyou_form}>
          <div className={styles.thankyou_img}>
            <Image src="/assets/Thankyou_form.webp" fill alt="Thank You" />
          </div>
          <div className={styles.thanksForm_content}>
          <div   className={styles.thanksForm_title}>
                <h1>Thanks!</h1>
                <div style={{height: "2rem", width: "2rem", position: 'relative', right: "-0.5rem", }}>
                  <Image src='/assets/stars.svg' fill alt="stars" />
                </div>
                </div> <br />
            <p  className={styles.thanksform_text}>
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
        <div className={styles.subscribe_section}>
          <div className={styles.subscribe} >
            <h1  className={styles.subscribe_title} >Subscribe to our Newsletter</h1> <br />
            <p  className={styles.subscribe_txt} >
              Doroki streamlines business operations by centralising order, inventory,
              and transaction management. It offers seamless billing, quick invoice
              generation, efficient inventory management, and an eStore for online
              orders.
            </p> <br />
            <form onSubmit={subscribe}> 
            <input
              className={styles.subscribe_input}
              type="email"
              name="email"
              onChange={handleChange}
              required
              placeholder="Email Address"
              value={formData.email}
            />
            <BlueButton text="Subscribe now" style={{ width:"100%", padding: "1rem", height: "3.5rem", }} />
            {errorMessage && <p style={{color:'white', fontFamily:"GilroyRegular",fontSize:"0.8rem"}}>{errorMessage}</p>}
            </form>
            
          </div>
        </div>
         
       <div className={styles.footer_navigations}>
        <div>
          <p className={styles.footerContent_titile}>Contact</p>
          <a href="mailto:support@doroki.com">
            <p className={styles.footerContent}>Email : support@doroki.com</p>
          </a>

          <p className={styles.footerContent}>Call : 02013444300</p>
          <a href="https://x.com/_dorokibypaga" target="" rel="noopener noreferrer"> 
          <p className={styles.footerContent}>X : @_dorokibypaga</p>
          </a>
          <a href="https://web.facebook.com/people/Doroki-by-Paga/61576983554167/"><p className={styles.footerContent}>Facebook : @Doroki-by-Paga</p> </a>
           <a href="https://wa.me/2348099227242" target='_blank' rel="noopener noreferrer">  <p className={styles.footerContent}>WhatsApp : 08099227242</p></a>
          <p className={styles.footerContent}>SMS : 09090027242</p>
          <p className={styles.footerContent}>Address : 176 Herbert <br />
           Macaulay Wy, Yaba, Lagos</p>
        </div>
        <div>
          {/* <div>
            <p className={styles.footerContent_titile}>About</p>
             <a href="https://www.mypaga.com/paga-web/company.paga"><p className={styles.footerContent}>Company</p></a>
            <a href="https://www.wearepaga.com/"> <p className={styles.footerContent}>Careers</p></a>
            <a href="https://paga.frontify.com/auth?referer=%2F"> <p className={styles.footerContent}>Media Kit</p></a>
          </div>  */}
          <div>
            <p className={styles.footerContent_titile}>Support</p>
           {/* <a href="https://mypaga.freshdesk.com/support/home" target='_blank'>  <p className={styles.footerContent}>FAQ</p></a> */}
           <a href="https://mypaga.freshdesk.com/a/solutions/categories/35000131870/folders/35000246072?portalId=35000023706&view=all" target='_blank'>  <p className={styles.footerContent}>FAQ</p></a>
           <a href='https://api.whatsapp.com/send/?phone=%2B2348099227242&text&type=phone_number&app_absent=0' target='_blank'>  <p className={styles.footerContent}>Help Desk</p></a>
            {/* <p className={styles.footerContent}>Find an Agent</p> */}
          </div>
        </div>
        <div>
          <p className={styles.footerContent_titile}>Links</p>
          {/* <a href="https://donate.ng/"  target='_blank'><p className={styles.footerContent}>Donate.ng</p></a> */}
          
          {/* <p className={styles.footerContent}>Paga Blog</p> */}
          {/* <p className={styles.footerContent}>Pricing</p> */}
          {/* <p className={styles.footerContent}>Remittances</p> */}
          <Link href="/terms-of-service">
          <p className={styles.footerContent}>Terms of Service</p>
          </Link>
          {/* <p className={styles.footerContent}>Security</p> */}
        </div>
        <div>
          <p className={styles.footerContent_titile}>Products</p>
           <a href="https://www.mypaga.com/home/" target='_blank'><p className={styles.footerContent}>Personal</p></a>
          {/* <p className={styles.footerContent}>Agent</p> */}
          {/* <p className={styles.footerContent}>Business</p> */}
          <a href="https://developer.paga.com/?_gl=1*1kxbc0i*_gcl_au*MjgxMTk5NDg1LjE3NDA0Njk2ODQ." target='_blank'><p className={styles.footerContent}>Developer</p></a>
        </div>
       </div>

        {/* <div style={{display:'flex', color:"white", gap:'5rem',  margin:"5rem 0 5rem -1rem", width:"65rem",  alignItems:'center',fontFamily:"GilroyRegular", fontSize:"0.8rem", justifyContent:"space-between",  }}>
          <div style={{display:'flex', flexDirection:'column', gap:"1rem", justifyContent:'center',  }}> 
          <div style={{display:"flex",gap:'0.5rem' ,zIndex:1, textAlign:"start", lineHeight:"1.2rem"}}>
            <div style={{position:"relative", width:'1.3rem', height:"1.3rem", top:"0.5rem"}}><Image src='/assets/MapPin.svg' fill alt="invt" /></div>
            <p>176 Herbert Macaulay Wy, Yaba,<br /> Lagos 101245, Lagos</p>
          </div>
          <div style={{display:"flex",gap:'0.5rem',zIndex:1,alignItems:"center"}}>
            <div style={{position:"relative", width:'1.3rem', height:"1.3rem",}}><Image src='/assets/Phone.svg' fill alt="invt" /></div>
            <p> +234 (0) 801 234 5678</p>
          </div>
          <div style={{display:"flex", gap:'0.5rem',zIndex:1, alignItems:"center"}}>
            <div style={{position:"relative", width:'1.3rem', height:"1.3rem"}}><Image src='/assets/mail.svg' fill alt="invt" /></div>
            <p>support@doroki.com</p>
          </div>
          </div>
          <div style={{display:"flex", gap:'1.5rem', width:"20rem" , alignItems:'center',  }}>
            <div  className={styles.footerIcon}><Image src='/assets/facebook.svg' fill alt="fb" /></div>
            <div className={styles.footerIcon}><Image src='/assets/Instagram.svg' fill alt="insta" /></div>
            <div className={styles.footerIcon}><Image src='/assets/Twitter.svg' fill alt="twitter" /></div>
            <div className={styles.footer_Icon}><Image src='/assets/LinkedIn.svg' fill alt="linkedin" /></div>

          </div>
          <div style={{display:'flex', flexDirection:'column', gap:"0.5rem", zIndex:1 ,textAlign:'start',}}>
            <p>Terms & Conditions</p>
            <p>privacy Policy</p>
          </div>
          
        </div> */}


        <div style={{ margin:"3rem  0 1.5rem 0", position:"relative" }}>
        <p className={styles.poweredby}>Powered by</p>

        <div className={styles.poweredby_logo_section} >
          <div className={styles.footer_paga_logo}><Image src='/assets/footer_paga_logo.svg' fill alt='paga'/></div>
          <div className={styles.footer_CenterLine}></div>
          <div className={styles.footer_qb_logo} ><Image src='/assets/footer_new_qb_logo.svg' fill alt='qb'/></div>
        </div> <br />
        <p className={styles.all_rights}>
          © {new Date().getFullYear()} Doroki All rights reserved.</p>
        </div>

        <div style={{display:"flex", gap:'1.5rem', width:"20rem" , alignItems:'center', position:'absolute',right:'5%', bottom:"8%" }}>

            <a href="https://web.facebook.com/people/Doroki-by-Paga/61576983554167/" target="_blank" rel="noopener noreferrer">
            <div  className={styles.footerIcon}><Image src='/assets/facebook.svg' fill alt="fb" /></div>
            </a>
            <a href="https://www.instagram.com/dorokibypaga" target="_blank" rel="noopener noreferrer">
              <div className={styles.footerIcon}>
                <Image src='/assets/Instagram-new.svg' fill alt="insta" />
              </div>
            </a>
            <a href="https://x.com/_dorokibypaga" target="_blank" rel="noopener noreferrer">
            <div className={styles.footerIcon}><Image src='/assets/Twitter.svg' fill alt="twitter" /></div>
            </a>
            <a href="https://www.linkedin.com/company/doroki/" target="_blank" rel="noopener noreferrer">
            <div className={styles.footer_Icon}><Image src='/assets/LinkedIn.svg' fill alt="linkedin" /></div>
            </a>
            <a href="https://www.youtube.com/@Doroki-hq" target="_blank" >
            <div className={styles.footerIcon}><Image src='/assets/youTube.svg' fill alt="youTube" /></div>
            </a>
          </div>
        
      </div>
    </div>
  )
}

export default DesktopFooter
