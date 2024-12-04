
import Image from 'next/image';
import React from 'react';
import { BlackButton, BlueButton, MarqueeComponentHomePage } from '../Buttons/Button';
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
import { CustomiseBy } from '@/pages/CustomiseBy';
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
   
   
];

  return (
    <>
      <div style={{ display: "flex", gap: "20px", margin:"4.8rem "}}>
        <div style={{ width: "300px", height: "300px", height: "37rem", }}>
          <div style={{ width: "10rem",  height: "9rem",  position: "absolute", bottom: "4rem", left: "5rem", }}>
            <Image src="/assets/homePage/Ellipse.svg" fill />
          </div>
          <div style={{ width: "30rem",left: "10rem",bottom: "9rem",position: "absolute",fontSize: "18px", }}>
            <div style={{display:"flex"}}> 
            <h1 className={styles.headline}> Drive your 
        <span className={styles.animated_text}>
          <span className={styles.text_wrapper}>
            Restaurant<br />
            Grocery <br />
            Retail<br />
            Spa & Salon <br />
            Electronics
             
          </span>
        </span>  business forward <br /> easily with Doroki
      </h1> <div style={{height:"30px", width:"30px", position:"absolute", top:"6.5rem",right:"8rem"}}>
              <Image src='/assets/stars.svg' fill/></div></div>
            <p>
              Multi-functional solution tailored uniquely for your business. Manage all your
              Orders, Inventory & Transactions at one place.
            </p>
            <div className={styles.inputSection} >
              <input
                style={{ border: "none", width: "20rem", padding: "1rem", outline:'none' }}
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
             className={styles.BusinessTypes} >
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
      <div style={{margin:"2rem 8rem 2rem 9rem"}}>
        <CustomiseBy/>
      </div>


{/* -----------------Features--------- */}
<div style={{margin:"4rem 8rem 6rem 9rem"}} >
<div style={{ display: "flex", alignItems: "center",margin:'2rem 0' }}>
  <p style={{backgroundColor:"#FDF2E4", padding:"0.5rem 2rem", borderRadius:"1rem"}}>Features</p>
  <div style={{ height: "30px", width: "30px", position: "relative" }}>
    <Image  src="/assets/stars.svg"   alt="Star icon"   fill  />
  </div>
</div>

<div >
    <div style={{display:'flex', gap:'1rem',}}>
       <div className={styles.card}>
      <div style={{display:'flex', flexDirection:"column", gap:'2rem'}}> 
          <div style={{ position: "relative", width: "4rem", height: "4rem" }}>
            <Image src="/assets/Loans.svg" fill />
          </div>
          <h1>Seamlessly manage  <span style={{color:"#0091F0"}}> Billing</span> operations with precision</h1>
          <p>
            Seamlessly send money with our POS, ensuring secure transactions and
            instant transfers for your convenience and peace of mind.
          </p>
          </div>

          <div className={styles.topImage}>
            <Image src="/assets/billing_Top_img.webp" fill />
          </div>
          <div className={styles.otherImage}>
            <Image src="/assets/billing.webp" fill />
          </div>
        </div>


        <div className={styles.card2}>
      <div style={{display:'flex', flexDirection:"column", gap:'2rem'}}> 
          <div style={{ position: "relative", width: "4rem", height: "4rem" }}>
            <Image src="/assets/Invt.svg" fill />
          </div>
          <h1>  Track and manage <span style={{color:"#0091F0"}}> Inventory </span>  with ease</h1>
          <p>
          Efficient inventory management helps you track, organize and optimize stock levels, ensuring smoother business operations.
          </p>
          </div>

          <div className={styles.topImage2}>
            <Image src="/assets/Inventory_Top_img.webp" fill />
          </div>
          <div className={styles.otherImage}>
            <Image src="/assets/Inventory_img.webp" fill />
          </div>
        </div>
    </div>
    <div style={{display:'flex' , gap:"1rem", margin:'1rem 0rem 0 0'}}>
      <div>
      <div className={styles.card3}>
      <div style={{display:'flex', flexDirection:"column", gap:'2rem'}}> 
          <div style={{ position: "relative", width: "4rem", height: "4rem" }}>
            <Image src="/assets/eStore.svg" fill />
          </div>
          <h2> Take your business online, with our <span style={{color:"#0091F0"}}> eStore  </span> feature</h2>
          <p>Take your business online effortlessly, expanding customer reach and boosting sales through a seamless digital platform </p>
          </div>

          <div className={styles.topImage3}>
            <Image src="/assets/eStore_Top_img.webp" fill />
          </div>
          <div className={styles.otherImage3}>
            <Image src="/assets/eStore.webp" fill />
          </div>
        </div>
      </div>
      <div>
      <div className={styles.card4}>
      <div style={{display:'flex', flexDirection:"column", gap:'2rem'}}> 
          <div style={{ position: "relative", width: "4rem", height: "4rem" }}>
            <Image src="/assets/Reports.svg" fill />
          </div>
          <h2> Gain actionable insights through detailed<span style={{color:"#0091F0"}}> Reports </span> </h2>
          <p>Transform data into actionable insights with comprehensive reports, empowering informed decisions for business success and growth</p>
          </div>

          {/* <div className={styles.topImage4}>
            <Image src="/assets/Inventory_Top_img.webp" fill />
          </div> */}
          <div className={styles.otherImage4}>
            <Image src="/assets/Reports.webp" fill />
          </div>
        </div>
      </div>
      <div>
      <div className={styles.card5}>
      <div style={{display:'flex', flexDirection:"column", gap:'2rem'}}> 
          <div style={{ position: "relative", width: "4rem", height: "4rem" }}>
            <Image src="/assets/Crm_icon.svg" fill />
          </div>
          <h2> Drive engagement and loyalty with <span style={{color:"#0091F0"}}> CRM  </span></h2>
          <p> Build stronger customer connections with personalized CRM, driving loyalty and repeat business through meaningful engagement </p>
          </div>

          <div className={styles.topImage5}>
            <Image src="/assets/crm_Top_img.webp" fill />
          </div>
          <div className={styles.otherImage3}>
            <Image src="/assets/crm_img.webp" fill />
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



      <div className={styles.loan_section}>
        <div style={{width:"38rem", display:"flex", flexDirection:'column', gap:"1.5rem" ,margin:"2rem 0"}}> 
         <div style={{position:'relative', width:"4rem", height:'4rem'}}><Image src='/assets/Loans.svg' fill/></div>
         <div style={{fontSize:"1rem",}}>
          <h1> Get <span style={{color:"#0091F0"}}> Affordable Loans</span>  for your business from our partner banks</h1> <br />
          <p>Scale your business with affordable, transparent loans provided by trusted banking partners, hassle-free and reliable</p>
         </div>
         <div style={{position:"relative", height:"5rem", width:"8rem"}}><Image src="/assets/playstore.svg" fill/></div>
         </div>
         <div style={{position:'relative', height:'25rem', width:"35rem", bottom:0}}> <Image src="/assets/Loan_img.webp" fill/> </div>
      </div>


      <div style={{margin:"-4rem 8rem 0 9.5rem",  height:"80rem", }}>
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


      <div style={{margin:"5rem 8rem" }}>


        <div style={{display:"flex", justifyContent:"center", textAlign:'center', margin:"4rem 0"}}><h1>Many business dilemmas, <br />yet only <span style={{color:"#0091F0"}}>One Solution</span> reigns supreme</h1></div>

        <div style={{display:"flex", gap:"3rem"}}>
          <div className={styles.solutionSection} >
            <div className={styles.headSec}><h2>POS 10Q</h2></div>
            <div className={styles.content_sec}> 
              {/* <div className={styles.star1}><Image src='/assets/star1.svg' fill/></div>
              <div className={styles.star2}><Image src='/assets/star2.svg' fill/></div> */}
            <p style={{marginTop:"-6rem"}}>Good for both out-door and in-store use cases, integrated with MSR, EMV chip & pin, NFC card readers, dedicated 2D barcode scanning engine, 4G/WiFi Bluetooth connectivities, enable clients to choose whatever payment option.</p>
              <div className={styles.dev_img}><Image src='/assets/pos.svg' fill/></div>
              </div >
            </div>
            <div className={styles.solutionSection} >
            <div className={styles.headSec}><h2>POS 10Q</h2></div>
            <div className={styles.content_sec}> 
            <p style={{marginTop:"-6rem"}}>Equips with Linux or Android system based on your choice. lt’s a win-win solution not only improving classic POS performance but also reducing cost of smart POS.</p>
              <div className={styles.dev_img}><Image src='/assets/mf.svg' fill/></div>
              </div >
            </div>
          </div>
           
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
    <div >
     <ClientSwiper/>
      </div>
      </div>

      

      <div style={{margin:"-5rem 9rem", display:"flex" , justifyContent:'space-between'}}>
        <div style={{position:"relative" , width:"34rem", height:"44rem"}}>
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



      <div className={styles.business_needs2}>
      <div className={styles.bt_ele}>
      <h4 className={styles.business_text}>Efficiently manage your stock levels with our reliable POS</h4>
      <div style={{width:"12rem", height:"8rem", position:"absolute", bottom: "0", right: "0"}}>
          <Image src="/assets/bt_img1.webp" layout="fill" objectFit="cover" />
      </div>
      </div>
       <div className={styles.bt_ele2}>
        <h4 className={styles.business_text}>Unlock powerful busines insights through detailed reports</h4>
        <div style={{width:"12rem", height:"8rem", position:"absolute", bottom: "0", right: "0"}}>
        <Image src="/assets/bt_img2.webp" layout="fill" objectFit="cover" />
      </div>
       </div>
       <div className={styles.bt_ele3}>
        <h4 className={styles.business_text}>Transform your business go online and reach new customers.</h4>
        <div style={{width:"12rem", height:"8rem", position:"absolute", bottom: "0", right: "0"}}>
        <Image src="/assets/bt_img3.webp" layout="fill" objectFit="cover" />
      </div>
       </div >
       <div className={styles.bt_ele4} >
        <h4 className={styles.business_text}>Manage customers effectively, improving loyalty</h4>
        <div style={{width:"8rem", height:"8rem", position:"absolute", bottom: "0", right: "0"}}>
        <Image src="/assets/bt_img4.webp" layout="fill" objectFit="cover" />
      </div>
       </div>
      </div>



      <div style={{display:'flex', margin:"5rem 10rem -1.4rem 0", width:"100%",    }}>
  <div style={{position:"relative", width:"47rem", height:"50rem"}}>
    <Image src='/assets/demo_img.webp' fill />
  </div>
  

  <div style={{padding: '2rem', display: 'flex', flexDirection: 'column', width: '30rem', padding:"5rem"}}>
  <div style={{display: "flex", position: "relative", fontSize:"21px", alignItems:"center"}}>
  <h1>Schedule a free demo</h1>

  <div style={{height: "2rem", width: "2rem", position: 'absolute', right: "0", }}>
    <Image src='/assets/stars.svg' fill />
  </div>
</div>
 <br />
    <p>Discover how Doroki transforms your business—schedule a demotoday and experience effortless management firsthand</p> <br />
    <form>
      <div className={styles.input_divs}>
       
        <input className={styles.inputs}
          type="text" 
          id="fullName" 
          name="fullName" 
          placeholder=" Full Name" 
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
  <div  style={{  position: "absolute",  width: "74rem", height: "35rem"}} >
    <Image src="/assets/blur.webp" fill style={{ objectFit: "cover" }} />
  </div>
  <div className={styles.subscribe}>
    <div style={{ maxWidth: "51%",  margin: "0 auto",   display: "grid",  height: "auto",  alignItems: "center",  padding: "2rem",  textAlign: "center",  color: "#fff",  }} >
      <h1>Subscribe to our Newsletter</h1>
      <p>
        Doroki streamlines business operations by centralising order, inventory,
        and transaction management. It offers seamless billing, quick invoice
        generation, efficient inventory management, and an eStore for online
        orders.
      </p>
      <input
        type="text"
        placeholder="    Email Address"
        style={{
          width: "100%",
          border: "none",
          borderRadius: "0.5rem",
          padding: "1rem  0",
          margin: "1rem auto",
          zIndex:1
        }}
      />
      <BlueButton
        text="Subscribe now"
        style={{ width:"100%", padding: "1rem", height: "3rem", }} />
    </div>
  </div>

  <div style={{display:'flex', color:"white", gap:'5rem', width:"100%", margin:"5rem 6rem", alignItems:'center'}}>
     <div style={{display:'flex', flexDirection:'column', gap:"1rem", justifyContent:'center',  }}> 
    <div style={{display:"flex",gap:'0.5rem' , zIndex:1}}>
      <div style={{position:"relative", width:'1rem', height:"1rem"}}><Image src='/assets/MapPin.svg' fill/></div>
      <p>176 Herbert Macaulay Wy, Yaba, Lagos 101245, Lagos</p>
    </div>
    <div style={{display:"flex",gap:'0.5rem'}}>
      <div style={{position:"relative", width:'1rem', height:"1rem"}}><Image src='/assets/Phone.svg' fill/></div>
      <p> +234 (0) 801 234 5678</p>
    </div>
    <div style={{display:"flex", gap:'0.5rem'}}>
      <div style={{position:"relative", width:'1rem', height:"1rem"}}><Image src='/assets/Mail.svg' fill/></div>
      <p>support@doroki.com</p>
    </div>
    </div>
    <div style={{display:"flex", gap:'1rem', width:"20rem" , alignItems:'center'}}>
      <div  className={styles.footerIcon}><Image src='/assets/facebook.svg'fill/></div>
      <div className={styles.footerIcon}><Image src='/assets/Instagram.svg'fill/></div>
      <div className={styles.footerIcon}><Image src='/assets/Twitter.svg'fill/></div>
      <div className={styles.footer_Icon}><Image src='/assets/Linkedin.svg'fill/></div>

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
