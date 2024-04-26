interface BigLinkButtonProps {
  href: string;
  text: string;
  className?: string;
}
const BigLinkButton = ({ href, text, className }: BigLinkButtonProps) => (
  <a
    href={href}
    target="_blank"
    className={`text-white dark:text-slate-800 font-semibold text-lg px-4 py-2 rounded-lg text-center transition-colors ${className}`}
  >
    {text}
  </a>
);

export default BigLinkButton;
