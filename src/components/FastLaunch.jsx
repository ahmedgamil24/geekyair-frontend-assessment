import React from "react";
import Container from "./common/Container";
import SectionTitle, { CursiveTitle } from "./ui/SectionTitle";

const FastLaunch = () => {
  return (
    <section className="bg-[#E3F8F8]">
    <Container>
        <SectionTitle className="pt-[106px] pb-[59px]">
            Fast launch. Fast results. <br />
            <CursiveTitle>Here's how.</CursiveTitle>
        </SectionTitle>

        <div className="">
          <div className="flex flex-col  md:justify-between md:items-left gap-8">
            <div className="text-5xl flex gap-10 px-2 py-2">
              <p className="text-[#00938766] font-secondary font-normal leading-12">01</p>
              <h3 className="text-[#2E2F3566] font-bold text-4xl leading-11">Segment</h3>
            </div>

            <div>
              <p>01</p>
              <h3>Segment</h3>
            </div>

            <div>
              <p>01</p>
              <h3>Segment</h3>
            </div>

          </div>
        </div>
    </Container>
    </section>
  );
};

export default FastLaunch;
