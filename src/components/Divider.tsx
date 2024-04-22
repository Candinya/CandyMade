interface DividerProps {
  label?: string;
  my?: string;
}
const Divider = ({ label, my = "my-6" }: DividerProps) => (
  <div className={`relative ${my}`}>
    <div className="absolute inset-0 flex items-center" aria-hidden="true">
      <div className="w-full border-t border-dashed border-gray-300" />
    </div>
    {label && (
      <div className="relative flex justify-center">
        <span className="px-2 text-md bg-white text-gray-500">{label}</span>
      </div>
    )}
  </div>
);

export default Divider;
