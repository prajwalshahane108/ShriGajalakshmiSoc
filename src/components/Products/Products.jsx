import React from "react";
import Img1 from "../../assets/women/women.png";
import Img2 from "../../assets/women/women2.jpg";
import Img3 from "../../assets/women/women3.jpg";
import Img4 from "../../assets/women/women4.jpg";
import { FaStar } from "react-icons/fa6";

const ProductsData = [
  {
    id: 1,
    img: "https://thumbs.dreamstime.com/b/mature-boss-company-staff-members-hugging-laughing-looking-camera-middle-aged-boss-company-staff-members-hugging-standing-190944309.jpg",
    title: "Members",
    // rating: 5.0,
    color: "102",
    aosDelay: "0",
  },
  {
    id: 2,
    img: "https://cdn.sanity.io/images/v48q37k7/production/d09208183125ab47493d5de2f8710b6faa27d7cc-3000x2000.jpg",
    title: "Flats",
    // rating: 4.5,
    color: "85",
    aosDelay: "200",
  },
  {
    id: 3,
    img: "https://img.freepik.com/premium-photo/ai-generated-illustration-online-shopping-concept-smart-gadget_441362-10177.jpg",
    title: "Shops",
    rating: 4.7,
    color: "34",
    aosDelay: "400",
  },
  // {
  //   id: 4,
  //   img: Img4,
  //   title: "Printed T-Shirt",
  //   rating: 4.4,
  //   color: "Yellow",
  //   aosDelay: "600",
  // },
  // {
  //   id: 5,
  //   img: Img2,
  //   title: "Fashin T-Shirt",
  //   rating: 4.5,
  //   color: "Pink",
  //   aosDelay: "800",
  // },
];

const Products = () => {
  return (
    <div className="mt-14 mb-12">
      <div className="container">
        {/* Header section */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            Thanks from all the 102 members.
          </h1>
          {/* <p data-aos="fade-up" className="text-xs text-gray-400">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit
            asperiores modi Sit asperiores modi
          </p> */}
        </div>
        {/* Body section */}
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-3 place-items-center gap-5">
            {/* card section */}
            {ProductsData.map((data) => (
              <div
                data-aos="fade-up"
                data-aos-delay={data.aosDelay}
                key={data.id}
                className="space-y-3"
              >
                <img
                  src={data.img}
                  alt=""
                  className="h-[210px] w-[150px] object-cover rounded-md"
                />
                <div className="flex justify-center">
                  <p className="text-lg text-gray-600">{data.color}</p>
                </div>
                <div className="flex justify-center">
                  <h3 className="font-semibold ">{data.title}</h3>
                </div>
                <div className="flex items-center gap-1">
                  {/* <FaStar className="text-yellow-400" /> */}
                  {/* <span>{data.rating}</span> */}
                </div>
              </div>
            ))}
          </div>
          {/* view all button */}
          <div className="flex justify-center">
            <div className="text-center mt-10 cursor-pointer  py-1 px-5 rounded-md"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
