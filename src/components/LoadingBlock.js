import React from "react";
import ContentLoader from "react-content-loader";
import { selectDarkMode } from "../features/darkmode/darkmode";
import { useSelector } from "react-redux";
function LoadingBlock({ messageType }) {
  const darkmode = useSelector(selectDarkMode);

  if (messageType) {
    return (
      <div className="postBox">
        <ContentLoader
          className="contentLoader"
          speed={2}
          width={1000}
          height={200}
          viewBox="0 0 1000 200"
          backgroundColor={darkmode.darkmode ? "#252525" : "#f3f3f3"}
          foregroundColor={darkmode.darkmode ? "#ACACAC" : "#ecebeb"}
        >
          <rect x="11" y="31" rx="5" ry="5" width="59" height="30" />
          <rect x="94" y="10" rx="5" ry="5" width="83" height="12" />
          <rect
            id="rect2"
            x="87"
            y="34"
            rx="5"
            ry="5"
            width="879"
            height="91"
          />
          <rect
            id="rect3"
            x="89"
            y="150"
            rx="5"
            ry="5"
            width="181"
            height="20"
          />
          <rect x="566" y="149" rx="5" ry="5" width="66" height="17" />
          <rect x="927" y="160" rx="5" ry="5" width="30" height="19" />
        </ContentLoader>
      </div>
    );
  }
  return (
    <div className="postBox">
      <ContentLoader
        className="contentLoader"
        speed={2}
        width={1000}
        height={500}
        viewBox="0 0 1000 500"
        backgroundColor={darkmode.darkmode ? "#252525" : "#f3f3f3"}
        foregroundColor={darkmode.darkmode ? "#ACACAC" : "#ecebeb"}
      >
        <rect x="11" y="31" rx="5" ry="5" width="59" height="30" />
        <rect x="94" y="10" rx="5" ry="5" width="83" height="12" />
        <rect
          id="rect23"
          x="87"
          y="34"
          rx="5"
          ry="5"
          width="879"
          height="405"
        />
        <rect x="82" y="468" rx="5" ry="5" width="181" height="20" />
        <rect x="559" y="467" rx="5" ry="5" width="66" height="17" />
        <rect x="920" y="460" rx="5" ry="5" width="30" height="19" />
      </ContentLoader>
    </div>
  );
}

export default LoadingBlock;
