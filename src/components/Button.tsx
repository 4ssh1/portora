import type { JSX } from "react";
import { Button as CustomButton } from "@/components/ui/button"
import type { MergedButtonProps } from "@/types/type";

function Button({label, className, onclick, variant= "default"}: MergedButtonProps): JSX.Element{
  return (
    <CustomButton className={`border-[1px] md:px-2 md:py-1 md:text-sm roboto bg-white text-black ${className}`} 
    onClick={onclick} variant={variant}>{label}</CustomButton>
  )
}

export default Button
