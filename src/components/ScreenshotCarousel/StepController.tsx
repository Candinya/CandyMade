interface StepperProps {
  buttonClassName: string;
  svgPath: string;
  onClick: () => void;
}
const Stepper = ({ buttonClassName, svgPath, onClick }: StepperProps) => (
  <button
    type="button"
    className={`
      absolute flex items-center justify-center h-full px-4 cursor-pointer top-0 ${buttonClassName}
    `}
    onClick={onClick}
  >
    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 transition-colors group-hover:bg-white/50">
      <svg
        className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 6 10"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d={svgPath}
        />
      </svg>
    </span>
  </button>
);

interface StepControllerProps {
  setDelta: (delta: number) => void;
}

const StepController = ({ setDelta }: StepControllerProps) => (
  <>
    <Stepper
      buttonClassName={"start-0"}
      svgPath={"M5 1 1 5l4 4"}
      onClick={() => setDelta(-1)}
    />
    <Stepper
      buttonClassName={"end-0"}
      svgPath={"m1 9 4-4-4-4"}
      onClick={() => setDelta(1)}
    />
  </>
);

export default StepController;
