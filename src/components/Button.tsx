import type { JSX } from "react";
import { Button as CustomButton } from "@/components/ui/button"
import type { MergedButtonProps } from "@/types/type";

function Button({label, className, onclick, variant= "default"}: MergedButtonProps): JSX.Element{
  return (
    <CustomButton className={`border-[1px] px-2 py-1 text-sm roboto ${className}`} 
    onClick={onclick} variant={variant}>{label}</CustomButton>
  )
}

export default Button
