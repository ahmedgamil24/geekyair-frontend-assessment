import React from "react";
import Container from "./common/Container";
import SectionTitle, { CursiveTitle } from "./ui/SectionTitle";

const Trusted = () => {
  const cardImages = [
    { id: 1, src: "/images/trusted/rungum-image.png", alt: "Logo 1" },
    { id: 2, src: "/images/trusted/beardbrand-image.png", alt: "Logo 2" },
    { id: 3, src: "/images/trusted/promix-image.png", alt: "Logo 3" },
    { id: 4, src: "/images/trusted/scotchporter-image.png", alt: "Logo 4" },
  ];
  return (
    <section className="">
      <SectionTitle className="mt-[106px] mb-[85px]">
        Trusted by thousands <br />
        of top DTC
        <CursiveTitle>brands.</CursiveTitle>
      </SectionTitle>
      <Container>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-16 mb-24 place-items-center">
          {cardImages.map((card) => (
            <img key={card.id} src={card.src} alt={card.alt} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Trusted;
