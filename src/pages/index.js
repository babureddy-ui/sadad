// import dynamic from 'next/dynamic';
// import Head from 'next/head';
// import React from 'react';
// const DynamicDesktop = dynamic(() =>
//   import("@/components/homePage/HomePage")
// );

// const DynamicMobile = dynamic(() =>
//   import("@/components/MobilePages/MobileHomePage")
// );

// const Index = ({ mobileView }) => {
//   return (
//     <>
//       <Head>
//         <meta
//           name="keywords"
//           content="
//             Doroki, Paga, statement of account, financial institutions, 
//             merchant business, WorldFirst business account, Business account, 
//             automated payment processing, digital payment gateway, 
//             mobile payment solutions for business owners, 
//             subscription business based tool payment, 
//             Stripe payment processing fees, Loyverse reviews and features, 
//             top payment processing solutions for business, 
//             top payment processing solutions for supermarket, 
//             top payment processing solutions for restaurant, 
//             top payment processing solutions for restaurant in nigeria, 
//             top payment processing solutions for supermarket in nigeria, 
//             Opay vs Moniepoint business account, 
//             Bumpa merchant account benefits, 
//             Orda vs Stripe comparison, 
//             Loyverse features and pricing, 
//             Intuit QuickBooks integration with payment systems, 
//             Opay payment processing solutions, 
//             GTB business account features, 
//             payment processing, business to start with 100k, 
//             what business can i start with 100k, 
//             How to get a merchant account, 
//             how to set up a business account, 
//             Stripe alternatives for small businesses, 
//             Payment processing software, manage business order, 
//             collecting payment for business, 
//             How can I track my orders and payments from anywhere, 
//             What tools help me manage transactions and payments easily, 
//             How do I set up my payment system for orders, 
//             How can I connect my payment system to my store, 
//             How can I ensure all transactions are safe and recorded, 
//             book keeping tools, automated bookkeeping services, 
//             cash flow management apps, Bumpa, Orda, Loyverse, 
//             EPOS Solution, Intuit Quickbooks, Dukka, Zoho Inventory, 
//             Traction, Opay, O pay, opay business, Moniepoint, 
//             moniepoint business, moniepoint business account, 
//             Monie point, GTB Squad, Sage, Squad, Shopify, Fiuu, 
//             Stripe, WorldFirst, World First"
//         />
//         <title>Business Account | Drive your business forward easily with Doroki</title>
//         <meta
//           name="description"
//           content="Receive payments speedily. We’ve provided everything you need to grow your business and operate anytime, anywhere— without the hefty admin in one place."
//         />
//         <link rel="canonical" href="https://doroki.com/" />
//         <link rel="alternate" href="https://doroki.com/" hrefLang="en-us" />
//         <meta property="og:title" content="Doroki!" />
//         <meta
//           property="og:description"
//           content="Doroki is an all-in-one business suite designed to manage billing, inventory, invoicing, payments, customer loyalty, and more for various businesses, including retail stores, restaurants, grocery stores, electronics stores, spas, and salons."
//         />
//         <meta
//           property="og:image"
//           content="https://quebuster.s3.ap-south-1.amazonaws.com/website/assets/Landing-Thumbnail.png"
//         />
//         <meta name="twitter:card" content="summary_large_image" />
//         <meta name="twitter:title" content="Doroki!" />
//         <meta name="twitter:description" content="Doroki is an all-in-one business suite designed to manage billing, inventory, invoicing, payments, customer loyalty, and more." />
//         <meta name="twitter:image" content="https://quebuster.s3.ap-south-1.amazonaws.com/website/assets/Landing-Thumbnail.png" />
//         <meta name="twitter:url" content="https://doroki.com/" />
//       </Head>
//       {mobileView ? <DynamicMobile /> : <DynamicDesktop />}
//     </>
//   );
// };

// export default Index;




import dynamic from 'next/dynamic';
import Head from 'next/head';
import React from 'react';

const DynamicDesktop = dynamic(() => import("@/components/homePage/HomePage"));
const DynamicMobile = dynamic(() => import("@/components/MobilePages/MobileHomePage"));

const Index = ({ mobileView }) => {
  const pageTitle = "Business Account | Drive Your Business Forward Easily with Doroki";
  const pageDescription = "Receive payments speedily. Doroki provides everything you need to grow your business and operate anytime, anywhere—without the hefty admin in one place.";
  const pageUrl = "https://doroki.com/";
  const imageUrl = "https://quebuster.s3.ap-south-1.amazonaws.com/website/assets/Landing-Thumbnail.png";

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <link rel="canonical" href={pageUrl} />
        <link rel="alternate" href={pageUrl} hrefLang="en-us" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:image" content={imageUrl} />
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
      {mobileView ? <DynamicMobile /> : <DynamicDesktop />}
    </>
  );
};

export default Index;