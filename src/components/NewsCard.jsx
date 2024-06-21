import React from "react";
import { FaArrowRight } from "react-icons/fa6";

const NewsCard = ({
  imgSrc,
  publishedAt,
  newsTitle,
  description,
  articleUrl,
}) => {
  return (
    <div className="news-card flex flex-col gap-2 justify-between h-full p-4 rounded-xl shadow-lg">
      <div>
        <div className="img-container overflow-hidden rounded-xl mb-3">
          <img
            src={imgSrc}
            alt="Article Heading Image"
            className="object-cover w-full h-48"
          />
        </div>
        <p className="published-at text-zinc-400 text-sm mb-2">{publishedAt}</p>
        <h2 className="card-heading font-semibold text-xl mb-2">{newsTitle}</h2>
        <p className="card-description line-clamp-2 mt-2 text-zinc-400 text-sm mb-4">
          {description}
        </p>
      </div>
      <a
        target="_blank"
        href={articleUrl}
        className="text-start flex border text-lg border-secondary p-3 px-5 rounded-lg items-center justify-between group hover:bg-secondary duration-300"
      >
        Read More{" "}
        <span className="text-xl">
          <FaArrowRight />
        </span>
      </a>
    </div>
  );
};

export default NewsCard;
