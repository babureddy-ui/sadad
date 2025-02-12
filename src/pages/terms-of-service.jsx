import React from 'react'
import TermsOfService from './termsOfService/TermsOfService'
import MobileNavBar from '@/components/navBar/MobileNavBar'
import { NavigationBar } from '@/components/navBar/NavigationBar'
import MobileFooter from '@/components/footerComponents/MobileFooter'
import DesktopFooter from '@/components/footerComponents/DesktopFooter'

const termsofservice = ({ mobileView }) => {
  return (
    <div>
      <div>{mobileView ? <MobileNavBar /> : <NavigationBar />}</div>
      <div style={mobileView ? { fontFamily: "GilroyRegular", padding: "6rem 1rem", lineHeight: "1.5rem", marginTop: 'rem' } : { fontFamily: "GilroyRegular", padding: "6rem 6rem", lineHeight: "2rem", wordSpacing: "0.1rem" }}>
      <TermsOfService/>
      </div>
      <div>{mobileView ? <MobileFooter /> : <DesktopFooter />}</div>
    </div>
  )
}

export default termsofservice 
