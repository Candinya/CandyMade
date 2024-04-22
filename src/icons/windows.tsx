import type { SVGProps } from "react";

const Windows = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="48"
    height="48"
    viewBox="0 0 48 48"
    {...props}
  >
    <g>
      <rect x="3" y="3" fill="#43A6DD" width="20" height="20"></rect>
      <rect x="25" y="3" fill="#43A6DD" width="20" height="20"></rect>
      <rect x="3" y="25" fill="#43A6DD" width="20" height="20"></rect>
      <rect x="25" y="25" fill="#43A6DD" width="20" height="20"></rect>
    </g>
  </svg>
);

export default Windows;
