import React from 'react'
import Button from "../../components/Button/Button.jsx";
import decorSec from '../../assets/images/first-decor.png'
import decorBg from '../../assets/images/first-bg.png'
import decorBgMobile from '../../assets/images/first-bg-mobile.png'
import decorElipse from '../../assets/images/first-elipse.svg'

const FirstSection = () => {
  return (
    <section className='section'>
      <div className="c-cont">
        <div className="s-wrap relative flex flex-col justify-start items-start z-10 md:max-w-[96.12%] md:mx-[auto] lg:max-w-[100%]">
          <div className="flex flex-col md:flex-row lg:justify-between items-center">
            <div className='md:w-[75.64%] lg:w-[68.61%]'>
              <h1 className="font-t text-[#303030]">
                The yield-backed
                stablecoin protocol
                boosting <span className="defi-span inline-block">DeFi</span> liquidity
              </h1>

              <h3 className="font-s text-[#2626268C] mt-[14px] md:mt-[16px]">
                Keep your yield working for you — we keep
                your
                liquidity accessible
              </h3>
            </div>

            <div className="hidden w-[152px] h-[152px] md:flex items-center justify-center lg:w-[212px] lg:h-[212px] 2xl:w-[276px] 2xl:h-[276px] 2xl:mr-[20px]">
              <img
                src={decorSec}
                alt="decor"
                className='object-cover w-full h-full'
              />
            </div>
          </div>

          <div className="flex justify-start gap-[8px] mt-[42px] md:mt-[33px] md:gap-[21px] lg:mt-[70px] 2xl:mt-[90px]">
            <Button variant="black">
              <span>Join Whitelist</span>
            </Button>
            <Button variant="gray">
              <span className="block lg:hidden">Learn more</span>
              <span className="hidden lg:block">Read docs</span>
            </Button>
          </div>
        </div>
        <div className="hidden absolute w-[166.41%] h-[79.05%] top-0 left-[-29.07%] bottom-[50%] mix-blend-color-dodge md:block lg:w-full lg:top-0 lg:left-0 lg:bottom-auto">
          <img
            src={decorBg}
            alt="decor"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="absolute w-[286.67%] h-[69.74%] top-[-10px] left-[-29.07%] bottom-[50%] mix-blend-color-dodge md:hidden">
          <img
            src={decorBgMobile}
            alt="decor"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="absolute w-[47.12%] left-[50%] top-[50%] transform -translate-x-1/2 -translate-y-1/2">
          <img
            src={decorElipse}
            alt="decor"
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </section>
  )
}
export default FirstSection

