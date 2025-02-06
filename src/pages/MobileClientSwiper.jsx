import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { useState } from 'react';
import styles from '../components/homePage/HomePage.module.css'

const kindwords = [
    { 
      text:<>“It is a long established fact that a reader will be tracked distracted by <br />the readable content of a page is when looking at its layout. The point <br />of using Lorem of distribution it look <br /> like readable English adsczscaf“</> ,
      img: '/assets/client.webp',
      reviews:"/assets/Reviews.svg",
      name:"James Williams",
      city:"Lorem, Nigeria",
      icon:"/assets/Icon.svg",
     },
     { 
      text:<>“It is a long established fact that a reader will be tracked distracted by <br />the readable content of a page is when looking at its layout. The point <br />of using Lorem of distribution it look <br /> like readable English adsczscaf“</>,
      img: '/assets/client.webp',
      reviews:"/assets/Reviews.svg",
      name:"James Williams",
      city:"Lorem, Nigeria",
      icon:"/assets/Icon.svg",
     },
     { 
      text:<>“It is a long established fact that a reader will be tracked distracted by <br />the readable content of a page is when looking at its layout. The point <br />of using Lorem of distribution it look <br /> like readable English adsczscaf“</>,
      img: '/assets/client.webp',
      reviews:"/assets/Reviews.svg",
      name:"James Williams",
      city:"Lorem, Nigeria",
      icon:"/assets/Icon.svg",
     },
     { 
      text:<>“It is a long established fact that a reader will be tracked distracted by <br />the readable content of a page is when looking at its layout. The point <br />of using Lorem of distribution it look <br /> like readable English adsczscaf“</>,
      img: '/assets/client.webp',
      reviews:"/assets/Reviews.svg",
      name:"James Williams",
      city:"Lorem, Nigeria",
      icon:"/assets/Icon.svg",
     },
     { 
      text:<>“It is a long established fact that a reader will be tracked distracted by <br />the readable content of a page is when looking at its layout. The point <br />of using Lorem of distribution it look <br /> like readable English adsczscaf“</>,
      img: '/assets/client.webp',
      reviews:"/assets/Reviews.svg",
      name:"James Williams",
      city:"Lorem, Nigeria",
      icon:"/assets/Icon.svg",
     },
  ];
const MobileClientSwiper = () => {
    const [isFirstSlide, setIsFirstSlide] = useState(true);
  
    const handleSlideChange = (swiper) => {
      if (swiper.activeIndex===0) {
        setIsFirstSlide(true);
      } else {
        setIsFirstSlide(false);
      }
    };
  
    return (
      <div style={{ marginTop: '5rem', marginBottom:"5rem" }}>
        <Swiper
          spaceBetween={5}
          slidesPerView={1.1}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          speed={100}
          pagination={{ clickable: true,
            // bulletClass: styles.custom_bullet,
            // bulletActiveClass: styles.custom_bullet_active,

           }}
          
          modules={[Autoplay, Pagination]}
          style={{ paddingBottom: '5rem', padding:"0rem 1rem 5rem 1rem" }}
          className="custom-testimonial-swiper"
          onSlideChange={handleSlideChange}  
        >
          {kindwords.map((item, index) => (
            <SwiperSlide key={index}>
              <div
                style={{
                  cursor: 'pointer',
                  borderRadius: '1rem',
                  width: '96%',
                  margin:"0 1rem",
                  backgroundColor: "#F5F8FF",
                  // marginLeft: index === 0 && isFirstSlide ? '2rem':'1rem', 
                }}
              >
                <div style={{ padding: '2rem 1rem 2rem 1.5rem' }}>
                  <p style={{fontFamily:"GilroyRegular", color:"#767676" , lineHeight:'1.6rem'}}>{item.text}</p>
                </div>
  
                <div
                  style={{ display: 'flex', alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '1rem',
                    marginTop: '1rem',
                    backgroundColor: "#2B3C45",
                    padding: "1rem",
                    borderBottomLeftRadius: '1rem',
                    borderBottomRightRadius: '1rem',
                  }}
                >
                  <div style={{ display: "flex", gap: "0.5rem" }}>
                    <div style={{ position: "relative", width: "50px", height: "50px", overflow: 'hidden' }}>
                      <Image src={item.img} alt={item.name} fill style={{ objectFit: "cover" }} />
                    </div>
  
                    <div>
                      <div style={{ position: "relative", width: "50px", height: "10px", marginBottom: '0.5rem' }}>
                        <Image src={item.reviews} alt="Review Stars" fill style={{ objectFit: "contain" }} />
                      </div>
                      <h4 style={{ margin: 0, color: "#ffff", fontFamily: "'Playfair Display', serif" }}>{item.name}</h4>
                      <p style={{ margin: 0, fontSize: '0.9rem', color: '#ffff', lineHeight:"" }}>{item.city}</p>
                    </div>
                  </div>
                  <div style={{ position: "relative", width: "30px", height: "30px" }}>
                    <Image src={item.icon} alt="Icon" fill style={{ objectFit: "contain" }} />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    );
  };

export default MobileClientSwiper
