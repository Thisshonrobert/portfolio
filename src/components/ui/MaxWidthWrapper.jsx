import React from "react";
import { cn } from "@/lib/utils";


const MaxWidthWrapper = ({ className, children }) => {
  return (
    <div className={cn("pt-10 mx-auto h-full w-full", className)}>
      {children}
    </div>
  );
};

export default MaxWidthWrapper;
