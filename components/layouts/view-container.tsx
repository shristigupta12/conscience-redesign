import { cn } from "@/lib/utils";

function ViewContainer({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn('w-[1250px] max-2xl:w-[1200px] max-xl:w-[920px] max-lg:w-[720px] max-md:w-[600px] max-sm:w-[440px] box-border mx-auto', className)} {...props}>
      {children}
    </div>
  )
}

export default ViewContainer