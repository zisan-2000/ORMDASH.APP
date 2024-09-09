import React from "react";
import ActionButton from "../components/ActionButton";
import ImageSection from "../components/ImageSection";
import TextSection from "../components/TextSection";

const NewsFeed = () => {
  return (
    <div className="newsfeed mx-auto mt-0 flex flex-col items-center justify-center p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 2xl:p-14">
      <ImageSection />
      <TextSection />
      <ActionButton />
    </div>
  );
};

export default NewsFeed;
