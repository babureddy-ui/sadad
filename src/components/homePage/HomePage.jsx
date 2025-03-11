
import Image from 'next/image';
import React, { useState } from 'react';
import { BlackButton, BlueButton, DropDownInput, MarqueeComponentHomePage } from '../Buttons/Button';
import styles from "./HomePage.module.css"
import HiddenPowers from '@/pages/HiddenPowers';
import SwiperComponent from '@/pages/SwiperComponent';
import FrequentQuestions from '@/pages/Questions';
import CustomiseBy from '@/pages/CustomiseBy';
import ClientSwiper from '@/pages/ClientSwiper';
import { NavigationBar } from '../navBar/NavigationBar';
import animationData from '../../../public/assets/Animation.json';
import Lottie from 'react-lottie';
import states, { Busineeses } from "../../services/states";
import axios from "axios";
import DesktopFooter from '../footerComponents/DesktopFooter';



const HomePage = () => {
  const [thanks, setThanks] = useState(false);
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
    else if (!formData.state) {
      setValidate(true);
      setErrorMessage("Please select state");
      return false;
    }
    else if (!formData.businessType) {
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
      setErrorMessage(e.response?.data?.error || "An error occurred");
      setState("ERROR");
    }
  };

  const subscribe = async (e) => {
    e.preventDefault();
    setState("LOADING");
    setValidate(true);
    setErrorMessage("");

    try {
      await axios.post("/api/newsletter", formData);

      setState("SUCCESS");
      setThanks(true)
      setFormData({
        email: "",
      });

    } catch (e) {
      setErrorMessage(e.response?.data?.error || "An error occurred");
      setState("ERROR");

    }
  };

  const BusinessTypes = [
    {
      icon: "/assets/business.svg",
      title: "Business Solution",
      text: "Platform that simplifies and streamlines your business goals",
      width: "10rem",
      height: "7rem"
    },
    {
      icon: "/assets/versatile.svg",
      title: "Versatile Payment Options",
      text: "Get payment solutions such as bank transfers, USSD, and mobile payments",
      width: "10rem",
      height: "7rem"
    },
    {
      icon: "/assets/designed.svg",
      title: "Designed for SMEs",
      text: "Doroki provides a powerful suite of tools at a competitive price",
      width: "10rem",
      height: "7rem"
    },
  ];
  const ClientsArr1 = [
    {
      imgSrc: "/assets/GUO1.webp",
      altText: "Hindustan Unilever limited",
    },
    {
      imgSrc: "/assets/whispering1.webp",
      altText: "Heineken",
    },
    {
      imgSrc: "/assets/campagne1.webp",
      altText: "BRIDGESTONE",
    },
    {
      imgSrc: "/assets/fitness1.webp",
      altText: "ITC Limited",
    },
    {
      imgSrc: "/assets/lifeback1.webp",
      altText: "IRCTC",
    },
    {
      imgSrc: "/assets/vestar1.webp",
      altText: "Taj sats",
    },
    {
      imgSrc: "/assets/ane1.webp",
      altText: "Taj sats",
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


  return (
    <>
      <div><NavigationBar /></div>
      <div className={styles.pagaLanding}>
        <div className={styles.Top_heroSection}>
          <div style={{ width: "50%", height: "50rem", position: "relative" }}>
            <div className={styles.text_heroSection}>
              <div className={styles.ellipse}>
                <Image src="/assets/homePage/Ellipse.svg" fill alt="ellipse" />
              </div>
              <div className={styles.top_content}>

                <div style={{ display: "flex" }}>
                  <h1 className={styles.headline}>
                    Drive your
                    <div className={styles.box}>
                      <span className={styles.word} style={{ color: "#FF6347" }}>Restaurant</span>
                      <span className={styles.word} style={{ color: "#0074D9" }}>Retail</span>
                      <span className={styles.word} style={{ color: "#4CAF50" }}>Grocery</span>
                      <span className={styles.word} style={{ color: "#8E44AD" }}>Spa & Salon</span>
                      <span className={styles.word} style={{ color: "#CF1A1A" }}>Electronics</span>
                    </div><br />
                    business forward <br /> easily with Doroki
                  </h1>

                  <div className={styles.heroSection_img_stars}>
                    <Image src='/assets/stars.svg' fill alt="stars" />
                  </div>
                </div>

                <p className={styles.p_heroText}>
                  Multi-functional solution tailored uniquely for your business. <br /> Manage all your Orders, Inventory & Transactions at one place.
                </p> <br />
                <form onSubmit={subscribe}>
                  <div className={styles.inputSection} >
                    <input
                      className={styles.content_me}
                      type="text"
                      name="email"
                      onChange={handleChange}
                      required
                      placeholder="Enter phone number/email"
                      value={formData.email}
                    />
                    <BlackButton text="Contact Me" style={{ padding: "1rem  1.8rem", width: "10rem", height: "3rem", fontSize: "0.9rem", fontFamily: "GilroyMedium", }} />

                  </div>
                </form>
                {errorMessage && <p className={styles.error}>{errorMessage}</p>}
              </div>
            </div>
          </div>
          <div className={styles.hero_image}>
            <div style={{ width: "100%", height: "100vh",}} >
              <Image src="/assets/HeroImage.webp" fill alt="hero" />
            </div>
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
                <div className={styles.thanksForm_title}>
                  <h1>Thanks!</h1>
                  <div style={{ height: "2rem", width: "2rem", position: 'relative', right: "-0.5rem", }}>
                    <Image src='/assets/stars.svg' fill alt="stars" />
                  </div>
                </div> <br />
                <p className={styles.thanksform_text}>
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

        <div className={styles.business_types}>
          {BusinessTypes.map((ele, index) => (
            <div
              key={index}
              className={styles.BusinessTypes}
            >
              <div className={styles.imageContainer} style={{ width: ele.width, height: ele.height }}>
                <Image src={ele.icon} alt={ele.title} fill />
              </div>
              <div style={{ padding: "0 0.2rem 0 0" }}>
                <h3 className={styles.business_title}>{ele.title}</h3>
                <p className={styles.business_content} >{ele.text}</p>
              </div>
            </div>

          ))}
        </div>

        <div style={{ margin: '10rem 0 ' }}>
          <div>
            <div className={styles.marquee_container} >
              <h1 className={styles.marquee_title}>Trusted by top Businesses</h1>
              <p className={styles.marquee_txt}> Doroki is trusted by countless businesses, offering seamless, reliable solutions <br /> that drive growth across multiple industries</p>
            </div>
          </div>
          <div className={styles.marquee_section}>
            <MarqueeComponentHomePage ClientsArr={ClientsArr1} speed={130} direction="left" />
          </div>
        </div>


        <div style={{ margin: "0rem 7rem 10rem 7.5rem" }}>
          <CustomiseBy />
        </div>


        {/* -----------------Features--------- */}
        <div style={{ margin: "4rem 7rem 6rem 7.5rem" }} >
          <div className={styles.features}>
            <p className={styles.feature_title}>Features</p>
            <div className={styles.feature_img_stars}>
              <Image src="/assets/stars.svg" alt="Star icon" fill />
            </div>
          </div>

          <div >
            <div className={styles.features_first_section}>
              <div className={styles.card}>
                <div className={styles.billing_card}>
                  <div className={styles.lone_icon}>
                    <Image src="/assets/Loans1.svg" fill alt="loans" />
                  </div>
                  <h1 className={styles.billing_card_title} >Seamlessly manage  <span style={{ color: "#0091F0" }}> Billing</span> operations with precision</h1>
                  <p className={styles.billing_card_txt}>
                    Seamlessly send money with Doroki, ensuring secure transactions and
                    instant transfers for your convenience and peace of mind.
                  </p>
                </div>

                <div className={styles.topImage}>
                  <Image src="/assets/billing_Top_img1.webp" fill alt="billing" />
                </div>
                <div className={styles.otherImage}>
                  <Image src="/assets/billing.webp" fill alt="billing" />
                </div>
              </div>
              <div className={styles.card2}>
                <div className={styles.Invt_card} >
                  <div className={styles.Invt_icon} >
                    <Image src="/assets/Invt.svg" fill alt="invt" />
                  </div>
                  <h1 className={styles.Invt_card_title}> Track and manage <span style={{ color: "#0091F0" }}> Inventory </span>  with ease</h1>
                  <p className={styles.Invt_card_txt}>
                    Efficient inventory management helps you track, organize and optimize stock levels, ensuring smoother business operations.
                  </p>
                </div>

                <div className={styles.topImage2}>
                  <Image src="/assets/Inventory_Top_img1.webp" fill alt="invt" />
                </div>
                <div className={styles.otherImage}>
                  <Image src="/assets/Inventory_img.webp" fill alt="invt" />
                </div>
              </div>
            </div>
            <div className={styles.features_second_section} >
              <div style={{ width: "35%" }}>
                <div className={styles.card3}>
                  <div className={styles.comingSoon}> <p>Coming Soon</p></div>
                  <div className={styles.eStore_content}>
                    <div className={styles.eStore_logo}>
                      <Image src="/assets/eStore.svg" fill alt="invt" />
                    </div>
                    <h2 className={styles.eStore_card_title}> Take your business online, with our <span style={{ color: "#0091F0" }}> eStore  </span> feature</h2>
                    <p className={styles.eStore_card_txt}>Take your business online effortlessly, expanding customer reach and boosting sales through a seamless digital platform </p>
                  </div>

                  <div className={styles.topImage3}>

                    <Image src="/assets/eStore_Top_img1.webp" fill alt="estore" />
                    <Lottie options={{ animationData }} height={70} width={70} style={{ zIndex: 1000, top: "1rem", position: "relative" }} />
                  </div>
                  <div className={styles.otherImage3}>
                    <Image src="/assets/eStore-img.svg" fill alt="estore" />
                  </div>
                </div>
              </div>
              <div style={{ width: "35%" }}>
                <div className={styles.card4}>
                  <div className={styles.reports_content}>
                    <div className={styles.reports_logo}  >
                      <Image src="/assets/Reports.svg" fill alt="reports" />
                    </div>
                    <h2 className={styles.reports_card_title} > Gain actionable insights through detailed<span style={{ color: "#0091F0" }}> Reports </span> </h2>
                    <p className={styles.reports_card_txt}>Transform data into actionable insights with comprehensive reports, empowering informed decisions for business success and growth</p>
                  </div>


                  <div className={styles.otherImage4}>
                    <Image src="/assets/Reports-img.svg" fill alt="reports" />
                  </div>
                </div>
              </div>
              <div style={{ width: "35%" }}>
                <div className={styles.card5}>
                  <div className={styles.CRM_content} >
                    <div className={styles.CRM_logo} >
                      <Image src="/assets/Crm_icon.svg" fill alt="crm" />
                    </div>
                    <h2 className={styles.CRM_card_title}> Drive engagement and loyalty with <span style={{ color: "#0091F0" }}> CRM  </span></h2>
                    <p className={styles.CRM_card_txt}> Build stronger customer connections with personalized CRM, driving loyalty and repeat business through meaningful engagement </p>
                  </div>

                  <div className={styles.topImage5}>
                    <Image src="/assets/crm_Top_img1.webp" fill alt="crm" />
                  </div>

                  <div className={styles.otherImage3}>
                    <Image src="/assets/crm_img.svg" fill alt="crm" />
                  </div>
                </div>
              </div>
            </div>
          </div>


        </div>

        <div >
          <HiddenPowers />
        </div>

        <div style={{ margin: "4rem 7rem 4rem 7.5rem" }}>
          <div className={styles.bank_transaction_section} >
            <p className={styles.bank_transaction_heder_txt}>Dedicated <b>Bank Account</b> for your transaction business</p>
            <div className={styles.bank_transaction_img_stars} ><Image src='/assets/stars.svg' fill alt="stars" /></div>
          </div>

          <div style={{ display: 'flex', margin: "1rem 0", gap: '1rem', justifyContent: "space-between", }}>

            <div className={styles.bank_containers} >
              <div className={styles.bank_container_logo} >
                <Image src="/assets/sweep.svg" fill alt="sweep" />
              </div>
              <h1 className={styles.bank_container_title}>
                Effortless <span style={{ color: "#0391f0" }}>Auto Sweep</span> for <br /> seamless daily funds transfer
              </h1>
              {/* <p className={styles.bank_container_txt} >Daily auto-sweep transfers funds effortlessly into your designated account.</p> */}
              <p className={styles.bank_container_txt} >Daily auto-sweep transfers funds effortlessly into your
                designated account, ensuring smooth cash flow and
                financial convenience.</p>
              <div className={styles.bank_img}>
                <Image src="/assets/bank.svg" fill alt="bank" />
              </div>
            </div>

            <div className={styles.bank_containers}  >
              <div className={styles.bank_container_logo}>
                <Image src="/assets/money.svg" fill alt="money" />
              </div>
              <h1 className={styles.bank_container_title}>
                Seamlessly <span style={{ color: "#0391f0" }}>Send Money</span> <br /> through our secure POS
              </h1>
              <p className={styles.bank_container_txt} >Seamlessly send money with Doroki, ensuring secure transactions and instant transfers for your convenience and peace of mind.</p>
              <div className={styles.money_img}>
                <Image src="/assets/sendMoney.svg" fill alt="send money" />
              </div>
            </div>

          </div>

        </div>



        <div className={styles.loan_section_container}>
          <div className={styles.loan_section} >
            <div className={styles.loan_section_icon}><Image src='/assets/Loans.svg' fill alt="loans" /></div>
            <div style={{ fontSize: "1rem", }}>
              <h1 className={styles.loan_section_title}> Get <span style={{ color: "#0091F0" }}> Affordable Loans</span>  for your <br />business from our partner  banks</h1> <br />
              <p className={styles.loan_section_txt}>Scale your business with affordable, transparent loans provided<br /> by trusted banking partners, hassle-free and reliable</p>
            </div>
           <a href="https://play.google.com/store/apps/" target="_blank">  <div className={styles.loan_section_playstore} ><Image src="/assets/playstore.svg" fill alt="playstore" /></div></a>
          </div>
          <div className={styles.Loan_img}>
            <div className={styles.loan_section_img}> <Image src="/assets/Loan_img1.webp" fill alt="loan" /> </div>
          </div>
        </div> <br />



        <div>
          <div className={styles.versatile_section}>
            <div className={styles.versatile_section_leftContent}>
              <h1 className={styles.versatile_section_title} >Efficient, <span style={{ color: "#0391f0" }}>Versatile</span> <br />Reliable</h1>
              <p className={styles.versatile_section_txt}>Multi-functional solution tailored uniquely for your <br />business. Manage all your Orders, Inventory & <br /> Transactions at one place.</p>
            </div>
            <div className={styles.versatile_img}><Image src="/assets/versatile.webp" fill alt="versatile" /></div>

          </div>
          <div className={styles.TransactionMockp}>
            <Image src="/assets/TransactionMockp33.webp" fill alt="dashboard" />
          </div>
        </div>


        <div className={styles.business_journey_section} >

          <div style={{ display: "flex", height: "45rem" }}>
            <div className={styles.business_journey} >
              <div className={styles.business_journey_img}><Image src="/assets/DorokiTableTerminal1.webp" fill alt="doroki" /></div>

              <div className={styles.business_journey_Container} >
                <div className={styles.business_journey_textContainer} >
                  <h1 className={styles.business_journey_title} >Start your Business journey effortlessly with <span style={{ backgroundColor: "#f2931d", padding: "0.2rem 0.8rem 0.1rem 0.8rem" }}>Doroki</span> </h1>
                  <p className={styles.business_journey_txt}>Doroki empowers business with effortless management, seamlessly handling sales, inventory, and customer data, ensuring a smoother end of day reconciliation.</p> <br />
                </div>
               <a href="https://play.google.com/store/apps/" target="_blank"> <div className={styles.business_journey_playstore}><Image src="/assets/playstore.svg" fill alt="playstore" /></div></a>
              </div>
            </div>
            <div style={{ width: "50%", height: "45rem" }}>
              <SwiperComponent />
            </div>
          </div>
        </div>


        <div style={{ margin: "0rem 6.5rem 7rem 7.5rem", }}>


          <div className={styles.business_dilemmas_section}>
            <h1 className={styles.business_dilemmas_titile}  >Many business dilemmas, <br />yet only <span style={{ color: "#0091F0" }}>One Solution</span> reigns supreme</h1>
            <div className={styles.business_dilemmas_ImgMessage} ><Image src='/assets/message.svg' fill alt="message" /></div>
          </div>

          <div style={{ display: "flex", justifyContent: 'space-between', }}>
            <div className={styles.solutionSection} >
              <div className={styles.animation_star1}>
                <Image src='/assets/animations_stars1.svg' fill alt="Star 1" />
              </div>
              <div className={styles.animation_star2}>
                <Image src='/assets/animations_stars2.svg' fill alt="Star 2" />
              </div>
              <div className={styles.headSec}><h1 style={{ fontFamily: "GilroySemibold", fontSize: "2rem" }}>POS 10Q</h1></div>
              <div className={styles.content_sec}>
                <p style={{ fontFamily: "GilroyRegular", lineHeight: "1.7rem",marginTop:"-2rem" }}>Good for both out-door and in-store use cases, integrated with MSR, EMV chip & pin, NFC card readers, dedicated 2D barcode scanning engine, 4G/WiFi Bluetooth connectivities, enable clients  to choose whatever payment option.</p>
                <div className={styles.dev_img1}><Image src='/assets/pos1.webp' fill alt="POS" /></div>
              </div >
            </div>
            <div className={styles.solutionSection} >
              <div className={styles.animation_star1}>
                <Image src='/assets/animations_stars1.svg' fill alt="Star 1" />
              </div>
              <div className={styles.animation_star2}>
                <Image src='/assets/animations_stars2.svg' fill alt="Star 2" />
              </div>
              <div className={styles.headSec}><h1 style={{ fontFamily: "GilroySemibold", fontSize: "2rem" }}>MF 960</h1></div>
              <div className={styles.content_sec}>
                <p style={{ fontFamily: "GilroyRegular",lineHeight: "1.7rem", marginTop:"-2.5rem"}}>Equips with Linux or Android system based on your choice. lt’s a <br /> win-win solution not only improving overall business performance <br /> but also reducing overall application cost</p>
                <div className={styles.dev_img2}><Image src='/assets/mf1.webp' fill alt="mf" /></div>
              </div >
            </div>
          </div>

        </div>

        {/* <div className={styles.clientsrave_section} >
          <div className={styles.clientsrave_conatiner} >

            <div className={styles.clientsrave_txt_conatiner} >
              <h1 className={styles.clientsrave_title}>Clients rave - <span style={{ backgroundColor: "#f2931d", padding: "0.3rem 0.8rem" }}>Doroki</span>   <br />exceeds expectations!</h1>
              <p className={styles.clientsrave_txt} > &quot;Clients consistently praise Doroki for its unmatched <br /> reliability, seamless integration, and ease of use,<br /> enhancing business operations.&quot;</p>
            </div>


            <div className={styles.clientsrave_video_conatiner} >
              <div className={styles.clientsrave_video_Img} ><Image src="/assets/video-img2.webp" fill alt="video" /></div>
            </div>
            <div className={styles.clientsrave_Doroki_Blurred}><Image src="/assets/Doroki-Blurred.webp" fill alt="doroki" /></div>

          </div>
        </div> */}



        <div style={{ margin: "10rem 0 8rem 0 " }}>
          {/* <div className={styles.clients_section}>
            <h1 className={styles.clients_section_title}>Our Client’s kind words</h1>
            <div className={styles.clients_img_stars} >
              <Image src="/assets/stars.svg" alt="Stars" fill />
            </div>
          </div>
          <div >
            <div className={styles.valued_option_arrow} ><Image src='/assets/valued_option_arrow.webp' fill alt='arrow' /></div>

            <ClientSwiper />
          </div> */}
        </div>



        <div className={styles.faq_section}>
          <div className={styles.queries_img}>
            <Image src="/assets/queries_img2.webp" fill alt="queries" />
          </div>
          <div >
            <div className={styles.Queries_arrow} ><Image src='/assets/Queries_arrow.webp' fill alt='arrow' /></div>

            <FrequentQuestions FaqTableData={faqs} />
          </div>
        </div>

        <div className={styles.business_needs}>

          <div className={styles.business_needs_content_section}  >
            <div className={styles.business_needs_title} ><h1>Intuitive and Easy to use App for your Business needs</h1>  <div className={styles.business_needs_stars} ><Image src='/assets/stars.svg' fill alt="stars" /></div></div>

            <p className={styles.business_needs_txt} >Experience fast, secure, and hassle-free billing with <br /> <span style={{fontFamily:"GilroySemiBold"}}>Doroki</span>—your ultimate all-in-one business suite platform</p>
            <a href="https://play.google.com/store/apps/" target="_blank"> <div className={styles.business_needs_img_playstore} ><Image src="/assets/playstore.svg" fill alt="playstore" /></div></a>
          </div>
          <div className={styles.business_needs_app_img}  ><Image src="/assets/app-img2.webp" fill alt="app" /></div>
        </div>



        <div className={styles.business_needs2}>
          <div className={styles.bt_ele}>
            <h4 className={styles.business_text}>Efficiently manage your stock levels with our application</h4>
            <div className={styles.bt_img} >
              <Image src="/assets/bt_img11.webp" fill alt="bt" />
            </div>
          </div>
          <div className={styles.bt_ele2}>
            <h4 className={styles.business_text}>Unlock powerful busines insights through detailed reports</h4>
            <div className={styles.bt_img} >
              <Image src="/assets/bt_img12.webp" fill alt="invt" />
            </div>
          </div>
          <div className={styles.bt_ele3}>
            <div className={styles.business_needs_commingsoon} > <p>Coming Soon</p></div>
            <h4 className={styles.business_text_online}>Transform your business go online and reach new customers.</h4>
            <div className={styles.bt_img} >
              <Image src="/assets/bt_img13.webp" fill alt="invt" />
            </div>
          </div >
          <div className={styles.bt_ele4} >
            <h4 className={styles.business_text}>Manage customers effectively, improving loyalty</h4>
            <div className={styles.bt_img_loyalty} >
              <Image src="/assets/bt_img14.webp" fill alt="invt" />
            </div>
          </div>
        </div>



        <div className={styles.formSection}>
          <div style={{ position: "relative", width: "50rem", height: "45rem" }}>
            <Image src='/assets/Footer_img.webp' fill alt="invt" />
          </div>



          <div className={styles.demo_form}>
            <div className={styles.demo_form_title_section} >
              <h1 className={styles.demo_form_title} style={{ fontFamily: "GilroySemiBold", fontSize: "1.9rem" }}>Schedule a free demo</h1>

              <div className={styles.demo_form_img_stars}>
                <Image src='/assets/stars.svg' fill alt="invt" />
              </div>
            </div>
            <br />
            <p className={styles.demo_form_txt} >Discover how Doroki transforms your business—schedule a demo today and experience effortless management first hand</p> <br />
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
                    height: "3.8rem",
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
                    height: "3.8rem",
                    borderRadius: "0.4rem",
                    fontFamily: "GilroyRegular",
                    padding: "0 0.8rem",
                    color: "#5A5A5A",
                    fontWeight: "300",
                    width: "100%",
                    labelMargin: "1.46rem",
                    border: "none",
                    backgroundColor: "none",
                  }}
                  req={true}
                  // key={formData.businessType}
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
                style={{ width: "100%", padding: "1rem", height: "3.8rem", zIndex: 0,margin:"0.5rem 0 0 0" }}
              />
              {errorMessage && <p className={styles.error}>{errorMessage}</p>}
            </form>

          </div>
        </div>
        <div><DesktopFooter /></div>
      </div>

    </>
  );
};

export default HomePage