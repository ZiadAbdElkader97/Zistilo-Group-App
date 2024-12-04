import Tilt from "react-parallax-tilt";
import { Link } from "react-router-dom";
import { EducationData } from "../assets/data/EducationData";

const Education = () => {
  return (
    <>
      <div className="proloy-work-education-resume-wrape py-[120px] relative">
        <div className="proloy-work-education-resume-bg-img2 absolute right-0 top-[100px] bottom-0 bg-no-repeat bg-center bg-cover -z-[1] xl:h-[600px] xl:w-[76%] lg:h-[600px] lg:w-[72%] md:w-full md:h-[85%] sm:w-full sm:h-[85%] ">
          <img
            className=" w-full h-full "
            src={EducationData.bgimg2}
            alt="work-img"
          />
        </div>
        <div className="proloy-work-education-resume-bg-img1 absolute left-0 bottom-0 bg-cover bg-no-repeat bg-center h-[650px] -z-[3] top-[100px] xl:w-[41%] lg:w-[41%] lg:block md:hidden sm:hidden ">
          <img
            className=" w-full h-full "
            src={EducationData.bgimg1}
            alt="work-img"
          />
        </div>
        <div className="container">
          <div className="grid grid-cols-12 gap-6">
            <div className="xl:col-start-4 xl:col-span-4 lg:col-span-6 md:col-span-12 sm:col-span-12">
              <div className="proloy-work-resume-wrape py-[50px] px-0 md:py-5 sm:py-5 ">
                <div className="proloy-work-resume-heading flex items-center justify-content-center">
                  <h3 className="font-medium capitalize text-4xl vsm:text-[28px]">
                    {EducationData.title}
                  </h3>
                  <span className=" inline-block w-full relative ml-5 h-[1px] bg-[#e1e1e1] before:content-[''] before:left-0 before:absolute before:bg-[#06bbc4] before:w-[100px] before:h-[5px] before:-top-[2px] "></span>
                </div>
                <ul className="proloy-work-resume-content mt-[25px]">
                  {EducationData.ExprienceList.map((item, i) => (
                    <Tilt key={i}>
                      <li
                        className="flex items-center justify-center mb-5 bg-white transition-all duration-[0.3s] py-[25px] px-5 border-[1px] border-solid border-[#f8f8f8]  hover:border-[#06bbc4] hover:rounded-[15px] hover:shadow-[0px_2px_10px_0px_rgba(255,74,84,0.1)] group"
                        data-aos="fade-up"
                        data-aos-duration={item.duration}
                      >
                        <div className="proloy-work-education-time text-base text-[#838694] ">
                          <span className=" h-[5px] inline-block rounded-[50%] relative w-[5px] mr-[25px] bg-[#949494] after:content-[''] after:absolute after:-top-[10px] after:-bottom-[10px] after:rounded-[50%] after:transition-all after:duration-[0.3s] after:-left-[10px] after:-right-[10px] after:p-[10px] after:border-[1px] after:border-solid after:border-[#9e9e9e]  group-hover:bg-[#06bbc4] group-hover:after:border-[#06bbc4]"></span>{" "}
                          {item.date}
                        </div>
                        <div className="proloy-work-education-title-web ml-[35px] ">
                          <h4 className=" capitalize text-2xl vsm:text-[18px] font-medium mb-[6px] ">
                            {item.title}
                          </h4>
                          <Link
                            className=" text-lg vsm:text-[16px] text-[#838694] "
                            to={item.link}
                          >
                            {item.web}
                          </Link>
                        </div>
                      </li>
                    </Tilt>
                  ))}
                </ul>
              </div>
            </div>
            <div className="xl:col-start-9 xl:col-span-4 lg:col-span-6 md:col-span-12 sm:col-span-12">
              <div className="proloy-work-resume-wrape py-[50px] px-0 md:py-5 sm:py-5 ">
                <div className="proloy-work-resume-heading flex items-center justify-content-center">
                  <h3 className="font-medium capitalize text-4xl vsm:text-[28px]">
                    {EducationData.title2}
                  </h3>
                  <span className=" inline-block w-full relative ml-5 h-[1px] bg-[#e1e1e1] before:content-[''] before:left-0 before:absolute before:bg-[#06bbc4] before:w-[100px] before:h-[5px] before:-top-[2px] "></span>
                </div>
                <ul className="proloy-work-resume-content mt-[25px]">
                  {EducationData.EducationList.map((item, i) => (
                    <Tilt key={i}>
                      <li
                        className="flex items-center justify-center mb-5 bg-white transition-all duration-[0.3s] py-[25px] px-5 border-[1px] border-solid border-[#f8f8f8]  hover:border-[#06bbc4] hover:rounded-[15px] hover:shadow-[0px_2px_10px_0px_rgba(255,74,84,0.1)] group"
                        data-aos="fade-up"
                        data-aos-duration={item.duration}
                      >
                        <div className="proloy-work-education-time text-base text-[#838694] ">
                          <span className=" h-[5px] inline-block rounded-[50%] relative w-[5px] mr-[25px] bg-[#949494] after:content-[''] after:absolute after:-top-[10px] after:-bottom-[10px] after:rounded-[50%] after:transition-all after:duration-[0.3s] after:-left-[10px] after:-right-[10px] after:p-[10px] after:border-[1px] after:border-solid after:border-[#9e9e9e]  group-hover:bg-[#06bbc4] group-hover:after:border-[#06bbc4]"></span>
                          {item.date}
                        </div>
                        <div className="proloy-work-education-title-web ml-[35px] ">
                          <h4 className=" capitalize text-2xl vsm:text-[18px] font-medium mb-[6px] ">
                            {item.title}
                          </h4>
                          <Link
                            className=" text-lg vsm:text-[16px] text-[#838694] "
                            to={item.link}
                          >
                            {item.institute}
                          </Link>
                        </div>
                      </li>
                    </Tilt>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Education;
