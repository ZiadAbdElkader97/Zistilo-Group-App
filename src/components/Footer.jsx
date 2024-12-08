import { Link } from "react-router-dom";
import { FooterData } from "../assets/data/FooterData";

const Footer = () => {
  return (
    <>
      <footer
        id="proloy-footer-area"
        className="proloy-footer-area relative pt-[100px] pb-20"
        data-aos="fade-up"
        data-aos-duration="500"
      >
        <div className="footer-bg bg-no-repeat bg-center bg-cover -z-[1] absolute right-0 top-0 bottom-0 xl:w-[95%] lg:w-[95%] md:w-full sm:w-full before:content-[''] before:left-0 before:top-0 before:absolute before:w-full before:h-full before:bg-[#0e121d] before:opacity-[0.95]">
          <img
            className="w-full h-full"
            src={FooterData.bgimg}
            alt="footer-bg"
          />
        </div>
        <div className="container">
          <div className="grid grid-cols-12 gap-6">
            <div
              className="xl:col-span-3 lg:col-span-3 md:col-span-6 sm:col-span-12"
              data-aos="fade-right"
              data-aos-delay="200"
            >
              <div className="footer-widget custom-html-widget">
                <div className="footer-logo m-[115px_20px_30px]">
                  <Link to="/">
                    <img
                      src={FooterData.logo}
                      alt="footer-logo"
                      className="img-fluid w-[200px] lg:hidden"
                    />
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="xl:col-span-3 lg:col-span-3 md:col-span-6 sm:col-span-12"
              data-aos="fade-right"
              data-aos-delay="400"
            >
              <div className="footer-single-wedget mb-[30px]">
                <div className="widget_recent_entries">
                  <h3
                    className=" font-medium ml-[25px] text-white capitalize text-[28px] relative mb-10 before:absolute before:content-[''] before:w-[17px] before:h-[17px] before:border before:left-[-27px] before:border-solid before:border-[#06bbc4] before:bottom-2 after:content-[''] after:absolute after:w-3 after:h-3 after:left-[-23px] after:bottom-2 after:bg-white"
                    dangerouslySetInnerHTML={{ __html: FooterData.title }}
                  ></h3>
                  <ul className="m-0 p-0">
                    {FooterData.NewsList.map((item, i) => (
                      <li className="mb-[30px]" key={i}>
                        <Link
                          className="text-white text-base block font-medium hover:text-[#06bbc4]"
                          to={item.link}
                        >
                          {item.title}
                        </Link>
                        <span className="text-sm text-white font-normal block">
                          {item.date}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div
              className="xl:col-span-2 lg:col-span-3 md:col-span-6 sm:col-span-12"
              data-aos="fade-right"
              data-aos-delay="600"
            >
              <div className="footer-single-wedget mb-[30px]">
                <div className="widget_nav_menu">
                  <h3
                    className=" font-medium ml-[25px] text-white capitalize text-[28px] relative mb-10 before:absolute before:content-[''] before:w-[17px] before:h-[17px] before:border before:left-[-27px] before:border-solid before:border-[#06bbc4] before:bottom-2 after:content-[''] after:absolute after:w-3 after:h-3 after:left-[-23px] after:bottom-2 after:bg-white"
                    dangerouslySetInnerHTML={{ __html: FooterData.title2 }}
                  ></h3>
                  <ul className="menu m-0 p-0">
                    {FooterData.QuicklinkList.map((item, i) => (
                      <li className="mb-2 pb-[7px]" key={i}>
                        <Link
                          className="text-white capitalize font-semibold text-base hover:text-[#06bbc4] hover:ml-1"
                          to={item.link}
                        >
                          {item.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div
              className="xl:col-span-4 lg:col-span-3 md:col-span-6 sm:col-span-12"
              data-aos="fade-right"
              data-aos-delay="800"
            >
              <div className="footer-single-wedget mb-[30px]">
                <div className="custom-html-widget">
                  <h3
                    className=" font-medium ml-[25px] text-white capitalize text-[28px] relative mb-10 before:absolute before:content-[''] before:w-[17px] before:h-[17px] before:border before:left-[-27px] before:border-solid before:border-[#06bbc4] before:bottom-2 after:content-[''] after:absolute after:w-3 after:h-3 after:left-[-23px] after:bottom-2 after:bg-white"
                    dangerouslySetInnerHTML={{ __html: FooterData.title3 }}
                  ></h3>
                  <p className="text-[15px] text-white">{FooterData.brief}</p>
                  <ul className="footer-social  mt-[25px] mb-0 mx-0 pt-[30px] pb-0 px-0 border-t-white border-t border-solid">
                    {FooterData.SocialList.map((item, i) => (
                      <li className="inline-block ml-0 mr-[25px] my-0" key={i}>
                        <Link
                          className="text-white text-base hover:text-[#06bbc4]"
                          to={item.link}
                        >
                          <i className={item.icon}></i>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className="footer-copyright-area">
        <div className="container">
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12">
              <div className="footer-copyright text-center py-5">
                <p className=" text-[#090909] text-base mb-0">
                  {FooterData.copyright}
                  <Link
                    className="text-[#090909] font-bold hover:text-[#06bbc4]"
                    to={FooterData.authorlink}
                  >
                    {FooterData.author}
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
