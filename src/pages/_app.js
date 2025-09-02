import { BuisnessTypeContext } from '@/services/BuisnessTypeContext';
import '@/styles/globals.css';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { NavigationBar } from '@/components/navBar/NavigationBar';
import MobileNavBar from '@/components/navBar/MobileNavBar';
import DesktopFooter from '@/components/footerComponents/DesktopFooter';
import MobileFooter from '@/components/footerComponents/MobileFooter';

export default function App({ Component, pageProps }) {
  const [mobileView, setMobileView] = useState(1);
  const router = useRouter();
  const [planSelected, setPlanSelected] = useState("");

  const setWindowDimensions = () => {
    window.innerWidth < 540 ? setMobileView(0) : setMobileView(1);
  };

  useEffect(() => {
    setWindowDimensions();
    window.addEventListener("resize", setWindowDimensions);
    return () => {
      window.removeEventListener("resize", setWindowDimensions);
    };
  }, []);

  useEffect(() => {
    if (
      Object.keys(router?.query).length > 0 &&
      router.pathname === "/plan-checkout/[id]"
    ) {
      const queryValue = router?.query;
      setPlanSelected(queryValue?.id);
      if (Object.keys(router?.query).includes("id")) {
        delete queryValue.id;
      }
    }
    if (Object.keys(router?.query).length > 0) {
      localStorage.setItem("sources", JSON.stringify(router?.query));
    }
  }, [router?.query]);

  return (
    <BuisnessTypeContext>
      <div>{mobileView === 0 ? <MobileNavBar /> : <NavigationBar />}</div>
      <Component {...pageProps} 
      mobileView={mobileView}
      planSelected={planSelected} />
      <div>{mobileView === 0 ? <MobileFooter /> : <DesktopFooter />}</div>
    </BuisnessTypeContext>
  );
}
