import { FaRegBell } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import Button from "../Button";
import type { MergedButtonProps } from "@/types/type";

function Header() {
  const navigate = useNavigate()
  const logo = <img src="/logo-p.png" loading="lazy" alt="logo" className="size-5" width={'20px'} height={'20px'}/>
  const bellIcon = <FaRegBell />
  const buttonsProp:MergedButtonProps[]  = [
    {
      label: "Log in",
      className: `border-[#006647] rounded-[10px] w-[70px] hover:bg-[#006647] hover:text-white`,
      onclick: ()=>navigate('/'),
      variant: "ghost"
    },
    {
      label: "Sign up",
      className: "bg-[#006647] rounded-[10px] w-[80px] text-white",
      onclick: ()=>navigate('/'),
      variant: "ghost"
    }
]

  return (
      <div className="w-full h-[90px] border-[1px] backdrop-blur-xs">
        <div className="flex mx-auto w-[95%] justify-center pt-7 gap-5">
          <div className="inline-flex justify-between items-center w-2/3">
            <div className="flex gap-14 items-center">
              <p className="nunito font-bold text-[22px] flex items-center gap-1">
                <span className="border-[2px] rounded-full border-[#006647]">{logo}</span>Portora</p>
              <p className="nunito">Explore</p>
              <div className="relative border-[1px] border-slate-500 rounded-[30px] w-[433px] h-[38px] pl-2 flex items-center">
                  <input type="text" name="search" id="search" className="text-[#1A1A1A] text-[14px] font-medium pl-10"
                  placeholder="Search Creatives work..."/>
                  <IoIosSearch className="absolute left-4 "/>
              </div>
            </div>
          </div>
          <div className="flex justify-between items-center w-1/3 pl-4">
            <div className="flex gap-8 items-center">
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
