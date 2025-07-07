import type { JSX } from "react";
import type { ButtonType } from "@/types/type";

function Button({label, style, onclick}: ButtonType): JSX.Element{
  return (
    <button className={style} onClick={onclick}>{label}</button>
  )
}

export default Button
