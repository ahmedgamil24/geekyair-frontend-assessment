import React from "react";
import Container from "./common/Container";
import Button from "./ui/Button";
import { FaStar } from "react-icons/fa";

const Hero = () => {
  return (
<section className="bg-[#E0F8F2]">
  <div className="flex flex-col lg:flex-row items-center">
    
    <Container className="max-w-[1400px] mx-auto px-5 w-full">
      <div className="flex flex-col mt-20 lg:mt-32 gap-6 text-center lg:text-left">

        <h2 className="font-bold text-4xl sm:text-5xl md:text-6xl lg:text-[81px] leading-tight">
          Meet your <br />
          <span className="font-secondary text-secondary font-normal">favorite</span> new (old) <br /> marketing channel.
        </h2>

        <p className="text-[#58595D] text-base sm:text-lg md:text-xl">
          Remarkable results. Easier than email. Postcard marketing <br />
          reinvented for modern ecommerce.
        </p>

        <div className="flex flex-col sm:flex-row gap-8 mt-8 items-center lg:items-start">
          <Button text="Try it Risk-free" variant="primary" className="w-60 h-14" />
          
          <div className="flex flex-col items-center sm:items-start">
            <div className="flex gap-1.5 text-[#FDC639] text-xl">
              <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
            </div>
            <p>5.0 Shopify Rating</p>
          </div>
        </div>

      </div>
    </Container>

    <div className="w-full flex justify-center lg:justify-end mt-12 lg:mt-0">
      <img 
        className="w-[80%] md:w-[60%] lg:w-full"
        src="/images/hero/hero.png"
        alt="Hero"
      />
    </div>
  </div>
</section>
  );
};

export default Hero;
