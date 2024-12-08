/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState, useRef } from "react";
import { Navbar, MegaMenu, Dropdown } from "flowbite-react";
import { Link } from "react-router-dom";
import { MenuData } from "../assets/data/NavbarData";

export default function Navbars() {
  //sticky menu
  const [sticky, setSticky] = useState(false);
  const stickyHeader = () => {
    if (window.scrollY > 200) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", stickyHeader);
  }, []);

  const navLinksRef = useRef(null);

  useEffect(() => {
    const handleClick = (event) => {
      const clickedLink = event.target;
      const clickedLinkId = clickedLink.href.split("#")[1];

      navLinksRef.current
        .querySelector("ul")
        .querySelectorAll("a")
        .forEach((link) => {
          link.parentNode.classList.remove("active");
          if (link.href.includes(clickedLinkId)) {
            link.parentNode.classList.add("active");
          }
        });

      const targetSection = document.getElementById(clickedLinkId);
      targetSection.scrollIntoView({ behavior: "smooth" });
    };

    navLinksRef.current.addEventListener("click", handleClick);

    return () => {
      navLinksRef.current.removeEventListener("click", handleClick);
    };
  }, []);
  return (
    <>
      <div className="proloy-header-wrape text-center absolute left-0 right-0 top-[70px] z-[99] px-[20px] ">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12">
            <div
              className={`proloy-main-manu-content bg-white rounded-[30px] py-0 vsm:px-[20px] px-[50px] h-[100px]  ${
                sticky ? "sticky" : ""
              }`}
            >
              <MegaMenu fluid={false} rounded>
                <div className="header-logo inline-block py-5 px-0">
                  <Link to="/">
                    <img
                      src={MenuData.logo}
                      alt="Flowbite React Logo"
                      className="vsm:w-[110px] w-[150px]"
                    />
                  </Link>
                </div>
                <div className="proloy-right-wrape xl:block flex order-2">
                  <div className="proloy-language-wrape xl:float-right my-[38px] mx-0 xl:pr-0 lg:pr-[70] md:pr-[70] sm:pr-[30] order-2">
                    <select className="cursor-pointer focus:outline-none capitalize p-0">
                      <option value="1" selected="">
                        eng
                      </option>
                      <option value="2">ar</option>
                    </select>
                  </div>
                  <ul className="header-top-social-wrape xl:float-right my-[25px] mx-0 sm:hidden order-1 ">
                    {MenuData.sociallist.map((item, i) => (
                      <li
                        key={i}
                        className=" inline-block my-0 ml-0 mr-[15px] transition-all duration-[0.3s] group"
                      >
                        <Link to={item.link}>
                          <i
                            className={`text-lg text-center text-[#838694] w-[50px] h-[50px] !leading-[50px] border-[1px] border-solid border-[#f1f1f1] rounded-[50%]  group-hover:text-white group-hover:bg-[#06bbc4] ${item.icon}`}
                          ></i>
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <Navbar.Toggle className="xl:hidden md:inline-block proloy-toggle-btn float-right order-3" />
                </div>
                <div id="mobile-menu" ref={navLinksRef}>
                  <Navbar.Collapse className="2xl:inline-block xl:w-auto flowbite-navbar-collapse">
                    {MenuData.Menu.map((item, i) => (
                      <Navbar.Link key={i} href={item.link}>
                        {item.title}
                      </Navbar.Link>
                    ))}
                    <Navbar.Link>
                      <Dropdown label="More" inline>
                        {MenuData.MegaMenu.map((item, i) => (
                          <Dropdown.Item
                            key={i}
                            href={item.link}
                            className="bg-white w-[150px] h-auto relative right-[45px] bottom-[-32px] flex items-center justify-center"
                          >
                            {item.title}
                          </Dropdown.Item>
                        ))}
                      </Dropdown>
                    </Navbar.Link>
                  </Navbar.Collapse>
                </div>
              </MegaMenu>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
