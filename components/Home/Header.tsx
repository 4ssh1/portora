import { FaRegBell } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";

function Header() {
  const logo = <img src="/logo-p.png" alt="logo" className="size-5" />
  const bellIcon = <FaRegBell />
  const rightInfo: string[] = ["Log in", "Sign up"]

  return (
    <div className="flex">
      <div className="flex justify-around w-full">
        <div className="inline-flex justify-between items-center w-2/3">
          <div>
            <p className="nunito font-bold text-[23px]"><span>{logo}</span>Portora</p>
            <p className="nunito text-[19px] font-semibold">Explore</p>
            <div className="relative border-[1px] border-slate-500">
                <input type="text" name="search" id="search" className="text-[#E6E6E6]" placeholder="Search Creatives work..."/>
                <IoIosSearch className="absolute"/>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center w-1/3">
          <div>
            {bellIcon}
            {rightInfo.map(info=>(
              <button>{info}</button>
              ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
