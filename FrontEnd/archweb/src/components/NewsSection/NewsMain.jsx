import React from "react";
import NewsText from "./NewsText";

const NewsMain = () => {
  return (
    <div id="news" className="py-10 px-8 bg-darkGrey hover:bg rounded">
      <h1 className="text-6xl font-bold text-orange justify-center mt-[15px] mb-[50px] text-center">
        Our Newsletter
      </h1>
      <div>
        <NewsText />
      </div>
    </div>
  );
};

export default NewsMain;
