import React from "react";

const SingleNews = ({ title, imgSrc, description, categories }) => {
  return (
    <div className="card bg-base-100 w-96 shadow-sm">
      <figure>
        <img src={imgSrc} alt={title} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {title}
          <div className="badge badge-secondary bg-orange border-orange">
            NEW
          </div>
        </h2>
        <p>{description}</p>
        <div className="card-actions justify-end">
          {categories.map((category, index) => (
            <div key={index} className="badge badge-outline">
              {category}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SingleNews;
