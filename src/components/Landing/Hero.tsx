import Button from "../Button"
import SvgImage from "./SvgImage"
import { heroButtons } from "@/consts/button"
import { useNavigate } from "react-router-dom"

function Hero() {
  const navigate = useNavigate()
  const btnOnclick: (()=>void)[] = [
    ()=>navigate('/'),
    ()=>navigate('/'),
  ]

  return (
    <div className="flex py-10 bg-[#d8f3ea] justify-between">
      <div className="flex flex-col gap-8 justify-center w-1/2 items-center">
          <div>
              <div>
                <p className="text-[10px] md:text-[14px] exo font-bold">Get Hired Fast</p>
                <h1 className="text-[20px] md:text-[40px] exo font-bold max-w-48 md:max-w-96 leading-5 md:leading-13">
                    <span className="text-[#00A991]">Showcase</span> Your Creativity, Get Discovered!</h1>
                <p className="text-[10px] md:text-[16px] pt-3">Upload your portfolio, share your work, and connect with other creatives.</p>
              </div>
              <div className="flex gap-4 pt-8">
                {heroButtons.map((prop, index)=>(
                    <Button {...prop} key={index} onclick={btnOnclick[index]}/>
                ))}
              </div>
          </div>
      </div>
      <div className="w-1/2 pr-10">
        <SvgImage />
      </div>
    </div>
  )
}

export default Hero
