import { cn } from "@/lib/utils";

const SectionContainer: React.FunctionComponent<
  React.HTMLAttributes<HTMLDivElement>
> = ({ className, children, ...props }) => {
  return (
    <div className={cn('py-12', className)} {...props}>
      {children}
    </div>
  );
};

export default SectionContainer;