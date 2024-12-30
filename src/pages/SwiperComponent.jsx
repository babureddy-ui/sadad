import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import Image from 'next/image';  
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

const BusinessImages = [
  { link: '/assets/restaurant.webp', company: 'Restaurant' },
  { link: '/assets/retail.webp', company: 'Retail' },
  { link: '/assets/grocery.webp', company: 'Grocery' },
  { link: '/assets/spa_salon.webp', company: 'Spa & Salon' },
  { link: '/assets/electronics.webp', company: 'Electronics' },
];

const SwiperComponent = () => (
  <div>
    <Swiper
    //   spaceBetween={50}
      slidesPerView={1}
      autoplay={{ delay: 1800, disableOnInteraction: false }}
      speed={700}
      pagination={{ clickable: true }}
      modules={[Autoplay, Pagination]}
      className="custom-testimonial-swiper"
    >
      {BusinessImages.map((item) => (
        <SwiperSlide key={item.company}>
          <div style={{ cursor: 'pointer', display: 'grid', gap: '3rem' }}>
            <div style={{ height: "45rem", width: "100%" }}>
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

export default SwiperComponent;
