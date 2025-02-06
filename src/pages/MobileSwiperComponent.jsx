import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import Image from 'next/image';  
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import styles from '../components/MobilePages/Mobile.module.css';


const MobileBusinessImages = [
    { link: '/assets/MobileView/restaurant-mobile.webp', company: 'Restaurant' },
    { link: '/assets/MobileView/retail.webp', company: 'Retail' },
    { link: '/assets/MobileView/grocery.webp', company: 'Grocery' },
    { link: '/assets/MobileView/spa_salon.webp', company: 'Spa & Salon' },
    { link: '/assets/MobileView/electronics.webp', company: 'Electronics' },
  ];

const MobileSwiperComponent = () => (
    <div>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        autoplay={{ delay: 1800, disableOnInteraction: false }}
        speed={700}
        pagination={{ clickable: true }}
        modules={[Autoplay, Pagination]}
        className="custom-testimonial-swiper"
      >
        {MobileBusinessImages.map((item) => (
          <SwiperSlide key={item.company}>
            <div style={{ cursor: 'pointer', display: 'flex', gap: '3rem', justifyContent:"center" }}>
              <div style={{ height: "24rem", width: "88%" , borderRadius:"2rem"}}>
                <div style={{ width: '100%', height: '100%', position: 'relative' }}>
                  <Image src={item.link} alt={item.company} fill />
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );

export default MobileSwiperComponent
