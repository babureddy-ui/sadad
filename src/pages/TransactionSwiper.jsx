import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import Image from 'next/image';  
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import styles from '../components/MobilePages/Mobile.module.css';

const BankTransactionSwiper=[
    {
      icon:"/assets/sweep.svg",
      // title:"Effortlessly ",
      titleWord:"Auto Sweep",
      title2:"for smooth daily fund transfer",
      dec:"Transferring funds seamlessly into your designated account, ensuring smooth operations and greater control over your business finances effortlessly",
      img:"/assets/paga_bank.webp"
    },
    {
      icon:"/assets/money.svg",
      // title:"Seamlessly ",
      titleWord:"Send Money",
      title2:"Securely with Sadad",
      dec:"Seamlessly send money with Sadad, ensuring secure transactions and instant transfers for your convenience and peace of mind.",
      img:"/assets/Paga_sendMoney_img.webp"
    },
  ]

const TransactionSwiper = () => (
    <div>
      <Swiper
        slidesPerView={1} 
        spaceBetween={0}
        autoplay={{ delay: 1800, disableOnInteraction: false }}
        speed={700}
        pagination={{ clickable: true }}
        modules={[Autoplay, Pagination]}
        className="custom-testimonial-swiper"
      >
        {BankTransactionSwiper.map((item, index) => (
          <SwiperSlide key={index}>
            <div style={{height:"36.5rem",  padding:"0 1.8rem"}}>
              <div className={styles.bank_containers}>
                <div style={{ position: "relative", height: "3.5rem", width: "3.5rem" }}>
                  <Image src={item.icon} fill alt="sweep" />
                </div>
                <h4 style={{fontFamily:"GilroySemiBold", fontSize:"1.3rem",lineHeight:"1.9rem", }}>{item.title} <span style={{color:"#0391f0"}}>{item.titleWord}</span> <span>{item.title2}</span></h4>
                <p style={{fontFamily:"GilroyRegular", color:"#767676",fontSize:"1rem", lineHeight:"1.6rem", marginTop:"-0.5rem"}}>{item.dec}</p> 
                <div className={styles.bank_img}>
                  <Image src={item.img} fill alt="bank" />
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );

export default TransactionSwiper
