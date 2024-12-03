import { Link } from "react-router-dom";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { ServicesData } from "../assets/data/ServicesData";

const Services = () => {
  return (
    <>
      <div
        id="services"
        className="proloy-special-bg services-bg bg-center bg-cover relative bg-no-repeat -z-10 h-[400px]"
        style={{ backgroundImage: `url(${ServicesData.bgimage})` }}
      >
        <div className="services-style absolute right-0 top-0 ">
          <img src={ServicesData.bgstyleimg} alt="services-img" />
        </div>
      </div>
      <div
        className="proloy-services-wrape text-center -mt-[300px] "
        data-aos="fade-up"
        data-aos-duration="600"
        data-aos-delay="200"
      >
        <div className="container">
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12">
              <div className="section-title-wrape mb-[60px]">
                <h3 className=" font-semibold capitalize text-[60px] ">
                  {ServicesData.title}
                </h3>
                <h4 className=" font-normal text-[#838694] text-2xl capitalize ">
                  {ServicesData.title2}
                </h4>
              </div>
            </div>
            <div className="col-span-12">
              <Swiper
                modules={[Navigation, Autoplay]}
                slidesPerView="auto"
                breakpoints={{
                  0: {
                    slidesPerView: 1,
                  },
                  600: {
                    slidesPerView: 2,
                  },
                  992: {
                    slidesPerView: 3,
                  },
                  1200: {
                    slidesPerView: 3,
                  },
                }}
                loop={true}
                speed={1000}
                autoplay={true}
                centeredSlides={true}
                className="proloy-all-servicess-wrape"
              >
                {ServicesData.ServicesList.map((item, i) => (
                  <SwiperSlide key={i}>
                    <div className="single-services-wrape relative z-[1] mt-[70px] mx-3 mb-[136px]  after:content-[''] after:rounded-[20px] after:absolute after:opacity-0 after:invisible after:transition-all after:duration-[0.3s] after:-z-[1] after:left-5 after:right-5 after:-top-5 after:-bottom-5 after:bg-[rgb(255,74,84,/15%)] after:scale-0">
                      <div className="single-services-content relative bg-white z-[1] pt-[35px] px-[15px] pb-[30px] rounded-[20px] shadow-[0px_0px_15px_0px_rgba(199,199,199,0.4)] ">
                        <div className="services-icon flex items-center justify-center">
                          <span
                            className=" block rounded-[20px] relative bg-white h-[100px] transition-all duration-[0.3s] !leading-[100px] w-[120px] border-[1px] border-solid border-[#505050] after:content-[''] after:border-[1px] after:border-solid after:border-[#505050] after:rounded-[20px] after:absolute after:-z-[1] after:bg-white after:transition-all after:duration-[0.3s] after:left-[10px] after:right-[10px] after:-top-[10px] after:-bottom-[10px]"
                            dangerouslySetInnerHTML={{ __html: item.icon }}
                          ></span>
                        </div>
                        <h3 className=" text-[28px] capitalize my-[25px] mx-0 ">
                          {item.title}
                        </h3>
                        <p>{item.brief}</p>
                        <div className="services-hvr absolute w-full top-0 right-0 bottom-0 left-0 -z-[1] h-full ">
                          <img
                            src={item.slidimg1}
                            alt="styleimg"
                            className="shi1 absolute opacity-0 invisible transition-all duration-[0.3s] -left-[5px] -top-[5px] "
                          />
                          <img
                            src={item.slidimg2}
                            alt="styleimg"
                            className="shi2 absolute opacity-0 invisible transition-all duration-[0.3s] -right-[5px] -bottom-[5px] "
                          />
                        </div>
                        <div className="services-btn absolute left-0 right-0 transition-all duration-[0.3s] opacity-0 invisible -bottom-20 ">
                          <Link to={item.btnurl} className="btn-2 btn-tilt">
                            <span
                              dangerouslySetInnerHTML={{ __html: item.btnicon }}
                            ></span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Services;
