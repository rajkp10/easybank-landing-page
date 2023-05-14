import React, { Fragment, useState } from "react";
import logo from "../images/logo.svg";
import { Dialog, Transition } from "@headlessui/react";

const NavLinks = ["Home", "About", "Contact", "Blog", "Careers"];

const Links = ({ links }) => {
  return (
    <ul className="hidden h-16 gap-6 md:visible md:flex">
      {links.map((link) => {
        return (
          <li className="relative flex items-center cursor-pointer group">
            <a
              href="#"
              className="transition duration-150 ease-in text-neutral-1 group-hover:text-primary-1"
            >
              {link}
            </a>
            <div className="absolute hidden bottom-0 w-[100%] h-1 bg-gradient-to-r from-primary-2 to-primary-3 ease-in duration-150 group-hover:block"></div>
          </li>
        );
      })}
    </ul>
  );
};

const Modal = ({ links, isOpen, closeModal }) => {
  return (
    <Transition show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gradient-to-b from-primary-1 from-70% to-transparent opacity-50" />
        </Transition.Child>

        <div className="fixed inset-0 mt-16">
          <div className="flex items-center justify-center h-auto p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-100 -translate-y-44"
              enterTo="opacity-100 translate-y-0"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 -translate-y-44"
            >
              <Dialog.Panel className="w-full py-6 overflow-hidden transition-all transform bg-white rounded-md shadow-xl">
                <ul className="flex flex-col gap-6">
                  {links.map((link, x) => {
                    x++;
                    return (
                      <Transition.Child
                        enter="ease-out duration-200 delay-200"
                        enterFrom="opacity-0 translate-y-2"
                        enterTo="opacity-100 translate-y-0"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0 translate-y-2"
                      >
                        <li>
                          <a
                            href="#"
                            className="duration-150 ease-linear text-primary-1 hover:text-primary-2"
                            onClick={closeModal}
                          >
                            {link}
                          </a>
                        </li>
                      </Transition.Child>
                    );
                  })}
                </ul>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);

  return (
    <>
      <nav className="fixed z-20 grid w-full h-16 px-4 bg-white shadow-sm place-items-center">
        <div
          role="navigation"
          className="w-[100%] max-w-6xl text-sm flex justify-between items-center"
        >
          <img src={logo} alt="logo" className="h-1/2" />
          <Links links={NavLinks} />
          <button className="hidden px-8 py-3 text-sm text-white duration-150 ease-in md:inline-block rounded-3xl bg-gradient-to-r from-primary-2 to-primary-3 hover:opacity-60">
            Request Invite
          </button>
          {/* hamburger icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`${
              isOpen ? "hidden" : "visible"
            } md:hidden hover:cursor-pointer`}
            width="24"
            height="11"
            onClick={openModal}
          >
            <g fill="#2D314D" fill-rule="evenodd">
              <path d="M0 0h24v1H0zM0 5h24v1H0zM0 10h24v1H0z" />
            </g>
          </svg>
          {/* close icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`${
              isOpen ? "visible" : "hidden"
            } md:hidden hover:cursor-pointer`}
            width="18"
            height="19"
            onClick={closeModal}
          >
            <g fill="#2D314D" fill-rule="evenodd">
              <path d="M.868.661l16.97 16.97-.706.708L.162 1.369z" />
              <path d="M.161 17.632L17.131.662l.708.706-16.97 16.97z" />
            </g>
          </svg>
        </div>
      </nav>
      <Modal isOpen={isOpen} closeModal={closeModal} links={NavLinks} />
    </>
  );
}

export default Navbar;
