import type { MergedButtonProps } from "@/types/type"
import { useNavigate } from "react-router-dom"
import Button from "../Button"

function Hero() {
     const navigate = useNavigate()
     const buttonsProp:MergedButtonProps[]  = [
        {
          label: "Explore Portfolios",
          className: `border-[#00A991] rounded-[10px] w-[140px] 
          hover:bg-[#00A991] hover:text-white transition-all duration-300 ease-in-out `,
          onclick: ()=>navigate('/'),
          variant: "ghost"
        },
        {
          label: "Showcase Your Work",
          className: "bg-[#00A991] rounded-[10px] w-[160px] text-white ease-in-out transition-all duration-300",
          onclick: ()=>navigate('/'),
          variant: "ghost"
        }
    ]

  return (
    <div className="flex py-10 bg-[#eaf8f369]">
      <div className="flex flex-col gap-8 justify-center w-1/2 items-center pl-6">
          <div>
              <div>
                <p className="text-[14px] exo font-bold">Get Hired Fast</p>
                <h1 className="text-[40px] exo font-bold max-w-96 leading-13">
                    <span className="text-[#00A991]">Showcase</span> Your Creativity, Get Discovered!</h1>
                <p className="text-lg pt-3">Upload your portfolio, share your work, and connect with other creatives.</p>
              </div>
              <div className="flex gap-4 pt-8">
                {buttonsProp.map((prop, index)=>(
                    <Button {...prop} key={index}/>
                ))}
              </div>
          </div>
      </div>
      <div>

      </div>
    </div>
  )
}

export default Hero
