import { useTranslation } from "react-i18next";
import { ContactData } from "../assets/data/ContactData";

const Contact = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="mb-[120px]">
        <div
          className="proloy-map-wrape"
          data-aos="fade-up"
          data-aos-duration="500"
        >
          <div className="container">
            <div className="grid grid-cols-12 gap-6">
              <div className="col-span-12">
                <iframe
                  className="w-full h-[400px] rounded-[20px] -z-[1]"
                  id="proloy-map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5135209.968698921!2d5.173963529016486!3d51.06367201346143!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479a721ec2b1be6b%3A0x75e85d6b8e91e55b!2sGermany!5e0!3m2!1sen!2seg!4v1733608630703!5m2!1sen!2seg"
                  allowFullScreen={true}
                ></iframe>
              </div>
            </div>
          </div>
        </div>
        <div id="contact" className="proloy-contant-info-wraper">
          <div className="container">
            <div className="grid grid-cols-12 gap-6">
              <div
                className="xl:col-span-5 lg:col-span-12 md:col-span-12 sm:col-span-12"
                data-aos="fade-right"
                data-aos-duration="200"
              >
                <ul className="contant-info-content -wrape mt-[30px]">
                  {ContactData.ContactList.map((item, i) => (
                    <li
                      className="flex items-center magic-hover magic-hover__square p-[15px] m-0 border-[1px] border-solid border-[#e1e1e1] transition-all duration-[0.3s] sm:!block"
                      key={i}
                    >
                      <div className="contant-info-content-icon w-[15%] ">
                        <span
                          className="w-[70px] h-[70px] inline-flex items-center bg-[#f7faff] justify-center"
                          dangerouslySetInnerHTML={{ __html: item.icon }}
                        ></span>
                      </div>
                      <div className="contant-info-content-title text-[#838694] w-[25%] ml-[12px] text-[22px] sm:text-[19px] vsm:text-[18px] capitalize font-normal">
                        {t(item.title)}
                      </div>
                      <div className="contant-info-content text-[22px] sm:text-[19px] vsm:text-[18px] capitalize font-normal ">
                        {t(item.info)}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div
                className="xl:col-span-7 lg:col-span-12 md:col-span-12 sm:col-span-12"
                data-aos="fade-right"
                data-aos-duration="400"
              >
                <div className="proloy-contact-form-area bg-[#f7faff] rounded-[10px] py-[70px] px-[50px] shadow-[0px_15px_30px_0px_rgba(0,0,0,0.14)] xl:-mt-[100px] lg:mt-[30px] md:mt-[30px] sm:mt-[30px]">
                  <form
                    className="proloy-contact-form"
                    id="ajax-contact"
                    action="./mail.php"
                    method="post"
                  >
                    <div className="container">
                      <div className="grid grid-cols-12 gap-6">
                        <div className="xl:col-span-6 lg:col-span-6 md:col-span-6 sm:col-span-12">
                          <input
                            className="form-control transition-all duration-[0.3s] shadow-none h-[50px] text-[#777777] bg-white border-[1px] border-solid border-[#e7eaf0] py-[5px] px-5 w-full focus:shadow-[0px_10px_14px_0px_rgba(12,0,46,0.06)] focus:border-[1px] focus:border-solid focus:border-[#06bbc4] focus:w-full"
                            type="text"
                            name="name"
                            placeholder={t("Name *")}
                          />
                        </div>
                        <div className="xl:col-span-6 lg:col-span-6 md:col-span-6 sm:col-span-12">
                          <input
                            className="form-control transition-all duration-[0.3s] shadow-none h-[50px] text-[#777777] bg-white border-[1px] border-solid border-[#e7eaf0] py-[5px] px-5 w-full focus:shadow-[0px_10px_14px_0px_rgba(12,0,46,0.06)] focus:border-[1px] focus:border-solid focus:border-[#06bbc4] focus:w-full"
                            type="email"
                            name="email"
                            placeholder={t("E-mail *")}
                          />
                        </div>
                        <div className="xl:col-span-12 lg:col-span-12 md:col-span-12 sm:col-span-12">
                          <input
                            className="form-control transition-all duration-[0.3s] shadow-none h-[50px] text-[#777777] bg-white border-[1px] border-solid border-[#e7eaf0] py-[5px] px-5 w-full focus:shadow-[0px_10px_14px_0px_rgba(12,0,46,0.06)] focus:border-[1px] focus:border-solid focus:border-[#06bbc4] focus:w-full"
                            type="text"
                            name="subject"
                            placeholder={t("Subject")}
                          />
                        </div>
                        <div className="xl:col-span-12 lg:col-span-12 md:col-span-12 sm:col-span-12">
                          <textarea
                            className="form-control transition-all duration-[0.3s] shadow-none h-[133px] text-[#777777] mb-[30px] bg-white border-[1px] border-solid border-[#e7eaf0] py-[15px] px-5 w-full focus:shadow-[0px_10px_14px_0px_rgba(12,0,46,0.06)] focus:border-[1px] focus:border-solid focus:border-[#06bbc4] focus:w-full"
                            name="message"
                            cols="30"
                            rows="8"
                            placeholder={t("Message")}
                          ></textarea>
                          <button className="btn-3 uppercase">
                            {t("submit now")}
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
                          </button>
                        </div>
                      </div>
                      <p className="form-message float-left mt-[15px] text-[15px]"></p>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
