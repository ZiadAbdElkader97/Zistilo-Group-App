import { ContactData } from "../assets/data/ContactData";

const Contact = () => {
  return (
    <>
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
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d96652.27317354927!2d-74.33557928194516!3d40.79756494697628!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c3a82f1352d0dd%3A0x81d4f72c4435aab5!2sTroy+Meadows+Wetlands!5e0!3m2!1sen!2sbd!4v1563075599994!5m2!1sen!2sbd"
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
                      {item.title}
                    </div>
                    <div className="contant-info-content text-[22px] sm:text-[19px] vsm:text-[18px] capitalize font-normal ">
                      {item.info}
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
                          placeholder="Name *"
                        />
                      </div>
                      <div className="xl:col-span-6 lg:col-span-6 md:col-span-6 sm:col-span-12">
                        <input
                          className="form-control transition-all duration-[0.3s] shadow-none h-[50px] text-[#777777] bg-white border-[1px] border-solid border-[#e7eaf0] py-[5px] px-5 w-full focus:shadow-[0px_10px_14px_0px_rgba(12,0,46,0.06)] focus:border-[1px] focus:border-solid focus:border-[#06bbc4] focus:w-full"
                          type="email"
                          name="email"
                          placeholder="E-mail *"
                        />
                      </div>
                      <div className="xl:col-span-12 lg:col-span-12 md:col-span-12 sm:col-span-12">
                        <input
                          className="form-control transition-all duration-[0.3s] shadow-none h-[50px] text-[#777777] bg-white border-[1px] border-solid border-[#e7eaf0] py-[5px] px-5 w-full focus:shadow-[0px_10px_14px_0px_rgba(12,0,46,0.06)] focus:border-[1px] focus:border-solid focus:border-[#06bbc4] focus:w-full"
                          type="text"
                          name="subject"
                          placeholder="Subject"
                        />
                      </div>
                      <div className="xl:col-span-12 lg:col-span-12 md:col-span-12 sm:col-span-12">
                        <textarea
                          className="form-control transition-all duration-[0.3s] shadow-none h-[133px] text-[#777777] mb-[30px] bg-white border-[1px] border-solid border-[#e7eaf0] py-[15px] px-5 w-full focus:shadow-[0px_10px_14px_0px_rgba(12,0,46,0.06)] focus:border-[1px] focus:border-solid focus:border-[#06bbc4] focus:w-full"
                          name="message"
                          cols="30"
                          rows="8"
                          placeholder="Message"
                        ></textarea>
                        <button className="btn-3 uppercase">
                          submit now
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
    </>
  );
};

export default Contact;
