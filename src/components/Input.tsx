import type { InputType } from "@/interfaces/interface"

function Input({type, placeholder, className, name, value, onChange}: InputType) {
  return (
    <input type={type} placeholder={placeholder} className={`w-full outline-none px-4 py-1.5 text-[11.5px] font-medium ${className}`} 
    name={name} value={value} onChange={onChange}/>
  )
}

export default Input

