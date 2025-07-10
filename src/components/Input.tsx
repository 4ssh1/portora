import type { inputType } from "@/interfaces/interface"

function Input({type, placeholder, className, name, value}: inputType) {
  return (
    <input type={type} placeholder={placeholder} className={`w-full ${className}`} name={name} value={value}/>
  )
}

export default Input

