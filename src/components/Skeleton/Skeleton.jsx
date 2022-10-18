import React from "react";
import ContentLoader from "react-content-loader";

const Skeleton = (props) => (
  <ContentLoader
    speed={2}
    width={280}
    height={480}
    viewBox="0 0 280 480"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="0" y="272" rx="10" ry="10" width="260" height="35" />
    <rect x="0" y="328" rx="10" ry="10" width="247" height="92" />
    <circle cx="125" cy="125" r="125" />
    <rect x="2" y="438" rx="15" ry="15" width="91" height="34" />
    <rect x="151" y="437" rx="15" ry="15" width="91" height="34" />
  </ContentLoader>
);

export default Skeleton;
