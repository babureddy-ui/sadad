import dynamic from 'next/dynamic';
import Head from 'next/head';
import React, { useEffect, useState } from 'react';

const DynamicDesktop = dynamic(() => import("@/components/homePage/HomePage"));
const DynamicMobile = dynamic(() => import("@/components/MobilePages/MobileHomePage"));

const Index = ({ initialMobileView }) => {
  const [isMobile, setIsMobile] = useState(initialMobileView);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    const checkIfMobile = () => {
      const mobile = window.innerWidth <= 539;
      setIsMobile(mobile);
      
      // Store view preference as cookie for future server-side rendering
      document.cookie = `prefers-view=${mobile ? 'mobile' : 'desktop'}; path=/; max-age=86400`;
    };

    checkIfMobile();
    
    window.addEventListener('resize', checkIfMobile);

    return () => {
      window.removeEventListener('resize', checkIfMobile);
    };
  }, []);

  const pageTitle = "Your All-In-One Business Suite | Trusted by Top Businesses.";
  const pageDescription = "Doroki gives you everything you need to manage your business operations, anytime, anywhere, all from one powerful platform.";
  const pageUrl = "https://doroki.com";
  const imageUrl = "https://quebuster.s3.ap-south-1.amazonaws.com/website/assets/OG+Image_updated.png";

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <link rel="canonical" href={pageUrl} />
        <link rel="alternate" href={pageUrl} hrefLang="en-us" />

        
        <meta property="og:type" content="website" />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:image" content={imageUrl} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:alt" content="Doroki - Your All-In-One Business Suite" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:site_name" content="Doroki" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@doroki_ng" />
        <meta name="twitter:creator" content="@doroki_ng" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="twitter:image" content={imageUrl} />
        <meta name="twitter:url" content={pageUrl} />

        <meta name="keywords" content=" Doroki, Paga, statement of account, financial institutions, 
            merchant business, WorldFirst business account, Business account, 
            automated payment processing, digital payment gateway, 
            mobile payment solutions for business owners, 
            subscription business based tool payment, 
            Stripe payment processing fees, Loyverse reviews and features, 
            top payment processing solutions for business, 
            top payment processing solutions for supermarket, 
            top payment processing solutions for restaurant, 
            top payment processing solutions for restaurant in nigeria, 
            top payment processing solutions for supermarket in nigeria, 
            Opay vs Moniepoint business account, 
            Bumpa merchant account benefits, 
            Orda vs Stripe comparison, 
            Loyverse features and pricing, 
            Intuit QuickBooks integration with payment systems, 
            Opay payment processing solutions, 
            GTB business account features, 
            payment processing, business to start with 100k, 
            what business can i start with 100k, 
            How to get a merchant account, 
            how to set up a business account, 
            Stripe alternatives for small businesses, 
            Payment processing software, manage business order, 
            collecting payment for business, 
            How can I track my orders and payments from anywhere, 
            What tools help me manage transactions and payments easily, 
            How do I set up my payment system for orders, 
            How can I connect my payment system to my store, 
            How can I ensure all transactions are safe and recorded, 
            book keeping tools, automated bookkeeping services, 
            cash flow management apps, Bumpa, Orda, Loyverse, 
            EPOS Solution, Intuit Quickbooks, Dukka, Zoho Inventory, 
            Traction, Opay, O pay, opay business, Moniepoint, 
            moniepoint business, moniepoint business account, 
            Monie point, GTB Squad, Sage, Squad, Shopify, Fiuu, 
            Stripe, WorldFirst, World First" />
      </Head>
      {/* Only render components when client-side hydration is complete to prevent mismatches */}
      {mounted ? (
        isMobile ? <DynamicMobile /> : <DynamicDesktop />
      ) : (
        <div style={{ minHeight: '80vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <p>Loading...</p>
        </div>
      )}
    </>
  );
};

// Server-side detection of mobile device
export async function getServerSideProps(context) {
  const cookies = context.req.headers.cookie || '';
  const cookieMatch = cookies.match(/prefers-view=(mobile|desktop)/i);
  
  // Get viewport width from client hints if available
  const viewportWidth = context.req.headers['viewport-width'] || 
                      context.req.headers['sec-ch-viewport-width'] || 
                      context.req.headers['width'] || null;
  

  let isMobile = false;
  
  if (cookieMatch && cookieMatch[1].toLowerCase() === 'mobile') {
    isMobile = true;
  } 
  else if (viewportWidth !== null) {
    isMobile = parseInt(viewportWidth) <= 600;
  }
  
  return {
    props: {
      initialMobileView: isMobile,
    },
  };
}

export default Index;
