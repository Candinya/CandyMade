interface ControlDotsProps {
  isActive: boolean;
  activate: () => void;
}

const ControlDots = ({ isActive, activate }: ControlDotsProps) => (
  <button
    type="button"
    className={`w-5 h-3 rounded-lg transition-colors ${isActive ? "bg-white/60" : "bg-white/30"} hover:bg-white/50`}
    onClick={activate}
  />
);

export default ControlDots;
