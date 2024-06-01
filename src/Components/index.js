import React from 'react';
import Header from './Header/Header';
import Title from './Header/Title';
import SwiperSlideC from './Swipper/SwipperSlide';
import NaturelPr from './Header/NaturelPr';
import IndexCategorie from './Categorie';
import IndexProducts from './Products/IndexProducts';
import Quick from './QuickDelivery_Bloc/Quick';
import Index_Offre from './Offre_Product/Index_Offre';
import Need from './Daily_Need/Need';
import Footer from './Footer/Footer';


const Index = () => {
  return (
    <div>
      <Header />
      <Title />
      <SwiperSlideC />
      <NaturelPr />
      <IndexCategorie />
      <IndexProducts />
      <Quick />
      <Index_Offre />
      <Need />
      <Footer/>
    </div>
  );
}

export default Index;