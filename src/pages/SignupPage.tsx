import { useAuthStore } from '@/stores/authStore';
import Button from "@/components/Button"
import Input from "@/components/Input"
import { inputs } from "@/consts/inputs"
import {AuthButtons} from '@/consts/button'
import { logo } from '@/consts/logo';

function SignupPage() {
  const { message, action} = useAuthStore();

  return (
    <div className="text-center flex flex-col justify-center items-center relative h-screen bg-slate-300">
      <p className="nunito font-bold text-[12px] md:text-[22px] flex items-center gap-2 md:gap-1 absolute top-5 left-5">
        <span className="border-[2px] rounded-full border-[#006647] text-[9px] md:text-sm">{logo}</span>Portora
      </p>
      <div className="border-[1px] bg-[#01c9ab] p-5 rounded-3xl shadow-lg shadow-[#01c9ab6b]">
        <h1 className="text-4xl exo font-bold text-slate-200">Sign Up</h1>
        <div className="pt-8 w-[265px] sm:w-[460px] ">
          <div className='border-[1px] pt-2 rounded-2xl border-slate-400'>
            <form action="" method="post" className="flex flex-col justify-center items-center ">
                {inputs.map((input, i)=>(
                    <div key={i} className="border-[1px] w-1/2 mb-2 rounded-[12px] bg-slate-300 flex items-center relative">
                        <Input {...input}/> <span className='absolute right-4'>{input.icon}</span>
                    </div>
                ))}
            </form>
          </div>
          <p className='font-medium roboto text-[13px]'>OR</p>
          <div className="flex flex-col justify-center items-center pt-2.5">
            {AuthButtons.map((buttons, i)=>(
              <div className="flex justify-between items-center mb-1 relative" key={i}>
                <Button {...buttons} />
                <span className='absolute right-10'>{buttons.icon}</span>
              </div>
            ))}
          </div>
          <p className='text-xs text-black mt-1'>Already {message}? <span className='text-[#d7f9e1] cursor-pointer'>{action}</span></p>
        </div>
        <h6 className='absolute bottom-5 left-0 text-xs sm:text-sm text-center w-full font-normal tracking-wide '>
              <span className='text-[#666868] '>By signing up, you agree to our </span>
              Terms & Conditions <span className='text-[#8A9191] '>and </span>Privacy Policy.
        </h6>
      </div>
    </div>
  )
}

export default SignupPage
