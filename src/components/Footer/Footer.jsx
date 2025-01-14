import React from "react";
import footerLogo from "../../assets/logo.png";
import Banner from "../../assets/website/footer-pattern.jpg";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
} from "react-icons/fa";

const BannerImg = {
  backgroundImage: `url(${Banner})`,
  backgroundPosition: "bottom",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};

const FooterLinks = [
  {
    title: "Home",
    link: "/#",
  },
  {
    title: "About",
    link: "/#about",
  },
  {
    title: "Contact",
    link: "/#contact",
  },
  // {
  //   title: "Blog",
  //   link: "/#blog",
  // },
];

const Footer = () => {
  return (
    <div style={BannerImg} className="text-white">
      <div className="container">
        <div
          data-aos="zoom-in"
          className="flex flex-row justify-between pb-44 pt-5"
        >
          {/* company details */}
          <div className="w-fit  py-8 px-4">
            <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3">
              <img
                src="https://dynamic.brandcrowd.com/asset/logo/95f9c4bf-f04b-4d6e-915e-02ef95aebe63/logo-search-grid-1x?logoTemplateVersion=1&v=638285432370800000&text=society"
                alt=""
                className="max-w-[80px] h-[80px]"
                style={{ borderRadius: "50%" }}
              />
              Shri Gajalaxmi Society
            </h1>
            <p>Copyright © 2025 Gajalaxmi Co-operative Housing Scoiety LTD.</p>
          </div>

          {/* Footer Links */}
          <div className=" w-fit flex flex-row  md:pl-10 ">
            <div className="flex-1">
              <div className="py-8 px-4 sm:px-6 lg:px-8 md:pr-10 sm:pr-10">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-center md:text-left mb-4">
                  Redevelopment
                </h1>
                <ul className="flex flex-col gap-3 items-center md:items-start">
                  {FooterLinks.map((link) => (
                    <li
                      className="cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-200"
                      key={link.title}
                    >
                      <a href={link.link}>{link.title}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* social links */}

            <div className="flex-1">
              <div className="flex items-center gap-3 mt-6">
                <a href="#">
                  <FaInstagram className="text-3xl" />
                </a>
                <a href="#">
                  <FaFacebook className="text-3xl" />
                </a>
                <a href="#">
                  <FaLinkedin className="text-3xl" />
                </a>
              </div>
              <div className="mt-6">
                <div className="flex items-center gap-3">
                  <FaLocationArrow />
                  <p>Pune, Maharashtra</p>
                </div>
                <div className="flex items-center gap-3 mt-3">
                  <FaMobileAlt />
                  <p>+91 957 931 2003</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
