import React from "react";
import BannerImg from "../../assets/women/women2.jpg";
import { GrLocation } from "react-icons/gr";
import { GrMail } from "react-icons/gr";
import { IoCall } from "react-icons/io5";
// import { GiMailShirt } from "react-icons/gi";

const Banner = () => {
  return (
    <div className="min-h-[550px] flex justify-center items-center py-12 sm:py-0">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
          {/* image section */}
          <div data-aos="zoom-in">
            <img
              src="https://gajalaxmisociety.co.in/wp-content/uploads/2023/03/WhatsApp-Image-2023-03-06-at-12.37.51-1.jpeg"
              alt=""
              className="max-w-[400px] h-[350px] w-full mx-auto drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)] object-cover"
            />
          </div>

          {/* text details section */}
          <div className="flex flex-col justify-center gap-6 sm:pt-0">
            <h1 data-aos="fade-up" className="text-3xl sm:text-4xl font-bold">
            Get InTouch with us
            </h1>
            {/* <p
              data-aos="fade-up"
              className="text-sm text-gray-500 tracking-wide leading-5"
            >
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque
              reiciendis inventore iste ratione ex alias quis magni at optio
            </p> */}
            <div className="flex flex-col gap-4">
              <div data-aos="fade-up" className="flex items-center gap-4">
                <GrLocation className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-violet-100 dark:bg-violet-400" />
                <p>Survey No. 82/2A, Parvati, Sahakar Nagar No.1, Opposite Gandhi Training College, Pune - 411009</p>
              </div>
              <div data-aos="fade-up" className="flex items-center gap-4">
                <IoCall className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-orange-100 dark:bg-orange-400" />
                <p>+ 91 957 931 2003</p>
              </div>
              <div data-aos="fade-up" className="flex items-center gap-4">
                <GrMail className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-green-100 dark:bg-green-400" />
                <p>shrigajalaxmi80@gmail.com</p>
              </div>
              {/* <div data-aos="fade-up" className="flex items-center gap-4">
                <GrMail className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-yellow-100 dark:bg-yellow-400" />
                <p>Get Offers</p>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
