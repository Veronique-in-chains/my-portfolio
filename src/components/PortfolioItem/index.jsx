import React from "react";

const PortfolioItem = ({name, description, link, screenshot}) => {
  return (
      <div className="item" key={name}>
        <a href={link} target="_blank">
          <img
            className="item__img"
            src={screenshot}
            alt="screenshot webu"
          />
          <div className="item__overlay">
            <h4>{name}</h4>
            <p>{description}</p>
          </div>
        </a>
      </div>
  )
}

export default PortfolioItem;