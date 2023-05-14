import React from "react";
import BannerImage from "../images/image-mockups.png";

function Banner() {
  return (
    <div className="relative min-h-screen px-4 pb-20 md:pb-0 flex flex-col gap-4 md:flex-row justify-center items-center bg-neutral-3 overflow-x-clip bg-intro-mobile md:bg-intro-desktop bg-contain lg:bg-[length:1210px_950px] md:bg-intro-position-desktop-md lg:bg-intro-position-desktop-lg bg-no-repeat">
      <div>
        <img
          src={BannerImage}
          alt="banner image"
          className="block -mt-16 md:absolute md:-top-20 md:-right-52 lg:top-0 lg:-right-32 z-0 md:scale-[0.6] lg:scale-100"
        />
      </div>
      <div className="w-full max-w-6xl">
        <div className="flex flex-col gap-8 text-center h-1/2 md:h-auto md:w-1/2 md:text-left">
          <span className="text-4xl md:text-6xl text-primary-1">
            Next generation digital banking
          </span>
          <p className="text-md text-neutral-1 md:pr-20">
            Take your financial life online. Your Easybank account will be a
            one-stop-shop for spending, saving, budgeting, investing, and much
            more.
          </p>
          <div>
            <button className="px-8 py-3 text-sm text-white duration-150 ease-in rounded-3xl bg-gradient-to-r from-primary-2 to-primary-3 hover:opacity-60">
              Request Invite
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
