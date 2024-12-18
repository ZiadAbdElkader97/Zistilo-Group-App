import { Link } from "react-router-dom";
import { SidebarData } from "../assets/data/BlogData";
import { useTranslation } from "react-i18next";

const Sidebar = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="xl:col-span-4 lg:col-span-12 md:col-span-12 sm:col-span-12">
        <div className="single-sid-wdg border mb-[50px] p-[30px] border-solid border-[#f1f1f1] bg-[#f7faff]">
          <form action="#" className="wdg-search-form relative">
            <input
              className="h-[57px] shadow-none text-[#1a2b3c] border w-full text-[15px] capitalize p-5 rounded-none border-solid border-[#f1f1f1] bg-white font-Montserrat focus:!shadow-[0px_10px_14px_0px_rgba(12,0,46,0.06)] focus:border-[1px] focus:border-solid focus:border-[#e7eaf0] focus:!ring-[none] focus:!outline-offset-0 focus:outline-0"
              type="text"
              placeholder={t("search")}
            />
            <button
              className="submit-btn border text-white text-[15px] font-semibold tracking-[1px] leading-[25px] inline-block absolute cursor-pointer transition-all duration-[0.3s] px-[30px] py-[15px] rounded-none border-l-[#f7faff] border-solid border-[#f1f1f1] right-0 top-0 bg-[#090909] hover:bg-[#ff2f00]"
              type="submit"
            >
              <i className="fa fa-search"></i>
            </button>
          </form>
        </div>
        <div className="single-sid-wdg border mb-[50px] p-[30px] border-solid border-[#f1f1f1] bg-[#f7faff]">
          <div className="widget_recent_entries">
            <h3 className="font-bold text-[#090909] capitalize text-2xl relative ml-[30px] mb-[30px] before:absolute before:content-[''] before:w-[17px] before:h-[17px] before:border before:left-[-27px] before:border-solid before:border-[#06bbc4] before:bottom-2 after:content-[''] after:absolute after:w-3 after:h-3 after:left-[-23px] after:bottom-2 before:bg-[#000000] after:bg-[#ffffff]">
              {t(SidebarData.newstitle)}
            </h3>
            {SidebarData.NewsList.map((item, i) => (
              <div
                className="single-wdg-post flex mb-5 pb-5 border-b-[#f1f1f1] border-b border-solid last:mb-0 last:pb-0 last:border-[none] group"
                key={i}
              >
                <div className="wdg-post-img min-w-[100px] h-auto">
                  <Link to="#">
                    <img
                      src={item.img}
                      alt="blog thumbnail"
                      className="img-fluid rounded-[5px]"
                    />
                  </Link>
                </div>
                <div className="wdg-post-content pl-3">
                  <h5 className=" text-[16px] font-medium leading-[22px] text-[#1a2b3c]">
                    <Link className="group-hover:text-[#06bbc4]" to={item.link}>
                      {t(item.title)}
                    </Link>
                  </h5>
                  <span className=" block text-[14px] leading-6 font-normal text-[#777777] mt-2.5">
                    {item.date}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="single-sid-wdg border mb-[50px] p-[30px] border-solid border-[#f1f1f1] bg-[#f7faff]">
          <div className="widget_tag_cloud">
            <h3 className=" font-bold text-[#090909] capitalize text-2xl relative ml-[30px] mb-[30px] before:absolute before:content-[''] before:w-[17px] before:h-[17px] before:border before:left-[-27px] before:border-solid before:border-[#06bbc4] before:bottom-2 after:content-[''] after:absolute after:w-3 after:h-3 after:left-[-23px] after:bottom-2 before:bg-[#000000] after:bg-[#ffffff]">
              {t(SidebarData.tagtitle)}
            </h3>
            <div className="tagcloud">
              {SidebarData.TagsList.map((item, i) => (
                <Link
                  className=" text-base leading-6 text-[#1a2b3c] border inline-block transition-all duration-[0.2s] capitalize ml-0 mr-[5px] mt-0 mb-2.5 px-[15px] py-2.5 border-solid border-[#f1f1f1] hover:text-white bg-white hover:bg-[#06bbc4]"
                  to={item.link}
                  key={i}
                >
                  {t(item.title)}
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="single-sid-wdg border mb-[50px] p-[30px] border-solid border-[#f1f1f1] bg-[#f7faff]">
          <h3 className=" font-bold text-[#090909] capitalize text-2xl relative ml-[30px] mb-[30px] before:absolute before:content-[''] before:w-[17px] before:h-[17px] before:border before:left-[-27px] before:border-solid before:border-[#06bbc4] before:bottom-2 after:content-[''] after:absolute after:w-3 after:h-3 after:left-[-23px] after:bottom-2 before:bg-[#000000] after:bg-[#ffffff]">
            {t(SidebarData.followtitle)}
          </h3>
          <ul className="wdg-follow-us m-0 p-0">
            {SidebarData.FollowList.map((item, i) => (
              <li className="inline-block mx-[5px] my-0" key={i}>
                <Link
                  className=" block text-center text-xl text-[#1a2b3c] leading-10 w-10 h-10 transition-[0.3s] duration-[all] border rounded-[50%] border-solid border-[#f1f1f1] hover:text-white bg-white hover:bg-[#06bbc4]"
                  to={item.link}
                >
                  <i className={item.icon}></i>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="single-sid-wdg border mb-[50px] p-[30px] border-solid border-[#f1f1f1] bg-[#f7faff]">
          <div className="widget_meta">
            <h3 className=" font-bold text-[#090909] capitalize text-2xl relative ml-[30px] mb-[30px] before:absolute before:content-[''] before:w-[17px] before:h-[17px] before:border before:left-[-27px] before:border-solid before:border-[#06bbc4] before:bottom-2 after:content-[''] after:absolute after:w-3 after:h-3 after:left-[-23px] after:bottom-2 before:bg-[#000000] after:bg-[#ffffff]">
              {t(SidebarData.ctgtitle)}
            </h3>
            <ul className=" m-0 p-0 [list-style:none]">
              {SidebarData.CtgList.map((item, i) => (
                <li className="group" key={i}>
                  <Link
                    className="capitalize text-base text-[#757575] transition-all duration-[0.3s] group-hover:text-[#06bbc4]"
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
    </>
  );
};

export default Sidebar;
