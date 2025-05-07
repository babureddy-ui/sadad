import React, { useState } from 'react'
import MobileNavBar from '../navBar/MobileNavBar'
import styles from './Mobile.module.css';
import Image from 'next/image';
import { BlackButton, BlueButton, DropDownInput, MarqueeComponentMobilePage } from '../Buttons/Button';
import MobileCustomise from '@/pages/MobileCustomise';
import MobileHiddenPowers from '@/pages/MobileHiddenPowers';
import MobileSwiperComponent from '@/pages/MobileSwiperComponent';
import OneSolution from '@/pages/OneSolution';
import TransactionSwiper from '@/pages/TransactionSwiper';
import MobileQuestions from '@/pages/MobileQuestions';
import MobileClientSwiper from '@/pages/MobileClientSwiper';
import animationData from '../../../public/assets/Animation.json';
// import Lottie from 'react-lottie';
import states, { Busineeses } from '@/services/states';
import axios from "axios";
import MobileFooter from '../footerComponents/MobileFooter';
import dynamic from 'next/dynamic';
const Lottie = dynamic(() => import('react-lottie'), { ssr: false });


const MobileHomePage = () => {
      const [thanks, setThanks] = useState(false);
      const [subscribeEmail, setSubscribeEmail] = useState("");
      const [subscribeErrorMessage, setSubscribeErrorMessage] = useState("");
      const [demoErrorMessage, setDemoErrorMessage] = useState("");
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
        const { name, value } = e.target;
    
        if (name === "subscribeEmail") {
          setSubscribeEmail(value);
        } else {
          setFormData({ ...formData, [name]: value });
        }
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
          const errorResponse = e.response?.data?.error;

      if (errorResponse === "Member Exists") {
        setDemoErrorMessage("You are already scheduled for a demo. We will reach out to you soon.");
      } else {
        setDemoErrorMessage(errorResponse || "An error occurred");
      }
          setState("ERROR");
        }
      };
      
      const subscribe = async (e) => {
        e.preventDefault();
        setState("LOADING");
        setValidate(true);
        setSubscribeErrorMessage("");
        if (!subscribeEmail) {
          setSubscribeErrorMessage("Email is required.");
          setState("ERROR");
          return;
        }
    
        try {
          await axios.post("/api/newsletter", { email: subscribeEmail });
    
          setState("SUCCESS");
          setThanks(true);
          setSubscribeEmail("");
    
        } catch (e) {
          const errorResponse = e.response?.data?.error;
    
          if (errorResponse === "Member Exists") {
            setSubscribeErrorMessage("This email is already registered. Please use a different email or update your contact details.");
          } else {
            setSubscribeErrorMessage(errorResponse || "An error occurred");
          }
          setState("ERROR");
        }
      };
    const BusinessTypes = [
      {
        icon: "/assets/business.svg",
        title: "Business Solution",
        text: "Platform that simplifies and streamlines your business operations",
        width:"8rem",
        height:"5rem"
      },
      {
        icon: "/assets/versatile.svg",
        title: "Versatile Payment Options",
        text: "Get payment solutions such as bank transfers, USSD, and mobile payments",
        width:"9rem",
        height:"5rem"
      },
      {
        icon: "/assets/designed.svg",
        title: "Designed for SMEs",
        text: "Doroki provides a powerful suite of tools at a competitive price",
        width:"8rem",
        height:"5rem"
      },
    ];
    const faqs = [
      {
        para: (
          <span style={{ width: "90%" }}>
            What is Doroki?
          </span>
        ),
        des: "Doroki is an all-in-one business suite designed to simplify operations for small and medium-sized businesses (SMEs). It provides inventory management, CRM, digital payment processing, promotions, and much more—all in one affordable platform. Doroki helps businesses digitize their operations and streamline their payment solutions.",
        id: 1,
        activeIndex: 1,
      },
      {
        para: (
          <span style={{ width: "90%" }}>
            How does Doroki help my business?
          </span>
        ),
        des: "Doroki is a cost-effective, all-in-one solution designed specifically for SMEs. It combines traditional POS functionalities with advanced features like inventory management, CRM, and seamless payment integration. Doroki will also offers value-added services like business loans and multiple location support—all at an affordable price.",
        id: 2,
        
      },
      {
        para: (
          <span style={{ width: "90%" }}>
            What features does Doroki offer?
  
          </span>
        ),
        des: <div>
        Doroki includes features like:
        <ul>
          <li>Inventory Management</li>
          <li>Product Catalog</li>
          <li>Customer Relationship Management (CRM)</li>
          <li>Promotions & Discounts</li>
          <li>Customer Invoices</li>
          <li>Business Loans(Coming Soon)</li>
          <li>Multiple Location Management</li>
          <li>Digital Payment Solutions (including Bank Transfer, USSD, Scan to Pay, etc.)</li>
        </ul>
        </div>,
  
        id: 3,
        
      },
      {
        para: (
          <span style={{ width: "90%" }}>
           How do I get started with Doroki?
          </span>
        ),
        des: "Getting started with Doroki is easy! Simply download our app and sign up to create your account. Once you're registered, you'll be able to set up your business profile, add products to your catalog, and start accepting payments—all from one seamless platform. If you need assistance, you can access our support materials, FAQs, and contact customer service directly for any help you may need along the way.",
        id: 4,
        
      },
      {
        para: (
          <span style={{ width: "90%" }}>
           How Doroki place itself as a All-In-One business suite ?
          </span>
        ),
        des: "Our All-In-One business suite manages SKU-level catalogs, inventory,billing, multiple payment methods, bulk uploads, role permissions, promotions, reports, cloud backup, multi-location operations, and loyalty/membership programs.",
        id: 5,
        
      },
      {
        para: (
          <span style={{ width: "90%" }}>
           How many industries are covered by Doroki?
          </span>
        ),
        des: "Doroki is tailored to meet the unique needs of various sectors, including general retail, restaurants, grocery, spa & salon, and more.",
        id: 6,
        
      },
      {
        para: (
          <span style={{ width: "90%" }}>
           Does Doroki supports versatile payment options?
          </span>
        ),
        des: "Doroki is a  All-In-One business suite ensuring quick, secure transactions with a range of digital payment options—including charge card, bank transfer, paga, scan-to-pay, bank USSD and more",
        id: 7,
        
      },
  
  
    ];
    const ClientsArr1 = [
        {
          imgSrc: "/assets/GUO1.webp",
          altText: "Hindustan Unilever limited",
          width:"13rem",
          height:"6rem",
        },
        {
          imgSrc: "/assets/whispering1.webp",
          altText: "Heineken",
          width:"13rem",
          height:"6rem",
        },
          {
            imgSrc: "/assets/campagne1.webp",
            altText: "Heineken",
            width:"13rem",
            height:"6rem",
          },
          {
            imgSrc: "/assets/fitness1.webp",
            altText: "Hindustan Unilever limited",
            width:"13rem",
            height:"6rem",
          },
          {
            imgSrc: "/assets/lifeback1.webp",
            altText: "Heineken",
            width:"13rem",
            height:"6rem",
          },
          {
            imgSrc: "/assets/vestar1.webp",
            altText: "Hindustan Unilever limited",
            width:"13rem",
            height:"6rem",
          },
          {
            imgSrc: "/assets/ane1.webp",
            altText: "Hindustan Unilever limited",
            width:"13rem",
            height:"6rem",
          },
          


    ];
  return (
    <>
     <div><MobileNavBar/></div><br />
     <div className={styles.mobileView}>
        <div>
            <div className={styles.heroimg}><Image src="/assets/MobileView/Doroki_heroImg-mobile.webp" fill alt='heroImg-mobile1'/></div>

            <div style={{margin:' 1.3rem 1.8rem',}}>
                <div style={{display:"flex"}}> 
                <h1 className={styles.headline}>
              Drive your 
              <div className={styles.box}>
              <span className={styles.word} style={{color: "#FF6347"}}>Restaurant</span>
              <span className={styles.word} style={{color: "#0074D9"}}>Retail</span>
              <span className={styles.word} style={{color: "#4CAF50"}}>Grocery</span>
              <span className={styles.word} style={{color: "#8E44AD"}}>Spa & Salon</span>
              <span className={styles.word} style={{color: "#CF1A1A"}}>Electronics</span>
                
              </div> <br />
              business forward <br/> easily with Doroki
            </h1>
            <div className={styles.stars}> <Image src='/assets/stars.svg' fill alt="stars" /></div>
            </div>
               <div style={{display:"flex", flexDirection:"column", margin:"1rem 0rem",  }}>
                 <form onSubmit={subscribe}> 
                <input
                  className={styles.input}
                  style={{fontFamily:"GilroyRegular", color:"#818181"}}
                  type="text"
                  name="subscribeEmail"
                  onChange={handleChange}
                  // required
                  placeholder="Enter phone number/email"
                  value={subscribeEmail}
                />
                <BlackButton text="Contact me" style={{padding:"1.2rem 0 ", height:"auto", fontSize: '1rem' ,width:"100%", marginTop:"1rem"}} />

                </form>
                {subscribeErrorMessage && <p className={styles.error}>{subscribeErrorMessage}</p>}

               </div>

            </div>

        </div>



        {thanks && (
        <div className={styles.thankyou_form_section}>
          <div  className={styles.thankyou_form} >
            <div style={{ position: "relative", width: "23.4rem", height: "16rem" }}>
              <Image src="/assets/Thankyou_form.webp" fill alt="Thank You" />
            </div>
            <div style={{ textAlign: "center", padding: "1rem" }}>
              <div className={styles.thankyou_form_textSection}>
                <h1 style={{ fontFamily: "GilroySemiBold" }}>Thanks!</h1>
                <div className={styles.thankyou_form_stars_icon}>
                  <Image src='/assets/stars.svg' fill alt="stars" />
                </div>
              </div>
              <br />
              <p className={styles.thankyou_form_text}>
                Thank you for reaching out! Someone from
                our team will connect with you shortly.
              </p>
            </div>
            <div style={{ width: "100%", marginTop: "1rem" }}>
              <BlackButton 
                text="Okay!" 
                style={{ padding: "1rem", height: "3rem", width: "100%" }} 
                onClick={() => {
                  setThanks(false);
                  window.location.reload();  
                }}   
              />
            </div>
          </div>
        </div>
      )}

      {/* ------------- business types------------ */}
        <div>
        <div className={styles.business_types}>
        {BusinessTypes.map((ele, index) => (
          <div
          key={index}
          className={styles.BusinessTypes}
        >
          <div className={styles.imageContainer} style={{ width: ele.width, height: ele.height }}>
            <Image src={ele.icon} alt={ele.title} fill />
          </div>
          <div style={{margin:"0 1rem 0 0"}}>
            <h3 className={styles.business_title}>{ele.title}</h3> 
            <p className={styles.businessType_text}>{ele.text}</p>
          </div>
        </div>
        
        ))}
      </div>
        </div>

        <div style={{margin:'5rem 0 '}}>
        <div>
            <div className={styles.marqueeComponent_section} > 
          <h4 className={styles.marqueeComponent_title} >Trusted by top Businesses</h4>
          <p className={styles.marqueeComponent_txt}> <span style={{fontFamily:"GilroyBold"}}>Doroki</span>  is trusted by countless businesses, offering seamless, reliable solutions  that drive <br />growth across multiple industries</p>
          </div>
          </div>
          <div className={styles.marquee_section}>
                <MarqueeComponentMobilePage ClientsArr={ClientsArr1}  speed={100}  direction="left"/>
            </div>
        </div>
        <div style={{margin:'-1rem 0'}}>
          <MobileCustomise/>
        </div>
  

        <div style={{margin:"1rem 1.8rem"}}>

        <div  className={styles.features}>
          <p className={styles.feature_title}>Features</p>
          <div className={styles.feature_stars_icon} >
            <Image  src="/assets/stars.svg"   alt="Star icon"   fill  />
          </div>
        </div>

  
        <div style={{display:'grid', gap:'1.5rem',}}>
        <div className={styles.card}>
        <div  className={styles.Loan_card} > 
            <div  className={styles.features_card_icon}>
              <Image src="/assets/Loans1.svg" fill alt="loans" />
            </div>
            <h4  className={styles.Loan_card_title} >Seamlessly manage  <span style={{color:"#0091F0"}}> Billing</span> operations with precision</h4>
            <p className={styles.Loan_card_txt} >
            Seamlessly send money with Doroki, ensuring secure transactions and instant transfers for your convenience and peace of mind.
            </p>
            </div>

            <div className={styles.topImage}>
              <Image src="/assets/MobileView/billing_Top_img.webp" fill alt="billing" />
            </div>
            <div className={styles.otherImage}>
              <Image src="/assets/MobileView/billing.webp" fill alt="billing" />
            </div>
          </div>


          <div className={styles.card2}>
        <div  className={styles.Inventory_card}> 
            <div className={styles.features_card_icon} >
              <Image src="/assets/Invt.svg" fill alt="invt" />
            </div>
            <h4 style={{fontFamily:"GilroySemiBold", lineHeight:"2rem",fontSize:"1.4rem"}}> Track and manage <span style={{color:"#0091F0"}}> Inventory </span>with ease</h4>
            <p style={{fontFamily:"GilroyRegular", lineHeight:"1.7rem" , marginTop:"-0.5rem"}}>
            Efficient inventory management helps you track, organize and optimize stock levels, ensuring smoother business operations.
            </p>
            </div>

            <div className={styles.topImage2}>
              <Image src="/assets/MobileView/Inventory_Top_img.webp" fill alt="invt" />
            </div>
            <div className={styles.otherImage}>
              <Image src="/assets/MobileView/paga_Inventory_img.webp" fill alt="invt" />
            </div>
          </div>
      </div>

        </div>


      <div> 
        <div className={styles.Online_section}>
        <div>
        <div className={styles.card3}>
          <div  className={styles.eStore_card_comingSoon} > <p>Coming Soon</p></div>
          <div className={styles.eStore_card} > 
              <div className={styles.card_icon} >
                <Image src="/assets/eStore.svg" fill alt="invt" />
              </div>
              <h4 className={styles.eStore_card_title}> Take your business online, with our <span style={{color:"#0091F0"}}> eStore  </span> feature</h4>
              <p className={styles.eStore_card_txt} >Take your business online effortlessly, expanding customer reach and boosting sales through a seamless digital platform </p>
          </div>

          <div className={styles.topImage3}>
           
          <Image src="/assets/eStore_Top_img1.webp" fill alt="estore" />
          <Lottie options={{ animationData }} height={60} width={70} style={{zIndex:1000, top:"1rem", position:"relative"}} />
        </div>
          <div className={styles.otherImage3}>
            <Image src="/assets/eStore-img.webp" fill alt="estore" />
          </div>
          </div>
        </div>

        <div>
          <div className={styles.card4}>
            <div  className={styles.Reports_card} > 
                <div  className={styles.Reports_card_icon}>
                  <Image src="/assets/Reports.svg" fill alt="reports"/>
                </div>
                <h4 className={styles.Reports_card_title}> Gain actionable insights through detailed<span style={{color:"#0091F0"}}> Reports </span> </h4>
                <p className={styles.Reports_card_txt}>Transform data into actionable insights with comprehensive reports, empowering informed decisions for business success and growth</p>
            </div>
            <div className={styles.otherImage4}>
              <Image src="/assets/Reports-img.webp" fill alt="reports" />
            </div>
          </div>
        </div>

        <div>
          <div className={styles.card5}>
            <div className={styles.Reports_card}> 
                <div className={styles.Reports_card_icon}>
                  <Image src="/assets/Crm_icon.svg" fill alt="crm" />
                </div>
                <h4 className={styles.Reports_card_title}> Drive engagement and loyalty with <span style={{color:"#0091F0"}}> CRM  </span></h4>
                <p className={styles.Reports_card_txt}> Build stronger customer connections with personalized CRM, driving loyalty and repeat business through meaningful engagement </p>
            </div>
            <div className={styles.topImage5}>
              <Image src="/assets/MobileView/crm_Top_img.webp" fill alt="crm" />
            </div>
            <div className={styles.otherImage3}>
              <Image src="/assets/crm_img1.webp" fill alt="crm" />
            </div>
          </div>
        </div>
       </div>

        </div>

        {/* -------------------------------MobileHiddenPowers---------------- */}
        
       <div style={{margin:'4rem 1rem'}}>

       <div  className={styles.features1}>
          <p className={styles.feature_title}>Doroki’s Hidden Powers</p>
          <div className={styles.feature_stars_icon}>
            <Image  src="/assets/stars.svg"   alt="Star icon"   fill  />
          </div>
        </div> 
        </div>
        
        <div><MobileHiddenPowers/></div>
        
        
          <div style={{margin:"3rem 0rem"}}>
            <div  className={styles.bank_account_section}  >
            <div className={styles.bank_account_section_title} > <h4>Dedicated </h4><div className={styles.Moneybag} ><Image src="/assets/MobileView/Moneybag.svg" fill alt='Moneybag'/></div> <h4 className={styles.bank_account_section_title2}>Bank Account</h4></div>
            <h4 className={styles.bank_account_section_title}>for your transaction business </h4> 
              </div>
            <div ><TransactionSwiper/></div>
          </div>



        <div style={{margin:"1rem 1.8rem", }}>

        <div className={styles.loan_section}>
         
         <div className={styles.Loans_image} ><Image src='/assets/Loans.svg' fill alt="loans" /></div>
         
          <h4 className={styles.loan_section_title} > Get <span style={{color:"#0091F0"}}> Affordable Loans</span>  for your business from our partner banks</h4>  
          <p className={styles.loan_section_txt} >Scale your business with affordable, transparent loans provided by trusted banking partners, hassle-free and reliable</p>
     
         <a href="https://play.google.com/store/apps/details?id=com.dpdtech.application.mpos.doroki&hl=en" target="_blank"><div className={styles.loan_section_playstore} ><Image src="/assets/playstore.svg" fill alt="playstore" /></div></a>
         
         <div  className={styles.Loan_img}> <Image src="/assets/MobileView/Paga_Affordableloans.webp" fill alt="loan" /> </div>
        </div>
        </div>



        <div style={{margin:"1rem 1.8rem"}}>

        <div className={styles.Versatile_section}  >
            <h4 className={styles.Versatile_section_title} >Efficient, <span style={{color:"#0391f0"}}>Versatile</span> Reliable</h4>
            <p  className={styles.Versatile_section_txt}>Multi-functional solution tailored uniquely for <br /> your business. Manage all your Orders, Inventory <br /> & Transactions at one place.</p>
        </div>
        <div className={styles.versatile_img}><Image src="/assets/MobileView/paga_versatile.webp" fill alt="versatile" /></div>
        </div>


        <div> 
        <div style={{margin:"1rem 1.8rem",position: "relative"}}>
           <div className={styles.Business_journey_section} >
              <h4  className={styles.Business_journey_section_title}>Start your Business journey <br /> effortlessly with <span className={styles.Doroki_word}>Doroki</span> </h4> 
              <p className={styles.Business_journey_section_txt}>Doroki streamlines business by effortlessly handling sales, inventory, customer data, and reconciliation seamlessly</p> 
            </div>
            <div> 
             
            </div>
        </div>
        <div style={{  height:"27rem", position: "relative", margin:"2rem 0"}}>
        <div><MobileSwiperComponent/></div>
            
            <div className={styles.device_image} >
              <Image src="/assets/MobileView/device1.webp" fill alt="Device" />
              </div>
        </div>
        
        </div>
        


        <div style={{margin:"0rem 1.8rem"}}>
        <div className={styles.OneSolution_section}>
          <h4 className={styles.OneSolution_section_title} >Many business dilemmas, <br />yet only <span style={{color:"#0091F0"}}>One Solution</span>  <br />reigns supreme</h4>
          <div className={styles.OneSolution_message_img}><Image src='/assets/message.svg' fill alt="message"/></div>
          </div>
           
        </div>
        <div>
          <OneSolution/>
          </div>


        {/* <div className={styles.Clients_rave_section}> 
      <div className={styles.Clients_rave_txtSection}>
         
        <div className={styles.Clients_rave_txt} >
          <h2 className={styles.Clients_rave_title}>Clients rave - <span style={{backgroundColor:"#f2931d", padding:"0.2rem 0.5rem"}}>Doroki</span>   <br />exceeds expectations!</h2>
        </div>
        

        <div className={styles.Clients_rave_img_section} >
        <div className={styles.video_img} ><Image src="/assets/video-img2.webp" fill alt="video"/></div>
       </div>
        <div className={styles.Doroki_Blurred_img} ><Image src="/assets/Doroki-Blurred.webp" fill alt="doroki" /></div>

      </div>
      </div>  */}

      {/* <div>
        <div className={styles.valued_opinions} ><Image src='/assets/MobileView/valued_opinions.webp' fill alt='valued_opinions'/></div>
      <MobileClientSwiper/>
      </div> */}

     
     <div style={{margin:"1rem 1.8rem",position:"relative",}}>
          <div  className={styles.features} >
            <p className={styles.feature_title}>Frequently Asked Questions</p>
            <div  className={styles.feature_stars_icon}>
              <Image  src="/assets/stars.svg"   alt="Star icon"   fill  />
            </div>
          </div>
          <div  className={styles.Questions_img}><Image src="/assets/MobileView/paga-faq-img.webp" fill alt='faq-img1'/></div> <br />
          <div>
          <MobileQuestions FaqTableData={faqs}/>
          </div>

        </div>
         
          <div style={{margin:'1rem 1.8rem' }}> 
            <div className={styles.business_needs}>
          <div className={styles.business_needs_txtSection} >
            <div className={styles.business_needs_title}><h4>Intuitive and Easy <br />to use Application for <br /><span style={{color:'#F8B53C'}}>All Business</span>  needs</h4>  
            </div>
            <a href="https://play.google.com/store/apps/details?id=com.dpdtech.application.mpos.doroki&hl=en" target="_blank"> <div className={styles.business_needs_palystoreIcon}><Image src="/assets/playstore.svg" fill alt="playstore" /></div></a>
          </div>
          <div className={styles.business_needs_appImg} ><Image src="/assets/MobileView/app-img1.webp" fill alt="app" /></div>
            </div>

            
            <div className={styles.business_needs2}>
              <div style={{display:"flex" , margin:"0.5rem 0"}}> 
              <div className={styles.bt_ele}>
              <h4 className={styles.business_text}>Efficiently manage your stock levels with our application</h4>
              <div className={styles.bt_img1}  >
                  <Image src="/assets/MobileView/bt_img1.webp" layout="fill" objectFit="cover" alt="bt" />
              </div>
              </div>
              <div className={styles.bt_ele2}>
                <h4 className={styles.business_text}>Unlock powerful busines insights through detailed reports</h4>
                <div className={styles.bt_img1}>
                <Image src="/assets/MobileView/bt_img2.webp" layout="fill" objectFit="cover" alt="invt" />
              </div>
              </div>
              </div>
              <div style={{display:"flex"}}> 
              <div className={styles.bt_ele3}>
                <div className={styles.bt_ele_comingSoon}  > <p>Coming Soon</p></div>
                <h4 className={styles.business_text_online}>Transform your business go online and reach new customers.</h4>
                <div className={styles.bt_img3} >
                <Image src="/assets/MobileView/bt_img3.webp" layout="fill" objectFit="cover" alt="invt" />
              </div>
              </div >
              <div className={styles.bt_ele4} >
                <h4 className={styles.business_text}>Manage customers effectively, improving loyalty</h4>
                <div  className={styles.bt_img4} >
                <Image src="/assets/MobileView/bt_img4.webp" layout="fill" objectFit="cover" alt="invt" />
              </div>
              </div>
              </div>
              </div>

          </div>
          
          <div  className={styles.formSection}  >
          <div className={styles.form_text_Section}>
          <h2 className={styles.form_title} >Schedule a free demo</h2>

          <div className={styles.formSection_stars}>
            <Image src="/assets/stars.svg" fill alt="invt" />
          </div>
        </div>

          <br />
              <p  className={styles.form_txt}>Discover how Doroki transforms your business—schedule a demotoday and experience effortless management firsthand</p> <br />
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
                style={{ width: "100%", padding: "1rem", height: "4rem", zIndex: 0, marginTop:"0.4rem" }}
              />
              {demoErrorMessage && <p className={styles.error}>{demoErrorMessage}</p>}
            </form>
            </div>

            <div>
                 
                 
            <div className={styles.footer_img}><Image src="/assets/MobileView/Paga_Footer_Mobile_img.webp" fill alt='demo'/></div>
            </div>
          

          <div><MobileFooter/></div>

          {/* <div style={{margin:"4rem 1rem 0rem 1rem"}}>
          <div className={styles.footer_img}><Image src="/assets/MobileView/demo_img12.webp" fill/></div>
       <div className={styles.subscriptionSection}> 
          <div  style={{  position: "absolute",  width: "100vw", height: "46rem"}} >
            <Image src="/assets/MobileView/blur.webp" fill  alt="invt" />
          </div>
            <div className={styles.subscribe} >
              <h1 style={{fontFamily:"GilroyMedium", fontSize:"1.7rem"}}>Subscribe to our <br /> Newsletter</h1> <br />
              <p style={{fontFamily:"GilroyRegular", fontSize:"0.85rem", lineHeight:"1.5rem"}}>Doroki centralizes operations with seamless billing, quick invoicing, inventory management and an eStore for online orders.</p> 
              <form onSubmit={subscribe} > 
              <input
                className={styles.subscribe_input}
                type="email"
                  name="email"
                   onChange={handleChange}
                  required
                  placeholder="Email Address"
                  value={formData.email}
              />
             <BlueButton  text="Subscribe now"  style={{ width: "100%",  padding: "1rem", height: "3.5rem", }} />
             </form>
             </div>

            <div  className={styles.footer_conatctSection}>


            <div className={styles.footer_conatctIcon}>
              <div  className={styles.footerIcon}><Image src='/assets/facebook.svg' fill alt="fb" /></div>
              <a href="https://www.instagram.com/doroki.commerce/" target="" rel="noopener noreferrer">
              <div className={styles.footerIcon}><Image src='/assets/Instagram.svg' fill alt="insta" /></div>
              </a>
              <a href="https://x.com/doroki_ng" target="" rel="noopener noreferrer">
              <div className={styles.footerIcon}><Image src='/assets/Twitter.svg' fill alt="twitter" /></div>
              </a>
              <div className={styles.footer_Icon} style={{marginBottom:"-0.4rem"}}><Image src='/assets/LinkedIn.svg' fill alt="linkedin" /></div>

            </div>
            <div  className={styles.Conditions}>
              <p>Terms & Conditions</p>
              <p>privacy Policy</p>
            </div>

            <div className={styles.LocationAndConatcts} > 
            <div className={styles.location}>
              <div className={styles.mapPin} ><Image src='/assets/MapPin.svg' fill alt="invt" /></div>
              <p>176 Herbert Macaulay Wy, Yaba, Lagos 101245, Lagos</p>
            </div>
            <div className={styles.phoneContact}  >
              <div className={styles.phoneIcon} ><Image src='/assets/Phone.svg' fill alt="invt" /></div>
              <p> +234 (0) 801 234 5678</p>
            </div>
            <div className={styles.phoneContact}>
              <div className={styles.phoneIcon}><Image src='/assets/mail.svg' fill alt="invt" /></div>
              <p>support@doroki.com</p>
            </div>
            </div>
            <p className={styles.all_rights}>© {new Date().getFullYear()} Doroki All rights reserved.</p>
        
           </div>
          </div>
         </div> */}
       </div>
    </>
  )
}

export default MobileHomePage