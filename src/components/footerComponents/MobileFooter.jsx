import Image from 'next/image'
import React, { useState } from 'react'
import { BlackButton, BlueButton } from '../Buttons/Button'
import styles from "../MobilePages/Mobile.module.css"
import axios from "axios";
import Link from 'next/link';

const MobileFooter = () => {
  const [state, setState] = useState("IDLE");
  const [errorMessage, setErrorMessage] = useState("");
  const [thanks, setThanks] = useState(false);
  const [validate, setValidate] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
  });

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
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrorMessage(null);

  };
  return (
    <div>
      <div style={{ margin: "-1rem 1rem 0rem 1rem" }}>

        <div className={styles.subscriptionSection}>
          <div style={{ position: "absolute", width: "100vw", height: "46rem" }} >
            <Image src="/assets/MobileView/blur.webp" fill alt="invt" />
          </div>
          <div className={styles.subscribe} >
            <h1 style={{ fontFamily: "GilroyMedium", fontSize: "1.7rem" }}>Subscribe to our <br /> Newsletter</h1> <br />
            <p style={{ fontFamily: "GilroyRegular", fontSize: "0.85rem", lineHeight: "1.5rem" }}>Doroki centralizes operations with seamless billing, quick invoicing, inventory management and an eStore for online orders.</p>
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
              <BlueButton text="Subscribe now" style={{ width: "100%", padding: "1rem", height: "3.5rem", }} />
            </form>
            {errorMessage && <p style={{ color: 'white', fontFamily: "GilroyUlight", fontSize: "0.6rem",zIndex:1000 }}>{errorMessage}</p>}
          </div>

          <div className={styles.footer_conatctSection}>


            <div className={styles.footer_conatctIcon}>
              <div className={styles.footerIcon}><Image src='/assets/facebook.svg' fill alt="fb" /></div>
              <a href="https://www.instagram.com/doroki.commerce/" target="" rel="noopener noreferrer">
                <div className={styles.footerIcon}><Image src='/assets/Instagram.svg' fill alt="insta" /></div>
              </a>
              <a href="https://x.com/doroki_ng" target="" rel="noopener noreferrer">
                <div className={styles.footerIcon}><Image src='/assets/Twitter.svg' fill alt="twitter" /></div>
              </a>
              <div className={styles.footer_Icon} style={{ marginBottom: "-0.4rem" }}><Image src='/assets/LinkedIn.svg' fill alt="linkedin" /></div>

            </div>

            <div className={styles.footer_navigations}  >
              <div>
                <p className={styles.footerContent_titile}>Contact</p>
                <a href="mailto:support@doroki.com">
                  <p className={styles.footerContent}>Email : support@doroki.com</p>
                </a>

                <p className={styles.footerContent}>Call : 02013444300</p>
                <a href="https://x.com/doroki_ng" target="" rel="noopener noreferrer">
                  <p className={styles.footerContent}>Twitter : @mypagacare</p>
                </a>
                <p className={styles.footerContent}>Facebook : @mypaga</p>
                <p className={styles.footerContent}>WhatsApp : 08099227242</p>
                <p className={styles.footerContent}>SMS : 09090027242</p>
                <p className={styles.footerContent}>Address : 176 Herbert <br />
                  Macaulay Wy, Yaba, Lagos</p>
              </div>
              <div style={{ display: 'flex', gap: '4rem', margin: "2rem 0" }}>
                {/* <div style={{ width: "7rem" }}>
                  <p className={styles.footerContent_titile}>About</p>
                  <a href="https://www.mypaga.com/paga-web/company.paga"><p className={styles.footerContent}>Company</p></a>
                  <a href="https://www.wearepaga.com/"> <p className={styles.footerContent}>Careers</p></a>
                  <a href="https://paga.frontify.com/auth?referer=%2F"> <p className={styles.footerContent}>Media Kit</p></a>
                </div> */}
                <div style={{ width: "7rem" }}>
                  <p className={styles.footerContent_titile}>Support</p>
                  <a href="https://mypaga.freshdesk.com/support/home" target='_blank'>  <p className={styles.footerContent}>FAQ</p></a>
                  <a href='https://api.whatsapp.com/send/?phone=%2B2348099227242&text&type=phone_number&app_absent=0' target='_blank'>  <p className={styles.footerContent}>Help Desk</p></a>
                  {/* <p className={styles.footerContent}>Find an Agent</p> */}
                </div>
              </div>

              <div style={{ display: 'flex', gap: '4rem', margin: "1rem 0" }}>
                <div style={{ width: "7rem" }}>
                  <p className={styles.footerContent_titile}>Links</p>
                  <a href="https://donate.ng/"  target='_blank'><p className={styles.footerContent}>Donate.ng</p></a>
                  {/* <p className={styles.footerContent}>Paga Blog</p> */}
                  {/* <p className={styles.footerContent}>Pricing</p> */}
                  {/* <p className={styles.footerContent}>Remittances</p> */}
                  <Link href="/terms-of-service">
                    <p className={styles.footerContent}>Terms of Service</p>
                  </Link>
                  {/* <p className={styles.footerContent}>Security</p> */}
                </div>
                <div style={{ width: "7rem" }}>
                  <p className={styles.footerContent_titile}>Products</p>
                  <a href="https://www.mypaga.com/home/" target='_blank'><p className={styles.footerContent}>Personal</p></a>
                  {/* <p className={styles.footerContent}>Agent</p> */}
                  {/* <p className={styles.footerContent}>Business</p> */}
                  <a href="https://developer.paga.com/?_gl=1*1kxbc0i*_gcl_au*MjgxMTk5NDg1LjE3NDA0Njk2ODQ." target='_blank'><p className={styles.footerContent}>Developer</p></a>
                </div>
              </div>
            </div>
            {/* <div  className={styles.Conditions}>
                    <p>Terms & Conditions</p>
                    <p>privacy Policy</p>
                  </div> */}

            {/* <div className={styles.LocationAndConatcts} > 
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
                  </div> */}

            <div style={{ position: "relative" }}>
              <p className={styles.poweredby}>Powered by</p>

              <div className={styles.poweredby_logo_section} >
                <div className={styles.footer_paga_logo}><Image src='/assets/footer_paga_logo.svg' fill alt='paga logo' /></div>
                <div className={styles.footer_CenterLine}></div>
                <div className={styles.footer_qb_logo} ><Image src='/assets/footer_qb_logo.svg' fill alt='qb_logo' /></div>
              </div> <br />

            </div>
            <p className={styles.all_rights}>© {new Date().getFullYear()} Doroki All rights reserved.</p>

          </div>
        </div>
      </div>

      {thanks && (
        <div className={styles.thankyou_form_section}>
          <div className={styles.thankyou_form} >
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
                onClick={() => setThanks(false)}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default MobileFooter
