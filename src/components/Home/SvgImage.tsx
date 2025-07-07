import { useState } from "react";


function SvgImage() {
    const [isToggled, setIsToggled] = useState(false);

  return (
    <div className="relative w-24 h-24 cursor-pointer" onClick={() => setIsToggled(!isToggled)}>
        <div className={`absolute inset-0 transition-all duration-300 ease-in-out
            ${isToggled ? "opacity-0 scale-0" : "opacity-100 scale-100"}`}>
            {/* Image 1 */}
        </div>
        <div className={`absolute inset-0 transition-all duration-300 ease-in-out 
            ${isToggled ? "opacity-100 scale-100" : "opacity-0 scale-0"}`}>
            {/* Image 2 */}
        </div>
    </div>
  )
}

export default SvgImage



