import type { MergedButtonProps} from "@/types/type";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa6";

export const AuthButtons: MergedButtonProps[] = [
    {
        label: "Continue with Google",
        icon:   <FcGoogle />,
        onclick: ()=> Math.random(),
        className: "w-[343px] sm:w-[302px] h-[33px] bg-white text-[#095256] px-6"
    },
    {
        label: "Continue with Github",
        icon: <FaGithub />,
        onclick: ()=> Math.random(),
        className: "w-[343px] sm:w-[302px] h-[33px] bg-[#AFFC41] text-[#095256] px-6"
    },
]

export  const buttonsProp:MergedButtonProps[]  = [
    {
      label: "Log in",
      className: `border-[#006647] rounded-[10px] w-[35px] text-[8px] md:h-[35px] h-6 md:text-sm md:w-[70px] hover:bg-[#006647] hover:text-white`,
      variant: "ghost"
    },
    {
      label: "Sign up",
      className: "bg-[#006647] rounded-[10px] w-[40px] md:w-[80px] h-6 text-white text-[8px] md:h-[35px] md:text-sm",
      variant: "ghost"
    }
]

export const heroButtons:MergedButtonProps[]  = [
        {
          label: "Explore Portfolios",
          className: `border-[#00A991] rounded-[10px] w-[140px] 
          hover:bg-[#00A991] hover:text-white transition-all duration-300 ease-in-out `,
          variant: "ghost"
        },
        {
          label: "Showcase Your Work",
          className: "bg-[#00A991] rounded-[10px] w-[160px] text-white ease-in-out transition-all duration-300",
          variant: "ghost"
        }
    ]

