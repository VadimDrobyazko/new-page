import React from 'react'
import {SwiperSlide} from "swiper/react";

const Backyard = ({ video }) => {
  return (
    <div className="flex flex-col items-center justify-center w-full md:items-start md:flex-row-reverse md:justify-between lg:items-center lg:flex-col lg:justify-center lg:max-w-[310px] 2xl:max-w-[340px]">
      <video
        src={video.videoSrc}
        autoPlay
        className="w-[179px] h-[179px] md:w-[245px] md:h-[245px] lg:w-[179px] lg:h-[179px] lg:mb-[-24px]"
      />

      <div className="flex flex-col items-center justify-start w-full mt-[-23px] md:mt-[0] md:w-[55.75%] lg:w-full">
        <div className="flex items-center w-full px-[13px] py-[12px] bg-[#F4F6F7] rounded-[45px]">
          <span className="w-[33px] h-[33px] flex items-center justify-center bg-[#2D322F] c-white-3 rounded-full">
            {video.id}
          </span>

          <span className="font-a c-black-1 font-gilroy font-semibold flex-1 text-center">
            {video.title}
          </span>

          <span className="w-[33px] h-[33px]"/>
        </div>


        <div className="w-full mt-[15px] px-[32px] py-[30px] flex flex-col items-cenetr justify-start gap-[11px] bg-[#F4F6F7] rounded-[31px] md:mt-[18px] 2xl:px-[28px] 2xl:pt-[30px] 2xl:pb-[30px]">
          <h4 className="font-e text-[#2D322F] 2xl:font-[800]">{video.contentTitle}</h4>
          <p className="font-p text-[#787878] font-gilroy font-[400] md:max-w-[79.01%] lg:max-w-[100%]">{video.contentParagraph}</p>
        </div>
      </div>
    </div>
  )
}
export default Backyard
