import React from 'react';
import Product from '../Proudct/Product';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Home.css';

const Home = () => {

  const PrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display:"flex",
        justifyContent:"center",
        alignItems:"center",
        padding:"4px",
        borderRadius:"50%",
        zIndex:"100",
        marginLeft: "30px"}}
        onClick={onClick}
      />
    );
  }

  const NextArrow = (props) =>{
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style,display:"flex",
        justifyContent:"center",
        alignItems:"center",
        padding:"4px",
        borderRadius:"50%",
        zIndex:"100"}}
        onClick={onClick}
      />
    );
  }


  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />
  };

  return (
    <div className='home'>
      <div className="banner">
        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2021/X-site/SingleTitle/Suzhal/3000x1200_Hero-Tall._CB635334730_.jpg" alt="" />
      </div>
      <div className="hero">
        <div className="row__one">
          <div className="card__one">
            <h2>Shop & Pay | Earn Rewards daily</h2>
            <div className="first__row">
              <div className="a_section">
                <img src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonPay/Rewards/GWBTFPercolateCards/PC_Quard_Card_186X116_ScratchCard._SY116_CB627364845_.jpg" alt="" />
                <p>claim your scratch card</p>
              </div>
              <div className="a_section">
                <img src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonPay/Rewards/GWBTFPercolateCards/PC_Quard_Card_186X116_CollectedOffers._SY116_CB627364845_.jpg" alt="" />
                <p>Redeem your collected rewards</p>
              </div>
            </div>
            <div className="second__row">
              <div className="a_section">
                <img src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonPay/Rewards/GWBTFPercolateCards/PC_Quard_Card_186X116_WinMore._SY116_CB627364845_.jpg" alt="" />
                <p>unlock more rewards when you pay or shop</p>
              </div>
              <div className="a_section">
                <img src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonPay/Rewards/GWBTFPercolateCards/PC_Quard_Card_186X116_PayAndShop._SY116_CB627364845_.jpg" alt="" />
                <p>Explore more offer in one place</p>
              </div>
            </div>
          </div>
          <div className="card__one">
            <h2>Up to 70% off | Clearance store</h2>
            <div className="full__row">
              <div className="b_section">
                <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Electronics/Clearance/Clearance_store_Desktop_CC_1x._SY304_CB628315133_.jpg" alt="" />
                <span className="link">see more</span>
              </div>
            </div>
          </div>
          <div className="card__one">
            <h2>Top rated, premium quality | Amazon Brands & more</h2>
            <div className="first__row">
              <div className="a_section">
                <img src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonSmallBusinessDay/PrivateBrands/GW20/GW_Desktop_Home_QC_1X_V2_2._SY116_CB636581721_.jpg" alt="" />
                <p>Home products</p>
              </div>
              <div className="a_section">
                <img src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonSmallBusinessDay/PrivateBrands/GW20/GW_Desktop_QC_Furniture_1X_V2_4._SY116_CB636581721_.jpg" alt="" />
                <p>Furniture</p>
              </div>
            </div>
            <div className="second__row">
              <div className="a_section">
                <img src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonSmallBusinessDay/PrivateBrands/GW20/GW_Desktop_Daily_essentials_QC_1X_V2_1._SY116_CB636581721_.jpg" alt="" />
                <p>Daily essentials</p>
              </div>
              <div className="a_section">
                <img src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonSmallBusinessDay/PrivateBrands/GW20/GW_Desktop_Softlines_QC_1X_V2_5._SY116_CB636581721_.jpg" alt="" />
                <p>Clothing essentials</p>
              </div>
            </div>
          </div>
          <div className="card__one">
            <h2>Flat ₹200 back | Weekend grocery sale | Amazon...</h2>
            <div className="first__row">
              <div className="a_section">
                <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img18/Fresh/GW/BTF_QCs/June_22/T14/CrossCat/PC1/V1/QC_01_Logo._SY116_CB634978981_.jpg" alt="" />
                <p>upto 40% off | TOp 100 deals</p>
              </div>
              <div className="a_section">
                <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img18/Fresh/GW/BTF_QCs/June_22/T14/CrossCat/PC1/V1/QC_02_Logo._SY116_CB634978981_.jpg" alt="" />
                <p>upto 30% off | staples</p>
              </div>
            </div>
            <div className="second__row">
              <div className="a_section">
                <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img18/Fresh/GW/BTF_QCs/June_22/T14/CrossCat/PC1/V1/QC_03_Logo._SY116_CB634978981_.jpg" alt="" />
                <p>Fruits & vegetables</p>
              </div>
              <div className="a_section">
                <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img18/Fresh/GW/BTF_QCs/June_22/T14/CrossCat/PC1/V1/QC_04_Logo._SY116_CB634978981_.jpg" alt="" />
                <p>upto 45% off | visit the store</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="products__row1">
        <h2 className="products_rowTitle">Inspired by your browsing history</h2>
        <div className="products">
          <Slider {...settings}>
              <Product key={1} url="https://m.media-amazon.com/images/I/61Jo8GoB0uS._AC_UL320_.jpg" name="OZiva Protein & Herbs for Women, Cafe Mocha 500g | Natural Protein Powder for..." rating={4} price={1599.10} reviews={1049}/>

              <Product key={2} url="https://images-eu.ssl-images-amazon.com/images/I/51qDWNn7NaL._AC_UL160_SR160,160_.jpg" name="Lenovo 18.5-inch HD Monitor, TN Panel, (5ms Response time - 200 Nits..." rating={4} price={8049.50} reviews={851}/> 

              <Product key={3} url="https://m.media-amazon.com/images/I/71lSf-y+acL._SX569_.jpg" name="Yogabar Wholegrain Breakfast Muesli - Dark Chocolate + Cranberry, 700g" rating={5} price={849.10} reviews={741}/> 

              <Product key={4} url="https://m.media-amazon.com/images/I/71r69Y7BSeL._SX466_.jpg" name="Samsung Galaxy M12 (Blue,4GB RAM, 64GB Storage) 6000 mAh with 8nm Processor" rating={4} price={18499} reviews={1100}/> 

              <Product key={5} url="https://m.media-amazon.com/images/I/61xNG4wjOuL._SX569_.jpg" name="HP v236w 64GB USB 2.0 Pen Drive..." rating={3} price={478} reviews={47149}/>

              <Product key={6} url="https://images-eu.ssl-images-amazon.com/images/I/41g91x7zZqL._SX300_SY300_QL70_FMwebp_.jpg" name="Zebronics Zeb-FIT5220CH Smart Fitness Watch, 2.5D Curved Glass 4.4cm Large Square Display..." rating={5} price={3649} reviews={1479}/>

              <Product key={7} url="https://m.media-amazon.com/images/I/71TeqfraFgL._AC_UL320_.jpg" name="Parker Vector Gift Set - Parker Spark Black Special Edition Roller Ball Pen with Parker Round Key Chain (Ink - Blue)..." rating={4} price={599} reviews={2207}/>
          </Slider>
        </div>
      </div>
      <div className="products__row2">
        <h2 className="products_rowTitle">Frequently repurchased in Drugstore</h2>
        <div className="products">
          <Slider {...settings}>
              <Product key={8} url="https://m.media-amazon.com/images/I/61QjRDHLFaS._AC_SY200_.jpg" />

              <Product key={9} url="https://m.media-amazon.com/images/I/61bpzU6HClL._AC_SY200_.jpg"/> 

              <Product key={10} url="https://m.media-amazon.com/images/I/61dEQFiZZjS._AC_SY200_.jpg"/> 

              <Product key={11} url="https://m.media-amazon.com/images/I/61z8h3l3DvL._AC_SY200_.jpg" /> 

              <Product key={12} url="https://m.media-amazon.com/images/I/61m+J581IPL._AC_SY200_.jpg"/>

              <Product key={13} url="https://m.media-amazon.com/images/I/61eHZqmTvLL._AC_SY200_.jpg"/>

              <Product key={14} url="https://m.media-amazon.com/images/I/71W2yQJnDnL._AC_SY200_.jpg"/>

              <Product key={15} url="https://m.media-amazon.com/images/I/81TAKD-r-RL._AC_SY200_.jpg"/>

              <Product key={16} url="https://m.media-amazon.com/images/I/61KmgnRVL+L._AC_SY200_.jpg"/>

              <Product key={17} url="https://m.media-amazon.com/images/I/71R+gIIK6UL._AC_SY200_.jpg"/>
          </Slider>
        </div>
      </div>
      <div className="products__row3">
        <h2 className="products_rowTitle">Four stars and above rated everyday essentials for you</h2>
        <div className="products">
          <Slider {...settings}>
              <Product key={18} url="https://m.media-amazon.com/images/I/61oJnISFlAS._AC_SY200_.jpg" />

              <Product key={19} url="https://m.media-amazon.com/images/I/81czmSQjI1L._AC_SY200_.jpg"/> 

              <Product key={20} url="https://m.media-amazon.com/images/I/51pBPjcwrsL._AC_SY200_.jpg"/> 

              <Product key={21} url="https://m.media-amazon.com/images/I/61fj0jwbLiL._AC_SY200_.jpg" /> 

              <Product key={22} url="https://m.media-amazon.com/images/I/71gi0ilTrqL._AC_SY200_.jpg"/>

              <Product key={23} url="https://m.media-amazon.com/images/I/611PHgj6q4L._AC_SY200_.jpg"/>

              <Product key={24} url="https://m.media-amazon.com/images/I/71ihQvf7elL._AC_SY200_.jpg"/>

              <Product key={25} url="https://m.media-amazon.com/images/I/61U15htYfSL._AC_SY200_.jpg"/>

              <Product key={26} url="https://m.media-amazon.com/images/I/71uPP1Ny3rL._AC_SY200_.jpg"/>

          </Slider>
        </div>
      </div>
    </div>
  )
}

export default Home
