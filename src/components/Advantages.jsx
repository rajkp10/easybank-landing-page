import React from "react";
import Banking from "../images/icon-online.svg";
import Budget from "../images/icon-budgeting.svg";
import Onboarding from "../images/icon-onboarding.svg";
import Api from "../images/icon-api.svg";

const Cards = [
  {
    id: 1,
    icon: Banking,
    title: "Online Banking",
    description:
      "Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.",
  },
  {
    id: 2,
    icon: Budget,
    title: "Simple Budgeting",
    description:
      "See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits.",
  },
  {
    id: 3,
    icon: Onboarding,
    title: "Fast Onboarding",
    description:
      "We don’t do branches. Open your account in minutes online and start taking control of your finances right away.",
  },
  {
    id: 4,
    icon: Api,
    title: "Open API",
    description:
      "Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.",
  },
];

const Card = ({ content }) => {
  return (
    <div
      key={content.id}
      className="flex flex-col items-center gap-6 lg:items-start"
    >
      <img
        src={content.icon}
        alt={content.title}
        className="h-[3rem] w-[3rem]"
      />
      <span className="text-2xl text-primary-1">{content.title}</span>
      <p className="text-sm text-neutral-1">{content.description}</p>
    </div>
  );
};

function Advantages() {
  return (
    <div className="flex justify-center w-full min-h-screen px-4 bg-neutral-2">
      <div className="flex flex-col w-full max-w-6xl gap-4 py-20 text-center md:text-left">
        <span className="text-4xl text-primary-1">Why choose Easybank?</span>
        <div>
          <p className="text-md text-neutral-1">
            We leverage Open Banking to turn your bank account into your
            financial hub.
          </p>
          <p className="text-md text-neutral-1">
            Control your finances like never before.
          </p>
        </div>
        <section className="grid grid-cols-1 gap-8 mt-10 sm:grid-cols-2 lg:grid-cols-4">
          {Cards.map((card) => {
            return <Card content={card} />;
          })}
        </section>
      </div>
    </div>
  );
}

export default Advantages;
