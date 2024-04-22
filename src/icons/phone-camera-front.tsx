import type { SVGProps } from "react";

const PhoneCameraFront = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    {...props}
  >
    <g
      className="nc-icon-wrapper"
      fill="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle
        data-color="color-2"
        data-stroke="none"
        cx="12"
        cy="5"
        r="1"
        fill="currentColor"
        stroke="none"
      ></circle>
      <path
        d="M18,23H6a2,2,0,0,1-2-2V3A2,2,0,0,1,6,1H18a2,2,0,0,1,2,2V21A2,2,0,0,1,18,23Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      ></path>
    </g>
  </svg>
);

export default PhoneCameraFront;
