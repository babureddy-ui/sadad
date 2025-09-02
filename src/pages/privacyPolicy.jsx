import React from 'react'
import PrivacyPolicy from './privacyPolicy/PrivacyPolicy'

const privacyPolicy = ({mobileView}) => {
  return (
    <div>
       <div style={mobileView === 0 ? { fontFamily: "GilroyRegular", padding: "6rem 1.2rem", lineHeight: "1.5rem", marginTop: 'rem' } : { fontFamily: "GilroyRegular", padding: "6rem 6rem", lineHeight: "2rem", wordSpacing: "0.1rem" }}>
         <PrivacyPolicy/>
         </div>
    </div>
  )
}

export default privacyPolicy





