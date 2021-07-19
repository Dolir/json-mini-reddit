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
          speed={2}
          width={570}
          height={180}
          viewBox="0 0 570 180"
          backgroundColor={darkmode.darkmode ? "#252525" : "#f3f3f3"}
          foregroundColor={darkmode.darkmode ? "#ACACAC" : "#ecebeb"}
        >
          <rect x="11" y="31" rx="5" ry="5" width="59" height="30" />
          <rect x="94" y="10" rx="5" ry="5" width="83" height="12" />
          <rect x="90" y="33" rx="5" ry="5" width="428" height="53" />
          <rect x="88" y="107" rx="5" ry="5" width="181" height="20" />
          <rect x="329" y="110" rx="5" ry="5" width="66" height="17" />
          <rect x="493" y="107" rx="5" ry="5" width="30" height="19" />
        </ContentLoader>
      </div>
    );
  }
  return (
    <div className="postBox">
      <ContentLoader
        speed={2}
        width={570}
        height={500}
        viewBox="0 0 570 500"
        backgroundColor={darkmode.darkmode ? "#252525" : "#f3f3f3"}
        foregroundColor={darkmode.darkmode ? "#ACACAC" : "#ecebeb"}
      >
        <rect x="11" y="31" rx="5" ry="5" width="59" height="30" />
        <rect x="94" y="10" rx="5" ry="5" width="83" height="12" />
        <rect x="90" y="33" rx="5" ry="5" width="428" height="18" />
        <rect x="91" y="63" rx="5" ry="5" width="428" height="10" />
        <rect x="87" y="90" rx="5" ry="5" width="442" height="351" />
        <rect x="91" y="457" rx="5" ry="5" width="181" height="20" />
        <rect x="332" y="460" rx="5" ry="5" width="66" height="17" />
        <rect x="496" y="457" rx="5" ry="5" width="30" height="19" />
      </ContentLoader>
    </div>
  );
}

export default LoadingBlock;
