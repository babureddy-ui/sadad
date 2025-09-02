import dynamic from 'next/dynamic';
import Head from 'next/head';
import React, { useEffect, useState } from 'react';

const DynamicDesktop = dynamic(() => import("@/components/homePage/HomePage"));
const DynamicMobile = dynamic(() => import("@/components/MobilePages/MobileHomePage"));

const Index = () => {
  const [isMobile, setIsMobile] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.innerWidth < 540;
    }
    return false;
  });
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 540);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const pageTitle = "Your All-In-One Business Suite | Trusted by Top Businesses.";
  const pageDescription = "Sadad gives you everything you need to manage your business operations, anytime, anywhere, all from one powerful platform.";
  const pageUrl = "https://sadad.com";
  const imageUrl = "";


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
        <meta name="image" property="og:image" content={imageUrl} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:alt" content="Sadad - Your All-In-One Business Suite" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:site_name" content="Sadad" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@sadad_ng" />
        <meta name="twitter:creator" content="@sadad_ng" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="twitter:image" content={imageUrl} />
        <meta name="twitter:url" content={pageUrl} />

        <meta name="keywords" content=" Sadad, Sadad, statement of account, financial institutions, 
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

  

      <div style={{ display: 'none' }} aria-hidden="true">
        <h1>Your All-In-One Business Suite | Trusted by Top Businesses</h1>
        <h2>Take your business online, with our  eStore  feature</h2>
        <h3>Seamlessly manage Billing operations with precision</h3>
      </div>
      {hasMounted ? (
        isMobile ? <DynamicMobile /> : <DynamicDesktop />
      ) : (
        <div style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', fontFamily: "GilroyMedium" }}>
          <p>Loading...</p>
        </div>
      )}
    </>
  );
};


export default Index;

