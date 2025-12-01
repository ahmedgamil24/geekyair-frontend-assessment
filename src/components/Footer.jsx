import { FaEnvelope } from "react-icons/fa";
import Container from "./common/Container";
import Button from "./ui/Button";

const Footer = () => {
  return (
    <Container>
      <section>
        <div className="flex flex-col md:flex-row justify-between my-24 gap-10 md:gap-0 text-center md:text-left">
          <div className="flex flex-col items-center md:items-start">
            <img
              className="max-w-28 max-h-[107px]"
              src="/images/eco-friendly-logo/eco-friendly-logo.png"
              alt=""
            />
            <p className="mt-6">
              Our paper is sourced from FSC-certified <br />
              mills. We plant enough trees to more than <br />
              double our paper usage.
            </p>
          </div>

          <div className="grid gap-3.5">
            <a href="">Company</a>
            <a href="">About us</a>
            <a href="">Partner program</a>
            <a href="">Career</a>
            <a href="">Contact us</a>
            <a href="">Privacy Policy</a>
          </div>

          <div className="grid gap-3.5">
            <a href="" className="text-white">
              Company
            </a>
            <a href="">Pricing</a>
            <a href="">Reviews</a>
            <a href="">Direct Mail Academy</a>
            <a href="">Success stories</a>
            <a href="">Terms & conditions</a>
          </div>

          <div className="">
            <a className="" href="">
              CONTACT
            </a>
            <div className="flex flex-row justify-center md:justify-start my-7 items-center gap-3 ">
              <FaEnvelope size={24} color="#58595D" className="bg-[]"></FaEnvelope>
              <p>support@postpilot.com</p>
            </div>
            <p>Printed with 🧡 at our facility in South Carolina </p>
          </div>
        </div>

        <div className="py-12 flex flex-col items-center md:flex-row  md:justify-between gap-6 md:gap-0 border-t-2 border-[#E6E6E7]">
          <div>
            <img src="/images/post-pilot-logo/logo.png" alt="" />
            <p className="pt-2">© 2024 PostPilot, Inc. All rights reserved.</p>
          </div>

          <div>
            <div className="flex flex-row gap-4">
              <Button
                text="Login"
                variant="secondary"
                className="max-w-[84px] max-h-[44]"
              ></Button>
              <Button
                text="Try it for free"
                variant="primary"
                className=""
              ></Button>
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
};

export default Footer;
