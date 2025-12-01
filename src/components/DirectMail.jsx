import React from "react";
import SectionTitle, { CursiveTitle } from "./ui/SectionTitle";

const DirectMail = () => {
  return (
    <section className="bg-[#F3FAFA]">
      <div>
        <SectionTitle className="pt-[106px] mb-[58px] ">
          Why use direct mail? <br />
          It <CursiveTitle>works </CursiveTitle>like crazy.
        </SectionTitle>
      </div>

      <div className="flex flex-col md:flex-row justify-around items-center gap-10 pb-24 ">
        <div>
          <h2 className="font-bold text-4xl md:text-6xl text-center">
            28X
          </h2>
          <p className="text-center font-medium text-[14px] leading-[22px] text-[#58595D]">
            Higher response rate than email <br />& digital
          </p>
        </div>
        <div>
          <img
            className="w-[180px] md:w-[230px]"
            src="/images/direct-mail/direct-mail.png"
            alt=""
          />
          <p className="mt-1 text-center font-medium text-[14px] leading-[22px] text-[#58595D]">
            Your messages get read
          </p>
        </div>
        <div>
          <h2 className="font-bold text-[64px] leading-[75px] text-center">
            17 Days
          </h2>
          <p className="text-center font-medium text-[14px] leading-[22px] text-[#58595D]">
            Lifespan of a postcard vs. <br />
            seconds for email or SMS
          </p>
        </div>
      </div>
    </section>
  );
};

export default DirectMail;
