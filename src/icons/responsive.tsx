import type { SVGProps } from "react";

const Responsive = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="48"
    height="48"
    viewBox="0 0 48 48"
    {...props}
  >
    <g fill="currentColor" strokeLinecap="round" strokeLinejoin="round">
      <polyline
        fill="none"
        stroke="currentColor"
        strokeWidth="4"
        points="40,9 46,9 46,38 19,38 "
      ></polyline>
      <polyline
        fill="none"
        stroke="currentColor"
        strokeWidth="4"
        points="8,38 2,38 2,9 23,9 "
      ></polyline>
      <path
        data-color="color-2"
        fill="none"
        stroke="currentColor"
        strokeWidth="4"
        d="M39,23H24 c-0.552,0-1-0.448-1-1V4c0-0.552,0.448-1,1-1h15c0.552,0,1,0.448,1,1v18C40,22.552,39.552,23,39,23z"
      ></path>
      <path
        data-color="color-2"
        fill="none"
        stroke="currentColor"
        strokeWidth="4"
        d="M18,45H9 c-0.552,0-1-0.448-1-1V30c0-0.552,0.448-1,1-1h9c0.552,0,1,0.448,1,1v14C19,44.552,18.552,45,18,45z"
      ></path>
      <line
        fill="none"
        stroke="currentColor"
        strokeWidth="4"
        x1="23"
        y1="43"
        x2="29"
        y2="43"
      ></line>
      <line
        data-color="color-2"
        fill="none"
        stroke="currentColor"
        strokeWidth="4"
        x1="13"
        y1="40"
        x2="14"
        y2="40"
      ></line>
      <line
        data-color="color-2"
        fill="none"
        stroke="currentColor"
        strokeWidth="4"
        x1="30"
        y1="18"
        x2="33"
        y2="18"
      ></line>
    </g>
  </svg>
);

export default Responsive;
