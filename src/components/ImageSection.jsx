import React from "react";
import newsfeed from "../assets/1.png";

const ImageSection = () => {
  return (
    <div className="mb-6">
      <img
        src={newsfeed}
        alt="Placeholder"
        className="h-auto w-full max-w-xs "
      />
    </div>
  );
};

export default ImageSection;
