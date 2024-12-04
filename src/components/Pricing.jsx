import { Link } from "react-router-dom";
import { PricingtableData } from "../assets/data/PricingData";

const Pricing = () => {
  return (
    <>
      <div className="proloy-pricing-wrape pb-[100px]">
        <div className="container">
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12">
              <div
                className="section-title-wrape text-center uppercase mb-[70px]"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <h3 className="font-semibold capitalize text-[60px] sm:text-[45px] vsm:text-[35px]">
                  {PricingtableData.title}
                </h3>
                <h4 className="font-normal text-[#838694] text-2xl sm:text-[xl] vsm:text-[18px] capitalize">
                  {PricingtableData.title2}
                </h4>
              </div>
            </div>
            {PricingtableData.PricingtableList.map((item, i) => (
              <div
                className="xl:col-span-4 lg:col-span-4 md:col-span-4 sm:col-span-12"
                data-aos="fade-right"
                data-aos-delay={item.delay}
                key={i}
              >
                <div
                  className={`single-price-area relative transition-all duration-[0.3s] z-[1] border-[2px] border-solid border-[#f4f4f4] rounded-none py-[50px] px-[35px]  mb-[30px] ${item.activeclass}`}
                >
                  <div
                    className="price-icon transition-all duration-[0.3s] text-center w-[185px] h-[138px] !leading-[138px] rounded-none bg-[#323232]"
                    dangerouslySetInnerHTML={{ __html: item.icon }}
                  ></div>
                  <div className="price-header my-[30px] mx-0 ">
                    <h2 className=" font-medium inline-flex text-[70px] transition-all duration-[0.3s] items-baseline">
                      {item.symbol}{" "}
                      <span className="price font-medium inline-flex text-[70px] transition-all duration-[0.3s] items-baseline">
                        {item.price}
                      </span>
                      <span className="sep my-0 mr-2 ml-0 font-normal text-xl">
                        /
                      </span>
                      <span className="time font-normal text-xl">
                        {item.time}
                      </span>
                    </h2>
                    <h4 className="font-medium capitalize text-3xl">
                      {item.title}
                    </h4>
                  </div>
                  <ul className="price-item-list">
                    {item.itemlist.map((item, i) => (
                      <li
                        className=" capitalize text-[#838694] font-normal text-lg mb-5"
                        key={i}
                      >
                        <i className={`mr-[10px] ${item.icon}`}></i> {item.text}
                      </li>
                    ))}
                  </ul>
                  <div className="price-btn pt-10">
                    <Link
                      className="btn-3 text-center uppercase magic-hover magic-hover__square"
                      to={item.btnlink}
                    >
                      {item.btntext}
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
                    </Link>
                  </div>
                  <div className="price-bg absolute -right-[5px] -z-[1] opacity-0 invisible transition-all duration-[0.3s] -bottom-[5px] ">
                    <img src={item.bgimg} alt="pricing-img" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Pricing;
