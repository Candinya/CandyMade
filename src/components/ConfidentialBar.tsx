interface ConfidentialBarProps {
  className: string;
}
const ConfidentialBar = ({ className }: ConfidentialBarProps) => (
  <div
    className={`absolute text-black bg-yellow-400 border-y-4 border-black border-dashed font-semibold ${className}`}
  >
    CONFIDENTIAL
  </div>
);

export default ConfidentialBar;
