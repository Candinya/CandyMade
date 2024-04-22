import type { SVGProps } from "react";

const PCMonitor = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    {...props}
  >
    <g fill="currentColor" strokeLinecap="round" strokeLinejoin="round">
      <line
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        x1="12"
        y1="22"
        x2="12"
        y2="18"
      ></line>
      <line
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        x1="6"
        y1="22"
        x2="18"
        y2="22"
      ></line>
      <rect
        x="1"
        y="2"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        width="22"
        height="16"
      ></rect>
    </g>
  </svg>
);

export default PCMonitor;
