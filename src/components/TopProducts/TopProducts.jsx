import React from "react";
import Img1 from "../../assets/shirt/shirt.png";
import Img2 from "../../assets/shirt/shirt2.png";
import Img3 from "../../assets/shirt/shirt3.png";
import { FaStar } from "react-icons/fa";

const ProductsData = [
  {
    id: 1,
    img: "https://thumbs.dreamstime.com/b/young-indian-man-happy-outdoors-looking-camera-39595562.jpg",
    title: "Mr. Shriram Kunchur",
    description: "Chairman",
  },
  {
    id: 2,
    img: "https://globalventuring.com//content/uploads/2023/03/Sonam-Jain-landscape.png",
    title: "Mrs. Pooja Sadalge",
    description: "Secretary",
  },
  {
    id: 3,
    img: "https://globalventuring.com//content/uploads/2023/03/Sonam-Jain-landscape.png",
    title: "Miss. Sunita Nitwe",
    description: "Treasurer",
  },
  {
    id: 4,
    img: "https://thumbs.dreamstime.com/b/young-indian-man-happy-outdoors-looking-camera-39595562.jpg",
    title: "Mr. Pramod Phadnis",
    description: "Treasurer",
  },
  {
    id: 5,
    img: "https://thumbs.dreamstime.com/b/young-indian-man-happy-outdoors-looking-camera-39595562.jpg",
    title: "Mr. Chandrashekhar Thatte",
    description: "Treasurer",
  },
  {
    id: 6,
    img: "https://thumbs.dreamstime.com/b/young-indian-man-happy-outdoors-looking-camera-39595562.jpg",
    title: "Mr. Sandeep Joshi",
    description: "Treasurer",
  },
];
const TopProducts = ({ handleOrderPopup }) => {
  return (
    <div>
      <div className="container">
        {/* Header section */}
        <div className="text-left mb-24">
          {/* <p data-aos="fade-up" className="text-sm text-primary">
            Top Rated Products for you
          </p> */}
          <h1 data-aos="fade-up" className="text-3xl font-bold pb-8">
            Management committee
          </h1>
          <h1 data-aos="fade-up" className="text-3xl font-bold"></h1>
        </div>
        {/* Body section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 md:gap-25 place-items-center ">
          {ProductsData.map((data) => (
            <div
              data-aos="zoom-in"
              className="rounded-2xl bg-white dark:bg-gray-800 hover:bg-black/80 dark:hover:bg-primary hover:text-white relative shadow-xl duration-300 group max-w-[300px] mb-10"
            >
              {/* image section */}
              <div className="h-[100px] mb-10">
                <img
                  src={data.img}
                  alt=""
                  className="w-[140px] h-[220px] block mx-auto transform -translate-y-20 group-hover:scale-105 duration-300 drop-shadow-md rounded object-cover"
                />
              </div>
              {/* details section */}
              <div className="p-4 text-center">
                <h1 className="text-xl font-bold">{data.title}</h1>
                <p className="text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2">
                  {data.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopProducts;
