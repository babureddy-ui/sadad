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
      title:"Effortlessly ",
      titleWord:"Auto Sweep",
      title2:"for seamless daily funds transfer",
      dec:"Transferring funds seamlessly into your designated account, ensuring smooth operations and greater control over your business finances effortlessly",
      img:"/assets/bank.svg"
    },
    {
      icon:"/assets/money.svg",
      title:"Seamlessly ",
      titleWord:"Send Money",
      title2:"through our secure POS",
      dec:"Seamlessly send money with our POS, ensuring secure transactions and instant transfers for your convenience and peace of mind.",
      img:"/assets/sendMoney.svg"
    },
  ]

const TransactionSwiper = () => (
    <div>
      <Swiper
        slidesPerView={1} 
        spaceBetween={20}
        autoplay={{ delay: 1800, disableOnInteraction: false }}
        speed={700}
        pagination={{ clickable: true }}
        modules={[Autoplay, Pagination]}
        className="custom-testimonial-swiper"
      >
        {BankTransactionSwiper.map((item, index) => (
          <SwiperSlide key={index}>
            <div style={{height:"36rem"}}>
              <div className={styles.bank_containers}>
                <div style={{ position: "relative", height: "4rem", width: "4rem" }}>
                  <Image src={item.icon} fill alt="sweep" />
                </div>
                <h2 style={{fontFamily:"GilroySemiBold"}}>{item.title} <span style={{color:"#0391f0"}}>{item.titleWord}</span> <span>{item.title2}</span></h2>
                <p style={{fontFamily:"GilroyMedium", color:"#767676"}}>{item.dec}</p>
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
