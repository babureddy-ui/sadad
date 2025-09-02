import React from 'react'
import TermsOfService from './termsOfService/TermsOfService'

const termsofservice = ({ mobileView }) => {
  return (
    <div>
      <div style={mobileView === 0 ? { fontFamily: "GilroyRegular", padding: "6rem 1rem", lineHeight: "1.5rem", marginTop: 'rem' } : { fontFamily: "GilroyRegular", padding: "6rem 6rem", lineHeight: "2rem", wordSpacing: "0.1rem" }}>
      <TermsOfService/>
      </div>
    </div>
  )
}

export default termsofservice 
