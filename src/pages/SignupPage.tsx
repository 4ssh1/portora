// import Button from "@/components/Button"
import Input from "@/components/Input"
import { inputs } from "@/consts/inputs"

function SignupPage() {

  return (
    <div className="pt-20 text-center">
      <h1 className="">Sign Up</h1>
      <div>
        <form action="" method="post" className="flex flex-col justify-center items-center pt-10">
            {inputs.map((input, i)=>(
                <div key={i} className="border-[1px] w-1/2 pb-2">
                    <Input {...input}/>
                </div>
            ))}
        </form>
        <p>OR</p>
      </div>
    </div>
  )
}

export default SignupPage
