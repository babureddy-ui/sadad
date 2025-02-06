
import dynamic from 'next/dynamic';
import React from 'react';

// const DynamicDesktop = dynamic(() =>
//   import('@/components/homePage/HomePage').then((mod) => mod.HomePage),
//   {
//     loading: () => <p>Loading Desktop View...</p>,
//   }
// );

// const DynamicMobile = dynamic(() =>
//   import('@/components/MobilePages/MobileHomePage').then((mod) => mod.MobileHomePage),
//   {
//     loading: () => <p>Loading Mobile View...</p>,
//   }
// );


const DynamicDesktop = dynamic(() => import('@/components/homePage/HomePage'), {
  loading: () => <p>Loading...</p>,
  ssr: false
});
const DynamicMobile = dynamic(() => import('@/components/MobilePages/MobileHomePage'), {
  loading: () => <p>Loading...</p>,
  ssr: false
});

const Index = ({ mobileView }) => {
  return mobileView ? <DynamicMobile /> : <DynamicDesktop />;
};

export default Index;
