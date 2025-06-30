import React from 'react'
import PrivacyPolicy from './privacyPolicy/PrivacyPolicy'
import MobileNavBar from '@/components/navBar/MobileNavBar'
import { NavigationBar } from '@/components/navBar/NavigationBar'
import MobileFooter from '@/components/footerComponents/MobileFooter'
import DesktopFooter from '@/components/footerComponents/DesktopFooter'

const privacyPolicy = ({mobileView}) => {
  return (
    <div>
       <div>{mobileView === 0? <MobileNavBar /> : <NavigationBar />}</div>
       <div style={mobileView === 0 ? { fontFamily: "GilroyRegular", padding: "6rem 1.2rem", lineHeight: "1.5rem", marginTop: 'rem' } : { fontFamily: "GilroyRegular", padding: "6rem 6rem", lineHeight: "2rem", wordSpacing: "0.1rem" }}>
         <PrivacyPolicy/>
         </div>
      <div>{mobileView === 0? <MobileFooter /> : <DesktopFooter />}</div>
    </div>
  )
}

export default privacyPolicy





