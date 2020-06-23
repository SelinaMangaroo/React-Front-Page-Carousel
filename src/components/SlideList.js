import React from "react";
import Slide from "./Slide";

function SlideList({ slideItems }) {
  return (
    <>
      {slideItems.map((item) => {
        return <div dangerouslySetInnerHTML={{ __html: item.media_tag }} />;
        // return <Slide key={item.key} slideItem={item} />;
      })}
    </>
  );
}

export default SlideList;
