import type { SVGProps } from "react";

const AppStore = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    {...props}
  >
    <g fill="currentColor" strokeLinecap="round" strokeLinejoin="round">
      <rect
        x="2"
        y="2"
        width="8"
        height="8"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      ></rect>
      <rect
        x="14.464"
        y="2.464"
        width="7.071"
        height="7.071"
        transform="translate(1.03 14.485) rotate(-45)"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      ></rect>
      <rect
        x="14"
        y="14"
        width="8"
        height="8"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      ></rect>
      <rect
        x="2"
        y="14"
        width="8"
        height="8"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      ></rect>
    </g>
  </svg>
);

export default AppStore;
