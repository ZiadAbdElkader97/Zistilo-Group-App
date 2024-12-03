import { Link } from "react-router-dom";
import { CircularProgressbar } from "react-circular-progressbar";
import { Parallax } from "react-scroll-parallax";
import VisibilitySensor from "react-visibility-sensor";
import { AboutData } from "../assets/data/AboutData";



const About = () => {
  return (
    <>
      <div id="about" className="proloy-about-area-wrape py-[100px]">
        <div className="container">
          <div className="grid grid-cols-12 gap-6">
            <div className="xl:col-span-6 lg:col-span-6 md:col-span-12 sm:col-span-12">
              <div className="section-title-wrape relative mb-[45px]">
                <Parallax
                  className="section-image absolute right-[30%] -top-[60%] sm:hidden "
                  translateX={["20px", "0px"]}
                >
                  <img src={AboutData.commonimg} alt="section-img" />
                </Parallax>
                <h3
                  className=" font-semibold capitalize text-[60px] "
                  data-aos="fade-up"
                  data-aos-duration="400"
                  data-aos-delay="200"
                >
                  {AboutData.title}
                </h3>
                <h4
                  className=" font-normal text-[#838694] text-2xl capitalize "
                  data-aos="fade-up"
                  data-aos-duration="600"
                  data-aos-delay="300"
                >
                  {AboutData.title2}
                </h4>
              </div>
              <div className="proloy-about-btn btn-social flex items-center">
                <Link to={AboutData.btnurl} className="btn-1">
                  {AboutData.btntext} <i className="fa fa-download"></i>
                </Link>
                <ul className="social-wrape">
                  {AboutData.SocialList.map((item, i) => (
                    <li
                      key={i}
                      className=" my-0 mr-0 ml-[15px] inline-block transition-all duration-[0.3s]"
                      data-aos="fade-right"
                      data-aos-duration="500"
                      data-aos-delay="500"
                    >
                      <Link
                        className=" text-base w-[50px] h-[50px] text-center !leading-[50px] rounded-[50%] block font-semibold transition-all duration-[0.3s] text-[#212123] uppercase border-[1px] border-solid border-[#e1e1e1] hover:bg-[#ff4a54] hover:text-white hover:border-[#ff4a54] "
                        to={item.link}
                      >
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="xl:col-span-6 lg:col-span-6 md:col-span-12 sm:col-span-12">
              <div
                className="proloy-about-para-sign-wrape"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <p>{AboutData.brief}</p>
                <div className="about-sign mt-[10px]">
                  <img src={AboutData.img1} alt="about-sign" />
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-12 gap-6 mt-[70px]">
            <div className="xl:col-span-6 lg:col-span-12 md:col-span-12 sm:col-span-12">
              <ul
                className="proloy-about-resume-wrape"
                data-aos="fade-right"
                data-aos-delay="300"
              >
                {AboutData.ResumeList.map((item, i) => (
                  <li
                    className="magic-hover magic-hover__square flex items-center m-0 border-[1px] border-solid border-[#e1e1e1] transition-all duration-[0.3s] p-[15px] sm:!block hover:ml-[10px] group"
                    key={i}
                  >
                    <div className="about-resume-icon w-[15%] ">
                      <span
                        className=" w-[70px] transition-all duration-[0.3s] h-[70px] inline-flex items-center bg-[#f7faff] justify-center group-hover:!bg-[#ff4a54] group-hover:!rounded-[10px]"
                        dangerouslySetInnerHTML={{ __html: item.icon }}
                      ></span>
                    </div>
                    <div className="about-resume-title text-2xl capitalize  w-[30%] ">
                      {item.title}
                    </div>
                    <div className="about-resume-info text-2xl capitalize ">
                      {item.info}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="xl:col-start-8 xl:col-span-5 lg:col-span-10 md:col-span-12 sm:col-span-12">
              <div className="proloy-about-progress-wrape">
                {AboutData.CounterList.map((item, i) => (
                  <div
                    className="single-progress-wrape flex items-center justify-center mt-0 mr-0 mb-[30px] ml-[30px]"
                    data-aos="fade-up"
                    data-aos-delay={item.delay}
                    key={i}
                  >
                    <VisibilitySensor>
                      {({ isVisible }) => {
                        const percentage = isVisible ? `${item.count}` : 0;
                        return (
                          <CircularProgressbar
                            className="proloy-progress-bar !w-[170px] !h-[170px]"
                            value={percentage}
                            text={`${percentage}%`}
                            strokeWidth={3}
                            data-duration="1000"
                          />
                        );
                      }}
                    </VisibilitySensor>
                    <div className="single-progress-content w-[60%] ml-[30px] ">
                      <h3 className=" text-3xl capitalize font-medium ">
                        {item.title}
                      </h3>
                      <p>{item.brief}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default About;
