import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import itemVideo1 from '../../assets/video/item-video-1.mp4';
import itemVideo2 from '../../assets/video/item-video-2.mp4';
import itemVideo3 from '../../assets/video/item-video-3.mp4';
import Backyard
  from "../../components/Backyard/Backyard.jsx";

const videos = [
  {
    id: 1,
    title: "Yield Aggregator",
    videoSrc: itemVideo1,
    contentTitle: "One-click yield aggregation",
    contentParagraph: "Choose multiple stablecoin strategies, diversify in seconds, and optimize your yield without complexity"
  },
  {
    id: 2,
    title: "Yield-backed Stablecoin",
    videoSrc: itemVideo2,
    contentTitle: "Unlock liquidity with BYD",
    contentParagraph: "Mint BYD against your yield-generating LP tokens to stay liquid and productive at the same time"
  },
  {
    id: 3,
    title: "Boost DeFi Liquidity",
    videoSrc: itemVideo3,
    contentTitle: "Boost protocols, earn more",
    contentParagraph: "Your liquidity empowers DeFi — vote for pools, earn bribes, and maximize your rewards."
  },
];

const BackyardSection = () => {
  return (
    <section className="section">
      <div className="c-cont">
        <div className='m-wrap'>
          <h2 className="font-f c-black-1 relative z-10">
            What is Backyard?
          </h2>

          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={30}
            slidesPerView={3}
            navigation
            pagination={{clickable: true}}
            loop
            className="swiper mt-[39px] md:mt-[42px] lg:mt-[20px]"
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 1,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 78,
              },
              1440: {
                slidesPerView: 3,
                spaceBetween: 145,
              },
            }}
          >
            {videos.map(video => (
              <SwiperSlide className="mt-[-55px] md:mt-[0]">
                <Backyard video={video}/>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  )
}

export default BackyardSection;
