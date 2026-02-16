import Container from "./common/Container";
import SectionTitle, { CursiveTitle } from "./ui/SectionTitle";

const BrandNeeds = () => {
  const cardImages = [
    { id: 1, bg:"#FDF3EA" , src: "/images/brand-needs/paying.png", alt: "Logo 1", titlle: "Plug-and-play with your stack", paragraph: "Native integrations provide seamless segmentation, automation & tracking. No clunky spreadsheets." },
    { id: 2, bg:"#E0F8F2" , src: "/images/brand-needs/compaigns.png", alt: "Logo 2", titlle: "Run campaigns on autopilot", paragraph: "Ink profits while you sleep: Just set it and forget it."},
    { id: 3, bg:"#EEECFF" , src: "/images/brand-needs/dashboard.png", alt: "Logo 3", titlle: "Real-time ROI dashboard", paragraph: "Track performance of every postcard by customer or discount code. Your CFO will love it." },
    { id: 4, bg:"#D9F2F7" , src: "/images/brand-needs/handwritten-card.png", alt: "Logo 4", titlle: "Deliver WOW with *real* handwritten cards", paragraph: "Our proprietary robots use real pens and ink for an unforgettable VIP touch." },
    { id: 5, bg:"#FAEDED" , src: "/images/brand-needs/predictable-pricing.png", alt: "Logo 5", titlle: "Predictable pricing", paragraph: "Unlike CPCs, postage rates don’t change based on competition or who you’re targeting." },
    { id: 6, bg:"#F1F1F1" , src: "/images/brand-needs/service.png", alt: "Logo 6", titlle: "Complimentary concierge service", paragraph: "DTC is in our DNA. Our pros will build your strategy and custom designs using battle-tested best practices." },
  ];
  return (
    <Container>
      <section>
      <SectionTitle className="pt-24 pb-16">
        Everything your brand needs to <br />
        <CursiveTitle>make your brand unforgettable</CursiveTitle>
      </SectionTitle>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 pb-24 justify- gap-[30px]">
          {cardImages.map((card) => (
            <div className={`text-center flex flex-col rounded-xl mx-auto my-0 bg-[${card.bg}] max-w-[410px] max-h-[507px] px-10 py-10`}>
            <img key={card.id} src={card.src} alt={card.alt} />
            <h2 className="mb-2 mt-12 font-bold text-[28px] leading-9 text-[#2E2F35]">{card.titlle}</h2>
            <p className="font-medium text-[16px] leading-[30px] text-[#58595D]">{card.paragraph}</p>
            </div>
          ))}
        </div>
      </section>
    </Container>
  );
};

export default BrandNeeds;
