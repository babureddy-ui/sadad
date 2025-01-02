import React from 'react'
import MobileNavBar from '../navBar/MobileNavBar'
import styles from './Mobile.module.css';
import Image from 'next/image';
import { BlackButton, BlueButton, MarqueeComponentMobilePage } from '../Buttons/Button';
import MobileCustomise from '@/pages/MobileCustomise';
import MobileHiddenPowers from '@/pages/MobileHiddenPowers';
import MobileSwiperComponent from '@/pages/MobileSwiperComponent';
import OneSolution from '@/pages/OneSolution';
import TransactionSwiper from '@/pages/TransactionSwiper';
import MobileQuestions from '@/pages/MobileQuestions';
import MobileClientSwiper from '@/pages/MobileClientSwiper';

   const MobileHomePage = () => {

    const BusinessTypes = [
        {
          icon: "/assets/business.svg",
          title: "Business Solution",
          text: "Platform that simplifies and streamlines your business operations",
        },
        {
          icon: "/assets/versatile.svg",
          title: "Versatile Payment Options",
          text: "Get payment solutions such as bank transfers, USSD, and mobile payments",
        },
        {
          icon: "/assets/designed.svg",
          title: "Designed for SMEs",
          text: "Doroki provides a powerful suite of tools at a competitive price",
        },
      ];
    const faqs = [
        {
            para: (
                <span style={{ width: "90%" }}>
                    What is Doroki?
                </span>
            ),
            des: "Doroki is a comprehensive, multi-functional solution designed to streamline your business operations by managing orders, inventory, and transactions all in one place.",
            id: 1,
            activeIndex: 1,
        },
        {
            para: (
                <span style={{ width: "90%" }}>
                How can I manage my inventory with Doroki?
                </span>
            ),
            des: "Doroki is a comprehensive, multi-functional solution designed to streamline your business operations by managing orders, inventory, and transactions all in one place.",
            id: 2,
            activeIndex: 0,
        },
        {
            para: (
                <span style={{ width: "90%" }}>
                   Does Doroki support credit sales?
    
                </span>
            ),
            des: "Doroki is a comprehensive, multi-functional solution designed to streamline your business operations by managing orders, inventory, and transactions all in one place.",
            id: 3,
            activeIndex: 0,
        },
        {
            para: (
                <span style={{ width: "90%" }}>
                   Does Doroki support versatile payment modes?
                </span>
            ),
            des: "Doroki is a comprehensive, multi-functional solution designed to streamline your business operations by managing orders, inventory, and transactions all in one place.",
            id: 4,
            activeIndex: 0,
        },
        {
            para: (
                <span style={{ width: "90%" }}>
                   What is Doroki?
                </span>
            ),
            des: "Doroki is a comprehensive, multi-functional solution designed to streamline your business operations by managing orders, inventory, and transactions all in one place.",
            id: 5,
            activeIndex: 0,
        },
        {
          para: (
              <span style={{ width: "90%" }}>
                 How does Doroki help with billing?
              </span>
          ),
          des: "Doroki is a comprehensive, multi-functional solution designed to streamline your business operations by managing orders, inventory, and transactions all in one place.",
          id: 6,
          activeIndex: 0,
      },
       
       
      ];
    const ClientsArr1 = [
        {
          imgSrc: "/assets/GUO.webp",
          altText: "Hindustan Unilever limited",
          width:"13rem",
          height:"6rem",
        },
        {
          imgSrc: "/assets/GUO.webp",
          altText: "Heineken",
          width:"13rem",
          height:"6rem",
        },
        {
            imgSrc: "/assets/GUO.webp",
            altText: "Hindustan Unilever limited",
            width:"13rem",
            height:"6rem",
          },
          {
            imgSrc: "/assets/GUO.webp",
            altText: "Heineken",
            width:"13rem",
            height:"6rem",
          },
          {
            imgSrc: "/assets/GUO.webp",
            altText: "Hindustan Unilever limited",
            width:"13rem",
            height:"6rem",
          },
          {
            imgSrc: "/assets/GUO.webp",
            altText: "Heineken",
            width:"13rem",
            height:"6rem",
          },
          {
            imgSrc: "/assets/GUO.webp",
            altText: "Hindustan Unilever limited",
            width:"13rem",
            height:"6rem",
          },
          {
            imgSrc: "/assets/GUO.webp",
            altText: "Heineken",
            width:"13rem",
            height:"6rem",
          },
          {
            imgSrc: "/assets/GUO.webp",
            altText: "Hindustan Unilever limited",
            width:"13rem",
            height:"6rem",
          },
          {
            imgSrc: "/assets/GUO.webp",
            altText: "Heineken",
            width:"13rem",
            height:"6rem",
          },
          {
            imgSrc: "/assets/GUO.webp",
            altText: "Hindustan Unilever limited",
            width:"13rem",
            height:"6rem",
          },
          {
            imgSrc: "/assets/GUO.webp",
            altText: "Heineken",
            width:"13rem",
            height:"6rem",
          },


      ];
  return (
    <>
     <div><MobileNavBar/></div>
     <div className={styles.mobileView}>
        <div>
            <div className={styles.heroimg}><Image src="/assets/MobileView/heroImg-mobile.webp" fill/></div>

            <div style={{margin:' 2rem 1rem',}}>
                <div style={{display:"flex"}}> 
                <h1 className={styles.headline}>
              Drive your 
              <div className={styles.box}>
              <span className={styles.word} style={{color:"#FF6347"}}>Restaurant</span>
                <span className={styles.word} style={{color:"#1E92F7"}}>Retail</span>
                <span className={styles.word} style={{color:"#6ACD6E"}}>Grocery</span>
                <span className={styles.word} style={{color:"#CA80E9"}}>Spa & Salon</span>
                <span className={styles.word} style={{color:"#F15542"}}>Electronics</span>
                
              </div> <br />
              business forward <br/> easily with Doroki
            </h1>
            <div className={styles.stars}> <Image src='/assets/stars.svg' fill alt="stars" /></div>
            </div>
               <div style={{display:"flex", flexDirection:"column", margin:"2rem 0rem",  }}>
                <input  className={styles.input} style={{fontFamily:"GilroyRegular", color:"#818181"}} type="text" placeholder='Phone Number/Email' /> <br />
                <BlackButton text="contact me" style={{padding:"1.2rem 0 ", height:"auto", fontSize: '1rem'}} />
               </div>

            </div>

        </div>

      {/* ------------- business types------------ */}
        <div>
        <div className={styles.business_types}>
        {BusinessTypes.map((ele, index) => (
          <div
          key={index}
          className={styles.BusinessTypes}
        >
          <div className={styles.imageContainer}>
            <Image src={ele.icon} alt={ele.title} fill />
          </div>
          <div style={{margin:"0 1rem 0 0"}}>
            <h3 className={styles.business_title}>{ele.title}</h3> 
            <p style={{ fontFamily: "GilroyUlight", color: '#767676' , fontSize:"0.9rem", lineHeight:"1.2rem"}}>{ele.text}</p>
          </div>
        </div>
        
        ))}
      </div>
        </div>

        <div style={{margin:'5rem 0 '}}>
        <div>
            <div style={{justifyContent:'center', textAlign:"center", margin:"1rem" }}> 
          <h1 style={{margin:"1rem 0",  fontFamily: 'GilroySemiBold', fontSize:"1.7rem"}}>Trusted by top Businesses</h1>
          <p style={{ fontFamily: "GilroyMedium", lineHeight:"1.3rem", fontSize:"0.9rem"}}> <span style={{fontFamily:"GilroyBold"}}>Doroki</span>  is trusted by countless businesses, offering seamless, reliable solutions  that drive <br />growth across multiple industries</p>
          </div>
          </div>
          <div className={styles.marquee_section}>
                <MarqueeComponentMobilePage ClientsArr={ClientsArr1} />
            </div>
        </div>
        <div style={{marhin:"3rem"}}>
          <MobileCustomise/>
        </div>
  

        <div style={{margin:"1rem 1rem"}}>

        <div  className={styles.features}>
          <p className={styles.feature_title}>Features</p>
          <div style={{ height: "30px", width: "30px", position: "relative", margin:'0 0.5rem' }}>
            <Image  src="/assets/stars.svg"   alt="Star icon"   fill  />
          </div>
        </div>

  
        <div style={{display:'grid', gap:'1.5rem',}}>
        <div className={styles.card}>
        <div style={{display:'flex', flexDirection:"column", gap:'2rem'}}> 
            <div style={{ position: "relative", width: "4rem", height: "4rem" }}>
              <Image src="/assets/Loans1.svg" fill alt="loans" />
            </div>
            <h2 style={{fontFamily:"GilroySemiBold", lineHeight:"2.3rem"}}>Seamlessly manage  <span style={{color:"#0091F0"}}> Billing</span> operations with precision</h2>
            <p style={{fontFamily:"GilroyRegular" ,lineHeight:"1.6rem"}}>
              Seamlessly send money with our POS, ensuring secure transactions and
              instant transfers for your convenience and peace of mind.
            </p>
            </div>

            <div className={styles.topImage}>
              <Image src="/assets/billing_Top_img.webp" fill alt="billing" />
            </div>
            <div className={styles.otherImage}>
              <Image src="/assets/billing.webp" fill alt="billing" />
            </div>
          </div>


          <div className={styles.card2}>
        <div style={{display:'flex', flexDirection:"column", gap:'2rem'}}> 
            <div style={{ position: "relative", width: "4rem", height: "4rem" }}>
              <Image src="/assets/Invt.svg" fill alt="invt" />
            </div>
            <h2 style={{fontFamily:"GilroySemiBold", lineHeight:"2.3rem"}}> Track and manage <span style={{color:"#0091F0"}}> Inventory </span>with ease</h2>
            <p style={{fontFamily:"GilroyRegular", lineHeight:"1.6rem"}}>
            Efficient inventory management helps you track, organize and optimize stock levels, ensuring smoother business operations.
            </p>
            </div>

            <div className={styles.topImage2}>
              <Image src="/assets/Inventory_Top_img.webp" fill alt="invt" />
            </div>
            <div className={styles.otherImage}>
              <Image src="/assets/Inventory_img.webp" fill alt="invt" />
            </div>
          </div>
      </div>

        </div>


      <div> 
        <div className={styles.Online_section}>
        <div>
        <div className={styles.card3}>
          <div style={{backgroundColor:"#339B35", color:"white",width:"5.5rem",height:"1rem", border:"0.5rem solid white" , borderTop:"none",padding:"0.5rem", fontSize:"0.7rem", fontFamily:"GilroyBold" , position:"relative",left:"55%",top:"-2rem", borderBottomLeftRadius:"1rem",borderBottomRightRadius:"1rem"}}> <p>Coming Soon</p></div>
          <div style={{display:'flex', flexDirection:"column", gap:'2rem', marginTop:"-7rem"}}> 
              <div style={{ position: "relative", width: "4rem", height: "4rem" , }}>
                <Image src="/assets/eStore.svg" fill alt="invt" />
              </div>
              <h2 style={{fontFamily:"GilroySemiBold", lineHeight:"2rem"}}> Take your business online, with our <span style={{color:"#0091F0"}}> eStore  </span> feature</h2>
              <p style={{fontFamily:"GilroyRegular"}}>Take your business online effortlessly, expanding customer reach and boosting sales through a seamless digital platform </p>
          </div>

          <div className={styles.topImage3}>
            <Image src="/assets/eStore_Top_img.webp" fill alt="estore" />
          </div>
          <div className={styles.otherImage3}>
            <Image src="/assets/eStore-img.svg" fill alt="estore" />
          </div>
          </div>
        </div>

        <div>
          <div className={styles.card4}>
            <div style={{display:'flex', flexDirection:"column", gap:'2rem'}}> 
                <div style={{ position: "relative", width: "4rem", height: "4rem" }}>
                  <Image src="/assets/Reports.svg" fill alt="reports"/>
                </div>
                <h2 style={{fontFamily:"GilroySemiBold", lineHeight:"2rem"}}> Gain actionable insights through detailed<span style={{color:"#0091F0"}}> Reports </span> </h2>
                <p style={{fontFamily:"GilroyRegular"}}>Transform data into actionable insights with comprehensive reports, empowering informed decisions for business success and growth</p>
            </div>
            <div className={styles.otherImage4}>
              <Image src="/assets/Reports-img.svg" fill alt="reports" />
            </div>
          </div>
        </div>

        <div>
          <div className={styles.card5}>
            <div style={{display:'flex', flexDirection:"column", gap:'2rem'}}> 
                <div style={{ position: "relative", width: "4rem", height: "4rem" }}>
                  <Image src="/assets/Crm_icon.svg" fill alt="crm" />
                </div>
                <h2 style={{fontFamily:"GilroySemiBold", lineHeight:"2rem"}}> Drive engagement and loyalty with <span style={{color:"#0091F0"}}> CRM  </span></h2>
                <p style={{fontFamily:"GilroyRegular"}}> Build stronger customer connections with personalized CRM, driving loyalty and repeat business through meaningful engagement </p>
            </div>
            <div className={styles.topImage5}>
              <Image src="/assets/crm_Top_img.webp" fill alt="crm" />
            </div>
            <div className={styles.otherImage3}>
              <Image src="/assets/crm_img.svg" fill alt="crm" />
            </div>
          </div>
        </div>
       </div>

        </div>

        {/* -------------------------------MobileHiddenPowers---------------- */}
        
       <div style={{margin:'4rem 1rem'}}>

       <div  className={styles.features}>
          <p className={styles.feature_title}>Doroki’s Hidden Powers</p>
          <div style={{ height: "30px", width: "30px", position: "relative", margin:'0 0.5rem' }}>
            <Image  src="/assets/stars.svg"   alt="Star icon"   fill  />
          </div>
        </div> <br />
          <MobileHiddenPowers/>
        </div>
        
          <div style={{margin:"3rem 1rem"}}>
            <div style={{fontFamily:"GilroyMedium", display:"flex",flexDirection:"column", margin:"2rem 0", lineHeight:"1.9rem",}}>
            <div style={{display:"flex",justifyContent:'center'  }}> <h2>Dedicated </h2><div style={{position:"relative", width:"1.5rem", height:"1.5rem", margin:"0 0.5rem"}}><Image src="/assets/MobileView/Moneybag.svg" fill/></div> <h2>Bank Account</h2></div>
            <h2 style={{display:"flex",justifyContent:'center'}}>for your transaction business </h2> 
              </div>
            <div ><TransactionSwiper/></div>
          </div>



        <div style={{margin:"1rem 1rem", }}>

        <div className={styles.loan_section}>
         
         <div style={{position:'relative', width:"4rem", height:'4rem',margin:"0 0 2rem 0"}}><Image src='/assets/Loans.svg' fill alt="loans" /></div>
         
          <h2 style={{fontFamily:"GilroySemiBold",lineHeight:"2.2rem"}}> Get <span style={{color:"#0091F0"}}> Affordable Loans</span>  for your business from our partner banks</h2> <br />
          <p style={{fontFamily:"GilroyMedium", color:"#2b3c45", lineHeight:"1.5"}}>Scale your business with affordable, transparent loans provided by trusted banking partners, hassle-free and reliable</p>
     
         <div style={{position:"relative", height:"5rem", width:"10rem"}}><Image src="/assets/playstore.svg" fill alt="playstore" /></div>
         
         <div  className={styles.Loan_img}> <Image src="/assets/Loan_img.webp" fill alt="loan" /> </div>
        </div>
        </div>



        <div style={{margin:"1rem 1rem"}}>

        <div style={{width:"90vw", position:"relative" , margin:"3rem 1rem", justifyContent:"center", display:"flex", flexDirection:"column", textAlign:'center' }}>
            <h2 style={{margin:"1rem 0 1rem 0 ", fontFamily:"GilroySemiBold",}}>Efficient, <span style={{color:"#0391f0"}}>Versatile</span> Reliable</h2>
            <p style={{fontFamily:"GilroyMedium", color:"#767676" ,lineHeight:"1.5"}}>Multi-functional solution tailored uniquely for your business. Manage all your Orders, Inventory & Transactions at one place.</p>
        </div>
        <div style={{width:"93vw", height:"36rem", position:'relative',}}><Image src="/assets/MobileView/versatile.webp" fill alt="versatile" /></div>
        </div>



        <div style={{margin:"1rem 1rem", height:"45rem",position: "relative"}}>
           <div style={{display:'flex', flexDirection:"column", justifyContent:"center", width:"90vw", textAlign:"center" , margin:"3rem 0" }}>
              <h2 style={{margin:"1rem 0 1.5rem 0", fontFamily:"GilroySemiBold",  lineHeight:"2.3rem" }}>Start your Business journey effortlessly with <span style={{backgroundColor:"#f2931d", padding:"0.2rem 0.8rem 0.1rem 0.8rem"}}>Doroki</span> </h2> 
              <p style={{fontFamily:"GilroyRegular", lineHeight:"1.5rem", fontSize:"1.1rem"}}>Doroki streamlines business management,effortlessly handling sales, inventory, customer data, and reconciliation seamlessly</p> 
            </div>
            <div>
              <div><MobileSwiperComponent/></div>
            
              <div style={{width: "20rem", height: "26rem", position: "absolute",   top: "90%",left: "50%", transform: "translate(-50%, -50%)",zIndex: 1,bottom:"0rem"}}>
                <Image src="/assets/MobileView/device.webp" fill alt="Device" />
                </div>
            </div>
        </div>


        <div style={{margin:"1rem 1rem"}}>
        <div style={{display:"flex", justifyContent:"center", textAlign:'center', margin:"10rem 0 2rem 2rem",  }}>
          <h2 style={{position:'relative',fontFamily:"GilroySemiBold",}}>Many business dilemmas, <br />yet only <span style={{color:"#0091F0"}}>One Solution</span>  <br />reigns supreme</h2>
          <div style={{position:'relative', width:"4rem",left:"-1rem"}}><Image src='/assets/message.svg' fill alt="message"/></div>
          </div>
          <div>
          <OneSolution/>
          </div>
        </div>


        <div style={{height:"25rem", width:"100%",position:"relative",}}> 
      <div style={{backgroundColor:"#0F2531", color:"white", height:"20rem"}}>
         
        <div style={{display:"flex" , position:"relative",justifyContent:"center",padding:"4rem" ,   zIndex:'4' }}>
          <h2 style={{fontFamily:"GilroySemiBold"}}>Clients rave - <span style={{backgroundColor:"#f2931d", padding:"0.3rem 0.8rem"}}>Doroki</span>   <br />exceeds expectations!</h2>
        </div>
        

        <div style={{width:'100%', display:"flex",alignItems:'center', justifyContent:'center'}}>
        <div style={{position:"relative", width:"23rem", height:"12rem",top:"1rem", left:"4%", transform: "translateX(-5%)" }}><Image src="/assets/video-img2.webp" fill alt="video"/></div>
       </div>
        <div style={{position:"absolute", width:"100vw", height:"20rem",margin:"-25rem 0" }}><Image src="/assets/Doroki-Blurred.webp" fill alt="doroki" /></div>

      </div>
      </div> 

      <div>
        <div style={{position:'relative', width:"10rem", height:"4rem", bottom:"-5rem", left:"10rem"}}><Image src='/assets/MobileView/arrowDown.webp' fill/></div>
      <MobileClientSwiper/>
      </div>

     
     <div style={{margin:"1rem 1rem",position:"relative",}}>
          <div  className={styles.features} >
            <p className={styles.feature_title}>Frequently Asked Questions</p>
            <div style={{ height: "30px", width: "30px", position: "relative", margin:'0 0.5rem' }}>
              <Image  src="/assets/stars.svg"   alt="Star icon"   fill  />
            </div>
          </div>
          <div  className={styles.Questions_img}><Image src="/assets/MobileView/faq-img.webp" fill/></div>
          <div>
          <MobileQuestions FaqTableData={faqs}/>
          </div>

        </div>
         
          <div style={{margin:'1rem 1rem' }}> 
            <div className={styles.business_needs}>
          <div style={{ display:"flex", flexDirection:"column",textAlign:"center", justifyContent:'center', alignItems:"center", padding:"2rem 0"    }}>
            <div style={{display:"flex", fontFamily:"GilroySemiBold" }}><h2>Intuitive and Easy <br />to use Application for <br /><span style={{color:'#F8B53C'}}>All Business</span>  needs</h2>  
            </div>
            <div style={{position:"relative", height:"5rem", width:"9rem"}}><Image src="/assets/playstore.svg" fill alt="playstore" /></div>
          </div>
          <div style={{position:'relative', width:"100%", height:"16rem"}}><Image src="/assets/app-img1.webp" fill alt="app" /></div>
            </div>

            
            <div className={styles.business_needs2}>
              <div style={{display:"flex" , margin:"0.5rem 0"}}> 
              <div className={styles.bt_ele}>
              <h4 className={styles.business_text}>Efficiently manage your stock levels with our reliable POS</h4>
              <div style={{width:"10rem", height:"6rem", position:"absolute", bottom: "0", right: "0"}}>
                  <Image src="/assets/bt_img1.webp" layout="fill" objectFit="cover" alt="bt" />
              </div>
              </div>
              <div className={styles.bt_ele2}>
                <h4 className={styles.business_text}>Unlock powerful busines insights through detailed reports</h4>
                <div style={{width:"10rem", height:"6rem", position:"absolute", bottom: "0", right: "0"}}>
                <Image src="/assets/bt_img2.webp" layout="fill" objectFit="cover" alt="invt" />
              </div>
              </div>
              </div>
              <div style={{display:"flex"}}> 
              <div className={styles.bt_ele3}>
                <div style={{backgroundColor:"#339B35", color:"white",width:"5.5rem",padding:"0.5rem", fontSize:"12px", fontFamily:"GilroyBold" , position:"relative",left:"2rem", borderBottomLeftRadius:"0.5rem",borderBottomRightRadius:"0.5rem"}}> <p>Coming Soon</p></div>
                <h4 className={styles.business_text_online}>Transform your business go online and reach new customers.</h4>
                <div style={{width:"10rem", height:"6rem", position:"absolute", bottom: "0", right: "0"}}>
                <Image src="/assets/bt_img3.webp" layout="fill" objectFit="cover" alt="invt" />
              </div>
              </div >
              <div className={styles.bt_ele4} >
                <h4 className={styles.business_text}>Manage customers effectively, improving loyalty</h4>
                <div style={{width:"6rem", height:"6rem", position:"absolute", bottom: "0", right: "0"}}>
                <Image src="/assets/bt_img4.webp" layout="fill" objectFit="cover" alt="invt" />
              </div>
              </div>
              </div>
              </div>

          </div>
          
          <div style={{padding: '4rem 0rem 5rem 0.5rem', display: 'flex', flexDirection: 'column', margin:"10rem 1rem 0 1rem", width:"89vw"  }}>
            <div style={{display: "flex", position: "relative", fontSize:"21px", alignItems:"center"}}>
            <h2 style={{fontFamily:"GilroySemiBold", fontSize:"2rem"}}>Schedule a free demo</h2>

            <div style={{height: "2rem", width: "2rem", position: 'absolute', right: "0", }}>
              <Image src='/assets/stars.svg' fill alt="invt" />
            </div>
          </div>
          <br />
              <p style={{fontFamily:"GilroyMedium", color:"#767676", lineHeight:"1.5rem"}}>Discover how Doroki transforms your business—schedule a demotoday and experience effortless management firsthand</p> <br />
              <form>
                <div className={styles.input_divs}>
                
                  <input className={styles.inputs}
                    type="text" 
                    id="fullName" 
                    name="fullName" 
                    placeholder="Full Name" 
                    required 
                  />
                </div>

                <div className={styles.input_divs}>
                
                  <input className={styles.inputs}
                    type="tel" 
                    id="phoneNumber" 
                    name="phoneNumber" 
                    placeholder="Phone Number"
                    
                    required 
                  />
                </div>

                <div className={styles.input_divs}>
                
                  <input className={styles.inputs}
                    type="email" 
                    id="email" 
                    name="email" 
                    placeholder="Email Address" 
                    required 
                  />
                </div>

                <div className={styles.input_divs}>
                  
                  <select className={styles.inputs}
                    id="city" 
                    name="city" 
                    required 
                    // style={{height:'2rem'}}
                  >
                    <option value=""> City</option>
                    <option value="New York">New York</option>
                    <option value="Los Angeles">Los Angeles</option>
                    <option value="Chicago">Chicago</option>
                    <option value="San Francisco">San Francisco</option>
                  </select>
                </div>

                <div  className={styles.input_divs}>
                  
                  <select  className={styles.inputs}
                    id="businessType" 
                    name="businessType" 
                    required 
                    style={{   }}
                  >
                    <option value="">Business Type</option>
                    <option value="Retail">Retail</option>
                    <option value="Technology">Technology</option>
                    <option value="Service">Service</option>
                    <option value="Manufacturing">Manufacturing</option>
                  </select>
                </div>
                <BlackButton text="Kickstart your success" style={{width:"100%", padding:'1rem', height:'3rem'}} />
              </form>


 
            </div>
          


          <div style={{margin:"1rem 1rem"}}>
          <div style={{position:"relative",width:"100%", height:"25rem", margin:"1rem 0rem -0.9rem 0rem"}}><Image src="/assets/MobileView/demo_img.webp" fill/></div>
       <div className={styles.subscriptionSection}> 
          <div  style={{  position: "absolute",  width: "100vw", height: "46rem"}} >
            <Image src="/assets/MobileView/blur.webp" fill style={{ objectFit: "cover" }} alt="invt" />
          </div>
            <div className={styles.subscribe} >
              <h1 style={{fontFamily:"GilroySemiBold"}}>Subscribe to our <br /> Newsletter</h1> <br />
              <p style={{fontFamily:"GilroyRegular", fontSize:"0.85rem", lineHeight:"1.5rem"}}>Doroki centralizes operations with seamless billing, quick invoicing, inventory management and an eStore for online orders.</p>
              <input
                type="text"
                placeholder="Email Address"
                style={{ width: "95%", border: "none", 
                  borderRadius: "0.5rem",  
                  padding: "1rem  0", 
                  margin: "1rem auto",
                  zIndex:1,
                  outline:"none",
                  paddingLeft:"1rem",
                }}
              />
             <BlueButton  text="Subscribe now"  style={{ width: "100%",  padding: "1rem", height: "3rem", }} />
             </div>

            <div style={{display:'grid', color:"white", gap:'3rem', width:"100%", alignItems:'center',textAlign:"center",fontFamily:"GilroyThin", fontSize:"0.8rem"}}>


            <div style={{display:"flex", gap:'1rem', alignItems:'center',   justifyContent:'center'}}>
              <div  className={styles.footerIcon}><Image src='/assets/facebook.svg' fill alt="fb" /></div>
              <div className={styles.footerIcon}><Image src='/assets/Instagram.svg' fill alt="insta" /></div>
              <div className={styles.footerIcon}><Image src='/assets/Twitter.svg' fill alt="twitter" /></div>
              <div className={styles.footer_Icon}><Image src='/assets/LinkedIn.svg' fill alt="linkedin" /></div>

            </div>
            <div style={{display:'flex', flexDirection:'column', gap:"0.5rem", zIndex:1}}>
              <p>Terms & Conditions</p>
              <p>privacy Policy</p>
            </div>

            <div style={{display:'flex', flexDirection:'column', gap:"1rem", justifyContent:'center',  alignItems:'center', zIndex:1,}}> 
            <div style={{display:"flex",gap:'0.5rem' , width:"100%",zIndex:1}}>
              <div style={{position:"relative", width:'1rem', height:"1rem", marginRight:"-0.4rem"}}><Image src='/assets/MapPin.svg' fill alt="invt" /></div>
              <p>176 Herbert Macaulay Wy, Yaba, Lagos 101245, Lagos</p>
            </div>
            <div style={{display:"flex",gap:'0.5rem'}}>
              <div style={{position:"relative", width:'1rem', height:"1rem"}}><Image src='/assets/Phone.svg' fill alt="invt" /></div>
              <p> +234 (0) 801 234 5678</p>
            </div>
            <div style={{display:"flex", gap:'0.5rem'}}>
              <div style={{position:"relative", width:'1rem', height:"1rem"}}><Image src='/assets/Mail.svg' fill alt="invt" /></div>
              <p>support@doroki.com</p>
            </div>
            </div>
            <p>© 2024 Doroki All rights reserved.</p>
           </div>
          </div>
         </div>
       </div>
    </>
  )
}

export default MobileHomePage