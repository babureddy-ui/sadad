import dynamic from 'next/dynamic';
import Head from 'next/head';
import React from 'react';
const DynamicDesktop = dynamic(() =>
  import("@/components/homePage/HomePage")
);

const DynamicMobile = dynamic(() =>
  import("@/components/MobilePages/MobileHomePage")
);

const Index = ({ mobileView }) => {
  return (
    <>
      <Head>
        <title>Doroki</title>
        <meta
          name="description"
          content="Doroki is an All-In-One Business Super POS App for all businesses to manage Billing, Inventory, Customer Loyalty, and more."
        />
        <link rel="canonical" href="https://admin.doroki.com/" />
        <link rel="alternate" href="https://admin.doroki.com/" hrefLang="en-us" />
        <meta
          property="og:title"
          content="Doroki!"
        />
        <meta
          property="og:description"
          content="Doroki is an all-in-one business suite designed to manage billing, inventory, invoicing, payments, customer loyalty, and more for various businesses, including retail stores, restaurants, grocery stores, electronics stores, spas, and salons."
        />
        <meta
          property="og:image"
          content="https://quebuster.s3.ap-south-1.amazonaws.com/website/assets/Landing-Thumbnail.png"
        />
      </Head>
      {mobileView ? <DynamicMobile /> : <DynamicDesktop />}
    </>
  );
};

export default Index;