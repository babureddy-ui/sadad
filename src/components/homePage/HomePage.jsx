
import Image from 'next/image';
import React from 'react';
import { BlackButton, BlueButton, MarqueeComponentHomePage } from '../Buttons/Button';
import styles from "./HomePage.module.css"
import HiddenPowers from '@/pages/HiddenPowers';
import SwiperComponent from '@/pages/SwiperComponent';
import FrequentQuestions from '@/pages/Questions';
import CustomiseBy from '@/pages/CustomiseBy';
import ClientSwiper from '@/pages/ClientSwiper';


export const HomePage = () => {
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
   const ClientsArr1 = [
    {
      imgSrc: "/assets/GUO.webp",
      altText: "Hindustan Unilever limited",
    },
    {
      imgSrc: "/assets/GUO.webp",
      altText: "Heineken",
    },
    {
      imgSrc: "/assets/GUO.webp",
      altText: "BRIDGESTONE",
    },
    {
      imgSrc: "/assets/GUO.webp",
      altText: "ITC Limited",
    },
    {
      imgSrc: "/assets/GUO.webp",
      altText: "IRCTC",
    },
    {
      imgSrc: "/assets/GUO.webp",
      altText: "Taj sats",
    },
    {
      imgSrc: "/assets/GUO.webp",
      altText: "cremica",
    },
    {
      imgSrc: "/assets/GUO.webp",
      altText: "pansari group",
    },
    {
      imgSrc: "/assets/GUO.webp",
      altText: "reshmamandi",
    },
    {
      imgSrc: "/assets/GUO.webp",
      altText: "select citywalk",
    },
    {
      imgSrc: "/assets/GUO.webp",
      altText: "cococart",
    },
    {
      imgSrc: "/assets/GUO.webp",
      altText: "emoi",
    },
    {
      imgSrc: "/assets/GUO.webp",
      altText: "candor foods",
    },
    {
      imgSrc: "/assets/GUO.webp",
      altText: "tirumala tirupati devasthanam",
    },
    {
      imgSrc: "/assets/GUO.webp",
      altText: "earth rhythm",
    },
    {
        imgSrc: "/assets/GUO.webp",
        altText: "earth rhythm",
      },
      {
        imgSrc: "/assets/GUO.webp",
        altText: "earth rhythm",
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
const words = ['Retail', 'Restaurant', 'Electronics', 'Spa&Salon', 'Grocery'];

  return (
    <>

     
      <div className={styles.Top_heroSection}>
        <div className={styles.text_heroSection}>
          <div style={{ width: "10rem",  height: "9rem",  position: "absolute", bottom: "7rem", left: "-2rem", }}>
            <Image src="/assets/homePage/Ellipse.svg" fill alt="ellipse" />
          </div>
          <div style={{ width: "33rem",left: "2.5rem",bottom: "11rem",position: "absolute", }}>
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
              business forward <br /> easily with Doroki
            </h1>

       <div style={{height:"3rem", width:"3rem", position:"absolute", top:"9.3rem",right:"4.5rem"}}> <Image src='/assets/stars.svg' fill alt="stars" /></div></div>
              <p className={styles.p_heoText}>
                Multi-functional solution tailored uniquely for your business. Manage all your Orders, Inventory & Transactions at one place.
              </p> <br />

            <div className={styles.inputSection} >
              <input
                className={styles.content_me}
                type="text"
                placeholder="Enter phone number/email"
              />
              <BlackButton text="Contact Me" style={{padding: "1rem  1.8rem", width: "10rem", height: "3rem",fontSize: "15px",fontFamily: "GilroyRegular",}}/>
            </div>
          </div>
        </div>
        <div style={{ width: "47rem",height: "47rem",position: "relative",right: "-18rem", }} >
          <Image src="/assets/homePage/hero-image.svg" fill alt="hero" />
        </div>
      </div><br /> <br />

      <div className={styles.business_types}>
        {BusinessTypes.map((ele, index) => (
          <div
            key={index}
             className={styles.BusinessTypes} >
            <div style={{ width: "13rem", height: "7rem", position: "relative" }}>
              <Image src={ele.icon} alt={ele.title} fill />
            </div>
            <div>
              <h3 className={styles.business_title} >{ele.title}</h3> 
              <p style={{fontFamily: "GilroyUlight",color:'#767676' }}>{ele.text}</p>
            </div>
          </div>
        ))}
      </div>

      <div style={{margin:'10rem 0 '}}>
        <div>
            <div style={{justifyContent:'center', textAlign:"center",  }}> 
          <h1 style={{margin:"2rem 0",  fontFamily: 'GilroyMedium', fontSize:"3rem"}}>Trusted by top Businesses</h1>
          <p style={{ fontFamily: "GilroyMedium", lineHeight:"1.6rem" }}> Doroki is trusted by countless businesses, offering seamless, reliable solutions <br /> that drive growth across multiple industries</p>
          </div>
          </div>
          <div className={styles.marquee_section}>
                <MarqueeComponentHomePage ClientsArr={ClientsArr1} />
            </div>
      </div>


      <div style={{margin:"2rem 7rem 2rem 7.5rem"}}>
        <CustomiseBy/>
      </div>


{/* -----------------Features--------- */}
<div style={{margin:"4rem 7rem 6rem 7.5rem"}} >
<div  className={styles.features}>
  <p className={styles.feature_title}>Features</p>
  <div style={{ height: "30px", width: "30px", position: "relative", margin:'0 0.5rem' }}>
    <Image  src="/assets/stars.svg"   alt="Star icon"   fill  />
  </div>
</div>

<div >
    <div style={{display:'flex', gap:'1.5rem',}}>
       <div className={styles.card}>
      <div style={{display:'flex', flexDirection:"column", gap:'2rem'}}> 
          <div style={{ position: "relative", width: "4rem", height: "4rem" }}>
            <Image src="/assets/Loans.svg" fill alt="loans" />
          </div>
          <h1 style={{fontFamily:"GilroySemiBold", lineHeight:"2.6rem"}}>Seamlessly manage  <span style={{color:"#0091F0"}}> Billing</span> operations with precision</h1>
          <p style={{fontFamily:"GilroyRegular" ,lineHeight:"1.6rem"}}>
            Seamlessly send money with our POS, ensuring secure transactions and
            instant transfers for your convenience and peace of mind.
          </p>
          </div>

          <div className={styles.topImage}>
            <Image src="/assets/billing_Top_img.svg" fill alt="billing" />
          </div>
          <div className={styles.otherImage}>
            <Image src="/assets/billing-img.svg" fill alt="billing" />
          </div>
        </div>


        <div className={styles.card2}>
      <div style={{display:'flex', flexDirection:"column", gap:'2rem'}}> 
          <div style={{ position: "relative", width: "4rem", height: "4rem" }}>
            <Image src="/assets/Invt.svg" fill alt="invt" />
          </div>
          <h1 style={{fontFamily:"GilroySemiBold", lineHeight:"2.6rem"}}>  Track and manage <span style={{color:"#0091F0"}}> Inventory </span>  with ease</h1>
          <p style={{fontFamily:"GilroyRegular", lineHeight:"1.6rem"}}>
          Efficient inventory management helps you track, organize and optimize stock levels, ensuring smoother business operations.
          </p>
          </div>

          <div className={styles.topImage2}>
            <Image src="/assets/Inventory_Top_img.svg" fill alt="invt" />
          </div>
          <div className={styles.otherImage}>
            <Image src="/assets/Inventory_img.svg" fill alt="invt" />
          </div>
        </div>
    </div>
    <div style={{display:'flex' , gap:"1.5rem", justifyContent:"space-between" , margin:"1.5rem 0"}}>
      <div>
      <div className={styles.card3}>
      <div style={{backgroundColor:"#339B35", color:"white",width:"5.5rem",height:"1rem", border:"0.5rem solid white" , borderTop:"none",padding:"0.5rem", fontSize:"12px", fontFamily:"GilroyBold" , position:"relative",left:"12rem",top:"-2rem", borderBottomLeftRadius:"1rem",borderBottomRightRadius:"1rem"}}> <p>Coming Soon</p></div>
      <div style={{display:'flex', flexDirection:"column", gap:'2rem', marginTop:"-5rem"}}> 
          <div style={{ position: "relative", width: "4rem", height: "4rem" , }}>
            <Image src="/assets/eStore.svg" fill alt="invt" />
          </div>
          <h2 style={{fontFamily:"GilroySemiBold", lineHeight:"2rem"}}> Take your business online, with our <span style={{color:"#0091F0"}}> eStore  </span> feature</h2>
          <p style={{fontFamily:"GilroyRegular"}}>Take your business online effortlessly, expanding customer reach and boosting sales through a seamless digital platform </p>
          </div>

          <div className={styles.topImage3}>
            <Image src="/assets/eStore_Top_img.svg" fill alt="estore" />
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

          {/* <div className={styles.topImage4}>
            <Image src="/assets/Inventory_Top_img.webp" fill />
          </div> */}
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
            <Image src="/assets/crm_Top_img.svg" fill alt="crm" />
          </div>
        
          <div className={styles.otherImage3}>
            <Image src="/assets/crm_img.svg" fill alt="crm" />
          </div>
        </div>
      </div>
    </div>
  </div>


</div>
      <div>


      </div>

      <div>
        <HiddenPowers/>
      </div>
      <div style={{margin:"4rem 7rem 4rem 7.5rem"}}>
      <div style={{display:"flex",margin: '0 0rem'}}>
            <p style={{backgroundColor:"#ffedd6", padding:"0.5rem 1.5rem", borderRadius:"2rem", fontFamily:'GilroyMedium'}}>Dedicated <b>Bank Account</b> for your transaction business</p>
            <div style={{height:"30px", width:"30px", position:"absolute", right:"50rem", margin:"0.2rem 0 0 0.5rem"}}><Image src='/assets/stars.svg' fill alt="stars"/></div>
        </div>

        <div style={{ display: 'flex', margin: "1rem 0", gap: '1rem', justifyContent: "space-between", flexWrap: "wrap" }}>
  
            <div className={styles.bank_containers} >
              <div style={{ position: "relative", height: "4rem", width: "4rem " }}>
                <Image src="/assets/sweep.svg" fill alt="sweep" />
              </div>
              <h1 style={{ margin: "2rem 0 1rem 0", fontFamily:"GilroySemiBold", lineHeight:"2.6rem"}}>
                Effortless <span style={{ color: "#0391f0" }}>Auto Sweep</span> for <br /> seamless daily funds transfer
              </h1>
              <p style={{fontFamily:"GilroyMedium", color:"#767676", lineHeight:'1.5'}}>Daily auto-sweep transfers funds effortlessly into your designated account.</p>
              <div className={styles.bank_img}>
                <Image src="/assets/bank.svg" fill alt="bank" />
              </div>
            </div>

            <div className={styles.bank_containers}  >
              <div style={{ position: "relative", height: "4rem", width: "4rem" }}>
                <Image src="/assets/money.svg" fill alt="money" />
              </div>
              <h1 style={{ margin: "2rem 0 1rem 0", fontFamily:"GilroySemiBold",lineHeight:"2.6rem"}}>
                Seamlessly <span style={{ color: "#0391f0" }}>Send Money</span> <br /> through our secure POS
              </h1>
              <p style={{fontFamily:"GilroyMedium", color:"#767676",lineHeight:'1.5'}}>Seamlessly send money with our POS, ensuring secure transactions and instant transfers for your convenience and peace of mind.</p>
              <div className={styles.money_img}>
                <Image src="/assets/sendMoney.svg" fill alt="send money" />
              </div>
            </div>
            
          </div>

      </div>



      <div className={styles.loan_section}>
        <div style={{width:"38rem", display:"flex", flexDirection:'column', gap:"1.5rem" ,margin:"3rem 0"}}> 
         <div style={{position:'relative', width:"4rem", height:'4rem'}}><Image src='/assets/Loans.svg' fill alt="loans" /></div>
         <div style={{fontSize:"1rem",}}>
          <h1 style={{fontFamily:"GilroySemiBold",lineHeight:"2.6rem"}}> Get <span style={{color:"#0091F0"}}> Affordable Loans</span>  for your business from our partner banks</h1> <br />
          <p style={{fontFamily:"GilroyMedium", color:"#2b3c45", lineHeight:"1.5"}}>Scale your business with affordable, transparent loans provided by trusted banking partners, hassle-free and reliable</p>
         </div>
         <div style={{position:"relative", height:"5rem", width:"10rem"}}><Image src="/assets/playstore.svg" fill alt="playstore" /></div>
         </div>
         <div style={{position:'relative', height:'28rem', width:"42rem", bottom:"0rem"}}> <Image src="/assets/Loan_img.webp" fill alt="loan" /> </div>
      </div>


      <div style={{margin:"-4rem 7rem 0 7.5rem",  height:"80rem", }}>
        <div style={{width:"26rem", position:"relative" , bottom:"-16rem"}}>
            <h1 style={{margin:"1rem 0 1rem 0 ", fontFamily:"GilroySemiBold", fontSize:"3rem"}}>Efficient, <span style={{color:"#0391f0"}}>Versatile</span> <br />Reliable</h1>
            <p style={{fontFamily:"GilroyMedium", color:"#767676" ,lineHeight:"1.5"}}>Multi-functional solution tailored uniquely for your business. Manage all your Orders, Inventory & Transactions at one place.</p>
        </div>
        <div style={{width:"100%", height:"42rem", position:'relative'}}><Image src="/assets/versatile.webp" fill alt="versatile" /></div>
        <div style={{width:"54%", height:"38.75rem", position:'relative', top:"-31.5rem", left:"41.8rem"}}><Image src="/assets/dashBoard1.svg" fill alt="dashboard" /></div>

      </div>

      <div style={{margin:"-13rem 0 0 0 "}}>
 
         <div style={{display:"flex", height:"45rem"}}>
          <div style={{backgroundColor:"#0F2531", padding:"3rem", width:"50%" ,padding:"8rem 0 0 8rem"}}> 
          <div style={{position:"relative", zIndex:'2', width:"23.5rem", height:"25rem", left:"25rem" , top:"4rem"}}><Image src="/assets/DorokiTableTerminal.svg" fill alt="doroki" /></div>

          <div style={{width:"20rem",position:"relative", margin:"-22.5rem 0 0 -0.5rem"}}>
            {/* <div  className={styles.businessTitle}><p>Brought to you by </p><div style={{position:"relative", height:"2rem", width:"4rem"}}><Image src="/assets/PagaLogo_1.svg" fill/></div></div> */}
            <div style={{ color:"#FFFFFF", width:"25rem"}}>
              <h1 style={{margin:"1rem 0 1.5rem 0", fontFamily:"GilroySemiBold",fontSize:"2.5rem", lineHeight:"3rem" }}>Start your Business journey effortlessly with <span style={{backgroundColor:"#f2931d", padding:"0.2rem 0.8rem 0.1rem 0.8rem"}}>Doroki</span> </h1> 
              <p style={{fontFamily:"GilroyRegular", lineHeight:"1.5rem", fontSize:"1.1rem"}}>Doroki empowers business with effortless management, seamlessly handling sales, inventory, and customer data, ensuring a smoother end of day reconciliation.</p> <br />
            </div>
            <div style={{position:"relative", height:"6rem", width:"10rem", marginTop:"0.6rem"}}><Image src="/assets/playstore.svg" fill alt="playstore" /></div>
            </div>
          </div>
           <div style={{ backgroundColor: "#0F31", width: "50%" }}>
            <SwiperComponent/>
          </div>
            </div>
      </div>


      <div style={{margin:"5rem 6.5rem 7rem 7.5rem" }}>


        <div style={{display:"flex", justifyContent:"center", textAlign:'center', margin:"10rem 0 2rem 0",  }}>
          <h1 style={{position:'relative',fontFamily:"GilroySemiBold",fontSize:"2.5rem", lineHeight:"3.5rem", left:"3rem"}}>Many business dilemmas, <br />yet only <span style={{color:"#0091F0"}}>One Solution</span> reigns supreme</h1>
          <div style={{position:'relative', width:"7rem",margin:"0 0rem", left:'4rem', bottom:"1rem"}}><Image src='/assets/message.svg' fill alt="message"/></div>
          </div>
          
        <div style={{display:"flex",   justifyContent:'space-between'}}> 
          <div className={styles.solutionSection} >
            <div className={styles.headSec}><h1 style={{fontFamily:"GilroyBold"}}>POS 10Q</h1></div>
            <div className={styles.content_sec}> 
            <p style={{marginTop:"-3rem", fontFamily:"GilroyMedium",lineHeight:"1.5rem", }}>Good for both out-door and in-store use cases, integrated with MSR, EMV chip & pin, NFC card readers, dedicated 2D barcode scanning engine, 4G/WiFi Bluetooth connectivities, enable clients to choose whatever payment option.</p>
              <div className={styles.dev_img}><Image src='/assets/pos.svg' fill alt="POS" /></div>
              </div >
            </div>
            <div className={styles.solutionSection} >
            <div className={styles.headSec}><h1 style={{fontFamily:"GilroyBold"}}>MF 960</h1></div>
            <div className={styles.content_sec}> 
            <p style={{marginTop:"-3rem",fontFamily:"GilroyMedium",}}>Equips with Linux or Android system based on your choice. lt’s a win-win solution not only improving classic POS performance but also reducing cost of smart POS.</p>
              <div className={styles.dev_img}><Image src='/assets/mf.svg' fill alt="mf" /></div>
              </div >
            </div>
          </div>
           
        </div>
      
     <div style={{height:"41rem", width:"100%",position:"relative",}}> 
      <div style={{backgroundColor:"#0F2531", color:"white", height:"37rem"}}>
         
        <div style={{display:"flex" , position:"relative",justifyContent:"space-between", padding:"7rem  10rem 4rem 10rem",  zIndex:'4' }}>
          <h1 style={{fontFamily:"GilroySemiBold"}}>Clients rave - <span style={{backgroundColor:"#f2931d", padding:"0.3rem 0.8rem"}}>Doroki</span>   <br />exceeds expectations!</h1>
          <p style={{fontFamily:"GilroyRegular" , lineHeight:"1.7rem" , wordSpacing:"0.2rem"}}> &quot;Clients consistently praise Doroki for its unmatched <br /> reliability, seamless integration, and ease of use,<br /> enhancing business operations.&quot;</p>
        </div>
        

        <div style={{width:'100%', display:"flex",alignItems:'center', justifyContent:'center'}}>
        <div style={{position:"relative", width:"70rem", height:"30rem",    }}><Image src="/assets/video-img.webp" fill alt="video"/></div>
       </div>
        <div style={{position:"relative", width:"50rem", height:"30rem",margin:"-49rem 0" }}><Image src="/assets/Doroki-Blurred.webp" fill alt="doroki" /></div>

      </div>
      </div>  
      <div style={{margin:"15rem 0 8rem 0 "}}>
      <div style={{ display: "flex", margin: " 0 0 -2rem 7.5rem ", alignItems: "center", position: "relative" , gap:'1rem'}}>
      <h1 style={{fontFamily:"GilroySemiBold", fontSize:"2.4rem"}}>Our Client’s kind words</h1>
      <div style={{ height: "35px", width: "35px", position: "relative", left: "0rem" }}>
        <Image src="/assets/stars.svg" alt="Stars" fill />
      </div>

      
     </div> 
    <div >
     <ClientSwiper/>
      </div>
      </div>

      

      <div style={{margin:"1em 5rem 0rem 7.5rem", height:"50rem",display:"flex" , gap:"1rem",justifyContent:'space-between'}}>
        <div style={{position:"relative" , width:"29rem", height:"46rem"}}>
          <Image src="/assets/queries-img.webp" fill alt="queries" />
        </div>
        <div style={{position:'relative',}}>
        <FrequentQuestions FaqTableData={faqs}/>
        </div>
      </div> 

      <div className={styles.business_needs}>

        <div style={{width:'31rem', margin:"3rem 0",justifyContent:'center', alignItems:"center" }}>
          <div style={{display:"flex", fontFamily:"GilroySemiBold"}}><h1>Intuitive and Easy to use App for your Business needs</h1>  <div style={{height:"50px", width:"50px", position:"relative", top:"2rem",right:"6rem"}}><Image src='/assets/stars.svg' fill alt="stars" /></div></div>
          
          <p style={{margin:"1rem 0", lineHeight:"29px", fontFamily:"GilroyMedium"}}>Seamless billing made easy with our POS system <br />
          efficient payment processing with zero hassle</p>
          <div style={{position:"relative", height:"5rem", width:"9rem"}}><Image src="/assets/playstore.svg" fill alt="playstore" /></div>
        </div>
        <div style={{position:'relative', width:"39rem", height:"21rem"}}><Image src="/assets/app-img.svg" fill alt="app" /></div>
      </div>



      <div className={styles.business_needs2}>
      <div className={styles.bt_ele}>
      <h4 className={styles.business_text}>Efficiently manage your stock levels with our reliable POS</h4>
      <div style={{width:"12rem", height:"8rem", position:"absolute", bottom: "0", right: "0"}}>
          <Image src="/assets/bt_img1.webp" layout="fill" objectFit="cover" alt="bt" />
      </div>
      </div>
       <div className={styles.bt_ele2}>
        <h4 className={styles.business_text}>Unlock powerful busines insights through detailed reports</h4>
        <div style={{width:"12rem", height:"8rem", position:"absolute", bottom: "0", right: "0"}}>
        <Image src="/assets/bt_img2.webp" layout="fill" objectFit="cover" alt="invt" />
      </div>
       </div>
       <div className={styles.bt_ele3}>
        <div style={{backgroundColor:"#339B35", color:"white",width:"5.5rem",padding:"0.5rem", fontSize:"12px", fontFamily:"GilroyBold" , position:"relative",left:"2rem", borderBottomLeftRadius:"0.5rem",borderBottomRightRadius:"0.5rem"}}> <p>Coming Soon</p></div>
        <h4 className={styles.business_text_online}>Transform your business go online and reach new customers.</h4>
        <div style={{width:"12rem", height:"8rem", position:"absolute", bottom: "0", right: "0"}}>
        <Image src="/assets/bt_img3.webp" layout="fill" objectFit="cover" alt="invt" />
      </div>
       </div >
       <div className={styles.bt_ele4} >
        <h4 className={styles.business_text}>Manage customers effectively, improving loyalty</h4>
        <div style={{width:"8rem", height:"8rem", position:"absolute", bottom: "0", right: "0"}}>
        <Image src="/assets/bt_img4.webp" layout="fill" objectFit="cover" alt="invt" />
      </div>
       </div>
      </div>

 

      <div style={{display:'flex', margin:"5rem 10rem -1.4rem 0", width:"100%", }}>
  <div style={{position:"relative", width:"51rem", height:"49.5rem"}}>
    <Image src='/assets/demo_img.svg' fill alt="invt" />
  </div>
   
  

  <div style={{padding: '4rem 2rem 2rem 2rem', display: 'flex', flexDirection: 'column', width: '30.5rem',  }}>
  <div style={{display: "flex", position: "relative", fontSize:"21px", alignItems:"center"}}>
  <h1 style={{fontFamily:"GilroySemiBold"}}>Schedule a free demo</h1>

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

      {/* <button type="submit" style={{padding: '0.5rem', backgroundColor: '#0091F0', color: '#fff', border: 'none', borderRadius: '5px'}}>
        Submit
      </button> */}
       <BlackButton text="Kickstart your success" style={{width:"100%", padding:'1rem', height:'3rem'}} />
    </form>
  </div>
</div>

<div className={styles.subscriptionSection}>
  <div  style={{  position: "absolute",  width: "77rem", height: "41.3rem"}} >
    <Image src="/assets/blur.webp" fill style={{ objectFit: "cover" }} alt="invt" />
  </div>
  <div className={styles.subscribe}>
    <div style={{ maxWidth: "51%",  margin: "5rem auto auto auto",   display: "grid",  height: "auto",  alignItems: "center",  padding: "2rem",  textAlign: "center",  color: "#fff",  }} >
      <h1 style={{fontFamily:"GilroySemiBold"}}>Subscribe to our Newsletter</h1> <br />
      <p style={{fontFamily:"GilroyRegular", fontSize:"0.85rem", lineHeight:"1.5rem"}}>
        Doroki streamlines business operations by centralising order, inventory,
        and transaction management. It offers seamless billing, quick invoice
        generation, efficient inventory management, and an eStore for online
        orders.
      </p> <br />
      <input
        type="text"
        placeholder="Email Address"
        style={{
          width: "100%",
          border: "none",
          borderRadius: "0.5rem",
          padding: "1rem  0",
          margin: "1rem auto",
          zIndex:1,
          outline:"none",
          // fontSize:"1.1rem",
          paddingLeft:"1rem",
          width:"40rem",

        }}
      />
      <BlueButton
        text="Subscribe now"
        style={{ width:"100%", padding: "1rem", height: "3rem", }} />
    </div>
  </div>

  <div style={{display:'flex', color:"white", gap:'5rem', width:"100%", margin:"5rem 6rem", alignItems:'center',fontFamily:"GilroyThin", fontSize:"0.8rem"}}>
     <div style={{display:'flex', flexDirection:'column', gap:"1rem", justifyContent:'center',  }}> 
    <div style={{display:"flex",gap:'0.5rem' , zIndex:1}}>
      <div style={{position:"relative", width:'1rem', height:"1rem"}}><Image src='/assets/MapPin.svg' fill alt="invt" /></div>
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
    <div style={{display:"flex", gap:'1rem', width:"20rem" , alignItems:'center'}}>
      <div  className={styles.footerIcon}><Image src='/assets/facebook.svg' fill alt="fb" /></div>
      <div className={styles.footerIcon}><Image src='/assets/Instagram.svg' fill alt="insta" /></div>
      <div className={styles.footerIcon}><Image src='/assets/Twitter.svg' fill alt="twitter" /></div>
      <div className={styles.footer_Icon}><Image src='/assets/Linkedin.svg' fill alt="linkedin" /></div>

    </div>
    <div style={{display:'flex', flexDirection:'column', gap:"0.5rem", zIndex:1}}>
      <p>Terms & Conditions</p>
      <p>privacy Policy</p>
    </div>
  </div>
</div>


    </>
  );
};
