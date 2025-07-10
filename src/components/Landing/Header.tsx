import { FaRegBell } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import Button from "../Button";
import type { MergedButtonProps } from "@/types/type";

function Header() {
  const navigate = useNavigate()
  const logo = <img src="/logo-p.png" loading="lazy" alt="logo" className="size-2 md:size-5"/>
  const bellIcon = <FaRegBell className="size-2 md:size-5"/>
  const buttonsProp:MergedButtonProps[]  = [
    {
      label: "Log in",
      className: `border-[#006647] rounded-[10px] w-[35px] text-[8px] md:h-[35px] h-6 md:text-sm md:w-[70px] hover:bg-[#006647] hover:text-white`,
      onclick: ()=>navigate('/'),
      variant: "ghost"
    },
    {
      label: "Sign up",
      className: "bg-[#006647] rounded-[10px] w-[40px] md:w-[80px] h-6 text-white text-[8px] md:h-[35px] md:text-sm",
      onclick: ()=>navigate('/sign-in'),
      variant: "ghost"
    }
]

  return (
      <div className="w-full h-[45px] md:h-[90px] border-[1px] backdrop-blur-xs">
        <div className="flex mx-auto w-[95%] justify-center pt-2 md:pt-7 gap-3">
          <div className="inline-flex justify-between items-center w-2/3">
            <div className="flex gap-2 md:gap-14 items-center">
              <p className="nunito font-bold text-[12px] md:text-[22px] flex items-center gap-2 md:gap-1">
                <span className="border-[2px] rounded-full border-[#006647] text-[9px] md:text-sm">{logo}</span>Portora</p>
              <p className="nunito text-[10px] md:text-[15px]">Explore</p>
              <div className="relative border-[1px] border-slate-500 rounded-[30px] md:w-[433px] w-[120px] h-[20px] md:h-[38px] pl-2 flex items-center">
                  <input type="text" name="search" id="search" className="text-[#1A1A1A] md:text-[14px] text-[7px] font-medium px-5 md:pl-10 outline-none w-full"
                  placeholder="Search Creatives work..."/>
                  <IoIosSearch className="absolute left-2 md:left-4 size-2 md:size-5"/>
              </div>  
            </div>
          </div>
          <div className="flex justify-between items-center w-1/3 pl-4">
            <div className="flex gap-2 md:gap-8 items-center">
              {bellIcon}
              {buttonsProp.map((props, ind)=>(
                <Button {...props} key={ind}/>
              ))}
            </div>
          </div>
        </div>
      </div>
  )
}

export default Header
