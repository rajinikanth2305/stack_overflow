import React, { useRef, useEffect } from "react";
import { RichText } from "prismic-reactjs";
import Image from "next/image";
import { trekStyle } from "styles";

const useMountEffect = (fun) => useEffect(fun, []);

const Sidebar = () => {
  const myRef = useRef(null);
  const executeScroll = () => myRef.current.scrollIntoView();

  useMountEffect(executeScroll); // Scroll on mount
  return (
    <>
      <div ref={myRef} className="sticky-top">
        <div className="right-nav-details my-5 pt-4">
          <ul>
            <li>highlights</li>
            <li>Trek Videos</li>
            <li>Expert Speak</li>
            <li>Photo Gallery</li>
          </ul>
        </div>
        <div className="right-nav-details sec-2 my-3">
          <ul>
            <li>Know Your Trek</li>
            <li>get ready for your trek</li>
            <li>why trek with indiahikes</li>
            <li onClick={executeScroll}>view dates / register</li>
          </ul>
        </div>
        <style jsx global>
          {trekStyle}
        </style>
      </div>
    </>
  );
};

export default Sidebar;
