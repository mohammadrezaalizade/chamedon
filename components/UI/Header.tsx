import React from "react";
import { MenuIcon } from "@heroicons/react/outline";
import Link from "next/link";
import { useRouter } from "next/router";
import Slider from "./Slider";
export const navigators = [
  {
    title: "خانه",
    path: "/",
  },
  {
    title: "تورها",
    path: "/tours",
  },
  {
    title: "بلاگ",
    path: "//blog",
  },
  {
    title: "درباره ما",
    path: "/about-us",
  },
  {
    title: "تماس با ما",
    path: "/contact-us",
  },
];
const Header = () => {
  const router = useRouter();
  return (
    <>
      <header className="font-kalaam w-screen my-4 select-none fixed z-50 ">
        <div className="flex w-[90%] bg-white p-4 shadow-md  mx-auto justify-between rounded-2xl items-center">
          <MenuIcon className="w-6 h-6  md:hidden" />
          <div className="hidden md:flex font-bold  gap-4 text-[1rem] flex-row-reverse order-2">
            {navigators.map((navigator, index) => (
              <Link href={navigator.path} key={index}>
                <a
                  className={
                    router.pathname === navigator.path
                      ? "text-[#0094ff]"
                      : "text-[#505050]"
                  }
                >
                  {navigator.title}
                </a>
              </Link>
            ))}
          </div>
          <Link href="/">
            <a className="flex flex-row-reverse items-center gap-2">
              <img
                className="w-8 h-8 object-contain"
                src="/assests/img/logo.svg"
                alt="logo"
              />
              <h1 className="text-[1.1rem] font-bold  text-[#505050] hidden">
                چمدون
              </h1>
            </a>
          </Link>
        </div>
      </header>
      <Slider />
    </>
  );
};

export default Header;
