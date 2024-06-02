import { cn } from "../../lib/utils";

export default function PageDescription({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) {
  return <p className={cn("text-lg text-slate-500", className)}>{children}</p>;
}
