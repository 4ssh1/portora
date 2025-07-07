import { FaRegBell } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";

function Header() {
  const logo = <img src="/logo-p.png" alt="logo" className="size-5" />
  const bellIcon = <FaRegBell />
  const rightInfo: string[] = ["Log in", "Sign up"]

  return (
      <div className="flex w-full items-center pt-7">
        <div className="inline-flex justify-between items-center w-2/3">
          <div className="flex gap-14 items-center">
            <p className="nunito font-bold text-[23px] flex items-center gap-1"><span>{logo}</span>Portora</p>
            <p className="nunito text-[19px] font-semibold">Explore</p>
            <div className="relative border-[1px] border-slate-500 rounded-[30px] w-[513px] h-[48px] p-20px flex items-center">
                <input type="text" name="search" id="search" className="text-[#1A1A1A] text-[16px] font-medium pl-10" 
                placeholder="Search Creatives work..."/>
                <IoIosSearch className="absolute left-4"/>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center w-1/3 pl-4">
          <div className="flex gap-8 items-center">
            {bellIcon}
            {rightInfo.map(info=>(
              <button>{info}</button>
              ))}
          </div>
        </div>
      </div>
  )
}

export default Header
