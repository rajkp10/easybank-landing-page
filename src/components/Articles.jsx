import React from "react";
import Img1 from "../images/image-currency.jpg";
import Img2 from "../images/image-restaurant.jpg";
import Img3 from "../images/image-plane.jpg";
import Img4 from "../images/image-confetti.jpg";

const ArticleData = [
  {
    id: 1,
    image: Img1,
    author: "Claire Robinson",
    title: "Receive money in any currency with no fees",
    description:
      "The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single …",
  },
  {
    id: 2,
    image: Img2,
    author: "Wilson Hutton",
    title: "Treat yourself without worrying about money",
    description:
      "Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you …",
  },
  {
    id: 3,
    image: Img3,
    author: "Wilson Hutton",
    title: "Take your Easybank card wherever you go",
    description:
      "We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you … ",
  },
  {
    id: 4,
    image: Img4,
    author: "Claire Robinson",
    title: "Our invite-only Beta accounts are now live!",
    description:
      "After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site ...",
  },
];

const Article = ({ article }) => {
  return (
    <div
      key={article.id}
      className="flex flex-col overflow-hidden duration-150 ease-linear rounded-md shadow hover:drop-shadow"
    >
      <img
        src={article.image}
        alt={article.title}
        className="object-cover h-40"
      />
      <div className="flex flex-col gap-2 p-8 bg-white">
        <span className="text-xs text-neutral-1">By {article.author}</span>
        <p className="duration-150 ease-linear text-md text-primary-1 hover:text-primary-2 hover:cursor-pointer">
          {article.title}
        </p>
        <p className="text-sm text-neutral-1">{article.description}</p>
      </div>
    </div>
  );
};

function Articles() {
  return (
    <div className="grid w-full px-4 py-20 bg-neutral-3 place-content-center">
      <div className="w-full max-w-6xl">
        <span className="text-4xl">Latest Articles</span>
        <section className="grid grid-cols-1 gap-8 mt-10 sm:grid-cols-2 lg:grid-cols-4">
          {ArticleData.map((article) => {
            return <Article article={article} />;
          })}
        </section>
      </div>
    </div>
  );
}

export default Articles;
