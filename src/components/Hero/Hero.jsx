import React from "react";
import Image1 from "../../assets/hero/women.png";
import Image2 from "../../assets/hero/shopping.png";
import Image3 from "../../assets/hero/sale.png";
import Slider from "react-slick";

const ImageList = [
  {
    id: 1,
    img: "https://gajalaxmisociety.co.in/wp-content/uploads/2023/03/WhatsApp-Image-2023-03-06-at-12.37.50-1-1024x768.jpeg",
    title: "Welcome to Shri Gajalaxmi Co-operative Housing Society Website",
    description:
      "Since 1980 to till date all 102 members/ families are staying together as one family member.",
  },
  {
    id: 2,
    img: "https://gajalaxmisociety.co.in/wp-content/uploads/2023/03/society_green.jpg",
    title: "About Us",
    description: `After the Panshet floods of Pune, the flood affected population was rehabilitated
around the precincts of main Pune City and thus new suburbs emerged, amongst
them one is Sahakarnagar No.1 and 2. The area is spread from Parvati Hill extending
up to Padmavati Temple touching Satara Road. In the Year 1980, Shri. V. A. Tamhankar the partner of the then renowned builder
developer firm M/s.Tamhankar Asso. gathered some 14 members and formed the
society in the name Shri Gajalaxmi Sahakari Gruhrachna Sanstha maryadit and
registered the same under registration no. PNA/HSG/1436/1980 and purchased the
land admeasuring 2 acres and 14 gunthas in Sahakarnagar situated at the foot of Taljai
Hills near Aranyeshwar Mandir of Peshawa era.`,
  },
  {
    id: 3,
    img: "https://gajalaxmisociety.co.in/wp-content/uploads/2023/03/WhatsApp-Image-2023-03-06-at-12.37.51-1.jpeg",
    title: "The main motto of any society must be to uplift the livelihood.",
    description: "We are a co-operative housing society consisting of 102 members possessing 85 flats and 34 shops.",
  },
];

const Hero = ({ handleOrderPopup }) => {
  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
  };

  return (
    <div className="relative overflow-hidden min-h-[550px] sm:min-h-[650px] bg-gray-100 flex justify-center items-center dark:bg-gray-950 dark:text-white duration-200 ">
      {/* background pattern */}
      <div className="h-[700px] w-[700px] bg-primary/40 absolute -top-1/2 right-0 rounded-3xl rotate-45 -z[8]"></div>
      {/* hero section */}
      <div className="container pb-8 sm:pb-0">
        <Slider {...settings}>
          {ImageList.map((data) => (
            <div>
              <div className="grid grid-cols-1 sm:grid-cols-2">
                {/* text content section */}
                <div className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10">
                  <h1
                    data-aos="zoom-out"
                    data-aos-duration="500"
                    data-aos-once="true"
                    className="text-5xl sm:text-6xl lg:text-7xl font-bold"
                  >
                    {data.title}
                  </h1>
                  <p
                    data-aos="fade-up"
                    data-aos-duration="500"
                    data-aos-delay="100"
                    className="text-sm"
                  >
                    {data.description}
                  </p>
                  <div
                    data-aos="fade-up"
                    data-aos-duration="500"
                    data-aos-delay="300"
                  >
                    {/* <button
                      onClick={handleOrderPopup}
                      className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-2 px-4 rounded-full"
                    >
                      Order Now
                    </button> */}
                  </div>
                </div>
                {/* image section */}
                <div className="order-1 sm:order-2">
                  <div
                    data-aos="zoom-in"
                    data-aos-once="true"
                    className="relative z-10"
                  >
                    <img
                      src={data.img}
                      alt=""
                      className="w-[300px] h-[300px] sm:h-[450px] sm:w-[450px] sm:scale-105 lg:scale-120 object-cover mx-auto"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Hero;
