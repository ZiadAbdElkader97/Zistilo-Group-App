import { useState } from "react";
import { Parallax } from "react-scroll-parallax";
import { Modal } from "flowbite-react";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import Blogdetails from "./Blogdetails";
import Sidebar from "./Sidebar";
import { BlogData } from "../assets/data/BlogData";
import { useTranslation } from "react-i18next";

const Blog = () => {
  const { t } = useTranslation();
  const [openModal, setOpenModal] = useState(false);
  return (
    <>
      <div className="proloy-special-bg-wrape special-bg bg-center bg-cover relative bg-no-repeat mt-[50px] -z-[1] h-[850px] bg-[#f7faff]">
        <div className="special-style absolute right-0 top-[230px] w-[400px] vsm:w-[300px]">
          <img src={BlogData.sbgimg2} alt="special-img" />
        </div>
      </div>
      <div id="blog" className="proloy-blog-wrape pb-[100px] mt-[-500px]">
        <div className="container">
          <div className="grid grid-cols-12 gap-2">
            <div className="xl:col-span-6 lg:col-span-6 md:col-span-12 sm:col-span-12">
              <div className="section-title-wrape relative mb-[130px]">
                <Parallax
                  className="section-image absolute right-[30%] -top-[60%] sm:hidden"
                  translateX={["20px", "0px"]}
                >
                  <img src={BlogData.sbgimg1} alt="section-img" />
                </Parallax>
                <h3
                  className="font-semibold capitalize text-[60px] sm:text-[45px] vsm:text-[35px]"
                  data-aos="fade-up"
                  data-aos-duration="400"
                  data-aos-delay="200"
                >
                  {t(BlogData.title)}
                </h3>
                <h4
                  className="font-normal text-[#838694] text-2xl sm:text-[25px] vsm:text-[20px] capitalize"
                  data-aos="fade-up"
                  data-aos-duration="600"
                  data-aos-delay="300"
                >
                  {t(BlogData.title2)}
                </h4>
              </div>
            </div>
            <div className="xl:col-span-6 lg:col-span-6 md:col-span-12 sm:col-span-12">
              <div
                className="proloy-about-para-sign-wrape"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <p>{t(BlogData.brief)}</p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12">
              <Swiper
                modules={[Navigation, Autoplay]}
                slidesPerView="auto"
                breakpoints={{
                  0: {
                    slidesPerView: 1,
                  },
                  600: {
                    slidesPerView: 1,
                  },
                  992: {
                    slidesPerView: 2,
                  },
                  1200: {
                    slidesPerView: 3,
                  },
                }}
                autoplay={true}
                loop={true}
                speed={1000}
                centeredSlides={true}
                className="proloy-all-blog-list-wrape"
              >
                {BlogData.BlogList.map((item, i) => (
                  <SwiperSlide key={i}>
                    <div className="proloy-single-blog-wrape transition-all duration-[0.3s] mt-0 mx-[12px] mb-5">
                      <div className="single-blog-content-wrape relative">
                        <div className="single-blog-img relative before:absolute before:rounded-[15px] before:content-[''] before:left-0 before:right-0 before:top-0 before:bottom-0 before:transition-all before:duration-[0.3s] before:bg-gradient-to-b before:from-[rgba(0,0,0,0)0%] before:to-[rgba(2,2,0,0)1%,#000_100%] ">
                          <img
                            className="w-full block"
                            src={item.img}
                            alt="blog-img"
                          />
                        </div>
                        <div className="blog-date-title-wrape transition-all duration-[0.3s] absolute left-[15px] right-[15px] -bottom-[90px]">
                          <div className="single-blog-date w-[50px] h-[50px] rounded-[5px] bg-white inline-flex items-center justify-center text-base font-medium text-center capitalize py-[10px] px-[5px] !leading-[18px] ">
                            {t(item.postdate)}
                          </div>
                          <div className="blog-info-title-wrape bg-white mt-5 p-5 rounded-[5px] shadow-[0px_8px_20px_0px_rgba(47,48,52,0.14)] [box-shadow:0px_8px_20px_0px_rgba(47,48,52,0.14)]">
                            <ul className="admin-info flex items-center">
                              <li className="mr-[15px]">
                                <Link
                                  className="text-base text-[#838694] capitalize"
                                  to={item.authorlink}
                                >
                                  <i className="fa fa-user mr-[7px]"></i>{" "}
                                  {t(item.authorname)}
                                </Link>
                              </li>
                              <li className="mr-[15px]">
                                <Link
                                  className="text-base text-[#838694] capitalize"
                                  to={item.commentlink}
                                >
                                  <i className="fa fa-comment mr-[7px]"></i>{" "}
                                  {t(item.commentno)}
                                </Link>
                              </li>
                            </ul>
                            <h4
                              className="post-title font-medium capitalize block text-[26px] !leading-[38px]"
                              onClick={() => setOpenModal(true)}
                            >
                              {t(item.title)}
                            </h4>
                          </div>
                        </div>
                      </div>
                      <div className="blog-readmore-btn mt-5 mr-0 mb-0 ml-[15px] ">
                        <div
                          className="btn-3 text-center uppercase"
                          onClick={() => setOpenModal(true)}
                        >
                          {t(item.btntext)}
                          <span>
                            <svg
                              data-name="Layer 1"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 128 95.91"
                            >
                              <path
                                d="M259.88,468.09l-52,45.93-5.1-5.52,43.33-38.41H131.88v-8H246.09l-43.25-38.36,5-5.62,52.06,46Z"
                                transform="translate(-131.88 -418.11)"
                              ></path>
                            </svg>
                          </span>
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

      <Modal
        dismissible
        show={openModal}
        onClose={() => setOpenModal(false)}
        id="proloy-blog-ID"
        tabindex="-1"
        className="proloy-modal-wrape fixed top-0 left-0 right-0 z-[99] w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full"
      >
        <div className="relative w-full max-w-7xl max-h-full">
          <div className="relative bg-white rounded-lg shadow">
            <div className="p-6 space-y-6">
              <div
                id="proloy-breadcrumb-wrape"
                className="proloy-breadcrumb-wrape breadcrumb-bg flex items-center bg-center bg-cover bg-no-repeat relative z-[1] h-[300px] bg-[#111111] before:content-[''] before:top-0 before:w-full before:h-full before:absolute before:-z-[1] before:left-0 before:bg-[#0d111ce6]"
                style={{ backgroundImage: `url(${BlogData.bcrumbbg.src})` }}
              >
                <div className="container">
                  <div className="grid grid-cols-12 gap-6">
                    <div className="xl:col-start-2 xl:col-span-11 lg:col-span-12 md:col-span-12 sm:col-span-12">
                      <div className="proloy-breadcrumb-content">
                        <h2 className=" text-white font-medium capitalize text-[70px] mb-5 ">
                          {t(BlogData.Breadcrumbtitle)}
                        </h2>
                        <ul className="breadcrumb flex flex-wrap p-0 m-0 bg-inherit ">
                          <li className="breadcrumb-item text-2xl uppercase font-Kanit ">
                            <Link to="/">
                              <i className="fa fa-home"></i>{" "}
                              {t(BlogData.Breadcrumbhome)}
                            </Link>
                          </li>
                          <li className="breadcrumb-item text-2xl uppercase font-Kanit  active">
                            {t(BlogData.Breadcrumbposttitle)}
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div id="proloy-blog-area" className="proloy-blog-area mt-[50px]">
                <div className="container">
                  <div className="grid grid-cols-12 gap-6">
                    <Blogdetails />
                    <Sidebar />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default Blog;
