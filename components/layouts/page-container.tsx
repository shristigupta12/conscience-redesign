import { cn } from "@/lib/utils";

const PageContainer: React.FunctionComponent<
  React.HTMLAttributes<HTMLDivElement>
> = ({ className, children, ...props }) => {
  return (
    <div className={cn('pt-30 pb-[300px] max-md:pb-24', className)} {...props}>
      {children}
    </div>
  );
};

export default PageContainer;