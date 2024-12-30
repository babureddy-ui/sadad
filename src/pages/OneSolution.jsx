import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import styles from '../components/MobilePages/Mobile.module.css';

const oneSolution = [
  {
    hedsec: "POS 10Q",
    img: "/assets/MobileView/pos.webp",
    text: "Good for both out-door and in-store use cases, integrated with MSR, EMV chip & pin, NFC card readers, dedicated 2D barcode scanning engine, 4G/WiFi Bluetooth connectivities, enable clients to choose whatever payment option.",
  },
  {
    hedsec: "MF 960",
    img: "/assets/mf.webp",
    text: "Equips with Linux or Android system based on your choice. lt’s a win-win solution not only improving classic POS performance but also reducing cost of smart POS.",
  },
];

const OneSolution = () => {
  const toggleActive = (e) => {
    e.currentTarget.classList.toggle(styles.active);
  };

  return (
    <div>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        autoplay={{ delay: 18000, disableOnInteraction: false }}
        speed={700}
        pagination={{ clickable: true }}
        modules={[Autoplay, Pagination]}
        className="custom-testimonial-swiper"
      >
        {oneSolution.map((item, index) => (
          <SwiperSlide key={index}>
            <div style={{ marginBottom: "4rem" }}>
              <div
                className={styles.solutionSection}
                onClick={toggleActive}
              >
                <div className={styles.content_sec}>
                  <div className={styles.dev_img1}>
                    <Image src={item.img} fill alt="POS" />
                  </div>
                  <p className={`${styles.content_text}`}>{item.text}</p>
                </div>

                <div className={styles.headSec}>
                  <h2 style={{ fontFamily: "GilroyBold" }}>{item.hedsec}</h2>
                </div>

                <div className={styles.animation_star1}>
                  <Image
                    src="/assets/MobileView/animations_stars1.svg"
                    fill
                    alt="Stars 1"
                  />
                </div>
                <div className={styles.animation_star2}>
                  <Image
                    src="/assets/MobileView/animations_stars2.svg"
                    fill
                    alt="Stars 2"
                  />
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      {/* Arrow */}
      <div
        style={{
          position: "relative",
          width: "10rem",
          height: "4.5rem",
          left: "55%",
          top: "-5.5rem",
        }}
      >
        <Image src="/assets/MobileView/arrow.webp" fill alt="Arrow" />
      </div>
    </div>
  );
};

export default OneSolution;
