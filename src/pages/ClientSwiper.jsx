import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

const kindwords = [
    { 
      text:"“ It is a long established fact that a reader will be tracked distracted by the readable content of a page is when looking at its layout. The point of using Lorem of distribution it look like readable English adsczscaf“",
      img: '/assets/client.webp',
      reviews:"/assets/Reviews.svg",
      name:"James Williams",
      city:"Lorem, Nigeria",
      icon:"/assets/Icon.svg",
     },
     { 
      text:"“ It is a long established fact that a reader will be tracked distracted by the readable content of a page is when looking at its layout. The point of using Lorem of distribution it look like readable English adsczscaf“",
      img: '/assets/client.webp',
      reviews:"/assets/Reviews.svg",
      name:"James Williams",
      city:"Lorem, Nigeria",
      icon:"/assets/Icon.svg",
     },
     { 
      text:"“ It is a long established fact that a reader will be tracked distracted by the readable content of a page is when looking at its layout. The point of using Lorem of distribution it look like readable English adsczscaf“",
      img: '/assets/client.webp',
      reviews:"/assets/Reviews.svg",
      name:"James Williams",
      city:"Lorem, Nigeria",
      icon:"/assets/Icon.svg",
     },
     { 
      text:"“ It is a long established fact that a reader will be tracked distracted by the readable content of a page is when looking at its layout. The point of using Lorem of distribution it look like readable English adsczscaf“",
      img: '/assets/client.webp',
      reviews:"/assets/Reviews.svg",
      name:"James Williams",
      city:"Lorem, Nigeria",
      icon:"/assets/Icon.svg",
     },
     { 
      text:"“ It is a long established fact that a reader will be tracked distracted by the readable content of a page is when looking at its layout. The point of using Lorem of distribution it look like readable English adsczscaf“",
      img: '/assets/client.webp',
      reviews:"/assets/Reviews.svg",
      name:"James Williams",
      city:"Lorem, Nigeria",
      icon:"/assets/Icon.svg",
     },
  ];

const TestimonialsSwiper = () => (
  <div  style={{marginTop:'5rem',}}>
    <Swiper
      spaceBetween={80}
      slidesPerView={4}
      autoplay={{ delay: 2000, disableOnInteraction: false }}
      speed={700}
      pagination={{ clickable: true }}
      modules={[Autoplay, Pagination]}
      style={{ paddingBottom: '3rem' }}
      className="custom-testimonial-swiper"
    >
      {kindwords.map((item, index) => (
        <SwiperSlide key={index}>
          <div style={{ cursor: 'pointer',  borderRadius: '1rem',width:'22rem', backgroundColor:"#F5F8FF" }}>
            <div style={{padding:'3rem 2rem'}}>
              <p>{item.text}</p>
            </div>
            
            <div style={{ display: 'flex', alignItems: 'center',justifyContent:'space-between', gap: '1rem', marginTop: '1rem', backgroundColor:"#2B3C45", padding:"1rem",borderBottomLeftRadius: '1rem',borderBottomRightRadius: '1rem' }}>
              <div style={{display:"flex", gap:"0.5rem"}}> 
              <div style={{ position: "relative", width: "50px", height: "50px", overflow: 'hidden' }}>
                <Image src={item.img} alt={item.name} fill style={{ objectFit: "cover" }} />
              </div>
              
              <div>
                <div style={{ position: "relative", width: "50px", height: "10px", marginBottom: '0.5rem' }}>
                  <Image src={item.reviews} alt="Review Stars" fill style={{ objectFit: "contain" }} />
                </div>
                <h4 style={{ margin: 0 , color:"#ffff", fontFamily: "'Playfair Display', serif"}}>{item.name}</h4>
                <p style={{ margin: 0, fontSize: '0.9rem', color: '#ffff' }}>{item.city}</p>
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

export default TestimonialsSwiper;
