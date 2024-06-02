import { cn } from "../lib/utils";

export default function ToolbarButton({
  children,
  className,
  onClick,
}: {
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
}) {
  return (
    <button
      className={cn(
        "flex flex-row items-center gap-2 rounded-md bg-red-500 px-4 py-2 text-white shadow transition-all hover:brightness-95 active:scale-95 active:shadow-none",
        className
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
