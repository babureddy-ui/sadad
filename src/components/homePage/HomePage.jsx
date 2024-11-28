import Image from 'next/image';
import React from 'react';
import { BlackButton, MarqueeComponentHomePage } from '../Buttons/Button';
import styles from "./HomePage.module.css"
import { HiddenPowers } from '@/pages/HiddenPowers';
import SwiperComponent from '@/pages/SwiperComponent';
// import { SwiperSlide } from 'swiper/react';
// import Swiper from 'swiper';
// import { Autoplay, Pagination } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/pagination';
// import 'swiper/css/autoplay';
import TestimonialsSwiper from '@/pages/ClientSwiper';
import FrequentQuestions from '@/pages/Questions';


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
   
   
];

  return (
    <>
      <div style={{ display: "flex", gap: "20px", margin:"5.4rem "}}>
        <div style={{ width: "300px", height: "300px", height: "37rem", }}>
          <div style={{ width: "10rem",  height: "9rem",  position: "absolute", bottom: "4rem", left: "5rem", }}>
            <Image src="/assets/homePage/Ellipse.svg" fill />
          </div>
          <div style={{ width: "30rem",left: "10rem",bottom: "9rem",position: "absolute",fontSize: "18px", }}>
            <div style={{display:"flex"}}> 
            <h1 style={{margin:"1rem 0"}}> Drive your <span style={{color:'#FF6347',}}>Restaurant </span>business forward <br />easily with Doroki </h1> <div style={{height:"30px", width:"30px", position:"absolute", top:"6.5rem",right:"8rem"}}><Image src='/assets/stars.svg' fill/></div></div>
            <p>
              Multi-functional solution tailored uniquely for your business. Manage all your
              Orders, Inventory & Transactions at one place.
            </p>
            <div className={styles.inputSection} >
              <input
                style={{ border: "none", width: "20rem", padding: "1rem" }}
                type="text"
                placeholder="Enter phone number/email"
              />
              <BlackButton text="Contact Me" style={{padding: "1rem  1.8rem", width: "10rem", height: "3rem",fontSize: "15px",}}/>
            </div>
          </div>
        </div>
        <div style={{ width: "40rem",height: "39rem",position: "absolute",right: "0", }} >
          <Image src="/assets/homePage/hero-image.webp" fill />
        </div>
      </div>

      <div style={{ display: "flex",  gap: "20px", marginTop: "20px" ,justifyContent:"space-around", margin:"5rem 8rem"}}>
        {BusinessTypes.map((ele, index) => (
          <div
            key={index}
            style={{display: "flex",alignItems: "center", gap: "15px", padding: "10px", borderRadius: "8px",}} >
            <div style={{ width: "100px", height: "100px", position: "relative" }}>
              <Image src={ele.icon} alt={ele.title} fill />
            </div>
            <div>
              <h3 style={{ margin: "0 0 5px 0" }}>{ele.title}</h3>
              <p style={{ margin: 0 }}>{ele.text}</p>
            </div>
          </div>
        ))}
      </div>

      <div>
        <div>
            <div style={{justifyContent:'center', textAlign:"center",}}> 
          <h1 style={{margin:"2rem 0"}}>Trusted by top Businesses</h1>
          <p> Doroki is trusted by countless businesses, offering seamless, reliable solutions <br /> that drive growth across multiple industries</p>
          </div>
          </div>
          <div className={styles.marquee_section}>
                <MarqueeComponentHomePage ClientsArr={ClientsArr1} />
            </div>
      </div>

      <div>
        <HiddenPowers/>
      </div>


      <div style={{margin:"4rem 8rem 4rem 9.5rem"}}>
      <div style={{display:"flex",margin: '0 0rem'}}>
            <p style={{backgroundColor:"#ffedd6", padding:"0.5rem 1.5rem", borderRadius:"2rem"}}>Dedicated <b>Bank Account</b> for your transaction business</p>
            <div style={{height:"30px", width:"30px", position:"absolute", right:"51rem"}}><Image src='/assets/stars.svg' fill/></div>
        </div>

        <div style={{ display: 'flex', margin: "1rem 0", gap: '3rem', justifyContent: "space-between", flexWrap: "wrap" }}>
  
            <div className={styles.bank_containers} style={{ flex: '1 1 300px', maxWidth: '45%' }}>
              <div style={{ position: "relative", height: "50px", width: "50px" }}>
                <Image src="/assets/sweep.svg" fill />
              </div>
              <h2 style={{ margin: "2rem 0" }}>
                Effortless <span style={{ color: "#0391f0" }}>Auto Sweep</span> for <br /> seamless daily funds transfer
              </h2>
              <p>Daily auto-sweep transfers funds effortlessly into your designated account.</p>
              <div className={styles.bank_img}>
                <Image src="/assets/bank.webp" fill />
              </div>
            </div>

            <div className={styles.bank_containers} style={{ flex: '1 1 300px', maxWidth: '45%' }}>
              <div style={{ position: "relative", height: "50px", width: "50px" }}>
                <Image src="/assets/money.svg" fill />
              </div>
              <h2 style={{ margin: "2rem 0" }}>
                Seamlessly <span style={{ color: "#0391f0" }}>Send Money</span> <br /> through our secure POS
              </h2>
              <p>Seamlessly send money with our POS, ensuring secure transactions and instant transfers for your convenience and peace of mind.</p>
              <div className={styles.money_img}>
                <Image src="/assets/sendMoney.webp" fill />
              </div>
            </div>
            
          </div>

      </div>

      <div style={{margin:"8rem 8rem 0 9.5rem",  height:"80rem", }}>
        <div style={{width:"25rem", position:"relative" , bottom:"-12rem"}}>
            <h1 style={{margin:"2rem 0"}}>Efficient, <span style={{color:"#0391f0"}}>Versatile</span> <br />Reliable</h1>
            <p>Multi-functional solution tailored uniquely for your business. Manage all your Orders, Inventory & Transactions at one place.</p>
        </div>
        <div style={{width:"100%", height:"38rem", position:'relative'}}><Image src="/assets/versatile.webp" fill/></div>
        <div style={{width:"54%", height:"34rem", position:'relative', top:"-25.5rem", left:"41.3rem"}}><Image src="/assets/Transaction.webp" fill/></div>

      </div>

      <div style={{margin:"-20rem 0 0 0 "}}>
 
         <div style={{display:"flex", height:"38rem"}}>
          <div style={{backgroundColor:"#0F2531", padding:"3rem", width:"50%" ,padding:"8rem 0 0 8rem"}}> 
          <div style={{position:"relative", zIndex:'2', width:"20.5rem", height:"23rem", left:"27rem" , top:"4rem"}}><Image src="/assets/DorokiTableTerminal.webp"fill/></div>

           <div style={{width:"20rem",position:"relative", margin:"-20rem 0"}}>
            <div  className={styles.businessTitle}><p>Brought to you by </p><div style={{position:"relative", height:"2rem", width:"4rem"}}><Image src="/assets/PagaLogo_1.svg" fill/></div></div>
            <div style={{ color:"#FFFFFF"}}>
              <h1 style={{margin:"2rem 0"}}>Start your Business journey effortlessly with Doroki</h1>
              <p>Doroki empowers business with effortless management, seamlessly handling sales, inventory, and customer data, ensuring a smoother end of day reconciliation.</p>
            </div>
            <div style={{position:"relative", height:"5rem", width:"8rem"}}><Image src="/assets/playstore.svg" fill/></div>
            </div>
           </div>
           <div style={{ backgroundColor: "#0F31", width: "50%" }}>
            <SwiperComponent/>
          </div>
            </div>
      </div>


      <div style={{margin:"5rem 0" }}>
        <div style={{display:"flex", justifyContent:"center", textAlign:'center'}}><h1>Many business dilemmas, <br />yet only One Solution reigns supreme</h1></div>
        
      </div>
     <div style={{height:"40rem", width:"100%"}}> 
      <div style={{backgroundColor:"#0F2531", color:"white", height:"35rem"}}>
        {/* margin:"-10rem 0" */}
        <div style={{display:"flex" , position:"relative",justifyContent:"space-between", padding:"5rem  10rem 2rem 10rem",  zIndex:'4' }}>
          <h2>Clients rave - <span style={{backgroundColor:"#f2931d", padding:"0rem 0.8rem"}}>Doroki</span>   <br />exceeds expectations!</h2>
          <p>"Clients consistently praise Doroki for its unmatched <br /> reliability, seamless integration, and ease of use,<br /> enhancing business operations."</p>
        </div>
        <div style={{position:"relative", width:"70rem", height:"30rem", left:"10rem"}}><Image src="/assets/video-img.webp" fill/></div>
        <div style={{position:"relative", width:"50rem", height:"30rem",margin:"-45rem 0" }}><Image src="/assets/Doroki-Blurred.webp" fill/></div>

      </div>
      </div>

      <div style={{margin:"10rem 0"}}>
      <div style={{ display: "flex", margin: "0 10rem", alignItems: "center", position: "absolute" }}>
      <h1>Our Client’s kind words</h1>
      <div style={{ height: "30px", width: "30px", position: "absolute", left: "23rem" }}>
        <Image src="/assets/stars.svg" alt="Stars" fill style={{ objectFit: "contain" }} />
      </div>

      
     </div> <br />
    <div   >
     <TestimonialsSwiper/>
      </div>
      </div>

      <div style={{margin:"-5rem 9rem", display:"flex" , justifyContent:'space-between'}}>
        <div style={{position:"relative" , width:"29rem", height:"37rem"}}>
          <Image src="/assets/queries.webp" fill/>
        </div>
        <div style={{position:'absolute', left:"40rem"}}>
        <FrequentQuestions FaqTableData={faqs}/>
        </div>
      </div> 

      <div className={styles.business_needs}>

        <div style={{width:'31rem', margin:"4rem 0",justifyContent:'center', alignItems:"center" }}>
          <div style={{display:"flex"}}><h1>Intuitive and Easy to use App for your Business needs</h1>  <div style={{height:"50px", width:"50px", position:"relative", top:"2rem",right:"4rem"}}><Image src='/assets/stars.svg' fill/></div></div>
          
          <p style={{margin:"1rem 0", lineHeight:"29px"}}>Seamless billing made easy with our POS system <br />
          efficient payment processing with zero hassle</p>
          <div style={{position:"relative", height:"5rem", width:"8rem"}}><Image src="/assets/playstore.svg" fill/></div>
        </div>
        <div style={{position:'relative', width:"40rem", height:"25rem"}}><Image src="/assets/app-img.webp" fill/></div>
      </div>
    </>
  );
};
