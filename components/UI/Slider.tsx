import React from "react";
import Link from "next/link";
import { navigators } from "./Header";
import { useRouter } from "next/router";

const Slider = () => {
  const router = useRouter();
  return (
    <div className="absolute z-[90] w-screen h-screen bg-[#6e6e6e]/30 grid grid-cols-12">
      <div className="w-full h-screen bg-[#f1f1f1] col-span-6">
        <div className="flex flex-col items-center justify-center w-full h-full">
          <div className="flex flex-col items-center w-[80%] gap-4">
            <Link href="/">
              <a className="flex items-center gap-2">
                <img
                  className="w-10 h-10 object-contain"
                  src="/assests/img/logo.svg"
                  alt=""
                />
                <p className="text-[1.2rem] font-semibold text-[#444]">چمدون</p>
              </a>
            </Link>
            <div className="flex flex-col gap-4  w-full p-2 dir">
              {navigators.map((navigator, index) => (
                <Link href={navigator.path}>
                  <a
                    className={
                      router.pathname === navigator.path
                        ? "bg-gradient-to-tr from-[#0094ff] to-[#87ccfd] text-[#f1f1f1] p-2 rounded-md shadow-md"
                        : "bg-gradient-to-tr p-2 rounded-md hover:from-[#e2e2e2] hover:to-[#ccc] transition ease-in-out duration-200 bg-transparent hover:text-[#313131]"
                    }
                  >
                    {navigator.title}
                  </a>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
